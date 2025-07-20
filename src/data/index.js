export const fetchRouteData = async () => {
  const response = await fetch("/dummy-data.json");
  if (!response.ok) {
    throw new Error("Failed to fetch dummy route data.");
  }
  return await response.json();
};
