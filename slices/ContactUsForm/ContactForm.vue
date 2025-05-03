<template>
  <div>
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

      <button
        type="submit"
        class="btn btn-primary mt-2"
        :disabled="status === 'loading'"
      >
        <span v-if="status === 'loading'">{{
          $getLocale() === "ar" ? "جار الإرسال..." : "Submitting..."
        }}</span>
        <span v-else>{{ $getLocale() === "ar" ? "إرسال" : "Submit" }}</span>
      </button>
    </form>

    <dialog
      ref="modalRef"
      @close="onDialogClose"
      @click="handleClickOutside"
      class="m-auto w-[calc(100%-32px)] rounded-lg border border-neutral-700 bg-neutral-800 p-6 text-neutral-100 shadow-xl md:w-auto md:max-w-[600px]"
    >
      <div class="flex flex-col items-center gap-4 text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-12 w-12 text-green-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <p class="text-lg">
          Thank you for contacting us, the team will be in contact with you
          soon.
        </p>
        <button @click="closeModal" class="btn btn-secondary mt-4 px-4 py-2">
          Close
        </button>
      </div>
    </dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue"; // Added onMounted
const { message } = defineProps<{
  message: string;
}>();
const { $getLocale } = useI18n();
import { z } from "zod";

// --- Modal ---
const modalRef = ref<HTMLDialogElement | null>(null);

const openModal = () => {
  if (modalRef.value) {
    document.body.style.overflow = "hidden"; // 2. Stop scrolling
    modalRef.value.showModal(); // Uses the modal version to get backdrop & focus trap
  }
};

const closeModal = () => {
  modalRef.value?.close();
};

// This function runs when the dialog is closed by any means (button, ESC key)
const onDialogClose = () => {
  document.body.style.overflow = ""; // 2. Restore scrolling
};

// 5. Added Feature: Close modal on backdrop click
const handleClickOutside = (event: MouseEvent) => {
  if (event.target === modalRef.value) {
    closeModal();
  }
};
// --- End Modal ---

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
      /^(|00971\d{9}|0\d{9}|\+971\d{9})$/,
      "Invalid phone number format. Leave empty or use 00971..., 0..., or +971...",
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

const result = ref(""); // You might not need 'result' anymore if using the modal
const status = ref("");
const errors = ref<Partial<Record<keyof FormData, string>>>({});

type ApiResponse = {
  message: string;
  status: number;
};

const submitForm = async () => {
  try {
    errors.value = {};
    const validatedData = formSchema.parse(form.value);
    status.value = "loading";

    // Web3Forms Submission
    const response = await $fetch<ApiResponse>(
      "https://api.web3forms.com/submit",
      {
        method: "POST",
        body: validatedData,
      },
    );

    // Optional Google Script Background Task (no changes needed here)
    try {
      const googleFormData = new FormData();
      googleFormData.append("Name", form.value.name);
      googleFormData.append("Email", form.value.email);
      googleFormData.append("Phone", form.value.phone || "");
      googleFormData.append("Organization", form.value.school);
      googleFormData.append("Message", form.value.message);

      fetch(
        "https://script.google.com/macros/s/AKfycbytfXxo8N3gOg5JUJADKOX5rS9FwXppCSF68l-tCCbES08rp7pHEeKY2LrknEuD7HVHJA/exec",
        {
          method: "POST",
          mode: "no-cors", // Important for this type of request
          body: googleFormData,
        },
      ).catch((error) => {
        console.warn("Google form backup submission failed:", error);
      });
    } catch (e) {
      console.warn("Error attempting Google form submission:", e);
    }

    if (response.message) {
      status.value = "success";
      // Reset form
      form.value.name = "";
      form.value.email = "";
      form.value.phone = "";
      form.value.school = "";
      form.value.message = "";
      errors.value = {}; // Clear errors on success too

      // --- Trigger the modal ---
      openModal(); // 1. Trigger modal on success
      // --- End Trigger ---
    } else {
      // Handle potential non-error responses from web3forms if needed
      console.warn("Web3Forms response indicates potential issue:", response);
      status.value = "error";
      result.value = "Submission received, but encountered an issue."; // Example message
    }
  } catch (error) {
    status.value = "error"; // Set status to error
    if (error instanceof z.ZodError) {
      error.errors.forEach((err) => {
        if (err.path && err.path[0]) {
          // Check if path exists and has elements
          errors.value[err.path[0] as keyof FormData] = err.message;
        }
      });
      result.value = "Please correct the errors in the form."; // General error message
    } else {
      console.error("Form submission error:", error);
      result.value = "Something went wrong! Please try again."; // Generic fallback
    }
  } finally {
    // Clear status after a delay, only if it wasn't success (modal handles success feedback)
    if (status.value !== "success") {
      setTimeout(() => {
        result.value = "";
        status.value = "";
      }, 5000);
    } else {
      // If successful, we might still want to reset status eventually,
      // maybe after modal is closed, or just leave it as success
      // For now, let's reset it when the modal closes via onDialogClose
      // No, onDialogClose might fire too early if closed via ESC.
      // Let's just reset status here too, but keep it distinct from error case.
      setTimeout(() => {
        if (status.value === "success") status.value = "";
      }, 1000); // Short delay after success
    }
  }
};
</script>

<style scoped>
/* 3. Darken background behind modal */
dialog::backdrop {
  background-color: rgba(0, 0, 0, 0.6); /* Adjust opacity as needed */
  backdrop-filter: blur(3px); /* Optional: Add a blur effect */
  /* Add transitions for smoother appearance */
  transition:
    background-color 0.3s ease-out,
    backdrop-filter 0.3s ease-out;
}

/* Optional: Add entrance/exit animations */
dialog {
  opacity: 0;
  transform: scale(0.95);
  transition:
    opacity 0.2s ease-out,
    transform 0.2s ease-out,
    display 0.2s allow-end;
}

dialog[open] {
  opacity: 1;
  transform: scale(1);
}

/* When closing */
@starting-style {
  dialog[open] {
    opacity: 0;
    transform: scale(0.95);
  }
}
dialog:not([open]) {
  opacity: 0;
  transform: scale(0.95);
}

/* Ensure dialog is visually distinct */
dialog {
  /* Styles are applied via Tailwind classes in the template */
  /* Example base styles if not using Tailwind extensively:
    padding: 1.5rem;
    background-color: #333;
    color: #eee;
    border-radius: 0.5rem;
    border: 1px solid #555;
    max-width: 600px;
    width: calc(100% - 32px);
  */
}

/* 4. Responsive width handled by Tailwind classes in the template:
   w-[calc(100%-32px)] md:w-auto md:max-w-[600px]
   - Default: width is 100% minus 32px (16px margin each side)
   - md breakpoint and up: width becomes auto, constrained by max-width 600px
*/

/* Basic button styling if needed (Tailwind btn classes used in template) */
/*
.btn {
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: background-color 0.2s;
}
.btn-primary { background-color: #...; color: #...; }
.btn-secondary { background-color: #...; color: #...; }
.btn:disabled { opacity: 0.6; cursor: not-allowed; }
*/

/* Loading state for button (Tailwind used in template) */
/*
button:disabled span:first-child { display: inline-block; }
button:not(:disabled) span:first-child { display: none; }
button:disabled span:last-child { display: none; }
*/
</style>
