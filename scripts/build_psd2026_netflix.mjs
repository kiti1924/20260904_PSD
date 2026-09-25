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
const tmp = path.join(workspaceDir, '.codex-pptx-build', 'netflix-version');
const out = path.join(workspaceDir, 'output', 'presentation');
await fs.mkdir(tmp, { recursive: true });
await fs.mkdir(out, { recursive: true });
const FONT = resolvePresentationFont({ fontFamily: 'Arial' });
const C = { ink: '#132A39', muted: '#566774', teal: '#236FAA', rust: '#D98424', white: '#FFFFFF', pale: '#F0F5F5', light: '#DCE7E8' };
const p = Presentation.create({ slideSize: { width: 1280, height: 720 } });

function text(s, value, x, y, w, h, size = 28, color = C.ink, bold = false) {
  const q = s.shapes.add({ geometry: 'textbox', position: { left: x, top: y, width: w, height: h }, fill: 'none', line: { fill: 'none', width: 0 } });
  q.text = value;
  q.text.style = { typeface: FONT, fontSize: size, color, bold, autoFit: 'none', wrap: 'square', verticalAlignment: 'top', insets: { left: 0, right: 0, top: 0, bottom: 0 } };
  return q;
}
const allSlides = [];
function slide(title, n, dark = false) {
  const s = p.slides.add(); allSlides.push(s); s.background.fill = dark ? C.ink : C.white;
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

const script = JSON.parse(await fs.readFile(path.join(out,'netflix_script.json'),'utf8'));
{
  const s=slide('',1,true);
  text(s,'Patterns Without Source',72,104,1136,96,64,C.white,true);
  text(s,'A Meta-Analysis of PWS Cup 2025',76,216,1100,55,38,C.light);
  text(s,'We see the outcome.\nHow much can we learn about the method?',76,341,1100,145,40,C.white);
  text(s,'Hinata Kikuchi · Hajime Ono · Kazuhiro Minami',76,565,1100,40,27,C.light);
  text(s,'The Institute of Statistical Mathematics  |  PSD 2026',76,618,1080,36,24,C.light);
}
{
  const s=slide('Netflix Prize: disclosure and privacy',2);
  text(s,'2006',72,174,340,58,40,C.rust,true);
  text(s,'Ratings released',72,257,340,90,34,C.ink,true);
  text(s,'About 500,000 users\nDirect identifiers removed',72,356,340,120,27,C.muted);
  text(s,'2006–2008',460,174,340,58,40,C.rust,true);
  text(s,'External linkage',460,257,340,90,34,C.ink,true);
  text(s,'Public IMDb ratings\nSome users re-identified',460,356,340,120,27,C.muted);
  text(s,'2009–2010',848,174,360,58,40,C.rust,true);
  text(s,'Prize 2 suspended',848,257,360,90,34,C.ink,true);
  text(s,'Richer dataset planned\nFTC raised privacy concerns',848,356,360,120,27,C.muted);
  text(s,'Data disclosure enables research and can create privacy risks',72,528,1136,88,36,C.teal,true);
  text(s,'Narayanan & Shmatikov (2006–2008); FTC closing letter (12 March 2010)',72,641,1136,30,21,C.muted);
}
{
  const s=slide('The information gap',3);
  text(s,'Observable',72,189,520,58,36,C.teal,true);
  text(s,'Outcomes\nMethod families',72,280,520,166,44,C.ink);
  text(s,'Often unavailable',702,189,506,58,36,C.muted,true);
  text(s,'Parameters\nImplementation / source code',702,280,506,178,34,C.muted);
  text(s,'Can we still identify meaningful patterns?',72,543,1136,100,46,C.ink,true);
}
{
  const s=slide('Why PWS Cup 2025?',4);
  text(s,'DEFEND',72,174,318,48,34,C.teal,true);
  text(s,'RELEASE',474,174,330,48,34,C.teal,true);
  text(s,'ATTACK',876,174,330,48,34,C.rust,true);
  text(s,'Hidden sample of\nsynthetic health records',72,252,318,125,30);
  text(s,'Anonymized data\n+ stroke-risk model',474,252,330,125,30);
  text(s,'Infer who belonged\nto the hidden sample',876,252,332,125,30);
  text(s,'2 / 24',72,440,340,100,76,C.teal,true);
  text(s,'teams released code',75,552,355,49,29);
  text(s,'Strategies described in posters and talks',508,437,700,95,35,C.ink,true);
  text(s,'Outcomes measured under a common framework',508,555,700,92,31,C.muted);
}
{
  const s=slide('From presentations to testable questions',5);
  text(s,'24 teams   →   20 reconstructed',72,170,1136,81,51,C.teal,true);
  text(s,'Categorical features: base, synthesis, noise, optimization, attack strategy',72,290,1136,80,29,C.muted);
  text(s,'H1 · 20 teams',72,414,520,53,36,C.ink,true);
  text(s,'Design choices and\nutility / anonymization',72,491,530,105,32);
  text(s,'H2 · 361 ordered pairs',704,414,504,53,36,C.ink,true);
  text(s,'Defender–attacker combinations\nand exposed-record counts',704,491,504,110,31);
  text(s,'Features retained when present in at least four teams',72,641,1136,30,23,C.muted);
}
{
  const s=slide('H1: generation and reconstruction',6);
  bars(s,['Synthesis: no → yes','Base: B → others'],[1.26,1.55],[1.01,0.54],72,169,1136,361);
  text(s,'Synthesis was associated with higher scores on both outcomes',72,548,1136,82,34,C.teal,true);
  text(s,'Hedges’ g; n = 20. Positive favors the second category. Anonymization: post-penalty score.',72,641,1136,30,21,C.muted);
}
{
  const s=slide('H2: defender–attacker combinations',7);
  text(s,'Victim main effects: IRR 0.63–0.75 across model specifications',72,152,1136,55,29,C.muted);
  text(s,'When the attacker also uses the released model',72,218,1136,46,29,C.ink,true);
  const t=table(s,[['Victim feature','Interaction IRR','Combined IRR'],['Alternative base','1.13','0.69'],['Synthesis','1.18','0.61'],['Optimization','1.11','0.70'],['Swapping','1.16','0.65']],72,284,[530,303,303],263,25);
  t.cells.block({row:1,column:2,rowCount:4,columnCount:1}).assign({textStyle:{typeface:FONT,fontSize:25,bold:true,color:C.teal}});
  text(s,'Combined IRRs < 1: the estimated victim-side advantage persists',72,568,1136,40,29,C.teal,true);
  text(s,'Each row has its own reference. Attacker-trained-model interactions: clustered SE not estimable.',72,630,1136,48,21,C.muted);
}
{
  const s=slide('What this evidence can support',8);
  text(s,'Limits',72,176,505,55,37,C.muted,true);
  text(s,'20 teams, observed strategies\nMethod families, not implementations\nOne competition and evaluation setting',72,274,534,236,30);
  text(s,'Contribution',704,176,504,55,37,C.teal,true);
  text(s,'Specific, quantitative\nhypotheses for future tests',704,278,504,140,39,C.ink,true);
  text(s,'Causal effects and general privacy\nguarantees remain unestablished.',704,486,504,115,29,C.muted);
}
{
  const s=slide('',9,true);
  text(s,'Incomplete information\ndoes not mean\nno information',72,108,1136,273,62,C.white,true);
  text(s,'The next competition',76,464,1100,43,28,C.light);
  text(s,'Collect strategy information\nwith a common questionnaire',76,537,1100,115,40,C.white,true);
}
{
  const s=slide('',10,true);
  text(s,'Questions',72,169,1136,109,76,C.white,true);
  text(s,'Patterns Without Source\nA Meta-Analysis of PWS Cup 2025',76,355,1100,118,38,C.light);
  text(s,'Data and analysis code',76,550,1100,36,26,C.light);
  text(s,'github.com/kiti1924/PWSCUP2025_REVIEW_20260716',76,602,1120,38,28,C.white);
}
for (let i=0;i<10;i++) {
  const item=script.slides[i];
  note(allSlides[i],item.seconds,item.cue,item.speech,item.refs.map(k=>script.sources[k]).join('\n'));
}
allSlides[9].speakerNotes.textFrame.setText(`${script.slides[9].speech}\n\n質疑5分。非表示補足：11 H1全効果量、12 H2全結果、13 競技詳細、14 標本と対戦ペア、15 Netflix出典。\n\nData and analysis code: https://github.com/kiti1924/PWSCUP2025_REVIEW_20260716`);

// Detailed evidence is available during questions, hidden during the talk.
{
 const s=slide('Q&A: H1 effect sizes',11);
 table(s,[['Feature contrast','Utility g','Anonymization g'],['Base: B to others','1.55','0.54'],['Synthesis: no to yes','1.26','1.01'],['Noise: no to yes','−0.73','−0.98'],['Optimization: no to yes','1.17','0.55'],['Swapping: no to yes','−0.04','0.73']],72,172,[566,285,285],372,26);
 text(s,'Positive values favor the second category',72,574,1136,40,29,C.teal,true);
 text(s,'Hedges’ g, n = 20. Anonymization uses Anon_all, including penalties.',72,632,1136,34,23,C.muted);
 note(s,0,'すべて観測的な比較。ノイズの因果効果や差分プライバシー一般の評価ではない。','Optimization overlaps with other choices and was not retained in the selected regressions. These are point estimates, not confidence intervals.',paper+'; '+data);
}
{
 const s=slide('Q&A: H2 main and interaction effects',12);
 table(s,[['Victim feature','Main IRR','Attack target\nInteraction / total','Trained scorer\nInteraction / total'],['Reference','1.00','Main: 0.82–0.86**','Main: 1.04–1.05'],['Base: B to others','0.72–0.73*','1.13** / 0.69','1.03 / 0.78\nSE n.e.'],['Synthesis','0.63–0.65*','1.18** / 0.61','1.00 / 0.68\nSE n.e.'],['Optimization','0.73–0.75*','1.11** / 0.70','1.01 / 0.78\nSE n.e.'],['Swapping','0.68–0.70*','1.16** / 0.65','0.99 / 0.74\nSE n.e.']],72,153,[273,195,334,334],414,22);
 text(s,'Ranges span model specifications, not confidence intervals. * p < 0.05, ** p < 0.01.',72,606,1136,28,21,C.muted);
 text(s,'SE n.e.: the two-way clustered standard error for the interaction was not estimable.',72,642,1136,28,21,C.muted);
 note(s,0,'各行・各組合せは別モデル。totalはexp(βvictim + βattacker + βinteraction)。SE推定不能を非有意と呼ばない。','Eight dyadic negative binomial specifications, with two-way clustering by attacker and victim. Each specification has its own joint reference.',paper+'; paper/figs/H2/h2_heat_twoway_bw.png');
}
{
 const s=slide('Q&A: the defense and attack phases',13);
 text(s,'Defense',72,159,520,45,32,C.teal,true);
 text(s,'Attack',694,159,510,45,32,C.rust,true);
 await img(s,'.codex-pptx-build/ano_phase.png',72,217,532,278,'Paper system model: anonymization phase');
 await img(s,'.codex-pptx-build/att_phase.png',680,217,532,278,'Paper system model: membership inference attack phase');
 text(s,'Release anonymized data C\nand stroke-risk model D',72,525,532,85,29);
 text(s,'Infer which population records\nbelong to hidden sample B',680,525,532,85,29);
 text(s,'Population: 100,000 records. Hidden sample: 10,000. Synthetic health data, 18 variables.',72,640,1136,30,22,C.muted);
 note(s,0,'各チームの母集団と標本。モデルDが必ずCで学習されたとは限らない。','The model may be trained using the provided sample or generated data; the diagram does not impose training exclusively on C.',paper+'; paper/figs/system_models/ano_phase.pdf; paper/figs/system_models/att_phase.pdf');
}
{
 const s=slide('Q&A: why 20 teams and 361 pairs?',14);
 text(s,'24 registered  →  20 coded defenders',72,168,1136,75,45,C.teal,true);
 text(s,'19 coded attackers',72,293,1136,69,42,C.ink,true);
 text(s,'20 × 19 − 19 self-pairs = 361',72,417,1136,79,49,C.ink,true);
 text(s,'Team 10 submitted no attack. Team 21 withdrew.\nThe pair observations are not independent; uncertainty is clustered by both teams.',72,562,1136,95,27,C.muted);
 note(s,0,'20チームのうちTeam10は防御のみ。対応する攻撃者は19なので自己対戦19を除く。361は独立した361チームではない。','We used twenty coded defenders and nineteen coded attackers, excluding self-pairs. Dependence across victims and attackers is addressed with two-way clustered standard errors, subject to the estimability limitations shown on slide 12.',paper+'; '+data);
}
{
 const s=slide('Q&A: the Netflix evidence and its scope',15);
 text(s,'Narayanan & Shmatikov',72,177,1136,50,35,C.ink,true);
 text(s,'Public auxiliary information enabled identification of some Netflix records.\nHow To Break Anonymity of the Netflix Prize Dataset (2006 / 2007)',72,253,1136,100,28);
 text(s,'FTC closing letter · 12 March 2010',72,392,1136,50,35,C.ink,true);
 text(s,'The FTC raised concerns about the planned richer dataset.\nAfter discussions, Netflix notified the FTC that Prize 2 would be suspended.',72,467,1136,100,28);
 text(s,'A data-disclosure case; it does not establish why PWS teams withheld source code.',72,624,1136,48,25,C.teal,true);
 note(s,0,'研究が単独で中止を引き起こしたとは主張しない。Netflixはデータ公開、本研究は実装情報の不足という別の対象。','The historical sequence motivates careful disclosure. The inference that limited implementation information remains worth studying is our framing, not a causal conclusion from the Netflix case.',script.sources.netflix+'\n'+script.sources.ftc);
}
const candidatePath=path.join(tmp,'candidate.pptx');
await (await PresentationFile.exportPptx(p)).save(candidatePath);
// Set OOXML show=0 before validation so supplementary pages stay hidden.
const {execFileSync}=await import('node:child_process');
execFileSync(RUNTIME_PYTHON,['-c',`import sys,zipfile,re,os
f=sys.argv[1]; t=f+'.tmp'
with zipfile.ZipFile(f) as src, zipfile.ZipFile(t,'w',zipfile.ZIP_DEFLATED) as dst:
 for item in src.infolist():
  b=src.read(item.filename)
  m=re.fullmatch(r'ppt/slides/slide(\\d+)\\.xml',item.filename)
  if m and int(m.group(1))>10:
   b=re.sub(rb'<p:sld(?=[ >])',b'<p:sld show="0"',b,count=1)
  dst.writestr(item,b)
os.replace(t,f)`,candidatePath]);
const finalPath=path.join(out,process.env.OUTPUT_NAME || 'Kikuchi_PSD2026_Netflix_v2.pptx');
const tableOwners=[7,11,12];
const result=await finalizePresentation({workspaceDir,candidatePath,finalPath,pythonExecutable:RUNTIME_PYTHON,
 integrityValidatorPath:path.join(SKILL_DIR,'container_tools/inspect_presentation_package_integrity.py'),
 layoutValidatorPath:path.join(SKILL_DIR,'container_tools/inspect_presentation_layout_geometry.py'),
 layoutArgs:['--expected-slide-size-emu','12192000,6858000','--validate-bullet-geometry','--validate-heading-fit',...tableOwners.flatMap(n=>['--require-native-table-slide',String(n)])],
 explicitTotalSlideCount:15,requiredNativeTableOwnerSlides:tableOwners,requiredNativeChartOwnerSlides:[6],
 materializeLiteralChartWorkbooks:true,fontPolicy:{basis:'design',families:[FONT]},verifyArtifactToolImport:true,
 receiptPath:path.join(tmp,path.basename(finalPath)+'.validation.json')});
console.log(JSON.stringify(result));

