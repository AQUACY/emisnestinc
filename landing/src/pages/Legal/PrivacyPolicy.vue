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
            <q-icon name="security" class="badge-icon" />
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
            </div>

            <!-- Information We Collect -->
            <div class="content-block" data-aos="fade-up" data-aos-delay="100">
              <h2 class="content-title">{{ informationCollectionTitle }}</h2>
              <p class="content-text">{{ informationCollectionIntro }}</p>

              <h3 class="content-subtitle">{{ personalInfoTitle }}</h3>
              <ul class="content-list">
                <li>{{ personalInfo1 }}</li>
                <li>{{ personalInfo2 }}</li>
                <li>{{ personalInfo3 }}</li>
                <li>{{ personalInfo4 }}</li>
                <li>{{ personalInfo5 }}</li>
              </ul>

              <h3 class="content-subtitle">{{ businessInfoTitle }}</h3>
              <ul class="content-list">
                <li>{{ businessInfo1 }}</li>
                <li>{{ businessInfo2 }}</li>
                <li>{{ businessInfo3 }}</li>
                <li>{{ businessInfo4 }}</li>
              </ul>

              <h3 class="content-subtitle">{{ technicalInfoTitle }}</h3>
              <ul class="content-list">
                <li>{{ technicalInfo1 }}</li>
                <li>{{ technicalInfo2 }}</li>
                <li>{{ technicalInfo3 }}</li>
                <li>{{ technicalInfo4 }}</li>
              </ul>
            </div>

            <!-- How We Use Information -->
            <div class="content-block" data-aos="fade-up" data-aos-delay="200">
              <h2 class="content-title">{{ howWeUseTitle }}</h2>
              <p class="content-text">{{ howWeUseIntro }}</p>

              <div class="usage-grid">
                <div class="usage-item">
                  <div class="usage-icon">
                    <q-icon name="local_shipping" />
                  </div>
                  <h4>{{ serviceDeliveryTitle }}</h4>
                  <p>{{ serviceDeliveryText }}</p>
                </div>

                <div class="usage-item">
                  <div class="usage-icon">
                    <q-icon name="support_agent" />
                  </div>
                  <h4>{{ customerSupportTitle }}</h4>
                  <p>{{ customerSupportText }}</p>
                </div>

                <div class="usage-item">
                  <div class="usage-icon">
                    <q-icon name="analytics" />
                  </div>
                  <h4>{{ analyticsTitle }}</h4>
                  <p>{{ analyticsText }}</p>
                </div>

                <div class="usage-item">
                  <div class="usage-icon">
                    <q-icon name="campaign" />
                  </div>
                  <h4>{{ marketingTitle }}</h4>
                  <p>{{ marketingText }}</p>
                </div>
              </div>
            </div>

            <!-- Information Sharing -->
            <div class="content-block" data-aos="fade-up" data-aos-delay="300">
              <h2 class="content-title">{{ informationSharingTitle }}</h2>
              <p class="content-text">{{ informationSharingIntro }}</p>

              <h3 class="content-subtitle">{{ whenWeShareTitle }}</h3>
              <ul class="content-list">
                <li>{{ whenWeShare1 }}</li>
                <li>{{ whenWeShare2 }}</li>
                <li>{{ whenWeShare3 }}</li>
                <li>{{ whenWeShare4 }}</li>
              </ul>

              <h3 class="content-subtitle">{{ weDoNotShareTitle }}</h3>
              <p class="content-text">{{ weDoNotShareText }}</p>
            </div>

            <!-- Data Security -->
            <div class="content-block" data-aos="fade-up" data-aos-delay="400">
              <h2 class="content-title">{{ dataSecurityTitle }}</h2>
              <p class="content-text">{{ dataSecurityIntro }}</p>

              <div class="security-features">
                <div class="security-item">
                  <q-icon name="lock" class="security-icon" />
                  <div>
                    <h4>{{ encryptionTitle }}</h4>
                    <p>{{ encryptionText }}</p>
                  </div>
                </div>

                <div class="security-item">
                  <q-icon name="verified_user" class="security-icon" />
                  <div>
                    <h4>{{ accessControlTitle }}</h4>
                    <p>{{ accessControlText }}</p>
                  </div>
                </div>

                <div class="security-item">
                  <q-icon name="monitoring" class="security-icon" />
                  <div>
                    <h4>{{ monitoringTitle }}</h4>
                    <p>{{ monitoringText }}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Your Rights -->
            <div class="content-block" data-aos="fade-up" data-aos-delay="500">
              <h2 class="content-title">{{ yourRightsTitle }}</h2>
              <p class="content-text">{{ yourRightsIntro }}</p>

              <div class="rights-grid">
                <div class="right-item">
                  <div class="right-icon">
                    <q-icon name="visibility" />
                  </div>
                  <h4>{{ accessTitle }}</h4>
                  <p>{{ accessText }}</p>
                </div>

                <div class="right-item">
                  <div class="right-icon">
                    <q-icon name="edit" />
                  </div>
                  <h4>{{ correctionTitle }}</h4>
                  <p>{{ correctionText }}</p>
                </div>

                <div class="right-item">
                  <div class="right-icon">
                    <q-icon name="delete" />
                  </div>
                  <h4>{{ deletionTitle }}</h4>
                  <p>{{ deletionText }}</p>
                </div>

                <div class="right-item">
                  <div class="right-icon">
                    <q-icon name="download" />
                  </div>
                  <h4>{{ portabilityTitle }}</h4>
                  <p>{{ portabilityText }}</p>
                </div>
              </div>
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
                    <a href="#information-collection">{{
                      informationCollectionLink
                    }}</a>
                  </li>
                  <li>
                    <a href="#how-we-use">{{ howWeUseLink }}</a>
                  </li>
                  <li>
                    <a href="#information-sharing">{{
                      informationSharingLink
                    }}</a>
                  </li>
                  <li>
                    <a href="#data-security">{{ dataSecurityLink }}</a>
                  </li>
                  <li>
                    <a href="#your-rights">{{ yourRightsLink }}</a>
                  </li>
                  <li>
                    <a href="#contact">{{ contactLink }}</a>
                  </li>
                </ul>
              </div>

              <div class="sidebar-card">
                <h3 class="sidebar-title">{{ downloadTitle }}</h3>
                <p class="sidebar-text">{{ downloadText }}</p>
                <q-btn
                  class="download-btn"
                  :label="downloadButton"
                  icon="download"
                  @click="downloadPolicy"
                />
              </div>

              <div class="sidebar-card">
                <h3 class="sidebar-title">{{ relatedPoliciesTitle }}</h3>
                <ul class="sidebar-links">
                  <li>
                    <router-link to="/legal/terms-of-service">{{
                      termsLink
                    }}</router-link>
                  </li>
                  <li>
                    <router-link to="/legal/cookie-policy">{{
                      cookieLink
                    }}</router-link>
                  </li>
                  <li>
                    <router-link to="/legal/data-security">{{
                      dataSecurityLinkSidebar
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
  name: "PrivacyPolicyPage",
  components: {
    AppFooter,
  },
  setup() {
    const { t } = useI18n();

    // Hero translations
    const heroBadge = computed(() => t("privacy.hero.badge"));
    const heroTitle = computed(() => t("privacy.hero.title"));
    const heroDescription = computed(() => t("privacy.hero.description"));
    const lastUpdated = computed(() => t("privacy.hero.lastUpdated"));
    const effectiveDate = computed(() => t("privacy.hero.effectiveDate"));

    // Introduction
    const introductionTitle = computed(() => t("privacy.introduction.title"));
    const introductionText = computed(() => t("privacy.introduction.text"));

    // Information Collection
    const informationCollectionTitle = computed(() =>
      t("privacy.informationCollection.title")
    );
    const informationCollectionIntro = computed(() =>
      t("privacy.informationCollection.intro")
    );
    const personalInfoTitle = computed(() =>
      t("privacy.informationCollection.personalInfo.title")
    );
    const personalInfo1 = computed(() =>
      t("privacy.informationCollection.personalInfo.items.0")
    );
    const personalInfo2 = computed(() =>
      t("privacy.informationCollection.personalInfo.items.1")
    );
    const personalInfo3 = computed(() =>
      t("privacy.informationCollection.personalInfo.items.2")
    );
    const personalInfo4 = computed(() =>
      t("privacy.informationCollection.personalInfo.items.3")
    );
    const personalInfo5 = computed(() =>
      t("privacy.informationCollection.personalInfo.items.4")
    );

    const businessInfoTitle = computed(() =>
      t("privacy.informationCollection.businessInfo.title")
    );
    const businessInfo1 = computed(() =>
      t("privacy.informationCollection.businessInfo.items.0")
    );
    const businessInfo2 = computed(() =>
      t("privacy.informationCollection.businessInfo.items.1")
    );
    const businessInfo3 = computed(() =>
      t("privacy.informationCollection.businessInfo.items.2")
    );
    const businessInfo4 = computed(() =>
      t("privacy.informationCollection.businessInfo.items.3")
    );

    const technicalInfoTitle = computed(() =>
      t("privacy.informationCollection.technicalInfo.title")
    );
    const technicalInfo1 = computed(() =>
      t("privacy.informationCollection.technicalInfo.items.0")
    );
    const technicalInfo2 = computed(() =>
      t("privacy.informationCollection.technicalInfo.items.1")
    );
    const technicalInfo3 = computed(() =>
      t("privacy.informationCollection.technicalInfo.items.2")
    );
    const technicalInfo4 = computed(() =>
      t("privacy.informationCollection.technicalInfo.items.3")
    );

    // How We Use Information
    const howWeUseTitle = computed(() => t("privacy.howWeUse.title"));
    const howWeUseIntro = computed(() => t("privacy.howWeUse.intro"));
    const serviceDeliveryTitle = computed(() =>
      t("privacy.howWeUse.serviceDelivery.title")
    );
    const serviceDeliveryText = computed(() =>
      t("privacy.howWeUse.serviceDelivery.text")
    );
    const customerSupportTitle = computed(() =>
      t("privacy.howWeUse.customerSupport.title")
    );
    const customerSupportText = computed(() =>
      t("privacy.howWeUse.customerSupport.text")
    );
    const analyticsTitle = computed(() =>
      t("privacy.howWeUse.analytics.title")
    );
    const analyticsText = computed(() => t("privacy.howWeUse.analytics.text"));
    const marketingTitle = computed(() =>
      t("privacy.howWeUse.marketing.title")
    );
    const marketingText = computed(() => t("privacy.howWeUse.marketing.text"));

    // Information Sharing
    const informationSharingTitle = computed(() =>
      t("privacy.informationSharing.title")
    );
    const informationSharingIntro = computed(() =>
      t("privacy.informationSharing.intro")
    );
    const whenWeShareTitle = computed(() =>
      t("privacy.informationSharing.whenWeShare.title")
    );
    const whenWeShare1 = computed(() =>
      t("privacy.informationSharing.whenWeShare.items.0")
    );
    const whenWeShare2 = computed(() =>
      t("privacy.informationSharing.whenWeShare.items.1")
    );
    const whenWeShare3 = computed(() =>
      t("privacy.informationSharing.whenWeShare.items.2")
    );
    const whenWeShare4 = computed(() =>
      t("privacy.informationSharing.whenWeShare.items.3")
    );
    const weDoNotShareTitle = computed(() =>
      t("privacy.informationSharing.weDoNotShare.title")
    );
    const weDoNotShareText = computed(() =>
      t("privacy.informationSharing.weDoNotShare.text")
    );

    // Data Security
    const dataSecurityTitle = computed(() => t("privacy.dataSecurity.title"));
    const dataSecurityIntro = computed(() => t("privacy.dataSecurity.intro"));
    const encryptionTitle = computed(() =>
      t("privacy.dataSecurity.encryption.title")
    );
    const encryptionText = computed(() =>
      t("privacy.dataSecurity.encryption.text")
    );
    const accessControlTitle = computed(() =>
      t("privacy.dataSecurity.accessControl.title")
    );
    const accessControlText = computed(() =>
      t("privacy.dataSecurity.accessControl.text")
    );
    const monitoringTitle = computed(() =>
      t("privacy.dataSecurity.monitoring.title")
    );
    const monitoringText = computed(() =>
      t("privacy.dataSecurity.monitoring.text")
    );

    // Your Rights
    const yourRightsTitle = computed(() => t("privacy.yourRights.title"));
    const yourRightsIntro = computed(() => t("privacy.yourRights.intro"));
    const accessTitle = computed(() => t("privacy.yourRights.access.title"));
    const accessText = computed(() => t("privacy.yourRights.access.text"));
    const correctionTitle = computed(() =>
      t("privacy.yourRights.correction.title")
    );
    const correctionText = computed(() =>
      t("privacy.yourRights.correction.text")
    );
    const deletionTitle = computed(() =>
      t("privacy.yourRights.deletion.title")
    );
    const deletionText = computed(() => t("privacy.yourRights.deletion.text"));
    const portabilityTitle = computed(() =>
      t("privacy.yourRights.portability.title")
    );
    const portabilityText = computed(() =>
      t("privacy.yourRights.portability.text")
    );

    // Contact Information
    const contactTitle = computed(() => t("privacy.contact.title"));
    const contactIntro = computed(() => t("privacy.contact.intro"));
    const emailTitle = computed(() => t("privacy.contact.email.title"));
    const emailAddress = computed(() => t("privacy.contact.email.address"));
    const phoneTitle = computed(() => t("privacy.contact.phone.title"));
    const phoneNumber = computed(() => t("privacy.contact.phone.number"));
    const addressTitle = computed(() => t("privacy.contact.address.title"));
    const companyAddress = computed(() => t("privacy.contact.address.company"));

    // Sidebar
    const quickLinksTitle = computed(() =>
      t("privacy.sidebar.quickLinks.title")
    );
    const introductionLink = computed(() =>
      t("privacy.sidebar.quickLinks.introduction")
    );
    const informationCollectionLink = computed(() =>
      t("privacy.sidebar.quickLinks.informationCollection")
    );
    const howWeUseLink = computed(() =>
      t("privacy.sidebar.quickLinks.howWeUse")
    );
    const informationSharingLink = computed(() =>
      t("privacy.sidebar.quickLinks.informationSharing")
    );
    const dataSecurityLink = computed(() =>
      t("privacy.sidebar.quickLinks.dataSecurity")
    );
    const yourRightsLink = computed(() =>
      t("privacy.sidebar.quickLinks.yourRights")
    );
    const contactLink = computed(() => t("privacy.sidebar.quickLinks.contact"));

    const downloadTitle = computed(() => t("privacy.sidebar.download.title"));
    const downloadText = computed(() => t("privacy.sidebar.download.text"));
    const downloadButton = computed(() => t("privacy.sidebar.download.button"));

    const relatedPoliciesTitle = computed(() =>
      t("privacy.sidebar.relatedPolicies.title")
    );
    const termsLink = computed(() =>
      t("privacy.sidebar.relatedPolicies.terms")
    );
    const cookieLink = computed(() =>
      t("privacy.sidebar.relatedPolicies.cookie")
    );
    const dataSecurityLinkSidebar = computed(() =>
      t("privacy.sidebar.relatedPolicies.dataSecurity")
    );

    return {
      heroBadge,
      heroTitle,
      heroDescription,
      lastUpdated,
      effectiveDate,
      introductionTitle,
      introductionText,
      informationCollectionTitle,
      informationCollectionIntro,
      personalInfoTitle,
      personalInfo1,
      personalInfo2,
      personalInfo3,
      personalInfo4,
      personalInfo5,
      businessInfoTitle,
      businessInfo1,
      businessInfo2,
      businessInfo3,
      businessInfo4,
      technicalInfoTitle,
      technicalInfo1,
      technicalInfo2,
      technicalInfo3,
      technicalInfo4,
      howWeUseTitle,
      howWeUseIntro,
      serviceDeliveryTitle,
      serviceDeliveryText,
      customerSupportTitle,
      customerSupportText,
      analyticsTitle,
      analyticsText,
      marketingTitle,
      marketingText,
      informationSharingTitle,
      informationSharingIntro,
      whenWeShareTitle,
      whenWeShare1,
      whenWeShare2,
      whenWeShare3,
      whenWeShare4,
      weDoNotShareTitle,
      weDoNotShareText,
      dataSecurityTitle,
      dataSecurityIntro,
      encryptionTitle,
      encryptionText,
      accessControlTitle,
      accessControlText,
      monitoringTitle,
      monitoringText,
      yourRightsTitle,
      yourRightsIntro,
      accessTitle,
      accessText,
      correctionTitle,
      correctionText,
      deletionTitle,
      deletionText,
      portabilityTitle,
      portabilityText,
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
      informationCollectionLink,
      howWeUseLink,
      informationSharingLink,
      dataSecurityLink,
      yourRightsLink,
      contactLink,
      downloadTitle,
      downloadText,
      downloadButton,
      relatedPoliciesTitle,
      termsLink,
      cookieLink,
      dataSecurityLinkSidebar,
    };
  },
  methods: {
    downloadPolicy() {
      // Implementation for downloading the privacy policy PDF
      console.log("Downloading privacy policy...");
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
  background: url("https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80")
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

/* Security Features */
.security-features {
  margin: 2rem 0;
}

.security-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: var(--dermiqt-light-bg);
  border-radius: 8px;
}

.security-icon {
  color: var(--dermiqt-yellow);
  font-size: 1.5rem;
  flex-shrink: 0;
  margin-top: 0.25rem;
}

.security-item h4 {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--dermiqt-dark-text);
  margin-bottom: 0.5rem;
}

.security-item p {
  font-size: 0.875rem;
  color: var(--dermiqt-dark-text);
  opacity: 0.8;
  line-height: 1.5;
  margin: 0;
}

/* Rights Grid */
.rights-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.right-item {
  background: var(--dermiqt-light-bg);
  padding: 1.5rem;
  border-radius: 12px;
  text-align: center;
  transition: all 0.3s ease;
}

.right-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.right-icon {
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

.right-item h4 {
  font-size: 1rem;
  font-weight: 600;
  color: var(--dermiqt-dark-text);
  margin-bottom: 0.75rem;
}

.right-item p {
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

.download-btn {
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

.download-btn:hover {
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

  .usage-grid,
  .rights-grid {
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

  .usage-item,
  .right-item {
    padding: 1rem;
  }

  .security-item,
  .contact-item {
    padding: 0.75rem;
  }
}
</style>
