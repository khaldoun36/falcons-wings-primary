<template>
  <div
    class="full-width layout-container header-container fixed top-0 right-0 left-0 isolate z-50 !min-h-auto"
    :class="{ active: isMenuBlured || useRoute().path !== '/' }"
  >
    <div ref="headerTracker" class="h-[1px] w-full bg-transparent" />
    <header
      class="primary-header isolate flex items-center justify-between py-4"
    >
      <i18n-link to="/" aria-label="home">
        <Logo />
      </i18n-link>
      <nav
        class="primary-nav flex items-center gap-10"
        :class="{ active: isMenuOpen }"
      >
        <i18n-link
          v-for="link in nav"
          :key="link.href"
          :to="link.href"
          class="text-base text-neutral-100"
          :class="{ 'tracking-wide': $getLocale() === 'en' }"
        >
          {{ link.title }}
        </i18n-link>
        <i18n-link
          to="/#contact-us"
          class="btn mx-auto mt-10 !flex !px-12 !py-6 sm:!hidden"
        >
          Contact Us
        </i18n-link>
      </nav>
      <div class="cta-container flex items-center gap-4">
        <MenuButton
          class="menu-btn z-[99999]"
          @click="isMenuOpen = !isMenuOpen"
        />

        <button
          class="btn language-btn"
          @click="handleLocaleChange"
          aria-label="language selector"
        >
          <Icon name="heroicons:language" size="1.5rem" />
        </button>

        <i18n-link to="/#contact-us" class="btn contact-us-btn">{{
          $getLocale() === "ar" ? "تواصل معنا" : "Contact Us"
        }}</i18n-link>
      </div>
    </header>
  </div>
</template>

<script setup>
import MenuButton from "./MenuButton.vue";
import Logo from "../Logo.vue";
import enNav from "./enNav.json";
import arNav from "./arNav.json";
const { $getLocale, $switchLocale } = useI18n();

const nav = computed(() => {
  return $getLocale() === "en" ? enNav.enNav : arNav.arNav;
});

const isMenuOpen = ref(false);
const isMenuBlured = ref(false);
const headerTracker = ref("");
onMounted(() => {
  window.addEventListener("scroll", () => {
    isMenuBlured.value = window.scrollY > 20;
  });
});

onUnmounted(() => {
  window.removeEventListener("scroll", () => {
    isMenuBlured.value = window.scrollY > 20;
  });
});

const handleLocaleChange = () => {
  if ($getLocale() === "en") {
    reloadNuxtApp({
      ttl: 100,
      path: "/ar",
    });
    setTimeout(() => {
      $switchLocale("ar");
    }, 500);
  } else if ($getLocale() === "ar") {
    reloadNuxtApp({
      ttl: 100,
      path: "/",
    });
    setTimeout(() => {
      $switchLocale("en");
    }, 500);
  }
};
</script>

<style scoped>
.header-container {
  isolation: isolate;
}

.header-container:after {
  content: "";
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  background: transparent;
  z-index: -1;
  transition: background 150ms ease-in-out;
}

.header-container.active::after {
  background: color-mix(in oklab, var(--color-primary-950) 70%, transparent);
  backdrop-filter: blur(10px);
}

@media screen and (width <= 58rem) {
  .header-container .contact-us-btn {
    display: none;
  }
}

@media screen and (width <= 45rem) {
  .primary-nav {
    position: fixed;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    inset: 0;
    min-height: 100dvh;
    background: color-mix(in oklab, var(--color-primary-950) 70%, transparent);
    backdrop-filter: blur(10px);
    z-index: 100;
    padding-inline-start: var(--spacing-4);
    transform: translateY(-100%);
    transition: transform 250ms ease-in-out;
  }

  .primary-nav a {
    font-size: var(--text-2xl);
  }
  .primary-nav.active {
    transform: translateY(0);
  }
  div .language-btn {
    background: transparent;
    color: var(--color-neutral-100);
  }
  .cta-container {
    flex-direction: row-reverse;
  }
}

@media screen and (width >= 45rem) {
  .menu-btn {
    display: none;
  }
}
</style>
