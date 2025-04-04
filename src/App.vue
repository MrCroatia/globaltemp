<script setup>
import Dashboard from './components/Dashboard.vue'
</script>

<template>
  <div class="app">
    <Dashboard />
  </div>
</template>

<style>
/* Global styles */
:root {
  --primary-color: #42b983;
  --secondary-color: #2c3e50;
  --background-color: #f5f7fa;
  --text-color: #333;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--text-color);
  background-color: var(--background-color);
  line-height: 1.6;
}

.app {
  min-height: 100vh;
  padding: 20px 0;
}

@media (max-width: 768px) {
  .app {
    padding: 10px 0;
  }
}
</style>
