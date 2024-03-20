import { defineComponent, PropType } from "vue";

import { COMPONENT_NAME } from "./attributes";

import { AuthTab, AuthTabValue } from "@/views/auth/model";

export default defineComponent({
  name: COMPONENT_NAME,
  props: {
    tabs: {
      type: Array as PropType<AuthTab[]>,
      default: () => [],
    },
    tab: {
      type: String,
      default: AuthTabValue.register,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  emits: {
    "update:tab": null,
  },
  methods: {
    handleTab({ value }: AuthTab): void {
      this.$emit("update:tab", value);
    },
  },
});
