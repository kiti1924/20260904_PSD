"""Create 10-minute rehearsal manuscripts, respecting the reference's hidden slides.

Run from the repository root. This script only writes the two rehearsal files.
"""
from pathlib import Path
import re
import posixpath
import xml.etree.ElementTree as ET
from zipfile import ZipFile

OUT = Path('output/presentation')
SOURCE = OUT / 'Kikuchi_PSD2026_1_10min_plan.md'
REFERENCE = Path('Kikuchi_PSD2026_1.pptx')
MAIN = [1, 2, 4, 5, 7, 8, 10, 12, 14, 16]
QA = 17
ORDER = MAIN + [QA]
BUDGETS = {1: 15, 2: 45, 4: 40, 5: 30, 7: 75, 8: 90, 10: 90, 12: 105, 14: 60, 16: 50}
assert sum(BUDGETS.values()) == 600

# Read slides in presentation order, rather than assuming XML filenames imply order.
ns = {'p': 'http://schemas.openxmlformats.org/presentationml/2006/main',
      'r': 'http://schemas.openxmlformats.org/officeDocument/2006/relationships'}
visible, hidden = [], []
with ZipFile(REFERENCE) as archive:
    rels = {e.attrib['Id']: e.attrib['Target'] for e in ET.fromstring(
        archive.read('ppt/_rels/presentation.xml.rels'))}
    presentation = ET.fromstring(archive.read('ppt/presentation.xml'))
    for number, entry in enumerate(presentation.find('p:sldIdLst', ns), 1):
        target = rels[entry.attrib['{' + ns['r'] + '}id']]
        part = target.lstrip('/') if target.startswith('/') else posixpath.normpath('ppt/' + target)
        slide = ET.fromstring(archive.read(part))
        destination = hidden if slide.attrib.get('show', '1').lower() in ('0', 'false', 'off') else visible
        destination.append(number)
assert visible == ORDER, f'Review the plan against changed visible slides: {visible}'
assert hidden == [3, 6, 9, 11, 13, 15], hidden

source = SOURCE.read_text(encoding='utf-8')
heads = list(re.finditer(r'^## (\d{2})　(.+)$', source, re.M))
assert len(heads) == len(ORDER)
records = {}
for index, match in enumerate(heads):
    end = heads[index + 1].start() if index + 1 < len(heads) else len(source)
    section = source[match.end():end]
    scripts = {}
    for variant in ('A', 'B'):
        pattern = rf'^### 発表原稿{variant}\n\n(.*?)(?=\n### |\n## |\Z)'
        body = re.search(pattern, section, re.M | re.S)
        assert body, (match[1], variant)
        scripts[variant] = body[1].strip()
    for figure in ('A', 'B'):
        assert f'### 図案{figure}' in section, (match[1], figure)
    records[int(match[1])] = {'title': match[2], 'scripts': scripts}

def word_count(text):
    return len(re.findall(r"\b[\w]+(?:['’-][\w]+)*\b", text))

def mmss(seconds):
    return f'{seconds // 60}:{seconds % 60:02d}'

for variant in ('A', 'B'):
    total = sum(word_count(records[n]['scripts'][variant]) for n in MAIN)
    mode = '順に説明する標準案' if variant == 'A' else '具体例・問いかけを強める別案'
    text = [f'# 発表練習用原稿{variant}：{mode}', '',
            '参照：Kikuchi_PSD2026_1.pptx。原稿の段落は、そのまま話す英語。見出しと時間の説明は読み上げない。', '',
            '**本編10分＋質疑5分。** 参照PPTXの表示順をそのまま使う。本編は10枚、元17はQ&A画面。非表示の元3・6・9・11・13・15は読み上げない。元ファイル自体は変更していない。', '',
            '**本編順：** ' + '、'.join(map(str, MAIN)) + '。その後に元17を表示して質疑へ。', '',
            f'本編は約{total:,}語（Q&Aの質問募集を除く）。毎分110〜120語なら発話のみ約{total/120:.1f}〜{total/110:.1f}分。残りを図の説明の間・切り替え・余裕に充てる。10分を超えないよう、練習では9分40秒前後を目標にする。', '',
            'AとBは代替案。全体を両方続けて読むものではない。図案と質疑用図表は[本編10分・質疑5分の構成案](Kikuchi_PSD2026_1_10min_plan.md)を参照。', '',
            '| 本編順 | 元ページ | 内容 | 語数 | 時間枠 | 終了目安 |',
            '|---:|---:|---|---:|---:|---:|']
    elapsed = 0
    for i, n in enumerate(MAIN, 1):
        count = word_count(records[n]['scripts'][variant])
        elapsed += BUDGETS[n]
        text.append(f"| {i} | {n} | {records[n]['title']} | {count} | {mmss(BUDGETS[n])} | {mmss(elapsed)} |")
    text.extend(['', '表の時間枠は発話と図を示す間を含む。語数から機械的に割り当てた読み上げ秒数ではない。', ''])
    for i, n in enumerate(ORDER, 1):
        title = f"本編{i:02d}　元スライド{n:02d}：{records[n]['title']}" if n != QA else '質疑5分　元スライド17：Q&A'
        text.extend(['', '---', '', f'## {title}', '', records[n]['scripts'][variant]])
    text.extend(['', '---', '', '## 練習時の確認', '',
                 '- 元2枚目の1枚で寓話の結末まで話す。冒頭のfictionalを省かない。非表示の元3は開かない。',
                 '- 10枚目はSynthesis、Baseの順に図を指す。棒の全数値を追加で読み上げない。',
                 '- 12枚目はIRRの基準1を示してから0.61を指す。各行は別モデルの比較。',
                 '- 交互作用の詳細、全特徴量の人数、回帰の選択結果は質問が来たときに補足する。',
                 '- 本編最後の元16で結論を述べ、10分以内で止める。元17から5分の質疑。',
                 '- 質疑用Q1〜Q5は質問に応じて選ぶ。5枚を順に説明しない。', ''])
    dest = OUT / f'Kikuchi_PSD2026_1_rehearsal_{variant}.md'
    dest.write_text('\n'.join(text), encoding='utf-8')
    print(f'{dest}: {total} main-talk words, 10 main slides + Q&A, 600-second main-talk budget')
