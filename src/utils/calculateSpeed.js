export function calculateSpeed(prevPoint, currPoint) {
  if (!prevPoint || !currPoint) return 0;

  const toRad = (deg) => (deg * Math.PI) / 180;

  const R = 6371; // Radius of Earth in km
  const dLat = toRad(currPoint.latitude - prevPoint.latitude);
  const dLon = toRad(currPoint.longitude - prevPoint.longitude);
  const lat1 = toRad(prevPoint.latitude);
  const lat2 = toRad(currPoint.latitude);

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distanceKm = R * c;

  const t1 = new Date(prevPoint.timestamp).getTime();
  const t2 = new Date(currPoint.timestamp).getTime();
  const timeHrs = (t2 - t1) / (1000 * 60 * 60); // in hours

  if (timeHrs === 0) return 0;
  return distanceKm / timeHrs; // km/h
}
