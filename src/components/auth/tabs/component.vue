<script lang="ts" src="./component.ts"></script>
<style lang="scss" src="./component.scss"></style>

<template>
  <div :class="b()">
    <button
      :class="b('tab', { active: tab.isActive })"
      v-for="tab in tabs"
      :key="tab.id"
      :disabled="loading"
      @click="handleTab(tab)"
    >
      {{ tab.label }}
    </button>
  </div>
</template>
