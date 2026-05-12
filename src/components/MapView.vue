<template>
  <div id="map"></div>
</template>

<script>
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default {
  name: "MapView",
  mounted() {
    const map = L.map("map").setView([4.711, -74.072], 6); // Bogotá
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors"
    }).addTo(map);
  }
};
</script>
