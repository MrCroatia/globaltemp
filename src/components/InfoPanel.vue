<template>
  <div class="info-panel">
    <h2>About This Dashboard</h2>
    <div class="info-content">
      <h3>Data Source</h3>
      <p>
        This dashboard visualizes data from the 
        <a :href="dataSource.url" target="_blank" rel="noopener noreferrer">
          {{ dataSource.name }}
        </a>.
      </p>
      
      <h3>Understanding the Data</h3>
      <p>{{ dataSource.description }}</p>
      
      <h3>Visualizations</h3>
      <ul>
        <li>
          <strong>Annual Temperature Chart:</strong> Shows the global temperature anomalies from 1880 to present, 
          illustrating the long-term warming trend.
        </li>
        <li>
          <strong>Decade Comparison:</strong> Compares average temperature anomalies across different decades, 
          highlighting the acceleration of warming in recent decades.
        </li>
        <li>
          <strong>Regional Map:</strong> Displays temperature anomalies by region, showing how warming 
          varies across different parts of the world.
        </li>
      </ul>
      
      <h3>Climate Change Context</h3>
      <p>
        The data shows a clear warming trend, especially since the 1970s. This warming is primarily 
        attributed to human activities, particularly the emission of greenhouse gases. The Paris 
        Agreement aims to limit global warming to well below 2°C above pre-industrial levels, 
        with efforts to limit it to 1.5°C.
      </p>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'InfoPanel',
  setup() {
    const store = useStore();
    
    const dataSource = computed(() => {
      return store.state.dataSource;
    });
    
    return {
      dataSource
    };
  }
};
</script>

<style scoped>
.info-panel {
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
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
}

h3 {
  color: #2c3e50;
  margin-top: 20px;
  margin-bottom: 10px;
}

p {
  line-height: 1.6;
  color: #555;
  margin-bottom: 15px;
}

ul {
  padding-left: 20px;
  margin-bottom: 15px;
}

li {
  margin-bottom: 8px;
  line-height: 1.5;
  color: #555;
}

a {
  color: #42b983;
  text-decoration: none;
  transition: color 0.3s;
}

a:hover {
  color: #2c3e50;
  text-decoration: underline;
}

.info-content {
  padding: 0 10px;
}

@media (max-width: 768px) {
  h2 {
    font-size: 1.4rem;
  }
  
  h3 {
    font-size: 1.1rem;
  }
  
  p, li {
    font-size: 0.95rem;
  }
}
</style>
