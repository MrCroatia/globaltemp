<template>
  <div class="dashboard">
    <header class="dashboard-header">
      <h1>
        <img src="/thermometer-icon.svg" alt="Thermometer icon" class="dashboard-icon">
        GlobalTemp
      </h1>
      <div class="view-selector">
        <button
          v-for="view in views"
          :key="view.id"
          :class="['view-button', { active: activeView === view.id }]"
          @click="setActiveView(view.id)"
        >
          {{ view.label }}
        </button>
      </div>
    </header>

    <div class="dashboard-content">
      <div v-if="isLoading" class="loading-overlay">
        <div class="loading-spinner"></div>
      </div>

      <transition name="fade" mode="out-in">
        <component :is="currentComponent" :key="activeView"></component>
      </transition>

      <InfoPanel />
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import LineChart from './LineChart.vue';
import BarChart from './BarChart.vue';
import MapChart from './MapChart.vue';
import InfoPanel from './InfoPanel.vue';

export default {
  name: 'Dashboard',
  components: {
    LineChart,
    BarChart,
    MapChart,
    InfoPanel
  },
  setup() {
    const store = useStore();

    const views = [
      { id: 'annual', label: 'Annual Trend' },
      { id: 'decade', label: 'Decade Comparison' },
      { id: 'map', label: 'Regional Map' }
    ];

    const activeView = computed(() => store.state.activeView);
    const isLoading = computed(() => store.state.isLoading);

    const currentComponent = computed(() => {
      switch(activeView.value) {
        case 'annual':
          return 'LineChart';
        case 'decade':
          return 'BarChart';
        case 'map':
          return 'MapChart';
        default:
          return 'LineChart';
      }
    });

    const setActiveView = (view) => {
      if (view !== activeView.value) {
        store.dispatch('setActiveView', view);
      }
    };

    return {
      views,
      activeView,
      isLoading,
      currentComponent,
      setActiveView
    };
  }
};
</script>

<style scoped>
.dashboard {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.dashboard-header {
  margin-bottom: 30px;
  text-align: center;
}

h1 {
  color: #2c3e50;
  margin-bottom: 20px;
  font-size: 2.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
}

.dashboard-icon {
  width: 40px;
  height: 40px;
  animation: pulse 2s infinite ease-in-out;
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}

.view-selector {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
}

.view-button {
  padding: 10px 20px;
  background-color: #f5f5f5;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s ease;
  color: #555;
}

.view-button:hover {
  background-color: #e0e0e0;
}

.view-button.active {
  background-color: #42b983;
  color: white;
}

.dashboard-content {
  position: relative;
}

.loading-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
}

.loading-spinner {
  width: 50px;
  height: 50px;
  border: 5px solid #f3f3f3;
  border-top: 5px solid #42b983;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
  .dashboard {
    padding: 10px;
  }

  h1 {
    font-size: 1.6rem;
    margin-bottom: 15px;
    gap: 8px;
  }

  .dashboard-icon {
    width: 30px;
    height: 30px;
  }

  .view-selector {
    flex-wrap: wrap;
  }

  .view-button {
    padding: 8px 15px;
    font-size: 0.9rem;
  }
}
</style>
