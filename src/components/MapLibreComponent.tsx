import React, { useEffect, useRef } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

interface MapLibreComponentProps {
  center?: [number, number];
  zoom?: number;
  className?: string;
  markers?: { position: [number, number]; id: string; onClick?: () => void }[];
  interactive?: boolean;
}

export default function MapLibreComponent({ 
  center = [90.4143, 23.8183], 
  zoom = 15, 
  className = "w-full h-full",
  markers = [],
  interactive = true
}: MapLibreComponentProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<maplibregl.Map | null>(null);

  useEffect(() => {
    if (map.current) return;
    if (!mapContainer.current) return;

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: 'https://tiles.openfreemap.org/styles/liberty',
      center: center,
      zoom: zoom,
      interactive: interactive,
      attributionControl: false
    });

    // Cleanup
    return () => {
      map.current?.remove();
      map.current = null;
    };
  }, [center, zoom, interactive]);

  useEffect(() => {
    if (!map.current) return;

    // Add markers
    markers.forEach(marker => {
      const el = document.createElement('div');
      el.className = 'w-6 h-6 bg-brand rounded-full border-[3px] border-white shadow-[0_4px_10px_rgba(0,0,0,0.2)] cursor-pointer hover:scale-125 transition-all duration-300 active:scale-95';
      
      new maplibregl.Marker(el)
        .setLngLat(marker.position)
        .addTo(map.current!);

      if (marker.onClick) {
        el.addEventListener('click', (e) => {
          e.stopPropagation();
          marker.onClick?.();
        });
      }
    });
  }, [markers]);

  return <div ref={mapContainer} className={className} />;
}
