import { defineComponent } from "vue";

import { COMPONENT_NAME } from "./attributes";

export default defineComponent({
  name: COMPONENT_NAME,
  props: {
    label: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    value: {
      type: String,
      default: "",
    },
    error: {
      type: String,
      default: "",
    },
    isRequired: {
      type: Boolean,
      default: true,
    },
  },
  emits: {
    "update:value": null,
  },
  methods: {
    handleInput(event: Event): void {
      const { value } = event.target as HTMLInputElement;

      this.$emit("update:value", value);
    },
  },
});
