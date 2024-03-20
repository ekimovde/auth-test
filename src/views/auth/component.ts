import { defineComponent } from "vue";

import { PAGE_NAME } from "./attributes";
import { AuthTab, AuthTabLabel, AuthTabValue } from "./model";

import { AuthCard, AuthTabs, AuthRegister, AuthLogin } from "@/components/auth";

type Component = typeof AuthRegister | typeof AuthLogin;

export default defineComponent({
  name: PAGE_NAME,
  components: {
    AuthCard,
    AuthTabs,
    AuthRegister,
    AuthLogin,
  },
  data() {
    return {
      tab: AuthTabValue.register,
      loading: false,
    };
  },
  computed: {
    displayedTabs(): AuthTab[] {
      return [
        {
          id: 0,
          label: AuthTabLabel.register,
          value: AuthTabValue.register,
          isActive: AuthTabValue.register === this.tab,
        },
        {
          id: 1,
          label: AuthTabLabel.login,
          value: AuthTabValue.login,
          isActive: AuthTabValue.login === this.tab,
        },
      ];
    },

    displayedComponent(): Component {
      switch (this.tab) {
        case AuthTabValue.register:
          return AuthRegister;
        case AuthTabValue.login:
          return AuthLogin;
        default:
          return AuthRegister;
      }
    },
  },
});
