<template>
  <div id="map" />
</template>

<script setup>
const props = defineProps({
  markers: {
    type: Array,
    required: true,
  },
  centerCoordinates: {
    type: Object,
    required: true,
  },
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
    props.markers.forEach(({ lat, lng, text }) => {
      L.marker([lat, lng])
        .addTo(map)
        .bindPopup(text);
    });
  });
});
</script>

<style scoped>
#map {
  width: 100%;
  height: 400px;
  margin: 0 auto;
}
</style>