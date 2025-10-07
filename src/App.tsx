import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

import 'mapbox-gl/dist/mapbox-gl.css';
import './App.css';


const App: React.FC = () => {

  const mapContainerRef = useRef<HTMLDivElement | null>(null);

  const mapRef = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (mapContainerRef.current) {
      mapboxgl.accessToken = import.meta.env.VITE_MAPBOXGL_ACCESS_TOKEN;
      
      mapRef.current = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [2.1734, 41.3851],
        zoom: 12
      });
    }

    return () => {
      mapRef.current?.remove();
    };
  }, []);

  return (
    <>
      <div id='map-container' ref={mapContainerRef} />
    </>
  );
};

export default App;