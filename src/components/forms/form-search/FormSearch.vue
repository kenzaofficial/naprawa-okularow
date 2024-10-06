<template>
  <form class="form-search" @submit.prevent="onSubmit" method="POST">
    <v-input
      :placeholder="RouteStartPlaceholder"
      class="form-search__input"
      :value="RouteStart"
      @input="updateRouteStart" />
    <button
      @click.prevent="onRouteReverse"
      class="form-search__button-route-reverse">
      <img
        src="../../../assets/images/reverse-arrows.svg"
        class="form-search__image" />
    </button>
    <v-input
      :placeholder="RouteEndPlaceholder"
      class="form-search__input"
      :value="RouteEnd"
      @input="updateRouteEnd" />
    <div class="form-search__choose-date">
      <v-input
        placeholder="дата"
        type="date"
        class="form-search__input"
        :value="selectedDate" />
      <div class="form-search__choose-day">
        <button
          class="form-search__choose-day-button"
          @click.prevent="setToday">
          Сегодня
        </button>
        <button
          class="form-search__choose-day-button"
          @click.prevent="setTomorrow">
          Завтра
        </button>
        <button
          class="form-search__choose-day-button"
          @click.prevent="setDayAfterTomorrow">
          Послезавтра
        </button>
      </div>
    </div>
    <v-button type="submit" text="Найти" class="form-search__submit-button" />
  </form>
</template>

<script>
import { ref } from 'vue'
import VButton from '@/components/atoms/v-button/VButton.vue'
import VInput from '@/components/atoms/v-input/VInput.vue'

export default {
  name: 'FormSearch',
  components: {
    VInput,
    VButton,
  },
  setup() {
    const selectedDate = ref('')
    const RouteStart = ref('')
    const RouteEnd = ref('')
    const RouteStartPlaceholder = ref('Откуда')
    const RouteEndPlaceholder = ref('Куда')

    const formatDate = (date) => {
      const year = date.getFullYear()
      const month = String(date.getMonth() + 1).padStart(2, '0')
      const day = String(date.getDate()).padStart(2, '0')
      return `${year}-${month}-${day}`
    }

    const setToday = () => {
      selectedDate.value = formatDate(new Date())
    }

    const setTomorrow = () => {
      const tomorrow = new Date()
      tomorrow.setDate(tomorrow.getDate() + 1)
      selectedDate.value = formatDate(tomorrow)
    }

    const setDayAfterTomorrow = () => {
      const dayAfterTomorrow = new Date()
      dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 2)
      selectedDate.value = formatDate(dayAfterTomorrow)
    }

    const onRouteReverse = () => {
      const tempRoute = RouteStart.value
      RouteStart.value = RouteEnd.value
      RouteEnd.value = tempRoute
      const tempPlaceholder = RouteStartPlaceholder.value
      RouteStartPlaceholder.value = RouteEndPlaceholder.value
      RouteEndPlaceholder.value = tempPlaceholder
    }

    const updateRouteStart = (event) => {
      RouteStart.value = event.target.value
    }

    const updateRouteEnd = (event) => {
      RouteEnd.value = event.target.value
    }

    const onSubmit = () => {
      console.log('Форма найти маршрут отправлена!')
    }

    return {
      onSubmit,
      RouteStart,
      RouteEnd,
      RouteStartPlaceholder,
      RouteEndPlaceholder,
      updateRouteStart,
      updateRouteEnd,
      selectedDate,
      setToday,
      setTomorrow,
      setDayAfterTomorrow,
      onRouteReverse,
    }
  },
}
</script>

<style>
.form-search__button-route-reverse {
  display: flex;
  margin: 10px 0;
  justify-content: center;
  width: 100%;
}

.form-search__button-route-reverse:hover {
  transform: rotate(360deg);
  transition: 0.5s;
}

.form-search__choose-date {
  margin-top: 20px;
}
.form-search__choose-day {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 20px;
}

.form-search__choose-day-button {
  font-size: 12px;
  text-decoration: underline;
  font-weight: 500;
  font-family: inherit;
  color: var(--color-violet-01);
}

.form-search__choose-day-button:hover {
  color: var(--color-orange-02);
}

@media (min-width: 767px) {
  .form-search {
    display: flex;
    align-items: flex-start;
    column-gap: 8px;
  }
  .form-search__input {
    min-height: 60px;
  }
  .form-search__button-route-reverse {
    width: auto;
    margin-top: 18px;
  }
  .form-search__image {
    margin: 0;
  }

  .form-search__choose-date {
    max-width: 230px;
    width: 100%;
    margin-top: 0;
  }
  .form-search__choose-day {
    margin-bottom: 0;
  }
  .form-search__submit-button {
    max-width: 189px;
  }
}
</style>
