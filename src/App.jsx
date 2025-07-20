import { useEffect, useState } from "react";
import { fetchRouteData } from "./data";
import { mapSimulation } from "./utils/mapSimulation";
import MapView from "./components/MapView";
import Controls from "./components/Controls";
import "./App.css";
import { calculateSpeed } from "./utils/calculateSpeed";

function App() {
  const [routes, setRoutes] = useState({});
  const [routeName, setRouteName] = useState("routeA");
  const [theme, setTheme] = useState("light");

  const selectedRoute = routes[routeName] || [];
  const { index, isPlaying, togglePlay, reset } =
    mapSimulation(selectedRoute);
  const current = selectedRoute[index] || {};
  const prev = selectedRoute[index - 1];
  const speed = calculateSpeed(prev, current);

  const tileUrl =
    theme === "light"
      ? "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      : "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png";

  const handleRouteChange = (e) => {
    setRouteName(e.target.value);
  };

  useEffect(() => {
    fetchRouteData().then(setRoutes).catch(console.error);
  }, []);

  return (
    <div className="p-4 min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold text-center mb-4">
        Vehicle Movement Simulator
      </h1>

      <Controls
        routeName={routeName}
        isPlaying={isPlaying}
        theme={theme}
        onRouteChange={handleRouteChange}
        onPlayPause={togglePlay}
        onReset={reset}
      />

      <MapView
        routeData={selectedRoute}
        currentIndex={index}
        tileUrl={tileUrl}
      />

      <div className="mt-4 text-center">
        <p>
          <strong>Current Coordinates:</strong> {current.latitude?.toFixed(6)},{" "}
          {current.longitude?.toFixed(6)}
        </p>
        <p>
          <strong>Status:</strong> {isPlaying ? "Playing" : "Paused"}
        </p>
        <p>
          <strong>Speed:</strong> {speed.toFixed(2)} km/h
        </p>
      </div>
    </div>
  );
}

export default App;
