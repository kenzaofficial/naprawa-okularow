<template>
  <div class="service-card">
    <img
      class="service-card__img"
      src="../../../assets/images/zoom.jpeg"
      alt="example_01"
    />
    <div class="service-card__text">
        <h7 class="service-card__title">
            Spawanie
        </h7>
        <span class="service-card__subtitle">mini opis</span>
        <p class="service-card__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima vero voluptas velit, facilis, repellendus harum illo dolor officiis eum unde similiq
        </p>
    </div>
  </div>
</template>
<style>
.service-card {
}

.service-card__img {
    max-width: 100%;
}

.service-card__text{
    padding: 20px;
    background-color: blueviolet;
    border-radius: var(--default-radius);
}
</style>
