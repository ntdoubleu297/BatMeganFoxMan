import React from "react";
import ReactBootstrap from 'react-bootstrap';
import axios from 'axios';
import {
    Navbar,
    Container,
    Nav
} from 'react-bootstrap';
//import './badbank3k.css';
import { useState } from 'react';
  import image from './West-Enterprises.jpeg';
  import './navbar.css';
  import mbxGeocoding from '@mapbox/mapbox-sdk/services/geocoding';
  import {useCallback } from 'react';
  import './mapbox.css';
  import mapboxgl from 'mapbox-gl';
  import { useRef, useEffect } from 'react';






function Login(){

    
    function useHover() {
        const [hovering, setHovering] = useState(false)
        const onHoverProps = {
            onMouseEnter: () => setHovering(true),
            onMouseLeave: () => setHovering(false),
        }
                return [hovering, onHoverProps]
            }
    
            
                const [buttonAIsHovering, buttonAHoverProps] = useHover();
                const [buttonBIsHovering, buttonBHoverProps] = useHover();
                const [buttonCIsHovering, buttonCHoverProps] = useHover();
                const [buttonDIsHovering, buttonDHoverProps] = useHover();
                const [buttonEIsHovering, buttonEHoverProps] = useHover();
            


            //<Nav.Link href="/deposit" {...buttonBHoverProps}>{buttonBIsHovering ? 'Click here to make a Deposit' : 'Deposit/Withdraw'}</Nav.Link>
             
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


        //////////////////////////////////////////////////////////////
const countries = [
  { name: "Germany", states: "A", cities: ["Duesseldorf", "Leinfelden-Echterdingen", "Eschborn"] },
  { name: "Spain", states: "B", cities: ["Barcelona"] },
  { name: "USA", states: "C", cities: ["Downers Grove"] },
  { name: "Mexico", states: ["D", "F", "H"], cities: ["Puebla"]},
  { name: "India", states:"E", cities: ["Delhi", "Kolkata", "Mumbai", "Bangalore"] }
    ];
  

const [selectedCountry, setSelectedCountry] = React.useState();
const [selectedState, setSelectedState] = React.useState();
const [selectedCity, setSelectedCity] = React.useState();

const availableCountries = countries.find((c) => c.name === selectedCountry);
const availableStates = countries.find((c) => c.states === selectedState);
const availableTowns = countries.find((c) => c.cities === selectedCity);






      
                 
       

return(

<>

<div className='background'>
  <a style={{zIndex: '7', position: 'absolute', left: '75px', top: '275px' }}href='#'>Single Family</a>
  <a style={{zIndex: '7', position: 'absolute', left: '310px', top: '275px' }}href="#">Multi-Family</a>
  <img style={{zIndex: '7', position: 'absolute', left: '550px', top: '275px' }} src={image} width={250} height={150}/>
  <a style={{zIndex: '7', position: 'absolute', left: '815px', top: '275px' }}href='#'>Condominium</a>
  <a style={{zIndex: '7', position: 'absolute', left: '1050px', top: '275px' }}href='#'>Commercial</a>
  <a style={{zIndex: '7', position: 'absolute', left: '1250px', top: '275px' }}href='#'>Buyer/Seller</a>
  </div>
  <div className='body'>
  <div ref={mapContainer} className='map-container'/>
    <h5 style={{zIndex: '7', position: 'absolute', left: '400px', top: '450px' }}>Total Town Market: 1/1/2019-Current Day[No Price Range]</h5>

      <h2 style={{zIndex: '7', position: 'absolute', left: '300px', top: '400px' }}>2019</h2>
      <br/>
      <br/>
      <a></a>
      <div className='opening' style={{zIndex: '7', position: 'absolute', left: '300px', top: '550px' }}># Listings Sold - _______$_______</div>
      <a></a>
      <div className='opening' style={{zIndex: '7', position: 'absolute', left: '800px', top: '550px' }}>Avg. Sale______$______</div>
      <a></a>
      <div className='opening' style={{zIndex: '7', position: 'absolute', left: '300px', top: '650px' }}>Avg. DOM - _______$_______</div>
      <a></a>
      <div  className='opening' style={{zIndex: '7', position: 'absolute', left: '800px', top: '650px' }}>Avg. List______$______</div>
      <a></a>
      <div className='opening' style={{zIndex: '7', position: 'absolute', left: '300px', top: '750px' }}>X gror= $% sale price rate [entire location]</div>
      <a></a>
      <div className='opening' style={{zIndex: '7', position: 'absolute', left: '800px', top: '750px' }}>Avg. Differential______$______</div>
      <a></a>
      <div className='opening' style={{zIndex: '7', position: 'absolute', left: '300px', top: '850px' }}>Ranges: $X - X low - high</div>
      <br/>
      <br/>
      <div id="container" style={{zIndex: '7', position: 'absolute', left: '300px', top: '1600px' }}>
      <h2>Cascading or Dependent Dropdown using React</h2>

      <div>
        <label>Country - </label>
        <select
          placeholder="Country"
          value={selectedCountry}
          onChange={(e) => setSelectedCountry(e.target.value)}
        >
          <option>--Choose Country--</option>
          {countries.map((value, key) => {
            return (
              <option value={value.name} key={key}>
                {value.name}
              </option>
            );
          })}
        </select>
      </div>

      <div>
        <label>State - </label>
        <select
          placeholder="State"
          value={selectedState}
          onChange={(e) => setSelectedState(e.target.value)}
        >
          <option>--Choose State--</option>
          {countries.map((value, key) => {
            return (
              <option value={value.states} key={key}>
                {value.states}
              </option>
            );
          })}
        </select>
      </div>

      <div>
        <label>City - </label>
        <select
          placeholder="City"
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
        >
          <option>--Choose City--</option>
          {countries.map((value, key) => {
            return (
              <option value={value.cities} key={key}>
                {value.cities}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  </div>
</>

);
}        

export default Login;
