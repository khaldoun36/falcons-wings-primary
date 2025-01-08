<template>
  <div
    ref="sentinel"
    class="pointer-events-none absolute top-0 h-[1px] w-full opacity-0"
  ></div>
  <div
    class="full-width sticky top-0 z-[1000] grid h-10 grid-cols-subgrid bg-red-300 py-2"
  >
    <div class="col-start-2 col-end-2 flex items-center justify-between">
      <div class="size-10 rounded-full bg-red-400"></div>
      <div class="size-10 rounded-full bg-red-700"></div>
    </div>
  </div>
</template>

<script setup>
const isScrolled = ref(false);
const isOpen = ref(false);
const sentinel = ref(null);

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      isScrolled.value = !entry.isIntersecting;
    },
    {
      // Using 0 threshold to detect as soon as the element starts entering/leaving viewport
      threshold: 0.4,
      // Small negative margin to trigger slightly after scroll starts
      rootMargin: "0px 0px 0px 0px",
    },
  );

  if (sentinel.value) {
    observer.observe(sentinel.value);
  }

  onUnmounted(() => {
    observer.disconnect();
  });
});

const { locale } = useI18n();

const enNav = [
  {
    text: "Home",
    link: "/",
    key: Math.random() + "home",
  },
  {
    text: "About us",
    link: "/#about",
    key: Math.random() + "about",
  },
  {
    text: "Programs",
    link: "/#programs",
    key: Math.random() + "programs",
  },
  {
    text: "Locations",
    link: "/#locations",
    key: Math.random() + "locations",
  },
  {
    text: "Q&A",
    link: "/#faq",
    key: Math.random() + "faq",
  },
  {
    text: "Contact us",
    link: "/#contact",
    key: Math.random() + "contact",
  },
];

const arNav = [
  {
    text: "الرئيسية",
    link: "/",
    key: Math.random() + "home" + locale,
  },
  {
    text: "من نحن",
    link: "/#about",
    key: Math.random() + "about" + locale,
  },
  {
    text: "البرامج",
    link: "/#programs",
    key: Math.random() + "programs" + locale,
  },
  {
    text: "المواقع",
    link: "/#locations",
    key: Math.random() + "locations" + locale,
  },
  {
    text: "الأسئلة الشائعة",
    link: "/#faq",
    key: Math.random() + "faq" + locale,
  },
  {
    text: "اتصل بنا",
    link: "/#contact",
    key: Math.random() + "contact" + locale,
  },
];

const navLinks = computed(() => {
  return locale === "en" ? enNav : arNav;
});
</script>

<style scoped>
header.active:after {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  border-radius: inherit;
  background: var(--color-primary-950);
  backdrop-filter: blur(12px);
}

@media screen and (width < 768px) {
  nav {
    position: fixed;
    inset: 0;
    min-height: 100dvh;
    background: var(--color-primary-950);
    backdrop-filter: blur(12px);
    display: flex;
    align-items: center;
    justify-content: start;

    transform: translateY(-100%);
    transition: transform 250ms ease-in-out;
  }

  nav.open {
    transform: translateY(0);
  }

  body:has(nav.open) {
    overflow: hidden;
  }

  nav ul {
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: 3rem;
  }

  nav ul li {
    font-size: 1.5rem;
  }
}
</style>
