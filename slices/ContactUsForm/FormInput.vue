<template>
  <div class="flex flex-col gap-2">
    <label :for="inputName" class="text-sm text-neutral-300/80 md:text-base">
      {{ inputLabel }}
      <span class="text-red-500" v-if="isRequired">*</span></label
    >

    <component
      :is="tag === 'textarea' ? 'textarea' : 'input'"
      :type="inputType"
      :name="inputName"
      :id="inputName"
      :required="isRequired"
      rows="4"
      class="focus:ring-primary-700/60 rounded-md border-[1.5px] border-white/10 bg-neutral-600/40 p-2 text-neutral-100 focus:ring-2 focus:outline-none"
    />
  </div>
</template>

<script setup lang="ts">
const {
  tag = "input",
  inputLabel,
  inputName,
  inputType,
  isRequired,
} = defineProps<{
  tag?: string;
  inputLabel: string;
  inputName: string;
  inputType: string;

  isRequired: boolean;
}>();
</script>

<style scoped></style>
