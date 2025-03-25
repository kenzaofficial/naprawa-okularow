<template>
  <div
    class="v-map"
    id="map"
    @mouseover="isMouseOnMap = true"
    @mouseleave="isMouseOnMap = false"
    @mousedown="isShowNotification = false"
    @wheel="onWheel">
    <div class="v-map__notification" :class="{ 'v-map__notification--shown': isShowNotification }">
      <p>Naciśnij CTRL i przewiń, by przybliżyć mapę</p>
    </div>
  </div>
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

const map = ref(null);
const isMouseOnMap = ref(false);
const isShowNotification = ref(false);
let ctrlPressed = false;

const updateMarkerStyle = (marker, newValue) => {
  const scaleValue = 'scale(1.5) translateX(-4px) translateY(-14px)';
  const transformValue = marker.style.transform.replace(scaleValue, '');
  const newTransformValue = newValue ? scaleValue : '';
  marker.style.transition = 'transform 0.1s linear';
  marker.style.transform = transformValue + newTransformValue;
};

let timeoutId = -1;
const onWheel = () => {
  if (timeoutId !== -1) {
    clearTimeout(timeoutId);
    timeoutId = -1;
  }

  if (ctrlPressed) return;
  isShowNotification.value = true;

  timeoutId = setTimeout(() => {
    isShowNotification.value = false;
  }, 3000);
};

const addZoomListeners = () => {

  // Включаем зум карты при нажатом Ctrl
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Control') {
      ctrlPressed = true;
      isShowNotification.value = false;
      map.value.scrollWheelZoom.enable();
    }
  });

  // Отключаем зум карты при отпускании Ctrl
  document.addEventListener('keyup', (event) => {
    if (event.key === 'Control') {
      ctrlPressed = false;
      map.value.scrollWheelZoom.disable();
    }
  });

  // Блокируем зум страницы при зажатом Ctrl над картой
  document.addEventListener('wheel', (event) => {
    if (ctrlPressed && isMouseOnMap.value) {
      event.preventDefault(); // Останавливаем зум страницы
    }
  }, { passive: false });
};

watch(() => props.activeMarker, (newValue, oldValue) => {
  const markerElement = document.querySelector(`.v-map__marker--${newValue || oldValue}`);
  updateMarkerStyle(markerElement, newValue);
  const currentMarkerData = props.markers.find((marker) => marker.id === newValue);
  if (currentMarkerData) {
    map.value.panTo([currentMarkerData.lat, currentMarkerData.lng]);
  }
});

onMounted(() => {
  import('leaflet').then((L) => {
    // Инициализация карты
    map.value =
      L.map('map', { scrollWheelZoom: false })
        .setView([props.centerCoordinates.lat, props.centerCoordinates.lng], 12);
  
    // Подключаем слой OpenStreetMap
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
    }).addTo(map.value);
    // Добавляем маркеры на карту
    props.markers.forEach(({ lat, lng, text, id }) => {
      const customIcon = L.divIcon({
        className: `v-map__marker v-map__marker--${id}`,
        html: `<div class="custom-marker" />`,
        iconSize: [25, 40],
        iconAnchor: [20, 40],
        popupAnchor: [-7, -40],
      });

      L.marker([lat, lng], { icon: customIcon })
        .addTo(map.value)
        .bindPopup(text);
    });

    addZoomListeners();
  });
});
</script>

<style>
#map {
  position: relative;
  width: 100%;
  height: 400px;
  margin: 0 auto;
  z-index: 1;
}

.v-map__marker {
  background-image: url('./marker-icon.svg');
}

.v-map__notification {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  text-align: center;
  background-color: #00000077;
  color: #fff;
  font-size: 22px;
  transition: opacity 0.2s linear;
  opacity: 0;
}

.v-map__notification--shown {
  z-index: 401;
  opacity: 1;
}
</style>