import { createStore, Store } from "vuex";

import { ProjectStore } from "@/store/model";

const store = (): Store<ProjectStore> =>
  createStore({
    modules: {},
  }) as Store<ProjectStore>;

export default store;
