const Controls = ({
  routeName,
  isPlaying,
  theme,
  onRouteChange,
  onPlayPause,
  onReset,
}) => {
  return (
    <div className="flex justify-center items-center gap-4 mb-4 flex-wrap">
      <label htmlFor="route-select" className="font-medium">
        Select Route:
      </label>
      <select
        id="route-select"
        value={routeName}
        onChange={onRouteChange}
        className="border bg-white text-black rounded px-2 py-1"
        disabled={isPlaying}
      >
        <option value="routeA">Route A</option>
        <option value="routeB">Route B</option>
      </select>

      <button
        onClick={onPlayPause}
        className="bg-[#E67E22] text-white rounded px-4 py-1 hover:bg-[#d35400] transition"
      >
        {isPlaying ? "Pause" : "Play"}
      </button>

      <button
        onClick={onReset}
        className="bg-gray-600 text-white rounded px-4 py-1 hover:bg-gray-700 transition"
      >
        Reset
      </button>

    </div>
  );
};

export default Controls;
