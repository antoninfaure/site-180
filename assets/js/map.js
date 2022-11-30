const Map = ol.Map;
const OSM = ol.source.OSM
const TileLayer = ol.layer.Tile
const View = ol.View
const Proj = ol.proj
const parser = new ol.format.WMTSCapabilities();
const extent = [420000, 30000, 900000, 350000];

var placesLabelLayer = new ol.layer.Image();


const coord_default = "EPSG:3857";
const coord_world = "EPSG:4326";

const popup_container = document.getElementById('popup');
const popup_content = document.getElementById('popup-content');
const popup_closer = document.getElementById('popup-closer');

var map;

// types : 0 = restaurant, 1 = bar, 2 = café, 3 = fast-food, 4 = traiteur, 5 = magasin
var data = [
    {
        name: "Tibits",
        url: './tibits',
        id: "aaa",
        latitude: 46.5171856,
        longitude: 6.6281226,
        types: [0, 1, 2]
    },
    {
        name: "Tom Café",
        url: './tom-cafe',
        id: "aaa",
        latitude: 46.50863061264364,
        longitude: 6.634097118291135,
        types: [0, 2]
    },
    {
        name: "Brasserie du château",
        url: './brasserie-du-chateau',
        id: "aaa",
        latitude: 46.52484139487125,
        longitude: 6.634625044830118,
        types: [0, 1]
    },
    {
        name: "Slice Pizza",
        url: './slice-pizza',
        id: "aaa",
        latitude: 46.5244960525621,
        longitude: 6.631089640669877,
        types: [0]
    },
    {
        name: "Fleur d'Asie",
        url: './fleur-asie',
        id: "aaa",
        latitude: 46.537324926423686,
        longitude: 6.5779525767144085,
        types: [4, 5]
    }
]



$(document).ready(function() {

    const chLayer = new TileLayer({
      source: new OSM(),
    })

    var overlay = new ol.Overlay({
      element: popup_container,
      autoPan: {
        animation: {
          duration: 250,
        },
      },
    });

    popup_closer.onclick = function () {
      overlay.setPosition(undefined);
      popup_closer.blur();
      return false;
    };

    map = new ol.Map({
        target: "map",
        layers: [chLayer],
        overlays: [overlay],
        view: new ol.View({
          center: ol.proj.fromLonLat([6.632492959462926, 46.519704897854744]),
          zoom: 14,
        }),
        logo: false,
    });

    addPlaces()

    /*
        // EVENT LISTENERS //
    */

    map.on("singleclick", function (evt) {
        var feature = map.forEachFeatureAtPixel(evt.pixel, function (feature) {
          return feature;
        });
        if (feature) {
            /* Popup */
            popup_content.innerHTML = `<h4 class="mb-3">${feature.values_.name}</h4>
            <a href="${feature.values_.url}" class="menu-primary mb-4">Voir</a>`;
            overlay.setPosition(evt.coordinate);

        }
    });

    map.on('pointermove', function(e){
      var pixel = map.getEventPixel(e.originalEvent);
      var hit = map.hasFeatureAtPixel(pixel);
      map.getViewport().style.cursor = hit ? 'pointer' : '';
    });
})



function addPlaces() {
    var icon_restaurant = new ol.style.Style({
        image: new ol.style.Icon({
          src: "./pq3.png",
        }),
    });

    var newMarkerLayer = new ol.layer.Vector({
        source: new ol.source.Vector(),
        style: new ol.style.Style({
            image: new ol.style.Circle({
              radius: 10,
              fill: new ol.style.Fill({color: 'rgba(255, 0, 0, 0.7)'}),
              stroke: new ol.style.Stroke({color: 'red', width: 1}),
            })
        })
    });
    data.forEach((place) => {
        newMarkerLayer
          .getSource()
          .addFeature(
            createPlacePoint(place)
          );
    });
    map.addLayer(newMarkerLayer);
}

function createPlacePoint(place) {
  return new ol.Feature({
    geometry: new ol.geom.Point(
      ol.proj.transform([place.longitude, place.latitude], coord_world, coord_default)
    ),
    id: place.id,
    name: place.name,
    url: place.url,
    types: place.types
  });
}
