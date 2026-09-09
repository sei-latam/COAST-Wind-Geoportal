# COAST-Wind-Geoportal

**Colombian Ocean Activity and Susceptibility Tool - Wind (COAST)**

A modern geovisualization platform for analyzing environmental sensitivity and spatial suitability for wind energy development along Colombia's Caribbean coast. COAST integrates marine ecosystem data, protected areas, and biodiversity hotspots to support evidence-based marine spatial planning.

![GitHub License](https://img.shields.io/badge/license-GPLv3-blue)
![GitHub Stars](https://img.shields.io/github/stars/sei-latam/COAST-Wind-Geoportal?style=flat)
![Contributors](https://img.shields.io/github/contributors/sei-latam/COAST-Wind-Geoportal)

---

## 🌐 Live Platform

The COAST-Wind Geovisor is deployed at: **[https://coast-wind.org](https://coast-wind.org)**

---

## 📋 Features

- **Interactive Web Mapping** – Leaflet-based geovisor with multiple basemap layers (OpenStreetMap, ESRI, Google)
- **27 Environmental Layers** – Marine habitats, protected areas, biodiversity hotspots, coastal features
- **Spatial Analysis Tools** – Point queries, polygon drawing, distance measurement, custom file upload
- **Data Export** – Download consulted areas as CSV reports with environmental metadata
- **Multilingual Interface** – Spanish, English, German, French, Italian, Japanese, Korean, Portuguese, Russian, Chinese
- **Responsive Design** – Desktop-optimized interface with dark/light theme toggle
- **GIS Data Integration** – PostGIS spatial database with OGC WMS/WFS services via GeoServer

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** 16+ (for development/local testing)
- **Python 3.8+** (for data processing scripts)
- **PostgreSQL 13+** with PostGIS extension (for backend deployment)
- **Java 21 OpenJDK** (for GeoServer deployment)
- **Nginx** or reverse proxy (for production)

### Frontend Development

```bash
# Clone repository
git clone https://github.com/sei-latam/COAST-Wind-Geoportal.git
cd COAST-Wind-Geoportal

# Install dependencies (if using npm)
npm install

# Start development server
npm run dev
# Or use Python's built-in HTTP server
cd docs
python -m http.server 8000

# Open browser
# http://localhost:8000/index.html
# http://localhost:8000/docs/geovisor.html
```

### Backend Deployment

For production GeoServer + PostGIS deployment on cloud infrastructure:

1. **Review deployment documentation** – See `docs/DEPLOYMENT.md`
2. **Configure environment variables** – Create `.env` file with required settings (see `.env.example`)
3. **Initialize database** – Run PostGIS setup scripts
4. **Deploy GeoServer** – Follow containerized deployment guide
5. **Configure reverse proxy** – Set up Nginx with TLS

**⚠️ Security Warning:** Never commit credentials, API keys, database passwords, or internal IP addresses to version control. Use environment variables and secrets management systems.

---

## 📁 Project Structure

```
├── README.md                          # This file
├── CONTRIBUTING.md                   # Contribution guidelines
├── SECURITY.md                        # Security policy & vulnerability reporting
├── CODE_OF_CONDUCT.md                 # Community standards
├── LICENSE                            # GPLv3 license
│
├── src/                               # Vue.js components (source)
│   └── components/
│       ├── MapView.vue                # Main Leaflet map component
│       ├── LayerPanel.vue             # Layer management
│       ├── Topbar.vue                 # Header/navigation
│       └── Metadata.vue               # Layer metadata viewer
│
├── docs/                              # Deployed frontend assets
│   ├── index.html                     # Landing page
│   ├── geovisor.html                  # Main geovisor interface
│   ├── introduction.html               # Project overview
│   ├── development.html                # Development status
│   ├── contact.html                   # Contact form
│   ├── geovisor.js                    # Core mapping logic (47KB)
│   ├── geovisor.css                   # Map styling
│   ├── index.css                      # Landing page styles
│   ├── *.png, *.webp                  # Images and logos
│   └── wrangler.jsonc                 # Cloudflare Workers config
│
├── geodatabase_COAST/                 # Database scripts & notebooks
│   ├── CreationCOASTdatabase.sql      # PostGIS schema initialization
│   ├── InputPostGISdata.sql           # Data import commands
│   └── conversionGIStoWGS84.ipynb     # Coordinate transformation
│
├── create_json.py                     # CSV → JSON metadata catalog converter
├── json_query.json                    # Environmental layer catalog (27 layers)
│
└── .github/
    ├── ISSUE_TEMPLATE/
    └── workflows/                     # CI/CD workflows (GitHub Actions)
```

---

## 🗺️ Data & Layers

COAST integrates **27 geospatial layers** from authoritative Colombian sources:

### Layer Categories

| Category | Layers | Source |
|----------|--------|--------|
| **Protected Areas** | 9 | RUNAP (Parques Nacionales de Colombia) |
| **Marine Habitats** | 5 | INVEMAR |
| **Biodiversity Hotspots** | 8 | INVEMAR, conservation partners |
| **Coastal Features** | 3 | INVEMAR, SGC |
| **Socioeconomic** | 2 | INVEMAR |

### Layer Metadata

All layer information is stored in [`json_query.json`](./json_query.json) with:
- Layer name and description
- Data source and authority
- Restrictions & usage recommendations
- Links to metadata (XML schemas, data portals)

**To add a new layer:**
1. Convert GIS file to EPSG:4326 (WGS84)
2. Follow instructions in deployment documentation
3. Update `json_query.json` with metadata
4. Test in development environment before production deployment

---

## 🛠️ Development

### Tech Stack

- **Frontend:** Vue.js, Leaflet.js 1.9.4, Tailwind CSS, Font Awesome
- **Backend:** GeoServer 2.24.2, PostGIS, PostgreSQL 13+
- **Infrastructure:** Nginx, Docker (optional), Google Cloud Platform
- **Deployment:** Cloudflare Workers (frontend), Cloud Run / VM (backend)

### Running Tests

```bash
# Lint code
npm run lint

# Run unit tests
npm run test

# Run end-to-end tests
npm run test:e2e
```

### Building for Production

```bash
# Build frontend assets
npm run build

# Optimize GeoServer configuration
./scripts/optimize-geoserver.sh

# Deploy to staging
npm run deploy:staging

# Deploy to production
npm run deploy:production
```

---

## 📝 Configuration

### Environment Variables

Create a `.env` file based on `.env.example`:

```bash
# Frontend
VUE_APP_GEOSERVER_URL=https://your-geoserver-domain.com/geoserver
VUE_APP_API_URL=https://your-api-domain.com
VUE_APP_ENVIRONMENT=production

# Backend (GeoServer)
GEOSERVER_HOME=/usr/share/geoserver
GEOSERVER_DATA_DIR=/var/geoserver/data_dir
JAVA_HOME=/usr/lib/jvm/java-21-openjdk-amd64

# Database
DATABASE_USER=coastal_user
DATABASE_POOL_SIZE=20
```

**⚠️ NEVER commit actual `.env` files to version control.**

Use a secrets management system:
- **Local:** `.env.local` (add to `.gitignore`)
- **Cloud:** Google Secret Manager, AWS Secrets Manager, HashiCorp Vault
- **CI/CD:** GitHub Secrets, GitLab CI/CD Variables

---

## 🚨 Security

### Reporting Vulnerabilities

🔒 **PLEASE DO NOT OPEN ISSUES FOR SECURITY VULNERABILITIES**

If you discover a security vulnerability, **email** security@sei.org with:
- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Suggested fix (if available)

**Do not** post security issues on GitHub, Twitter, or public channels.

See [`SECURITY.md`](./SECURITY.md) for detailed security policy and supported versions.

### Best Practices

- ✅ Keep dependencies updated (`npm audit`, `pip-audit`)
- ✅ Use HTTPS everywhere (TLS 1.2+)
- ✅ Never commit credentials, API keys, or passwords
- ✅ Enable CSRF protection on all state-changing endpoints
- ✅ Validate and sanitize all user inputs
- ✅ Implement rate limiting on public APIs
- ✅ Use environment variables for sensitive configuration
- ✅ Enable Web Application Firewall (WAF) on production

---

## 📚 Documentation

- **[`CONTRIBUTING.md`](./CONTRIBUTING.md)** – How to contribute code, report bugs, request features
- **[`SECURITY.md`](./SECURITY.md)** – Security policy, vulnerability reporting, supported versions
- **[`CODE_OF_CONDUCT.md`](./CODE_OF_CONDUCT.md)** – Community guidelines and standards

---

## 🤝 Contributing

We welcome contributions! Please read [`CONTRIBUTING.md`](./CONTRIBUTING.md) for:

- How to set up your development environment
- Coding standards and conventions
- Testing requirements
- Pull request process
- Code review guidelines

### Contributors

**Developed by** [Stockholm Environment Institute Latin America Center (SEI-LA)](https://www.sei.org/centres/latinoamerica/)

Special thanks to [INVEMAR](https://www.invemar.org.co/) and [Parques Nacionales Naturales de Colombia](https://www.parquesnacionales.gov.co/) for data partnership.

---

## 📄 License

This project is licensed under the **GNU General Public License v3.0** – see [`LICENSE`](./LICENSE) for details.

### Summary

You are free to:
- ✅ Use commercially
- ✅ Modify the code
- ✅ Distribute copies

Under the conditions that you:
- 📋 License derivatives under GPLv3
- 📢 Disclose source code
- 📝 Include license and copyright notice
- 📊 Document significant changes

See [`LICENSE`](./LICENSE) for complete terms.

---

## 📞 Support & Contact

- **Project Website:** [https://www.sei.org/projects/coast/](https://www.sei.org/projects/coast/)
- **Email:** [contact-coast@sei.org](mailto:contact-coast@sei.org)
- **GitHub Issues:** [Report bugs & request features](https://github.com/sei-latam/COAST-Wind-Geoportal/issues)
- **SEI-LA Office:** [www.sei.org/centres/latinoamerica/](https://www.sei.org/centres/latinoamerica/)

### Funding & Acknowledgments

COAST-Wind development is supported by:
- [Fondo de Adaptación](https://www.fondoadaptacion.gov.co/)
- [The Nature Conservancy (TNC)](https://www.tnc.org/)
- [World Wildlife Fund (WWF)](https://www.worldwildlife.org/)

---

## 📈 Status

| Component | Status | Notes |
|-----------|--------|-------|
| Frontend | ✅ Production | Deployed via Cloudflare Workers |
| GeoServer | ✅ Production | WMS/WFS available |
| Database | ✅ Production | PostGIS with 27 layers |
| Tests | 🟡 Partial | Unit tests needed |
| Documentation | 🟡 In Progress | API & deployment docs needed |
| CI/CD | 🟡 Partial | GitHub Actions workflows in progress |

---

**Last Updated:** September 2026 | **Maintainer:** SEI-LA Development Team
