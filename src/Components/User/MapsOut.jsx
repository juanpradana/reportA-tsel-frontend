import React, { useState } from "react";
import { GoogleMap, InfoWindow, Marker } from "@react-google-maps/api";
import rawData from "../../data.json"

const markers = rawData.map((data, index) => {
  return {
    id: index,
    name: data.site_id,
    position: { lat: Number(data.lat), lng: Number(data.long) }
  }
})

function MapsOut() {
  const [activeMarker, setActiveMarker] = useState(null);

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  const handleOnLoad = (map) => {
    // eslint-disable-next-line no-undef
    const bounds = new google.maps.LatLngBounds();
    markers.forEach(({ position }) => bounds.extend(position));
    map.fitBounds(bounds);
  };

  return (
    <div className="mx-2 relative flex flex-col min-w-0 break-words bg-white h-[40vh] w-full sm:w-[25vw] shadow-lg rounded">
    <GoogleMap
      onLoad={handleOnLoad}
      onClick={() => setActiveMarker(null)}
      mapContainerStyle={ window.screen.width >= 640 ? { width: "25vw", height: "50vh" } : { width: "100vw", height: "50vh" }}
    >
      {markers.map(({ id, name, position }) => (
        <Marker
          key={id}
          position={position}
          onClick={() => handleActiveMarker(id)}
        >
          {activeMarker === id ? (
            <InfoWindow onCloseClick={() => setActiveMarker(null)}>
              <div>{name}</div>
            </InfoWindow>
          ) : null}
        </Marker>
      ))}
    </GoogleMap>
    </div>
  );
}

export default MapsOut;
