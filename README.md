# COAST-Wind-Geoportal

**Colombian Ocean Activity and Susceptibility Tool (COAST) - Wind**

COAST-Wind is a geovisor and website of the Stockholm Environment Institute Latin America Center (SEI-LA). The site introduces the project and allows users to explore geographic information about Colombia's Caribbean coast through a Leaflet-based viewer that consumes GeoServer WMS layers. The repository's catalog brings together metadata for environmental and human-activity layers.

## Website

The published version is available at [https://coast-wind.org](https://coast-wind.org). The `docs/` directory contains the site's pages and static resources.

## Geovisor features

The interface in `docs/geovisor.html` and its associated code include:

- An interactive Leaflet map with a basemap selector, opacity control, and controls for zoom, the initial view, and location.
- A panel for showing or hiding layers and viewing their symbology, with controls to activate or deactivate layers.
- Place and address search.
- Tools for drawing points, files, and geometries, measuring, and clearing graphics.
- Import of vector files in `.zip` (Shapefile), `.geojson`, `.json`, `.kml`, and `.topojson` formats.
- An interface in Spanish, English, and Portuguese, with light and dark themes.

The `json_query.json` file contains layer records with names and descriptions in Spanish, English, and Portuguese, sources, and metadata links when available. The catalog covers protected areas, marine environments and species, coastal features, fishing, infrastructure, and other human uses. The catalog contains metadata; it does not contain the raster or vector files for each layer.

## Run locally

There is no `package.json`, frontend dependency manifest, or automated test instructions in the repository. To serve the static pages from a local copy of the repository, use Python 3:

```bash
python -m http.server 8000 --directory docs
```

Open `http://localhost:8000/` for the home page, or go directly to `http://localhost:8000/geovisor.html`, `http://localhost:8000/introduction.html`, or `http://localhost:8000/contact.html`. The geovisor queries external services, including GeoServer; serving the files locally does not install or configure those services.

## Geographic data and services

- `geodatabase_COAST/CreationCOASTdatabase.sql` contains SQL instructions to create a database and schema, assign permissions, and enable PostGIS spatial extensions.
- `geodatabase_COAST/InputPostGISdata.sql` documents GIS data import with `shp2pgsql`, `raster2pgsql`, and `psql`, as well as example queries. It includes paths and parameters specific to an environment; review and replace them before reuse.
- `geodatabase_COAST/conversionGIStoWGS84.ipynb` demonstrates reprojecting a Shapefile to WGS 84 (EPSG:4326) with GeoPandas.
- `GCP.markdown` collects commands and configuration snippets for installing GeoServer and Nginx and publishing layers on a virtual machine. It is an operational guide, not an automated or ready-to-run configuration; it contains example values and server configurations that must be checked before use.
- `configurar_cache_geoserver.py` configures GeoWebCache for the layers in a GeoServer workspace. It supports simulation, configuration, cache seeding, and URL and zoom options; it prompts for the password through an environment variable or the keyboard.

The scripts and documents describe parts of the geographic infrastructure, but this repository does not include a complete PostgreSQL/PostGIS or GeoServer installation, or the GIS data published through those services.

## File organization

```text
.
├── .gitattributes                         # Language detection attributes for SQL and notebooks
├── .gitignore                              # Jekyll, Wrangler, local-variable, and listed-image exclusions
├── .github/
│   └── ISSUE_TEMPLATE/
│       └── bug_report.md                   # Bug report template
├── assets/
│   └── preview.png                         # Project preview image
├── COAST_Visualization.qgz                 # QGIS project
├── CODE_OF_CONDUCT.md                      # Contributor Covenant, version 2.0
├── CONTRIBUTING.md                         # Brief contribution guidelines file
├── GCP.markdown                            # GeoServer/Nginx installation and deployment notes
├── LICENSE                                 # GNU General Public License, version 3
├── README.md                               # Repository description and file guide
├── SECURITY.md                             # Security policy and supported-versions template
├── configurar_cache_geoserver.py           # GeoWebCache configuration and cache seeding
├── create_json.py                          # Conversion of a local CSV to JSON
├── json_query.json                         # Geographic metadata catalog
├── geodatabase_COAST/
│   ├── CreationCOASTdatabase.sql           # Database, schema, roles, and extensions setup
│   ├── InputPostGISdata.sql                # PostGIS import and query examples
│   └── conversionGIStoWGS84.ipynb          # GIS data reprojection to EPSG:4326
├── src/
│   └── components/                         # Vue components for a map interface
│       ├── LayerPanel.vue                  # Example layer controls
│       ├── MapView.vue                     # Leaflet map and WMS configuration
│       ├── Metadata.vue                    # Example source and date display
│       └── Topbar.vue                      # Top bar with Colombia date and time
└── docs/                                   # Published static site and Wrangler configuration
    ├── Body_wepage.jpg                     # Image
    ├── Esri_Hybrid_Map.png                  # Basemap image
    ├── Esri_Satellite_Map.png               # Basemap image
    ├── Esri_World_Street_Map.png            # Basemap image
    ├── Google_Maps.png                      # Basemap image
    ├── Google_Satellite.png                 # Basemap image
    ├── Profile1.jpg                          # Profile image
    ├── Profile2.webp                         # Profile image
    ├── Profile3.webp                         # Profile image
    ├── Profile4.webp                         # Profile image
    ├── Profile5.webp                         # Profile image
    ├── contact.html                         # Contact form
    ├── development.css                      # Development page styles
    ├── development.html                     # Development page
    ├── development.js                       # Development page behavior
    ├── geovisor.css                         # Geovisor styles
    ├── geovisor.html                        # Geovisor interface
    ├── geovisor.js                          # Map and tool logic
    ├── index.css                            # Home page styles
    ├── index.html                           # Home page and navigation
    ├── index.js                             # Language, theme, clock, and previews
    ├── introduction.css                     # Shared introduction and contact styles
    ├── introduction.html                    # Project description, team, and topics
    ├── introduction.js                      # Language, theme, and introduction/contact index
    ├── logo-inst1.png                       # Institutional logo image
    ├── logo-inst2.png                       # Institutional logo image
    ├── logo-inst3.png                       # Institutional logo image
    └── wrangler.jsonc                       # Wrangler configuration for docs/ resources
```

### Vue components

The four components in `src/components/` form a Vue interface separate from the static HTML pages in `docs/`. `MapView.vue` configures basemaps and three WMS layers; `LayerPanel.vue` provides example controls for climate and hydrology, and `Metadata.vue` contains example metadata. The repository has no manifest or entry point integrating these components with `docs/geovisor.html`.

### Supporting files

- `.github/ISSUE_TEMPLATE/bug_report.md` defines the fields in the bug report template. There are no GitHub Actions workflows in the current repository tree.
- `create_json.py` converts a local CSV to `json_query.json`; the CSV path is specific to a particular local machine, and the script requires `pandas`.
- `COAST_Visualization.qgz` is a compressed QGIS project.
- `assets/preview.png` is the project preview graphic.
- `CONTRIBUTING.md` contains only a guidelines heading; `SECURITY.md` retains template text about supported versions and vulnerability reporting.
- `.gitattributes` configures how GitHub classifies SQL and notebook files. `.gitignore` includes exclusions for local files and some screenshots that are not in the versioned tree.

## License and community

The repository includes the GNU GPL v3 license in `LICENSE`, the code of conduct in `CODE_OF_CONDUCT.md`, and the `CONTRIBUTING.md` and `SECURITY.md` files described above.
