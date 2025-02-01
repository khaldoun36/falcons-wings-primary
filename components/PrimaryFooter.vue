<template>
  <div
    class="full-width bg-primary-950 grid grid-cols-subgrid border-t-[1.5px] border-white/10 py-8"
  >
    <footer
      class="col-start-2 col-end-2 flex flex-col items-start justify-between gap-12 md:flex-row md:items-center"
    >
      <Logo />
      <p class="text-center text-sm text-neutral-300/80">
        &copy; {{ new Date().getFullYear() }}
        {{
          $getLocale() === "en"
            ? "Falcon's Wings. All rights reserved."
            : "أجنحة الصقور. جميع الحقوق محفوظة."
        }}
      </p>
    </footer>
  </div>
</template>

<script setup>
import Logo from "./Logo.vue";
</script>

<style scoped></style>
