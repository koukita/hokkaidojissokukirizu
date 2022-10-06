var m_jissoku = new L.tileLayer('https://koukita.github.io/hokkaidojissokukirizu/tile/{z}/{x}/{y}.jpg', {
    attribution: "北海道実測切図　PublicDomain"
});

var m_std = new L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png', {
    attribution: "地理院地図（標準地図）"
});

var lat = 43.009501;
var lng = 141.422882;

var map_left = L.map('map_left', {
    layers: [m_jissoku],
    center: [lat, lng],
    zoom: 10,
    minZoom: 5,
    maxZoom: 13,
    zoomControl: true
});

var map_right = L.map('map_right', {
    layers: [m_std],
    center: [lat, lng],
    zoom: 10,
    minZoom: 5,
    maxZoom: 13,
    zoomControl: true
});

map_left.sync(map_right, {syncCursor: true});
map_right.sync(map_left, {syncCursor: true});
