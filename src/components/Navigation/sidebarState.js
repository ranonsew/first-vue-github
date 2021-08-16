import { ref, computed } from "vue";

// 
export const collapsed = ref(false);
// current value toggled into not of itself, so if true, now false, and vice versa
export const toggleSidebar = () => (collapsed.value = !collapsed.value);

// constant values
export const SIDEBAR_WIDTH = 184;
export const SIDEBAR_WIDTH_COLLAPSED = 38;

// sidebarWidth is 38px if value is true, else it is 180px
export const sidebarWidth = computed(
  () => `${collapsed.value ? SIDEBAR_WIDTH_COLLAPSED : SIDEBAR_WIDTH}px`
);