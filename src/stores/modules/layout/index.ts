import { defineStore } from 'pinia';

interface LayoutState {
  admin: {
    var: {
      headerHeight: number;
      tabHeight: number;
      siderWidth: number;
      siderCollapsedWidth: number;
      footerHeight: number;
    };
    state: {
      siderCollapsed: boolean;
    };
  };
}

export const useLayoutStore = defineStore('layoutStore', {
  state: (): LayoutState => ({
    admin: {
      var: {
        headerHeight: 56,
        tabHeight: 44,
        siderWidth: 220,
        siderCollapsedWidth: 64,
        footerHeight: 48,
      },
      state: {
        siderCollapsed: false,
      },
    },
  }),
});
