<template>
  <div id="map-container"></div>
</template>

<script>
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default {
  name: "MapView",
  // Recibe de forma estricta el objeto de checkboxes desde geovisor.html
  props: {
    visibilidad: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      map: null,
      basemaps: {},
      currentBasemapKey: "osm",
      wmsLayersMap: {}, // Guarda las instancias activas para poder borrarlas limpiamente
      
      // Endpoints de tus GeoServicios WMS ya validados en producción
      wmsConfigs: {
        rasterClusters: {
          url: "https://geoserver.coast-wind.org/geoserver/wms",
          options: {
            layers: "coast_wind_data:raster_clusters_4326", // Tu raster en grados decimales
            format: "image/png",
            transparent: true,
            version: "1.1.1"
          }
        },
        mcsi: {
          url: "https://geoserver.coast-wind.org/geoserver/wms",
          options: {
            layers: "coast_wind_data:mcsi_vector",
            format: "image/png",
            transparent: true,
            version: "1.1.1"
          }
        },
        esi: {
          url: "https://geoserver.coast-wind.org/geoserver/wms",
          options: {
            layers: "coast_wind_data:esi_vector",
            format: "image/png",
            transparent: true,
            version: "1.1.1"
          }
        }
      }
    };
  },
  mounted() {
    // Inicializar mapa centrado en la costa norte de Colombia
    this.map = L.map("map-container", { zoomControl: false }).setView([11.5, -74.5], 7);
    
    // Ubicar los botones de zoom en una esquina limpia
    L.control.zoom({ position: "bottomright" }).addTo(this.map);

    // Mapeo de capas base globales
    this.basemaps = {
      esri: L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"),
      osm: L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "© OpenStreetMap contributors"
      }),
      arcgis: L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}"),
      google: L.tileLayer("http://{s}.google.com/vt/lyrs=y&x={x}&y={y}&z={z}", { 
        subdomains: ["mt0", "mt1", "mt2", "mt3"] 
      })
    };

    // Agregar mapa base inicial
    this.basemaps[this.currentBasemapKey].addTo(this.map);
  },
  methods: {
    // Método ejecutado por la botonera externa
    setBasemap(key) {
      if (!this.map || !this.basemaps[key]) return;
      this.map.removeLayer(this.basemaps[this.currentBasemapKey]);
      this.basemaps[key].addTo(this.map);
      this.currentBasemapKey = key;
    }
  },
  // OYENTE REACTIVO INTERNO
  watch: {
    visibilidad: {
      handler(nuevoEstadoCapas) {
        // Evaluamos cada capa declarada en la configuración
        Object.keys(this.wmsConfigs).forEach((key) => {
          const debeMostrarse = nuevoEstadoCapas[key];

          if (debeMostrarse) {
            // Si el checkbox está encendido y la capa NO está renderizada, se consume el WMS
            if (!this.wmsLayersMap[key]) {
              const config = this.wmsConfigs[key];
              this.wmsLayersMap[key] = L.tileLayer.wms(config.url, config.options);
              this.wmsLayersMap[key].addTo(this.map);
              console.log(`[WMS ACTIVO] Consumiendo capa: ${key}`);
            }
          } else {
            // Si el checkbox se apaga, removemos la capa del lienzo y limpiamos la memoria
            if (this.wmsLayersMap[key]) {
              this.map.removeLayer(this.wmsLayersMap[key]);
              delete this.wmsLayersMap[key];
              console.log(`[WMS INACTIVO] Removiendo capa: ${key}`);
            }
          }
        });
      },
      deep: true // Fuerza a Vue a revisar las propiedades internas del objeto cuando cambian
    }
  }
};
</script>

<style scoped>
#map-container {
  width: 100%;
  height: 100%;
  border-radius: 0.75rem;
  background-color: #f1f5f9;
}
</style>