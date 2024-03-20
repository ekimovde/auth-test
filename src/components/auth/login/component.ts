import { defineComponent } from "vue";

import { COMPONENT_NAME } from "./attributes";

import { SharedLabelInput } from "@/components/shared";
import { UIButton } from "@/components/ui";

import { LoginRequestFactory } from "@/shared/factory/auth";
import { setCookie } from "@/shared/utils/cookie-helpers";
import { LocalStorageName, RoutesName } from "@/shared/constants/constants";
import { validateHelpers } from "@/shared/utils/validate-helpers";
import { loginSchema } from "@/shared/schemas/schemas";

export default defineComponent({
  name: COMPONENT_NAME,
  components: {
    SharedLabelInput,
    UIButton,
  },
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
  },
  emits: {
    "update:loading": null,
  },
  data() {
    return {
      validate: validateHelpers(loginSchema),
    };
  },
  computed: {
    isDisabled(): boolean {
      const { values, errors } = this.validate;

      return (
        !values.email ||
        !values.password ||
        !!errors?.email ||
        !!errors?.password ||
        this.loading
      );
    },
  },
  methods: {
    async handleLogin(): Promise<void> {
      try {
        this.$emit("update:loading", true);

        await this.$projectServices.projectRepository
          .login(LoginRequestFactory(this.validate.values))
          .then(({ access_token }) => {
            if (access_token) {
              setCookie(LocalStorageName.token, access_token);

              this.$router.push(RoutesName.main);
            }
          });
      } catch (e) {
        console.log(e);
      } finally {
        this.$emit("update:loading", false);
      }
    },
  },
});
