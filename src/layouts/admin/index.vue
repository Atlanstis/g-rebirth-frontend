<script lang="ts" setup>
import { useLayoutStore } from '@/stores';
import { computed } from 'vue';
import { numberToPx } from './helpers';
import {
  LayoutHeader,
  LayoutTab,
  LayoutSider,
  LayoutContent,
  LayoutFooter,
} from './components';

defineOptions({
  name: 'AdminLayout',
});

const layoutStore = useLayoutStore();

const adminVar = computed(() => layoutStore.admin.var);
const adminState = computed(() => layoutStore.admin.state);

const leftGapStyle = computed(() => {
  return {
    'padding-left': adminState.value.siderCollapsed
      ? numberToPx(adminVar.value.siderCollapsedWidth)
      : numberToPx(adminVar.value.siderWidth),
  };
});

const headerStyle = computed(() => ({
  ...leftGapStyle.value,
  height: numberToPx(adminVar.value.headerHeight),
}));

const tabStyle = computed(() => ({
  ...leftGapStyle.value,
  height: numberToPx(adminVar.value.tabHeight),
}));

const siderStyle = computed(() => ({
  width: adminState.value.siderCollapsed
    ? numberToPx(adminVar.value.siderCollapsedWidth)
    : numberToPx(adminVar.value.siderWidth),
}));

const footerStyle = computed(() => ({
  ...leftGapStyle.value,
  height: numberToPx(adminVar.value.footerHeight),
}));
</script>

<template>
  <div class="h-full flex-col relative bg-#f6f9f8">
    <header class="flex-shrink-0 z-97 transition-all-300" :style="headerStyle">
      <LayoutHeader />
    </header>
    <div class="flex-shrink-0 z-95 transition-all-300" :style="tabStyle">
      <LayoutTab />
    </div>
    <aside
      class="absolute top-0 left-0 h-full z-99 transition-all-300"
      :style="siderStyle"
    >
      <LayoutSider />
    </aside>
    <main
      class="flex-grow overflow-hidden transition-all-300"
      :style="leftGapStyle"
    >
      <LayoutContent />
    </main>
    <footer class="flex-shrink-0 z-95 transition-all-300" :style="footerStyle">
      <LayoutFooter />
    </footer>
  </div>
</template>

<style lang="scss" scoped></style>
