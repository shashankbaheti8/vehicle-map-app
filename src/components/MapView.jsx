import {
  MapContainer,
  TileLayer,
  Marker,
  Polyline,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import { useEffect } from "react";

const customIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

// 👇 Helper to auto-center map on marker
const AutoCenter = ({ lat, lng }) => {
  const map = useMap();

  useEffect(() => {
    map.setView([lat, lng], map.getZoom(), {
      animate: true,
    });
  }, [lat, lng, map]);

  return null;
};

const MapView = ({ routeData, currentIndex, tileUrl }) => {
  const current = routeData[currentIndex];

  if (!current || !current.latitude || !current.longitude) {
    return <div className="text-center mt-4">Loading map...</div>;
  }

  return (
    <MapContainer
      center={[current.latitude, current.longitude]}
      zoom={12}
      scrollWheelZoom={true}
      className="border-2 border-black w-full max-w-screen-lg aspect-[16/9] mx-auto rounded-xl shadow-lg"
    >
      <TileLayer url={tileUrl} />
      <Marker
        position={[current.latitude, current.longitude]}
        icon={customIcon}
      />
      <Polyline
        positions={routeData.map((point) => [point.latitude, point.longitude])}
        pathOptions={{ color: "#E67E22", weight: 4 }}
      />
      <AutoCenter lat={current.latitude} lng={current.longitude} />
    </MapContainer>
  );
};

export default MapView;
