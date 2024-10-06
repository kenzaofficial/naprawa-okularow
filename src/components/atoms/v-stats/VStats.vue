<template>
  <div class="stats">
    <div class="stats__text">
      {{ stats.text }}
      <b>{{ stats.amount }}</b>
      {{ stats.unit }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'VStats',
  props: {
    stats: {
      type: Object,
      default: () => ({
        text: 'default text',
        amount: 'default amount',
        unit: 'default unit',
      }),
    },
  },
}
</script>

<style>
.stats {
  word-break: break-word;
  text-align: left;
  font-weight: 600;
  font-size: 12px;
}
.stats::before {
  content: '';
  width: 18px;
  height: 18px;
  margin-bottom: 5px;
  background: url('../../../assets/images/yellow-mark-rounded.svg') no-repeat;
  display: block;
}
@media (min-width: 767px) {
  .stats {
    padding-top: 0;
    display: flex;
    align-items: center;
    column-gap: 20px;
    font-size: 20px;
  }
  .stats::before {
    content: '';
    width: 52px;
    height: 52px;
    align-self: flex-start;
    flex-shrink: 0;
    margin-bottom: 0;
    background: url('../../../assets/images/yellow-mark-rounded.svg') no-repeat;
    background-size: cover;
  }
}
</style>
