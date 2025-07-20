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
            <q-icon name="gavel" class="badge-icon" />
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
              <div class="acceptance-notice">
                <q-icon name="info" class="notice-icon" />
                <p>{{ acceptanceText }}</p>
              </div>
            </div>

            <!-- Definitions -->
            <div class="content-block" data-aos="fade-up" data-aos-delay="100">
              <h2 class="content-title">{{ definitionsTitle }}</h2>
              <p class="content-text">{{ definitionsIntro }}</p>

              <div class="definitions-grid">
                <div class="definition-item">
                  <h4>{{ companyTitle }}</h4>
                  <p>{{ companyDefinition }}</p>
                </div>
                <div class="definition-item">
                  <h4>{{ servicesTitle }}</h4>
                  <p>{{ servicesDefinition }}</p>
                </div>
                <div class="definition-item">
                  <h4>{{ customerTitle }}</h4>
                  <p>{{ customerDefinition }}</p>
                </div>
                <div class="definition-item">
                  <h4>{{ agreementTitle }}</h4>
                  <p>{{ agreementDefinition }}</p>
                </div>
              </div>
            </div>

            <!-- Services and Scope -->
            <div class="content-block" data-aos="fade-up" data-aos-delay="200">
              <h2 class="content-title">{{ servicesScopeTitle }}</h2>
              <p class="content-text">{{ servicesScopeIntro }}</p>

              <h3 class="content-subtitle">{{ includedServicesTitle }}</h3>
              <ul class="content-list">
                <li>{{ includedServices1 }}</li>
                <li>{{ includedServices2 }}</li>
                <li>{{ includedServices3 }}</li>
                <li>{{ includedServices4 }}</li>
                <li>{{ includedServices5 }}</li>
              </ul>

              <h3 class="content-subtitle">{{ excludedServicesTitle }}</h3>
              <ul class="content-list">
                <li>{{ excludedServices1 }}</li>
                <li>{{ excludedServices2 }}</li>
                <li>{{ excludedServices3 }}</li>
              </ul>
            </div>

            <!-- Customer Responsibilities -->
            <div class="content-block" data-aos="fade-up" data-aos-delay="300">
              <h2 class="content-title">{{ customerResponsibilitiesTitle }}</h2>
              <p class="content-text">{{ customerResponsibilitiesIntro }}</p>

              <div class="responsibilities-grid">
                <div class="responsibility-item">
                  <div class="responsibility-icon">
                    <q-icon name="inventory" />
                  </div>
                  <h4>{{ preparationTitle }}</h4>
                  <p>{{ preparationText }}</p>
                </div>

                <div class="responsibility-item">
                  <div class="responsibility-icon">
                    <q-icon name="access_time" />
                  </div>
                  <h4>{{ schedulingTitle }}</h4>
                  <p>{{ schedulingText }}</p>
                </div>

                <div class="responsibility-item">
                  <div class="responsibility-icon">
                    <q-icon name="security" />
                  </div>
                  <h4>{{ accessTitle }}</h4>
                  <p>{{ accessText }}</p>
                </div>

                <div class="responsibility-item">
                  <div class="responsibility-icon">
                    <q-icon name="payment" />
                  </div>
                  <h4>{{ paymentTitle }}</h4>
                  <p>{{ paymentText }}</p>
                </div>
              </div>
            </div>

            <!-- Company Responsibilities -->
            <div class="content-block" data-aos="fade-up" data-aos-delay="400">
              <h2 class="content-title">{{ companyResponsibilitiesTitle }}</h2>
              <p class="content-text">{{ companyResponsibilitiesIntro }}</p>

              <div class="company-commitments">
                <div class="commitment-item">
                  <q-icon name="verified" class="commitment-icon" />
                  <div>
                    <h4>{{ professionalServiceTitle }}</h4>
                    <p>{{ professionalServiceText }}</p>
                  </div>
                </div>

                <div class="commitment-item">
                  <q-icon name="schedule" class="commitment-icon" />
                  <div>
                    <h4>{{ timelyDeliveryTitle }}</h4>
                    <p>{{ timelyDeliveryText }}</p>
                  </div>
                </div>

                <div class="commitment-item">
                  <q-icon name="shield" class="commitment-icon" />
                  <div>
                    <h4>{{ insuranceCoverageTitle }}</h4>
                    <p>{{ insuranceCoverageText }}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Payment Terms -->
            <div class="content-block" data-aos="fade-up" data-aos-delay="500">
              <h2 class="content-title">{{ paymentTermsTitle }}</h2>
              <p class="content-text">{{ paymentTermsIntro }}</p>

              <h3 class="content-subtitle">{{ pricingTitle }}</h3>
              <ul class="content-list">
                <li>{{ pricing1 }}</li>
                <li>{{ pricing2 }}</li>
                <li>{{ pricing3 }}</li>
                <li>{{ pricing4 }}</li>
              </ul>

              <h3 class="content-subtitle">{{ paymentScheduleTitle }}</h3>
              <ul class="content-list">
                <li>{{ paymentSchedule1 }}</li>
                <li>{{ paymentSchedule2 }}</li>
                <li>{{ paymentSchedule3 }}</li>
              </ul>

              <h3 class="content-subtitle">{{ latePaymentTitle }}</h3>
              <p class="content-text">{{ latePaymentText }}</p>
            </div>

            <!-- Cancellation and Rescheduling -->
            <div class="content-block" data-aos="fade-up" data-aos-delay="600">
              <h2 class="content-title">{{ cancellationTitle }}</h2>
              <p class="content-text">{{ cancellationIntro }}</p>

              <div class="cancellation-policy">
                <div class="policy-item">
                  <div class="policy-header">
                    <h4>{{ freeCancellationTitle }}</h4>
                    <span class="policy-time">{{ freeCancellationTime }}</span>
                  </div>
                  <p>{{ freeCancellationText }}</p>
                </div>

                <div class="policy-item">
                  <div class="policy-header">
                    <h4>{{ partialRefundTitle }}</h4>
                    <span class="policy-time">{{ partialRefundTime }}</span>
                  </div>
                  <p>{{ partialRefundText }}</p>
                </div>

                <div class="policy-item">
                  <div class="policy-header">
                    <h4>{{ noRefundTitle }}</h4>
                    <span class="policy-time">{{ noRefundTime }}</span>
                  </div>
                  <p>{{ noRefundText }}</p>
                </div>
              </div>

              <h3 class="content-subtitle">{{ reschedulingTitle }}</h3>
              <p class="content-text">{{ reschedulingText }}</p>
            </div>

            <!-- Liability and Insurance -->
            <div class="content-block" data-aos="fade-up" data-aos-delay="700">
              <h2 class="content-title">{{ liabilityTitle }}</h2>
              <p class="content-text">{{ liabilityIntro }}</p>

              <h3 class="content-subtitle">{{ insuranceCoverageSubtitle }}</h3>
              <ul class="content-list">
                <li>{{ insuranceCoverage1 }}</li>
                <li>{{ insuranceCoverage2 }}</li>
                <li>{{ insuranceCoverage3 }}</li>
                <li>{{ insuranceCoverage4 }}</li>
              </ul>

              <h3 class="content-subtitle">{{ liabilityLimitationsTitle }}</h3>
              <ul class="content-list">
                <li>{{ liabilityLimitations1 }}</li>
                <li>{{ liabilityLimitations2 }}</li>
                <li>{{ liabilityLimitations3 }}</li>
              </ul>

              <h3 class="content-subtitle">{{ claimsProcessTitle }}</h3>
              <p class="content-text">{{ claimsProcessText }}</p>
            </div>

            <!-- Dispute Resolution -->
            <div class="content-block" data-aos="fade-up" data-aos-delay="800">
              <h2 class="content-title">{{ disputeResolutionTitle }}</h2>
              <p class="content-text">{{ disputeResolutionIntro }}</p>

              <div class="resolution-steps">
                <div class="step-item">
                  <div class="step-number">1</div>
                  <div>
                    <h4>{{ directContactTitle }}</h4>
                    <p>{{ directContactText }}</p>
                  </div>
                </div>

                <div class="step-item">
                  <div class="step-number">2</div>
                  <div>
                    <h4>{{ mediationTitle }}</h4>
                    <p>{{ mediationText }}</p>
                  </div>
                </div>

                <div class="step-item">
                  <div class="step-number">3</div>
                  <div>
                    <h4>{{ arbitrationTitle }}</h4>
                    <p>{{ arbitrationText }}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Contact Information -->
            <div class="content-block" data-aos="fade-up" data-aos-delay="900">
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
                    <a href="#definitions">{{ definitionsLink }}</a>
                  </li>
                  <li>
                    <a href="#services-scope">{{ servicesScopeLink }}</a>
                  </li>
                  <li>
                    <a href="#customer-responsibilities">{{
                      customerResponsibilitiesLink
                    }}</a>
                  </li>
                  <li>
                    <a href="#company-responsibilities">{{
                      companyResponsibilitiesLink
                    }}</a>
                  </li>
                  <li>
                    <a href="#payment-terms">{{ paymentTermsLink }}</a>
                  </li>
                  <li>
                    <a href="#cancellation">{{ cancellationLink }}</a>
                  </li>
                  <li>
                    <a href="#liability">{{ liabilityLink }}</a>
                  </li>
                  <li>
                    <a href="#dispute-resolution">{{
                      disputeResolutionLink
                    }}</a>
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
                  @click="downloadTerms"
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
                    <router-link to="/legal/cookie-policy">{{
                      cookieLink
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
  name: "TermsOfServicePage",
  components: {
    AppFooter,
  },
  setup() {
    const { t } = useI18n();

    // Hero translations
    const heroBadge = computed(() => t("terms.hero.badge"));
    const heroTitle = computed(() => t("terms.hero.title"));
    const heroDescription = computed(() => t("terms.hero.description"));
    const lastUpdated = computed(() => t("terms.hero.lastUpdated"));
    const effectiveDate = computed(() => t("terms.hero.effectiveDate"));

    // Introduction
    const introductionTitle = computed(() => t("terms.introduction.title"));
    const introductionText = computed(() => t("terms.introduction.text"));
    const acceptanceText = computed(() => t("terms.introduction.acceptance"));

    // Definitions
    const definitionsTitle = computed(() => t("terms.definitions.title"));
    const definitionsIntro = computed(() => t("terms.definitions.intro"));
    const companyTitle = computed(() => t("terms.definitions.company.title"));
    const companyDefinition = computed(() =>
      t("terms.definitions.company.definition")
    );
    const servicesTitle = computed(() => t("terms.definitions.services.title"));
    const servicesDefinition = computed(() =>
      t("terms.definitions.services.definition")
    );
    const customerTitle = computed(() => t("terms.definitions.customer.title"));
    const customerDefinition = computed(() =>
      t("terms.definitions.customer.definition")
    );
    const agreementTitle = computed(() =>
      t("terms.definitions.agreement.title")
    );
    const agreementDefinition = computed(() =>
      t("terms.definitions.agreement.definition")
    );

    // Services and Scope
    const servicesScopeTitle = computed(() => t("terms.servicesScope.title"));
    const servicesScopeIntro = computed(() => t("terms.servicesScope.intro"));
    const includedServicesTitle = computed(() =>
      t("terms.servicesScope.includedServices.title")
    );
    const includedServices1 = computed(() =>
      t("terms.servicesScope.includedServices.items.0")
    );
    const includedServices2 = computed(() =>
      t("terms.servicesScope.includedServices.items.1")
    );
    const includedServices3 = computed(() =>
      t("terms.servicesScope.includedServices.items.2")
    );
    const includedServices4 = computed(() =>
      t("terms.servicesScope.includedServices.items.3")
    );
    const includedServices5 = computed(() =>
      t("terms.servicesScope.includedServices.items.4")
    );
    const excludedServicesTitle = computed(() =>
      t("terms.servicesScope.excludedServices.title")
    );
    const excludedServices1 = computed(() =>
      t("terms.servicesScope.excludedServices.items.0")
    );
    const excludedServices2 = computed(() =>
      t("terms.servicesScope.excludedServices.items.1")
    );
    const excludedServices3 = computed(() =>
      t("terms.servicesScope.excludedServices.items.2")
    );

    // Customer Responsibilities
    const customerResponsibilitiesTitle = computed(() =>
      t("terms.customerResponsibilities.title")
    );
    const customerResponsibilitiesIntro = computed(() =>
      t("terms.customerResponsibilities.intro")
    );
    const preparationTitle = computed(() =>
      t("terms.customerResponsibilities.preparation.title")
    );
    const preparationText = computed(() =>
      t("terms.customerResponsibilities.preparation.text")
    );
    const schedulingTitle = computed(() =>
      t("terms.customerResponsibilities.scheduling.title")
    );
    const schedulingText = computed(() =>
      t("terms.customerResponsibilities.scheduling.text")
    );
    const accessTitle = computed(() =>
      t("terms.customerResponsibilities.access.title")
    );
    const accessText = computed(() =>
      t("terms.customerResponsibilities.access.text")
    );
    const paymentTitle = computed(() =>
      t("terms.customerResponsibilities.payment.title")
    );
    const paymentText = computed(() =>
      t("terms.customerResponsibilities.payment.text")
    );

    // Company Responsibilities
    const companyResponsibilitiesTitle = computed(() =>
      t("terms.companyResponsibilities.title")
    );
    const companyResponsibilitiesIntro = computed(() =>
      t("terms.companyResponsibilities.intro")
    );
    const professionalServiceTitle = computed(() =>
      t("terms.companyResponsibilities.professionalService.title")
    );
    const professionalServiceText = computed(() =>
      t("terms.companyResponsibilities.professionalService.text")
    );
    const timelyDeliveryTitle = computed(() =>
      t("terms.companyResponsibilities.timelyDelivery.title")
    );
    const timelyDeliveryText = computed(() =>
      t("terms.companyResponsibilities.timelyDelivery.text")
    );
    const insuranceCoverageTitle = computed(() =>
      t("terms.companyResponsibilities.insuranceCoverage.title")
    );
    const insuranceCoverageText = computed(() =>
      t("terms.companyResponsibilities.insuranceCoverage.text")
    );

    // Payment Terms
    const paymentTermsTitle = computed(() => t("terms.paymentTerms.title"));
    const paymentTermsIntro = computed(() => t("terms.paymentTerms.intro"));
    const pricingTitle = computed(() => t("terms.paymentTerms.pricing.title"));
    const pricing1 = computed(() => t("terms.paymentTerms.pricing.items.0"));
    const pricing2 = computed(() => t("terms.paymentTerms.pricing.items.1"));
    const pricing3 = computed(() => t("terms.paymentTerms.pricing.items.2"));
    const pricing4 = computed(() => t("terms.paymentTerms.pricing.items.3"));
    const paymentScheduleTitle = computed(() =>
      t("terms.paymentTerms.paymentSchedule.title")
    );
    const paymentSchedule1 = computed(() =>
      t("terms.paymentTerms.paymentSchedule.items.0")
    );
    const paymentSchedule2 = computed(() =>
      t("terms.paymentTerms.paymentSchedule.items.1")
    );
    const paymentSchedule3 = computed(() =>
      t("terms.paymentTerms.paymentSchedule.items.2")
    );
    const latePaymentTitle = computed(() =>
      t("terms.paymentTerms.latePayment.title")
    );
    const latePaymentText = computed(() =>
      t("terms.paymentTerms.latePayment.text")
    );

    // Cancellation and Rescheduling
    const cancellationTitle = computed(() => t("terms.cancellation.title"));
    const cancellationIntro = computed(() => t("terms.cancellation.intro"));
    const freeCancellationTitle = computed(() =>
      t("terms.cancellation.freeCancellation.title")
    );
    const freeCancellationTime = computed(() =>
      t("terms.cancellation.freeCancellation.time")
    );
    const freeCancellationText = computed(() =>
      t("terms.cancellation.freeCancellation.text")
    );
    const partialRefundTitle = computed(() =>
      t("terms.cancellation.partialRefund.title")
    );
    const partialRefundTime = computed(() =>
      t("terms.cancellation.partialRefund.time")
    );
    const partialRefundText = computed(() =>
      t("terms.cancellation.partialRefund.text")
    );
    const noRefundTitle = computed(() =>
      t("terms.cancellation.noRefund.title")
    );
    const noRefundTime = computed(() => t("terms.cancellation.noRefund.time"));
    const noRefundText = computed(() => t("terms.cancellation.noRefund.text"));
    const reschedulingTitle = computed(() =>
      t("terms.cancellation.rescheduling.title")
    );
    const reschedulingText = computed(() =>
      t("terms.cancellation.rescheduling.text")
    );

    // Liability and Insurance
    const liabilityTitle = computed(() => t("terms.liability.title"));
    const liabilityIntro = computed(() => t("terms.liability.intro"));
    const insuranceCoverageSubtitle = computed(() =>
      t("terms.liability.insuranceCoverage.title")
    );
    const insuranceCoverage1 = computed(() =>
      t("terms.liability.insuranceCoverage.items.0")
    );
    const insuranceCoverage2 = computed(() =>
      t("terms.liability.insuranceCoverage.items.1")
    );
    const insuranceCoverage3 = computed(() =>
      t("terms.liability.insuranceCoverage.items.2")
    );
    const insuranceCoverage4 = computed(() =>
      t("terms.liability.insuranceCoverage.items.3")
    );
    const liabilityLimitationsTitle = computed(() =>
      t("terms.liability.liabilityLimitations.title")
    );
    const liabilityLimitations1 = computed(() =>
      t("terms.liability.liabilityLimitations.items.0")
    );
    const liabilityLimitations2 = computed(() =>
      t("terms.liability.liabilityLimitations.items.1")
    );
    const liabilityLimitations3 = computed(() =>
      t("terms.liability.liabilityLimitations.items.2")
    );
    const claimsProcessTitle = computed(() =>
      t("terms.liability.claimsProcess.title")
    );
    const claimsProcessText = computed(() =>
      t("terms.liability.claimsProcess.text")
    );

    // Dispute Resolution
    const disputeResolutionTitle = computed(() =>
      t("terms.disputeResolution.title")
    );
    const disputeResolutionIntro = computed(() =>
      t("terms.disputeResolution.intro")
    );
    const directContactTitle = computed(() =>
      t("terms.disputeResolution.directContact.title")
    );
    const directContactText = computed(() =>
      t("terms.disputeResolution.directContact.text")
    );
    const mediationTitle = computed(() =>
      t("terms.disputeResolution.mediation.title")
    );
    const mediationText = computed(() =>
      t("terms.disputeResolution.mediation.text")
    );
    const arbitrationTitle = computed(() =>
      t("terms.disputeResolution.arbitration.title")
    );
    const arbitrationText = computed(() =>
      t("terms.disputeResolution.arbitration.text")
    );

    // Contact Information
    const contactTitle = computed(() => t("terms.contact.title"));
    const contactIntro = computed(() => t("terms.contact.intro"));
    const emailTitle = computed(() => t("terms.contact.email.title"));
    const emailAddress = computed(() => t("terms.contact.email.address"));
    const phoneTitle = computed(() => t("terms.contact.phone.title"));
    const phoneNumber = computed(() => t("terms.contact.phone.number"));
    const addressTitle = computed(() => t("terms.contact.address.title"));
    const companyAddress = computed(() => t("terms.contact.address.company"));

    // Sidebar
    const quickLinksTitle = computed(() => t("terms.sidebar.quickLinks.title"));
    const introductionLink = computed(() =>
      t("terms.sidebar.quickLinks.introduction")
    );
    const definitionsLink = computed(() =>
      t("terms.sidebar.quickLinks.definitions")
    );
    const servicesScopeLink = computed(() =>
      t("terms.sidebar.quickLinks.servicesScope")
    );
    const customerResponsibilitiesLink = computed(() =>
      t("terms.sidebar.quickLinks.customerResponsibilities")
    );
    const companyResponsibilitiesLink = computed(() =>
      t("terms.sidebar.quickLinks.companyResponsibilities")
    );
    const paymentTermsLink = computed(() =>
      t("terms.sidebar.quickLinks.paymentTerms")
    );
    const cancellationLink = computed(() =>
      t("terms.sidebar.quickLinks.cancellation")
    );
    const liabilityLink = computed(() =>
      t("terms.sidebar.quickLinks.liability")
    );
    const disputeResolutionLink = computed(() =>
      t("terms.sidebar.quickLinks.disputeResolution")
    );
    const contactLink = computed(() => t("terms.sidebar.quickLinks.contact"));

    const downloadTitle = computed(() => t("terms.sidebar.download.title"));
    const downloadText = computed(() => t("terms.sidebar.download.text"));
    const downloadButton = computed(() => t("terms.sidebar.download.button"));

    const relatedPoliciesTitle = computed(() =>
      t("terms.sidebar.relatedPolicies.title")
    );
    const privacyLink = computed(() =>
      t("terms.sidebar.relatedPolicies.privacy")
    );
    const cookieLink = computed(() =>
      t("terms.sidebar.relatedPolicies.cookie")
    );
    const dataSecurityLink = computed(() =>
      t("terms.sidebar.relatedPolicies.dataSecurity")
    );

    return {
      heroBadge,
      heroTitle,
      heroDescription,
      lastUpdated,
      effectiveDate,
      introductionTitle,
      introductionText,
      acceptanceText,
      definitionsTitle,
      definitionsIntro,
      companyTitle,
      companyDefinition,
      servicesTitle,
      servicesDefinition,
      customerTitle,
      customerDefinition,
      agreementTitle,
      agreementDefinition,
      servicesScopeTitle,
      servicesScopeIntro,
      includedServicesTitle,
      includedServices1,
      includedServices2,
      includedServices3,
      includedServices4,
      includedServices5,
      excludedServicesTitle,
      excludedServices1,
      excludedServices2,
      excludedServices3,
      customerResponsibilitiesTitle,
      customerResponsibilitiesIntro,
      preparationTitle,
      preparationText,
      schedulingTitle,
      schedulingText,
      accessTitle,
      accessText,
      paymentTitle,
      paymentText,
      companyResponsibilitiesTitle,
      companyResponsibilitiesIntro,
      professionalServiceTitle,
      professionalServiceText,
      timelyDeliveryTitle,
      timelyDeliveryText,
      insuranceCoverageTitle,
      insuranceCoverageText,
      paymentTermsTitle,
      paymentTermsIntro,
      pricingTitle,
      pricing1,
      pricing2,
      pricing3,
      pricing4,
      paymentScheduleTitle,
      paymentSchedule1,
      paymentSchedule2,
      paymentSchedule3,
      latePaymentTitle,
      latePaymentText,
      cancellationTitle,
      cancellationIntro,
      freeCancellationTitle,
      freeCancellationTime,
      freeCancellationText,
      partialRefundTitle,
      partialRefundTime,
      partialRefundText,
      noRefundTitle,
      noRefundTime,
      noRefundText,
      reschedulingTitle,
      reschedulingText,
      liabilityTitle,
      liabilityIntro,
      insuranceCoverageSubtitle,
      insuranceCoverage1,
      insuranceCoverage2,
      insuranceCoverage3,
      insuranceCoverage4,
      liabilityLimitationsTitle,
      liabilityLimitations1,
      liabilityLimitations2,
      liabilityLimitations3,
      claimsProcessTitle,
      claimsProcessText,
      disputeResolutionTitle,
      disputeResolutionIntro,
      directContactTitle,
      directContactText,
      mediationTitle,
      mediationText,
      arbitrationTitle,
      arbitrationText,
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
      definitionsLink,
      servicesScopeLink,
      customerResponsibilitiesLink,
      companyResponsibilitiesLink,
      paymentTermsLink,
      cancellationLink,
      liabilityLink,
      disputeResolutionLink,
      contactLink,
      downloadTitle,
      downloadText,
      downloadButton,
      relatedPoliciesTitle,
      privacyLink,
      cookieLink,
      dataSecurityLink,
    };
  },
  methods: {
    downloadTerms() {
      // Implementation for downloading the terms of service PDF
      console.log("Downloading terms of service...");
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
  background: url("https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80")
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

/* Acceptance Notice */
.acceptance-notice {
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

.acceptance-notice p {
  margin: 0;
  font-weight: 500;
  color: var(--dermiqt-dark-text);
}

/* Definitions Grid */
.definitions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.definition-item {
  background: var(--dermiqt-light-bg);
  padding: 1.5rem;
  border-radius: 12px;
  border-left: 4px solid var(--dermiqt-yellow);
}

.definition-item h4 {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--dermiqt-dark-text);
  margin-bottom: 0.75rem;
}

.definition-item p {
  font-size: 0.875rem;
  color: var(--dermiqt-dark-text);
  opacity: 0.8;
  line-height: 1.5;
  margin: 0;
}

/* Responsibilities Grid */
.responsibilities-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.responsibility-item {
  background: var(--dermiqt-light-bg);
  padding: 1.5rem;
  border-radius: 12px;
  text-align: center;
  transition: all 0.3s ease;
}

.responsibility-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.responsibility-icon {
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

.responsibility-item h4 {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--dermiqt-dark-text);
  margin-bottom: 0.75rem;
}

.responsibility-item p {
  font-size: 0.875rem;
  color: var(--dermiqt-dark-text);
  opacity: 0.8;
  line-height: 1.5;
}

/* Company Commitments */
.company-commitments {
  margin: 2rem 0;
}

.commitment-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: var(--dermiqt-light-bg);
  border-radius: 8px;
}

.commitment-icon {
  color: var(--dermiqt-yellow);
  font-size: 1.5rem;
  flex-shrink: 0;
  margin-top: 0.25rem;
}

.commitment-item h4 {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--dermiqt-dark-text);
  margin-bottom: 0.5rem;
}

.commitment-item p {
  font-size: 0.875rem;
  color: var(--dermiqt-dark-text);
  opacity: 0.8;
  line-height: 1.5;
  margin: 0;
}

/* Cancellation Policy */
.cancellation-policy {
  margin: 2rem 0;
}

.policy-item {
  background: var(--dermiqt-light-bg);
  padding: 1.5rem;
  border-radius: 12px;
  margin-bottom: 1rem;
  border-left: 4px solid var(--dermiqt-yellow);
}

.policy-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
}

.policy-header h4 {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--dermiqt-dark-text);
  margin: 0;
}

.policy-time {
  background: var(--dermiqt-yellow);
  color: var(--dermiqt-dark-text);
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
}

.policy-item p {
  font-size: 0.875rem;
  color: var(--dermiqt-dark-text);
  opacity: 0.8;
  line-height: 1.5;
  margin: 0;
}

/* Resolution Steps */
.resolution-steps {
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

.step-item h4 {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--dermiqt-dark-text);
  margin-bottom: 0.5rem;
}

.step-item p {
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

  .definitions-grid,
  .responsibilities-grid {
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

  .policy-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
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

  .definition-item,
  .responsibility-item {
    padding: 1rem;
  }

  .commitment-item,
  .contact-item {
    padding: 0.75rem;
  }
}
</style>
