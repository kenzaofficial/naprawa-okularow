<template>
  <footer class="footer">
    <v-container class="footer__container">
      <v-logo />
      <div class="footer__address">
        <span class="footer__address-title">Tu się znajdujemy:</span>
        <a
          class="footer__address-link"
          href="https://maps.app.goo.gl/KUjSfp7xy2pU284F8"
          target="_blank"
          >Centrum Handlowe Borek. ul. Hallera 52. lokal na przeciwko RESERVED
          Pn-Sb. 9.00-21.00
        </a>
      </div>
      <div class="footer__contacts">
        <span class="footer__contacts-title">Skontaktuj się z nami:</span>
        <ul class="footer__list">
          <li
            class="footer__item"
            v-for="(social, index) in socials"
            :key="index"
          >
            <a class="footer__link" :href="social.href">
              <img :src="social.icon" :alt="social.alt" width="15" />
              {{ social.text }}
            </a>
          </li>
        </ul>
      </div>
    </v-container>
    <div class="footer__bottom">
      <a class="footer__email" href="mailto:naprawkaokularow@gmail.com">
        <img src="@/public/icons/email.svg" alt="email" width="10" />
        naprawkaokularow@gmail.com</a
      >
      <span class="footer__copyright"
        >{{ currentYear }} © Wszelkie prawa zastrzeżone
      </span>
    </div>
  </footer>
</template>

<script setup>
import VLogo from "@/components/atoms/v-logo/VLogo.vue";
import VContainer from "~/components/atoms/v-container/VContainer.vue";

const socials = ref([
  {
    href: "https://www.facebook.com/share/1H7LsA1kHv/?mibextid=LQQJ4d",
    icon: "/icons/facebook.svg",
    text: "facebook",
    alt: "facebook icon",
  },
  {
    href: "https://www.instagram.com/naprawa_okularow?igsh=b2ljbmZrNTRxOHNv",
    icon: "/icons/instagram.svg",
    text: "instagram",
    alt: "instagram icon",
  },
  {
    href: "https://wa.me/+48881554779",
    icon: "/icons/whatsapp.svg",
    text: "+48 (815) 547-79",
    alt: "whatsapp icon",
  },
  {
    href: "https://t.me/naprawa_okularow",
    icon: "/icons/telegram.svg",
    text: "+48 (815) 547-79",
    alt: "telegram icon",
  },
  {
    href: "#",
    icon: "/icons/viber.svg",
    text: "+48 (815) 547-79",
    alt: "viber icon",
  },
]);
const currentYear = computed(() => new Date().getFullYear());
</script>

<style scoped>
.footer {
  padding: 10px 0;
  background: var(--base-gradient-01);
}

.footer__container {
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
}
.footer__address {
  max-width: 250px;
}
.footer__address-link {
  font-size: 12px;
  transition: 0.3s;
}
.footer__contacts {
  flex-shrink: 0;
}
.footer__contacts-title,
.footer__address-title {
  display: inline-block;
  margin-bottom: 5px;
  color: var(--color-primary);
  font-size: 12px;
}

.footer__list {
  display: grid;
  margin-left: auto;
  gap: 5px 10px;
  align-items: center;
}

.footer__link {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 12px;
  transition: 0.3s;
  gap: 5px;
}

.footer__address,
.footer__contacts {
  text-align: left;
}

.footer__address-link:hover,
.footer__link:hover {
  color: var(--color-primary);
}

.footer__bottom {
  display: grid;
  gap: 3px;
}
.footer__email {
  justify-content: center;
  display: flex;
  align-items: center;
  font-size: 12px;
  column-gap: 3px;
}
.footer__copyright {
  font-size: 12px;
  color: var(--color-secondary);
}

@media (min-width: 400px) {
  .footer__list {
    row-gap: 10px;
    margin: 0 auto;
    text-align: left;
    grid-template-columns: repeat(2, auto);
  }
  .footer__link {
    justify-content: flex-start;
  }
  .footer__email {
    font-size: 14px;
  }
}
@media (min-width: 500px) {
  .footer__link img {
    width: 25px;
  }
}
@media (min-width: 767px) {
  .footer {
    padding: 20px 0;
  }
  .footer__list {
    grid-template-columns: repeat(3, auto);
    gap: 10px 30px;
  }

  .footer__container {
    margin-bottom: 20px;
  }
  @media (min-width: 1099px) {
    .footer__link img {
      width: 35px;
    }
  }
}
</style>
