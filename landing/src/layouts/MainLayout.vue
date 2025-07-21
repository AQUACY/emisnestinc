<template>
  <div id="app">
    <q-layout view="hHh lpR fFf">
      <!-- Top Navigation Bar -->
      <q-header elevated class="header-modern">
        <q-toolbar class="toolbar-modern">
          <!-- Logo Section -->
          <div class="logo-section">
            <div class="logo-container">
              <img
                src="../assets/emisnest-logo.png"
                alt="Emi's Nest"
                class="logo-image"
              />
              <div class="brand-text">
                <h1 class="brand-name">{{ $t("header.brand.name") }}</h1>
                <p class="brand-tagline">{{ $t("header.brand.tagline") }}</p>
              </div>
            </div>
          </div>

          <!-- Desktop Navigation -->
          <div class="nav-desktop">
            <div class="nav-menu">
              <div class="nav-item" @click="goHome">
                <span class="nav-link">{{ $t("nav.menu") }}</span>
                <div class="nav-indicator"></div>
              </div>
              <div class="nav-item" @click="goAbout">
                <span class="nav-link">{{ $t("nav.about") }}</span>
                <div class="nav-indicator"></div>
              </div>
              <div class="nav-item" @click="goServices">
                <span class="nav-link">{{ $t("nav.services") }}</span>
                <div class="nav-indicator"></div>
              </div>
              <div class="nav-item careers-dropdown" @click="toggleCareersMenu">
                <span class="nav-link">{{ $t("nav.careers") }}</span>
                <q-icon name="expand_more" class="careers-arrow" />
                <div class="nav-indicator"></div>

                <!-- Careers Submenu -->
                <div v-if="showCareersMenu" class="careers-submenu">
                  <div class="submenu-item" @click="goToCareer('driver')">
                    <q-icon name="local_shipping" class="submenu-icon" />
                    <span>{{ $t("nav.careerssub.driver") }}</span>
                  </div>
                  <div class="submenu-item" @click="goToCareer('dockworker')">
                    <q-icon name="work" class="submenu-icon" />
                    <span>{{ $t("nav.careerssub.dockworker") }}</span>
                  </div>
                  <div class="submenu-item" @click="goToCareer('mechanic')">
                    <q-icon name="build" class="submenu-icon" />
                    <span>{{ $t("nav.careerssub.mechanic") }}</span>
                  </div>
                </div>
              </div>
              <div class="nav-item" @click="goNews">
                <span class="nav-link">{{ $t("nav.news") }}</span>
                <div class="nav-indicator"></div>
              </div>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="nav-actions">
            <div
              class="nav-item nav-item-contact"
              @click="scrollToSection('contactUs')"
            >
              <span class="nav-link">{{ $t("nav.contactUs") }}</span>
              <div class="nav-indicator"></div>
            </div>
            <!-- Language Switcher -->
            <div class="language-switcher">
              <q-btn-dropdown
                flat
                round
                :icon="currentLocale === 'en-US' ? 'flag' : 'flag'"
                class="action-btn lang-btn"
                color="var(--dermiqt-yellow)"
                text-color="var(--dermiqt-dark-text)"
              >
                <q-list class="lang-menu">
                  <q-item
                    clickable
                    v-ripple
                    @click="changeLanguage('en-US')"
                    class="lang-item"
                  >
                    <q-item-section avatar>
                      <q-icon name="flag" color="var(--dermiqt-yellow)" />
                    </q-item-section>
                    <q-item-section>{{
                      $t("header.language.english")
                    }}</q-item-section>
                    <q-item-section side v-if="currentLocale === 'en-US'">
                      <q-icon name="check" color="var(--dermiqt-yellow)" />
                    </q-item-section>
                  </q-item>
                  <q-item
                    clickable
                    v-ripple
                    @click="changeLanguage('fr-FR')"
                    class="lang-item"
                  >
                    <q-item-section avatar>
                      <q-icon name="flag" color="var(--dermiqt-yellow)" />
                    </q-item-section>
                    <q-item-section>{{
                      $t("header.language.french")
                    }}</q-item-section>
                    <q-item-section side v-if="currentLocale === 'fr-FR'">
                      <q-icon name="check" color="var(--dermiqt-yellow)" />
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-btn-dropdown>
            </div>

            <!-- Search Button -->
            <q-btn
              flat
              round
              icon="search"
              class="action-btn search-btn"
              @click="toggleSearch"
            />

            <!-- CTA Button -->
            <q-btn
              class="cta-btn"
              :label="$t('nav.shopNow')"
              @click="scrollToSection('contactUs')"
            />
          </div>

          <!-- Mobile Menu Button -->
          <q-btn
            flat
            dense
            round
            icon="menu"
            aria-label="Menu"
            @click="toggleMobileMenu"
            class="mobile-menu-btn"
          />
        </q-toolbar>

        <!-- Search Bar -->
        <div v-if="showSearch" class="search-overlay">
          <div class="search-container">
            <q-input
              v-model="searchQuery"
              :placeholder="$t('header.searchPlaceholder')"
              class="search-input"
              outlined
              dense
              autofocus
              @keyup.enter="performSearch"
              @blur="closeSearch"
            >
              <template v-slot:prepend>
                <q-icon name="search" class="search-icon" />
              </template>
              <template v-slot:append>
                <q-btn flat round icon="close" @click="closeSearch" />
              </template>
            </q-input>
          </div>
        </div>
      </q-header>

      <!-- Mobile Navigation Drawer -->
      <q-drawer
        v-model="mobileMenuOpen"
        side="right"
        bordered
        :width="300"
        class="mobile-drawer"
      >
        <div class="mobile-header">
          <div class="mobile-brand">
            <img
              src="../assets/emisnest-logo.png"
              alt="Emi's Nest"
              class="mobile-logo-image"
            />
            <h3 class="mobile-brand-name">{{ $t("header.brand.name") }}</h3>
          </div>
        </div>

        <q-list class="mobile-nav-list">
          <!-- Home -->
          <q-item clickable v-ripple @click="goHome" class="mobile-nav-item">
            <q-item-section avatar>
              <q-icon name="home" color="var(--dermiqt-yellow)" />
            </q-item-section>
            <q-item-section>{{ $t("nav.menu") }}</q-item-section>
          </q-item>

          <!-- About -->
          <q-item clickable v-ripple @click="goAbout" class="mobile-nav-item">
            <q-item-section avatar>
              <q-icon name="info" color="var(--dermiqt-yellow)" />
            </q-item-section>
            <q-item-section>{{ $t("nav.about") }}</q-item-section>
          </q-item>

          <!-- Services -->
          <q-item
            clickable
            v-ripple
            @click="goServices"
            class="mobile-nav-item"
          >
            <q-item-section avatar>
              <q-icon name="local_shipping" color="var(--dermiqt-yellow)" />
            </q-item-section>
            <q-item-section>{{ $t("nav.services") }}</q-item-section>
          </q-item>

          <!-- Careers Submenu -->
          <q-expansion-item
            icon="work"
            :label="$t('nav.careers')"
            class="mobile-nav-item careers-expansion"
            header-class="careers-expansion-header"
          >
            <q-list class="mobile-careers-submenu">
              <q-item
                clickable
                v-ripple
                @click="goToCareer('driver')"
                class="mobile-submenu-item"
              >
                <q-item-section avatar>
                  <q-icon name="local_shipping" color="var(--dermiqt-yellow)" />
                </q-item-section>
                <q-item-section>{{
                  $t("nav.careerssub.driver")
                }}</q-item-section>
              </q-item>
              <q-item
                clickable
                v-ripple
                @click="goToCareer('dockworker')"
                class="mobile-submenu-item"
              >
                <q-item-section avatar>
                  <q-icon name="work" color="var(--dermiqt-yellow)" />
                </q-item-section>
                <q-item-section>{{
                  $t("nav.careerssub.dockworker")
                }}</q-item-section>
              </q-item>
              <q-item
                clickable
                v-ripple
                @click="goToCareer('mechanic')"
                class="mobile-submenu-item"
              >
                <q-item-section avatar>
                  <q-icon name="build" color="var(--dermiqt-yellow)" />
                </q-item-section>
                <q-item-section>{{
                  $t("nav.careerssub.mechanic")
                }}</q-item-section>
              </q-item>
            </q-list>
          </q-expansion-item>

          <!-- News -->
          <q-item clickable v-ripple @click="goNews" class="mobile-nav-item">
            <q-item-section avatar>
              <q-icon name="article" color="var(--dermiqt-yellow)" />
            </q-item-section>
            <q-item-section>{{ $t("nav.news") }}</q-item-section>
          </q-item>

          <!-- Contact -->
          <q-item
            clickable
            v-ripple
            @click="scrollToSection('contactUs')"
            class="mobile-nav-item"
          >
            <q-item-section avatar>
              <q-icon name="contact_support" color="var(--dermiqt-yellow)" />
            </q-item-section>
            <q-item-section>{{ $t("nav.contactUs") }}</q-item-section>
          </q-item>
        </q-list>

        <!-- Mobile Actions -->
        <div class="mobile-actions">
          <!-- Language Switcher -->
          <div class="mobile-language-switcher">
            <q-btn-dropdown
              flat
              :label="currentLocale === 'en-US' ? 'English' : 'Français'"
              class="mobile-lang-btn"
              color="var(--dermiqt-yellow)"
              text-color="var(--dermiqt-dark-text)"
            >
              <q-list class="lang-menu">
                <q-item
                  clickable
                  v-ripple
                  @click="changeLanguage('en-US')"
                  class="lang-item"
                >
                  <q-item-section avatar>
                    <q-icon name="flag" color="var(--dermiqt-yellow)" />
                  </q-item-section>
                  <q-item-section>{{
                    $t("header.language.english")
                  }}</q-item-section>
                  <q-item-section side v-if="currentLocale === 'en-US'">
                    <q-icon name="check" color="var(--dermiqt-yellow)" />
                  </q-item-section>
                </q-item>
                <q-item
                  clickable
                  v-ripple
                  @click="changeLanguage('fr-FR')"
                  class="lang-item"
                >
                  <q-item-section avatar>
                    <q-icon name="flag" color="var(--dermiqt-yellow)" />
                  </q-item-section>
                  <q-item-section>{{
                    $t("header.language.french")
                  }}</q-item-section>
                  <q-item-section side v-if="currentLocale === 'fr-FR'">
                    <q-icon name="check" color="var(--dermiqt-yellow)" />
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
          </div>

          <!-- Search Button -->
          <q-btn
            flat
            icon="search"
            class="mobile-search-btn"
            @click="toggleSearch"
          />

          <!-- CTA Button -->
          <q-btn
            class="mobile-cta-btn"
            :label="$t('nav.shopNow')"
            @click="scrollToSection('contactUs')"
          />
        </div>
      </q-drawer>

      <!-- Page Container -->
      <q-page-container>
        <router-view />
      </q-page-container>
    </q-layout>

    <!-- Chat Widget -->
    <ChatWidget />
  </div>
</template>

<script>
import { ref, computed, onMounted } from "vue";
import { useQuasar } from "quasar";
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";
import ChatWidget from "../components/Chat.vue";

export default {
  name: "App",
  components: {
    ChatWidget,
  },
  setup() {
    const $q = useQuasar();
    const { t, locale } = useI18n();
    const router = useRouter();

    const tab = ref("home");
    const mobileMenuOpen = ref(false);
    const trackingNumber = ref("");
    const showSearch = ref(false);
    const searchQuery = ref("");
    const showCareersMenu = ref(false);

    // Language management
    const currentLocale = computed(() => locale.value);

    const changeLanguage = (newLocale) => {
      locale.value = newLocale;
      localStorage.setItem("dermiqt-locale", newLocale);
      $q.notify({
        type: "positive",
        message:
          newLocale === "fr-FR"
            ? "Langue changée en français"
            : "Language changed to English",
        position: "top",
      });
    };

    // Load saved language preference
    onMounted(() => {
      const savedLocale = localStorage.getItem("dermiqt-locale");
      if (savedLocale && (savedLocale === "en-US" || savedLocale === "fr-FR")) {
        locale.value = savedLocale;
      }

      // Set default page title if not already set by router
      if (!document.title || document.title === "Emi's Nest") {
        document.title = "Emi's Nest - World-Class LTL Solutions";
      }
    });

    const toggleMobileMenu = () => {
      mobileMenuOpen.value = !mobileMenuOpen.value;
    };

    const goHome = () => {
      router.push("/");
    };

    const goAbout = () => {
      router.push("/about");
    };

    const goServices = () => {
      router.push("/services");
    };

    const goNews = () => {
      router.push("/news");
    };

    const toggleCareersMenu = () => {
      showCareersMenu.value = !showCareersMenu.value;
    };

    const goToCareer = (careerType) => {
      // Close the submenu
      showCareersMenu.value = false;

      // Navigate to the specific career page or section
      // You can customize this based on your routing structure
      router.push(`/careers/${careerType}`);

      // Or if you want to scroll to a section instead:
      // scrollToSection(`careers-${careerType}`);
    };

    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      mobileMenuOpen.value = false;
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

    const closeSearch = () => {
      showSearch.value = false;
      searchQuery.value = "";
    };

    const performSearch = () => {
      if (searchQuery.value.trim()) {
        console.log("Searching for:", searchQuery.value);
        $q.notify({
          type: "info",
          message: t("messages.searchPerformed", { query: searchQuery.value }),
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
          message: t("messages.trackingSuccess"),
          position: "top",
        });
      }
    };

    return {
      tab,
      mobileMenuOpen,
      trackingNumber,
      showSearch,
      searchQuery,
      showCareersMenu,
      currentLocale,
      changeLanguage,
      toggleMobileMenu,
      goHome,
      goAbout,
      goServices,
      goNews,
      toggleCareersMenu,
      goToCareer,
      scrollToSection,
      toggleSearch,
      closeSearch,
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

/* Modern Header Styles */
.header-modern {
  background: linear-gradient(
    135deg,
    var(--dermiqt-dark-text) 0%,
    #1a1a1a 100%
  );
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  border-bottom: 1px solid rgba(193, 120, 23, 0.2);
}

.toolbar-modern {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  min-height: 80px;
}

/* Logo Section */
.logo-section {
  display: flex;
  align-items: center;
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.logo-image {
  width: 50px;
  height: 50px;
  object-fit: contain;
  border-radius: 8px;
}

.brand-text {
  display: flex;
  flex-direction: column;
}

.brand-name {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--dermiqt-yellow);
  margin: 0;
  line-height: 1.2;
}

.brand-tagline {
  font-size: 0.75rem;
  color: var(--dermiqt-white);
  opacity: 0.8;
  margin: 0;
  line-height: 1.2;
}

/* Desktop Navigation */
.nav-desktop {
  display: flex;
  align-items: center;
}

.nav-menu {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-item {
  position: relative;
  cursor: pointer;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.nav-item:hover {
  background: rgba(193, 120, 23, 0.1);
}

.nav-link {
  color: var(--dermiqt-white);
  font-weight: 600;
  font-size: 0.875rem;
  text-decoration: none;
  transition: color 0.3s ease;
}

.nav-item:hover .nav-link {
  color: var(--dermiqt-yellow);
}

.nav-indicator {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 2px;
  background: var(--dermiqt-yellow);
  transition: width 0.3s ease;
}

.nav-item:hover .nav-indicator {
  width: 100%;
}

/* Careers Dropdown */
.careers-dropdown {
  position: relative;
}

.careers-arrow {
  margin-left: 0.5rem;
  font-size: 1rem;
  color: var(--dermiqt-white);
  transition: transform 0.3s ease;
}

.careers-dropdown:hover .careers-arrow {
  transform: rotate(180deg);
}

.careers-submenu {
  position: absolute;
  top: 100%;
  left: 0;
  background: var(--dermiqt-dark-text);
  border: 1px solid rgba(193, 120, 23, 0.2);
  border-radius: 8px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  min-width: 200px;
  z-index: 1000;
  margin-top: 0.5rem;
  animation: slideDown 0.3s ease-out;
}

.submenu-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  color: var(--dermiqt-white);
  cursor: pointer;
  transition: all 0.3s ease;
  border-bottom: 1px solid rgba(193, 120, 23, 0.1);
}

.submenu-item:last-child {
  border-bottom: none;
}

.submenu-item:hover {
  background: rgba(193, 120, 23, 0.1);
  color: var(--dermiqt-yellow);
}

.submenu-icon {
  font-size: 1.25rem;
  color: var(--dermiqt-yellow);
}

.submenu-item:hover .submenu-icon {
  color: var(--dermiqt-yellow);
}

/* Action Buttons */
.nav-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.language-switcher {
  position: relative;
}

.lang-btn {
  background: rgba(193, 120, 23, 0.1);
  border: 1px solid rgba(193, 120, 23, 0.2);
  color: var(--dermiqt-yellow);
  transition: all 0.3s ease;
}

.lang-btn:hover {
  background: var(--dermiqt-yellow);
  color: var(--dermiqt-dark-text);
  transform: translateY(-2px);
}

.lang-menu {
  background: var(--dermiqt-dark-text);
  border: 1px solid rgba(193, 120, 23, 0.2);
  border-radius: 8px;
  min-width: 200px;
}

.lang-item {
  color: var(--dermiqt-white);
  transition: background 0.3s ease;
}

.lang-item:hover {
  background: rgba(193, 120, 23, 0.1);
}

.action-btn {
  background: rgba(193, 120, 23, 0.1);
  border: 1px solid rgba(193, 120, 23, 0.2);
  color: var(--dermiqt-yellow);
  transition: all 0.3s ease;
}

.action-btn:hover {
  background: var(--dermiqt-yellow);
  color: var(--dermiqt-dark-text);
  transform: translateY(-2px);
}

.cta-btn {
  background: var(--dermiqt-yellow);
  color: var(--dermiqt-dark-text);
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  text-transform: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(193, 120, 23, 0.3);
}

.cta-btn:hover {
  background: #e6a800;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(193, 120, 23, 0.4);
}

.mobile-menu-btn {
  display: none;
  background: rgba(193, 120, 23, 0.1);
  border: 1px solid rgba(193, 120, 23, 0.2);
  color: var(--dermiqt-yellow);
}

/* Search Overlay */
.search-overlay {
  background: rgba(0, 0, 0, 0.9);
  padding: 1rem 2rem;
  animation: slideDown 0.3s ease-out;
}

.search-container {
  max-width: 600px;
  margin: 0 auto;
}

.search-input {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(193, 120, 23, 0.3);
  border-radius: 8px;
}

.search-input :deep(.q-field__control) {
  background: transparent;
}

.search-input :deep(.q-field__native) {
  color: var(--dermiqt-white);
}

.search-input :deep(.q-field__native::placeholder) {
  color: var(--dermiqt-white);
  opacity: 0.6;
}

.search-icon {
  color: var(--dermiqt-yellow);
}

/* Mobile Drawer */
.mobile-drawer {
  background: var(--dermiqt-dark-text);
  color: var(--dermiqt-white);
}

.mobile-header {
  padding: 2rem 1.5rem;
  border-bottom: 1px solid rgba(193, 120, 23, 0.2);
}

.mobile-brand {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.mobile-logo-image {
  width: 40px;
  height: 40px;
  object-fit: contain;
  border-radius: 6px;
}

.mobile-brand-name {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--dermiqt-yellow);
  margin: 0;
}

.mobile-nav-list {
  padding: 1rem 0;
}

.mobile-nav-item {
  color: var(--dermiqt-white);
  transition: background 0.3s ease;
  margin: 0.5rem 1rem;
  border-radius: 8px;
}

.mobile-nav-item:hover {
  background: rgba(193, 120, 23, 0.1);
}

/* Mobile Careers Submenu */
.careers-expansion {
  color: var(--dermiqt-white);
}

.careers-expansion-header {
  color: var(--dermiqt-white);
  background: transparent;
}

.mobile-careers-submenu {
  background: rgba(193, 120, 23, 0.05);
  margin: 0 1rem;
  border-radius: 8px;
}

.mobile-submenu-item {
  color: var(--dermiqt-white);
  transition: background 0.3s ease;
  margin: 0.25rem 0;
  border-radius: 6px;
}

.mobile-submenu-item:hover {
  background: rgba(193, 120, 23, 0.1);
}

.mobile-actions {
  padding: 2rem 1.5rem;
  border-top: 1px solid rgba(193, 120, 23, 0.2);
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.mobile-language-switcher {
  width: 100%;
}

.mobile-lang-btn {
  width: 100%;
  background: rgba(193, 120, 23, 0.1);
  border: 1px solid rgba(193, 120, 23, 0.3);
  color: var(--dermiqt-white);
  text-transform: none;
  font-weight: 500;
}

.mobile-search-btn {
  width: 100%;
  background: rgba(193, 120, 23, 0.1);
  border: 1px solid rgba(193, 120, 23, 0.3);
  color: var(--dermiqt-yellow);
  text-transform: none;
  font-weight: 500;
}

.mobile-cta-btn {
  background: var(--dermiqt-yellow);
  color: var(--dermiqt-dark-text);
  font-weight: 600;
  width: 100%;
  padding: 1rem;
  border-radius: 8px;
  text-transform: none;
}

/* Animations */
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

/* Responsive Design */
@media (max-width: 1024px) {
  .nav-desktop {
    display: none;
  }

  .mobile-menu-btn {
    display: flex;
  }

  .toolbar-modern {
    padding: 0 1rem;
  }

  .brand-name {
    font-size: 1.25rem;
  }

  .brand-tagline {
    font-size: 0.7rem;
  }
}

@media (max-width: 768px) {
  .language-switcher {
    display: none;
  }
  .nav-item-contact {
    display: none;
  }

  .toolbar-modern {
    min-height: 70px;
  }

  .logo-container {
    gap: 0.75rem;
  }

  .logo-image {
    width: 45px;
    height: 45px;
  }

  .brand-name {
    font-size: 1.125rem;
  }

  .brand-tagline {
    display: none;
  }

  .nav-actions {
    gap: 0.5rem;
  }

  .cta-btn {
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
  }
}

@media (max-width: 480px) {
  .toolbar-modern {
    padding: 0 0.75rem;
  }

  .brand-name {
    font-size: 1rem;
  }

  .cta-btn {
    display: none;
  }
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: var(--dermiqt-dark-text);
}

::-webkit-scrollbar-thumb {
  background: var(--dermiqt-yellow);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #e6a800;
}
</style>
