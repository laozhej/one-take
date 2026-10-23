# Mean absolute difference between consecutive frames, in the order the times are given.
# usage: python3 -I seam.py <dir> t1 t2 t3 ...
import sys, os
from PIL import Image, ImageChops, ImageStat
d = sys.argv[1]; ts = sys.argv[2:]
def load(t):
    for name in (f't_{t}.png', f't_{float(t):g}.png'):
        p = os.path.join(d, name)
        if os.path.exists(p): return Image.open(p).convert('RGB')
    raise SystemExit(f'missing {t}')
prev = None
for t in ts:
    im = load(t)
    if prev is not None:
        df = ImageChops.difference(prev[1], im)
        print(f'{prev[0]:>8} → {t:<8} mean |Δ| = {sum(ImageStat.Stat(df).mean)/3:6.3f}')
    prev = (t, im)
