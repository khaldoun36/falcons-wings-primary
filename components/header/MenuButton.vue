<template>
  <div class="menu-icon">
    <label for="menu-icon__cheeckbox" class="sr-only">Mobile menu button</label>
    <input
      class="menu-icon__cheeckbox"
      type="checkbox"
      id="menu-icon__cheeckbox"
    />
    <div>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.menu-icon {
  position: relative;
  width: 50px;
  height: 50px;
  cursor: pointer;
}

.menu-icon .menu-icon__cheeckbox {
  display: block;
  width: 100%;
  height: 100%;
  position: relative;
  cursor: pointer;
  z-index: 2;
  -webkit-touch-callout: none;
  position: absolute;
  opacity: 0;
}

.menu-icon div {
  margin: auto;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 22px;
  height: 12px;
}

.menu-icon span {
  position: absolute;
  display: block;
  width: 100%;
  height: 2px;
  background-color: var(--color-neutral-100);
  border-radius: 1px;
  transition: all 0.2s cubic-bezier(0.1, 0.82, 0.76, 0.965);
}

.menu-icon span:first-of-type {
  top: 0;
}

.menu-icon span:last-of-type {
  bottom: 0;
}

.menu-icon.active span:first-of-type,
.menu-icon .menu-icon__cheeckbox:checked + div span:first-of-type {
  transform: rotate(45deg);
  top: 5px;
}

.menu-icon.active span:last-of-type,
.menu-icon .menu-icon__cheeckbox:checked + div span:last-of-type {
  transform: rotate(-45deg);
  bottom: 5px;
}

.menu-icon.active:hover span:first-of-type,
.menu-icon.active:hover span:last-of-type,
.menu-icon:hover .menu-icon__cheeckbox:checked + div span:first-of-type,
.menu-icon:hover .menu-icon__cheeckbox:checked + div span:last-of-type {
  width: 22px;
}

@media (min-width: 1024px) {
  .menu-icon:hover span:first-of-type {
    width: 26px;
  }

  .menu-icon:hover span:last-of-type {
    width: 12px;
  }
}
</style>
