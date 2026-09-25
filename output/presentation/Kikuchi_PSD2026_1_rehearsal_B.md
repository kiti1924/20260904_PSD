# 発表練習用原稿B：具体例・問いかけを強める別案

参照：Kikuchi_PSD2026_1.pptx。原稿の段落は、そのまま話す英語。見出しと時間の説明は読み上げない。

**本編10分＋質疑5分。** 参照PPTXの表示順をそのまま使う。本編は10枚、元17はQ&A画面。非表示の元3・6・9・11・13・15は読み上げない。元ファイル自体は変更していない。

**本編順：** 1、2、4、5、7、8、10、12、14、16。その後に元17を表示して質疑へ。

本編は約802語（Q&Aの質問募集を除く）。毎分110〜120語なら発話のみ約6.7〜7.3分。残りを図の説明の間・切り替え・余裕に充てる。10分を超えないよう、練習では9分40秒前後を目標にする。

AとBは代替案。全体を両方続けて読むものではない。図案と質疑用図表は[本編10分・質疑5分の構成案](Kikuchi_PSD2026_1_10min_plan.md)を参照。

| 本編順 | 元ページ | 内容 | 語数 | 時間枠 | 終了目安 |
|---:|---:|---|---:|---:|---:|
| 1 | 1 | Patterns Without Source | 27 | 0:15 | 0:15 |
| 2 | 2 | A fictional scenario | 69 | 0:45 | 1:00 |
| 3 | 4 | Fiction → real problem | 60 | 0:40 | 1:40 |
| 4 | 5 | Big Problem | 55 | 0:30 | 2:10 |
| 5 | 7 | Minimum PWS Cup mechanics | 89 | 1:15 | 3:25 |
| 6 | 8 | Reconstruction | 105 | 1:30 | 4:55 |
| 7 | 10 | H1 result | 113 | 1:30 | 6:25 |
| 8 | 12 | H2 result | 120 | 1:45 | 8:10 |
| 9 | 14 | Limits | 88 | 1:00 | 9:10 |
| 10 | 16 | Take-away / Ask | 76 | 0:50 | 10:00 |

表の時間枠は発話と図を示す間を含む。語数から機械的に割り当てた読み上げ秒数ではない。


---

## 本編01　元スライド01：Patterns Without Source

Can we learn from a privacy competition without most of its source code? I am Hinata Kikuchi, and this question motivates our analysis of PWS Cup 2025.

---

## 本編02　元スライド02：A fictional scenario

Imagine that you test an anonymized dataset and discover that some individuals can be identified. You report the finding to explain the privacy risk. But the company that released the data faces criticism. Would the next organization want to share its implementation? This is a fictional story. It simply illustrates how a researcher could end up with important outcomes to study, but limited information about the methods behind them.

---

## 本編03　元スライド04：Fiction → real problem

We do not assume that the fictional story explains the competition. The observation is simpler: code disclosure was limited, but descriptions and results were available. A ranking tells us who scored well. Presentations help us understand what they tried. We could link those two sources for twenty teams. This combination makes PWS Cup a useful setting for our research question.

---

## 本編04　元スライド05：Big Problem

The question is how much we can learn when implementations remain mostly hidden. We look for patterns in team scores and in the outcomes of individual attacker-victim pairs. These give us two complementary views of the competition. Our aim is to identify useful hypotheses for further testing, while being explicit about the evidence we lack.

---

## 本編05　元スライド07：Minimum PWS Cup mechanics

Think of one hundred thousand synthetic patient records. A team receives a hidden sample of ten thousand and releases anonymized data together with a prediction model. An attacker sees the population and the releases, then asks: which records were in that hidden sample? The hidden sample is the membership target. The released data and model are possible sources of evidence. Utility scores measure how useful the submissions are, while anonymization scores measure resistance to the observed attacks. These rules let us connect defense choices, attack choices, and their outcomes.

---

## 本編06　元スライド08：Reconstruction

The key step is to turn a presentation into a set of comparable choices. For example, “synthetic” does not automatically mean “built from elsewhere.” Team two generated new records using B as its base, while team eighteen used an alternative base. Both fall into the synthesis category. The attack features require a similar distinction. One feature asks whether the attacker uses the released prediction model. Another asks whether the attacker trains its own membership-scoring model. We applied common definitions across twenty defenders and nineteen attackers. These are reconstructed strategy descriptions, so the coding should not be mistaken for a full inspection of each team's implementation.

---

## 本編07　元スライド10：H1 result

The main pattern is easiest to see in the synthesis row. Teams using synthesis scored higher on both dimensions. The effect sizes are about one point two six for utility and one point zero one for anonymization. Now compare the starting base. Building from elsewhere is more strongly associated with utility than with anonymization. This tells us that different outcomes emphasize different aspects of the design. We used small regression models to check whether the univariate patterns survived consideration of other features. Several did, but the choices overlap. Our conclusion is therefore a pattern worth testing: generation and reconstruction were associated with good outcomes here, without demonstrating that one choice caused the improvement.

---

## 本編08　元スライド12：H2 result

A team ranking hides which attacker succeeded against which defense. H2 uses that pairing information directly. We modeled exposed-record counts for three hundred and sixty-one pairs, accounting for repeated attackers and victims in the standard errors. The figure shows combined estimates when the attacker also uses the released prediction model. For synthesis, the incidence rate ratio is about zero point six one. This means a lower expected count than that model's joint reference. The other three combined estimates are also below one. However, these are separate comparisons, not a universal ranking of methods. The attack-target interactions show that pairing matters, while some interactions involving attacker-trained models do not allow clustered inference. That is why we describe H2 as partially supported.

---

## 本編09　元スライド14：Limits

What can we reasonably take away from these results? We have identified associations that are useful for forming hypotheses. But a successful team may differ from another team in several ways at once, and a presentation may omit implementation details. We therefore cannot say that synthesis alone caused higher scores, or that a release is safe against every possible attack. Twenty teams also limit the precision of the analysis. These constraints do not make the observations useless. They tell us what additional evidence future studies need to collect.

---

## 本編10　元スライド16：Take-away / Ask

We can learn from incomplete descriptions, provided we keep the conclusions within the evidence. My request to competition organizers is to preserve structured information about the methods behind the scores. A short questionnaire could record the main design choices, together with a brief explanation of unusual methods. It would make future reconstruction less dependent on what researchers happen to recover from presentations. That would leave a stronger basis for the next analysis. Thank you for listening.

---

## 質疑5分　元スライド17：Q&A

I welcome your questions, including suggestions on what future competitions should record. The analysis materials are available through the link here.

---

## 練習時の確認

- 元2枚目の1枚で寓話の結末まで話す。冒頭のfictionalを省かない。非表示の元3は開かない。
- 10枚目はSynthesis、Baseの順に図を指す。棒の全数値を追加で読み上げない。
- 12枚目はIRRの基準1を示してから0.61を指す。各行は別モデルの比較。
- 交互作用の詳細、全特徴量の人数、回帰の選択結果は質問が来たときに補足する。
- 本編最後の元16で結論を述べ、10分以内で止める。元17から5分の質疑。
- 質疑用Q1〜Q5は質問に応じて選ぶ。5枚を順に説明しない。
