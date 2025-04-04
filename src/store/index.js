import { createStore } from 'vuex';
import { 
  annualTemperatureData, 
  decadeTemperatureData, 
  regionalTemperatureData 
} from '../data/globalTemperatureData';

export default createStore({
  state: {
    annualData: annualTemperatureData,
    decadeData: decadeTemperatureData,
    regionalData: regionalTemperatureData,
    activeView: 'annual', // 'annual', 'decade', or 'map'
    isLoading: false,
    dataSource: {
      name: 'GISTEMP Global Land-Ocean Temperature Index',
      url: 'https://data.giss.nasa.gov/gistemp/',
      description: 'The GISTEMP data shows temperature anomalies relative to the 1951-1980 average. Positive values represent temperatures above the average, while negative values represent temperatures below the average.'
    }
  },
  
  mutations: {
    SET_ACTIVE_VIEW(state, view) {
      state.activeView = view;
    },
    SET_LOADING(state, isLoading) {
      state.isLoading = isLoading;
    }
  },
  
  actions: {
    setActiveView({ commit }, view) {
      commit('SET_LOADING', true);
      // Simulate loading time for view change
      setTimeout(() => {
        commit('SET_ACTIVE_VIEW', view);
        commit('SET_LOADING', false);
      }, 300);
    }
  },
  
  getters: {
    activeData(state) {
      switch(state.activeView) {
        case 'annual':
          return state.annualData;
        case 'decade':
          return state.decadeData;
        case 'map':
          return state.regionalData;
        default:
          return state.annualData;
      }
    }
  }
});
