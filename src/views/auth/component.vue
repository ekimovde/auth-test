<script lang="ts" src="./component.ts"></script>
<style lang="scss" src="./component.scss"></style>

<template>
  <div :class="b()">
    <AuthCard>
      <AuthTabs :tabs="displayedTabs" v-model:tab="tab" :loading="loading" />

      <component :is="displayedComponent" v-model:loading="loading" />
    </AuthCard>
  </div>
</template>
