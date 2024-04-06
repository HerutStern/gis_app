import React, { useEffect, useState } from 'react';
import { loadModules } from 'esri-loader';
import './Popup.css';
import ActionButton from "@arcgis/core/support/actions/ActionButton.js";
        // Creating a new Map object,
        // which represents the map itself - 

        // 'topo-vector' is a topographic vector basemap

        // Creating a new MapView object,
        // which represents the view of the map on the screen - 

const Map = () => {


  useEffect(() => {
    const loadMap = async () => {
      const featureLayerUrl = 'https://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/World_Cities/FeatureServer/0';

      try {
        const [Map, MapView, FeatureLayer] = await loadModules([
          'esri/Map',
          'esri/views/MapView',
          'esri/layers/FeatureLayer'
        ]);

        const newMap = new Map({
          basemap: 'topo-vector'
        });

        const newView = new MapView({
          container: 'viewDiv',
          map: newMap,
          center: [35.0, 31.3],
          zoom: 7
        });

        
        const popupTemplate = {
          content: [
            {
              type: 'fields',
              fieldInfos: [
                {
                  fieldName: 'CITY_NAME',
                  label: 'City Name',
                  visible: true
                },
                {
                  fieldName: 'POP_RANK',
                  label: 'Population Rank',
                  visible: true
                }
              ]
            }
          ],

        };


        const featureLayer = new FeatureLayer({
          url: featureLayerUrl,
          outFields: ['CITY_NAME', 'POP_RANK'],
          popupTemplate: popupTemplate
        });

     
        newMap.add(featureLayer);

      } catch (error) {
        console.error('Failed to load modules:', error);
      }
    };

    loadMap();
  }, []);



  return (
      <>
          <div 
            id="viewDiv" 
            className='mapDiv'
          />
      </>

  );
};

export default Map;