"""Render the supplied paper's PDF diagrams. Run from the repository root."""
from pathlib import Path
import pypdfium2 as pdfium

build = Path('.codex-pptx-build')
build.mkdir(exist_ok=True)
for name in ('ano_phase', 'att_phase'):
    source = Path('PWSCUP2025_REVIEW_PUB/paper/figs/system_models') / f'{name}.pdf'
    with pdfium.PdfDocument(source) as document:
        document[0].render(scale=2).to_pil().save(build / f'{name}.png')
