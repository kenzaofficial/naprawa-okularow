<template>
  <div id="map" />
</template>

<script setup>
import { watch } from 'vue';

const props = defineProps({
  markers: {
    type: Array,
    required: true,
  },
  centerCoordinates: {
    type: Object,
    required: true,
  },
  activeMarker: {
    type: String,
    required: false,
  }
});

const updateMarkerStyle = (marker, newValue) => {
  const scaleValue = 'scale(1.5) translateX(-4px) translateY(-14px)';
  const transformValue = marker.style.transform.replace(scaleValue, '');
  const newTransformValue = newValue ? scaleValue : '';
  marker.style.transform = transformValue + newTransformValue;
};

watch(() => props.activeMarker, (newValue, oldValue) => {
  const markerElement = document.querySelector(`.v-map__marker--${newValue || oldValue}`);
  updateMarkerStyle(markerElement, newValue);
});

onMounted(() => {
  import('leaflet').then((L) => {
    // Инициализация карты
    const map = L.map("map").setView([props.centerCoordinates.lat, props.centerCoordinates.lng], 12);
  
    // Подключаем слой OpenStreetMap
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
    }).addTo(map);
    // Добавляем маркеры на карту
    props.markers.forEach(({ lat, lng, text, id }) => {
      const customIcon = L.divIcon({
        id: 'kek',
        className: `v-map__marker v-map__marker--${id}`,
        html: `<div class="custom-marker" />`,
        iconSize: [25, 40],
        iconAnchor: [20, 40],
        popupAnchor: [-7, -40],
      });

      L.marker([lat, lng], { icon: customIcon })
        .addTo(map)
        .bindPopup(text);
    });
  });
});
</script>

<style>
#map {
  width: 100%;
  height: 400px;
  margin: 0 auto;
  z-index: 1;
}

.v-map__marker {
  background-image: url('./marker-icon.svg');
}
</style>