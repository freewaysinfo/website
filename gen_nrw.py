import urllib.request
import json
import math

def get_mercator(lat, lon):
    x = lon
    y = math.log(math.tan(math.pi/4 + math.radians(lat)/2)) * (180/math.pi)
    return x, y

req = urllib.request.Request("https://nominatim.openstreetmap.org/search?state=Nordrhein-Westfalen&country=Germany&polygon_geojson=1&format=json", headers={'User-Agent': 'Freeways/1.0'})
with urllib.request.urlopen(req) as response:
    data = json.loads(response.read().decode())
    
geojson = data[0]['geojson']
polygons = []
if geojson['type'] == 'MultiPolygon':
    for p in geojson['coordinates']: polygons.append(p[0])
elif geojson['type'] == 'Polygon':
    polygons.append(geojson['coordinates'][0])

proj_polygons = []
for p in polygons:
    proj_p = []
    for lon, lat in p:
        proj_p.append(get_mercator(lat, lon))
    proj_polygons.append(proj_p)

all_coords = [c for p in proj_polygons for c in p]
min_x = min(c[0] for c in all_coords)
max_x = max(c[0] for c in all_coords)
min_y = min(c[1] for c in all_coords)
max_y = max(c[1] for c in all_coords)

diff_x = max_x - min_x
diff_y = max_y - min_y

# Make it square
center_x = min_x + diff_x / 2
center_y = min_y + diff_y / 2
size = max(diff_x, diff_y)

# Add 5% padding
padding = size * 0.05
size += padding * 2

min_x = center_x - size / 2
max_x = center_x + size / 2
min_y = center_y - size / 2
max_y = center_y + size / 2

# Path string
scale = 1000
svg_paths = []
for p in proj_polygons:
    pts = []
    last_x, last_y = -999, -999
    for x_m, y_m in p:
        x = ((x_m - min_x) / size) * scale
        y = (1 - ((y_m - min_y) / size)) * scale
        if (x - last_x)**2 + (y - last_y)**2 >= 16.0:  # 4px dist
            pts.append(f"{x:.1f},{y:.1f}")
            last_x, last_y = x, y
    if pts:
        svg_paths.append("M" + " L".join(pts) + " Z")

path_str = " ".join(svg_paths)

cities = {
    "koeln": (6.9531, 50.9375),
    "bonn": (7.0954, 50.7374),
    "duesseldorf": (6.7734, 51.2277),
    "aachen": (6.0838, 50.7753),
    "leverkusen": (6.9829, 51.0303),
    "moenchengladbach": (6.4422, 51.1913),
    "bergisch-gladbach": (7.1329, 50.9926),
    "frechen": (6.8164, 50.9173)
}

print(f"PATH_START\n{path_str}\nPATH_END")

for cid, (lon, lat) in cities.items():
    xm, ym = get_mercator(lat, lon)
    px = ((xm - min_x) / size) * 100
    py = (1 - ((ym - min_y) / size)) * 100
    print(f"{cid}|{px:.1f}|{py:.1f}")
