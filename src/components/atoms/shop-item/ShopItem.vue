<template>
  <div class="shop-item">
    <div class="shop-item__store">
      <span class="shop-item__letter">{{ letterOption }}</span>
      <div class="shop-item__details">
        <span class="shop-item__name">{{ name }}</span>
        <div class="shop-item__data">
          <p class="shop-item__address">{{ address }}</p>
          <span class="shop-item__phone">{{ phone }}</span>
        </div>
        <span class="shop-item__state" :class="{ 'shop-item__state--opened': state === 'Otwarte' }">
          {{ state }}
        </span>
        <p v-if="additionalDataForState" class="shop-item__open-time">·
          {{ additionalDataForState }}
        </p>
      </div>
      <a
        :href="`https://www.google.com/maps/dir/?api=1&destination=${coordinates.x},${coordinates.y}`"
        target="_blank"
        class="shop-item__route-link"
      >
        <span class="shop-item__route-icon">
          <svg-route />
        </span>
        <span class="shop-item__route">Trasa</span>
      </a>
    </div>
  </div>
</template>

<script setup>
import SvgRoute from './SvgRoute.vue';
const props = defineProps({
  letterOption: {
    type: String, // A, B, C
    required: true,
  },
  name: {
    type: String, // Pilna naprawa okularów
    required: true,
  },
  address: { // aleja Generała Józefa Hallera 52
    type: String,
    required: true, 
  },
  phone: {
    type: String, // 123 321 123
    required: true,
  },
  openingHours: {
    type: Object, // { mon: { from: 9, to: 18 }, tue: { ... }, ... }
    required: true,
  },
  coordinates: {
    type: Object, // { x: 123, y: 321 }
    required: true,
  }
});

const getTimeInformation = () => {
  const date = new Date();
  const days = Object.keys(props.openingHours);
  const currentDay = days[date.getDay()];
  const { from, to } = props.openingHours[currentDay];
  const currentHour = date.getHours();

  return { openingTime: from, closingTime: to, currentHour };
};

const getWorkingDay = (day = 'today') => {
  const date = new Date();
  let days = Object.keys(props.openingHours);
  let currentDay = date.getDay();
  if (day !== 'next') return days[currentDay];

  // перемещаем все пройденные дни недели в конец массива, чтобы найти ближайший рабочий день
  days.splice(0, currentDay, ...days.slice(0, currentDay + 1));
  // ищем ближайший рабочий день
  return days.find((dayName) => {
    return props.openingHours[dayName].from !== null;
  });
};

const formatHour = (hour) => `${String(hour).padStart(2, '0')}:00`;

const state = computed(() => {
  const { openingTime, closingTime, currentHour } = getTimeInformation();

  if (currentHour >= openingTime && currentHour < closingTime) return 'Otwarte';
  return 'Zamknięte';
});

const additionalDataForState = computed(() => {
  const { closingTime, currentHour } = getTimeInformation();

  if (state.value === 'Otwarte') return `Zamknięcie o ${formatHour(closingTime)}`;

  if (currentHour >= closingTime) {
    const nextDay = getWorkingDay('next');
    return `Otwarcie o ${formatHour(props.openingHours[nextDay].from)} (${nextDay})`
  }

  const today = getWorkingDay('today');
  return `Otwarcie o ${formatHour(props.openingHours[today].from)} (${today})`
});
</script>

<style scoped>
.shop-item {
  width: 100%;
  padding: 15px 5px;
}

.shop-item__store {
  display: flex;
  align-items: center;
  padding: 10px 0;
  color: #8e8e8e;
  border-bottom: 1px solid #444;
}

.shop-item__store:last-child {
  border-bottom: none;
}

.shop-item__letter {
  padding-top: 6px;
  margin-right: 10px;
  font-size: 20px;
  font-weight: bold;
  font-family: Arial, sans-serif;
  color: #ff6666;
}

.shop-item__details {
  text-align: start;
}

.shop-item__name {
  display: block;
  width: 100%;
  font-size: 16px; /* 18 */
  color: #fff;
  font-weight: 500;
}

@media screen and (min-width: 768px) {
  .shop-item__data {
    font-size: 18px;
  }
}

.shop-item__data {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin: 6px 0 8px;
}

@media screen and (min-width: 768px) {
  .shop-item__data {
    flex-direction: row;
  }
}

.shop-item__phone,
.shop-item__address {
  margin: 0;
  font-size: 12px;
}

@media screen and (min-width: 768px) {
  .shop-item__phone,
  .shop-item__address {
    font-size: 14px;
  }

  .shop-item__phone {
    position: relative;
    margin-left: 12px;
  }

  .shop-item__phone::before {
    content: '·';
    position: absolute;
    top: 0;
    left: -10px;
  }
}

.shop-item__state {
  color: #ff6666; /* rgb(35, 185, 80) */
  font-size: 12px;
}

@media screen and (min-width: 768px) {
  .shop-item__state {
    font-size: 14px;
  }
}

.shop-item__state--opened {
  color: rgb(35, 185, 80);
}

.shop-item__open-time {
  display: inline;
  margin-left: 4px;
  font-size: 12px;
}

@media screen and (min-width: 768px) {
  .shop-item__open-time {
    font-size: 14px;
  }
}

.shop-item__route-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  margin-left: auto;
  font-size: 14px;
  color: #8ab4f8;
}

.shop-item__route-link:hover {
  color: #fff;
}

.shop-item__route-link:hover svg {
  fill: #fff;
}

.shop-item__route-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1px solid #d2d2d2;
}

.shop-item__route-link:hover .shop-item__route-icon {
  background-color: #e7e7e78a;
}

.shop-item__route:hover {
  border-color: #fff;
  color: #fff;
}
</style>
