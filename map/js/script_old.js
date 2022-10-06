var m_jissoku = new L.tileLayer('https://koukita.github.io/hokkaidojissokukirizu/tile/{z}/{x}/{y}.jpg', {
    attribution: "北海道実測切図　PublicDomain"
});

var lat = 43.009501;
var lng = 141.422882;

var map = L.map('old_map', {
    layers: [m_jissoku],
    center: [lat, lng],
    zoom: 10,
    minZoom: 5,
    maxZoom: 13,
    zoomControl: true
});

