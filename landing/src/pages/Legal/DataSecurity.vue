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
              <q-icon name="verified" class="meta-icon" />
              <span>{{ securityCertification }}</span>
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
              <div class="security-notice">
                <q-icon name="shield" class="notice-icon" />
                <p>{{ securityNotice }}</p>
              </div>
            </div>

            <!-- Data Protection Principles -->
            <div class="content-block" data-aos="fade-up" data-aos-delay="100">
              <h2 class="content-title">{{ dataProtectionTitle }}</h2>
              <p class="content-text">{{ dataProtectionIntro }}</p>

              <div class="principles-grid">
                <div class="principle-item">
                  <div class="principle-icon">
                    <q-icon name="lock" />
                  </div>
                  <h4>{{ confidentialityTitle }}</h4>
                  <p>{{ confidentialityText }}</p>
                </div>

                <div class="principle-item">
                  <div class="principle-icon">
                    <q-icon name="verified_user" />
                  </div>
                  <h4>{{ integrityTitle }}</h4>
                  <p>{{ integrityText }}</p>
                </div>

                <div class="principle-item">
                  <div class="principle-icon">
                    <q-icon name="accessibility" />
                  </div>
                  <h4>{{ availabilityTitle }}</h4>
                  <p>{{ availabilityText }}</p>
                </div>
              </div>
            </div>

            <!-- Data Collection & Storage -->
            <div class="content-block" data-aos="fade-up" data-aos-delay="200">
              <h2 class="content-title">{{ dataCollectionTitle }}</h2>
              <p class="content-text">{{ dataCollectionIntro }}</p>

              <h3 class="content-subtitle">{{ personalDataTitle }}</h3>
              <p class="content-text">{{ personalDataText }}</p>
              <ul class="content-list">
                <li>{{ personalData1 }}</li>
                <li>{{ personalData2 }}</li>
                <li>{{ personalData3 }}</li>
                <li>{{ personalData4 }}</li>
              </ul>

              <h3 class="content-subtitle">{{ businessDataTitle }}</h3>
              <p class="content-text">{{ businessDataText }}</p>
              <ul class="content-list">
                <li>{{ businessData1 }}</li>
                <li>{{ businessData2 }}</li>
                <li>{{ businessData3 }}</li>
              </ul>

              <h3 class="content-subtitle">{{ storageLocationTitle }}</h3>
              <p class="content-text">{{ storageLocationText }}</p>
            </div>

            <!-- Security Measures -->
            <div class="content-block" data-aos="fade-up" data-aos-delay="300">
              <h2 class="content-title">{{ securityMeasuresTitle }}</h2>
              <p class="content-text">{{ securityMeasuresIntro }}</p>

              <div class="security-grid">
                <div class="security-item">
                  <div class="security-icon">
                    <q-icon name="vpn_key" />
                  </div>
                  <h4>{{ encryptionTitle }}</h4>
                  <p>{{ encryptionText }}</p>
                </div>

                <div class="security-item">
                  <div class="security-icon">
                    <q-icon name="firewall" />
                  </div>
                  <h4>{{ firewallTitle }}</h4>
                  <p>{{ firewallText }}</p>
                </div>

                <div class="security-item">
                  <div class="security-icon">
                    <q-icon name="admin_panel_settings" />
                  </div>
                  <h4>{{ accessControlTitle }}</h4>
                  <p>{{ accessControlText }}</p>
                </div>

                <div class="security-item">
                  <div class="security-icon">
                    <q-icon name="backup" />
                  </div>
                  <h4>{{ backupTitle }}</h4>
                  <p>{{ backupText }}</p>
                </div>

                <div class="security-item">
                  <div class="security-icon">
                    <q-icon name="monitoring" />
                  </div>
                  <h4>{{ monitoringTitle }}</h4>
                  <p>{{ monitoringText }}</p>
                </div>

                <div class="security-item">
                  <div class="security-icon">
                    <q-icon name="security_update" />
                  </div>
                  <h4>{{ updatesTitle }}</h4>
                  <p>{{ updatesText }}</p>
                </div>
              </div>
            </div>

            <!-- Employee Training -->
            <div class="content-block" data-aos="fade-up" data-aos-delay="400">
              <h2 class="content-title">{{ employeeTrainingTitle }}</h2>
              <p class="content-text">{{ employeeTrainingIntro }}</p>

              <div class="training-areas">
                <div class="training-item">
                  <q-icon name="school" class="training-icon" />
                  <div>
                    <h4>{{ dataHandlingTitle }}</h4>
                    <p>{{ dataHandlingText }}</p>
                  </div>
                </div>

                <div class="training-item">
                  <q-icon name="report_problem" class="training-icon" />
                  <div>
                    <h4>{{ incidentResponseTitle }}</h4>
                    <p>{{ incidentResponseText }}</p>
                  </div>
                </div>

                <div class="training-item">
                  <q-icon name="policy" class="training-icon" />
                  <div>
                    <h4>{{ complianceTitle }}</h4>
                    <p>{{ complianceText }}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Incident Response -->
            <div class="content-block" data-aos="fade-up" data-aos-delay="500">
              <h2 class="content-title">{{ incidentResponseTitle }}</h2>
              <p class="content-text">{{ incidentResponseIntro }}</p>

              <div class="response-steps">
                <div class="step-item">
                  <div class="step-number">1</div>
                  <div class="step-content">
                    <h4>{{ detectionTitle }}</h4>
                    <p>{{ detectionText }}</p>
                  </div>
                </div>

                <div class="step-item">
                  <div class="step-number">2</div>
                  <div class="step-content">
                    <h4>{{ assessmentTitle }}</h4>
                    <p>{{ assessmentText }}</p>
                  </div>
                </div>

                <div class="step-item">
                  <div class="step-number">3</div>
                  <div class="step-content">
                    <h4>{{ containmentTitle }}</h4>
                    <p>{{ containmentText }}</p>
                  </div>
                </div>

                <div class="step-item">
                  <div class="step-number">4</div>
                  <div class="step-content">
                    <h4>{{ notificationTitle }}</h4>
                    <p>{{ notificationText }}</p>
                  </div>
                </div>

                <div class="step-item">
                  <div class="step-number">5</div>
                  <div class="step-content">
                    <h4>{{ recoveryTitle }}</h4>
                    <p>{{ recoveryText }}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Compliance & Certifications -->
            <div class="content-block" data-aos="fade-up" data-aos-delay="600">
              <h2 class="content-title">{{ complianceTitle }}</h2>
              <p class="content-text">{{ complianceIntro }}</p>

              <div class="compliance-grid">
                <div class="compliance-item">
                  <div class="compliance-icon">
                    <q-icon name="gpp_good" />
                  </div>
                  <h4>{{ gdprTitle }}</h4>
                  <p>{{ gdprText }}</p>
                </div>

                <div class="compliance-item">
                  <div class="compliance-icon">
                    <q-icon name="security" />
                  </div>
                  <h4>{{ iso27001Title }}</h4>
                  <p>{{ iso27001Text }}</p>
                </div>

                <div class="compliance-item">
                  <div class="compliance-icon">
                    <q-icon name="verified" />
                  </div>
                  <h4>{{ soc2Title }}</h4>
                  <p>{{ soc2Text }}</p>
                </div>
              </div>
            </div>

            <!-- Contact Information -->
            <div class="content-block" data-aos="fade-up" data-aos-delay="700">
              <h2 class="content-title">{{ contactTitle }}</h2>
              <p class="content-text">{{ contactIntro }}</p>

              <div class="contact-info">
                <div class="contact-item">
                  <q-icon name="email" class="contact-icon" />
                  <div>
                    <h4>{{ securityEmailTitle }}</h4>
                    <p>{{ securityEmailAddress }}</p>
                  </div>
                </div>

                <div class="contact-item">
                  <q-icon name="phone" class="contact-icon" />
                  <div>
                    <h4>{{ securityPhoneTitle }}</h4>
                    <p>{{ securityPhoneNumber }}</p>
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
                    <a href="#data-protection">{{ dataProtectionLink }}</a>
                  </li>
                  <li>
                    <a href="#data-collection">{{ dataCollectionLink }}</a>
                  </li>
                  <li>
                    <a href="#security-measures">{{ securityMeasuresLink }}</a>
                  </li>
                  <li>
                    <a href="#employee-training">{{ employeeTrainingLink }}</a>
                  </li>
                  <li>
                    <a href="#incident-response">{{ incidentResponseLink }}</a>
                  </li>
                  <li>
                    <a href="#compliance">{{ complianceLink }}</a>
                  </li>
                  <li>
                    <a href="#contact">{{ contactLink }}</a>
                  </li>
                </ul>
              </div>

              <div class="sidebar-card">
                <h3 class="sidebar-title">{{ securityStatusTitle }}</h3>
                <div class="security-status">
                  <div class="status-item">
                    <q-icon name="check_circle" class="status-icon success" />
                    <span>{{ encryptionStatus }}</span>
                  </div>
                  <div class="status-item">
                    <q-icon name="check_circle" class="status-icon success" />
                    <span>{{ backupStatus }}</span>
                  </div>
                  <div class="status-item">
                    <q-icon name="check_circle" class="status-icon success" />
                    <span>{{ monitoringStatus }}</span>
                  </div>
                </div>
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
                    <router-link to="/legal/cookie-policy">{{
                      cookieLink
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
  name: "DataSecurityPage",
  components: {
    AppFooter,
  },
  setup() {
    const { t } = useI18n();

    // Hero translations
    const heroBadge = computed(() => t("dataSecurity.hero.badge"));
    const heroTitle = computed(() => t("dataSecurity.hero.title"));
    const heroDescription = computed(() => t("dataSecurity.hero.description"));
    const lastUpdated = computed(() => t("dataSecurity.hero.lastUpdated"));
    const securityCertification = computed(() =>
      t("dataSecurity.hero.securityCertification")
    );

    // Introduction
    const introductionTitle = computed(() =>
      t("dataSecurity.introduction.title")
    );
    const introductionText = computed(() =>
      t("dataSecurity.introduction.text")
    );
    const securityNotice = computed(() =>
      t("dataSecurity.introduction.notice")
    );

    // Data Protection Principles
    const dataProtectionTitle = computed(() =>
      t("dataSecurity.dataProtection.title")
    );
    const dataProtectionIntro = computed(() =>
      t("dataSecurity.dataProtection.intro")
    );
    const confidentialityTitle = computed(() =>
      t("dataSecurity.dataProtection.confidentiality.title")
    );
    const confidentialityText = computed(() =>
      t("dataSecurity.dataProtection.confidentiality.text")
    );
    const integrityTitle = computed(() =>
      t("dataSecurity.dataProtection.integrity.title")
    );
    const integrityText = computed(() =>
      t("dataSecurity.dataProtection.integrity.text")
    );
    const availabilityTitle = computed(() =>
      t("dataSecurity.dataProtection.availability.title")
    );
    const availabilityText = computed(() =>
      t("dataSecurity.dataProtection.availability.text")
    );

    // Data Collection & Storage
    const dataCollectionTitle = computed(() =>
      t("dataSecurity.dataCollection.title")
    );
    const dataCollectionIntro = computed(() =>
      t("dataSecurity.dataCollection.intro")
    );
    const personalDataTitle = computed(() =>
      t("dataSecurity.dataCollection.personalData.title")
    );
    const personalDataText = computed(() =>
      t("dataSecurity.dataCollection.personalData.text")
    );
    const personalData1 = computed(() =>
      t("dataSecurity.dataCollection.personalData.items.0")
    );
    const personalData2 = computed(() =>
      t("dataSecurity.dataCollection.personalData.items.1")
    );
    const personalData3 = computed(() =>
      t("dataSecurity.dataCollection.personalData.items.2")
    );
    const personalData4 = computed(() =>
      t("dataSecurity.dataCollection.personalData.items.3")
    );
    const businessDataTitle = computed(() =>
      t("dataSecurity.dataCollection.businessData.title")
    );
    const businessDataText = computed(() =>
      t("dataSecurity.dataCollection.businessData.text")
    );
    const businessData1 = computed(() =>
      t("dataSecurity.dataCollection.businessData.items.0")
    );
    const businessData2 = computed(() =>
      t("dataSecurity.dataCollection.businessData.items.1")
    );
    const businessData3 = computed(() =>
      t("dataSecurity.dataCollection.businessData.items.2")
    );
    const storageLocationTitle = computed(() =>
      t("dataSecurity.dataCollection.storageLocation.title")
    );
    const storageLocationText = computed(() =>
      t("dataSecurity.dataCollection.storageLocation.text")
    );

    // Security Measures
    const securityMeasuresTitle = computed(() =>
      t("dataSecurity.securityMeasures.title")
    );
    const securityMeasuresIntro = computed(() =>
      t("dataSecurity.securityMeasures.intro")
    );
    const encryptionTitle = computed(() =>
      t("dataSecurity.securityMeasures.encryption.title")
    );
    const encryptionText = computed(() =>
      t("dataSecurity.securityMeasures.encryption.text")
    );
    const firewallTitle = computed(() =>
      t("dataSecurity.securityMeasures.firewall.title")
    );
    const firewallText = computed(() =>
      t("dataSecurity.securityMeasures.firewall.text")
    );
    const accessControlTitle = computed(() =>
      t("dataSecurity.securityMeasures.accessControl.title")
    );
    const accessControlText = computed(() =>
      t("dataSecurity.securityMeasures.accessControl.text")
    );
    const backupTitle = computed(() =>
      t("dataSecurity.securityMeasures.backup.title")
    );
    const backupText = computed(() =>
      t("dataSecurity.securityMeasures.backup.text")
    );
    const monitoringTitle = computed(() =>
      t("dataSecurity.securityMeasures.monitoring.title")
    );
    const monitoringText = computed(() =>
      t("dataSecurity.securityMeasures.monitoring.text")
    );
    const updatesTitle = computed(() =>
      t("dataSecurity.securityMeasures.updates.title")
    );
    const updatesText = computed(() =>
      t("dataSecurity.securityMeasures.updates.text")
    );

    // Employee Training
    const employeeTrainingTitle = computed(() =>
      t("dataSecurity.employeeTraining.title")
    );
    const employeeTrainingIntro = computed(() =>
      t("dataSecurity.employeeTraining.intro")
    );
    const dataHandlingTitle = computed(() =>
      t("dataSecurity.employeeTraining.dataHandling.title")
    );
    const dataHandlingText = computed(() =>
      t("dataSecurity.employeeTraining.dataHandling.text")
    );
    const employeeIncidentResponseTitle = computed(() =>
      t("dataSecurity.employeeTraining.incidentResponse.title")
    );
    const employeeIncidentResponseText = computed(() =>
      t("dataSecurity.employeeTraining.incidentResponse.text")
    );
    const employeeComplianceTitle = computed(() =>
      t("dataSecurity.employeeTraining.compliance.title")
    );
    const employeeComplianceText = computed(() =>
      t("dataSecurity.employeeTraining.compliance.text")
    );

    // Incident Response
    const incidentResponseTitle = computed(() =>
      t("dataSecurity.incidentResponse.title")
    );
    const incidentResponseIntro = computed(() =>
      t("dataSecurity.incidentResponse.intro")
    );
    const incidentResponseText = computed(() =>
      t("dataSecurity.incidentResponse.intro")
    );
    const detectionTitle = computed(() =>
      t("dataSecurity.incidentResponse.detection.title")
    );
    const detectionText = computed(() =>
      t("dataSecurity.incidentResponse.detection.text")
    );
    const assessmentTitle = computed(() =>
      t("dataSecurity.incidentResponse.assessment.title")
    );
    const assessmentText = computed(() =>
      t("dataSecurity.incidentResponse.assessment.text")
    );
    const containmentTitle = computed(() =>
      t("dataSecurity.incidentResponse.containment.title")
    );
    const containmentText = computed(() =>
      t("dataSecurity.incidentResponse.containment.text")
    );
    const notificationTitle = computed(() =>
      t("dataSecurity.incidentResponse.notification.title")
    );
    const notificationText = computed(() =>
      t("dataSecurity.incidentResponse.notification.text")
    );
    const recoveryTitle = computed(() =>
      t("dataSecurity.incidentResponse.recovery.title")
    );
    const recoveryText = computed(() =>
      t("dataSecurity.incidentResponse.recovery.text")
    );

    // Compliance & Certifications
    const complianceTitle = computed(() => t("dataSecurity.compliance.title"));
    const complianceIntro = computed(() => t("dataSecurity.compliance.intro"));
    const gdprTitle = computed(() => t("dataSecurity.compliance.gdpr.title"));
    const gdprText = computed(() => t("dataSecurity.compliance.gdpr.text"));
    const iso27001Title = computed(() =>
      t("dataSecurity.compliance.iso27001.title")
    );
    const iso27001Text = computed(() =>
      t("dataSecurity.compliance.iso27001.text")
    );
    const soc2Title = computed(() => t("dataSecurity.compliance.soc2.title"));
    const soc2Text = computed(() => t("dataSecurity.compliance.soc2.text"));

    // Contact Information
    const contactTitle = computed(() => t("dataSecurity.contact.title"));
    const contactIntro = computed(() => t("dataSecurity.contact.intro"));
    const securityEmailTitle = computed(() =>
      t("dataSecurity.contact.securityEmail.title")
    );
    const securityEmailAddress = computed(() =>
      t("dataSecurity.contact.securityEmail.address")
    );
    const securityPhoneTitle = computed(() =>
      t("dataSecurity.contact.securityPhone.title")
    );
    const securityPhoneNumber = computed(() =>
      t("dataSecurity.contact.securityPhone.number")
    );
    const addressTitle = computed(() =>
      t("dataSecurity.contact.address.title")
    );
    const companyAddress = computed(() =>
      t("dataSecurity.contact.address.company")
    );

    // Sidebar
    const quickLinksTitle = computed(() =>
      t("dataSecurity.sidebar.quickLinks.title")
    );
    const introductionLink = computed(() =>
      t("dataSecurity.sidebar.quickLinks.introduction")
    );
    const dataProtectionLink = computed(() =>
      t("dataSecurity.sidebar.quickLinks.dataProtection")
    );
    const dataCollectionLink = computed(() =>
      t("dataSecurity.sidebar.quickLinks.dataCollection")
    );
    const securityMeasuresLink = computed(() =>
      t("dataSecurity.sidebar.quickLinks.securityMeasures")
    );
    const employeeTrainingLink = computed(() =>
      t("dataSecurity.sidebar.quickLinks.employeeTraining")
    );
    const incidentResponseLink = computed(() =>
      t("dataSecurity.sidebar.quickLinks.incidentResponse")
    );
    const complianceLink = computed(() =>
      t("dataSecurity.sidebar.quickLinks.compliance")
    );
    const contactLink = computed(() =>
      t("dataSecurity.sidebar.quickLinks.contact")
    );

    const securityStatusTitle = computed(() =>
      t("dataSecurity.sidebar.securityStatus.title")
    );
    const encryptionStatus = computed(() =>
      t("dataSecurity.sidebar.securityStatus.encryption")
    );
    const backupStatus = computed(() =>
      t("dataSecurity.sidebar.securityStatus.backup")
    );
    const monitoringStatus = computed(() =>
      t("dataSecurity.sidebar.securityStatus.monitoring")
    );

    const relatedPoliciesTitle = computed(() =>
      t("dataSecurity.sidebar.relatedPolicies.title")
    );
    const privacyLink = computed(() =>
      t("dataSecurity.sidebar.relatedPolicies.privacy")
    );
    const termsLink = computed(() =>
      t("dataSecurity.sidebar.relatedPolicies.terms")
    );
    const cookieLink = computed(() =>
      t("dataSecurity.sidebar.relatedPolicies.cookie")
    );

    return {
      heroBadge,
      heroTitle,
      heroDescription,
      lastUpdated,
      securityCertification,
      introductionTitle,
      introductionText,
      securityNotice,
      dataProtectionTitle,
      dataProtectionIntro,
      confidentialityTitle,
      confidentialityText,
      integrityTitle,
      integrityText,
      availabilityTitle,
      availabilityText,
      dataCollectionTitle,
      dataCollectionIntro,
      personalDataTitle,
      personalDataText,
      personalData1,
      personalData2,
      personalData3,
      personalData4,
      businessDataTitle,
      businessDataText,
      businessData1,
      businessData2,
      businessData3,
      storageLocationTitle,
      storageLocationText,
      securityMeasuresTitle,
      securityMeasuresIntro,
      encryptionTitle,
      encryptionText,
      firewallTitle,
      firewallText,
      accessControlTitle,
      accessControlText,
      backupTitle,
      backupText,
      monitoringTitle,
      monitoringText,
      updatesTitle,
      updatesText,
      employeeTrainingTitle,
      employeeTrainingIntro,
      dataHandlingTitle,
      dataHandlingText,
      incidentResponseTitle,
      incidentResponseText,
      employeeIncidentResponseTitle,
      employeeIncidentResponseText,
      employeeComplianceTitle,
      employeeComplianceText,
      detectionTitle,
      detectionText,
      assessmentTitle,
      assessmentText,
      containmentTitle,
      containmentText,
      notificationTitle,
      notificationText,
      recoveryTitle,
      recoveryText,
      gdprTitle,
      gdprText,
      iso27001Title,
      iso27001Text,
      soc2Title,
      soc2Text,
      contactTitle,
      contactIntro,
      securityEmailTitle,
      securityEmailAddress,
      securityPhoneTitle,
      securityPhoneNumber,
      addressTitle,
      companyAddress,
      quickLinksTitle,
      introductionLink,
      dataProtectionLink,
      dataCollectionLink,
      securityMeasuresLink,
      employeeTrainingLink,
      incidentResponseLink,
      complianceLink,
      contactLink,
      securityStatusTitle,
      encryptionStatus,
      backupStatus,
      monitoringStatus,
      relatedPoliciesTitle,
      privacyLink,
      termsLink,
      cookieLink,
    };
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
  background: url("https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80")
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

/* Security Notice */
.security-notice {
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

.security-notice p {
  margin: 0;
  font-weight: 500;
  color: var(--dermiqt-dark-text);
}

/* Principles Grid */
.principles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.principle-item {
  background: var(--dermiqt-light-bg);
  padding: 1.5rem;
  border-radius: 12px;
  text-align: center;
  transition: all 0.3s ease;
}

.principle-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.principle-icon {
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

.principle-item h4 {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--dermiqt-dark-text);
  margin-bottom: 0.75rem;
}

.principle-item p {
  font-size: 0.875rem;
  color: var(--dermiqt-dark-text);
  opacity: 0.8;
  line-height: 1.5;
}

/* Security Grid */
.security-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.security-item {
  background: var(--dermiqt-light-bg);
  padding: 1.5rem;
  border-radius: 12px;
  text-align: center;
  transition: all 0.3s ease;
}

.security-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.security-icon {
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

.security-item h4 {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--dermiqt-dark-text);
  margin-bottom: 0.75rem;
}

.security-item p {
  font-size: 0.875rem;
  color: var(--dermiqt-dark-text);
  opacity: 0.8;
  line-height: 1.5;
}

/* Training Areas */
.training-areas {
  margin: 2rem 0;
}

.training-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: var(--dermiqt-light-bg);
  border-radius: 8px;
}

.training-icon {
  color: var(--dermiqt-yellow);
  font-size: 1.5rem;
  flex-shrink: 0;
  margin-top: 0.25rem;
}

.training-item h4 {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--dermiqt-dark-text);
  margin-bottom: 0.5rem;
}

.training-item p {
  font-size: 0.875rem;
  color: var(--dermiqt-dark-text);
  opacity: 0.8;
  line-height: 1.5;
  margin: 0;
}

/* Response Steps */
.response-steps {
  margin: 2rem 0;
}

.step-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: var(--dermiqt-light-bg);
  border-radius: 8px;
}

.step-number {
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, var(--dermiqt-yellow) 0%, #e6a800 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  color: var(--dermiqt-dark-text);
  flex-shrink: 0;
}

.step-content h4 {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--dermiqt-dark-text);
  margin-bottom: 0.5rem;
}

.step-content p {
  font-size: 0.875rem;
  color: var(--dermiqt-dark-text);
  opacity: 0.8;
  line-height: 1.5;
  margin: 0;
}

/* Compliance Grid */
.compliance-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.compliance-item {
  background: var(--dermiqt-light-bg);
  padding: 1.5rem;
  border-radius: 12px;
  text-align: center;
  transition: all 0.3s ease;
}

.compliance-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.compliance-icon {
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

.compliance-item h4 {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--dermiqt-dark-text);
  margin-bottom: 0.75rem;
}

.compliance-item p {
  font-size: 0.875rem;
  color: var(--dermiqt-dark-text);
  opacity: 0.8;
  line-height: 1.5;
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

/* Security Status */
.security-status {
  margin-top: 1rem;
}

.status-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
  padding: 0.5rem;
  background: rgba(76, 175, 80, 0.1);
  border-radius: 6px;
}

.status-icon.success {
  color: #4caf50;
  font-size: 1.25rem;
}

.status-item span {
  font-size: 0.875rem;
  color: var(--dermiqt-dark-text);
  font-weight: 500;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .content-title {
    font-size: 1.75rem;
  }

  .principles-grid,
  .security-grid,
  .compliance-grid {
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

  .principle-item,
  .security-item,
  .compliance-item {
    padding: 1rem;
  }

  .training-item,
  .step-item,
  .contact-item {
    padding: 0.75rem;
  }
}
</style>
