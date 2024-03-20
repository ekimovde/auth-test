<script lang="ts" src="./component.ts"></script>
<style lang="scss" src="./component.scss"></style>

<template>
  <div :class="b()">
    <SharedLabelInput
      label="Имя"
      placeholder="Ваше имя"
      :error="validate.errors?.name"
      v-model:value="validate.values.name"
      @focusin="validate.validateField('name')"
      @focusout="validate.validateField('name')"
    />

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

    <SharedLabelInput
      label="Подтверждение пароля"
      placeholder="....."
      :error="validate.errors?.password_confirmation"
      v-model:value="validate.values.password_confirmation"
      @focusin="validate.validateField('password_confirmation')"
      @focusout="validate.validateField('password_confirmation')"
    />

    <UIButton
      label="Регистрация"
      :disabled="isDisabled"
      @click="handleRegister"
    />
  </div>
</template>
