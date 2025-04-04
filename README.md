# Global Temperature Dashboard

A Vue.js application that displays a global temperatures dashboard using Chart.js. The dashboard includes visualizations of global temperature anomalies from 1880 to the present, with interactive charts and a world map visualization.

## Features

- Line chart showing annual global temperature anomalies from 1880 to the present
- Bar chart comparing temperature anomalies for different decades
- World map visualization showing temperature changes by region
- Responsive design for various screen sizes
- Interactive elements including tooltips and view toggles
- Information panel explaining the data and visualizations

## Technologies Used

- Vue.js 3 - Frontend framework
- Chart.js - Data visualization library
- Vue-Chartjs - Vue wrapper for Chart.js
- Vuex - State management
- Leaflet - Interactive maps
- Vite - Build tool

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

## Deployment to Vercel

This application is designed to be deployed as a static site on Vercel at the domain **weather.fragment42.com**. Follow these steps to deploy:

### Option 1: Using Vercel CLI

1. Create a Vercel account if you don't have one at [vercel.com](https://vercel.com)

2. Install the Vercel CLI:

```sh
npm install -g vercel
```

3. Build your application:

```sh
npm run build
```

4. Deploy to Vercel:

```sh
vercel --prod
```

5. When prompted, confirm that you want to use the settings from the `vercel.json` file.

6. After deployment, set up the custom domain:

```sh
vercel domains add globaltemp weather.fragment42.com
```

### Option 2: Using Vercel Dashboard (Recommended)

1. Push your code to a GitHub repository

2. Log in to your Vercel account

3. Click "New Project" and import your repository

4. Configure the project settings:
   - Framework Preset: Vue.js
   - Build Command: npm run build
   - Output Directory: dist

5. In the "Environment Variables" section, you can add any environment variables if needed in the future

6. Click "Deploy"

7. After deployment, go to the project settings:
   - Navigate to the "Domains" section
   - Add the custom domain: `weather.fragment42.com`
   - Follow the verification steps to configure the domain

### Automatic Deployments

With the GitHub integration, any push to the main branch will trigger a new deployment automatically. This ensures that your dashboard is always up to date with the latest code changes.

## Data Source

The dashboard uses sample data based on the GISTEMP Global Land-Ocean Temperature Index, which shows temperature anomalies relative to the 1951-1980 average. The data is included directly in the application for static deployment.

## License

MIT
