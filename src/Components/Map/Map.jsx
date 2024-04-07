import React, { useEffect } from 'react';
import { loadModules } from 'esri-loader';
import './Map.css';
import { CapitalCitiesUrl } from '../../Infrastructure/urls';


const Map = () => {

  // URL for the Capital Cities feature layer
  const featureLayerUrl = CapitalCitiesUrl

  // useEffect hook to load the map and its components
  useEffect(() => {

    // Load map function - 
    const loadMap = async () => {
      try {

        // Load necessary Esri modules - 
        const [Map, MapView, FeatureLayer] = await loadModules([
          'esri/Map',
          'esri/views/MapView',
          'esri/layers/FeatureLayer'
        ]);


        // Create a new 'Map' object,
        // which represents the map itself - 

        const map = new Map({
          basemap: 'topo-vector' // 'topo-vector' is a topographic vector basemap
        });


        // Create a new MapView object,
        // which represents the view of the map on the screen - 

        const mapView = new MapView({
          container: 'viewDiv', // Container id
          map: map, // Map object
          center: [35.0, 31.3],
          zoom: 7
        });

        
        // Define a popupTemplate for the feature layer,
        // which represents the popup's table - 
        const popupTemplate = {
          content: [
            {
              type: 'fields',
              fieldInfos: [
                {
                  fieldName: 'CITY_NAME',
                  label: 'City Name',
                },
                {
                  fieldName: 'POP_RANK',
                  label: 'Population Rank',
                }
              ]
            }
          ],
        };


        // Create a new featureLayer object for the Capital Cities feature layer - 
        const featureLayer = new FeatureLayer({
          url: featureLayerUrl,
          outFields: ['CITY_NAME', 'POP_RANK'],
          popupTemplate: popupTemplate // popupTemplate object
        });


        // Add the Capital Cities featureLayer to the map - 
        map.add(featureLayer);

      } catch (error) {
        // Error handling - 
        console.error('Failed to load modules:', error);
      }
    };

    // Call the loadMap function
    loadMap();
  }, []);



  return (

    // The map container - 
    <div 
      id="viewDiv" 
      className='mapDiv'
    />

  );
};

export default Map;