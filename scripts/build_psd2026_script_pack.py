"""Create rehearsal manuscripts from the reviewed, slide-indexed source document.

Run from the repository root. This script only writes the two rehearsal files.
"""
from pathlib import Path
import re

OUT = Path('output/presentation')
SOURCE = OUT / 'Kikuchi_PSD2026_1_scripts_and_figure_options.md'
ORDER = [1, 2, 3, 4, 5, 6, 7, 8, 11, 9, 10, 13, 12, 15, 14, 16, 17]

source = SOURCE.read_text(encoding='utf-8')
heads = list(re.finditer(r'^## (\d{2})　(.+)$', source, re.M))
assert len(heads) == 17
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

for variant in ('A', 'B'):
    total = sum(word_count(records[n]['scripts'][variant]) for n in ORDER)
    mode = '順に説明する標準案' if variant == 'A' else '具体例・問いかけを強める別案'
    text = [f'# 発表練習用原稿{variant}：{mode}', '',
            '参照：Kikuchi_PSD2026_1.pptx。原稿の段落は、そのまま話す英語。見出しと時間の説明は読み上げない。', '',
            'ページは元の番号を保ち、説明の順だけを並べ替えている。元ファイル自体は変更していない。', '',
            '**推奨順：** ' + '、'.join(map(str, ORDER)) + '。', '',
            f'本文は約{total:,}語。毎分110〜120語なら読み上げ約{total/120:.1f}〜{total/110:.1f}分。図を示す間と切り替えを合計60〜90秒取ると、約{total/120+1:.1f}〜{total/110+1.5:.1f}分。', '',
            'AとBは代替案。全体を両方続けて読むものではない。図案と日本語の意図・注意点は[原稿と図案の比較資料](Kikuchi_PSD2026_1_scripts_and_figure_options.md)を参照。', '',
            '| 話す順 | 元ページ | 内容 | 語数 | 読み上げ秒数（毎分120語） |',
            '|---:|---:|---|---:|---:|']
    for i, n in enumerate(ORDER, 1):
        count = word_count(records[n]['scripts'][variant])
        text.append(f"| {i} | {n} | {records[n]['title']} | {count} | {round(count/2)} |")
    for i, n in enumerate(ORDER, 1):
        text.extend(['', '---', '', f"## {i:02d}　元スライド{n:02d}：{records[n]['title']}", '', records[n]['scripts'][variant]])
    text.extend(['', '---', '', '## 練習時の確認', '',
                 '- 2・3枚目は合わせて短い一つの物語として話す。冒頭のfictionalを省かない。',
                 '- 10枚目はSynthesis、Baseの順に図を指す。棒の全数値を追加で読み上げない。',
                 '- 12枚目はIRRの基準1を示してから0.61を指す。各行は別モデルの比較。',
                 '- 15枚目はinteractionとcombinedを区別して発音する。',
                 '- 時間を短縮する場合は3を2へ、11を8へ統合し、13・15を補足に回す。削除後のつなぎも声に出して確認する。', ''])
    dest = OUT / f'Kikuchi_PSD2026_1_rehearsal_{variant}.md'
    dest.write_text('\n'.join(text), encoding='utf-8')
    print(f'{dest}: {total} words, 17 slides')
