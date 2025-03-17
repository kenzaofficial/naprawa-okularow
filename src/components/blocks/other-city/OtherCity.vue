<template>
  <div class="other-city" id="InPost">
    <v-title text="Wyślij okulary paczkomatem" />
    <v-container class="other-city__content">
      <div class="other-city__step other-city__step--first">
        <h4 class="other-city__step-title">Krok pierwszy:</h4>
        <form-client
          title="Wypełnij formularz, a my skontaktujemy się z Tobą jak najszybciej!"
          @sent="isOpen = true"
        />
        <confirm-window
          :is-open="isOpen"
          button-text="Jasne"
          heading="Twoje zgłoszenie zostało wysłane!"
          text="Skontaktujemy się z Tobą w najbliższym czasie. Dziękujemy za zaufanie!"
          @close="isOpen = false"
        />
      </div>
      <div class="other-city__step other-city__step--second">
        <h4 class="other-city__step-title">Krok drugi:</h4>
        <a
          class="other-city__inpost-link other-city__text"
          href="https://inpost.pl/SzybkieNadania/pl"
          target="_blank"
        >
          Po rozmowie z menedżerem zapakuj okulary, włóż do etui informację z
          imieniem i numerem telefonu i wyślij paczkomatem inPost!
          <div class="other-city__inpost">
            <img
              class="other-city__inpost-logo"
              src="/icons/inpost.png"
              alt="dostawa paczkomatem inPost"
              width="100"
            />
            <p class="other-city__inpost-address">
              Inpost. WRO 10B <br />
              Hallera 52, 53-324 Wrocław <br />
              <span>
                UWAGA !!! Proszę umieścić swój numer telefonu w etui.
              </span>
            </p>
          </div>
        </a>
      </div>
    </v-container>
  </div>
</template>
<script setup>
import VContainer from "~/components/atoms/v-container/VContainer.vue";
import VTitle from "~/components/atoms/v-title/VTitle.vue";
import FormClient from "~/components/forms/form-client/FormClient.vue";
import ConfirmWindow from "~/components/atoms/confirm-window/ConfirmWindow.vue";
import { ref } from "vue";

const isOpen = ref(false);
</script>

<style>
.other-city {
  padding: 30px 0;
}

.other-city__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
}
.other-city__step {
  background-color: var(--bg-primary);
  border-radius: var(--default-radius);
  padding: 20px 15px 30px;
  width: 100%;
}

.other-city__step-title {
  color: var(--color-primary);
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 20px;
}

.other-city__inpost-link {
  padding: 20px 10px;
  border-radius: var(--default-radius);
  font-weight: 500;
  line-height: 1.3;
  font-size: 26px;
  transition: 0.3s;
}
.other-city__inpost-link:hover {
  background-color: var(--bg-tertiary);
}
.other-city__inpost {
  margin-top: 20px;
}
.other-city__inpost-logo {
  margin-bottom: 10px;
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
  .other-city {
    padding: 40px 0;
  }
  .other-city__inpost {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .other-city__inpost-logo {
    max-width: 200px;
    width: 100%;
    margin-bottom: 0;
  }
}

@media (min-width: 767px) {
  .other-city {
    padding: 60px 0;
  }
  .other-city__content {
    flex-direction: row;
    align-items: stretch;
  }

  .other-city__inpost-link {
    margin-top: 0;
    text-align: left;
    font-size: 24px;
  }
  .other-city__inpost {
    flex-direction: column;
  }
  .other-city__inpost-logo {
    max-width: 200px;
    width: 100%;
  }
  .other-city__inpost-address {
    text-align: left;
    max-width: none;
    font-size: 20px;
  }
}
@media (min-width: 998px) {
  .other-city__step {
    padding: 30px;
  }
  .other-city__inpost-logo {
    max-width: 300px;
  }
}
</style>
