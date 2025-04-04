<template>
  <div class="chart-container">
    <h2>Annual Global Temperature Anomalies (1880-Present)</h2>
    <div class="chart-wrapper">
      <Line 
        :data="chartData" 
        :options="chartOptions" 
        :key="componentKey"
      />
    </div>
  </div>
</template>

<script>
import { Line } from 'vue-chartjs';
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  PointElement, 
  LineElement, 
  Title, 
  Tooltip, 
  Legend,
  Filler
} from 'chart.js';
import { computed, ref } from 'vue';
import { useStore } from 'vuex';

ChartJS.register(
  CategoryScale, 
  LinearScale, 
  PointElement, 
  LineElement, 
  Title, 
  Tooltip, 
  Legend,
  Filler
);

export default {
  name: 'LineChart',
  components: { Line },
  setup() {
    const store = useStore();
    const componentKey = ref(0);
    
    const chartData = computed(() => {
      return store.state.annualData;
    });
    
    const chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      animation: {
        duration: 1000,
        easing: 'easeInOutQuart'
      },
      scales: {
        y: {
          title: {
            display: true,
            text: 'Temperature Anomaly (°C)',
            font: {
              size: 14
            }
          },
          grid: {
            color: 'rgba(200, 200, 200, 0.2)'
          },
          ticks: {
            callback: function(value) {
              return value.toFixed(1) + '°C';
            }
          }
        },
        x: {
          title: {
            display: true,
            text: 'Year',
            font: {
              size: 14
            }
          },
          grid: {
            color: 'rgba(200, 200, 200, 0.2)'
          },
          ticks: {
            maxRotation: 45,
            minRotation: 45
          }
        }
      },
      plugins: {
        tooltip: {
          callbacks: {
            label: function(context) {
              return `Temperature Anomaly: ${context.parsed.y.toFixed(2)}°C`;
            }
          }
        },
        legend: {
          position: 'top',
        }
      }
    };
    
    // Force re-render of chart when window is resized
    window.addEventListener('resize', () => {
      componentKey.value += 1;
    });
    
    return {
      chartData,
      chartOptions,
      componentKey
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

.chart-wrapper {
  height: 400px;
  position: relative;
}

@media (max-width: 768px) {
  .chart-wrapper {
    height: 300px;
  }
  
  h2 {
    font-size: 1.2rem;
  }
}
</style>
