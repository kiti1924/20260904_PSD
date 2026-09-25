# Kikuchi_PSD2026_1：旧案・原稿と図案の素材集

**発表構成の現行版は[本編10分・質疑5分の構成と原稿](Kikuchi_PSD2026_1_10min_plan.md)。** このファイルは非表示設定を考慮する前に作成した17ページ分の選択肢を、編集用の素材として残したもの。以下の旧原稿を17枚分通して読む想定は取り下げた。通し練習用A/Bも現行版から再生成している。

参照資料：`Kikuchi_PSD2026_1.pptx`、17枚。以下の番号はすべて参照ファイルのページ番号に対応する。

各ページに、そのまま話せる英語原稿を2案、図の構図を文章で2案用意した。**原稿Aは短い文で順に説明する案、原稿Bは具体例や聴衆への問いを強める案**。どちらも論文の主張の範囲内に収めている。AとBは代替案であり、続けて両方を読む想定ではない。図A/Bと原稿A/Bは独立に選べる。

図は今回、描画・画像生成していない。図案のラベルは実際の英語スライドに使える文言にし、配置、話しながら見せる順序、必要なデータを記した。表紙とQ&Aでは、説明図を無理に加えず、文字配置を含む構図案としている。

## 訂正後の発表対象

表示される本編は**元1・2・4・5・7・8・10・12・14・16の10枚**。元17はQ&A画面。表示順は変更しない。元3・6・9・11・13・15は非表示であり、読み上げ時間に含めない。

- 寓話は表示する元2の1枚で完結させる。
- 元6・9・11のメモから必要な説明を本編へ統合する。
- 詳しいH1/H2の図表や手法説明は、質問に応じて開く補足へ回す。

本編の時間配分と統合後の原稿は現行版に記載。以下に残る「3枚目へ続く」「推奨位置」などの記述は初稿時点の素材であり、現在の登壇順の指示ではない。

## 最初にそろえたい表現

1. **寓話は最初から架空と明示する。**「実際にはこのような事例は起きていない」と世界全体について断言しない。開示を控える一般的原因を実証した話でもない。
2. **分析対象はPWS Cup 2025。** 7枚目のメモ中の2026を修正する。
3. **H1はassociation。** 10枚目のcauseは使わない。有用性と匿名化のトレードオフが一般に消えたという結論にも広げない。
4. **Team 18の順位は定義を区別する。** 論文の本戦結果表はU＋Anon=170.83で1位、CSVのCupRankは2位。参照8枚目の“overall rank 1”はこの区別を失うため、今回の原稿では順位を述べず、戦略の例として使う。
5. **H2の基準はモデルごとに異なる。**「4つの特徴量をすべて使わなかった共通のチーム」を基準とする図にしない。特に参照12枚目の“Victim used none of these”は修正したい。
6. **公開モデルを攻撃に使うことと、攻撃側でモデルを学習することを分ける。** 8枚目の2つの攻撃特徴量は同じ意味ではない。
7. **チェックリストは今後の提案。** 16枚目で、すでに調査を実施した、回答募集を開始している、といった印象を与えない。

---

## 01　Patterns Without Source

**このページの役割：** 著者紹介と研究の問いを一息で示す。

### 発表原稿A

Good afternoon. I am Hinata Kikuchi. Today I will present our meta-analysis of PWS Cup 2025. We ask what researchers can learn about anonymization and attacks when most participants do not release their source code.

### 発表原稿B

We often see the outcome of a privacy attack without seeing the implementation behind it. Can we still learn something useful? I am Hinata Kikuchi, and today I will explore this question through PWS Cup 2025.

### 図案A：タイトルのみ、問いを副題にする【推奨】

- **構図：** 左上から中央に大きなタイトル。下に正式な副題と著者。最下部に小さく“What can we learn without source code?”を置く。図形や挿絵は加えない。
- **狙い：** 研究テーマを一瞬で理解してもらい、次の寓話へすぐ進める。
- **見せ方：** 全体を一度に表示する。ここでは数字や分析結果を説明しない。
- **向く場面：** 冒頭15〜20秒を短く締めたい場合。正式タイトルは参照版のまま保持する。

### 図案B：観測できる両端と見えない実装

- **構図：** タイトルの下に横並びで“Strategy descriptions”“Implementation”“Observed outcomes”。中央のImplementationだけ輪郭を破線にし、その下に“Mostly unavailable”。左右は通常の文字と線で示す。
- **狙い：** 研究上の制約を表紙から視覚化する。
- **見せ方：** 左右を示してから中央を指す。コードが一切ないとは描かない。
- **注意：** 5枚目で似た図を使うなら、この表紙はAにして反復を避ける。

---

## 02　A fictional scenario

**このページの役割：** 架空の状況を設定し、研究者の問題を聴衆に想像してもらう。3枚目へ続く第一幕。

### 発表原稿A

Let me begin with a fictional scenario. A company shares an anonymized dataset. A researcher tests the release and finds that some individuals can be identified. The researcher reports the finding to explain the privacy risk. So far, this seems like a useful contribution to privacy research. But what might happen next?

### 発表原稿B

Imagine that you are evaluating an anonymized dataset. You find a successful re-identification attack, and you decide to publish the result. Your aim is to help others understand the risk. Now imagine how the company that released the data might react. This is a fictional example, but it raises a question about disclosure.

### 図案A：公開・検証・報告の3場面【推奨】

- **構図：** 左から“Data release”“Privacy evaluation”“Research report”の3場面。企業、データ、研究者を同じ簡潔な線のスタイルで描く。報告書には“Re-identification found”。上端に常時“A fictional scenario”。
- **狙い：** 研究者が問題を検証して報告するところまで、自然な行動の順序を示す。
- **見せ方：** 原稿の3つの動詞に合わせ、左、中央、右の順に表示する。企業の反応は次ページへ残す。
- **注意：** 実在企業のロゴ、実在者の顔、患者の具体的な情報を使わない。数値も置かない。

### 図案B：研究者の視点

- **構図：** 中央に研究者と検証画面。画面の左に“Anonymized release”、右に“Identifiable records found”。下に問い“Should I publish the finding?”。
- **狙い：** 聴衆を研究者の立場に置き、次の反応へ関心を向ける。
- **見せ方：** まず検証画面だけ示し、最後に問いを追加する。
- **向く場面：** 問いかけを生かした原稿B。人物を大きくするより、発見内容を読み取りやすくする。

---

## 03　寓話

**このページの役割：** 架空の企業の反応から、方法の開示をためらう可能性へ進む。2枚目の代替にする場合は冒頭を“In this fictional scenario”に置き換える。

### 発表原稿A

In the story, the company faces reputational damage after the report. Other organizations see the reaction and become less willing to share their methods. The researcher has revealed a privacy problem, yet future cases become harder to study. The point of the story is the possible disclosure dilemma. It does not establish why any particular team withheld its code.

### 発表原稿B

The finding becomes public, and the company faces criticism. The next organization may ask, “What happens if we share our method and someone finds a weakness?” That concern could make technical information harder to obtain. The story is fictional. I use it to explain why a researcher might have to work with incomplete evidence.

### 図案A：評判への反応から開示の縮小へ【推奨】

- **構図：** “Research report”“Reputational concern”“Less willingness to disclose”を横方向につなぐ。全体の上に“Possible sequence in the fictional story”。末尾に小さく“Less evidence for researchers”。
- **狙い：** 物語が研究課題につながる理由を示す。
- **見せ方：** 企業の懸念を先に出し、最後に研究者に戻る。
- **注意：** 矢印は寓話の中の仮定。実証した因果経路の図として見せない。

### 図案B：研究者と組織の異なる関心

- **構図：** 左に研究者、“Understand and report privacy risk”。右に組織、“Manage the consequences of disclosure”。中央下に“Implementation details may remain unavailable”。
- **狙い：** どちらかを悪者にせず、情報が出にくい可能性を説明する。
- **見せ方：** 両者の関心を順に示してから、中央の共有課題に視線を戻す。
- **向く場面：** 企業・行政の参加者も多く、対立的な物語を避けたい発表。

---

## 04　Fiction → real problem

**このページの役割：** 架空の動機説明と、実際に確認した観測上の制約を分ける。

### 発表原稿A

Let us move from the story to our actual case. In PWS Cup 2025, only two teams released code. However, teams described their approaches in posters and short talks, and the competition published their outcomes. We therefore had some evidence about strategies, but limited access to implementations. Our study starts from this gap.

### 発表原稿B

We do not need to assume that the story explains the competition. The observation is simpler: code disclosure was limited, while descriptions and results were available. This gives us a concrete research setting. We can ask whether the available information supports a useful analysis, even though it cannot tell us every detail of what each team implemented.

### 図案A：架空の話と確認した事実を対比【推奨】

- **構図：** 左に“Fictional motivation”と短い一文“Disclosure can have consequences”。右に“Observed in PWS Cup 2025”と“2 teams released code”“Descriptions and outcomes available”。右をやや大きくする。
- **狙い：** 物語を証拠扱いしていないことを自然に伝える。
- **見せ方：** “Let us move…”で右側を表示し、以後は右だけを指す。
- **必要資料：** コード公開数は論文Introduction。非公開の理由を示す割合は作らない。

### 図案B：証拠の有無を示す短い一覧

- **構図：** 3行の表。“Strategy descriptions / Available”“Competition outcomes / Available”“Most implementations / Unavailable”。下に“Can the available evidence still be useful?”。
- **狙い：** 架空の場面から研究デザインへ、最短で切り替える。
- **見せ方：** 上2行を先に、最後に3行目と問いを表示する。
- **注意：** Source codeの欄を“None”にしない。2チームの例外がある。

---

## 05　Big Problem

**このページの役割：** 発表全体で答える問いを一つに固定する。

### 発表原稿A

Our central question is this: when we observe only broad descriptions of methods and their outcomes, can we still extract meaningful patterns? More specifically, can we connect strategy choices to utility and disclosure risk? We aim to identify patterns that deserve further testing, while making the limits of the evidence clear.

### 発表原稿B

Suppose the implementation is a black box. We know roughly what went into it, and we can observe the result. How much can we learn from that view? This question guides the study. We look for associations between strategy choices and outcomes, and we ask how far those associations can reasonably take us.

### 図案A：実装が見えない観測図【推奨】

- **構図：** 左に“Broad strategy description”、中央に輪郭だけの“Implementation”、右に“Measured outcome”。上に“Mostly unavailable”を中央に対応させる。下は大きく“What can we learn?”。
- **狙い：** 入手した説明と、実装を完全には知らないことを同時に示す。
- **見せ方：** まず中央、次に左右、最後に下の問いを指す。
- **注意：** この図自体は解析モデルや因果グラフではなく、観測状況の模式図と明示する。

### 図案B：問いだけを大きく見せる

- **構図：** 中央に“What can we learn from descriptions and outcomes?”。下に小さく“Strategies, utility, disclosure risk”。挿絵は付けない。
- **狙い：** 聴衆が持ち帰る問いを記憶しやすくする。
- **向く場面：** 4枚目で証拠一覧を既に見せている場合。図の反復を減らせる。
- **見せ方：** 問いを読み終えたら1秒置いて、PWS Cupの説明へ進む。

---

## 06　Why PWS Cup?

**このページの役割：** このケースを選ぶ理由を、観測できる情報の構造で示す。

### 発表原稿A

PWS Cup provides a useful case because the descriptions and outcomes belong to the same competition. Teams face shared evaluation rules, and their presentations describe the strategies behind their submissions. We could reconstruct strategy features for twenty of the twenty-four teams. This creates an opportunity to compare choices and outcomes, even though most source code remains unavailable.

### 発表原稿B

A ranking alone tells us who scored well, but gives us little information about why. A presentation alone describes a method, but may not show how it compares with alternatives. PWS Cup gives us both kinds of information. By linking presentations to published outcomes, we can study twenty teams under a common set of competition rules.

### 図案A：方法の説明と結果をTeam IDで結ぶ【推奨】

- **構図：** 左に“Posters and talks”、右に“Published results”。中央に“Team ID”を置き、両側から同じチームの情報を結び付ける。下に“20 teams with codable descriptions / 24 registered”。
- **狙い：** 単にデータがあるのではなく、説明と結果を対応付けられることが分析を可能にする、と示す。
- **見せ方：** 原稿Bの“ranking alone”“presentation alone”に合わせて左右、最後に中央を表示する。
- **注意：** 20チームを無作為に抽出した図にはしない。説明が復元できたチームである。

### 図案B：利用できる情報の位置づけ

- **構図：** 横一列に“Outcomes only”“Descriptions + outcomes”“Code + outcomes”。中央に“PWS Cup analysis”を置く。中央の下に“20 codable teams”。
- **狙い：** 完全な再現実験ではなく、方法記述と結果を使う研究であることを説明する。
- **見せ方：** 右端を理想的な情報量として触れ、中央の実際に利用できる情報へ戻る。
- **注意：** 目盛り付きの量的スケールにしない。公開コードがある2チームも存在するため“Typical evidence available”と注記する。

---

## 07　Minimum PWS Cup mechanics

**このページの役割：** A、B、C、Dとmembership inferenceを、結果の理解に必要な範囲だけ説明する。

### 発表原稿A

The competition uses synthetic health data generated by Synthea. Each team receives a hidden sample, B, containing ten thousand records from a population, A, of one hundred thousand records. The team submits anonymized data, C, and a stroke-risk prediction model, D. Other teams receive A, C, and D, and try to identify which records belonged to B. The defense receives utility and anonymization scores. The attack receives a score based on correct membership inferences.

### 発表原稿B

Think of one hundred thousand synthetic patient records. The organizer selects ten thousand and gives that hidden sample to a team. The team then releases anonymized data and a prediction model. An attacker sees the population and the releases, and asks: which patients were in the hidden sample? That is the membership inference task. The competition rewards useful releases that resist attacks, while also scoring the attackers' success.

### 図案A：A・B・C・Dの公開範囲を示すフロー【推奨】

- **構図：** 左に“A: population, 100,000”。そこから中央の“B: hidden sample, 10,000”。Bの右上に“C: anonymized data”、右下に“D: prediction model”。右端の攻撃者はA、C、Dを観測し、“Which records belong to B?”を推定する。
- **狙い：** 何が隠れていて、何を攻撃者が見られるかを理解させる。
- **見せ方：** 母集団、秘密の標本、公開物、推定課題の順に段階表示する。
- **注意：** CからDへの矢印を唯一の学習経路として描かない。チームによってBや別データでDを学習している。

### 図案B：防御と攻撃を上下2段に分ける

- **構図：** 上段は“Defender”と、提出するC・D、評価されるUtility・Anonymization。下段は“Attacker”と、観測するA・C・D、提出するmembership予測。Bは上下の間に置き、秘密であることを示す。
- **狙い：** 記号より、参加者の役割と採点対象を優先する。
- **見せ方：** 上段を説明してから下段を開示する。
- **必要資料：** 論文Competition overview。実患者データと誤解されないよう“Synthetic health data”を残す。

---

## 08　Reconstruction

**このページの役割：** 発表記述を比較可能な特徴量へ変換する操作を示す。すべての件数を読み上げない。

### 発表原稿A

We reconstructed strategies from posters and short talks, then encoded them as categorical features. On the defense side, we coded twenty teams using features such as the starting data, synthesis, noise, optimization, and swapping. On the attack side, nineteen teams had usable attack submissions. We distinguished the attack target from the use of an attacker-trained scoring model. The numbers show how many teams fall into each category. These are reconstructed descriptions, rather than direct inspections of their code.

### 発表原稿B

Let me show what reconstruction means. Team eighteen described a Synthea-based approach with optimization. We encoded those choices in the same feature scheme used for every team. Team eight combined Gaussian LiRA with a distance attack, so it illustrates a different set of attack features. The aim is to make descriptions comparable. It is important to remember that we are encoding what we could recover from presentations, not verifying every implementation detail.

### 図案A：Team 18の説明を特徴量へ変換【推奨】

- **構図：** 左に“Team 18: Synthea generation + optimization”という短い要約。中央に“Coding”。右に5行の表“Base: others”“Synthesis: yes”“Noise: no”“Optimization: yes”“Swapping: no”。下に“Same codebook applied to 20 teams”。
- **狙い：** 現在の参照スライドの一覧に先立ち、「何をしたのか」を具体例で理解させる。
- **見せ方：** 説明文、対応する2〜3項目、全特徴量の順に表示する。要約文はポスターからの直接引用であるかのように引用符を付けない。
- **注意：** Team 18の順位は書かない。othersはBから何も学習していないという意味ではない。

### 図案B：現在の特徴量一覧を人数の棒にする

- **構図：** 左は防御20チーム、右は攻撃19チーム。各行に2カテゴリの人数を並べる。防御はBase=13/7、Synthesis=9/11、Noise=14/6、Optimization=14/6、Swapping=10/10。攻撃はTarget=15/4、Trained model=13/6、Non-default distance=11/8。
- **狙い：** 標本の小ささとカテゴリの偏りを見せる。
- **見せ方：** 防御のBaseとSynthesis、攻撃の2種類のモデル利用だけを指して説明する。
- **注意：** 分母20と19を別々に表示する。カテゴリ間を矢印でつなぐとチームが移動したように見えるため、比較群として横並びにする。

---

## 09　Key opportunity

**このページの役割：** 問いを繰り返す代わりに、符号化した情報をどの分析へつなぐかを説明する。

### 発表原稿A

We can now connect the coded strategies to outcomes at two levels. H1 examines team scores, focusing on utility and anonymization. We summarize differences with Hedges' g, a standardized difference between groups, and check them using sparse regression models selected by AICc. H2 examines each attacker-victim pair and models the number of exposed records. It uses negative binomial regression, with standard errors clustered by both attacker and victim. Both analyses are exploratory.

### 発表原稿B

There are two ways to read these results. First, we can ask which strategy features are associated with higher team scores. Second, we can ask whether an attack works differently against different defenses. The second question needs the pairing information that a ranking would hide. We therefore analyze both team-level outcomes and the matrix of attacker-victim outcomes, while keeping the models small and the conclusions exploratory.

### 図案A：符号化後にH1とH2へ分岐【推奨】

- **構図：** 左の“Coded strategies”から右上“H1: 20 teams / utility and anonymization”、右下“H2: 361 ordered pairs / exposed-record counts”へ分かれる。H1の下に“Effect sizes + sparse regression”、H2の下に“Negative binomial model”。
- **狙い：** 二つの結果が同じデータの異なる見方であると説明する。
- **見せ方：** まず上を指し、次に下を指す。2本の経路は分析の流れであり、因果経路ではない。
- **注記：** “Repeated attackers and victims”をH2側に添える。361組を361独立実験として描かない。

### 図案B：チーム表と対戦行列を並べる

- **構図：** 左にTeam／Features／Scoresの小さな模式表、右にVictim×Attackerの模式行列。表やセルの数値は入れず、左に“Team-level scores”、右に“Pair-level counts”と書く。
- **狙い：** チーム単位と対戦単位の違いを直感的に示す。
- **見せ方：** 右の同じ行・同じ列を指して、同じ防御者・攻撃者が繰り返すことを説明する。
- **注意：** 模式図は“Schematic”と明示する。実際の対戦結果に見える架空ヒートマップを作らない。

---

## 10　H1 result

**このページの役割：** 生成・再構築型が両スコアと関連するという主要なパターンを示す。

### 発表原稿A

H1 asks whether generation or reconstruction is associated with better utility and anonymization outcomes. The clearest shared pattern is synthesis. Its Hedges' g is about one point two six for utility and one point zero one for anonymization. Starting from an alternative base has a larger association with utility, at about one point five five. The features therefore relate differently to the two outcomes. These are associations among twenty teams in this competition, rather than estimated causal effects.

### 発表原稿B

Please look first at synthesis. Teams using synthesis scored higher on both utility and anonymization in this dataset. Now look at the starting base: its association is much stronger for utility than for anonymization. This distinction matters. There is no single feature that explains every score equally well. The result is consistent with H1, but it remains an exploratory comparison of strategy choices that teams made for themselves.

### 図案A：BaseとSynthesisの主要2比較【推奨】

- **構図：** 横棒グラフ。行は“Base: B vs others”“Synthesis: no vs yes”。各行にUtilityとAnonymizationの2本。値はBase=1.55／0.54、Synthesis=1.26／1.01。横軸は“Hedges' g”。
- **狙い：** まず中心の発見を読ませる。全5特徴量は13枚目または補足へ。
- **見せ方：** Synthesisの両棒を先に強調し、次にBaseとの違いを見る。
- **注記：** “Positive values favor the second category. Anonymization = Anon_all.”。点推定であり、棒の長さは精度や有意性を表さない。

### 図案B：全5特徴量の効果量を見せる

- **構図：** 参照10枚目の図を全幅にする。Utility／Anon_allは、Base=1.55／0.54、Synthesis=1.26／1.01、Noise=−0.73／−0.98、Optimization=1.17／0.55、Swapping=−0.04／0.73。
- **狙い：** 都合のよい特徴量だけを示しているのではないと伝え、異なる結果も含めて議論する。
- **見せ方：** 原稿ではSynthesisとBaseだけを追い、残りは図に残す。読み上げる値を増やさない。
- **注意：** 負の棒とカテゴリ名が重ならないよう、カテゴリ名を描画領域の外に置く。ノイズの負の関連を差分プライバシー全般への評価に広げない。

---

## 11　PWSCUP overview

**このページの役割：** BaseとSynthesis、攻撃側の2特徴量を具体例で区別する。推奨位置は8枚目の直後。

### 発表原稿A

Two distinctions help us interpret the analysis. Base describes the starting point for the released records. Synthesis describes whether the method generates new records. Team two used a Gaussian copula with B as its base, while team eighteen used a Synthea-based approach with an alternative base. Both used synthesis. On the attack side, using the released prediction model is different from training a membership-scoring model. We encode these as separate choices.

### 発表原稿B

It is tempting to treat “synthetic” and “built from elsewhere” as the same category, but they are different. A method can generate new records using B as its base. Similarly, an attacker can train a scoring model without using the released prediction model. These distinctions are why we describe strategies with several features instead of assigning each team a single method label.

### 図案A：Base×Synthesisの2軸表【推奨】

- **構図：** 列は“Base = B”“Base = others”、行は“Synthesis = no”“Synthesis = yes”。確認できる例だけ記入する。B/noにTeam 9、B/yesにTeam 2、others/yesにTeam 18。others/noにTeam 11を入れる場合はデータに基づく符号だけを示し、未確認の実装説明を加えない。
- **狙い：** 独立した分類軸であることを一目で示す。
- **見せ方：** Team 2と18の同じ行・異なる列を指して説明する。
- **注意：** Base=othersでも、Bの統計的特徴や推定パラメータを利用してよい。情報が完全にBから独立だと読める図にしない。

### 図案B：公開モデルDと攻撃者側モデルを分離

- **構図：** 左は被攻撃チームが公開する“Prediction model D”。右は攻撃者が作る“Membership-scoring model”。下にそれぞれ“Attack target”“Attacker-trained model”。Team 8を右側の例として添える。
- **狙い：** H2の攻撃特徴量を混同させない。
- **見せ方：** “Who builds the model?”の問いで左右を説明する。
- **向く場面：** Base/Synthesisは8枚目で既に説明済みで、攻撃側の理解を優先したい場合。

---

## 12　H2 result

**このページの役割：** 攻撃と防御の組合せが関係しても、共同条件の期待特定件数は各モデルの基準より低いことを示す。

### 発表原稿A

H2 asks whether disclosure risk depends on the pairing of defense and attack strategies. We analyzed three hundred and sixty-one ordered pairs. When attackers also used the released prediction model, the combined incidence rate ratios ranged from about zero point six one to zero point seven zero across the four victim features. These values compare expected exposed-record counts with the joint reference in each model. The pairing matters, but these combinations still remain below their respective references. We interpret this as partial support for H2.

### 発表原稿B

Does adding the released prediction model remove the lower disclosure counts associated with the defense features? In these comparisons, the combined estimates remain below one. For synthesis, the combined incidence rate ratio is about zero point six one. However, each row comes from a separate model with its own reference categories. We should read the figure as a set of specific comparisons, rather than a ranking of universally safer methods.

### 図案A：組合せ全体のIRRだけに絞る【推奨】

- **構図：** 横軸を“Combined IRR for expected exposed-record counts”とする横棒。Alternative base=0.69、Synthesis=0.61、Optimization=0.70、Swapping=0.65。各行の基準1.00を細い参照線で示す。上に“Attacker also uses released model”。
- **狙い：** 主要な結論を一度で読ませる。
- **見せ方：** 1の線、0.61の棒、残る3行の順。各値を全部読み上げない。
- **必須注記：** “Separate pairwise models; each row has its own joint reference.”。平均露出件数や攻撃成功率として百分率表示しない。

### 図案B：公開データのみ／公開モデルも利用、の2条件

- **構図：** 4行、各行2点の比較図。被攻撃者側の特徴量があるときについて、データのみ条件の主効果と、モデルも使う共同条件の合計効果を示す。**値は同じ仕様のモデルから取り出す。**参照図の0.72/0.69、0.63/0.61、0.73/0.70、0.68/0.65を候補とする。
- **狙い：** 公開モデルを使う攻撃条件を並べて理解させる。
- **見せ方：** 1行ずつ2点を見る。相互作用IRRをこの2点の単純な比だとは説明しない。
- **修正点：** 元図の“Victim used none of these”という共通基準行は外す。モデル間の0.82〜0.86の範囲を、0.84という単一の推定値に置き換えない。

---

## 13　仮説1の図と得られた示唆

**このページの役割：** 10枚目の棒を繰り返さず、単変量の関連を回帰でどう照合したかを示す。推奨位置は10枚目の直後。

### 発表原稿A

A large effect for one feature may reflect other choices that occur alongside it. We therefore checked the univariate patterns using sparse regression models selected by AICc. For utility components, the selected models retained Base or Synthesis. For anonymization, they included Synthesis, Post-processing, and their interaction. Optimization had a large univariate association with utility, but did not remain in the selected models. This illustrates why we use the models as a diagnostic check, rather than treating each feature as an independent cause.

### 発表原稿B

Optimization provides a useful example. Its association with utility looks large when we examine it alone. But teams often used optimization together with other design choices. Five of the six teams using optimization also had an alternative base. Once the regression considers related features together, AICc does not retain Optimization. That does not prove it has no effect. It shows how cautiously we need to interpret these small observational comparisons.

### 図案A：単変量の効果と選択モデルの対応表【推奨】

- **構図：** 左列“Univariate pattern”、右列“AICc-selected models”。Baseは“Utility g = 1.55 / Selected for U1 and U3”、Synthesisは“Utility g = 1.26 / Selected for U2; also in anonymization models”、Optimizationは“Utility g = 1.17 / Not retained”。表下に“Selection is not a causal test”。
- **狙い：** 効果量を見ただけの分析ではないことと、回帰でも完全に切り分けられないことを伝える。
- **見せ方：** Optimizationの行を最後に示す。
- **注意：** 右列は異なるアウトカムのモデルを要約している。Utility_allの単一回帰の結果として描かない。

### 図案B：OptimizationとBaseの重なり

- **構図：** 実人数の2×2表。行はOptimization=no/yes、列はBase=B/others。セルはno:12/2、yes:1/5。Optimization=yes行を強調し、その横に“5 of 6 also used an alternative base”。
- **狙い：** 特徴量の相関を、回帰式を使わずに理解させる。
- **見せ方：** 6チームの行、5チームのセルの順に指す。
- **注意：** 重なり自体で交絡が完全に説明されたとは言わない。モデル選択の背景となる構造として示す。
- **資料間の差：** 論文本文は4/6と記すが、CSVと論文付録のチーム別符号では5/6。今回は再集計した5/6を採用した。原論文側も確認したい箇所。

---

## 14　Limits

**このページの役割：** 結果の価値を保ちながら、言えないことの理由を示す。推奨位置は12・15の後。

### 発表原稿A

There are three important limits. We have only twenty coded teams. Their strategy choices are correlated, and we reconstructed those choices from descriptions rather than checking most implementations. The results therefore provide exploratory associations. They do not establish causal superiority or general privacy guarantees. For some H2 interactions, the two-way clustered standard errors were not estimable, so we do not make inferential claims about those interactions. These limits also suggest what future competitions should record.

### 発表原稿B

What would we need to make a stronger claim? We would need better information about implementations and more opportunities to compare methods under controlled conditions. Here, a successful team may differ from another team in several ways at once. Our analysis narrows the questions worth investigating, but it cannot isolate every cause. The next step is to improve the evidence that competitions leave behind.

### 図案A：制約と解釈への影響を対応させる【推奨】

- **構図：** 3行の表。“20 coded teams / Limited precision”“Correlated design choices / Effects difficult to separate”“Reconstructed descriptions / Coding uncertainty”。下に“Exploratory associations”。
- **狙い：** 単なる注意書きではなく、なぜ結論を限定するのかを示す。
- **見せ方：** 各行を一文ずつ説明し、最後の言葉にまとめる。
- **注意：** 不確実性の割合やスコアを捏造しない。ここで新しい統計結果を出さない。

### 図案B：今回分かったことと次の検証

- **構図：** 左に“Observed associations”、右に“Controlled comparisons and replication”。左に本研究、右に今後の検証とラベル。両者の間は“Further evidence needed”。
- **狙い：** 制約の説明を次の研究提案へつなぐ。
- **見せ方：** 左を肯定的に述べ、右の条件を具体的に説明する。
- **注意：** 因果性が単純な一段階の手続きで保証されるような階段図は避ける。

---

## 15　仮説2の図と得られた示唆

**このページの役割：** 交互作用が1を超えることと、組合せ全体が1を下回ることの違いを説明する。推奨位置は12枚目の直後。

### 発表原稿A

The interaction term and the combined effect answer different questions. For synthesis and attack target, the interaction incidence rate ratio is about one point one eight. The combined estimate is about zero point six one. The combined estimate includes both main effects as well as the interaction, so an interaction above one does not imply a combined estimate above one. For the interactions with attacker-trained scoring models, clustered standard errors were not estimable. We therefore leave those inferential questions open.

### 発表原稿B

At first glance, an interaction above one may seem to say that the defense advantage has disappeared. We need to read the full model. For synthesis, the interaction is about one point one eight, but the full combination is about zero point six one relative to that model's joint reference. Also, a non-estimable standard error is not evidence that an interaction is absent. Both distinctions matter for our statement that H2 receives partial support.

### 図案A：交互作用と組合せ全体を横並びにする【推奨】

- **構図：** 左に“Interaction IRR = 1.18”、右に“Combined IRR = 0.61”。上に“Synthesis × attack target”。下に“Combined IRR = victim main effect × attacker main effect × interaction”。
- **狙い：** 何の比を見ているのかを区別する。
- **見せ方：** 左の値を先に示し、「モデル全体を見る」で右を開示する。
- **注意：** 3因子の数値を実際に描く場合は、必ず同一のSynthesis×Attack targetモデルの係数を使う。別仕様の主効果の範囲や端点を掛け合わせない。式は未丸め値に基づく。

### 図案B：推論できた交互作用／できなかった交互作用

- **構図：** 2行の表。“With attack target / IRR 1.11–1.18; clustered inference available”“With attacker-trained model / IRR 0.99–1.03; clustered SE not estimable”。下に“Non-estimable does not mean no interaction”。
- **狙い：** H2のpartial supportを明瞭に説明する。
- **見せ方：** まず支持された比較を説明し、次に未解決の比較を示す。
- **注意：** 1.11〜1.18と0.99〜1.03はモデル間の点推定の範囲。信頼区間として横線を描かない。

---

## 16　Take-away / Ask

**このページの役割：** 冒頭の問いへ答え、今後のデータ収集を具体的に提案する。

### 発表原稿A

Our answer to the opening question is that coarse descriptions can reveal patterns worth testing. To make future analyses stronger, we propose a short strategy questionnaire using a common set of definitions. It could ask where the released records came from, whether synthesis or optimization was used, and what the attacker targeted. Teams could also add a short explanation. This would make the evidence easier to compare across teams and future competitions.

### 発表原稿B

My request to competition organizers is simple: preserve a small amount of structured information about the methods behind the scores. A short questionnaire could make a substantial difference. Participants could describe their main design choices without giving a full technical report. With consistent definitions and a place to explain unusual methods, future competitions could leave more useful evidence for privacy research.

### 図案A：短い戦略質問票の見本【推奨】

- **構図：** 1枚の質問票。“Proposed strategy questionnaire”を見出しに、Q1 Record base、Q2 Synthesis、Q3 Optimization、Q4 Attack target、Q5 Short explanationを並べる。選択肢は既存のコードブックに合わせる。
- **狙い：** short questionnaireが具体的に何を指すのか、聴衆がイメージできるようにする。
- **見せ方：** 全項目を読まず、Q1とQ4と自由記述の3か所だけを指す。
- **注意：** 実在の募集フォームに見える送信ボタン、締切、回答QRコードは付けない。“Proposed”を必ず残す。回答時間も実測していないので断言しない。

### 図案B：今の収集と次回の収集を対比

- **構図：** 上段“Today: presentations reconstructed after the event”。下段“Next: shared questions collected with submissions”。両方の末尾に“Comparable strategy data”。下段では自由記述の欄も示す。
- **狙い：** 発表者の結論が、実施可能な改善案につながることを示す。
- **見せ方：** 上段を振り返り、下段を提案として表示する。
- **注意：** 次回に実施が決定済みであるとは表現しない。チェックリストだけで実装の正しさまで検証できるとも言わない。

---

## 17　Q&A

**このページの役割：** 結論を一言残して質問を受け、資料へアクセスできるようにする。

### 発表原稿A

Thank you for listening. Our analysis data and code are available through the link on this slide. I would be happy to take questions, including suggestions on what future competitions should record.

### 発表原稿B

Thank you. I welcome questions about the analysis, and also your views on the proposed questionnaire. Which details would you want to preserve from a competition like this? You can find our analysis materials through the link here.

### 図案A：結論と連絡先だけ【推奨】

- **構図：** 中央に“Questions?”。その下に“Patterns worth testing, with explicit limits”。下部左にメール、右に“Analysis data and code”とリンク。QRは作るなら右下に1個だけ。
- **狙い：** 聴衆が質問を考える間も、結論と資料の場所が目に入る。
- **注意：** QRコードには検証済みの実URLを使い、完成後に読み取り確認する。今回はQRを生成せず、配置案のみ。
- **リンク：** `https://github.com/kiti1924/PWSCUP2025_REVIEW_20260716`。参照17枚目のURLにアクセスできることを確認した。論文は別の`PWSCUP2025_REVIEW_PUB`を案内しているため、公開先を統一したい場合は最終版で揃える。

### 図案B：議論したい問いを2つ残す

- **構図：** 上に“Questions and discussion”。中央に“What should teams disclose?”と“What would make this analysis more reliable?”。連絡先と資料リンクを下端にまとめる。
- **狙い：** 手法の質問だけでなく、コンペ設計についても議論を促す。
- **向く場面：** 十分な質疑時間があり、主催者や参加者から意見を聞きたい場合。
- **注意：** QRと長いURLを両方大きく表示しない。スライドが連絡先一覧になるのを避ける。

---

## 数値と図を作る際の共通ルール

### H1

| 比較（後者−前者） | Utility_allのg | Anon_allのg |
|---|---:|---:|
| Base: B / others | 1.55 | 0.54 |
| Synthesis: no / yes | 1.26 | 1.01 |
| Noise: no / yes | −0.73 | −0.98 |
| Optimization: no / yes | 1.17 | 0.55 |
| Swapping: no / yes | −0.04 | 0.73 |

Missing=0の20チーム。Retiredは防御側のこの集計から除外しない。Anon_allはペナルティ後であり、Anon_scoreと区別する。全棒の符号と比較方向を揃える。現在の図の値は点推定。信頼区間を新たに描くなら、計算根拠を別途そろえる。

### H2

| 防御特徴量 | Attack targetとの交互作用IRR | 同じモデルのcombined IRR |
|---|---:|---:|
| Base | 1.13 | 0.69 |
| Synthesis | 1.18 | 0.61 |
| Optimization | 1.11 | 0.70 |
| Swapping | 1.16 | 0.65 |

攻撃者は公開モデルも使う条件。各行は別の2特徴量モデル。combined IRRは主効果2つと交互作用を含む共同条件の比。分母を固定した割合・成功確率と混同しない。361組は20防御者と19攻撃者を対応させ、自己対戦などを除いた観測。二方向クラスタ標準誤差を用いる。攻撃者側学習モデルとの交互作用でSEが推定不能な点は隠さない。

### 資料間で最終確認したい箇所

- **OptimizationとBaseの重なり：** 論文本文の4/6に対し、CSVと論文付録のチーム別符号は5/6。該当チームは5、8、10、11、18。Optimization=yesの残るTeam 13はBase=B。原稿13Bと図案13Bは再集計した5/6を使う。本文の記述は今回変更していない。
- **順位：** 参照8枚目の“overall rank 1”は、論文表の本戦順位とCSVのCupRankを区別して書き直す。今回は順位を原稿から外した。
- **モデルの学習データ：** CからDを学習したとは全チームについて言えない。CとDを提出した、と説明する。
- **発表時間：** コンペ各チームの“10分間の発表”は論文本文では確認できないので、posters and short talksとする。
- **資料URL：** 参照版は`PWSCUP2025_REVIEW_20260716`、論文は`PWSCUP2025_REVIEW_PUB`を記載。前者の公開ページは確認済みだが、どちらを最終的な案内先にするかは揃える余地がある。

## 使用した資料

1. `Kikuchi_PSD2026_1.pptx`：ページ対応、寓話の趣旨、既存の図、Take-awayの方向。
2. `PWSCUP2025_REVIEW_PUB/paper/main.tex`：競技の仕組み、特徴量、探索的分析、結果と限界、今後の提案。
3. `PWSCUP2025_REVIEW_PUB/Final_0521.csv`：カテゴリ人数、チーム符号、H1効果量、OptimizationとBaseの重なりの照合。
4. `PWSCUP2025_REVIEW_PUB/paper/figs/H2/h2_heat_twoway_bw.png`：H2の交互作用・combined IRR。
5. [参照スライドの公開分析リポジトリ](https://github.com/kiti1924/PWSCUP2025_REVIEW_20260716)：2026年9月25日に公開ページとデータ・分析コードの掲載を確認。図の数値の根拠には上記ローカル論文・データを用いた。
