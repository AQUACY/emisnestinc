<template>
  <div id="app">
    <q-layout view="hHh lpR fFf">
      <!-- Top Navigation Bar -->
      <q-header elevated class="bg-white text-dark">
        <q-toolbar class="q-px-md">
          <!-- Logo -->
          <q-toolbar-title>
            <div class="row items-center">
              <span class="text-h4 text-weight-bold text-red">XPO</span>
            </div>
          </q-toolbar-title>

          <!-- Desktop Navigation -->
          <div class="gt-sm q-ml-lg">
            <div class="row items-center q-gutter-md">
              <div class="nav-item">
                <span class="nav-link">Ship, Track, Quote</span>
                <q-icon name="expand_more" size="xs" class="q-ml-xs" />
              </div>
              <div class="nav-item">
                <span class="nav-link">Services</span>
                <q-icon name="expand_more" size="xs" class="q-ml-xs" />
              </div>
              <div class="nav-item">
                <span class="nav-link">Careers</span>
                <q-icon name="expand_more" size="xs" class="q-ml-xs" />
              </div>
              <div class="nav-item">
                <span class="nav-link">Company</span>
                <q-icon name="expand_more" size="xs" class="q-ml-xs" />
              </div>
              <div class="nav-item">
                <span class="nav-link">Request a Quote</span>
                <q-icon name="arrow_forward" size="xs" class="q-ml-xs" />
              </div>
            </div>
          </div>

          <!-- Utility Links -->
          <div class="gt-sm q-ml-lg">
            <q-btn flat label="Contact Us" class="nav-link-btn" />
            <q-btn flat label="Login" class="nav-link-btn q-ml-md" />
          </div>

          <!-- Action Buttons -->
          <div class="gt-sm q-ml-lg">
            <q-btn flat round icon="language" class="bg-grey-4 text-dark">
              <q-menu>
                <q-list>
                  <q-item clickable v-ripple to="/">English</q-item>
                  <q-item clickable v-ripple to="/">French</q-item>
                  <q-item clickable v-ripple to="/">Spanish</q-item>
                </q-list>
              </q-menu>
            </q-btn>
            <q-btn
              flat
              round
              icon="search"
              class="bg-grey-7 text-white q-ml-sm"
              @click="toggleSearch"
            />
            <q-btn
              color="red"
              label="Get Started"
              class="q-ml-md get-started-btn"
            />
          </div>

          <!-- Mobile Menu Button -->
          <q-btn
            flat
            dense
            icon="search"
            aria-label="Search"
            @click="toggleSearch"
            class="lt-md text-dark q-ml-sm"
          />
          <q-btn
            flat
            dense
            round
            icon="menu"
            aria-label="Menu"
            @click="toggleRightDrawer"
            class="lt-md text-dark"
          />
        </q-toolbar>

        <!-- Search Input Field -->
        <div v-if="showSearch" class="search-container">
          <div class="search-input-wrapper">
            <q-input
              v-model="searchQuery"
              placeholder="Search all of XPO"
              class="search-input"
              outlined
              dense
              autofocus
              @keyup.enter="performSearch"
            >
              <template v-slot:append>
                <q-icon name="search" class="search-icon" />
              </template>
            </q-input>
          </div>
        </div>
      </q-header>

      <!-- Mobile Navigation Drawer -->
      <q-drawer
        v-model="rightDrawerOpen"
        side="right"
        bordered
        :width="300"
        class="bg-dark text-white"
      >
        <q-list>
          <q-item-label header class="text-white">Navigation</q-item-label>
          <q-item clickable v-ripple to="/" exact>
            <q-item-section avatar>
              <q-icon name="home" class="text-white" />
            </q-item-section>
            <q-item-section class="text-white">Home</q-item-section>
          </q-item>
          <q-item clickable v-ripple to="/services">
            <q-item-section avatar>
              <q-icon name="local_shipping" class="text-white" />
            </q-item-section>
            <q-item-section class="text-white">Services</q-item-section>
          </q-item>
          <q-item clickable v-ripple to="/about">
            <q-item-section avatar>
              <q-icon name="info" class="text-white" />
            </q-item-section>
            <q-item-section class="text-white">About</q-item-section>
          </q-item>
          <q-item clickable v-ripple to="/contact">
            <q-item-section avatar>
              <q-icon name="contact_support" class="text-white" />
            </q-item-section>
            <q-item-section class="text-white">Contact</q-item-section>
          </q-item>
        </q-list>

        <div class="q-pa-md">
          <q-btn color="red" label="Get Started" class="full-width" />
        </div>
      </q-drawer>

      <!-- Page Container -->
      <q-page-container>
        <router-view />
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
import { ref } from "vue";
import { useQuasar } from "quasar";

export default {
  name: "App",
  setup() {
    const $q = useQuasar();
    const tab = ref("home");
    const rightDrawerOpen = ref(false);
    const trackingNumber = ref("");
    const showSearch = ref(false);
    const searchQuery = ref("");

    const toggleRightDrawer = () => {
      rightDrawerOpen.value = !rightDrawerOpen.value;
    };

    const toggleSearch = () => {
      showSearch.value = !showSearch.value;
      if (showSearch.value) {
        // Focus the search input when it appears
        setTimeout(() => {
          const searchInput = document.querySelector(".search-input input");
          if (searchInput) {
            searchInput.focus();
          }
        }, 100);
      }
    };

    const performSearch = () => {
      if (searchQuery.value.trim()) {
        console.log("Searching for:", searchQuery.value);
        $q.notify({
          type: "info",
          message: `Searching for: ${searchQuery.value}`,
          position: "top",
        });
        // Here you would typically navigate to search results or perform the search
        showSearch.value = false;
        searchQuery.value = "";
      }
    };

    const trackShipment = () => {
      if (trackingNumber.value) {
        console.log("Tracking shipment:", trackingNumber.value);
        $q.notify({
          type: "positive",
          message: "Tracking information will be displayed",
          position: "top",
        });
      }
    };

    return {
      tab,
      rightDrawerOpen,
      trackingNumber,
      showSearch,
      searchQuery,
      toggleRightDrawer,
      toggleSearch,
      performSearch,
      trackShipment,
    };
  },
};
</script>

<style>
#app {
  font-family: "Roboto", sans-serif;
}

.q-header {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid #e0e0e0;
}

.q-footer {
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.3);
}

/* Navigation Items */
.nav-item {
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0.5rem 0.75rem;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.nav-item:hover {
  background-color: #f5f5f5;
}

.nav-link {
  color: #000;
  font-weight: bold;
  font-size: 0.875rem;
  text-decoration: none;
  font-family: sans-serif;
}

.nav-link-btn {
  color: #000 !important;
  font-weight: bold !important;
  font-size: 0.875rem !important;
  font-family: sans-serif !important;
}

.nav-link-btn:hover {
  background-color: #f5f5f5 !important;
}

.get-started-btn {
  font-weight: bold !important;
  font-family: sans-serif !important;
  text-transform: none !important;
}

/* Search Input Styles */
.search-container {
  background: white;
  padding: 1rem 2rem;
  border-bottom: 1px solid #e0e0e0;
  animation: slideDown 0.3s ease-out;
}

.search-input-wrapper {
  max-width: 800px;
  margin: 0 auto;
}

.search-input {
  width: 100%;
}

.search-input .q-field__control {
  background: white !important;
  border: none !important;
  border-bottom: 2px solid #dc3545 !important;
  border-radius: 0 !important;
  box-shadow: none !important;
}

.search-input .q-field__control:hover {
  border-bottom: 2px solid #dc3545 !important;
}

.search-input .q-field__control:focus-within {
  border-bottom: 2px solid #dc3545 !important;
}

.search-input .q-field__native {
  color: #000 !important;
  font-size: 1rem !important;
  padding: 0.75rem 0 !important;
}

.search-input .q-field__native::placeholder {
  color: #999 !important;
  font-size: 1rem !important;
}

.search-icon {
  color: #666 !important;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.tracking-input .q-field__control {
  background: white;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #1d1d1d;
}

::-webkit-scrollbar-thumb {
  background: #ff0000;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #cc0000;
}
</style>
