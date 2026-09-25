# 発表練習用原稿B：具体例・問いかけを強める別案

参照：Kikuchi_PSD2026_1.pptx。原稿の段落は、そのまま話す英語。見出しと時間の説明は読み上げない。

ページは元の番号を保ち、説明の順だけを並べ替えている。元ファイル自体は変更していない。

**推奨順：** 1、2、3、4、5、6、7、8、11、9、10、13、12、15、14、16、17。

本文は約1,022語。毎分110〜120語なら読み上げ約8.5〜9.3分。図を示す間と切り替えを合計60〜90秒取ると、約9.5〜10.8分。

AとBは代替案。全体を両方続けて読むものではない。図案と日本語の意図・注意点は[原稿と図案の比較資料](Kikuchi_PSD2026_1_scripts_and_figure_options.md)を参照。

| 話す順 | 元ページ | 内容 | 語数 | 読み上げ秒数（毎分120語） |
|---:|---:|---|---:|---:|
| 1 | 1 | Patterns Without Source | 36 | 18 |
| 2 | 2 | A fictional scenario | 53 | 26 |
| 3 | 3 | 寓話 | 54 | 27 |
| 4 | 4 | Fiction → real problem | 57 | 28 |
| 5 | 5 | Big Problem | 53 | 26 |
| 6 | 6 | Why PWS Cup? | 56 | 28 |
| 7 | 7 | Minimum PWS Cup mechanics | 68 | 34 |
| 8 | 8 | Reconstruction | 72 | 36 |
| 9 | 11 | PWSCUP overview | 62 | 31 |
| 10 | 9 | Key opportunity | 66 | 33 |
| 11 | 10 | H1 result | 68 | 34 |
| 12 | 13 | 仮説1の図と得られた示唆 | 70 | 35 |
| 13 | 12 | H2 result | 70 | 35 |
| 14 | 15 | 仮説2の図と得られた示唆 | 74 | 37 |
| 15 | 14 | Limits | 64 | 32 |
| 16 | 16 | Take-away / Ask | 61 | 30 |
| 17 | 17 | Q&A | 38 | 19 |

---

## 01　元スライド01：Patterns Without Source

We often see the outcome of a privacy attack without seeing the implementation behind it. Can we still learn something useful? I am Hinata Kikuchi, and today I will explore this question through PWS Cup 2025.

---

## 02　元スライド02：A fictional scenario

Imagine that you are evaluating an anonymized dataset. You find a successful re-identification attack, and you decide to publish the result. Your aim is to help others understand the risk. Now imagine how the company that released the data might react. This is a fictional example, but it raises a question about disclosure.

---

## 03　元スライド03：寓話

The finding becomes public, and the company faces criticism. The next organization may ask, “What happens if we share our method and someone finds a weakness?” That concern could make technical information harder to obtain. The story is fictional. I use it to explain why a researcher might have to work with incomplete evidence.

---

## 04　元スライド04：Fiction → real problem

We do not need to assume that the story explains the competition. The observation is simpler: code disclosure was limited, while descriptions and results were available. This gives us a concrete research setting. We can ask whether the available information supports a useful analysis, even though it cannot tell us every detail of what each team implemented.

---

## 05　元スライド05：Big Problem

Suppose the implementation is a black box. We know roughly what went into it, and we can observe the result. How much can we learn from that view? This question guides the study. We look for associations between strategy choices and outcomes, and we ask how far those associations can reasonably take us.

---

## 06　元スライド06：Why PWS Cup?

A ranking alone tells us who scored well, but gives us little information about why. A presentation alone describes a method, but may not show how it compares with alternatives. PWS Cup gives us both kinds of information. By linking presentations to published outcomes, we can study twenty teams under a common set of competition rules.

---

## 07　元スライド07：Minimum PWS Cup mechanics

Think of one hundred thousand synthetic patient records. The organizer selects ten thousand and gives that hidden sample to a team. The team then releases anonymized data and a prediction model. An attacker sees the population and the releases, and asks: which patients were in the hidden sample? That is the membership inference task. The competition rewards useful releases that resist attacks, while also scoring the attackers' success.

---

## 08　元スライド08：Reconstruction

Let me show what reconstruction means. Team eighteen described a Synthea-based approach with optimization. We encoded those choices in the same feature scheme used for every team. Team eight combined Gaussian LiRA with a distance attack, so it illustrates a different set of attack features. The aim is to make descriptions comparable. It is important to remember that we are encoding what we could recover from presentations, not verifying every implementation detail.

---

## 09　元スライド11：PWSCUP overview

It is tempting to treat “synthetic” and “built from elsewhere” as the same category, but they are different. A method can generate new records using B as its base. Similarly, an attacker can train a scoring model without using the released prediction model. These distinctions are why we describe strategies with several features instead of assigning each team a single method label.

---

## 10　元スライド09：Key opportunity

There are two ways to read these results. First, we can ask which strategy features are associated with higher team scores. Second, we can ask whether an attack works differently against different defenses. The second question needs the pairing information that a ranking would hide. We therefore analyze both team-level outcomes and the matrix of attacker-victim outcomes, while keeping the models small and the conclusions exploratory.

---

## 11　元スライド10：H1 result

Please look first at synthesis. Teams using synthesis scored higher on both utility and anonymization in this dataset. Now look at the starting base: its association is much stronger for utility than for anonymization. This distinction matters. There is no single feature that explains every score equally well. The result is consistent with H1, but it remains an exploratory comparison of strategy choices that teams made for themselves.

---

## 12　元スライド13：仮説1の図と得られた示唆

Optimization provides a useful example. Its association with utility looks large when we examine it alone. But teams often used optimization together with other design choices. Five of the six teams using optimization also had an alternative base. Once the regression considers related features together, AICc does not retain Optimization. That does not prove it has no effect. It shows how cautiously we need to interpret these small observational comparisons.

---

## 13　元スライド12：H2 result

Does adding the released prediction model remove the lower disclosure counts associated with the defense features? In these comparisons, the combined estimates remain below one. For synthesis, the combined incidence rate ratio is about zero point six one. However, each row comes from a separate model with its own reference categories. We should read the figure as a set of specific comparisons, rather than a ranking of universally safer methods.

---

## 14　元スライド15：仮説2の図と得られた示唆

At first glance, an interaction above one may seem to say that the defense advantage has disappeared. We need to read the full model. For synthesis, the interaction is about one point one eight, but the full combination is about zero point six one relative to that model's joint reference. Also, a non-estimable standard error is not evidence that an interaction is absent. Both distinctions matter for our statement that H2 receives partial support.

---

## 15　元スライド14：Limits

What would we need to make a stronger claim? We would need better information about implementations and more opportunities to compare methods under controlled conditions. Here, a successful team may differ from another team in several ways at once. Our analysis narrows the questions worth investigating, but it cannot isolate every cause. The next step is to improve the evidence that competitions leave behind.

---

## 16　元スライド16：Take-away / Ask

My request to competition organizers is simple: preserve a small amount of structured information about the methods behind the scores. A short questionnaire could make a substantial difference. Participants could describe their main design choices without giving a full technical report. With consistent definitions and a place to explain unusual methods, future competitions could leave more useful evidence for privacy research.

---

## 17　元スライド17：Q&A

Thank you. I welcome questions about the analysis, and also your views on the proposed questionnaire. Which details would you want to preserve from a competition like this? You can find our analysis materials through the link here.

---

## 練習時の確認

- 2・3枚目は合わせて短い一つの物語として話す。冒頭のfictionalを省かない。
- 10枚目はSynthesis、Baseの順に図を指す。棒の全数値を追加で読み上げない。
- 12枚目はIRRの基準1を示してから0.61を指す。各行は別モデルの比較。
- 15枚目はinteractionとcombinedを区別して発音する。
- 時間を短縮する場合は3を2へ、11を8へ統合し、13・15を補足に回す。削除後のつなぎも声に出して確認する。
