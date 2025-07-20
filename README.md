# 🚗 Vehicle Movement Simulator

A modern React + Leaflet application that simulates real-time vehicle movement along predefined routes using dummy GPS data.

Live Link: [https://vehicle-map-app-phi.vercel.app/](https://vehicle-map-app-phi.vercel.app/)


---

## 📌 Features

- 🗺️ **Live Map View** (Leaflet + OpenStreetMap)
- 📍 **Animated Vehicle Movement**
- 📂 **Route Switching**: Route A and Route B with dropdown selector
- ⏯️ **Play / Pause / Reset Controls**
- 📐 **Responsive Design**: Fully responsive layout with large rectangular map
- 📡 **Auto-Panning** as the vehicle moves
- 📊 **Live Coordinates & Speed Display**

---

## 📁 Folder Structure

```

src/
├── components/
│   ├── Controls.jsx        // Route selection, play/pause/reset
│   └── Mapview.jsx         // Main Leaflet map view with vehicle pointer
├── data/
│   └── index.js            // fetchRouteData(): fetches dummy-routes.json
├── utils/
│   ├── calculateSped.js    // for calcuationg speed
│   └── mapSimulation.js    //  for handling playback & indexing
├── App.jsx                 // Main application logic
├── app.css                // Global + Tailwind styling
└── main.jsx               // Entry point
public/
└── dummy-routes.json      // Dummy route coordinates with timestamps

````

---

## 🔧 Tech Stack

- ⚛️ React (Vite)
- 🗺️ Leaflet (react-leaflet)
- 🎨 Tailwind CSS
- 🌐 OpenStreetMap tile layers

---

## 🔄 Simulation Logic

- Routes are defined in `public/dummy-routes.json`
- Each route contains an array of:
  - `latitude`
  - `longitude`
  - `timestamp`
- Speed is derived from the distance between two consecutive points over 1 second.


## 🧪 How to Run Locally

```bash
# 1. Clone the repo
git clone https://github.com/your-username/vehicle-movement-simulator.git
cd vehicle-movement-simulator

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
````

---

## 📁 Dummy Route Format

`public/dummy-routes.json`:

```json
{
  "routeA": [
    { "latitude": 19.911, "longitude": 73.811, "timestamp": "2024-07-20T10:00:00Z" },
    ...
  ],
  "routeB": [
    { "latitude": 21.1498, "longitude": 72.7805, "timestamp": "2024-07-20T10:01:00Z" },
    ...
  ]
}
```

---

