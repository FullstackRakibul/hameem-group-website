<template>
  <!-- Desktop Navigation -->
  <ul class="hidden md:flex items-center space-x-6">
    <li v-for="item in menuItems" :key="item.label" class="relative" @mouseenter="item.key && openMenu(item.key)"
      @mouseleave="item.key && closeMenuWithDelay(item.key)">
      <NuxtLink 
        :to="item.to || '#'" 
        @click="handleNavigation(item)"
        :class="[
          'text-lg px-2 py-1 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]',
          'hover:bg-slate-200 hover:rounded-full hover:px-3 hover:py-2',
          'hover:font-bold hover:text-primary hover:scale-105',
          isScrolled ? 'text-white hover:text-primary' : 'text-white',
          'animate__animated hover:animate__pulse'
        ]"
      >
        {{ item.label }}
      </NuxtLink>

      <!-- Mega Menu Component (for Business Units, etc.) -->
      <Transition enter-active-class="transition-opacity duration-300" enter-from-class="opacity-0"
        enter-to-class="opacity-100" leave-active-class="transition-opacity duration-300" leave-from-class="opacity-100"
        leave-to-class="opacity-0">
        <div v-if="openDropdown === item.key && item.megaComponent" 
          @mouseenter="cancelClose(item.key)"
          @mouseleave="closeMenuWithDelay(item.key)"
          class="container rounded-md absolute top-12 left-1/2 transform -translate-x-1/3 bg-white shadow-lg border-t z-50 w-[1000px] max-w-screen-lg">
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
                @click="handleMobileNavigation(item)">
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
import { ref, defineAsyncComponent, onMounted, onUnmounted, nextTick } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();
const isScrolled = ref(false);

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
  { label: 'About Us', key: 'about-us', to: '/#about-us' },
  {
    label: 'Business Units',
    key: 'business-units',
    to: '/#business-unit',
    megaComponent: BusinessUnitMegamenu,
    fullWidth: true,
  },
  { label: 'Sustainability', to: '/#index-sustainability' },
  {
    label: 'Expansion Plan',
    key: 'expansionPlan',
    to: '/#expansionPlan',
    // children: [
    //   { label: 'Product A', to: '/products/a' },
    //   { label: 'Product B', to: '/products/b' }
    // ]
  },
  { label: 'Clients', to: '/#index-client' },
  // { label: 'Gallery', to: '/#indexGallery' },
  { label: 'Gallery', to: '/our-gallery' },
  { 
    label: 'Contact Us', 
    to: '/contact'
  }
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

// Handle scroll event
const handleScroll = () => {
  isScrolled.value = window.scrollY > 100;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  
  // Check if there's a hash in the URL on initial load
  if (route.hash) {
    nextTick(() => {
      scrollToElement(route.hash.substring(1));
    });
  }
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

// Improved scroll function that works with element IDs
const scrollToElement = (elementId) => {
  if (!elementId) return;
  
  // Remove the '#' if it exists
  const id = elementId.startsWith('#') ? elementId.substring(1) : elementId;
  
  // Try to find the element
  const element = document.getElementById(id);
  
  if (element) {
    // Get the element's position
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - 100; // Adjust for header height
    
    // Scroll to the element
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
    return true;
  }
  
  return false;
};

// Handle navigation with improved routing logic
const handleNavigation = (item) => {
  if (!item.to) return;
  
  // If it's a section ID on the current page
  if (item.to.startsWith('#')) {
    scrollToElement(item.to.substring(1));
    return;
  }
  
  // If it's a route with a hash (like '/about#team')
  if (item.to.includes('#')) {
    const [path, hash] = item.to.split('#');
    
    // If we're already on the correct page, just scroll
    if (route.path === path || (path === '/' && route.path === '')) {
      scrollToElement(hash);
    } else {
      // Navigate to the new page and then scroll after navigation is complete
      router.push(path).then(() => {
        nextTick(() => {
          scrollToElement(hash);
        });
      });
    }
    return;
  }
  
  // Regular navigation without hash
  router.push(item.to);
};

// Handle mobile navigation
const handleMobileNavigation = (item) => {
  handleNavigation(item);
  emitCloseMobile();
};
</script>

<style scoped>
/* Rotate arrow on submenu toggle */
.material-icons.rotate-90 {
  transform: rotate(90deg);
}
</style>
