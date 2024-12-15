<template>
  <div class="other-city">
    <v-title text="Nie jesteś z Wrocławia?" />
    <v-container class="other-city__content">
      <div class="other-city__step other-city__step--first">
        <h4 class="other-city__step-title">Krok pierwszy:</h4>
        <form-client
          title="Wypełnij formularz, a my skontaktujemy się z Tobą jak najszybciej!"
        />
      </div>
      <div class="other-city__step other-city__step--second">
        <h4 class="other-city__step-title">Krok drugi:</h4>
        <div class="other-city__text">
          Zapakuj okulary i wyślij paczkomatem!
          <div class="other-city__inpost">
            <img
              class="other-city__inpost-logo"
              src="./inpost.png"
              alt="dostawa paczkomatem inPost"
              width="100"
            />
            <p class="other-city__inpost-address">
              Inpost. WRO 10B <br />
              Hallera 52, 53-324 Wrocław <br />
              <span>
                UWAGA !!! Proszę umieścić swój numer telefonu w etui.
              </span>
              <b>Wysyłka zwrotna jest bezpłatna!</b>
            </p>
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>
<script setup>
import VContainer from "~/components/atoms/v-container/VContainer.vue";
import VTitle from "~/components/atoms/v-title/VTitle.vue";
import FormClient from "~/components/forms/form-client/FormClient.vue";
</script>
<style>
.other-city {
  padding: 30px 0;
}

.other-city__content {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.other-city__step {
  margin-bottom: 30px;
  width: 100%;
}
.other-city__step--second {
  padding: 20px;
  border-radius: var(--default-radius);
  background-color: var(--bg-primary);
}
.other-city__step-title {
  color: var(--color-primary);
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 20px;
}

.other-city__inpost {
  margin-top: 20px;
}
.other-city__inpost-logo {
  margin-bottom: 10px;
}

.other-city__text {
  font-weight: 500;
  line-height: 1.3;
  font-size: 26px;
}

.other-city__inpost-address {
  display: grid;
  font-size: 16px;
  color: var(--color-primary);
  text-align: right;
  max-width: 400px;
  margin-left: auto;
}

.other-city__inpost-address b {
  text-decoration: underline;
}

.other-city__inpost-address span {
  display: inline-block;
  margin: 10px 0;
  font-size: 20px;
  font-weight: 500;
  color: var(--color-tertiary);
}

@media (min-width: 500px) {
  .other-city__inpost {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .other-city__inpost-logo {
    max-width: 200px;
    width: 100%;
  }
}

@media (min-width: 767px) {
  .other-city__content {
    flex-direction: row;
    align-items: flex-start;
    gap: 40px;
  }
  .other-city__inpost {
    flex-direction: column;
  }
  .other-city__inpost-logo {
    margin: 0 0 20px;
    max-width: 200px;
    width: 100%;
  }

  .other-city__text {
    margin-top: 0;
    text-align: left;
    font-size: 24px;
  }
  .other-city__inpost-address {
    text-align: left;
    max-width: none;
    font-size: 20px;
  }
}
@media (min-width: 998px) {
  .other-city__inpost-logo {
    max-width: 300px;
    /* width: 100%; */
  }
}
</style>
