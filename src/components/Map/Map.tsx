import React, { useState, useEffect } from "react";
import useEffectSkipInitialRender from "../../hooks/useEffectSkipInitialRender";

import { DEFAULT_MAP_OPTIONS } from "./const";

const Map: React.FC = () => {
  const [map, setMap] = useState<kakao.maps.Map>();

  useEffectSkipInitialRender(() => {
    const mapContainer = document.getElementById("map");

    if (mapContainer)
      setMap(new kakao.maps.Map(mapContainer, DEFAULT_MAP_OPTIONS));
  }, []);

  useEffect(() => {
    map?.setMaxLevel(13);

    var zoomControl = new kakao.maps.ZoomControl();
    map?.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
  }, [map]);

  return (
    <div>
      <div
        id="map"
        style={{ width: "800px", height: "1000px", backgroundColor: "red" }}
      ></div>
    </div>
  );
};

export default Map;
