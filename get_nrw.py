import urllib.request
import json
import math

# Get NRW GeoJSON boundary from Nominatim
url = "https://nominatim.openstreetmap.org/search?state=Nordrhein-Westfalen&country=Germany&polygon_geojson=1&format=json"

req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    with urllib.request.urlopen(req) as response:
        data = json.loads(response.read().decode())
        geojson = data[0]['geojson']
        
        # very basic projection to SVG path just to see what it looks like
        if geojson['type'] == 'MultiPolygon':
            coords = geojson['coordinates'][0][0]
        else:
            coords = geojson['coordinates'][0]
        
        # Calculate bounding box
        min_x = min(c[0] for c in coords)
        max_x = max(c[0] for c in coords)
        min_y = min(c[1] for c in coords)
        max_y = max(c[1] for c in coords)
        
        width = max_x - min_x
        height = max_y - min_y
        
        print(f"Bounding Box: Lon {min_x} to {max_x}, Lat {min_y} to {max_y}")
        
except Exception as e:
    print(f"Error: {e}")

