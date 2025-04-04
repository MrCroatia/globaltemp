<template>
  <div class="chart-container">
    <h2>Global Temperature Anomalies by Region</h2>
    <div class="map-wrapper" ref="mapContainer">
      <div id="map" style="height: 100%; width: 100%;"></div>
    </div>
    <div class="legend">
      <div class="legend-title">Temperature Anomaly (°C)</div>
      <div class="legend-scale">
        <div v-for="(color, index) in legendColors" :key="index" class="legend-item">
          <div class="color-box" :style="{ backgroundColor: color.color }"></div>
          <span>{{ color.label }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, computed } from 'vue';
import { useStore } from 'vuex';
import L from 'leaflet';
import { getColorByTemperature } from '../data/globalTemperatureData';

export default {
  name: 'MapChart',
  setup() {
    const store = useStore();
    const mapContainer = ref(null);
    let map = null;
    
    const regionalData = computed(() => {
      return store.state.regionalData;
    });
    
    const legendColors = [
      { color: 'rgba(0, 0, 255, 0.7)', label: '< -0.5' },
      { color: 'rgba(0, 191, 255, 0.7)', label: '-0.5 to 0' },
      { color: 'rgba(255, 255, 0, 0.7)', label: '0 to 0.5' },
      { color: 'rgba(255, 165, 0, 0.7)', label: '0.5 to 1.0' },
      { color: 'rgba(255, 69, 0, 0.7)', label: '1.0 to 1.5' },
      { color: 'rgba(255, 0, 0, 0.7)', label: '> 1.5' }
    ];
    
    onMounted(() => {
      // Initialize the map
      map = L.map('map').setView([20, 0], 2);
      
      // Add the tile layer (base map)
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 18
      }).addTo(map);
      
      // Add markers for each region
      regionalData.value.forEach(region => {
        const color = getColorByTemperature(region.anomaly);
        const circleRadius = Math.max(20, region.anomaly * 15);
        
        const circle = L.circleMarker([region.lat, region.lng], {
          radius: circleRadius,
          fillColor: color,
          color: '#fff',
          weight: 1,
          opacity: 1,
          fillOpacity: 0.8
        }).addTo(map);
        
        // Add a popup with region information
        circle.bindPopup(`
          <strong>${region.region}</strong><br>
          Temperature Anomaly: ${region.anomaly.toFixed(1)}°C
        `);
        
        // Add a tooltip that shows on hover
        circle.bindTooltip(`${region.region}: ${region.anomaly.toFixed(1)}°C`);
      });
      
      // Force map to update its size after rendering
      setTimeout(() => {
        map.invalidateSize();
      }, 100);
    });
    
    return {
      mapContainer,
      legendColors
    };
  }
};
</script>

<style scoped>
.chart-container {
  width: 100%;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}

.map-wrapper {
  height: 500px;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 15px;
}

.legend {
  background-color: rgba(255, 255, 255, 0.9);
  padding: 10px;
  border-radius: 4px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
}

.legend-title {
  font-weight: bold;
  margin-bottom: 5px;
  text-align: center;
}

.legend-scale {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.legend-item {
  display: flex;
  align-items: center;
  margin-right: 10px;
  margin-bottom: 5px;
}

.color-box {
  width: 20px;
  height: 20px;
  margin-right: 5px;
  border-radius: 3px;
}

@media (max-width: 768px) {
  .map-wrapper {
    height: 350px;
  }
  
  h2 {
    font-size: 1.2rem;
  }
  
  .legend-scale {
    flex-direction: column;
  }
}
</style>
