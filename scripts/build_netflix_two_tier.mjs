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
const tmp = path.join(workspaceDir, '.codex-pptx-build', 'netflix-two-tier');
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
const s=slide('',2);
text(s,'Netflix Prize shows the tension in data disclosure',58,42,1164,66,43,C.ink,true);
const nodes=[
 {x:58,y:130,label:'2006\nNetflix Prize',accent:true},
 {x:293,y:310,label:'Anonymized\nmovie ratings'},
 {x:528,y:130,label:'Linked with\nIMDb ratings'},
 {x:763,y:310,label:'Some users\nre-identified'},
 {x:998,y:130,label:'2010\nPrize 2 suspended',accent:true}
];
// Native editable shapes reproduce the user's two-tier process diagram.
for (const n of nodes) {
 const box=s.shapes.add({geometry:'roundRect',position:{left:n.x,top:n.y,width:220,height:150},fill:n.accent?'#F8E8ED':'#EDF2F5',line:{fill:'none',width:0},borderRadius:14});
 box.text=n.label;
 box.text.style={typeface:FONT,fontSize:n.accent?29:28,bold:!!n.accent,color:n.accent?'#AF193F':C.ink,alignment:'center',verticalAlignment:'middle',autoFit:'none',insets:{left:12,right:12,top:12,bottom:12}};
}
for(let i=0;i<4;i++) {
 const down=i%2===0;
 const pts=[[0,0],[17,0],[17,66],[87,66],[87,51],[115,80],[87,105],[87,89],[0,89]];
 const commands=pts.map(([x,y],j)=>({[j?'lineTo':'moveTo']:{x,y:down?y:105-y}}));
 commands.push({close:{}});
 s.shapes.add({geometry:'custom',position:{left:nodes[i].x+110,top:down?289:196,width:115,height:105},fill:'#196481',line:{fill:'#123D50',width:1.5},customPaths:[{width:115,height:105,commands}]});
}
text(s,'FTC concerns about\nthe planned richer dataset',998,302,224,84,23,C.muted);
text(s,'Disclosure helps research, but can create privacy risks.',83,508,1114,54,37,C.ink,true);
const q=s.shapes.add({geometry:'roundRect',position:{left:110,top:588,width:1060,height:60},fill:'#F3F6F8',line:{fill:'none',width:0},borderRadius:10});
q.text='What can researchers learn when implementation details are unavailable?';
q.text.style={typeface:FONT,fontSize:27,bold:true,color:C.ink,alignment:'center',verticalAlignment:'middle',insets:{left:16,right:16,top:8,bottom:8}};
text(s,'Sources: Narayanan & Shmatikov (2006/2008); FTC closing letter (2010)',110,671,1020,28,20,C.muted);
const d=JSON.parse(await fs.readFile(path.join(out,'netflix_script.json'),'utf8'));
note(s,60,'矢印は出来事の順序。IMDbとの照合が再識別リスクの実証につながる。FTCの懸念はPrize 2向けに計画された、より豊富なデータが対象。Netflixのデータ公開と、本研究の実装情報不足を区別する。',d.slides[1].speech,d.sources.netflix+'\n'+d.sources.ftc);
const candidatePath=path.join(tmp,'candidate.pptx');
await (await PresentationFile.exportPptx(p)).save(candidatePath);
const finalPath=path.join(out,'Netflix_two_tier_editable_v2.pptx');
console.log(await finalizePresentation({workspaceDir,candidatePath,finalPath,pythonExecutable:RUNTIME_PYTHON,
 integrityValidatorPath:path.join(SKILL_DIR,'container_tools/inspect_presentation_package_integrity.py'),
 layoutValidatorPath:path.join(SKILL_DIR,'container_tools/inspect_presentation_layout_geometry.py'),
 layoutArgs:['--expected-slide-size-emu','12192000,6858000','--validate-heading-fit'],explicitTotalSlideCount:1,
 requiredNativeTableOwnerSlides:[],requiredNativeChartOwnerSlides:[],fontPolicy:{basis:'design',families:[FONT]},verifyArtifactToolImport:true,
 receiptPath:path.join(tmp,'final-v2.validation.json')}));
