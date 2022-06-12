import React from 'react';
import ReactDOM from 'react-dom';
import 'mapbox-gl/dist/mapbox-gl.css';
import './mapbox.css';
import { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import L from './salaries.json';
import ReactBootstrap from 'react-bootstrap';
import axios from 'axios';
import useSwr from 'swr';
import ReactMapGL, { Marker } from 'react-map-gl';
import useSupercluster from 'use-supercluster';
import {useCallback } from 'react';
import mbxGeocoding from '@mapbox/mapbox-sdk/services/geocoding';








function Map(){
    const map = useRef(null);
    const mapContainer = useRef(null);
    const [lng, setLng] = useState(-1.135171); //-87.624225)
    const [lat, setLat] = useState(52.6376); //41.873941
    const [zoom, setZoom] = useState(4);
    

    

    mapboxgl.accessToken =
        'pk.eyJ1IjoibnRkb3VibGV1Mjk3IiwiYSI6ImNsMmdrNXphbjAwcnEzY21tNXJ4bWcyNW4ifQ.OZFbUr0XHn455XBjG5od1Q';


    useEffect(() => {
        if (map.current) return; //initialize map only once 
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/dark-v10',
            center: [lng, lat],
            zoom: zoom
        });
    });




    useEffect(() => {
        if (!map.current) return;
        map.current.on('move', () => {
        setLng(map.current.getCenter().lng.toFixed(4));
        setLat(map.current.getCenter().lat.toFixed(4));
        setZoom(map.current.getZoom().toFixed(2));
    });
});

const fetchData = useCallback(() => {
  const geocodingClient = mbxGeocoding({
    accessToken: mapboxgl.accessToken,
  });

  // geocoding with countries
  return geocodingClient
    .forwardGeocode({
      query: 'Ikeja, Lagos',
      countries: ['ng'],
      limit: 2,
    })
    .send()
    .then((response) => {
      const match = response.body;
      const coordinates = match.features[0].geometry.coordinates;
      const placeName = match.features[0].place_name;
      const center = match.features[0].center;

      return {
        type: 'Feature',
        center: center,
        geometry: {
          type: 'Point',
          coordinates: coordinates,
        },
        properties: {
          description: placeName,
        },
      };
    });
}, []);



//display the geometry coordinate...

useEffect(() => {
  if (!map.current) return; // Waits for the map to initialise
 
 const results = fetchData();

 results.then((marker) => {
   // create a HTML element for each feature
   var el = document.createElement('div');
   el.className = 'marker';

   // make a marker for each feature and add it to the map
   new mapboxgl.Marker(el)
     .setLngLat(marker.geometry.coordinates)
     .setPopup(
       new mapboxgl.Popup({ offset: 25 }) // add popups
         .setHTML('<p>' + marker.properties.description + '</p>')
     )
     .addTo(map.current);

   map.current.on('load', async () => {
     map.current.flyTo({
       center: marker.center,
     });
   });
 });

}, [fetchData]);

   

return (<>

<div id='root'></div>
<div>
    <div className='sidebar'>
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
    </div>
<div ref={mapContainer} className='map-container'/>
</div>

</>

);
}

export default Map;

