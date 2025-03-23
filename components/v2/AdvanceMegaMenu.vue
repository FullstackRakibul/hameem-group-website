<template>
  <!-- Desktop Navigation -->
  <ul class="hidden md:flex items-center space-x-6">
    <li v-for="item in menuItems" :key="item.label" class="relative" @mouseenter="item.key && openMenu(item.key)"
      @mouseleave="item.key && closeMenuWithDelay(item.key)">
      <NuxtLink :to="item.to || '#'" @click.prevent="item.children ? null : null"
        class="text-lg font-medium hover:text-blue-600">
        {{ item.label }}
      </NuxtLink>

      <!-- Mega Menu Component (for Business Units, etc.) -->
      <Transition enter-active-class="transition-opacity duration-300" enter-from-class="opacity-0"
        enter-to-class="opacity-100" leave-active-class="transition-opacity duration-300" leave-from-class="opacity-100"
        leave-to-class="opacity-0">
        <div v-if="openDropdown === item.key && item.megaComponent" @mouseenter="cancelClose(item.key)"
          @mouseleave="closeMenuWithDelay(item.key)" class="container rounded-md absolute top-9 bg-white shadow-lg border-t z-50 w-[900px] max-w-screen-lg">
          <component :is="item.megaComponent" />
        </div>
      </Transition>
    </li>
  </ul>

  <!-- Mobile Navigation (overlay and slide-in menu) -->
  <div class="md:hidden">
    <div v-if="props.mobileOpen" class="fixed inset-0 bg-black bg-opacity-50 z-40" @click="emitCloseMobile"></div>
    <Transition enter-active-class="transition duration-300 transform" enter-from-class="translate-x-full"
      enter-to-class="translate-x-0" leave-active-class="transition duration-300 transform"
      leave-from-class="translate-x-0" leave-to-class="translate-x-full">
      <nav v-if="props.mobileOpen" class="fixed top-0 right-0 h-full w-64 bg-white shadow-xl p-4 z-50">
        <ul>
          <li v-for="item in menuItems" :key="'mobile-' + item.label" class="mb-1">
            <div v-if="item.children">
              <button @click="toggleSubMenu(item.key)"
                class="w-full flex justify-between items-center py-2 px-3 text-left text-lg font-medium">
                <span>{{ item.label }}</span>
              </button>
              <ul v-if="openDropdown === item.key" class="mt-1 mb-2 ml-4 border-l border-gray-300">
                <li v-for="child in item.children" :key="'mobile-' + item.label + '-' + child.label">
                  <NuxtLink :to="child.to" class="block py-1 px-3 text-gray-700 hover:text-blue-600"
                    @click="emitCloseMobile">
                    {{ child.label }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
            <div v-else>
              <NuxtLink :to="item.to" class="block py-2 px-3 text-lg font-medium hover:text-blue-600"
                @click="emitCloseMobile">
                {{ item.label }}
              </NuxtLink>
            </div>
          </li>
        </ul>
      </nav>
    </Transition>
  </div>
</template>

<script setup>
import { ref, defineAsyncComponent } from 'vue';
// Props for mobile menu visibility
const props = defineProps({
  mobileOpen: {
    type: Boolean,
    default: false
  }
});
const emit = defineEmits(['closeMobileMenu']);

// Define the menu structure, now including mega menu components
const BusinessUnitMegamenu = defineAsyncComponent(() => import('./ui/BusinessUnit.megamenu.vue'));

const menuItems = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  {
    label: 'Business Units',
    key: 'business-units',
    megaComponent: BusinessUnitMegamenu,
    fullWidth: true,
  },
  { label: 'Sustainability', to: '/sustainability' },
  {
    label: 'Products',
    key: 'products',
    children: [
      { label: 'Product A', to: '/products/a' },
      { label: 'Product B', to: '/products/b' }
    ]
  },
  { label: 'Clients', to: '/clients' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact Us', to: '/contact' }
];

// State to track open dropdowns
const openDropdown = ref(null);
let closeTimeout = null;

// Open a dropdown menu (for desktop hover)
function openMenu(key) {
  if (closeTimeout) {
    clearTimeout(closeTimeout);
    closeTimeout = null;
  }
  openDropdown.value = key;
}

// Close a dropdown menu with a slight delay (on desktop hover leave)
function closeMenuWithDelay(key) {
  if (closeTimeout) {
    clearTimeout(closeTimeout);
  }
  closeTimeout = setTimeout(() => {
    if (openDropdown.value === key) {
      openDropdown.value = null;
    }
  }, 200);
}

// Cancel the pending close if the user re-enters the menu quickly (desktop hover)
function cancelClose(key) {
  if (closeTimeout) {
    clearTimeout(closeTimeout);
    closeTimeout = null;
  }
}

// Toggle a sub-menu open/closed on mobile (accordion behavior)
function toggleSubMenu(key) {
  openDropdown.value = (openDropdown.value === key ? null : key);
}

// Emit an event to close the mobile menu (when clicking a link or backdrop on mobile)
function emitCloseMobile() {
  emit('closeMobileMenu');
}
</script>

<style scoped>
/* Rotate arrow on submenu toggle */
.material-icons.rotate-90 {
  transform: rotate(90deg);
}
</style>
