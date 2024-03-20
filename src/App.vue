<template>
  <div :class="b()">
    <component :is="displayedLayout" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { AuthLayout, DefaultLayout } from "@/layouts";

import { Layout } from "@/shared/constants/constants";

type DisplayedLayout = typeof AuthLayout | typeof DefaultLayout;

export default defineComponent({
  name: "app",
  components: {
    AuthLayout,
    DefaultLayout,
  },
  computed: {
    displayedLayout(): DisplayedLayout {
      const { layout } = this.$route.meta;

      switch (layout) {
        case Layout.default:
          return DefaultLayout;
        case Layout.auth:
          return AuthLayout;
        default:
          return DefaultLayout;
      }
    },
  },
});
</script>

<style lang="scss">
.app {
  @include full-screen;
}
</style>
