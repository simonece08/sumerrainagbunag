svg_template = '''<svg xmlns="http://www.w3.org/2000/svg" width="{w}" height="{h}" viewBox="0 0 {w} {h}">
  <defs>
    <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="{c1}"/>
      <stop offset="100%" stop-color="{c2}"/>
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="30%" r="70%">
      <stop offset="0%" stop-color="#FFFDF6" stop-opacity="0.55"/>
      <stop offset="100%" stop-color="#FFFDF6" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="{w}" height="{h}" fill="url(#g)"/>
  <rect width="{w}" height="{h}" fill="url(#glow)"/>
  <g opacity="0.5" font-family="Georgia, serif" fill="#4A3419">
    <text x="50%" y="47%" text-anchor="middle" font-size="{fs1}" letter-spacing="2">PHOTO PLACEHOLDER</text>
    <text x="50%" y="53%" text-anchor="middle" font-size="{fs2}" letter-spacing="4">{label}</text>
  </g>
</svg>'''

images = [
    ("before-we-met-04", 900, 1100, "#F2DFAF", "#C08F45"),
    ("before-we-met-05", 900, 1100, "#F6E6BF", "#C99A4E"),
    ("before-we-met-06", 900, 1100, "#F2DFAF", "#C08F45"),
    ("first-memory-05", 1000, 1250, "#F7E2AE", "#C68E42"),
    ("first-memory-06", 1100, 900, "#F2D890", "#B9812E"),
    ("journey-06", 1300, 900, "#EACB6A", "#946417"),
    ("little-thing-07", 800, 800, "#F6E2AC", "#C08E44"),
    ("little-thing-08", 800, 800, "#F2D68F", "#B7822F"),
    ("little-thing-09", 800, 800, "#F6E2AC", "#C08E44"),
]

for name, w, h, c1, c2 in images:
    fs1 = max(14, w // 40)
    fs2 = max(11, w // 55)
    svg = svg_template.format(w=w, h=h, c1=c1, c2=c2, label=name.upper(), fs1=fs1, fs2=fs2)
    with open(f"assets/images/{name}.svg", "w") as f:
        f.write(svg)

print("done")
