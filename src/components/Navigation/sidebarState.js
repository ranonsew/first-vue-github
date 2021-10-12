import { ref, computed } from "vue";

// state management area when project was smaller
// might want to move this into vuex now since I have started on that.

export const collapsed = ref(true); // this determines default state of sidebar
// current value toggled into not of itself, so if true, now false, and vice versa
export const toggleSidebar = () => (collapsed.value = !collapsed.value);

// constant values
export const SIDEBAR_WIDTH = 11;
export const SIDEBAR_WIDTH_COLLAPSED = 3.4;

// sidebarWidth is 38px if value is true, else it is 180px
export const sidebarWidth = computed(
  () => `${collapsed.value ? SIDEBAR_WIDTH_COLLAPSED : SIDEBAR_WIDTH}rem`
);
