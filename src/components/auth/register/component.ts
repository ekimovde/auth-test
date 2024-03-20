import { defineComponent } from "vue";

import { COMPONENT_NAME } from "./attributes";

import { SharedLabelInput } from "@/components/shared";
import { UIButton } from "@/components/ui";

import { RegisterRequestFactory } from "@/shared/factory/auth";
import {
  LocalStorageName,
  ResponseMessage,
  RoutesName,
} from "@/shared/constants/constants";
import { setCookie } from "@/shared/utils/cookie-helpers";
import { validateHelpers } from "@/shared/utils/validate-helpers";
import { registerSchema } from "@/shared/schemas/schemas";

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
      validate: validateHelpers(registerSchema),
    };
  },
  computed: {
    isDisabled(): boolean {
      const { values, errors } = this.validate;

      return (
        !values.name ||
        !values.email ||
        !values.password ||
        !values.password_confirmation ||
        !!errors?.name ||
        !!errors?.email ||
        !!errors?.password ||
        !!errors?.password_confirmation ||
        this.loading
      );
    },
  },
  methods: {
    async handleRegister(): Promise<void> {
      try {
        this.$emit("update:loading", true);

        await this.$projectServices.projectRepository
          .registrer(RegisterRequestFactory(this.validate.values))
          .then(({ message, access_token }) => {
            if (message === ResponseMessage.registerSuccess) {
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
