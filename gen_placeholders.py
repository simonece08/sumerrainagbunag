import os

images = [
    ("hero", 1200, 1500, "#F3D48A", "#B9812E", "hero"),
    ("before-we-met-01", 900, 1100, "#F6E6BF", "#C99A4E", "before"),
    ("before-we-met-02", 900, 1100, "#F2DFAF", "#C08F45", "before"),
    ("before-we-met-03", 900, 1100, "#F6E6BF", "#C99A4E", "before"),
    ("meeting-day", 1400, 1000, "#F5CB6B", "#A9711F", "meet"),
    ("first-memory-01", 1000, 1250, "#F7E2AE", "#C68E42", "memory"),
    ("first-memory-02", 1100, 900, "#F2D890", "#B9812E", "memory"),
    ("first-memory-03", 950, 1200, "#F7E2AE", "#C68E42", "memory"),
    ("first-memory-04", 1100, 900, "#F2D890", "#B9812E", "memory"),
    ("journey-01", 1300, 900, "#F1D689", "#AD7726", "journey"),
    ("journey-02", 900, 1200, "#F1D689", "#AD7726", "journey"),
    ("journey-03", 1300, 900, "#EFCE7C", "#A5701F", "journey"),
    ("journey-04", 900, 1200, "#EFCE7C", "#A5701F", "journey"),
    ("journey-05", 1300, 900, "#ECC66E", "#9C6819", "journey"),
    ("little-thing-01", 800, 800, "#F6E2AC", "#C08E44", "little"),
    ("little-thing-02", 800, 800, "#F2D68F", "#B7822F", "little"),
    ("little-thing-03", 800, 800, "#F6E2AC", "#C08E44", "little"),
    ("little-thing-04", 800, 800, "#F2D68F", "#B7822F", "little"),
    ("little-thing-05", 800, 800, "#F6E2AC", "#C08E44", "little"),
    ("little-thing-06", 800, 800, "#F2D68F", "#B7822F", "little"),
    ("final-photo", 1300, 1500, "#F0C869", "#8A5A1B", "final"),
]

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

os.makedirs("assets/images", exist_ok=True)
for name, w, h, c1, c2, label in images:
    fs1 = max(14, w // 40)
    fs2 = max(11, w // 55)
    svg = svg_template.format(w=w, h=h, c1=c1, c2=c2, label=name.upper(), fs1=fs1, fs2=fs2)
    with open(f"assets/images/{name}.svg", "w") as f:
        f.write(svg)

print("Generated", len(images), "placeholder images")
