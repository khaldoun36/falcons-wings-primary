<template>
  <form class="flex flex-col gap-8" @submit.prevent="submitForm">
    <div class="flex flex-col gap-2">
      <label for="name" class="text-sm text-neutral-300/80 md:text-base">
        {{ formData.name }}
        <span class="text-red-500">*</span></label
      >
      <input
        type="text"
        name="name"
        id="name"
        required
        class="focus:ring-primary-700/60 rounded-md border-[1.5px] border-white/10 bg-neutral-600/40 p-2 text-neutral-100 focus:ring-2 focus:outline-none"
        v-model="form.name"
      />
      <span v-if="errors.name" class="text-sm text-red-500">{{
        errors.name
      }}</span>
    </div>
    <div class="flex flex-col gap-2">
      <label for="email" class="text-sm text-neutral-300/80 md:text-base">
        {{ formData.email }}
        <span class="text-red-500">*</span></label
      >
      <input
        type="email"
        name="email"
        id="email"
        required
        class="focus:ring-primary-700/60 rounded-md border-[1.5px] border-white/10 bg-neutral-600/40 p-2 text-neutral-100 focus:ring-2 focus:outline-none"
        v-model="form.email"
      />
      <span v-if="errors.email" class="text-sm text-red-500">{{
        errors.email
      }}</span>
    </div>
    <div class="flex flex-col gap-2">
      <label for="phone" class="text-sm text-neutral-300/80 md:text-base">
        {{ formData.phone }}</label
      >
      <input
        type="tel"
        name="phone"
        id="phone"
        class="focus:ring-primary-700/60 rounded-md border-[1.5px] border-white/10 bg-neutral-600/40 p-2 text-neutral-100 focus:ring-2 focus:outline-none"
        v-model="form.phone"
      />
      <span v-if="errors.phone" class="text-sm text-red-500">{{
        errors.phone
      }}</span>
    </div>
    <div class="flex flex-col gap-2">
      <label for="school" class="text-sm text-neutral-300/80 md:text-base">
        {{ formData.school }}
        <span class="text-red-500">*</span></label
      >
      <input
        type="text"
        name="school"
        id="school"
        required
        class="focus:ring-primary-700/60 rounded-md border-[1.5px] border-white/10 bg-neutral-600/40 p-2 text-neutral-100 focus:ring-2 focus:outline-none"
        v-model="form.school"
      />
      <span v-if="errors.school" class="text-sm text-red-500">{{
        errors.school
      }}</span>
    </div>
    <div class="flex flex-col gap-2">
      <label for="message" class="text-sm text-neutral-300/80 md:text-base">
        {{ formData.message }}
        <span class="text-red-500">*</span></label
      >
      <textarea
        name="message"
        id="message"
        required
        rows="4"
        class="focus:ring-primary-700/60 rounded-md border-[1.5px] border-white/10 bg-neutral-600/40 p-2 text-neutral-100 focus:ring-2 focus:outline-none"
        v-model="form.message"
        :placeholder="message"
      />
      <span v-if="errors.message" class="text-sm text-red-500">{{
        errors.message
      }}</span>
    </div>

    <button type="submit" class="btn btn-primary mt-2">
      {{ $getLocale() === "ar" ? "إرسال" : "Submit" }}
    </button>
  </form>
</template>

<script setup lang="ts">
const { message } = defineProps<{
  message: string;
}>();
const { $getLocale } = useI18n();
import { z } from "zod";

const formDataEn = {
  name: "Name",
  email: "Email",
  phone: "Phone",
  school: "School/Organization",
  message: "Message",
};

const formDataAr = {
  name: "الاسم",
  email: "البريد الإلكتروني",
  phone: "رقم الهاتف",
  school: "المدرسة/الجهة",
  message: "الرسالة",
};

const formData = computed(() => {
  return $getLocale() === "ar" ? formDataAr : formDataEn;
});

const formSchema = z.object({
  access_key: z.string(),
  subject: z.string(),
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .regex(
      /^(00971\d{9}|0\d{9}|\+971\d{9})$/, // Updated regex to include +971
      "Invalid phone number format. Accepted formats are 00971XXXXXXXXX, 0XXXXXXXXX, or +971XXXXXXXXX.",
    )
    .optional(),
  school: z
    .string()
    .min(2, "School/Organization must be at least 2 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});
type FormData = z.infer<typeof formSchema>;

const form = ref<FormData>({
  access_key: "1f62dcaf-597d-4198-9dd6-b7283948ca0a",
  // access_key: import.meta.env.VITE_FORM_ACCESS_KEY,
  subject: "New Submission from Falcon's Wings",
  name: "",
  email: "",
  phone: "",
  school: "",
  message: "",
});

const result = ref("");
const status = ref("");
const errors = ref<Partial<Record<keyof FormData, string>>>({});

type ApiResponse = {
  message: string;
  status: number;
};

// Submit just to web3forms and skip Google Script
const submitForm = async () => {
  try {
    // Reset errors
    errors.value = {};

    // Validate form data
    const validatedData = formSchema.parse(form.value);

    status.value = "loading";

    // Only use web3forms for submission since Google Script is giving 403 errors
    const response = await $fetch<ApiResponse>(
      "https://api.web3forms.com/submit",
      {
        method: "POST",
        body: validatedData,
      },
    );

    // Try sending to Google Script separately as a background task
    // This won't block the main form submission
    try {
      const formData = new FormData();
      formData.append("Name", form.value.name);
      formData.append("Email", form.value.email);
      formData.append("Phone", form.value.phone || "");
      formData.append("Organization", form.value.school);
      formData.append("Message", form.value.message);

      fetch(
        "https://script.google.com/macros/s/AKfycbytfXxo8N3gOg5JUJADKOX5rS9FwXppCSF68l-tCCbES08rp7pHEeKY2LrknEuD7HVHJA/exec",
        {
          method: "POST",
          mode: "no-cors",
          body: formData,
        },
      ).catch((error) => {
        // Silently fail - we don't want Google script errors to affect the user experience
        console.log(
          "Google form backup submission failed, continuing with main form",
        );
      });
    } catch (e) {
      // Ignore Google script errors completely
      console.log("Google form submission attempt failed");
    }

    if (response.message) {
      status.value = "success";
      // Reset form on success
      form.value.name = "";
      form.value.email = "";
      form.value.phone = "";
      form.value.school = "";
      form.value.message = "";
    } else {
      status.value = "error";
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      // Handle validation errors
      error.errors.forEach((err) => {
        if (err.path) {
          errors.value[err.path[0] as keyof FormData] = err.message;
        }
      });
    } else {
      console.error(error);
      status.value = "error";
      result.value = "Something went wrong!";
    }
  } finally {
    // Clear result and status after 5 seconds
    setTimeout(() => {
      result.value = "";
      status.value = "";
    }, 5000);
  }
};
</script>
