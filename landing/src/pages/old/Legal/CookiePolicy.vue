<template>
  <q-page>
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-background">
        <div class="hero-overlay"></div>
      </div>
      <div class="container">
        <div class="hero-content">
          <div class="hero-badge" data-aos="fade-up">
            <q-icon name="cookie" class="badge-icon" />
            <span>{{ heroBadge }}</span>
          </div>
          <h1 class="hero-title" data-aos="fade-up" data-aos-delay="100">
            {{ heroTitle }}
          </h1>
          <p class="hero-description" data-aos="fade-up" data-aos-delay="200">
            {{ heroDescription }}
          </p>
          <div class="hero-meta" data-aos="fade-up" data-aos-delay="300">
            <div class="meta-item">
              <q-icon name="update" class="meta-icon" />
              <span>{{ lastUpdated }}</span>
            </div>
            <div class="meta-item">
              <q-icon name="visibility" class="meta-icon" />
              <span>{{ effectiveDate }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Content Section -->
    <section class="content-section section-padding">
      <div class="container">
        <div class="row">
          <!-- Main Content -->
          <div class="col-12 col-lg-8">
            <!-- Introduction -->
            <div class="content-block" data-aos="fade-up">
              <h2 class="content-title">{{ introductionTitle }}</h2>
              <p class="content-text">{{ introductionText }}</p>
              <div class="cookie-notice">
                <q-icon name="info" class="notice-icon" />
                <p>{{ cookieNotice }}</p>
              </div>
            </div>

            <!-- What Are Cookies -->
            <div class="content-block" data-aos="fade-up" data-aos-delay="100">
              <h2 class="content-title">{{ whatAreCookiesTitle }}</h2>
              <p class="content-text">{{ whatAreCookiesText }}</p>

              <div class="cookie-types">
                <div class="cookie-type-item">
                  <div class="cookie-icon">
                    <q-icon name="storage" />
                  </div>
                  <h4>{{ sessionCookiesTitle }}</h4>
                  <p>{{ sessionCookiesText }}</p>
                </div>

                <div class="cookie-type-item">
                  <div class="cookie-icon">
                    <q-icon name="schedule" />
                  </div>
                  <h4>{{ persistentCookiesTitle }}</h4>
                  <p>{{ persistentCookiesText }}</p>
                </div>

                <div class="cookie-type-item">
                  <div class="cookie-icon">
                    <q-icon name="security" />
                  </div>
                  <h4>{{ secureCookiesTitle }}</h4>
                  <p>{{ secureCookiesText }}</p>
                </div>
              </div>
            </div>

            <!-- How We Use Cookies -->
            <div class="content-block" data-aos="fade-up" data-aos-delay="200">
              <h2 class="content-title">{{ howWeUseCookiesTitle }}</h2>
              <p class="content-text">{{ howWeUseCookiesIntro }}</p>

              <div class="usage-grid">
                <div class="usage-item">
                  <div class="usage-icon">
                    <q-icon name="analytics" />
                  </div>
                  <h4>{{ analyticsTitle }}</h4>
                  <p>{{ analyticsText }}</p>
                </div>

                <div class="usage-item">
                  <div class="usage-icon">
                    <q-icon name="person" />
                  </div>
                  <h4>{{ personalizationTitle }}</h4>
                  <p>{{ personalizationText }}</p>
                </div>

                <div class="usage-item">
                  <div class="usage-icon">
                    <q-icon name="security" />
                  </div>
                  <h4>{{ securityTitle }}</h4>
                  <p>{{ securityText }}</p>
                </div>

                <div class="usage-item">
                  <div class="usage-icon">
                    <q-icon name="shopping_cart" />
                  </div>
                  <h4>{{ functionalityTitle }}</h4>
                  <p>{{ functionalityText }}</p>
                </div>
              </div>
            </div>

            <!-- Types of Cookies We Use -->
            <div class="content-block" data-aos="fade-up" data-aos-delay="300">
              <h2 class="content-title">{{ typesOfCookiesTitle }}</h2>
              <p class="content-text">{{ typesOfCookiesIntro }}</p>

              <h3 class="content-subtitle">{{ essentialCookiesTitle }}</h3>
              <p class="content-text">{{ essentialCookiesText }}</p>
              <ul class="content-list">
                <li>{{ essentialCookies1 }}</li>
                <li>{{ essentialCookies2 }}</li>
                <li>{{ essentialCookies3 }}</li>
              </ul>

              <h3 class="content-subtitle">{{ analyticsCookiesTitle }}</h3>
              <p class="content-text">{{ analyticsCookiesText }}</p>
              <ul class="content-list">
                <li>{{ analyticsCookies1 }}</li>
                <li>{{ analyticsCookies2 }}</li>
                <li>{{ analyticsCookies3 }}</li>
              </ul>

              <h3 class="content-subtitle">{{ marketingCookiesTitle }}</h3>
              <p class="content-text">{{ marketingCookiesText }}</p>
              <ul class="content-list">
                <li>{{ marketingCookies1 }}</li>
                <li>{{ marketingCookies2 }}</li>
                <li>{{ marketingCookies3 }}</li>
              </ul>
            </div>

            <!-- Third-Party Cookies -->
            <div class="content-block" data-aos="fade-up" data-aos-delay="400">
              <h2 class="content-title">{{ thirdPartyCookiesTitle }}</h2>
              <p class="content-text">{{ thirdPartyCookiesIntro }}</p>

              <div class="third-party-services">
                <div class="service-item">
                  <q-icon name="analytics" class="service-icon" />
                  <div>
                    <h4>{{ googleAnalyticsTitle }}</h4>
                    <p>{{ googleAnalyticsText }}</p>
                  </div>
                </div>

                <div class="service-item">
                  <q-icon name="facebook" class="service-icon" />
                  <div>
                    <h4>{{ facebookPixelTitle }}</h4>
                    <p>{{ facebookPixelText }}</p>
                  </div>
                </div>

                <div class="service-item">
                  <q-icon name="chat" class="service-icon" />
                  <div>
                    <h4>{{ chatWidgetTitle }}</h4>
                    <p>{{ chatWidgetText }}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Cookie Management -->
            <div class="content-block" data-aos="fade-up" data-aos-delay="500">
              <h2 class="content-title">{{ cookieManagementTitle }}</h2>
              <p class="content-text">{{ cookieManagementIntro }}</p>

              <div class="management-options">
                <div class="option-item">
                  <div class="option-icon">
                    <q-icon name="settings" />
                  </div>
                  <h4>{{ browserSettingsTitle }}</h4>
                  <p>{{ browserSettingsText }}</p>
                </div>

                <div class="option-item">
                  <div class="option-icon">
                    <q-icon name="block" />
                  </div>
                  <h4>{{ optOutTitle }}</h4>
                  <p>{{ optOutText }}</p>
                </div>

                <div class="option-item">
                  <div class="option-icon">
                    <q-icon name="delete" />
                  </div>
                  <h4>{{ deleteCookiesTitle }}</h4>
                  <p>{{ deleteCookiesText }}</p>
                </div>
              </div>

              <h3 class="content-subtitle">{{ cookieConsentTitle }}</h3>
              <p class="content-text">{{ cookieConsentText }}</p>
            </div>

            <!-- Contact Information -->
            <div class="content-block" data-aos="fade-up" data-aos-delay="600">
              <h2 class="content-title">{{ contactTitle }}</h2>
              <p class="content-text">{{ contactIntro }}</p>

              <div class="contact-info">
                <div class="contact-item">
                  <q-icon name="email" class="contact-icon" />
                  <div>
                    <h4>{{ emailTitle }}</h4>
                    <p>{{ emailAddress }}</p>
                  </div>
                </div>

                <div class="contact-item">
                  <q-icon name="phone" class="contact-icon" />
                  <div>
                    <h4>{{ phoneTitle }}</h4>
                    <p>{{ phoneNumber }}</p>
                  </div>
                </div>

                <div class="contact-item">
                  <q-icon name="location_on" class="contact-icon" />
                  <div>
                    <h4>{{ addressTitle }}</h4>
                    <p>{{ companyAddress }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Sidebar -->
          <div class="col-12 col-lg-4">
            <div class="sidebar" data-aos="fade-left" data-aos-delay="200">
              <div class="sidebar-card">
                <h3 class="sidebar-title">{{ quickLinksTitle }}</h3>
                <ul class="sidebar-links">
                  <li>
                    <a href="#introduction">{{ introductionLink }}</a>
                  </li>
                  <li>
                    <a href="#what-are-cookies">{{ whatAreCookiesLink }}</a>
                  </li>
                  <li>
                    <a href="#how-we-use">{{ howWeUseLink }}</a>
                  </li>
                  <li>
                    <a href="#types-of-cookies">{{ typesOfCookiesLink }}</a>
                  </li>
                  <li>
                    <a href="#third-party">{{ thirdPartyLink }}</a>
                  </li>
                  <li>
                    <a href="#management">{{ managementLink }}</a>
                  </li>
                  <li>
                    <a href="#contact">{{ contactLink }}</a>
                  </li>
                </ul>
              </div>

              <div class="sidebar-card">
                <h3 class="sidebar-title">{{ cookieSettingsTitle }}</h3>
                <p class="sidebar-text">{{ cookieSettingsText }}</p>
                <q-btn
                  class="settings-btn"
                  :label="settingsButton"
                  icon="settings"
                  @click="openCookieSettings"
                />
              </div>

              <div class="sidebar-card">
                <h3 class="sidebar-title">{{ relatedPoliciesTitle }}</h3>
                <ul class="sidebar-links">
                  <li>
                    <router-link to="/legal/privacy-policy">{{
                      privacyLink
                    }}</router-link>
                  </li>
                  <li>
                    <router-link to="/legal/terms-of-service">{{
                      termsLink
                    }}</router-link>
                  </li>
                  <li>
                    <router-link to="/legal/data-security">{{
                      dataSecurityLink
                    }}</router-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer Component -->
    <AppFooter />
  </q-page>
</template>

<script>
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import AppFooter from "src/components/Footer.vue";

export default {
  name: "CookiePolicyPage",
  components: {
    AppFooter,
  },
  setup() {
    const { t } = useI18n();

    // Hero translations
    const heroBadge = computed(() => t("cookies.hero.badge"));
    const heroTitle = computed(() => t("cookies.hero.title"));
    const heroDescription = computed(() => t("cookies.hero.description"));
    const lastUpdated = computed(() => t("cookies.hero.lastUpdated"));
    const effectiveDate = computed(() => t("cookies.hero.effectiveDate"));

    // Introduction
    const introductionTitle = computed(() => t("cookies.introduction.title"));
    const introductionText = computed(() => t("cookies.introduction.text"));
    const cookieNotice = computed(() => t("cookies.introduction.notice"));

    // What Are Cookies
    const whatAreCookiesTitle = computed(() =>
      t("cookies.whatAreCookies.title")
    );
    const whatAreCookiesText = computed(() => t("cookies.whatAreCookies.text"));
    const sessionCookiesTitle = computed(() =>
      t("cookies.whatAreCookies.sessionCookies.title")
    );
    const sessionCookiesText = computed(() =>
      t("cookies.whatAreCookies.sessionCookies.text")
    );
    const persistentCookiesTitle = computed(() =>
      t("cookies.whatAreCookies.persistentCookies.title")
    );
    const persistentCookiesText = computed(() =>
      t("cookies.whatAreCookies.persistentCookies.text")
    );
    const secureCookiesTitle = computed(() =>
      t("cookies.whatAreCookies.secureCookies.title")
    );
    const secureCookiesText = computed(() =>
      t("cookies.whatAreCookies.secureCookies.text")
    );

    // How We Use Cookies
    const howWeUseCookiesTitle = computed(() => t("cookies.howWeUse.title"));
    const howWeUseCookiesIntro = computed(() => t("cookies.howWeUse.intro"));
    const analyticsTitle = computed(() =>
      t("cookies.howWeUse.analytics.title")
    );
    const analyticsText = computed(() => t("cookies.howWeUse.analytics.text"));
    const personalizationTitle = computed(() =>
      t("cookies.howWeUse.personalization.title")
    );
    const personalizationText = computed(() =>
      t("cookies.howWeUse.personalization.text")
    );
    const securityTitle = computed(() => t("cookies.howWeUse.security.title"));
    const securityText = computed(() => t("cookies.howWeUse.security.text"));
    const functionalityTitle = computed(() =>
      t("cookies.howWeUse.functionality.title")
    );
    const functionalityText = computed(() =>
      t("cookies.howWeUse.functionality.text")
    );

    // Types of Cookies
    const typesOfCookiesTitle = computed(() =>
      t("cookies.typesOfCookies.title")
    );
    const typesOfCookiesIntro = computed(() =>
      t("cookies.typesOfCookies.intro")
    );
    const essentialCookiesTitle = computed(() =>
      t("cookies.typesOfCookies.essential.title")
    );
    const essentialCookiesText = computed(() =>
      t("cookies.typesOfCookies.essential.text")
    );
    const essentialCookies1 = computed(() =>
      t("cookies.typesOfCookies.essential.items.0")
    );
    const essentialCookies2 = computed(() =>
      t("cookies.typesOfCookies.essential.items.1")
    );
    const essentialCookies3 = computed(() =>
      t("cookies.typesOfCookies.essential.items.2")
    );
    const analyticsCookiesTitle = computed(() =>
      t("cookies.typesOfCookies.analytics.title")
    );
    const analyticsCookiesText = computed(() =>
      t("cookies.typesOfCookies.analytics.text")
    );
    const analyticsCookies1 = computed(() =>
      t("cookies.typesOfCookies.analytics.items.0")
    );
    const analyticsCookies2 = computed(() =>
      t("cookies.typesOfCookies.analytics.items.1")
    );
    const analyticsCookies3 = computed(() =>
      t("cookies.typesOfCookies.analytics.items.2")
    );
    const marketingCookiesTitle = computed(() =>
      t("cookies.typesOfCookies.marketing.title")
    );
    const marketingCookiesText = computed(() =>
      t("cookies.typesOfCookies.marketing.text")
    );
    const marketingCookies1 = computed(() =>
      t("cookies.typesOfCookies.marketing.items.0")
    );
    const marketingCookies2 = computed(() =>
      t("cookies.typesOfCookies.marketing.items.1")
    );
    const marketingCookies3 = computed(() =>
      t("cookies.typesOfCookies.marketing.items.2")
    );

    // Third-Party Cookies
    const thirdPartyCookiesTitle = computed(() =>
      t("cookies.thirdParty.title")
    );
    const thirdPartyCookiesIntro = computed(() =>
      t("cookies.thirdParty.intro")
    );
    const googleAnalyticsTitle = computed(() =>
      t("cookies.thirdParty.googleAnalytics.title")
    );
    const googleAnalyticsText = computed(() =>
      t("cookies.thirdParty.googleAnalytics.text")
    );
    const facebookPixelTitle = computed(() =>
      t("cookies.thirdParty.facebookPixel.title")
    );
    const facebookPixelText = computed(() =>
      t("cookies.thirdParty.facebookPixel.text")
    );
    const chatWidgetTitle = computed(() =>
      t("cookies.thirdParty.chatWidget.title")
    );
    const chatWidgetText = computed(() =>
      t("cookies.thirdParty.chatWidget.text")
    );

    // Cookie Management
    const cookieManagementTitle = computed(() => t("cookies.management.title"));
    const cookieManagementIntro = computed(() => t("cookies.management.intro"));
    const browserSettingsTitle = computed(() =>
      t("cookies.management.browserSettings.title")
    );
    const browserSettingsText = computed(() =>
      t("cookies.management.browserSettings.text")
    );
    const optOutTitle = computed(() => t("cookies.management.optOut.title"));
    const optOutText = computed(() => t("cookies.management.optOut.text"));
    const deleteCookiesTitle = computed(() =>
      t("cookies.management.deleteCookies.title")
    );
    const deleteCookiesText = computed(() =>
      t("cookies.management.deleteCookies.text")
    );
    const cookieConsentTitle = computed(() =>
      t("cookies.management.cookieConsent.title")
    );
    const cookieConsentText = computed(() =>
      t("cookies.management.cookieConsent.text")
    );

    // Contact Information
    const contactTitle = computed(() => t("cookies.contact.title"));
    const contactIntro = computed(() => t("cookies.contact.intro"));
    const emailTitle = computed(() => t("cookies.contact.email.title"));
    const emailAddress = computed(() => t("cookies.contact.email.address"));
    const phoneTitle = computed(() => t("cookies.contact.phone.title"));
    const phoneNumber = computed(() => t("cookies.contact.phone.number"));
    const addressTitle = computed(() => t("cookies.contact.address.title"));
    const companyAddress = computed(() => t("cookies.contact.address.company"));

    // Sidebar
    const quickLinksTitle = computed(() =>
      t("cookies.sidebar.quickLinks.title")
    );
    const introductionLink = computed(() =>
      t("cookies.sidebar.quickLinks.introduction")
    );
    const whatAreCookiesLink = computed(() =>
      t("cookies.sidebar.quickLinks.whatAreCookies")
    );
    const howWeUseLink = computed(() =>
      t("cookies.sidebar.quickLinks.howWeUse")
    );
    const typesOfCookiesLink = computed(() =>
      t("cookies.sidebar.quickLinks.typesOfCookies")
    );
    const thirdPartyLink = computed(() =>
      t("cookies.sidebar.quickLinks.thirdParty")
    );
    const managementLink = computed(() =>
      t("cookies.sidebar.quickLinks.management")
    );
    const contactLink = computed(() => t("cookies.sidebar.quickLinks.contact"));

    const cookieSettingsTitle = computed(() =>
      t("cookies.sidebar.cookieSettings.title")
    );
    const cookieSettingsText = computed(() =>
      t("cookies.sidebar.cookieSettings.text")
    );
    const settingsButton = computed(() =>
      t("cookies.sidebar.cookieSettings.button")
    );

    const relatedPoliciesTitle = computed(() =>
      t("cookies.sidebar.relatedPolicies.title")
    );
    const privacyLink = computed(() =>
      t("cookies.sidebar.relatedPolicies.privacy")
    );
    const termsLink = computed(() =>
      t("cookies.sidebar.relatedPolicies.terms")
    );
    const dataSecurityLink = computed(() =>
      t("cookies.sidebar.relatedPolicies.dataSecurity")
    );

    return {
      heroBadge,
      heroTitle,
      heroDescription,
      lastUpdated,
      effectiveDate,
      introductionTitle,
      introductionText,
      cookieNotice,
      whatAreCookiesTitle,
      whatAreCookiesText,
      sessionCookiesTitle,
      sessionCookiesText,
      persistentCookiesTitle,
      persistentCookiesText,
      secureCookiesTitle,
      secureCookiesText,
      howWeUseCookiesTitle,
      howWeUseCookiesIntro,
      analyticsTitle,
      analyticsText,
      personalizationTitle,
      personalizationText,
      securityTitle,
      securityText,
      functionalityTitle,
      functionalityText,
      typesOfCookiesTitle,
      typesOfCookiesIntro,
      essentialCookiesTitle,
      essentialCookiesText,
      essentialCookies1,
      essentialCookies2,
      essentialCookies3,
      analyticsCookiesTitle,
      analyticsCookiesText,
      analyticsCookies1,
      analyticsCookies2,
      analyticsCookies3,
      marketingCookiesTitle,
      marketingCookiesText,
      marketingCookies1,
      marketingCookies2,
      marketingCookies3,
      thirdPartyCookiesTitle,
      thirdPartyCookiesIntro,
      googleAnalyticsTitle,
      googleAnalyticsText,
      facebookPixelTitle,
      facebookPixelText,
      chatWidgetTitle,
      chatWidgetText,
      cookieManagementTitle,
      cookieManagementIntro,
      browserSettingsTitle,
      browserSettingsText,
      optOutTitle,
      optOutText,
      deleteCookiesTitle,
      deleteCookiesText,
      cookieConsentTitle,
      cookieConsentText,
      contactTitle,
      contactIntro,
      emailTitle,
      emailAddress,
      phoneTitle,
      phoneNumber,
      addressTitle,
      companyAddress,
      quickLinksTitle,
      introductionLink,
      whatAreCookiesLink,
      howWeUseLink,
      typesOfCookiesLink,
      thirdPartyLink,
      managementLink,
      contactLink,
      cookieSettingsTitle,
      cookieSettingsText,
      settingsButton,
      relatedPoliciesTitle,
      privacyLink,
      termsLink,
      dataSecurityLink,
    };
  },
  methods: {
    openCookieSettings() {
      // Implementation for opening cookie settings modal
      console.log("Opening cookie settings...");
    },
  },
};
</script>

<style scoped>
/* Hero Section */
.hero-section {
  position: relative;
  min-height: 60vh;
  display: flex;
  align-items: center;
  background: linear-gradient(
    135deg,
    var(--dermiqt-dark-text) 0%,
    #1a1a1a 100%
  );
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url("https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80")
    center/cover;
  opacity: 0.3;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(26, 26, 26, 0.9) 0%,
    rgba(26, 26, 26, 0.7) 100%
  );
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  color: var(--dermiqt-white);
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(193, 120, 23, 0.2);
  border: 1px solid rgba(193, 120, 23, 0.3);
  border-radius: 50px;
  padding: 0.5rem 1rem;
  margin-bottom: 2rem;
  color: var(--dermiqt-yellow);
  font-size: 0.875rem;
  font-weight: 600;
}

.badge-icon {
  font-size: 1rem;
}

.hero-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.hero-description {
  font-size: 1.125rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.hero-meta {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--dermiqt-white);
  opacity: 0.8;
  font-size: 0.875rem;
}

.meta-icon {
  color: var(--dermiqt-yellow);
  font-size: 1rem;
}

/* Content Section */
.section-padding {
  padding: 4rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.content-section {
  background: var(--dermiqt-white);
}

.content-block {
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #f0f0f0;
}

.content-block:last-child {
  border-bottom: none;
}

.content-title {
  font-size: 2rem;
  font-weight: 700;
  color: var(--dermiqt-dark-text);
  margin-bottom: 1rem;
  line-height: 1.3;
}

.content-subtitle {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--dermiqt-dark-text);
  margin: 1.5rem 0 1rem;
  line-height: 1.4;
}

.content-text {
  font-size: 1rem;
  color: var(--dermiqt-dark-text);
  opacity: 0.8;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.content-list {
  list-style: none;
  padding: 0;
  margin: 1rem 0;
}

.content-list li {
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 0.75rem;
  color: var(--dermiqt-dark-text);
  opacity: 0.8;
  line-height: 1.6;
}

.content-list li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: var(--dermiqt-yellow);
  font-weight: bold;
  font-size: 1.2rem;
}

/* Cookie Notice */
.cookie-notice {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  background: rgba(193, 120, 23, 0.1);
  border: 1px solid rgba(193, 120, 23, 0.2);
  border-radius: 8px;
  padding: 1rem;
  margin: 1.5rem 0;
}

.notice-icon {
  color: var(--dermiqt-yellow);
  font-size: 1.25rem;
  flex-shrink: 0;
  margin-top: 0.25rem;
}

.cookie-notice p {
  margin: 0;
  font-weight: 500;
  color: var(--dermiqt-dark-text);
}

/* Cookie Types */
.cookie-types {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.cookie-type-item {
  background: var(--dermiqt-light-bg);
  padding: 1.5rem;
  border-radius: 12px;
  text-align: center;
  transition: all 0.3s ease;
}

.cookie-type-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.cookie-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, var(--dermiqt-yellow) 0%, #e6a800 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  font-size: 1.5rem;
  color: var(--dermiqt-dark-text);
}

.cookie-type-item h4 {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--dermiqt-dark-text);
  margin-bottom: 0.75rem;
}

.cookie-type-item p {
  font-size: 0.875rem;
  color: var(--dermiqt-dark-text);
  opacity: 0.8;
  line-height: 1.5;
}

/* Usage Grid */
.usage-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.usage-item {
  background: var(--dermiqt-light-bg);
  padding: 1.5rem;
  border-radius: 12px;
  text-align: center;
  transition: all 0.3s ease;
}

.usage-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.usage-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, var(--dermiqt-yellow) 0%, #e6a800 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  font-size: 1.5rem;
  color: var(--dermiqt-dark-text);
}

.usage-item h4 {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--dermiqt-dark-text);
  margin-bottom: 0.75rem;
}

.usage-item p {
  font-size: 0.875rem;
  color: var(--dermiqt-dark-text);
  opacity: 0.8;
  line-height: 1.5;
}

/* Third-Party Services */
.third-party-services {
  margin: 2rem 0;
}

.service-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: var(--dermiqt-light-bg);
  border-radius: 8px;
}

.service-icon {
  color: var(--dermiqt-yellow);
  font-size: 1.5rem;
  flex-shrink: 0;
  margin-top: 0.25rem;
}

.service-item h4 {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--dermiqt-dark-text);
  margin-bottom: 0.5rem;
}

.service-item p {
  font-size: 0.875rem;
  color: var(--dermiqt-dark-text);
  opacity: 0.8;
  line-height: 1.5;
  margin: 0;
}

/* Management Options */
.management-options {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.option-item {
  background: var(--dermiqt-light-bg);
  padding: 1.5rem;
  border-radius: 12px;
  text-align: center;
  transition: all 0.3s ease;
}

.option-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.option-icon {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, var(--dermiqt-yellow) 0%, #e6a800 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  font-size: 1.25rem;
  color: var(--dermiqt-dark-text);
}

.option-item h4 {
  font-size: 1rem;
  font-weight: 600;
  color: var(--dermiqt-dark-text);
  margin-bottom: 0.75rem;
}

.option-item p {
  font-size: 0.875rem;
  color: var(--dermiqt-dark-text);
  opacity: 0.8;
  line-height: 1.5;
  margin: 0;
}

/* Contact Info */
.contact-info {
  margin: 2rem 0;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: var(--dermiqt-light-bg);
  border-radius: 8px;
}

.contact-icon {
  color: var(--dermiqt-yellow);
  font-size: 1.5rem;
  flex-shrink: 0;
  margin-top: 0.25rem;
}

.contact-item h4 {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--dermiqt-dark-text);
  margin-bottom: 0.5rem;
}

.contact-item p {
  font-size: 0.875rem;
  color: var(--dermiqt-dark-text);
  opacity: 0.8;
  line-height: 1.5;
  margin: 0;
}

/* Sidebar */
.sidebar {
  position: sticky;
  top: 2rem;
}

.sidebar-card {
  background: var(--dermiqt-white);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border: 1px solid #f0f0f0;
}

.sidebar-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--dermiqt-dark-text);
  margin-bottom: 1rem;
}

.sidebar-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar-links li {
  margin-bottom: 0.75rem;
}

.sidebar-links a {
  color: var(--dermiqt-dark-text);
  text-decoration: none;
  font-size: 0.875rem;
  transition: color 0.3s ease;
  display: block;
  padding: 0.5rem 0;
  border-bottom: 1px solid transparent;
}

.sidebar-links a:hover {
  color: var(--dermiqt-yellow);
  border-bottom-color: var(--dermiqt-yellow);
}

.sidebar-text {
  font-size: 0.875rem;
  color: var(--dermiqt-dark-text);
  opacity: 0.8;
  line-height: 1.5;
  margin-bottom: 1rem;
}

.settings-btn {
  background: var(--dermiqt-yellow);
  color: var(--dermiqt-dark-text);
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  text-transform: none;
  transition: all 0.3s ease;
  width: 100%;
  box-shadow: 0 4px 12px rgba(193, 120, 23, 0.3);
}

.settings-btn:hover {
  background: #e6a800;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(193, 120, 23, 0.4);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .content-title {
    font-size: 1.75rem;
  }

  .cookie-types,
  .usage-grid,
  .management-options {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }

  .hero-description {
    font-size: 1rem;
  }

  .hero-meta {
    flex-direction: column;
    gap: 1rem;
  }

  .section-padding {
    padding: 3rem 0;
  }

  .container {
    padding: 0 1rem;
  }

  .content-title {
    font-size: 1.5rem;
  }

  .sidebar {
    position: static;
    margin-top: 2rem;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 1.75rem;
  }

  .content-block {
    margin-bottom: 2rem;
    padding-bottom: 1.5rem;
  }

  .cookie-type-item,
  .usage-item,
  .option-item {
    padding: 1rem;
  }

  .service-item,
  .contact-item {
    padding: 0.75rem;
  }
}
</style>
