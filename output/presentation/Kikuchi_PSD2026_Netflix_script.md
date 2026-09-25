# Netflix導入版：10分発表原稿

表示10枚（Questionsを含む）＋非表示の質疑用5枚。配分の合計は9分25秒、原稿は約954語。発表10分＋質疑5分。時間は目標値なので、指示・間を含む通し練習で調整してください。

ユーザー原稿の順序と円環構造を保持。Netflixのデータ公開とPWSのコード不足を区別し、H2の基準群・IRR範囲・推定不能の解釈を論文に合わせています。

| Slide | 内容 | 秒 |
|---|---|---:|
| 1 | Patterns Without Source | 30 |
| 2 | Netflix Prize: disclosure and privacy | 60 |
| 3 | The information gap | 45 |
| 4 | Why PWS Cup 2025? | 75 |
| 5 | From presentations to testable questions | 65 |
| 6 | H1: generation and reconstruction | 85 |
| 7 | H2: defender–attacker combinations | 90 |
| 8 | What this evidence can support | 50 |
| 9 | Incomplete information does not mean no information | 55 |
| 10 | Questions | 10 |

## 1. Patterns Without Source

Good afternoon. I am Hinata Kikuchi from the Institute of Statistical Mathematics. This is joint work with Hajime Ono and Kazuhiro Minami. Today, I want to ask one question: how much can we learn when we can see the outcome, but not exactly how the method worked? Let me start with a real story.

**発表メモ：** 問いを置いたら一拍おき、実話へ進む。所属・共著者は画面を読み切らず簡潔に。

**構図：** タイトルと冒頭の問いを大きく配置。問いは最後の結論で回収する。

出典：PWSCUP2025_REVIEW_PUB/paper/main.tex

## 2. Netflix Prize: disclosure and privacy

In 2006, Netflix launched the Netflix Prize. To improve recommendations, it released movie ratings from about half a million subscribers, with direct identifiers removed. Narayanan and Shmatikov showed that some records could be linked to individuals using public information, such as ratings on IMDb. Netflix later planned a second competition with richer data. The Federal Trade Commission raised concerns about re-identification, and Netflix subsequently suspended those plans. This illustrates a tension: data disclosure helps research, but can also create privacy risks. Our study concerns a different information gap: limited access to implementation details. What can researchers learn when those details are unavailable?

**発表メモ：** 時系列を左から右へ。Netflixはデータ公開の事例であり、コード非公開の原因を実証する例ではない。

**構図：** 2006公開、外部情報とのリンク、2009–2010のFTCの懸念とPrize 2停止を3段階で示す。矢印は時系列であり、単独の原因を主張しない。

出典：https://arxiv.org/abs/cs/0610105 / https://www.ftc.gov/sites/default/files/documents/closing_letters/netflix-inc./100312netflixletter.pdf

## 3. The information gap

We can observe what happened. We may also know the broad family of anonymization or attack that was used. But we may not know the parameters, see the full implementation, or have the source code. Can we still extract meaningful knowledge from outcomes and type-level descriptions? This information alone cannot establish causal effects. But it may reveal patterns and help formulate useful hypotheses. To explore that possibility, we studied PWS Cup 2025.

**発表メモ：** 観測できるものと欠けているものを対比し、因果ではなく仮説形成へ目的を限定する。

**構図：** Outcomes / Method familyを左、Parameters / Implementation / Source codeを右に置く。下に研究の問いを一つだけ表示。

出典：PWSCUP2025_REVIEW_PUB/paper/main.tex

## 4. Why PWS Cup 2025?

PWS Cup is an anonymization and attack competition held in Japan since 2015. The 2025 challenge used synthetic health records. As defenders, teams received a hidden sample and released an anonymized dataset and an XGBoost model for stroke-risk prediction. As attackers, they tried to infer which population records belonged to another team's hidden sample. This gives us utility scores, anonymization scores, and pairwise attack outcomes under a common evaluation framework. There is also a useful information gap. Posters and short talks described the strategies, but code release was optional. Only two of the twenty-four teams released code. So the implementations were mostly unavailable, while the outcomes were comparable. That combination makes this competition a useful case for our question.

**発表メモ：** ルール説明を約半分、共通評価とコード公開2チームという研究上の利点を残り半分に配分。

**構図：** DEFEND → RELEASE → ATTACKを横方向に置き、公開物をanonymized data + stroke model、攻撃をmembership inferenceと明記。下段に2 / 24と共通評価を強調。

出典：PWSCUP2025_REVIEW_PUB/paper/main.tex

## 5. From presentations to testable questions

We reconstructed strategy descriptions from posters and short presentations. Twenty teams provided enough information to code categorical features. These included whether a team used the supplied sample as its base, used synthesis, added noise, or applied optimization. Attack features included use of the released model and training an attacker's own scoring model. We retained features present in at least four teams. We then asked two questions. H1: were generation- and reconstruction-based designs associated with better utility and anonymization? H2: did disclosure depend on the combination of defender and attacker strategies? For H1, we used effect sizes and sparse regressions across twenty teams. For H2, we analyzed 361 ordered attacker–victim pairs.

**発表メモ：** 24から20への絞り込みと、H1はチーム単位、H2は対戦ペア単位という違いを説明。

**構図：** 24 teams → 20 reconstructedを上段に大きく、H1: 20 teamsとH2: 361 pairsを下段に並列表示。特徴量の具体例は短い補助文。

出典：PWSCUP2025_REVIEW_PUB/paper/main.tex / PWSCUP2025_REVIEW_PUB/Final_0521.csv

## 6. H1: generation and reconstruction

Here is the first result. Orange is utility, and blue is anonymization. The effect size is Hedges' g. Positive values favor the second category in each comparison. Start with the base: teams using an alternative to directly transforming the provided sample had higher utility, with an effect size of 1.55. Now look at synthesis. It was associated with higher utility, at 1.26, and higher anonymization, at 1.01. In the remaining comparisons, explicit noise was negatively associated with both outcomes. Swapping had almost no utility difference, but a positive anonymization association. Sparse regressions selected by AICc retained parts of the same pattern. These models are an exploratory check, not independent confirmation. With only twenty teams and correlated design choices, we interpret these as associations within this contest. The next question is whether those patterns depend on the attack strategy.

**発表メモ：** 橙＝有用性、青＝匿名化。BaseとSynthesisを主図とし、他3特徴の数値は質疑用へ。

**構図：** BaseとSynthesisの2組を編集可能な横棒グラフで比較。有用性と匿名化の色を固定。全5特徴の表を非表示補足に置く。

出典：PWSCUP2025_REVIEW_PUB/paper/main.tex / PWSCUP2025_REVIEW_PUB/Final_0521.csv

## 7. H2: defender–attacker combinations

For H2, we analyzed the number of records exposed in each of 361 ordered attacker–victim pairs. An incidence rate ratio, or IRR, below one means fewer expected exposed records relative to that model's reference. Across the models, the four victim-side features had IRRs from 0.63 to 0.75: about 25 to 37 percent lower expected exposure. The table focuses on attackers that also used the released model. Their interactions with victim features were above one. But the combined effects, including both main effects and the interaction, remained below one, from 0.61 to 0.70. So the pairing mattered, while the estimated victim-side advantage persisted. Each row has its own model-specific reference; these are not comparisons with one common group lacking all four features. For attacker-trained scoring models, the clustered standard errors of the interactions could not be estimated. We therefore cannot conclude that those interactions are absent. Overall, H2 receives partial support.

**発表メモ：** IRRの分母は各モデル固有の基準。全特徴がない共通集団ではない。攻撃者学習モデルとの交互作用は推論不能。

**構図：** 4行の表でInteraction IRRとCombined IRRを並べる。Combined列を青で強調。主効果0.63–0.75を上、推定不能の注意を下に置く。

出典：PWSCUP2025_REVIEW_PUB/paper/main.tex

## 8. What this evidence can support

These results have clear limits. We observed twenty teams; their strategies were not randomly assigned. Our categories describe method families, rather than exact parameters or implementations. And all results come from one competition, with its particular data-generation and scoring framework. We therefore cannot claim that synthetic data is universally better, or that these defenses are safe against every attack. What we have are exploratory patterns from PWS Cup 2025. But remember our starting question. Even with incomplete information, we moved from broad descriptions to specific, quantitative hypotheses that future studies can test.

**発表メモ：** 一つのsynthetic populationとは言わず、一つの競技・データ生成・評価設定とする。

**構図：** 左に観測上の制約、右に得られたもの／未解決のもの。読み上げる文章を画面に複製しない。

出典：PWSCUP2025_REVIEW_PUB/paper/main.tex

## 9. Incomplete information does not mean no information

Let me return to the opening story. The Netflix case illustrates why data disclosure needs care. Our PWS Cup study addresses a different practical problem: learning when implementation details are limited. Type-level descriptions did not give us definitive conclusions. But they let us identify patterns, quantify them, and formulate questions for more rigorous testing. A practical next step is to collect strategy information systematically. A short, structured questionnaire could record each team's design choices and the evidence behind them. The next analysis could then begin with structured information, rather than reconstructing it afterwards. We may not have the source, but we can still start finding the patterns. Thank you.

**発表メモ：** Netflixの公開データの問題と、本研究の実装情報の不足を区別したまま回収。共通質問票は今後の提案。

**構図：** 中心文を大きく置き、次の具体策『Collect strategy information with a common questionnaire』を下段に一つだけ置く。

出典：PWSCUP2025_REVIEW_PUB/paper/main.tex / https://www.ftc.gov/sites/default/files/documents/closing_letters/netflix-inc./100312netflixletter.pdf

## 10. Questions

I would be happy to take your questions.

**発表メモ：** この画面で質疑5分。補足11–15は非表示で、質問に応じて直接移動。

**構図：** Questionsと論文タイトル、データ・コードの公開先。補足スライド一覧は発表ノートにのみ記載。

出典：PWSCUP2025_REVIEW_PUB/paper/main.tex

## 非表示の質疑用スライド

11. H1全5特徴の効果量
12. H2の全結果と推定不能の標準誤差
13. 競技の詳細：母集団・標本・公開物
14. 20チームと361ペアの構成
15. Netflixの一次資料と事例の位置づけ

元デッキの非表示メモを本編に戻さず、この版では上記5枚を質疑用に設定する。
