var map = L.map('map', {
    center: [-3.749359114518854, -73.24507089716948],
    zoom: 18,
    minZoom: 10,
    maxZoom: 20,
});

    var basemapOSM = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <ahref="http://osm.org/copyright"> OpenStreetMap</a> contributor'
});
    basemapOSM.addTo(map);

    var googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{ maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3'] 
});
    googleSat.addTo(map);

    var googleHybrid = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',{ maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3'] 
});  
    googleHybrid.addTo(map);
    
var farmacias = L.tileLayer.wms("http://localhost:8080/geoserver/webgis_loreto/wms?", {
layers: "webgis_loreto:famarcia_loreto", //gisweb:famarcia_loreto
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
farmacias.addTo(map);

var hospitales = L.tileLayer.wms("http://localhost:8080/geoserver/webgis_loreto/wms?", {
layers: "webgis_loreto:hospital_loreto", //gisweb:hospital_loreto
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
hospitales.addTo(map);

var hoteles = L.tileLayer.wms("http://localhost:8080/geoserver/webgis_loreto/wms?", {
layers: "webgis_loreto:hotel_loreto", //gisweb:hotel_loreto
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
hoteles.addTo(map);

var loreto = L.tileLayer.wms("http://localhost:8080/geoserver/webgis_loreto/wms?", {
layers: "webgis_loreto:loreto", //gisweb:loreto
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
loreto.addTo(map);

var mercados = L.tileLayer.wms("http://localhost:8080/geoserver/webgis_loreto/wms?", {
layers: "webgis_loreto:mercado_loreto", //gisweb:mercado_loret
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
mercados.addTo(map);

var museos = L.tileLayer.wms("http://localhost:8080/geoserver/webgis_loreto/wms?", {
layers: "webgis_loreto:museo_loreto", //gisweb:museo_loreto
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
museos.addTo(map);

var parques = L.tileLayer.wms("http://localhost:8080/geoserver/webgis_loreto/wms?", {
layers: "webgis_loreto:parque_loreto", //gisweb:parque_loret
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
parques.addTo(map);

var restaurantes = L.tileLayer.wms("http://localhost:8080/geoserver/webgis_loreto/wms?", {
layers: "webgis_loreto:restaurant_loreto", //gisweb:restaurant_loreto
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
restaurantes.addTo(map);

var supermercados = L.tileLayer.wms("http://localhost:8080/geoserver/webgis_loreto/wms?", {
layers: "webgis_loreto:supermarket_loreto", //gisweb:supermarket_loreto
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
supermercados.addTo(map);

var baseMaps = {
    "OSM": basemapOSM,
    "googleSat": googleSat,
    "googleHybrid": googleHybrid
    };
 var overlayMaps = {
        "Farmacias": farmacias,
        "Hospitales": hospitales,
        "Hoteles": hoteles,
        "Mercados": mercados,
        "Museos": museos,
        "Parques": parques,
        "Restaurantes": restaurantes,
        "Supermercados": supermercados,
        "Limite Departamental": loreto
        
    };

    L.control.layers(baseMaps, overlayMaps,{
    position: 'topright', // 'topleft', 'bottomleft', 'bottomright'
    collapsed: false // true
    }).addTo(map);

    L.control.scale({
        imperial: false
        }).addTo(map);