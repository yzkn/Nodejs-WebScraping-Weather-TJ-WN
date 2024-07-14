'use strict';


// Var
var L;
var control;
var map;
var osm;
var thisUrl = location.href;


// 地図設定
var baseMaps = {
    'Esri(航空写真)': L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
        {
            attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
        }),

    'OSM': L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        {
            attribution: '© OpenStreetMap contributors'
        }),

    '地理院タイル': L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png',
        {
            attribution: '出典：国土地理院ウェブサイト(https://maps.gsi.go.jp/development/ichiran.html)　この地理院タイルは基本測量成果（名称：電子地形図（タイル））です。'
        }),
    '淡色地図': L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png',
        {
            attribution: '出典：国土地理院ウェブサイト(https://maps.gsi.go.jp/development/ichiran.html)　この地理院タイルは基本測量成果（名称：電子地形図（タイル））です。'
        }),
    '航空写真': L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/seamlessphoto/{z}/{x}/{y}.jpg',
        {
            attribution: '出典：国土地理院ウェブサイト(https://maps.gsi.go.jp/development/ichiran.html)　この地理院タイルは基本測量成果（名称：電子地形図（タイル））です。'
        }),
    '白地図': L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/blank/{z}/{x}/{y}.png',
        {
            attribution: '出典：国土地理院ウェブサイト(https://maps.gsi.go.jp/development/ichiran.html)　この地理院タイルは基本測量成果（名称：電子地形図（タイル））です。'
        }),
    '色別標高図': L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/relief/{z}/{x}/{y}.png',
        {
            attribution: '出典：国土地理院ウェブサイト(https://maps.gsi.go.jp/development/ichiran.html)　海域部は海上保安庁海洋情報部の資料を使用して作成'
        }),
    '20万分1土地利用図': L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/lum200k/{z}/{x}/{y}.png',
        {
            attribution: '出典：国土地理院ウェブサイト(https://maps.gsi.go.jp/development/ichiran.html)　この地理院タイルは基本測量成果です。'
        }),
    '標準地図（英語）': L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/english/{z}/{x}/{y}.png',
        {
            attribution: '出典：国土地理院ウェブサイト(https://maps.gsi.go.jp/development/ichiran.html)　この地理院タイルは基本測量成果（名称：電子地形図（タイル））です。'
        }),

    '地理院地図Vector（道路）': L.maplibreGL({
        style: `style/road.json`,
        attribution: '出典：国土地理院ウェブサイト(https://maps.gsi.go.jp/development/ichiran.html)　この地理院タイルは基本測量成果（名称：電子地形図（タイル））です。'
    }),

    'Google Maps': L.tileLayer('https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',
        {
            attribution: '&copy; Google'
        }),
    'Google Roads': L.tileLayer('https://mt1.google.com/vt/lyrs=h&x={x}&y={y}&z={z}',
        {
            attribution: '&copy; Google'
        }),
    'Google Satellite': L.tileLayer('https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',
        {
            attribution: '&copy; Google'
        }),
    'Google Satellite Hybrid': L.tileLayer('https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}',
        {
            attribution: '&copy; Google'
        }),
    'Google Streets': L.tileLayer('https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}',
        {
            attribution: '&copy; Google'
        }),
    'Google Terrain': L.tileLayer('https://mt1.google.com/vt/lyrs=t&x={x}&y={y}&z={z}',
        {
            attribution: '&copy; Google'
        }),
};

var overlayMaps = {
    'OSM 20%': L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        {
            attribution: '© OpenStreetMap contributors',
            opacity: 0.2
        }),
    'OSM 40%': L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        {
            attribution: '© OpenStreetMap contributors',
            opacity: 0.4
        }),
    '地理院タイル 20%': L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png',
        {
            attribution: '出典：国土地理院ウェブサイト(https://maps.gsi.go.jp/development/ichiran.html)　この地理院タイルは基本測量成果（名称：電子地形図（タイル））です。',
            opacity: 0.2
        }),
    '地理院タイル 40%': L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png',
        {
            attribution: '出典：国土地理院ウェブサイト(https://maps.gsi.go.jp/development/ichiran.html)　この地理院タイルは基本測量成果（名称：電子地形図（タイル））です。',
            opacity: 0.4
        }),
    'Google Maps 20%': L.tileLayer('https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',
        {
            attribution: '&copy; Google',
            opacity: 0.2
        }),
    'Google Maps 40%': L.tileLayer('https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',
        {
            attribution: '&copy; Google',
            opacity: 0.4
        }),
    'Google Roads 40%': L.tileLayer('https://mt1.google.com/vt/lyrs=h&x={x}&y={y}&z={z}',
        {
            attribution: '&copy; Google',
            opacity: 0.4
        }),
    'Google Roads 100%': L.tileLayer('https://mt1.google.com/vt/lyrs=h&x={x}&y={y}&z={z}',
        {
            attribution: '&copy; Google',
            opacity: 1
        })
};


// Util
function mapmove() {
    if (map != null) {
        const latitude = document.getElementById('latitude').value;
        const longitude = document.getElementById('longitude').value;
        const zoom = document.getElementById('zoom').value;
        map.panTo(new L.LatLng(roundlatlng(parseFloat(latitude)), roundlatlng(parseFloat(longitude))));
        map.setZoom(parseInt(zoom));
        console.log(
            'map.panTo()',
            roundlatlng(parseFloat(latitude)), roundlatlng(parseFloat(longitude)), parseInt(zoom)
        );
    }
}

function roundlatlng(val) {
    const base = 0.0000001 // 約1cm相当の経緯度
    return Math.round(val / base) * base;
}


// Initialize
function initMenu() {
    var latlngzoom = document.getElementById('latlngzoom');
    latlngzoom.innerHTML = `
        <form>
            <div class="form-group">
                <label for="latitude">Latitude</label>
                <input type="number" step="0.000001" min="-90" max="90" class="form-control" id="latitude" placeholder="Enter latitude" value="35.681236">
            </div>
            <div class="form-group">
                <label for="longitude">Longitude</label>
                <input type="number" step="0.000001" min="-180" max="180" class="form-control" id="longitude" placeholder="longitude" value="139.767125">
            </div>
            <div class="form-group">
                <label for="zoom">Zoom level</label>
                <input type="range" step="1" min="1" max="30" class="form-control-range" id="zoom" value="11">
            </div>
            <button type="button" class="btn btn-primary" id="mapmove">Move</button>
        </form>`;

    const mapmoveElement = document.getElementById('mapmove');
    mapmoveElement.addEventListener('click', (event) => {
        mapmove();
    });
}

function initMap() {
    L = window.L;
    map = L.map('map', {
        center: [35.681236, 139.767125],
        zoom: 11,
        closePopupOnClick: false,
    }).addLayer(baseMaps['Esri(航空写真)']);
    // L.control.layers(baseMaps).addTo(map);
    L.control.layers(baseMaps, overlayMaps).addTo(map);

    const options = {
      position: 'topleft',
      fileSizeLimit: 1024*1024
    }
    L.Control.betterFileLayer(options).addTo(map);

    map.on('moveend', function (e) {
        const latitude = document.getElementById('latitude');
        const longitude = document.getElementById('longitude');
        const zoom = document.getElementById('zoom');
        console.log(
            'moveend',
            map.getCenter().lat, map.getCenter().lng, map.getZoom(),
            latitude.value, longitude.value, zoom.value
        );
        latitude.value = roundlatlng(map.getCenter().lat);
        longitude.value = roundlatlng(map.getCenter().lng);
        zoom.value = map.getZoom();
    });
}

function initMiniMap() {
    new L.Control.MiniMap(baseMaps['地理院タイル'], { toggleDisplay: true }).addTo(map);
}

function initGeoman() {
    map.pm.addControls({
        position: 'topleft'
    });
}