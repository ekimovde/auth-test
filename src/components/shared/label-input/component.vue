<script lang="ts" src="./component.ts"></script>
<style lang="scss" src="./component.scss"></style>

<template>
  <div :class="b()">
    <p :class="b('label')">
      {{ label }}

      <span :class="b('label-required')" v-if="isRequired">*</span>
    </p>

    <input
      :class="b('field')"
      type="text"
      :placeholder="placeholder"
      :value="value"
      @input="handleInput"
    />

    <p :class="b('error')" v-if="error">
      {{ error }}
    </p>
  </div>
</template>
