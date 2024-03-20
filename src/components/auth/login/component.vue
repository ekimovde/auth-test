<script lang="ts" src="./component.ts"></script>
<style lang="scss" src="./component.scss"></style>

<template>
  <div :class="b()">
    <SharedLabelInput
      label="Email"
      placeholder="you@example.com"
      :error="validate.errors?.email"
      v-model:value="validate.values.email"
      @focusin="validate.validateField('email')"
      @focusout="validate.validateField('email')"
    />

    <SharedLabelInput
      label="Пароль"
      placeholder="....."
      :error="validate.errors?.password"
      v-model:value="validate.values.password"
      @focusin="validate.validateField('password')"
      @focusout="validate.validateField('password')"
    />

    <UIButton label="Войти" :disabled="isDisabled" @click="handleLogin" />
  </div>
</template>
