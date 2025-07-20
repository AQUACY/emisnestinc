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
            <q-icon name="local_shipping" class="badge-icon" />
            <span>{{ heroBadge }}</span>
          </div>
          <h1 class="hero-title" data-aos="fade-up" data-aos-delay="100">
            {{ heroTitle }}
          </h1>
          <p class="hero-description" data-aos="fade-up" data-aos-delay="200">
            {{ heroDescription }}
          </p>
          <div class="hero-stats" data-aos="fade-up" data-aos-delay="300">
            <div class="stat-item">
              <div class="stat-number">15+</div>
              <div class="stat-label">
                {{ heroStatsExperience }}
              </div>
            </div>
            <div class="stat-item">
              <div class="stat-number">10,000+</div>
              <div class="stat-label">
                {{ heroStatsMoves }}
              </div>
            </div>
            <div class="stat-item">
              <div class="stat-number">98%</div>
              <div class="stat-label">
                {{ heroStatsSatisfaction }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Grid -->
    <section class="services-section section-padding">
      <div class="container">
        <div class="row">
          <!-- Residential Moving -->
          <div
            class="col-12 col-md-6 col-lg-4 q-pa-md"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div class="service-card">
              <div class="service-header">
                <div class="service-icon">
                  <q-icon name="home" />
                </div>
                <h3 class="service-title">
                  {{ residentialTitle }}
                </h3>
              </div>
              <p class="service-description">
                {{ residentialDescription }}
              </p>
              <div class="service-features">
                <div class="feature-item">
                  <q-icon name="check_circle" class="feature-icon" />
                  <span>{{ residentialFeatures1 }}</span>
                </div>
                <div class="feature-item">
                  <q-icon name="check_circle" class="feature-icon" />
                  <span>{{ residentialFeatures2 }}</span>
                </div>
                <div class="feature-item">
                  <q-icon name="check_circle" class="feature-icon" />
                  <span>{{ residentialFeatures3 }}</span>
                </div>
                <div class="feature-item">
                  <q-icon name="check_circle" class="feature-icon" />
                  <span>{{ residentialFeatures4 }}</span>
                </div>
                <div class="feature-item">
                  <q-icon name="check_circle" class="feature-icon" />
                  <span>{{ residentialFeatures5 }}</span>
                </div>
              </div>
              <div class="service-action">
                <q-btn
                  class="service-btn"
                  :label="ctaPrimaryButton"
                  @click="scrollToSection('contact')"
                />
              </div>
            </div>
          </div>

          <!-- Commercial Moving -->
          <div
            class="col-12 col-md-6 col-lg-4 q-pa-md"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div class="service-card">
              <div class="service-header">
                <div class="service-icon">
                  <q-icon name="business" />
                </div>
                <h3 class="service-title">
                  {{ commercialTitle }}
                </h3>
              </div>
              <p class="service-description">
                {{ commercialDescription }}
              </p>
              <div class="service-features">
                <div class="feature-item">
                  <q-icon name="check_circle" class="feature-icon" />
                  <span>{{ commercialFeatures1 }}</span>
                </div>
                <div class="feature-item">
                  <q-icon name="check_circle" class="feature-icon" />
                  <span>{{ commercialFeatures2 }}</span>
                </div>
                <div class="feature-item">
                  <q-icon name="check_circle" class="feature-icon" />
                  <span>{{ commercialFeatures3 }}</span>
                </div>
                <div class="feature-item">
                  <q-icon name="check_circle" class="feature-icon" />
                  <span>{{ commercialFeatures4 }}</span>
                </div>
                <div class="feature-item">
                  <q-icon name="check_circle" class="feature-icon" />
                  <span>{{ commercialFeatures5 }}</span>
                </div>
              </div>
              <div class="service-action">
                <q-btn
                  class="service-btn"
                  :label="ctaPrimaryButton"
                  @click="scrollToSection('contact')"
                />
              </div>
            </div>
          </div>

          <!-- Packing Services -->
          <div
            class="col-12 col-md-6 col-lg-4 q-pa-md"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div class="service-card">
              <div class="service-header">
                <div class="service-icon">
                  <q-icon name="inventory" />
                </div>
                <h3 class="service-title">
                  {{ packingTitle }}
                </h3>
              </div>
              <p class="service-description">
                {{ packingDescription }}
              </p>
              <div class="service-features">
                <div class="feature-item">
                  <q-icon name="check_circle" class="feature-icon" />
                  <span>{{ packingFeatures1 }}</span>
                </div>
                <div class="feature-item">
                  <q-icon name="check_circle" class="feature-icon" />
                  <span>{{ packingFeatures2 }}</span>
                </div>
                <div class="feature-item">
                  <q-icon name="check_circle" class="feature-icon" />
                  <span>{{ packingFeatures3 }}</span>
                </div>
                <div class="feature-item">
                  <q-icon name="check_circle" class="feature-icon" />
                  <span>{{ packingFeatures4 }}</span>
                </div>
                <div class="feature-item">
                  <q-icon name="check_circle" class="feature-icon" />
                  <span>{{ packingFeatures5 }}</span>
                </div>
              </div>
              <div class="service-action">
                <q-btn
                  class="service-btn"
                  :label="ctaPrimaryButton"
                  @click="scrollToSection('contact')"
                />
              </div>
            </div>
          </div>

          <!-- Storage Solutions -->
          <div
            class="col-12 col-md-6 col-lg-4 q-pa-md"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div class="service-card">
              <div class="service-header">
                <div class="service-icon">
                  <q-icon name="warehouse" />
                </div>
                <h3 class="service-title">
                  {{ storageTitle }}
                </h3>
              </div>
              <p class="service-description">
                {{ storageDescription }}
              </p>
              <div class="service-features">
                <div class="feature-item">
                  <q-icon name="check_circle" class="feature-icon" />
                  <span>{{ storageFeatures1 }}</span>
                </div>
                <div class="feature-item">
                  <q-icon name="check_circle" class="feature-icon" />
                  <span>{{ storageFeatures2 }}</span>
                </div>
                <div class="feature-item">
                  <q-icon name="check_circle" class="feature-icon" />
                  <span>{{ storageFeatures3 }}</span>
                </div>
                <div class="feature-item">
                  <q-icon name="check_circle" class="feature-icon" />
                  <span>{{ storageFeatures4 }}</span>
                </div>
                <div class="feature-item">
                  <q-icon name="check_circle" class="feature-icon" />
                  <span>{{ storageFeatures5 }}</span>
                </div>
              </div>
              <div class="service-action">
                <q-btn
                  class="service-btn"
                  :label="ctaPrimaryButton"
                  @click="scrollToSection('contact')"
                />
              </div>
            </div>
          </div>

          <!-- Logistics Support -->
          <div
            class="col-12 col-md-6 col-lg-4 q-pa-md"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div class="service-card">
              <div class="service-header">
                <div class="service-icon">
                  <q-icon name="local_shipping" />
                </div>
                <h3 class="service-title">
                  {{ logisticsTitle }}
                </h3>
              </div>
              <p class="service-description">
                {{ logisticsDescription }}
              </p>
              <div class="service-features">
                <div class="feature-item">
                  <q-icon name="check_circle" class="feature-icon" />
                  <span>{{ logisticsFeatures1 }}</span>
                </div>
                <div class="feature-item">
                  <q-icon name="check_circle" class="feature-icon" />
                  <span>{{ logisticsFeatures2 }}</span>
                </div>
                <div class="feature-item">
                  <q-icon name="check_circle" class="feature-icon" />
                  <span>{{ logisticsFeatures3 }}</span>
                </div>
                <div class="feature-item">
                  <q-icon name="check_circle" class="feature-icon" />
                  <span>{{ logisticsFeatures4 }}</span>
                </div>
                <div class="feature-item">
                  <q-icon name="check_circle" class="feature-icon" />
                  <span>{{ logisticsFeatures5 }}</span>
                </div>
              </div>
              <div class="service-action">
                <q-btn
                  class="service-btn"
                  :label="ctaPrimaryButton"
                  @click="scrollToSection('contact')"
                />
              </div>
            </div>
          </div>

          <!-- International Moving -->
          <div
            class="col-12 col-md-6 col-lg-4 q-pa-md"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div class="service-card">
              <div class="service-header">
                <div class="service-icon">
                  <q-icon name="flight" />
                </div>
                <h3 class="service-title">
                  {{ internationalTitle }}
                </h3>
              </div>
              <p class="service-description">
                {{ internationalDescription }}
              </p>
              <div class="service-features">
                <div class="feature-item">
                  <q-icon name="check_circle" class="feature-icon" />
                  <span>{{ internationalFeatures1 }}</span>
                </div>
                <div class="feature-item">
                  <q-icon name="check_circle" class="feature-icon" />
                  <span>{{ internationalFeatures2 }}</span>
                </div>
                <div class="feature-item">
                  <q-icon name="check_circle" class="feature-icon" />
                  <span>{{ internationalFeatures3 }}</span>
                </div>
                <div class="feature-item">
                  <q-icon name="check_circle" class="feature-icon" />
                  <span>{{ internationalFeatures4 }}</span>
                </div>
                <div class="feature-item">
                  <q-icon name="check_circle" class="feature-icon" />
                  <span>{{ internationalFeatures5 }}</span>
                </div>
              </div>
              <div class="service-action">
                <q-btn
                  class="service-btn"
                  :label="ctaPrimaryButton"
                  @click="scrollToSection('contact')"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Process Section -->
    <section class="process-section section-padding">
      <div class="container">
        <div class="text-center q-mb-xl">
          <div class="section-badge" data-aos="fade-up">
            <q-icon name="timeline" class="badge-icon" />
            <span>{{ processBadge }}</span>
          </div>
          <h2 class="section-title" data-aos="fade-up" data-aos-delay="100">
            {{ processTitle }}
          </h2>
          <p
            class="section-description"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {{ processDescription }}
          </p>
        </div>

        <div class="process-timeline">
          <div class="row">
            <div
              class="col-12 col-md-3 q-pa-md"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div class="process-step">
                <div class="step-number">1</div>
                <div class="step-icon">
                  <q-icon name="phone" />
                </div>
                <h4 class="step-title">
                  {{ consultationTitle }}
                </h4>
                <p class="step-description">
                  {{ consultationDescription }}
                </p>
              </div>
            </div>

            <div
              class="col-12 col-md-3 q-pa-md"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div class="process-step">
                <div class="step-number">2</div>
                <div class="step-icon">
                  <q-icon name="event" />
                </div>
                <h4 class="step-title">
                  {{ planningTitle }}
                </h4>
                <p class="step-description">
                  {{ planningDescription }}
                </p>
              </div>
            </div>

            <div
              class="col-12 col-md-3 q-pa-md"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div class="process-step">
                <div class="step-number">3</div>
                <div class="step-icon">
                  <q-icon name="local_shipping" />
                </div>
                <h4 class="step-title">
                  {{ movingTitle }}
                </h4>
                <p class="step-description">
                  {{ movingDescription }}
                </p>
              </div>
            </div>

            <div
              class="col-12 col-md-3 q-pa-md"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div class="process-step">
                <div class="step-number">4</div>
                <div class="step-icon">
                  <q-icon name="home" />
                </div>
                <h4 class="step-title">
                  {{ deliveryTitle }}
                </h4>
                <p class="step-description">
                  {{ deliveryDescription }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features-section section-padding">
      <div class="container">
        <div class="text-center q-mb-xl">
          <div class="section-badge" data-aos="fade-up">
            <q-icon name="star" class="badge-icon" />
            <span>{{ featuresBadge }}</span>
          </div>
          <h2 class="section-title" data-aos="fade-up" data-aos-delay="100">
            {{ featuresTitle }}
          </h2>
          <p
            class="section-description"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {{ featuresDescription }}
          </p>
        </div>

        <div class="row q-pa-md">
          <!-- Feature 1 -->
          <div
            class="col-12 col-md-6 col-lg-4 q-pa-md"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div class="feature-card">
              <div class="feature-icon-feature">
                <q-icon :name="feature1Icon" size="2rem" />
              </div>
              <h3 class="feature-title">{{ feature1Title }}</h3>
              <p class="feature-description">{{ feature1Description }}</p>
            </div>
          </div>

          <!-- Feature 2 -->
          <div
            class="col-12 col-md-6 col-lg-4 q-pa-md"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div class="feature-card">
              <div class="feature-icon-feature">
                <q-icon :name="feature2Icon" size="2rem" />
              </div>
              <h3 class="feature-title">{{ feature2Title }}</h3>
              <p class="feature-description">{{ feature2Description }}</p>
            </div>
          </div>

          <!-- Feature 3 -->
          <div
            class="col-12 col-md-6 col-lg-4 q-pa-md"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div class="feature-card">
              <div class="feature-icon-feature">
                <q-icon :name="feature3Icon" size="2rem" />
              </div>
              <h3 class="feature-title">{{ feature3Title }}</h3>
              <p class="feature-description">{{ feature3Description }}</p>
            </div>
          </div>

          <!-- Feature 4 -->
          <div
            class="col-12 col-md-6 col-lg-4 q-pa-md"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div class="feature-card">
              <div class="feature-icon-feature">
                <q-icon :name="feature4Icon" size="2rem" />
              </div>
              <h3 class="feature-title">{{ feature4Title }}</h3>
              <p class="feature-description">{{ feature4Description }}</p>
            </div>
          </div>

          <!-- Feature 5 -->
          <div
            class="col-12 col-md-6 col-lg-4 q-pa-md"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div class="feature-card">
              <div class="feature-icon-feature">
                <q-icon :name="feature5Icon" size="2rem" />
              </div>
              <h3 class="feature-title">{{ feature5Title }}</h3>
              <p class="feature-description">{{ feature5Description }}</p>
            </div>
          </div>

          <!-- Feature 6 -->
          <div
            class="col-12 col-md-6 col-lg-4 q-pa-md"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div class="feature-card">
              <div class="feature-icon-feature">
                <q-icon :name="feature6Icon" size="2rem" />
              </div>
              <h3 class="feature-title">{{ feature6Title }}</h3>
              <p class="feature-description">{{ feature6Description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section section-padding">
      <div class="container">
        <div class="cta-content text-center">
          <div class="cta-badge" data-aos="fade-up">
            <q-icon name="rocket_launch" class="badge-icon" />
            <span>{{ ctaBadge }}</span>
          </div>
          <h2 class="cta-title" data-aos="fade-up" data-aos-delay="100">
            {{ ctaTitle }}
          </h2>
          <p class="cta-description" data-aos="fade-up" data-aos-delay="200">
            {{ ctaDescription }}
          </p>
          <div class="cta-benefits" data-aos="fade-up" data-aos-delay="250">
            <div class="benefit-item">
              <q-icon name="check" class="benefit-icon" />
              <span>{{ ctaBenefits1 }}</span>
            </div>
            <div class="benefit-item">
              <q-icon name="check" class="benefit-icon" />
              <span>{{ ctaBenefits2 }}</span>
            </div>
            <div class="benefit-item">
              <q-icon name="check" class="benefit-icon" />
              <span>{{ ctaBenefits3 }}</span>
            </div>
            <div class="benefit-item">
              <q-icon name="check" class="benefit-icon" />
              <span>{{ ctaBenefits4 }}</span>
            </div>
          </div>
          <div class="cta-buttons" data-aos="fade-up" data-aos-delay="300">
            <q-btn
              class="cta-btn-primary"
              :label="ctaPrimaryButton"
              @click="scrollToSection('contact')"
            />
            <q-btn
              class="cta-btn-secondary"
              :label="ctaSecondaryButton"
              outline
              @click="scrollToSection('contact')"
            />
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
  name: "ServicesPage",
  components: {
    AppFooter,
  },
  setup() {
    const { t } = useI18n();

    // Hero translations
    const heroBadge = computed(() => t("services.hero.badge"));
    const heroTitle = computed(() => t("services.hero.title"));
    const heroDescription = computed(() => t("services.hero.description"));
    const heroStatsExperience = computed(() =>
      t("services.hero.stats.experience")
    );
    const heroStatsMoves = computed(() => t("services.hero.stats.moves"));
    const heroStatsSatisfaction = computed(() =>
      t("services.hero.stats.satisfaction")
    );

    // Services translations
    const residentialTitle = computed(() =>
      t("services.services.residential.title")
    );
    const residentialDescription = computed(() =>
      t("services.services.residential.description")
    );
    const residentialFeatures1 = computed(() =>
      t("services.services.residential.features.0")
    );
    const residentialFeatures2 = computed(() =>
      t("services.services.residential.features.1")
    );
    const residentialFeatures3 = computed(() =>
      t("services.services.residential.features.2")
    );
    const residentialFeatures4 = computed(() =>
      t("services.services.residential.features.3")
    );
    const residentialFeatures5 = computed(() =>
      t("services.services.residential.features.4")
    );

    const commercialTitle = computed(() =>
      t("services.services.commercial.title")
    );
    const commercialDescription = computed(() =>
      t("services.services.commercial.description")
    );
    const commercialFeatures1 = computed(() =>
      t("services.services.commercial.features.0")
    );
    const commercialFeatures2 = computed(() =>
      t("services.services.commercial.features.1")
    );
    const commercialFeatures3 = computed(() =>
      t("services.services.commercial.features.2")
    );
    const commercialFeatures4 = computed(() =>
      t("services.services.commercial.features.3")
    );
    const commercialFeatures5 = computed(() =>
      t("services.services.commercial.features.4")
    );

    const packingTitle = computed(() => t("services.services.packing.title"));
    const packingDescription = computed(() =>
      t("services.services.packing.description")
    );
    const packingFeatures1 = computed(() =>
      t("services.services.packing.features.0")
    );
    const packingFeatures2 = computed(() =>
      t("services.services.packing.features.1")
    );
    const packingFeatures3 = computed(() =>
      t("services.services.packing.features.2")
    );
    const packingFeatures4 = computed(() =>
      t("services.services.packing.features.3")
    );
    const packingFeatures5 = computed(() =>
      t("services.services.packing.features.4")
    );

    const storageTitle = computed(() => t("services.services.storage.title"));
    const storageDescription = computed(() =>
      t("services.services.storage.description")
    );
    const storageFeatures1 = computed(() =>
      t("services.services.storage.features.0")
    );
    const storageFeatures2 = computed(() =>
      t("services.services.storage.features.1")
    );
    const storageFeatures3 = computed(() =>
      t("services.services.storage.features.2")
    );
    const storageFeatures4 = computed(() =>
      t("services.services.storage.features.3")
    );
    const storageFeatures5 = computed(() =>
      t("services.services.storage.features.4")
    );

    const logisticsTitle = computed(() =>
      t("services.services.logistics.title")
    );
    const logisticsDescription = computed(() =>
      t("services.services.logistics.description")
    );
    const logisticsFeatures1 = computed(() =>
      t("services.services.logistics.features.0")
    );
    const logisticsFeatures2 = computed(() =>
      t("services.services.logistics.features.1")
    );
    const logisticsFeatures3 = computed(() =>
      t("services.services.logistics.features.2")
    );
    const logisticsFeatures4 = computed(() =>
      t("services.services.logistics.features.3")
    );
    const logisticsFeatures5 = computed(() =>
      t("services.services.logistics.features.4")
    );

    const internationalTitle = computed(() =>
      t("services.services.international.title")
    );
    const internationalDescription = computed(() =>
      t("services.services.international.description")
    );
    const internationalFeatures1 = computed(() =>
      t("services.services.international.features.0")
    );
    const internationalFeatures2 = computed(() =>
      t("services.services.international.features.1")
    );
    const internationalFeatures3 = computed(() =>
      t("services.services.international.features.2")
    );
    const internationalFeatures4 = computed(() =>
      t("services.services.international.features.3")
    );
    const internationalFeatures5 = computed(() =>
      t("services.services.international.features.4")
    );

    // Process translations
    const processBadge = computed(() => t("services.process.badge"));
    const processTitle = computed(() => t("services.process.title"));
    const processDescription = computed(() =>
      t("services.process.description")
    );
    const consultationTitle = computed(() =>
      t("services.process.steps.consultation.title")
    );
    const consultationDescription = computed(() =>
      t("services.process.steps.consultation.description")
    );
    const planningTitle = computed(() =>
      t("services.process.steps.planning.title")
    );
    const planningDescription = computed(() =>
      t("services.process.steps.planning.description")
    );
    const movingTitle = computed(() =>
      t("services.process.steps.moving.title")
    );
    const movingDescription = computed(() =>
      t("services.process.steps.moving.description")
    );
    const deliveryTitle = computed(() =>
      t("services.process.steps.delivery.title")
    );
    const deliveryDescription = computed(() =>
      t("services.process.steps.delivery.description")
    );

    // Features translations
    const featuresBadge = computed(() => t("services.features.badge"));
    const featuresTitle = computed(() => t("services.features.title"));
    const featuresDescription = computed(() =>
      t("services.features.description")
    );

    // Individual feature items
    const feature1Icon = computed(() => t("services.features.items.0.icon"));
    const feature1Title = computed(() => t("services.features.items.0.title"));
    const feature1Description = computed(() =>
      t("services.features.items.0.description")
    );

    const feature2Icon = computed(() => t("services.features.items.1.icon"));
    const feature2Title = computed(() => t("services.features.items.1.title"));
    const feature2Description = computed(() =>
      t("services.features.items.1.description")
    );

    const feature3Icon = computed(() => t("services.features.items.2.icon"));
    const feature3Title = computed(() => t("services.features.items.2.title"));
    const feature3Description = computed(() =>
      t("services.features.items.2.description")
    );

    const feature4Icon = computed(() => t("services.features.items.3.icon"));
    const feature4Title = computed(() => t("services.features.items.3.title"));
    const feature4Description = computed(() =>
      t("services.features.items.3.description")
    );

    const feature5Icon = computed(() => t("services.features.items.4.icon"));
    const feature5Title = computed(() => t("services.features.items.4.title"));
    const feature5Description = computed(() =>
      t("services.features.items.4.description")
    );

    const feature6Icon = computed(() => t("services.features.items.5.icon"));
    const feature6Title = computed(() => t("services.features.items.5.title"));
    const feature6Description = computed(() =>
      t("services.features.items.5.description")
    );

    // CTA translations
    const ctaBadge = computed(() => t("services.cta.badge"));
    const ctaTitle = computed(() => t("services.cta.title"));
    const ctaDescription = computed(() => t("services.cta.description"));
    const ctaPrimaryButton = computed(() => t("services.cta.primaryButton"));
    const ctaSecondaryButton = computed(() =>
      t("services.cta.secondaryButton")
    );
    const ctaBenefits1 = computed(() => t("services.cta.benefits.0"));
    const ctaBenefits2 = computed(() => t("services.cta.benefits.1"));
    const ctaBenefits3 = computed(() => t("services.cta.benefits.2"));
    const ctaBenefits4 = computed(() => t("services.cta.benefits.3"));
    const ctaBenefits5 = computed(() => t("services.cta.benefits.4"));

    return {
      heroBadge,
      heroTitle,
      heroDescription,
      heroStatsExperience,
      heroStatsMoves,
      heroStatsSatisfaction,
      residentialTitle,
      residentialDescription,
      residentialFeatures1,
      residentialFeatures2,
      residentialFeatures3,
      residentialFeatures4,
      residentialFeatures5,
      commercialTitle,
      commercialDescription,
      commercialFeatures1,
      commercialFeatures2,
      commercialFeatures3,
      commercialFeatures4,
      commercialFeatures5,
      packingTitle,
      packingDescription,
      packingFeatures1,
      packingFeatures2,
      packingFeatures3,
      packingFeatures4,
      packingFeatures5,
      storageTitle,
      storageDescription,
      storageFeatures1,
      storageFeatures2,
      storageFeatures3,
      storageFeatures4,
      storageFeatures5,
      logisticsTitle,
      logisticsDescription,
      logisticsFeatures1,
      logisticsFeatures2,
      logisticsFeatures3,
      logisticsFeatures4,
      logisticsFeatures5,
      internationalTitle,
      internationalDescription,
      internationalFeatures1,
      internationalFeatures2,
      internationalFeatures3,
      internationalFeatures4,
      internationalFeatures5,
      processBadge,
      processTitle,
      processDescription,
      consultationTitle,
      consultationDescription,
      planningTitle,
      planningDescription,
      movingTitle,
      movingDescription,
      deliveryTitle,
      deliveryDescription,
      featuresBadge,
      featuresTitle,
      featuresDescription,
      feature1Icon,
      feature1Title,
      feature1Description,
      feature2Icon,
      feature2Title,
      feature2Description,
      feature3Icon,
      feature3Title,
      feature3Description,
      feature4Icon,
      feature4Title,
      feature4Description,
      feature5Icon,
      feature5Title,
      feature5Description,
      feature6Icon,
      feature6Title,
      feature6Description,
      ctaBadge,
      ctaTitle,
      ctaDescription,
      ctaPrimaryButton,
      ctaSecondaryButton,
      ctaBenefits1,
      ctaBenefits2,
      ctaBenefits3,
      ctaBenefits4,
      ctaBenefits5,
    };
  },
  methods: {
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
};
</script>

<style scoped>
/* Hero Section */
.hero-section {
  position: relative;
  min-height: 80vh;
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
  background: url("https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80")
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
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.hero-description {
  font-size: 1.25rem;
  margin-bottom: 3rem;
  opacity: 0.9;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.hero-stats {
  display: flex;
  justify-content: center;
  gap: 3rem;
  flex-wrap: wrap;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--dermiqt-yellow);
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 0.875rem;
  opacity: 0.8;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Section Styles */
.section-padding {
  padding: 6rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(193, 120, 23, 0.1);
  border: 1px solid rgba(193, 120, 23, 0.2);
  border-radius: 50px;
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  color: var(--dermiqt-yellow);
  font-size: 0.875rem;
  font-weight: 600;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--dermiqt-dark-text);
  margin-bottom: 1rem;
  line-height: 1.2;
}

.section-description {
  font-size: 1.125rem;
  color: var(--dermiqt-dark-text);
  opacity: 0.8;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

/* Services Section */
.services-section {
  background: var(--dermiqt-white);
}

.service-card {
  background: var(--dermiqt-white);
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.12);
}

.service-header {
  text-align: center;
  margin-bottom: 1.5rem;
}

.service-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, var(--dermiqt-yellow) 0%, #e6a800 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  font-size: 2rem;
  color: var(--dermiqt-dark-text);
}

.service-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--dermiqt-dark-text);
  margin-bottom: 0.5rem;
}

.service-description {
  color: var(--dermiqt-dark-text);
  opacity: 0.8;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  flex-grow: 1;
}

.service-features {
  margin-bottom: 2rem;
}

.feature-item {
  display: flex !important;
  align-items: flex-start !important;
  gap: 0 !important;
  margin-bottom: 0.75rem !important;
  color: var(--dermiqt-dark-text) !important;
  font-size: 0.875rem !important;
  line-height: 1.4 !important;
  width: 100% !important;
}

.feature-item span {
  flex: 1 !important;
  padding-top: 0.125rem !important;
}

.feature-icon {
  width: 20px !important;
  height: 20px !important;
  min-width: 20px !important;
  min-height: 20px !important;
  background: linear-gradient(
    135deg,
    var(--dermiqt-yellow) 0%,
    #e6a800 100%
  ) !important;
  border-radius: 50% !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  font-size: 0.875rem !important;
  color: var(--dermiqt-dark-text) !important;
  flex-shrink: 0 !important;
  margin-top: 0.125rem !important;
  margin-right: 0.75rem !important;
}

.feature-item .q-icon {
  width: 20px !important;
  height: 20px !important;
  min-width: 20px !important;
  min-height: 20px !important;
  background: linear-gradient(
    135deg,
    var(--dermiqt-yellow) 0%,
    #e6a800 100%
  ) !important;
  border-radius: 50% !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  font-size: 0.875rem !important;
  color: var(--dermiqt-dark-text) !important;
  flex-shrink: 0 !important;
  margin-top: 0.125rem !important;
  margin-right: 0.75rem !important;
}

.benefit-icon {
  width: 20px !important;
  height: 20px !important;
  min-width: 20px !important;
  min-height: 20px !important;
}

.service-action {
  margin-top: auto;
}

.service-btn {
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

.service-btn:hover {
  background: #e6a800;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(193, 120, 23, 0.4);
}

/* Process Section */
.process-section {
  background: var(--dermiqt-light-bg);
}

.process-timeline {
  position: relative;
}

.process-step {
  text-align: center;
  position: relative;
  padding: 2rem 1rem;
}

.step-number {
  position: absolute;
  top: -1rem;
  left: 50%;
  transform: translateX(-50%);
  width: 3rem;
  height: 3rem;
  background: var(--dermiqt-yellow);
  color: var(--dermiqt-dark-text);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.25rem;
  z-index: 2;
}

.step-icon {
  width: 80px;
  height: 80px;
  background: var(--dermiqt-white);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem auto 1.5rem;
  font-size: 2rem;
  color: var(--dermiqt-yellow);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
}

.step-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--dermiqt-dark-text);
  margin-bottom: 1rem;
}

.step-description {
  color: var(--dermiqt-dark-text);
  opacity: 0.8;
  line-height: 1.6;
}

/* Features Section */
.features-section {
  background: var(--dermiqt-white);
}

.feature-card {
  background: var(--dermiqt-white);
  padding: 2.5rem;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  height: 100%;
}

.feature-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.12);
}

.feature-icon-feature {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, var(--dermiqt-yellow) 0%, #e6a800 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  font-size: 1.5rem;
  color: var(--dermiqt-dark-text);
}

.feature-icon {
  width: 30px;
  height: 30px;
  background: linear-gradient(135deg, var(--dermiqt-yellow) 0%, #e6a800 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  font-size: 2rem;
  color: var(--dermiqt-dark-text);
}

.feature-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--dermiqt-dark-text);
  margin-bottom: 1rem;
}

.feature-description {
  color: var(--dermiqt-dark-text);
  opacity: 0.8;
  line-height: 1.6;
}

/* CTA Section */
.cta-section {
  background: linear-gradient(
    135deg,
    var(--dermiqt-dark-text) 0%,
    #1a1a1a 100%
  );
  color: var(--dermiqt-white);
}

.cta-content {
  max-width: 600px;
  margin: 0 auto;
}

.cta-badge {
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

.cta-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.cta-description {
  font-size: 1.125rem;
  opacity: 0.9;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.cta-benefits {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.benefit-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--dermiqt-white);
  font-weight: 500;
}

.benefit-icon {
  color: var(--dermiqt-yellow);
  font-size: 1.25rem;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.cta-btn-primary {
  background: var(--dermiqt-yellow);
  color: var(--dermiqt-dark-text);
  font-weight: 600;
  padding: 1rem 2rem;
  border-radius: 8px;
  text-transform: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(193, 120, 23, 0.3);
}

.cta-btn-primary:hover {
  background: #e6a800;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(193, 120, 23, 0.4);
}

.cta-btn-secondary {
  border: 2px solid var(--dermiqt-yellow);
  color: var(--dermiqt-yellow);
  font-weight: 600;
  padding: 1rem 2rem;
  border-radius: 8px;
  text-transform: none;
  transition: all 0.3s ease;
}

.cta-btn-secondary:hover {
  background: var(--dermiqt-yellow);
  color: var(--dermiqt-dark-text);
  transform: translateY(-2px);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .hero-title {
    font-size: 3rem;
  }

  .section-title {
    font-size: 2rem;
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .hero-description {
    font-size: 1.125rem;
  }

  .hero-stats {
    gap: 2rem;
  }

  .stat-number {
    font-size: 2rem;
  }

  .section-padding {
    padding: 4rem 0;
  }

  .container {
    padding: 0 1rem;
  }

  .cta-benefits {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }

  .cta-btn-primary,
  .cta-btn-secondary {
    width: 100%;
    max-width: 300px;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2rem;
  }

  .hero-stats {
    flex-direction: column;
    gap: 1.5rem;
  }

  .service-card {
    padding: 2rem;
  }

  .process-step {
    padding: 1.5rem 0.5rem;
  }
}
</style>
