import React, {useState, useRef } from 'react';
import useSwr from 'swr';
import ReactMapGL, { Marker, FlyToInterpolator } from 'react-map-gl';
import useSupercluster from 'use-supercluster';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';


const fetcher = (...args) => fetch(...args).then(response => response.json()); //useSwr is expecting that so when it resolves it will populate our data 
function MapClustering(){

    const [viewport, setViewport] = useState({
        latitude: 52.6376,
        longitude: -1.135171,
        width: '100%',//"100vw",
        height:'100%',//"100vh",
        mapStyle: 'mapbox://styles/mapbox/dark-v10',
        zoom: 12
      });
      
    
      // load and prepare data
      // get map bounds
      // get clusters
    
      // return map
      
      const mapRef = useRef();

    

    const url = 'https://data.police.uk/api/crimes-street/all-crime?lat=52.629729&lng=-1.131592&date=2019-10';
    
    
    const { data, error} = useSwr(url, {fetcher})
    const crimes = data && !error ? data.slice(0,2000) : []; //if false no data...

    const points = crimes.map(crime => ({ //setup for Supercluster
        type: "Feature",
        properties: {
        cluster: false,
        crimeId: crime.id,
        category: crime.category
    },
        geometry: { 
            type: "Point", 
            coordinates: [parseFloat(crime.location.longitude), parseFloat(crime.location.latitude)] }
    }))

    const bounds = mapRef.current ? mapRef.current.getMap().getBounds().toArray().flat() : null;
    //get clusters
    const {clusters, supercluster} = useSupercluster({ //it will return us an object that we can destructure...
        points,
        zoom: viewport.zoom, //stored via state in viewport variable
        bounds,
        options: { radius: 75, maxZoom: 20} //longitude and latitude of what is being diplayed on the map at one time..

    });

   






    









    return (
        <>
        <ReactMapGL mapStyle='mapbox://styles/mapbox/dark-v10' mapboxAccessToken='pk.eyJ1IjoibnRkb3VibGV1Mjk3IiwiYSI6ImNsMmdrNXphbjAwcnEzY21tNXJ4bWcyNW4ifQ.OZFbUr0XHn455XBjG5od1Q'
          {...viewport}
          maxZoom={20}
          onViewportChange={newViewport => {
            setViewport({ ...newViewport });
          }}
          ref={mapRef}
        >
          {clusters.map(cluster => {
              const [longitude, latitude] = cluster.geometry.coordinates;
              const {cluster: isCluster, point_count: pointCount } = cluster.properties; //putting cluster inton an isCluster variable

              if (isCluster) { //if the cluster is a cluster we are going to render this marker...
                  return(
                  <Marker key={cluster.id} latitude={latitude} longitude={longitude}>
                      <div className='cluster-marker' 
                      style={{width: `${10 + (pointCount / points.length) * 50}px`,
                             height: `${10 + (pointCount / points.length) * 50}px`
                            }}
                    
                    onClick={() => {const expansionZoom = Math.min(supercluster.getClusterExpansionZoom(cluster.id), 20);
                    setViewport({
                        ...viewport,
                        latitude,
                        longitude,
                        zoom: expansionZoom,
                        transitionInterpolator: mapRef.current?.flyTo({speed: 2}),
                        transitionDuration: 'auto'
                    })}}>{pointCount}</div>
                  </Marker>)
              }
              //else we will come down here and that means we have an individual crime...
              return(<Marker key={cluster.properties.crimeId} latitude={latitude} longitude={longitude}> 
              <button className='crime-marker'>
              <img src='*/custody.svg' alt='crime doesnt pay'/>
              </button>
          </Marker>
            
            );
              
              })}
        </ReactMapGL>
        </>
      );
    }


    export default MapClustering;