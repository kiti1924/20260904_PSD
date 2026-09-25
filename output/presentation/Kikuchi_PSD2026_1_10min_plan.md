# Kikuchi_PSD2026_1：本編10分・質疑5分の構成と原稿

このファイルを、発表構成・原稿・図案の現行版とする。前回の「全17枚を通して話す」構成を訂正した。英語原稿A/Bは代替案であり、両方を読むものではない。図も各ページのA/Bから一つを選ぶ。

## 実際の表示設定と発表の範囲

`Kikuchi_PSD2026_1.pptx`のスライド順と非表示属性を確認した。

- **本編10枚：元1・2・4・5・7・8・10・12・14・16。** 現在の表示順を保つ。
- **Q&A画面：元17。** 本編の後、5分の質疑中に表示する。
- **非表示6枚：元3・6・9・11・13・15。** 発表メモ・代替説明として参照する。本編の枚数・読み上げ時間には含めない。
- **質疑用図表：Q1〜Q5を別途準備する案。** 上記の非表示メモが、そのまま完成した質疑用図表であるとは扱わない。質問に応じて必要な1枚だけを開く。

最終的な発表用ファイルは、**本編10枚＋Q&A画面1枚＋非表示の質疑用図表5枚**を想定する。現在の非表示メモは編集用ファイルに残し、配布・登壇用では質疑用図表と混在させない。今回は原稿と図の文章案を更新し、参照PPTXの表示設定・内容は変更していない。

## 時間配分

| 本編順 | 元ページ | 役割 | 持ち時間 | 終了目安 |
|---:|---:|---|---:|---:|
| 1 | 1 | 表題・研究テーマ | 0:15 | 0:15 |
| 2 | 2 | 寓話を1枚で完結 | 0:45 | 1:00 |
| 3 | 4 | 架空の動機から実際の観測制約へ | 0:40 | 1:40 |
| 4 | 5 | 研究の問いと分析の見取り図 | 0:30 | 2:10 |
| 5 | 7 | コンペの仕組み | 1:15 | 3:25 |
| 6 | 8 | 戦略の符号化と重要な区別 | 1:30 | 4:55 |
| 7 | 10 | H1の主要結果 | 1:30 | 6:25 |
| 8 | 12 | H2の主要結果 | 1:45 | 8:10 |
| 9 | 14 | 結論の限界 | 1:00 | 9:10 |
| 10 | 16 | 問いへの回答・質問票の提案 | 0:50 | 10:00 |
| 質疑 | 17＋必要なQ図表 | 質疑応答 | 5:00 | 15:00 |

時間枠には図を示す間と切り替えを含める。原稿の語数だけでちょうど10分に詰め込まない。練習では**9分40秒前後で本編を終える**ことを目標にし、20秒程度の余裕を確保する。質疑5分は補足スライドを順に説明する時間ではない。

## 本編と補足の切り分け

| 本編に残す | 質問されたときに補足する |
|---|---|
| BaseとSynthesisの違いを一つの例で説明 | 全特徴量の定義と人数、全チームの符号 |
| H1はSynthesisとBaseの主要パターン | 全5特徴量の効果量、回帰モデルの選択結果 |
| H2は共同条件のIRRとpartial support | 各主効果、交互作用、基準カテゴリ、推定不能なSE |
| 20チーム・361組、観測的な分析という制約 | AICc、負の二項、二方向クラスタの詳細 |
| 共通の短い戦略質問票という提案 | 質問票の具体的な設問・選択肢 |

---

## 01　Patterns Without Source

本編1枚目、15秒。元1枚目。

### 発表原稿A

Good afternoon. I am Hinata Kikuchi. Today I will discuss what we can learn from PWS Cup 2025 when most participants do not release their source code.

### 発表原稿B

Can we learn from a privacy competition without most of its source code? I am Hinata Kikuchi, and this question motivates our analysis of PWS Cup 2025.

### 図案A：正式タイトルと著者のみ【推奨】

参照版のタイトル・著者・所属を整理して置く。説明図を加えず、15秒で次へ進む。所属は読み上げない。

### 図案B：研究の問いを小さく添える

正式タイトルの下に“What can we learn without source code?”を1行だけ追加する。表紙で研究の中身まで説明し始めない。

---

## 02　A fictional scenario

本編2枚目、45秒。**非表示の元3枚目にある、寓話の結末までこの1枚に含める。**

### 発表原稿A

Let me begin with a fictional scenario. A company shares an anonymized dataset. A researcher finds a successful re-identification attack and publishes the result. The company then faces reputational damage. Other organizations may become less willing to disclose their methods, making future cases harder to study. This story illustrates a possible disclosure dilemma. It does not establish why any particular organization withheld its code. Now let us turn to the evidence we actually had.

### 発表原稿B

Imagine that you test an anonymized dataset and discover that some individuals can be identified. You report the finding to explain the privacy risk. But the company that released the data faces criticism. Would the next organization want to share its implementation? This is a fictional story. It simply illustrates how a researcher could end up with important outcomes to study, but limited information about the methods behind them.

### 図案A：寓話を3場面で完結させる【推奨】

左から“Data release”“Research finding”“Reputational concern”。右端の下に“Future disclosure?”。原稿に合わせて3場面を順に示す。上端の“A fictional scenario”は常に残す。実在企業名、実在事件の写真、定量的な損失額は使わない。

### 図案B：研究者と組織の関心

左右に“Understand privacy risk”“Manage disclosure consequences”、下に“Implementation details may remain unavailable”。人物の対立より、情報が得られない可能性を示す。最後の一文で次ページの実際の観測へ進む。

---

## 04　Fiction → real problem

本編3枚目、40秒。非表示の元6枚目の「Why PWS Cup?」もここに含める。

### 発表原稿A

In PWS Cup 2025, only two teams released code. However, posters and short talks described their strategies, and the competition published scores and attack outcomes. We could reconstruct strategy features for twenty of the twenty-four teams. These descriptions and outcomes belong to the same competition, under shared evaluation rules. That gives us a concrete setting in which to study what incomplete information can still reveal.

### 発表原稿B

We do not assume that the fictional story explains the competition. The observation is simpler: code disclosure was limited, but descriptions and results were available. A ranking tells us who scored well. Presentations help us understand what they tried. We could link those two sources for twenty teams. This combination makes PWS Cup a useful setting for our research question.

### 図案A：入手できた証拠を対応付ける【推奨】

左に“Posters and talks”、右に“Scores and attack outcomes”、中央に“Same teams”。下に“20 of 24 teams could be coded”。コード公開は“2 teams released code”と小さく添える。架空の物語から実際の観測へ切り替わったことを明瞭にする。

### 図案B：情報の有無の3行表

“Strategy descriptions / Available”“Outcomes / Available”“Most implementations / Unavailable”。表の下に分析対象20チームと書く。コードの欄を“None”にしない。

---

## 05　Big Problem

本編4枚目、30秒。ここでは主題を固定し、非表示の元9枚目の分析へのつながりを一言で取り込む。

### 発表原稿A

Our central question is whether broad descriptions and outcomes can reveal meaningful patterns. We examine it at two levels. First, which strategy features are associated with utility and anonymization scores? Second, how does the pairing of defense and attack strategies relate to exposed-record counts? Both questions are exploratory. I will briefly explain the competition before showing the analysis.

### 発表原稿B

The question is how much we can learn when implementations remain mostly hidden. We look for patterns in team scores and in the outcomes of individual attacker-victim pairs. These give us two complementary views of the competition. Our aim is to identify useful hypotheses for further testing, while being explicit about the evidence we lack.

### 図案A：中心の問いとH1・H2の2行【推奨】

大きく“What can we learn from descriptions and outcomes?”。下に“H1: strategy and team scores”“H2: defense–attack pairing and disclosure”。この段階で統計手法の一覧や式は入れない。

### 図案B：見える情報と見えない実装

“Strategy descriptions”“Implementation mostly hidden”“Measured outcomes”を横並びにする。下に“Patterns worth testing?”。表紙に同型の図を使った場合はAを選ぶ。

---

## 07　Minimum PWS Cup mechanics

本編5枚目、75秒。A・B・C・Dの公開範囲を優先し、細かな採点式は質疑へ。

### 発表原稿A

The competition uses synthetic health data generated by Synthea. The organizer creates a population, A, of one hundred thousand records and gives each team a hidden sample, B, of ten thousand records. The team submits anonymized data, C, and a stroke-risk prediction model, D. The training data for D can differ between teams. Other teams receive A, C, and D, and try to identify which population records belonged to B. This is the membership inference task. The defense receives utility and anonymization scores, while attack scores reflect correct membership inferences. The competition asks participants to take both roles, giving us outcomes for many attacker-victim pairs.

### 発表原稿B

Think of one hundred thousand synthetic patient records. A team receives a hidden sample of ten thousand and releases anonymized data together with a prediction model. An attacker sees the population and the releases, then asks: which records were in that hidden sample? The hidden sample is the membership target. The released data and model are possible sources of evidence. Utility scores measure how useful the submissions are, while anonymization scores measure resistance to the observed attacks. These rules let us connect defense choices, attack choices, and their outcomes.

### 図案A：A・B・C・Dの情報公開図【推奨】

左からA、秘密のB、公開されるCとD。攻撃者が見られるA・C・Dを線で結び、Bへの問い“Which records were in B?”を示す。A=100,000、B=10,000を入れる。CからDを必ず学習するような単一路線にはしない。

### 図案B：防御と攻撃の2段構成

上段に“Defender: submit C and D / utility and anonymization”。下段に“Attacker: observe A, C, D / predict membership in B”。視線を上下に移すだけで説明できる形にする。全体に“Synthetic health data”を明記する。

---

## 08　Reconstruction

本編6枚目、90秒。非表示の元11枚目から、BaseとSynthesisの区別を取り込む。全人数を読み上げない。

### 発表原稿A

We reconstructed the strategies from posters and short talks and encoded them as categorical features. We had twenty teams for the defense analysis and nineteen with usable attack submissions. Two distinctions are especially important. Base describes the starting point for the released records. Synthesis describes whether the method generates new records. Team two used a Gaussian copula with B as its base. Team eighteen used a Synthea-based approach with an alternative base. Both used synthesis. We also coded choices such as noise, optimization, and swapping. On the attack side, using the released prediction model is different from training an attacker-side membership-scoring model. We kept those choices separate. This coding makes the descriptions comparable, while still leaving uncertainty about the exact implementations.

### 発表原稿B

The key step is to turn a presentation into a set of comparable choices. For example, “synthetic” does not automatically mean “built from elsewhere.” Team two generated new records using B as its base, while team eighteen used an alternative base. Both fall into the synthesis category. The attack features require a similar distinction. One feature asks whether the attacker uses the released prediction model. Another asks whether the attacker trains its own membership-scoring model. We applied common definitions across twenty defenders and nineteen attackers. These are reconstructed strategy descriptions, so the coding should not be mistaken for a full inspection of each team's implementation.

### 図案A：実例表と攻撃側の区別【推奨】

中心にTeam 2／Team 18の2行、Base／Synthesisの2列の表。表の下に“Released prediction model”と“Attacker-trained scoring model”を別々に示す。左上に“20 defenders, 19 attackers”。その他の特徴量名は小さく添える程度とし、全カテゴリ人数はQ1へ。

### 図案B：一つの発表説明を符号化する流れ

Team 18の“Synthea generation + optimization”から、Base=others、Synthesis=yes、Optimization=yesへ対応させる。その下にTeam 2のBase=B、Synthesis=yesを比較用に置く。Team 18の順位は付けない。攻撃の2特徴量は口頭で区別し、完全な定義表をQ1に置く。

---

## 10　H1 result

本編7枚目、90秒。非表示の元13枚目の回帰による照合は一文に圧縮し、詳細をQ2へ。

### 発表原稿A

H1 asks whether generation or reconstruction is associated with better utility and anonymization outcomes. We summarize group differences with Hedges' g, a standardized effect size. Positive values favor the second category shown in each label. Please look first at synthesis. Its effect size is about one point two six for utility and one point zero one for anonymization. Both scores are higher among teams using synthesis. An alternative base has an even larger association with utility, about one point five five, but a smaller association with anonymization. We also checked the patterns using sparse regression models selected by AICc. Related associations remained visible, although correlated choices were difficult to separate. These results are consistent with H1 in this competition. They do not establish a causal advantage or remove the general privacy-utility trade-off.

### 発表原稿B

The main pattern is easiest to see in the synthesis row. Teams using synthesis scored higher on both dimensions. The effect sizes are about one point two six for utility and one point zero one for anonymization. Now compare the starting base. Building from elsewhere is more strongly associated with utility than with anonymization. This tells us that different outcomes emphasize different aspects of the design. We used small regression models to check whether the univariate patterns survived consideration of other features. Several did, but the choices overlap. Our conclusion is therefore a pattern worth testing: generation and reconstruction were associated with good outcomes here, without demonstrating that one choice caused the improvement.

### 図案A：主要2特徴量の効果量【推奨】

行はBase、Synthesis。Utility／Anon_allを色分けした横棒。Base=1.55／0.54、Synthesis=1.26／1.01。横軸“Hedges' g”、脚注“Positive values favor others / yes”。Synthesisを先に指す。空いた余白に“Exploratory associations, n = 20”。

### 図案B：既存の全5特徴量の図を大きくする

現在の小さな図を全幅にし、SynthesisとBaseだけを口頭で説明する。他の3特徴量は図には残すが、読み上げない。ノイズの負の棒とラベルの重なりを避ける。回帰の係数図はQ2へ回す。

---

## 12　H2 result

本編8枚目、105秒。手法・主要結果・partial supportの理由をこの1枚で完結させる。細かい交互作用の式はQ3へ。

### 発表原稿A

H2 asks whether disclosure risk depends on the pairing of defense and attack strategies. We analyzed three hundred and sixty-one ordered pairs using a negative binomial model for exposed-record counts. Since the same attackers and victims appear repeatedly, we clustered standard errors in both directions. The figure focuses on attackers who also used the released prediction model. The combined incidence rate ratios range from about zero point six one to zero point seven zero across the four defense features. An incidence rate ratio compares expected counts. One is the reference, and values below one indicate fewer expected exposed records. Each row comes from a separate model with its own joint reference. We found interactions involving attack target, while these combined estimates remained below their references. This gives partial support for H2. Some other interactions had non-estimable clustered standard errors, so we leave those inferential questions open.

### 発表原稿B

A team ranking hides which attacker succeeded against which defense. H2 uses that pairing information directly. We modeled exposed-record counts for three hundred and sixty-one pairs, accounting for repeated attackers and victims in the standard errors. The figure shows combined estimates when the attacker also uses the released prediction model. For synthesis, the incidence rate ratio is about zero point six one. This means a lower expected count than that model's joint reference. The other three combined estimates are also below one. However, these are separate comparisons, not a universal ranking of methods. The attack-target interactions show that pairing matters, while some interactions involving attacker-trained models do not allow clustered inference. That is why we describe H2 as partially supported.

### 図案A：組合せ全体のIRRを4行で示す【推奨】

横棒はBase=0.69、Synthesis=0.61、Optimization=0.70、Swapping=0.65。1の基準線を必ず示す。見出しは“Attacker also uses the released model”。脚注は“Combined IRRs; separate models with model-specific joint references”。主効果と交互作用を同じ棒として混ぜない。

### 図案B：現在の2条件比較を整理する

データのみ条件と、モデルも使う条件を各特徴量で並べる。ただし“Victim used none of these”という共通基準行を外し、各モデルの比較であると注記する。話す値はSynthesisの共同条件0.61に絞る。比較する2条件の数値は同一仕様のモデルから取る。

---

## 14　Limits

本編9枚目、60秒。限界の列挙で長引かせず、「何の主張までが妥当か」を伝える。

### 発表原稿A

We should keep the scope of the evidence clear. There are only twenty coded teams, and their design choices are correlated. We reconstructed the methods from descriptions rather than inspecting most source code. So these associations cannot isolate causal effects or establish general privacy guarantees. The attack results also concern the attacks observed in this competition. For some H2 interactions, the clustered standard errors could not be estimated. That is an unresolved inference problem, not evidence that no interaction exists. The contribution is to identify patterns and make their limits explicit. Stronger conclusions need better records of strategies and further comparisons.

### 発表原稿B

What can we reasonably take away from these results? We have identified associations that are useful for forming hypotheses. But a successful team may differ from another team in several ways at once, and a presentation may omit implementation details. We therefore cannot say that synthesis alone caused higher scores, or that a release is safe against every possible attack. Twenty teams also limit the precision of the analysis. These constraints do not make the observations useless. They tell us what additional evidence future studies need to collect.

### 図案A：制約と解釈の対応表【推奨】

3行で“Small sample / Limited precision”“Correlated choices / Causal effects unresolved”“Reconstructed descriptions / Coding uncertainty”。下に“Exploratory evidence within this competition”。SE推定不能は口頭で短く補う。

### 図案B：今回の証拠と次に必要な証拠

左に“Observed associations”、右に“Better strategy records + further comparisons”。今回得た知見から16枚目の質問票へ、論理のつながりを作る。因果性が簡単に保証されるような階段図にはしない。

---

## 16　Take-away / Ask

本編10枚目、50秒。ここで発表10分を終える。非表示スライドを追加で説明し始めない。

### 発表原稿A

Our answer to the opening question is that coarse descriptions can reveal patterns worth testing. To improve the evidence, we propose collecting a short strategy questionnaire with future competition submissions. It could record the source of the released records, synthesis and optimization choices, and what the attacker targeted, with space for a short explanation. Common definitions would make methods easier to compare across teams and future events. The goal is to preserve enough information for stronger follow-up analysis, while keeping the request practical for participants. Thank you for listening.

### 発表原稿B

We can learn from incomplete descriptions, provided we keep the conclusions within the evidence. My request to competition organizers is to preserve structured information about the methods behind the scores. A short questionnaire could record the main design choices, together with a brief explanation of unusual methods. It would make future reconstruction less dependent on what researchers happen to recover from presentations. That would leave a stronger basis for the next analysis. Thank you for listening.

### 図案A：結論と次回への提案【推奨】

上に“Coarse descriptions can reveal patterns worth testing”。下に“Next: a common strategy questionnaire”。さらに小さく“Record base / Synthesis / Optimization / Attack target / Short explanation”。詳細な入力欄を見せるのはQ5。

### 図案B：短い質問票の見本

“Proposed strategy questionnaire”の下に4設問＋自由記述の欄を置く。説明するのは2設問まで。未実施の提案なので、回答期限や送信ボタン、回答募集QRは付けない。

---

## 17　Q&A

本編の後の画面。**ここから質疑5分**。冒頭の質問募集は10秒程度。

### 発表原稿A

I would be happy to take questions. Our analysis data and code are available through the link on this slide.

### 発表原稿B

I welcome your questions, including suggestions on what future competitions should record. The analysis materials are available through the link here.

### 図案A：質問受付と資料リンク【推奨】

“Questions?”、連絡先、分析リポジトリを簡潔に配置する。質疑用Q1〜Q5への移動リンクは発表者が使いやすい位置に置く案。質問が来たら該当する1枚へ移動し、回答後はこの画面に戻る。

### 図案B：結論を残したQ&A画面

“Patterns worth testing, with explicit limits”を中央に残し、下部に“Questions?”と資料リンクを置く。聴衆に複数の新しい問いを投げて、質問時間を消費しない。

---

## 質疑用図表の候補

以下は**質問に応じて開く非表示の補足**。5枚を5分で順に発表する想定ではない。各回答例は20〜40秒程度の導入で、その後は質問の焦点に応じて図を示す。

### Q1　特徴量の定義・符号化

**想定質問：** BaseとSynthesisは何が違うか。公開モデルと攻撃側モデルは何が違うか。各カテゴリは何チームか。

**図案A（推奨）：** 1枚に防御20チームと攻撃19チームの定義・人数の表。防御はBase=B/others:13/7、Synthesis=no/yes:9/11、Noise:14/6、Optimization:14/6、Swapping:10/10。攻撃はTarget=data only/both:15/4、Trained model=no/yes:13/6、Non-default distance:no/yes:11/8。

**図案B：** Base×Synthesisの2×2表にTeam 9、2、18を置く。横に公開モデルDと攻撃側スコアリングモデルの2種類を示す。人数より概念の誤解を解くための図。

**回答例：**

Base records the starting point for the released records, while Synthesis records whether the method generates new records. They can vary separately. Team two is a useful example: it used B as its base and also used synthesis. On the attack side, the released prediction model and an attacker-trained scoring model belong to different teams and serve different purposes.

**注意：** othersでもBの統計情報を利用し得る。「Bの情報から完全に独立」とは説明しない。

### Q2　H1の全結果と回帰による照合

**想定質問：** 他の特徴量はどうか。最適化の効果は独立か。単変量だけの結論ではないか。

**図案A（推奨）：** 全5特徴量のUtility／Anon_allの効果量と、選択モデルの要約を併置する。効果量はBase=1.55/0.54、Synthesis=1.26/1.01、Noise=−0.73/−0.98、Optimization=1.17/0.55、Swapping=−0.04/0.73。回帰はU1・U3でBase、U2でSynthesis、匿名化でSynthesis・Post-processingと交互作用を示す。異なるアウトカムのモデルの要約だと明記する。

**図案B：** Optimization×Baseの実人数表と、論文の回帰係数図を置く。人数はOptimization=noがB=12/others=2、yesがB=1/others=5。係数と信頼区間は論文の対応図から保持する。

**回答例：**

The regression is an exploratory diagnostic check. Optimization has a large univariate association with utility, but it overlaps with other design choices and is not retained by AICc. This does not establish that optimization has no effect. It shows why we cannot interpret each univariate association as an independent causal contribution.

**注意：** 論文本文の「最適化6チーム中4チームがothers」は、CSV・付録の符号と異なる。再集計は5/6。今回の補足案は5/6を使う。原論文本文は変更していない。

### Q3　H2の主効果・交互作用・combined IRR

**想定質問：** 交互作用が1より大きいのに、combinedが1より小さいのはなぜか。何を基準にしているか。なぜpartial supportなのか。

**図案A（推奨）：** 論文の全8仕様の結果を表にする。Attack targetとの交互作用／combinedはBase=1.13/0.69、Synthesis=1.18/0.61、Optimization=1.11/0.70、Swapping=1.16/0.65。攻撃側学習モデルとの交互作用には“Clustered SE not estimable”を明示し、単に「非有意」としない。モデル間の範囲と信頼区間を区別する。

**図案B：** Synthesis×Attack targetの1例だけを拡大。“Interaction IRR=1.18”“Combined IRR=0.61”と、主効果2つと交互作用の積を示す。3因子の数値を付ける場合は同じモデルの未丸め係数を使う。

**回答例：**

The interaction and the combined estimate answer different questions. The combined IRR includes the victim main effect, the attacker main effect, and the interaction. An interaction above one can therefore coexist with a combined estimate below one. Each row uses its own model-specific joint reference. For some other interactions, non-estimable clustered standard errors prevent an inferential conclusion.

**注意：** combined<1だけを根拠に、あらゆる攻撃条件で防御の因果効果があると説明しない。

### Q4　解析単位と統計手法

**想定質問：** 20チームから361組を作って標本数を水増ししていないか。なぜ負の二項か。なぜAICcか。

**図案A（推奨）：** 防御者20×攻撃者19の対戦行列の模式図。自己対戦19組を除き361組。同じ行・同じ列の反復を色で示し、“Two-way clustering by victim and attacker”。架空の特定件数をセルに書かない。

**図案B：** H1/H2の比較表。H1=チームスコア、20、Hedges' gと小さなOLS・AICc。H2=非負の件数、361組、過分散を考慮する負の二項、二方向クラスタ。361独立チームや361独立実験とは書かない。

**回答例：**

The three hundred and sixty-one pairs are not independent teams. The same attacker faces several victims, and each victim faces several attackers. We account for that repetition through two-way clustered standard errors. The negative binomial model addresses over-dispersed count outcomes. The limited number of teams still constrains inference, which is one reason we keep the interpretation exploratory.

### Q5　提案する戦略質問票

**想定質問：** 具体的に何を聞くのか。公開コードなしで情報の信頼性をどう改善するか。

**図案A（推奨）：** “Proposed questionnaire”として、Record base、Synthesis、Optimization、Attack target、Attacker-trained model、Short explanationを並べる。各選択肢に短い定義を添え、特殊な手法を記述できる余地を残す。

**図案B：** “Presentations reconstructed afterwards”と“Common questions collected with submissions”を対比する。実装の完全な検証ではなく、情報収集の一貫性を改善する提案だと示す。

**回答例：**

The questionnaire would record a small set of design choices using shared definitions, with room for a short explanation. This could reduce ambiguity in later reconstruction. It would not verify the implementation by itself or replace code review. The aim is to preserve more comparable evidence without requiring a full technical report from every participant.

## 編集時の扱い

- 元3・6・9・11は本編を支えるメモとして統合済み。登壇用の追加スライドにしない。
- 元13・15に相当する詳しい説明はQ2・Q3に整理する。
- 本編は各スライドで一つの主張に絞る。表の全行やスコアの全定義を読み上げない。
- 時間が押した場合は元8のTeam 18の詳説、元10の回帰の一文、元12の他の交互作用の説明を短くする。元16の結論は残す。
- 質疑用図表へは直接移動できるようにする。質問前に補足全体を紹介しない。

## 根拠資料と継続する注意点

表示設定は`Kikuchi_PSD2026_1.pptx`内のスライド順と`show`属性を確認した。内容の根拠は、同ファイル、`PWSCUP2025_REVIEW_PUB/paper/main.tex`、`Final_0521.csv`、論文のH1/H2図。順位の定義差、Optimizationの4/6対5/6、Anon_allとAnon_scoreの区別については、前回の資料照合結果を引き継いでいる。

図はユーザーの希望に合わせ、今回は構図を比較する文章案。英語原稿A/Bの通し練習用ファイルは、この本編10枚とQ&A画面だけを対象に更新する。
