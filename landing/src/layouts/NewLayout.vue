<template>
  <div id="app">
    <q-layout view="hHh lpR fFf">
      <!-- Header matching United Van Lines design -->
      <q-header elevated class="united-header">
        <!-- Desktop Header -->
        <div class="header-container desktop-header">
          <!-- Logo Section -->
          <div class="logo-section">
            <div class="logo-container">
              <div class="brand-text">
                <h1 class="brand-name">Emi's Nest</h1>
                <p class="brand-tagline">Moving & Logistics</p>
              </div>
            </div>
          </div>

          <!-- Navigation Menu -->
          <div class="nav-menu">
            <div
              class="nav-item"
              @mouseenter="showDropdown('moving')"
              @mouseleave="hideDropdown('moving')"
            >
              <span
                class="nav-link"
                :class="{ active: activeDropdown === 'moving' }"
                >MOVING SERVICES</span
              >
              <div
                class="nav-indicator"
                v-if="activeDropdown === 'moving'"
              ></div>

              <!-- Moving Services Dropdown -->
              <div class="dropdown-menu" v-if="activeDropdown === 'moving'">
                <div class="dropdown-item">LONG DISTANCE MOVERS</div>
                <div class="dropdown-item">LOCAL MOVERS</div>
                <div class="dropdown-item">SNAPMOVES℠ BY UNITED</div>
                <div class="dropdown-item">INTERNATIONAL MOVERS</div>
                <div class="dropdown-item">CAR SHIPPING SERVICES</div>
                <div class="dropdown-item">MILITARY MOVERS</div>
              </div>
            </div>

            <div
              class="nav-item"
              @mouseenter="showDropdown('packing')"
              @mouseleave="hideDropdown('packing')"
            >
              <span
                class="nav-link"
                :class="{ active: activeDropdown === 'packing' }"
                >PACKING AND MORE</span
              >
              <div
                class="nav-indicator"
                v-if="activeDropdown === 'packing'"
              ></div>

              <!-- Packing and More Dropdown -->
              <div class="dropdown-menu" v-if="activeDropdown === 'packing'">
                <div class="dropdown-item">PACKING SERVICES</div>
                <div class="dropdown-item">UNPACKING SERVICES</div>
                <div class="dropdown-item">STORAGE SOLUTIONS</div>
                <div class="dropdown-item">FURNITURE PROTECTION</div>
                <div class="dropdown-item">SPECIALTY ITEMS</div>
                <div class="dropdown-item">MOVING SUPPLIES</div>
              </div>
            </div>

            <div
              class="nav-item"
              @mouseenter="showDropdown('resources')"
              @mouseleave="hideDropdown('resources')"
            >
              <span
                class="nav-link"
                :class="{ active: activeDropdown === 'resources' }"
                >RESOURCES</span
              >
              <div
                class="nav-indicator"
                v-if="activeDropdown === 'resources'"
              ></div>

              <!-- Resources Dropdown -->
              <div class="dropdown-menu" v-if="activeDropdown === 'resources'">
                <div class="dropdown-item">MOVING CHECKLIST</div>
                <div class="dropdown-item">COST CALCULATOR</div>
                <div class="dropdown-item">MOVING TIPS</div>
                <div class="dropdown-item">FAQ</div>
                <div class="dropdown-item">BLOG</div>
                <div class="dropdown-item">VIDEO GUIDES</div>
              </div>
            </div>

            <div
              class="nav-item"
              @mouseenter="showDropdown('corporate')"
              @mouseleave="hideDropdown('corporate')"
            >
              <span
                class="nav-link"
                :class="{ active: activeDropdown === 'corporate' }"
                >CORPORATE SERVICES</span
              >
              <div
                class="nav-indicator"
                v-if="activeDropdown === 'corporate'"
              ></div>

              <!-- Corporate Services Dropdown -->
              <div class="dropdown-menu" v-if="activeDropdown === 'corporate'">
                <div class="dropdown-item">EMPLOYEE RELOCATION</div>
                <div class="dropdown-item">OFFICE MOVES</div>
                <div class="dropdown-item">WAREHOUSE RELOCATION</div>
                <div class="dropdown-item">INTERNATIONAL SHIPPING</div>
                <div class="dropdown-item">LOGISTICS SOLUTIONS</div>
                <div class="dropdown-item">CONSULTING SERVICES</div>
              </div>
            </div>
          </div>

          <!-- Call-to-Action Button -->
          <div class="cta-section">
            <q-btn class="cta-button" label="GET A QUOTE" @click="getQuote" />
          </div>
        </div>

        <!-- Mobile Header -->
        <div class="mobile-header">
          <div class="mobile-logo">
            <h1 class="mobile-brand-name">Emi's Nest</h1>
          </div>
          <div class="mobile-menu-btn" @click="toggleMobileMenu">
            <div class="hamburger-icon">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>

        <!-- Mobile Navigation Menu -->
        <div
          class="mobile-nav-overlay"
          v-if="showMobileMenu"
          @click="closeMobileMenu"
        >
          <div class="mobile-nav-menu" @click.stop>
            <!-- Mobile Header -->
            <div class="mobile-nav-header">
              <div class="mobile-logo">
                <div class="brand-text-mobile">
                  <h1 class="brand-name-mobile">Emi's Nest</h1>
                </div>
              </div>
              <div class="mobile-close-btn" @click="closeMobileMenu">
                <span>&times;</span>
              </div>
            </div>

            <!-- Mobile Contact Bar -->
            <div class="mobile-contact-bar">
              <div class="mobile-phone">
                <q-icon name="phone" class="phone-icon" />
                <span>800-282-4133</span>
              </div>
              <q-btn
                class="mobile-cta-button"
                label="GET A QUOTE"
                @click="getQuote"
              />
            </div>

            <!-- Mobile Search -->
            <div class="mobile-search">
              <q-input
                v-model="searchQuery"
                placeholder="Search"
                class="search-input"
                outlined
                dense
              >
                <template v-slot:append>
                  <q-btn
                    round
                    dense
                    flat
                    icon="search"
                    class="search-btn"
                    @click="performSearch"
                  />
                </template>
              </q-input>
            </div>

            <!-- Mobile Navigation Items -->
            <div class="mobile-nav-items">
              <div
                class="mobile-nav-item expandable"
                @click="toggleMobileDropdown('moving')"
              >
                <span>MOVING SERVICES</span>
                <q-btn
                  round
                  dense
                  flat
                  :icon="mobileDropdowns.moving ? 'remove' : 'add'"
                  class="expand-btn"
                />
              </div>
              <div class="mobile-dropdown" v-if="mobileDropdowns.moving">
                <div class="mobile-dropdown-item">LONG DISTANCE MOVERS</div>
                <div class="mobile-dropdown-item">LOCAL MOVERS</div>
                <div class="mobile-dropdown-item">SNAPMOVES℠ BY UNITED</div>
                <div class="mobile-dropdown-item">INTERNATIONAL MOVERS</div>
                <div class="mobile-dropdown-item">CAR SHIPPING SERVICES</div>
                <div class="mobile-dropdown-item">MILITARY MOVERS</div>
              </div>

              <div
                class="mobile-nav-item expandable"
                @click="toggleMobileDropdown('packing')"
              >
                <span>PACKING AND MORE</span>
                <q-btn
                  round
                  dense
                  flat
                  :icon="mobileDropdowns.packing ? 'remove' : 'add'"
                  class="expand-btn"
                />
              </div>
              <div class="mobile-dropdown" v-if="mobileDropdowns.packing">
                <div class="mobile-dropdown-item">PACKING SERVICES</div>
                <div class="mobile-dropdown-item">UNPACKING SERVICES</div>
                <div class="mobile-dropdown-item">STORAGE SOLUTIONS</div>
                <div class="mobile-dropdown-item">FURNITURE PROTECTION</div>
                <div class="mobile-dropdown-item">SPECIALTY ITEMS</div>
                <div class="mobile-dropdown-item">MOVING SUPPLIES</div>
              </div>

              <div
                class="mobile-nav-item expandable"
                @click="toggleMobileDropdown('resources')"
              >
                <span>RESOURCES</span>
                <q-btn
                  round
                  dense
                  flat
                  :icon="mobileDropdowns.resources ? 'remove' : 'add'"
                  class="expand-btn"
                />
              </div>
              <div class="mobile-dropdown" v-if="mobileDropdowns.resources">
                <div class="mobile-dropdown-item">MOVING CHECKLIST</div>
                <div class="mobile-dropdown-item">COST CALCULATOR</div>
                <div class="mobile-dropdown-item">MOVING TIPS</div>
                <div class="mobile-dropdown-item">FAQ</div>
                <div class="mobile-dropdown-item">BLOG</div>
                <div class="mobile-dropdown-item">VIDEO GUIDES</div>
              </div>

              <div class="mobile-nav-item">
                <span>CORPORATE SERVICES</span>
              </div>

              <div class="mobile-nav-item">
                <span>SIGN IN TO MYUNITED</span>
              </div>

              <div class="mobile-nav-item">
                <span>LOCATIONS</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Blue gradient strip at bottom -->
        <div class="blue-gradient-strip"></div>
      </q-header>

      <!-- Page Content -->
      <q-page-container>
        <router-view />
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
export default {
  name: "NewLayout",
  data() {
    return {
      activeDropdown: null,
      showMobileMenu: false,
      searchQuery: "",
      mobileDropdowns: {
        moving: false,
        packing: false,
        resources: false,
      },
    };
  },
  methods: {
    showDropdown(dropdownType) {
      this.activeDropdown = dropdownType;
    },
    hideDropdown(dropdownType) {
      this.activeDropdown = null;
    },
    toggleMobileMenu() {
      this.showMobileMenu = !this.showMobileMenu;
    },
    closeMobileMenu() {
      this.showMobileMenu = false;
    },
    toggleMobileDropdown(dropdownType) {
      this.mobileDropdowns[dropdownType] = !this.mobileDropdowns[dropdownType];
    },
    performSearch() {
      console.log("Searching for:", this.searchQuery);
      // Add search functionality here
    },
    getQuote() {
      // Handle quote request
      console.log("Get Quote clicked");
      // You can add navigation or modal logic here
    },
  },
};
</script>

<style lang="scss" scoped>
.united-header {
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
}

// Desktop Header
.desktop-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  height: 80px;
  max-width: 1200px;
  margin: 0 auto;
}

// Mobile Header
.mobile-header {
  display: none;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  height: 60px;
  width: 100%;
}

// Logo Section
.logo-section {
  flex: 0 0 auto;
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 12px;
}

// Mobile Logo
.mobile-logo {
  flex: 0 0 auto;
}

.mobile-brand-name {
  font-family: "Arial", sans-serif;
  font-size: 20px;
  font-weight: bold;
  color: #1e3a8a;
  margin: 0;
  line-height: 1;
}

.eagle-graphic {
  position: relative;
  width: 40px;
  height: 30px;
}

.eagle-head {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 12px;
  height: 12px;
  background: linear-gradient(135deg, #1e3a8a, #3b82f6);
  border-radius: 50% 50% 50% 0;
  z-index: 3;
}

.eagle-wings {
  position: absolute;
  left: 8px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  gap: 2px;
}

.wing {
  width: 8px;
  height: 20px;
  border-radius: 0 50% 50% 0;
  background: linear-gradient(90deg, #1e3a8a, #3b82f6, #60a5fa);
}

.wing-1 {
  height: 16px;
  background: linear-gradient(90deg, #1e3a8a, #3b82f6);
}

.wing-2 {
  height: 20px;
  background: linear-gradient(90deg, #3b82f6, #60a5fa);
}

.wing-3 {
  height: 14px;
  background: linear-gradient(90deg, #60a5fa, #93c5fd);
}

.brand-text {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.brand-name {
  font-family: "Arial", sans-serif;
  font-size: 24px;
  font-weight: bold;
  color: #1e3a8a;
  margin: 0;
  line-height: 1;
}

.brand-tagline {
  font-family: "Arial", sans-serif;
  font-size: 14px;
  font-weight: normal;
  color: #1e3a8a;
  margin: 0;
  line-height: 1;
}

// Navigation Menu
.nav-menu {
  display: flex;
  align-items: center;
  gap: 3rem;
  flex: 1;
  justify-content: center;
}

.nav-item {
  cursor: pointer;
  transition: color 0.3s ease;
  position: relative;
}

.nav-link {
  font-family: "Arial", sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #374151;
  text-decoration: none;
  transition: color 0.3s ease;
  padding: 8px 0;
  display: block;

  &:hover {
    color: #1e3a8a;
  }

  &.active {
    color: #1e3a8a;
  }
}

.nav-indicator {
  position: absolute;
  bottom: -2px;
  left: 0;
  right: 0;
  height: 2px;
  background-color: #1e3a8a;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: -10px;
  background-color: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  min-width: 250px;
  z-index: 1000;
  margin-top: 2px;
}

.dropdown-item {
  padding: 12px 16px;
  font-family: "Arial", sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #374151;
  cursor: pointer;
  border-bottom: 1px solid #f3f4f6;
  transition: background-color 0.2s ease;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: #f9fafb;
    color: #1e3a8a;
  }
}

// CTA Section
.cta-section {
  flex: 0 0 auto;
}

.cta-button {
  background-color: #1e3a8a !important;
  color: #ffffff !important;
  font-family: "Arial", sans-serif !important;
  font-size: 14px !important;
  font-weight: bold !important;
  text-transform: uppercase !important;
  padding: 12px 24px !important;
  border-radius: 4px !important;
  border: none !important;
  cursor: pointer !important;
  transition: background-color 0.3s ease !important;

  &:hover {
    background-color: #1e40af !important;
  }
}

// Blue gradient strip
.blue-gradient-strip {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #3b82f6, #60a5fa, #93c5fd, #dbeafe);
}

// Responsive Design
@media (max-width: 1024px) {
  .header-container {
    padding: 0 1rem;
  }

  .nav-menu {
    gap: 2rem;
  }
}

@media (max-width: 768px) {
  .header-container {
    flex-direction: column;
    height: auto;
    padding: 1rem;
    gap: 1rem;
  }

  .nav-menu {
    flex-direction: column;
    gap: 1rem;
    width: 100%;
  }

  .nav-item {
    text-align: center;
    position: relative;
  }

  .dropdown-menu {
    position: static;
    box-shadow: none;
    border: none;
    margin-top: 0.5rem;
    background-color: #f9fafb;
    border-radius: 4px;
  }

  .dropdown-item {
    text-align: center;
    padding: 8px 16px;
  }

  .cta-button {
    width: 100%;
  }

  // Hide mobile menu button on desktop
  .mobile-menu-btn {
    display: none;
  }
}

// Mobile Menu Button (hidden on desktop)
.mobile-menu-btn {
  display: none;
  cursor: pointer;
  padding: 8px;
}

.hamburger-icon {
  width: 24px;
  height: 18px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  span {
    display: block;
    width: 100%;
    height: 3px;
    background-color: #374151;
    border-radius: 2px;
    transition: all 0.3s ease;
  }
}

// Ensure hamburger is visible on mobile
.mobile-menu-btn {
  cursor: pointer;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

// Mobile Navigation Overlay
.mobile-nav-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
}

.mobile-nav-menu {
  width: 100%;
  max-width: 400px;
  height: 100vh;
  background-color: #ffffff;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}

// Mobile Header
.mobile-nav-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid #e5e7eb;
}

.mobile-logo {
  display: flex;
  align-items: center;
  gap: 8px;
}

.eagle-graphic-mobile {
  position: relative;
  width: 32px;
  height: 24px;
}

.eagle-head-mobile {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 10px;
  height: 10px;
  background: linear-gradient(135deg, #1e3a8a, #3b82f6);
  border-radius: 50% 50% 50% 0;
  z-index: 3;
}

.eagle-wings-mobile {
  position: absolute;
  left: 6px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  gap: 1px;
}

.wing-mobile {
  width: 6px;
  border-radius: 0 50% 50% 0;
}

.wing-1-mobile {
  height: 12px;
  background: linear-gradient(90deg, #1e3a8a, #3b82f6);
}

.wing-2-mobile {
  height: 16px;
  background: linear-gradient(90deg, #3b82f6, #60a5fa);
}

.wing-3-mobile {
  height: 10px;
  background: linear-gradient(90deg, #60a5fa, #93c5fd);
}

.brand-name-mobile {
  font-family: "Arial", sans-serif;
  font-size: 20px;
  font-weight: bold;
  color: #1e3a8a;
  margin: 0;
}

.mobile-close-btn {
  cursor: pointer;
  font-size: 24px;
  color: #374151;
  padding: 4px;
}

// Mobile Contact Bar
.mobile-contact-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1rem;
  background-color: #f9fafb;
  border-bottom: 1px solid #e5e7eb;
}

.mobile-phone {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #374151;
}

.phone-icon {
  color: #374151;
}

.mobile-cta-button {
  background-color: #1e3a8a !important;
  color: #ffffff !important;
  font-size: 12px !important;
  font-weight: bold !important;
  text-transform: uppercase !important;
  padding: 8px 16px !important;
  border-radius: 4px !important;
}

// Mobile Search
.mobile-search {
  padding: 1rem;
  border-bottom: 1px solid #e5e7eb;
}

.search-input {
  width: 100%;
}

.search-btn {
  color: #1e3a8a !important;
}

// Mobile Navigation Items
.mobile-nav-items {
  flex: 1;
  overflow-y: auto;
}

.mobile-nav-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid #e5e7eb;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  color: #374151;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #f9fafb;
  }

  &.expandable {
    cursor: pointer;
  }
}

.expand-btn {
  color: #1e3a8a !important;
}

.mobile-dropdown {
  background-color: #f9fafb;
  border-bottom: 1px solid #e5e7eb;
}

.mobile-dropdown-item {
  padding: 0.75rem 1rem 0.75rem 2rem;
  font-size: 14px;
  color: #374151;
  border-bottom: 1px solid #e5e7eb;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: #f3f4f6;
  }
}

// Mobile responsive styles
@media (max-width: 768px) {
  .desktop-header {
    display: none;
  }

  .mobile-header {
    display: flex;
  }

  .mobile-menu-btn {
    display: block;
  }
}

@media (max-width: 480px) {
  .mobile-header {
    padding: 0 0.75rem;
    height: 50px;
  }

  .mobile-brand-name {
    font-size: 18px;
  }

  .hamburger-icon {
    width: 20px;
    height: 16px;

    span {
      height: 2px;
    }
  }
}
</style>
