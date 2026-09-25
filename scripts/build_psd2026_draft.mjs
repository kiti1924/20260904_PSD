import fs from 'node:fs/promises';
import path from 'node:path';
import { createRequire } from 'node:module';
import { pathToFileURL } from 'node:url';

// Set SKILL_DIR, RUNTIME_NODE_MODULES and RUNTIME_PYTHON to the bundled runtime.
// Run from the repository root after rendering the two source PDF figures.
const workspaceDir = process.cwd();
const { SKILL_DIR, RUNTIME_NODE_MODULES, RUNTIME_PYTHON } = process.env;
if (![SKILL_DIR, RUNTIME_NODE_MODULES, RUNTIME_PYTHON].every(Boolean)) throw new Error('Missing bundled runtime paths');
const require = createRequire(path.join(RUNTIME_NODE_MODULES, 'package.json'));
const { Presentation, PresentationFile } = await import(pathToFileURL(require.resolve('@oai/artifact-tool')).href);
const { finalizePresentation, applyPresentationChartFont, resolvePresentationFont } = await import(pathToFileURL(path.join(SKILL_DIR, 'container_tools/artifact_tool_utils.mjs')).href);
const tmp = path.join(workspaceDir, '.codex-pptx-build', 'memo-proposal');
const out = path.join(workspaceDir, 'output', 'presentation');
await fs.mkdir(tmp, { recursive: true });
await fs.mkdir(out, { recursive: true });
const FONT = resolvePresentationFont({ fontFamily: 'Arial' });
const C = { ink: '#132A39', muted: '#566774', teal: '#007C78', rust: '#C15F33', white: '#FFFFFF', pale: '#F0F5F5', light: '#DCE7E8' };
const p = Presentation.create({ slideSize: { width: 1280, height: 720 } });

function text(s, value, x, y, w, h, size = 28, color = C.ink, bold = false) {
  const q = s.shapes.add({ geometry: 'textbox', position: { left: x, top: y, width: w, height: h }, fill: 'none', line: { fill: 'none', width: 0 } });
  q.text = value;
  q.text.style = { typeface: FONT, fontSize: size, color, bold, autoFit: 'none', wrap: 'square', verticalAlignment: 'top', insets: { left: 0, right: 0, top: 0, bottom: 0 } };
  return q;
}
function slide(title, n, dark = false) {
  const s = p.slides.add(); s.background.fill = dark ? C.ink : C.white;
  if (title) text(s, title, 72, 48, 1136, 104, 42, dark ? C.white : C.ink, true);
  text(s, String(n).padStart(2, '0'), 1164, 667, 44, 24, 16, dark ? C.light : C.muted);
  return s;
}
function note(s, seconds, jp, en, refs) {
  s.speakerNotes.textFrame.setText(`目安：${seconds}秒\n\n${jp}\n\nEnglish speaking cue\n${en}\n\nSources\n${refs}`);
}
function table(s, values, x, y, widths, h, size = 25) {
  const t = s.tables.add({ rows: values.length, columns: widths.length, left: x, top: y, width: widths.reduce((a,b)=>a+b,0), height: h, columnWidths: widths, values });
  t.borders.assign({ fill: '#DCE7E8', width: 1, style: 'solid' });
  t.cells.block({ row: 0, column: 0, rowCount: values.length, columnCount: widths.length }).assign({ fill: C.white, textStyle: { typeface: FONT, fontSize: size, color: C.ink }, margins: { left: 15, right: 15, top: 8, bottom: 8 } });
  t.cells.block({ row: 0, column: 0, rowCount: 1, columnCount: widths.length }).assign({ fill: C.pale, textStyle: { typeface: FONT, fontSize: size, bold: true, color: C.ink } });
  return t;
}
async function img(s, file, x,y,w,h,alt) {
  s.images.add({ blob: new Uint8Array(await fs.readFile(path.join(workspaceDir,file))), contentType:'image/png', position:{left:x,top:y,width:w,height:h}, fit:'contain', alt });
}
function bars(s, categories, utility, anon, x,y,w,h) {
  const chart = s.charts.add('bar', {
    position: { left:x, top:y, width:w, height:h }, categories,
    series: [ {name:'Utility',values:utility,fill:C.rust,valuesFormatCode:'0.00'}, {name:'Anonymization',values:anon,fill:C.teal,valuesFormatCode:'0.00'} ],
    barOptions:{direction:'bar',grouping:'clustered',gapWidth:70},
    hasLegend:true, legend:{position:'top',textStyle:{typeface:FONT,fontSize:23,fill:C.ink}},
    xAxis:{visible:true,tickLabelPosition:'low',textStyle:{typeface:FONT,fontSize:22,fill:C.ink},majorGridlines:null},
    yAxis:{visible:true,min:0,max:2,majorUnit:0.5,numberFormatCode:'0.0',textStyle:{typeface:FONT,fontSize:20,fill:C.muted},majorGridlines:{fill:C.light,width:1}},
    dataLabels:{showValue:true,position:'outEnd',textStyle:{typeface:FONT,fontSize:22,fill:C.ink}},
    chartFill:C.white,plotAreaFill:C.white,
  }); applyPresentationChartFont(chart,{fontFamily:FONT}); return chart;
}
const paper = 'PWSCUP2025_REVIEW_PUB/paper/main.tex';
const data = 'PWSCUP2025_REVIEW_PUB/Final_0521.csv';

// 1. A spare typographic cover.
{
  const s=slide('',1,true);
  text(s,'Patterns Without Source',72,136,1120,94,64,C.white,true);
  text(s,'A Meta-Analysis of PWS Cup 2025',76,250,1120,65,39,C.light);
  text(s,'Hinata Kikuchi, Hajime Ono, Kazuhiro Minami',76,422,1100,42,27,C.white);
  text(s,'Research Organization of Information and Systems\nChuo University, The Institute of Statistical Mathematics, Kanazawa University',76,476,1110,88,22,C.light);
  text(s,'PSD 2026, Cadiz',76,637,700,30,22,C.light);
  note(s,15,'本発表の主題は、コードが得られない状況で、何を根拠にどこまで学べるかです。タイトルを読み上げすぎず、すぐ寓話へ進みます。','Today I will discuss what we can learn from a privacy competition when most implementations remain undisclosed.', 'Kikuchi_PSD2026.pptx, slide 1; '+paper+', title and authors.');
}
// 2. The fictional status is visible before the story begins.
{
  const s=slide('A fictional scenario',2);
  text(s,'A researcher reports a successful\nre-identification attack.',72,185,1100,112,44,C.ink,true);
  text(s,'The company using the anonymization method\nfaces reputational damage.',72,342,1100,100,34,C.muted);
  text(s,'Would the next organization share its implementation?',72,528,1120,88,35,C.teal,true);
  note(s,35,'これは架空の状況です、と最初に明言します。研究者が再識別の成功を報告し、企業の評判が傷つく。次の企業は実装を共有したがるでしょうか。動機としてあり得る状況を示すだけで、実在事件やコード非公開の一般的原因として扱いません。','Imagine a fictional case. A researcher reports a successful re-identification attack, and the company using that method suffers reputational damage. Would the next organization share its implementation? This story illustrates a possible disclosure dilemma. Our empirical case is a competition where only two teams released code.','Kikuchi_PSD2026.pptx, slides 2–3. Fictional vignette proposed by the presenter, not an empirical case.');
}
// 3. One central question.
{
  const s=slide('',3,true);
  text(s,'What can we learn\nfrom strategy descriptions\nand outcomes alone?',72,118,1136,262,61,C.white,true);
  text(s,'Observable: high-level methods and scores\nMostly unavailable: code and implementation details',76,478,1080,104,30,C.light);
  note(s,30,'企業の評判そのものを研究するのではなく、観測の制約に話を移します。大まかな手法と結果しか見えないとき、意味のある知見を抽出できるでしょうか。この問いに最後のスライドで戻ります。','The research question is what we can learn when we see high-level strategy descriptions and outcomes, but usually cannot inspect the implementation. We use PWS Cup 2025 to examine that question.', 'Kikuchi_PSD2026.pptx, slides 3–5 and 7; '+paper+', Introduction.');
}
// 4. Flat evidence inventory.
{
  const s=slide('Why PWS Cup 2025?',4);
  text(s,'20 / 24',72,177,550,104,84,C.teal,true);
  text(s,'teams with enough information\nto code their strategies',77,293,515,80,31);
  text(s,'2',756,177,400,104,84,C.ink,true);
  text(s,'teams released code',759,293,430,50,31);
  text(s,'Public evidence',76,437,360,40,28,C.ink,true);
  text(s,'Posters and short talks\nCompetition scores and attacker–victim outcomes',76,490,1100,91,31,C.muted);
  text(s,'Enough structure for exploratory comparison',76,607,1100,38,28,C.teal,true);
  note(s,45,'コードが全くないとは言いません。24チーム中20チームはポスターと発表から戦略を符号化できましたが、コードを公開したのは2チームでした。発表の記述とスコア、対戦結果を結び付けられることが、この場を選ぶ理由です。','Twenty of the twenty-four teams provided enough detail to reconstruct strategy features, while only two released code. Presentations, published scores, and pairwise attack outcomes give us an intermediate level of evidence that supports exploratory comparison.',paper+', Introduction and Strategies of participating teams.');
}
// 5. Original scholarly system models, not invented diagrams.
{
  const s=slide('The defense and attack phases',5);
  text(s,'Defense',72,164,500,42,30,C.teal,true);
  text(s,'Attack',694,164,500,42,30,C.rust,true);
  await img(s,'.codex-pptx-build/ano_phase.png',72,224,532,282,'Original paper diagram of the anonymization phase');
  await img(s,'.codex-pptx-build/att_phase.png',680,224,532,282,'Original paper diagram of the membership inference attack phase');
  text(s,'Release anonymized data C\nand a stroke-risk model D',72,525,536,82,28);
  text(s,'Identify which records in population A\nbelong to the hidden sample B',680,525,530,85,28);
  text(s,'Synthetic health data: 100,000 population records, 10,000 sample records, 18 variables',72,634,1136,28,21,C.muted);
  note(s,60,'Syntheaで生成した医療データを使います。母集団Aから秘密の標本Bを渡し、各チームは匿名化データCと脳卒中予測モデルDを提出します。モデルを必ずCで学習するとは限りません。防御は有用性とmembership推定への抵抗性で評価します。攻撃側は他チームのA、C、Dを使い、Bに含まれるレコードを推定します。添字iとjの細部は口頭では省いて構いません。','The organizer gives each team a hidden sample of synthetic health records. Teams release anonymized data and a stroke-risk model. Other teams try to identify which population records belonged to that hidden sample. Defense scores measure utility and resistance to membership inference. Attack scores reward successful membership inference.',paper+', Competition overview and Figure: System model. Images: paper/figs/system_models/ano_phase.pdf and att_phase.pdf.');
}
// 6. Concrete coding examples make the axes distinct.
{
  const s=slide('Strategy descriptions become features',6);
  text(s,'Base: which records form the starting point?\nSynthesis: does the method generate new records?',72,164,1136,100,31);
  table(s,[['Example','Base','Synthesis'],['Team 9: direct transformation','B','No'],['Team 2: Gaussian copula','B','Yes'],['Team 18: Synthea generation','Others','Yes']],72,309,[678,224,234],252,26);
  text(s,'Synthetic methods can also start from B',72,604,1136,43,30,C.teal,true);
  note(s,70,'発表の記述を比較できる特徴量へ変換します。BaseとSynthesisは別の軸です。Team 9はBの直接変換。Team 2はBを土台にGaussian copulaで合成します。Team 18はSyntheaで別のレコード群を作ります。2と18は合成の有無は同じでもBaseが異なります。例は説明用に3チームを選んでおり、分析は全20チームが対象です。最適化や交換なども別途符号化しています。','We translate descriptions into comparable features. Base records the starting point for the released records. Synthesis records whether the method generates new records. A Gaussian copula can synthesize from B, while Synthea can provide an alternative base. These are related but distinct design choices.',paper+', Defining Features and Appendix team-level strategy profiles; '+data+', Teams 2, 9, 18.');
}
// 7. The missing methodological bridge.
{
  const s=slide('Two exploratory analyses',7);
  text(s,'H1',72,169,510,65,48,C.teal,true);
  text(s,'Strategy and team scores',72,246,535,80,34,C.ink,true);
  text(s,'20 teams\nUtility and anonymization\nHedges’ g, then sparse regression',72,362,535,151,28,C.muted);
  text(s,'H2',700,169,500,65,48,C.rust,true);
  text(s,'Defense and attack pairing',700,246,507,80,34,C.ink,true);
  text(s,'361 ordered pairs\nNumber of exposed records\nNegative binomial regression',700,362,507,151,28,C.muted);
  text(s,'Small-sample safeguards: AICc for H1, two-way clustered standard errors for H2',72,588,1136,65,25,C.ink);
  note(s,60,'H1は生成・再構築型と直接摂動型の違いを、各特徴量とスコアの関連から見ます。20チームなので効果量を中心に、最大3主効果と1交互作用の回帰をAICcで選びます。H2は防御者と攻撃者の組合せで特定件数が変わるかを見ます。361組でも同じチームが繰り返し現れるため、攻撃者と防御者の両側で標準誤差をクラスタ化します。いずれもショーケースで得た観察を出発点にする探索的分析です。','H1 relates design choices to team scores, using effect sizes and parsimonious regression selected by AICc. H2 retains each attacker–victim pairing and models exposed-record counts with a negative binomial model. The pairs repeat attackers and victims, so we cluster standard errors in both dimensions.',paper+', Meta-Analysis Methodology. H1: at most three main effects and one two-way interaction. H2: 361 ordered pairs, eight feature-pair specifications.');
}
// 8. Editable evidence, complete native labels, units specified.
{
  const s=slide('H1: synthesis is associated with both scores',8);
  bars(s,['Base: B to others','Synthesis: no to yes'],[1.55,1.26],[0.54,1.01],72,178,1136,360);
  text(s,'Hedges’ g: positive values favor the second category',72,554,1136,35,24,C.muted);
  text(s,'Utility and anonymization emphasize different features',72,605,1136,43,30,C.teal,true);
  note(s,75,'棒はHedgesのgで、プラスはラベルの後半のカテゴリが高いスコアだったことを表します。生成の土台は有用性と強く関連し、Synthesisは有用性と匿名化の両方と関連します。ここで匿名化はペナルティ後のAnon_allです。回帰では有用性にBaseやSynthesis、匿名化にSynthesisとPost-processingの組合せが残ります。これは観測的関連で、因果効果や未知のデータへの予測性能ではありません。棒は点推定で信頼区間ではありません。交換など他の特徴量の効果量は補足13枚目にあります。','Synthetic designs were associated with higher scores on both dimensions. An alternative base was most strongly associated with utility. Sparse regression retained related patterns. These are observational associations within this competition. The appendix contains the other feature contrasts.',paper+', H1 results; '+data+'. Missing=0 gives n=20. Recomputed Hedges g (utility, Anon_all): Base (1.5527,0.5432), Synthesis (1.2593,1.0148). Bars are point estimates, not confidence intervals.');
}
// 9. Resolve a common ambiguity before the H2 result.
{
  const s=slide('Two different uses of models in attacks',9);
  text(s,'Attack target',72,182,510,55,36,C.teal,true);
  text(s,'Uses the released\nprediction model D',72,264,520,122,42,C.ink,true);
  text(s,'Anonymized data alone\nor data plus the released model',72,442,520,104,29,C.muted);
  text(s,'Model-based attack',700,182,510,55,36,C.rust,true);
  text(s,'Trains a membership\nscoring model',700,264,510,122,42,C.ink,true);
  text(s,'For example, a membership classifier\nor likelihood-ratio scoring',700,442,510,104,29,C.muted);
  text(s,'Team 8 combined Gaussian LiRA and a distance attack, while targeting data alone',72,613,1136,52,23,C.ink);
  note(s,40,'モデルを使うという言い方には2つの意味があります。一つは公開された予測モデルDも攻撃対象として使うこと。もう一つは攻撃者側でmembershipを判別するスコアリング規則を学習することです。最高位の攻撃者Team 8はGaussian LiRAと距離攻撃を組み合わせましたが、符号化ではattack targetはanonです。この区別を付けて次の結果を読みます。','Using the released prediction model is different from training an attack-side membership scoring model. Team 8 illustrates this distinction: its attack combined Gaussian LiRA and distance matching, while its coded target was anonymized data alone.',paper+', Attack Strategies, Defining Features and Appendix attack feature table.');
}
// 10. Separate an interaction coefficient from the full combination.
{
  const s=slide('H2: the defense advantage persists',10);
  text(s,'When attackers also use the released model',72,154,1136,47,31,C.muted);
  table(s,[['Victim feature','Interaction IRR','Combined IRR'],['Alternative base','1.13','0.69'],['Synthesis','1.18','0.61'],['Optimization','1.11','0.70'],['Swapping','1.16','0.65']],72,234,[566,285,285],300,26);
  text(s,'All combined estimates remain below 1',72,565,1136,45,32,C.teal,true);
  text(s,'Relative to the joint reference in each model. IRR compares expected exposed-record counts.',72,626,1136,37,21,C.muted);
  note(s,75,'この表は公開モデルも使うAttack targetとの4つの組合せです。IRRは期待特定件数の比で、1より小さいほど基準群より件数が少ない。交互作用は1.11〜1.18ですが、防御側と攻撃側の主効果を合わせた全体は0.61〜0.70です。したがって防御の優位は消えません。ただし各行は別のモデルで、同じ基準群ではありません。H2は部分的支持と読みます。攻撃者側の学習モデルとの交互作用は標準誤差が推定できず、差がないという結論は出しません。補足に全結果があります。','For attack target, the interaction terms exceed one, but the full combinations remain below one. Strategy pairing matters, while the victim-side advantage persists. We therefore interpret H2 as partially supported. The interactions involving attacker-trained scoring models had non-estimable clustered standard errors, so we do not make an inferential claim for them.',paper+', H2 results; paper/figs/H2/h2_heat_twoway_bw.png. IRRs rounded as published. All four Attack target interactions p<0.01 under two-way clustering. Combined IRR is exp(beta_victim+beta_attacker+beta_interaction), relative to the joint reference in each separate specification.');
}
// 11. Interpretive boundaries, not a generic disclaimer list.
{
  const s=slide('What this evidence can support',11);
  text(s,'Patterns worth testing',72,184,526,59,37,C.teal,true);
  text(s,'Strategy features align with outcomes.\nSeveral associations remain visible\nin parsimonious models.',72,281,526,162,30);
  text(s,'Questions still open',700,184,508,59,37,C.rust,true);
  text(s,'Did the strategy cause the outcome?\nWas the implementation reconstructed correctly?\nWould the result transfer to another setting?',700,281,508,230,30);
  text(s,'20 teams, correlated choices, and descriptions reconstructed without most source code',72,584,1136,72,27,C.muted);
  note(s,40,'意味のあるパターンを取り出せたことと、手法の因果的な優位を確立したことは区別します。20チームという小標本、特徴量間の相関、発表記述からの復元誤差があります。観測できた攻撃に対して良いスコアだったことは、一般的な安全性や差分プライバシーの保証ではありません。H2でも推定不能な標準誤差があり、証拠の限界を含めて報告しています。','We recovered patterns that are useful for forming hypotheses. The evidence does not establish causal superiority or general privacy guarantees. The small number of teams, correlated choices, and uncertain reconstruction limit what we can conclude.',paper+', Introduction, methodology caveats, H1 and H2 interpretation, Conclusion.');
}
// 12. Return to the opening question and a concrete next step.
{
  const s=slide('',12,true);
  text(s,'Coarse descriptions can reveal\npatterns worth testing',72,135,1136,166,58,C.white,true);
  text(s,'PWS Cup 2025 provides exploratory evidence\nlinking strategy choices to observed outcomes.',76,348,1100,106,33,C.light);
  text(s,'Next competition',76,523,1100,37,25,C.light);
  text(s,'Collect strategy information with a common checklist',76,575,1100,76,34,C.white,true);
  note(s,35,'冒頭の問いに答えます。粗い説明でも追試すべき関連を見つけることはできました。因果や一般性の確認は次の研究です。今後は共通の分類に基づくチェックリストを使って戦略情報を計画的に集める、という論文の提案で締めます。','We can learn something useful from coarse descriptions and outcomes: patterns worth testing. The next step is to collect strategy information systematically using a common checklist, so future competitions produce stronger evidence.',paper+', Conclusion and Future Work.');
}
// 13. Keep less central effects available for questions.
{
  const s=slide('Appendix: H1 effect sizes',13);
  table(s,[['Feature contrast','Utility g','Anonymization g'],['Base: B to others','1.55','0.54'],['Synthesis: no to yes','1.26','1.01'],['Noise: no to yes','−0.73','−0.98'],['Optimization: no to yes','1.17','0.55'],['Swapping: no to yes','−0.04','0.73']],72,172,[566,285,285],372,26);
  text(s,'Positive values favor the second category',72,563,1136,36,26,C.teal,true);
  text(s,'Hedges’ g, n = 20. Anonymization uses the post-penalty score Anon_all.',72,609,1136,34,23,C.muted);
  note(s,0,'質疑用です。最適化は単変量では有用性と強く関連しますが、他の設計特徴と重なり、AICc選択モデルには残りません。ノイズ追加の負の関連は、ノイズの因果的な有害性や差分プライバシーの劣位を示しません。これらは観測的な特徴量比較です。','These point estimates cover all five broad anonymization features. Optimization overlaps with other choices. Noise effects are observational and should not be interpreted as a verdict on differential privacy.',paper+', H1 results; '+data+'. Hedges g computed on Missing=0, n=20. Rounded to two decimal places; no confidence intervals shown.');
}
// 14. Full published evidence, with a readable interpretation note.
{
  const s=slide('Appendix: H2 main and interaction effects',14);
  table(s,[
    ['Victim feature','Main IRR','Attack target\nInteraction / total','Trained scorer\nInteraction / total'],
    ['Reference','1.00','Main: 0.82–0.86**','Main: 1.04–1.05'],
    ['Base: B to others','0.72–0.73*','1.13** / 0.69','1.03 / 0.78\nSE n.e.'],
    ['Synthesis','0.63–0.65*','1.18** / 0.61','1.00 / 0.68\nSE n.e.'],
    ['Optimization','0.73–0.75*','1.11** / 0.70','1.01 / 0.78\nSE n.e.'],
    ['Swapping','0.68–0.70*','1.16** / 0.65','0.99 / 0.74\nSE n.e.'],
  ],72,169,[273,195,334,334],414,22);
  text(s,'Ranges span model specifications, not confidence intervals. * p < 0.05, ** p < 0.01.',72,606,1136,28,21,C.muted);
  text(s,'SE n.e.: the two-way clustered standard error for the interaction was not estimable.',72,642,1136,28,21,C.muted);
  note(s,0,'質疑用に原図の値を表へ転記しています。主効果の範囲は信頼区間ではなく、組み合わせたモデル仕様間の範囲です。攻撃者側学習モデルの主効果は原図で1.04〜1.05、本文では約1.04と要約しています。SE n.e.は二方向クラスタ標準誤差が推定できないことを示し、非有意とは異なります。星は原論文の表示を保持しています。','This table contains the complete published result. Ranges summarize different pairwise specifications, not confidence intervals. Non-estimable standard errors preclude inference for the attacker-trained-model interactions.',paper+', Figure: Disclosure-risk effects from the dyadic negative binomial model; paper/figs/H2/h2_heat_twoway_bw.png.');
}

const candidatePath=path.join(tmp,'candidate.pptx');
await (await PresentationFile.exportPptx(p)).save(candidatePath);
const finalPath=path.join(out,process.env.OUTPUT_NAME || 'Kikuchi_PSD2026_proposal.pptx');
const result=await finalizePresentation({ workspaceDir,candidatePath,finalPath,pythonExecutable:RUNTIME_PYTHON,
  integrityValidatorPath:path.join(SKILL_DIR,'container_tools/inspect_presentation_package_integrity.py'),
  layoutValidatorPath:path.join(SKILL_DIR,'container_tools/inspect_presentation_layout_geometry.py'),
  layoutArgs:['--expected-slide-size-emu','12192000,6858000','--validate-bullet-geometry','--validate-heading-fit','--require-native-table-slide','6','--require-native-table-slide','10','--require-native-table-slide','13','--require-native-table-slide','14'],
  explicitTotalSlideCount:14,requiredNativeTableOwnerSlides:[6,10,13,14],requiredNativeChartOwnerSlides:[8],
  materializeLiteralChartWorkbooks:true,fontPolicy:{basis:'design',families:[FONT]},verifyArtifactToolImport:true,
  receiptPath:path.join(tmp,path.basename(finalPath)+'.validation.json')
});
console.log(JSON.stringify(result));
