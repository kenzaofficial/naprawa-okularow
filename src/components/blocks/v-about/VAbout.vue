<template>
  <div class="about">
    <div class="about__text">
      <p class="about__description">
        С помощью нашего сервиса вы можете легко найти расписание для любого
        автобусного маршрута, который вас интересует
      </p>
      <p class="about__description">
        В результатах поиска мы предлагаем вам наиболее удобные варианты от
        надежных транспортных компаний.
      </p>
    </div>
    <ul class="about__stats-list">
      <li v-for="(item, index) in items" :key="index" class="about__stats-item">
        <v-stats :stats="item" />
      </li>
    </ul>
  </div>
</template>

<script>
import { ref } from 'vue'
import VStats from '@/components/atoms/v-stats/VStats.vue'

export default {
  name: 'VAbout',
  components: {
    VStats,
  },
  setup() {
    const items = ref([
      { text: 'За все время выполнено', amount: 907995, unit: 'запросов' },
      { text: 'Сегодня выполнено', amount: 2197, unit: 'запросов' },
      { text: 'Новых пользователей', amount: 28901, unit: 'человек' },
    ])
    return {
      items,
    }
  },
}
</script>

<style>
.about {
  padding: 50px 0;
}
.about__text {
  display: grid;
  gap: 10px;
  padding: 0 20px;
  margin-bottom: 30px;
}
.about__description {
  text-align: left;
  font-size: 12px;
  line-height: 1;
  color: var(--color-gray-02);
}

.about__stats-list {
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(3, auto);
}

@media (min-width: 767px) {
  .about {
    padding: 60px 0;
  }
  .about__text {
    padding: 0 40px;
    grid-template-columns: repeat(2, auto);
    column-gap: 40px;
    margin-bottom: 50px;
  }

  .about__description {
    font-size: 20px;
  }
  .about__stats-list {
    padding: 40px 0;
    gap: 20px;
  }
}

@media (min-width: 1098px) {
  .about {
    padding: 100px 0;
  }
}
</style>
