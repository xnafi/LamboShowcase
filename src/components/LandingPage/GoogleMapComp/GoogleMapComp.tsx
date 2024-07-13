"use client";
import {
  GoogleMap,
  useJsApiLoader,
  StandaloneSearchBox,
  Marker,
} from "@react-google-maps/api";
import React, { useState, useCallback } from "react";

const containerStyle = {
  width: "100%",
  height: "70vh",
};

const initialCenter = {
  lat: 41.9028,
  lng: 12.4964,
};

const showroomLocations = [
  { lat: 41.8902, lng: 12.4922 }, // Example location 1
  { lat: 45.4642, lng: 9.19 }, // Example location 2
  { lat: 48.8566, lng: 2.3522 }, // Example location 3
  // Add more showroom locations here
];

const GoogleMapComp: React.FC = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API as string,
    libraries: ["places"],
  });

  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [searchBox, setSearchBox] =
    useState<google.maps.places.SearchBox | null>(null);
  const [markerPosition, setMarkerPosition] =
    useState<google.maps.LatLngLiteral>(initialCenter);

  const onLoadMap = useCallback((map: google.maps.Map) => {
    setMap(map);
  }, []);

  const onUnmountMap = useCallback(() => {
    setMap(null);
  }, []);

  const onLoadSearchBox = (ref: google.maps.places.SearchBox) => {
    setSearchBox(ref);
  };

  const onPlacesChanged = () => {
    if (searchBox) {
      const places = searchBox.getPlaces();
      if (places && places.length > 0) {
        const place = places[0];
        if (place.geometry && place.geometry.location) {
          const location = place.geometry.location;
          setMarkerPosition({
            lat: location.lat(),
            lng: location.lng(),
          });
          map?.panTo(location);
          map?.setZoom(15); // Zoom in to the searched location
        }
      }
    }
  };

  const handleMarkerClick = (position: google.maps.LatLngLiteral) => {
    if (map) {
      map.panTo(position);
      map.setZoom(15); // Zoom in to the clicked marker
    }
  };

  return isLoaded ? (
    <div>
      <StandaloneSearchBox
        onLoad={onLoadSearchBox}
        onPlacesChanged={onPlacesChanged}
      >
        <input
          type="text"
          placeholder="Search for places..."
          style={{
            boxSizing: "border-box",
            border: "1px solid transparent",
            width: "300px",
            height: "40px",
            marginTop: "10px",
            padding: "0 12px",
            borderRadius: "3px",
            boxShadow: "0 2px 6px rgba(0, 0, 0, 0.3)",
            fontSize: "14px",
            outline: "none",
            textOverflow: "ellipses",
            margin: "20px 0px",
          }}
        />
      </StandaloneSearchBox>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={initialCenter}
        zoom={3}
        onLoad={onLoadMap}
        onUnmount={onUnmountMap}
      >
        <Marker position={markerPosition} />
        {showroomLocations.map((location, index) => (
          <Marker
            key={index}
            position={location}
            onClick={() => handleMarkerClick(location)}
          />
        ))}
      </GoogleMap>
    </div>
  ) : (
    <></>
  );
};

export { GoogleMapComp };
