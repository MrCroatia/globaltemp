<template>
  <div class="chart-container">
    <h2>Temperature Anomalies by Decade</h2>
    <div class="chart-wrapper">
      <Bar 
        :data="chartData" 
        :options="chartOptions" 
        :key="componentKey"
      />
    </div>
  </div>
</template>

<script>
import { Bar } from 'vue-chartjs';
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  BarElement, 
  Title, 
  Tooltip, 
  Legend 
} from 'chart.js';
import { computed, ref } from 'vue';
import { useStore } from 'vuex';

ChartJS.register(
  CategoryScale, 
  LinearScale, 
  BarElement, 
  Title, 
  Tooltip, 
  Legend
);

export default {
  name: 'BarChart',
  components: { Bar },
  setup() {
    const store = useStore();
    const componentKey = ref(0);
    
    const chartData = computed(() => {
      return store.state.decadeData;
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
            text: 'Decade',
            font: {
              size: 14
            }
          },
          grid: {
            color: 'rgba(200, 200, 200, 0.2)'
          }
        }
      },
      plugins: {
        tooltip: {
          callbacks: {
            label: function(context) {
              return `Average Anomaly: ${context.parsed.y.toFixed(2)}°C`;
            }
          }
        },
        legend: {
          display: false
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
