declare module "vue-bem-cn";

declare module "click-outside-vue3";

/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue';

  const component: DefineComponent<{}, {}, any>;

  export default component;
}
