// Data source: GISTEMP Global Land-Ocean Temperature Index
// https://data.giss.nasa.gov/gistemp/

export const annualTemperatureData = {
  labels: [
    1880, 1885, 1890, 1895, 1900, 1905, 1910, 1915, 1920, 1925, 1930, 1935, 1940, 1945, 1950, 
    1955, 1960, 1965, 1970, 1975, 1980, 1985, 1990, 1995, 2000, 2005, 2010, 2015, 2020, 2023
  ],
  datasets: [
    {
      label: 'Temperature Anomaly (°C)',
      data: [
        -0.16, -0.32, -0.35, -0.22, -0.09, -0.26, -0.39, -0.14, -0.27, -0.22, -0.15, -0.20, 
        0.08, 0.02, -0.17, -0.14, -0.03, -0.11, 0.03, -0.01, 0.26, 0.12, 0.39, 0.45, 0.42, 
        0.67, 0.72, 0.90, 1.02, 1.18
      ],
      borderColor: 'rgba(255, 99, 132, 1)',
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderWidth: 2,
      pointRadius: 3,
      pointBackgroundColor: 'rgba(255, 99, 132, 1)',
      tension: 0.4,
      fill: true
    }
  ]
};

export const decadeTemperatureData = {
  labels: ['1880s', '1900s', '1920s', '1940s', '1960s', '1980s', '2000s', '2020s'],
  datasets: [
    {
      label: 'Average Temperature Anomaly (°C)',
      data: [-0.28, -0.15, -0.17, 0.03, -0.03, 0.18, 0.55, 1.10],
      backgroundColor: [
        'rgba(54, 162, 235, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.6)',
        'rgba(255, 159, 64, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(255, 99, 132, 0.6)',
        'rgba(255, 99, 132, 0.8)',
        'rgba(255, 0, 0, 0.8)'
      ],
      borderColor: [
        'rgba(54, 162, 235, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(255, 99, 132, 1)',
        'rgba(255, 99, 132, 1)',
        'rgba(255, 0, 0, 1)'
      ],
      borderWidth: 1
    }
  ]
};

// Regional temperature anomalies for the map visualization
export const regionalTemperatureData = [
  { region: 'North America', lat: 40, lng: -100, anomaly: 1.5 },
  { region: 'South America', lat: -20, lng: -60, anomaly: 1.0 },
  { region: 'Europe', lat: 50, lng: 10, anomaly: 1.8 },
  { region: 'Africa', lat: 0, lng: 20, anomaly: 1.2 },
  { region: 'Asia', lat: 40, lng: 90, anomaly: 1.7 },
  { region: 'Australia', lat: -25, lng: 135, anomaly: 1.4 },
  { region: 'Arctic', lat: 80, lng: 0, anomaly: 2.5 },
  { region: 'Antarctica', lat: -80, lng: 0, anomaly: 0.8 }
];

// Function to get color based on temperature anomaly
export const getColorByTemperature = (value) => {
  // Color scale from blue (cold) to red (hot)
  if (value < -0.5) return 'rgba(0, 0, 255, 0.7)';
  if (value < 0) return 'rgba(0, 191, 255, 0.7)';
  if (value < 0.5) return 'rgba(255, 255, 0, 0.7)';
  if (value < 1.0) return 'rgba(255, 165, 0, 0.7)';
  if (value < 1.5) return 'rgba(255, 69, 0, 0.7)';
  return 'rgba(255, 0, 0, 0.7)';
};
