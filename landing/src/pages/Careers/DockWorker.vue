<template>
  <q-page>
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-background">
        <div class="hero-overlay"></div>
        <div class="floating-elements">
          <div class="floating-icon" style="--delay: 0s">
            <q-icon name="inventory" size="2rem" />
          </div>
          <div class="floating-icon" style="--delay: 2s">
            <q-icon name="schedule" size="1.5rem" />
          </div>
          <div class="floating-icon" style="--delay: 4s">
            <q-icon name="local_shipping" size="1.8rem" />
          </div>
        </div>
      </div>

      <div class="hero-content">
        <div class="container">
          <div class="text-center">
            <div class="hero-badge">
              <q-icon name="work" size="2rem" />
              <span>{{ heroBadge }}</span>
            </div>
            <h1 class="hero-title">{{ heroTitle }}</h1>
            <p class="hero-description">{{ heroSubtitle }}</p>
            <div class="hero-cta">
              <q-btn
                size="xl"
                :label="applicationTitle"
                class="cta-primary"
                @click="scrollToApplication"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Overview Section -->
    <section class="overview-section">
      <div class="container">
        <div class="section-header text-center">
          <h2 class="section-title">{{ overviewTitle }}</h2>
          <p class="section-description">
            {{ overviewDescription }}
          </p>
        </div>

        <div class="highlights-grid">
          <div class="highlight-card" data-aos="fade-up" data-aos-delay="100">
            <div class="highlight-icon">
              <q-icon name="check" size="1.5rem" />
            </div>
            <p class="highlight-text">{{ overviewHighlights1 }}</p>
          </div>
          <div class="highlight-card" data-aos="fade-up" data-aos-delay="200">
            <div class="highlight-icon">
              <q-icon name="check" size="1.5rem" />
            </div>
            <p class="highlight-text">{{ overviewHighlights2 }}</p>
          </div>
          <div class="highlight-card" data-aos="fade-up" data-aos-delay="300">
            <div class="highlight-icon">
              <q-icon name="check" size="1.5rem" />
            </div>
            <p class="highlight-text">{{ overviewHighlights3 }}</p>
          </div>
          <div class="highlight-card" data-aos="fade-up" data-aos-delay="400">
            <div class="highlight-icon">
              <q-icon name="check" size="1.5rem" />
            </div>
            <p class="highlight-text">{{ overviewHighlights4 }}</p>
          </div>
          <div class="highlight-card" data-aos="fade-up" data-aos-delay="500">
            <div class="highlight-icon">
              <q-icon name="check" size="1.5rem" />
            </div>
            <p class="highlight-text">{{ overviewHighlights5 }}</p>
          </div>
          <div class="highlight-card" data-aos="fade-up" data-aos-delay="600">
            <div class="highlight-icon">
              <q-icon name="check" size="1.5rem" />
            </div>
            <p class="highlight-text">{{ overviewHighlights6 }}</p>
          </div>
          <div class="highlight-card" data-aos="fade-up" data-aos-delay="700">
            <div class="highlight-icon">
              <q-icon name="check" size="1.5rem" />
            </div>
            <p class="highlight-text">{{ overviewHighlights7 }}</p>
          </div>
          <div class="highlight-card" data-aos="fade-up" data-aos-delay="800">
            <div class="highlight-icon">
              <q-icon name="check" size="1.5rem" />
            </div>
            <p class="highlight-text">{{ overviewHighlights8 }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Requirements Section -->
    <section class="requirements-section">
      <div class="container">
        <div class="section-header text-center">
          <h2 class="section-title">{{ requirementsTitle }}</h2>
          <p class="section-description">
            {{ requirementsDescription }}
          </p>
        </div>

        <div class="requirements-grid">
          <div class="requirement-card" data-aos="fade-up" data-aos-delay="100">
            <div class="requirement-icon">
              <q-icon :name="requirementsItems1Icon" size="2.5rem" />
            </div>
            <h3 class="requirement-title">{{ requirementsItems1Title }}</h3>
            <p class="requirement-description">
              {{ requirementsItems1Description }}
            </p>
          </div>
          <div class="requirement-card" data-aos="fade-up" data-aos-delay="200">
            <div class="requirement-icon">
              <q-icon :name="requirementsItems2Icon" size="2.5rem" />
            </div>
            <h3 class="requirement-title">{{ requirementsItems2Title }}</h3>
            <p class="requirement-description">
              {{ requirementsItems2Description }}
            </p>
          </div>
          <div class="requirement-card" data-aos="fade-up" data-aos-delay="300">
            <div class="requirement-icon">
              <q-icon :name="requirementsItems3Icon" size="2.5rem" />
            </div>
            <h3 class="requirement-title">{{ requirementsItems3Title }}</h3>
            <p class="requirement-description">
              {{ requirementsItems3Description }}
            </p>
          </div>
          <div class="requirement-card" data-aos="fade-up" data-aos-delay="400">
            <div class="requirement-icon">
              <q-icon :name="requirementsItems4Icon" size="2.5rem" />
            </div>
            <h3 class="requirement-title">{{ requirementsItems4Title }}</h3>
            <p class="requirement-description">
              {{ requirementsItems4Description }}
            </p>
          </div>
          <div class="requirement-card" data-aos="fade-up" data-aos-delay="500">
            <div class="requirement-icon">
              <q-icon :name="requirementsItems5Icon" size="2.5rem" />
            </div>
            <h3 class="requirement-title">{{ requirementsItems5Title }}</h3>
            <p class="requirement-description">
              {{ requirementsItems5Description }}
            </p>
          </div>
          <div class="requirement-card" data-aos="fade-up" data-aos-delay="600">
            <div class="requirement-icon">
              <q-icon :name="requirementsItems6Icon" size="2.5rem" />
            </div>
            <h3 class="requirement-title">{{ requirementsItems6Title }}</h3>
            <p class="requirement-description">
              {{ requirementsItems6Description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits Section -->
    <section class="benefits-section">
      <div class="container">
        <div class="section-header text-center">
          <h2 class="section-title">{{ benefitsTitle }}</h2>
          <p class="section-description">
            {{ benefitsDescription }}
          </p>
        </div>

        <div class="benefits-grid">
          <div class="benefit-category" data-aos="fade-up" data-aos-delay="100">
            <div class="benefit-icon">
              <q-icon name="check" size="1rem" />
            </div>
            <p class="benefit-text">{{ benefitsCategories1 }}</p>
          </div>
          <div class="benefit-category" data-aos="fade-up" data-aos-delay="200">
            <div class="benefit-icon">
              <q-icon name="check" size="1rem" />
            </div>
            <p class="benefit-text">{{ benefitsCategories2 }}</p>
          </div>
          <div class="benefit-category" data-aos="fade-up" data-aos-delay="300">
            <div class="benefit-icon">
              <q-icon name="check" size="1rem" />
            </div>
            <p class="benefit-text">{{ benefitsCategories3 }}</p>
          </div>
          <div class="benefit-category" data-aos="fade-up" data-aos-delay="400">
            <div class="benefit-icon">
              <q-icon name="check" size="1rem" />
            </div>
            <p class="benefit-text">{{ benefitsCategories4 }}</p>
          </div>
          <div class="benefit-category" data-aos="fade-up" data-aos-delay="500">
            <div class="benefit-icon">
              <q-icon name="check" size="1rem" />
            </div>
            <p class="benefit-text">{{ benefitsCategories5 }}</p>
          </div>
          <div class="benefit-category" data-aos="fade-up" data-aos-delay="600">
            <div class="benefit-icon">
              <q-icon name="check" size="1rem" />
            </div>
            <p class="benefit-text">{{ benefitsCategories6 }}</p>
          </div>
          <div class="benefit-category" data-aos="fade-up" data-aos-delay="700">
            <div class="benefit-icon">
              <q-icon name="check" size="1rem" />
            </div>
            <p class="benefit-text">{{ benefitsCategories7 }}</p>
          </div>
          <div class="benefit-category" data-aos="fade-up" data-aos-delay="800">
            <div class="benefit-icon">
              <q-icon name="check" size="1rem" />
            </div>
            <p class="benefit-text">{{ benefitsCategories8 }}</p>
          </div>
          <div class="benefit-category" data-aos="fade-up" data-aos-delay="900">
            <div class="benefit-icon">
              <q-icon name="check" size="1rem" />
            </div>
            <p class="benefit-text">{{ benefitsCategories9 }}</p>
          </div>
          <div
            class="benefit-category"
            data-aos="fade-up"
            data-aos-delay="1000"
          >
            <div class="benefit-icon">
              <q-icon name="check" size="1rem" />
            </div>
            <p class="benefit-text">{{ benefitsCategories10 }}</p>
          </div>
          <div
            class="benefit-category"
            data-aos="fade-up"
            data-aos-delay="1100"
          >
            <div class="benefit-icon">
              <q-icon name="check" size="1rem" />
            </div>
            <p class="benefit-text">{{ benefitsCategories11 }}</p>
          </div>
          <div
            class="benefit-category"
            data-aos="fade-up"
            data-aos-delay="1200"
          >
            <div class="benefit-icon">
              <q-icon name="check" size="1rem" />
            </div>
            <p class="benefit-text">{{ benefitsCategories12 }}</p>
          </div>
          <div
            class="benefit-category"
            data-aos="fade-up"
            data-aos-delay="1300"
          >
            <div class="benefit-icon">
              <q-icon name="check" size="1rem" />
            </div>
            <p class="benefit-text">{{ benefitsCategories13 }}</p>
          </div>
          <div
            class="benefit-category"
            data-aos="fade-up"
            data-aos-delay="1400"
          >
            <div class="benefit-icon">
              <q-icon name="check" size="1rem" />
            </div>
            <p class="benefit-text">{{ benefitsCategories14 }}</p>
          </div>
          <div
            class="benefit-category"
            data-aos="fade-up"
            data-aos-delay="1500"
          >
            <div class="benefit-icon">
              <q-icon name="check" size="1rem" />
            </div>
            <p class="benefit-text">{{ benefitsCategories15 }}</p>
          </div>
          <div
            class="benefit-category"
            data-aos="fade-up"
            data-aos-delay="1600"
          >
            <div class="benefit-icon">
              <q-icon name="check" size="1rem" />
            </div>
            <p class="benefit-text">{{ benefitsCategories16 }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Responsibilities Section -->
    <section class="responsibilities-section">
      <div class="container">
        <div class="section-header text-center">
          <h2 class="section-title">
            {{ responsibilitiesTitle }}
          </h2>
          <p class="section-description">
            {{ responsibilitiesDescription }}
          </p>
        </div>

        <div class="responsibilities-list">
          <div
            class="responsibility-item"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            <div class="responsibility-number">1</div>
            <p class="responsibility-text">{{ responsibilitiesItems1 }}</p>
          </div>
          <div
            class="responsibility-item"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <div class="responsibility-number">2</div>
            <p class="responsibility-text">{{ responsibilitiesItems2 }}</p>
          </div>
          <div
            class="responsibility-item"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <div class="responsibility-number">3</div>
            <p class="responsibility-text">{{ responsibilitiesItems3 }}</p>
          </div>
          <div
            class="responsibility-item"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <div class="responsibility-number">4</div>
            <p class="responsibility-text">{{ responsibilitiesItems4 }}</p>
          </div>
          <div
            class="responsibility-item"
            data-aos="fade-left"
            data-aos-delay="500"
          >
            <div class="responsibility-number">5</div>
            <p class="responsibility-text">{{ responsibilitiesItems5 }}</p>
          </div>
          <div
            class="responsibility-item"
            data-aos="fade-left"
            data-aos-delay="600"
          >
            <div class="responsibility-number">6</div>
            <p class="responsibility-text">{{ responsibilitiesItems6 }}</p>
          </div>
          <div
            class="responsibility-item"
            data-aos="fade-left"
            data-aos-delay="700"
          >
            <div class="responsibility-number">7</div>
            <p class="responsibility-text">{{ responsibilitiesItems7 }}</p>
          </div>
          <div
            class="responsibility-item"
            data-aos="fade-left"
            data-aos-delay="800"
          >
            <div class="responsibility-number">8</div>
            <p class="responsibility-text">{{ responsibilitiesItems8 }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Application Section -->
    <section class="application-section" id="application">
      <div class="container">
        <div class="application-grid">
          <!-- Application Form -->
          <div class="form-column" data-aos="fade-right">
            <div class="section-header">
              <h2 class="section-title">
                {{ applicationTitle }}
              </h2>
              <p class="section-description">
                {{ applicationSubtitle }}
              </p>
            </div>

            <div class="application-card">
              <h3 class="form-title">
                {{ formTitle }}
              </h3>

              <q-form @submit="onApplicationSubmit" class="application-form">
                <div class="form-row">
                  <div class="form-field">
                    <q-input
                      v-model="applicationForm.firstName"
                      :label="formFirstName"
                      outlined
                      class="form-input"
                      :rules="[(val) => !!val || requiredField]"
                    />
                  </div>
                  <div class="form-field">
                    <q-input
                      v-model="applicationForm.lastName"
                      :label="formLastName"
                      outlined
                      class="form-input"
                      :rules="[(val) => !!val || requiredField]"
                    />
                  </div>
                </div>

                <div class="form-field">
                  <q-input
                    v-model="applicationForm.email"
                    :label="formEmail"
                    type="email"
                    outlined
                    class="form-input"
                    :rules="[(val) => !!val || requiredField]"
                  />
                </div>

                <div class="form-field">
                  <q-input
                    v-model="applicationForm.phone"
                    :label="formPhone"
                    outlined
                    class="form-input"
                    :rules="[(val) => !!val || requiredField]"
                  />
                </div>

                <div class="form-field">
                  <q-input
                    v-model="applicationForm.experience"
                    :label="formExperience"
                    outlined
                    class="form-input"
                    :rules="[(val) => !!val || requiredField]"
                  />
                </div>

                <div class="form-field">
                  <q-input
                    v-model="applicationForm.equipment"
                    :label="formEquipment"
                    outlined
                    class="form-input"
                  />
                </div>

                <div class="form-field">
                  <q-input
                    v-model="applicationForm.message"
                    :label="formMessage"
                    type="textarea"
                    outlined
                    rows="4"
                    class="form-input"
                    :rules="[(val) => !!val || requiredField]"
                  />
                </div>

                <div class="form-field">
                  <q-file
                    v-model="applicationForm.resume"
                    :label="formResume"
                    outlined
                    accept=".pdf"
                    class="form-input"
                  />
                </div>

                <div class="form-field">
                  <q-checkbox
                    v-model="applicationForm.agreement"
                    :label="formAgreement"
                    class="form-checkbox"
                    :rules="[(val) => val || requiredField]"
                  />
                </div>

                <q-btn
                  type="submit"
                  :label="formSubmit"
                  class="submit-btn"
                  :loading="loading"
                  size="lg"
                />
              </q-form>
            </div>
          </div>

          <!-- Application Process -->
          <div class="process-column" data-aos="fade-left">
            <div class="section-header">
              <h2 class="section-title">
                {{ processTitle }}
              </h2>
            </div>

            <div class="process-card">
              <div class="process-steps">
                <div class="process-step">
                  <div class="step-number">1</div>
                  <div class="step-content">
                    <div class="step-icon">
                      <q-icon :name="processSteps1Icon" size="1.5rem" />
                    </div>
                    <h3 class="step-title">{{ processSteps1Title }}</h3>
                    <p class="step-description">
                      {{ processSteps1Description }}
                    </p>
                  </div>
                </div>
                <div class="process-step">
                  <div class="step-number">2</div>
                  <div class="step-content">
                    <div class="step-icon">
                      <q-icon :name="processSteps2Icon" size="1.5rem" />
                    </div>
                    <h3 class="step-title">{{ processSteps2Title }}</h3>
                    <p class="step-description">
                      {{ processSteps2Description }}
                    </p>
                  </div>
                </div>
                <div class="process-step">
                  <div class="step-number">3</div>
                  <div class="step-content">
                    <div class="step-icon">
                      <q-icon :name="processSteps3Icon" size="1.5rem" />
                    </div>
                    <h3 class="step-title">{{ processSteps3Title }}</h3>
                    <p class="step-description">
                      {{ processSteps3Description }}
                    </p>
                  </div>
                </div>
                <div class="process-step">
                  <div class="step-number">4</div>
                  <div class="step-content">
                    <div class="step-icon">
                      <q-icon :name="processSteps4Icon" size="1.5rem" />
                    </div>
                    <h3 class="step-title">{{ processSteps4Title }}</h3>
                    <p class="step-description">
                      {{ processSteps4Description }}
                    </p>
                  </div>
                </div>
                <div class="process-step">
                  <div class="step-number">5</div>
                  <div class="step-content">
                    <div class="step-icon">
                      <q-icon :name="processSteps5Icon" size="1.5rem" />
                    </div>
                    <h3 class="step-title">{{ processSteps5Title }}</h3>
                    <p class="step-description">
                      {{ processSteps5Description }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="faq-section">
      <div class="container">
        <div class="section-header text-center">
          <h2 class="section-title">{{ faqTitle }}</h2>
        </div>

        <div class="faq-list">
          <q-expansion-item
            :label="faqItems1Question"
            class="faq-item"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div class="faq-content">
              <p>{{ faqItems1Answer }}</p>
            </div>
          </q-expansion-item>
          <q-expansion-item
            :label="faqItems2Question"
            class="faq-item"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div class="faq-content">
              <p>{{ faqItems2Answer }}</p>
            </div>
          </q-expansion-item>
          <q-expansion-item
            :label="faqItems3Question"
            class="faq-item"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div class="faq-content">
              <p>{{ faqItems3Answer }}</p>
            </div>
          </q-expansion-item>
          <q-expansion-item
            :label="faqItems4Question"
            class="faq-item"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div class="faq-content">
              <p>{{ faqItems4Answer }}</p>
            </div>
          </q-expansion-item>
          <q-expansion-item
            :label="faqItems5Question"
            class="faq-item"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div class="faq-content">
              <p>{{ faqItems5Answer }}</p>
            </div>
          </q-expansion-item>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <AppFooter />
  </q-page>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useI18n } from "vue-i18n";
import AppFooter from "../../components/Footer.vue";

const { t } = useI18n();

// Reactive form data
const applicationForm = ref({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  experience: "",
  equipment: "",
  message: "",
  resume: null,
  agreement: false,
});

const loading = ref(false);

// Translation computed properties
// Hero translations
const heroBadge = computed(() => t("dockWorker.hero.badge"));
const heroTitle = computed(() => t("dockWorker.hero.title"));
const heroSubtitle = computed(() => t("dockWorker.hero.subtitle"));

// Overview translations
const overviewTitle = computed(() => t("dockWorker.overview.title"));
const overviewDescription = computed(() =>
  t("dockWorker.overview.description")
);
const overviewHighlights1 = computed(() =>
  t("dockWorker.overview.highlights.1")
);
const overviewHighlights2 = computed(() =>
  t("dockWorker.overview.highlights.2")
);
const overviewHighlights3 = computed(() =>
  t("dockWorker.overview.highlights.3")
);
const overviewHighlights4 = computed(() =>
  t("dockWorker.overview.highlights.4")
);
const overviewHighlights5 = computed(() =>
  t("dockWorker.overview.highlights.5")
);
const overviewHighlights6 = computed(() =>
  t("dockWorker.overview.highlights.6")
);
const overviewHighlights7 = computed(() =>
  t("dockWorker.overview.highlights.7")
);
const overviewHighlights8 = computed(() =>
  t("dockWorker.overview.highlights.8")
);

// Requirements translations
const requirementsTitle = computed(() => t("dockWorker.requirements.title"));
const requirementsDescription = computed(() =>
  t("dockWorker.requirements.description")
);
const requirementsItems1Icon = computed(() =>
  t("dockWorker.requirements.items.1.icon")
);
const requirementsItems1Title = computed(() =>
  t("dockWorker.requirements.items.1.title")
);
const requirementsItems1Description = computed(() =>
  t("dockWorker.requirements.items.1.description")
);
const requirementsItems2Icon = computed(() =>
  t("dockWorker.requirements.items.2.icon")
);
const requirementsItems2Title = computed(() =>
  t("dockWorker.requirements.items.2.title")
);
const requirementsItems2Description = computed(() =>
  t("dockWorker.requirements.items.2.description")
);
const requirementsItems3Icon = computed(() =>
  t("dockWorker.requirements.items.3.icon")
);
const requirementsItems3Title = computed(() =>
  t("dockWorker.requirements.items.3.title")
);
const requirementsItems3Description = computed(() =>
  t("dockWorker.requirements.items.3.description")
);
const requirementsItems4Icon = computed(() =>
  t("dockWorker.requirements.items.4.icon")
);
const requirementsItems4Title = computed(() =>
  t("dockWorker.requirements.items.4.title")
);
const requirementsItems4Description = computed(() =>
  t("dockWorker.requirements.items.4.description")
);
const requirementsItems5Icon = computed(() =>
  t("dockWorker.requirements.items.5.icon")
);
const requirementsItems5Title = computed(() =>
  t("dockWorker.requirements.items.5.title")
);
const requirementsItems5Description = computed(() =>
  t("dockWorker.requirements.items.5.description")
);
const requirementsItems6Icon = computed(() =>
  t("dockWorker.requirements.items.6.icon")
);
const requirementsItems6Title = computed(() =>
  t("dockWorker.requirements.items.6.title")
);
const requirementsItems6Description = computed(() =>
  t("dockWorker.requirements.items.6.description")
);

// Benefits translations
const benefitsTitle = computed(() => t("dockWorker.benefits.title"));
const benefitsDescription = computed(() =>
  t("dockWorker.benefits.description")
);
const benefitsCategories1 = computed(() =>
  t("dockWorker.benefits.categories.1")
);
const benefitsCategories2 = computed(() =>
  t("dockWorker.benefits.categories.2")
);
const benefitsCategories3 = computed(() =>
  t("dockWorker.benefits.categories.3")
);
const benefitsCategories4 = computed(() =>
  t("dockWorker.benefits.categories.4")
);
const benefitsCategories5 = computed(() =>
  t("dockWorker.benefits.categories.5")
);
const benefitsCategories6 = computed(() =>
  t("dockWorker.benefits.categories.6")
);
const benefitsCategories7 = computed(() =>
  t("dockWorker.benefits.categories.7")
);
const benefitsCategories8 = computed(() =>
  t("dockWorker.benefits.categories.8")
);
const benefitsCategories9 = computed(() =>
  t("dockWorker.benefits.categories.9")
);
const benefitsCategories10 = computed(() =>
  t("dockWorker.benefits.categories.10")
);
const benefitsCategories11 = computed(() =>
  t("dockWorker.benefits.categories.11")
);
const benefitsCategories12 = computed(() =>
  t("dockWorker.benefits.categories.12")
);
const benefitsCategories13 = computed(() =>
  t("dockWorker.benefits.categories.13")
);
const benefitsCategories14 = computed(() =>
  t("dockWorker.benefits.categories.14")
);
const benefitsCategories15 = computed(() =>
  t("dockWorker.benefits.categories.15")
);
const benefitsCategories16 = computed(() =>
  t("dockWorker.benefits.categories.16")
);

// Responsibilities translations
const responsibilitiesTitle = computed(() =>
  t("dockWorker.responsibilities.title")
);
const responsibilitiesDescription = computed(() =>
  t("dockWorker.responsibilities.description")
);
const responsibilitiesItems1 = computed(() =>
  t("dockWorker.responsibilities.items.1")
);
const responsibilitiesItems2 = computed(() =>
  t("dockWorker.responsibilities.items.2")
);
const responsibilitiesItems3 = computed(() =>
  t("dockWorker.responsibilities.items.3")
);
const responsibilitiesItems4 = computed(() =>
  t("dockWorker.responsibilities.items.4")
);
const responsibilitiesItems5 = computed(() =>
  t("dockWorker.responsibilities.items.5")
);
const responsibilitiesItems6 = computed(() =>
  t("dockWorker.responsibilities.items.6")
);
const responsibilitiesItems7 = computed(() =>
  t("dockWorker.responsibilities.items.7")
);
const responsibilitiesItems8 = computed(() =>
  t("dockWorker.responsibilities.items.8")
);

// Application translations
const applicationTitle = computed(() => t("dockWorker.application.title"));
const applicationSubtitle = computed(() =>
  t("dockWorker.application.subtitle")
);
const formTitle = computed(() => t("dockWorker.application.form.title"));
const formFirstName = computed(() =>
  t("dockWorker.application.form.firstName")
);
const formLastName = computed(() => t("dockWorker.application.form.lastName"));
const formEmail = computed(() => t("dockWorker.application.form.email"));
const formPhone = computed(() => t("dockWorker.application.form.phone"));
const formExperience = computed(() =>
  t("dockWorker.application.form.experience")
);
const formEquipment = computed(() =>
  t("dockWorker.application.form.equipment")
);
const formMessage = computed(() => t("dockWorker.application.form.message"));
const formResume = computed(() => t("dockWorker.application.form.resume"));
const formSubmit = computed(() => t("dockWorker.application.form.submit"));
const formAgreement = computed(() =>
  t("dockWorker.application.form.agreement")
);

// Process translations
const processTitle = computed(() => t("dockWorker.application.process.title"));
const processSteps1Icon = computed(() =>
  t("dockWorker.application.process.steps.1.icon")
);
const processSteps1Title = computed(() =>
  t("dockWorker.application.process.steps.1.title")
);
const processSteps1Description = computed(() =>
  t("dockWorker.application.process.steps.1.description")
);
const processSteps2Icon = computed(() =>
  t("dockWorker.application.process.steps.2.icon")
);
const processSteps2Title = computed(() =>
  t("dockWorker.application.process.steps.2.title")
);
const processSteps2Description = computed(() =>
  t("dockWorker.application.process.steps.2.description")
);
const processSteps3Icon = computed(() =>
  t("dockWorker.application.process.steps.3.icon")
);
const processSteps3Title = computed(() =>
  t("dockWorker.application.process.steps.3.title")
);
const processSteps3Description = computed(() =>
  t("dockWorker.application.process.steps.3.description")
);
const processSteps4Icon = computed(() =>
  t("dockWorker.application.process.steps.4.icon")
);
const processSteps4Title = computed(() =>
  t("dockWorker.application.process.steps.4.title")
);
const processSteps4Description = computed(() =>
  t("dockWorker.application.process.steps.4.description")
);
const processSteps5Icon = computed(() =>
  t("dockWorker.application.process.steps.5.icon")
);
const processSteps5Title = computed(() =>
  t("dockWorker.application.process.steps.5.title")
);
const processSteps5Description = computed(() =>
  t("dockWorker.application.process.steps.5.description")
);

// FAQ translations
const faqTitle = computed(() => t("dockWorker.faq.title"));
const faqItems1Question = computed(() => t("dockWorker.faq.items.1.question"));
const faqItems1Answer = computed(() => t("dockWorker.faq.items.1.answer"));
const faqItems2Question = computed(() => t("dockWorker.faq.items.2.question"));
const faqItems2Answer = computed(() => t("dockWorker.faq.items.2.answer"));
const faqItems3Question = computed(() => t("dockWorker.faq.items.3.question"));
const faqItems3Answer = computed(() => t("dockWorker.faq.items.3.answer"));
const faqItems4Question = computed(() => t("dockWorker.faq.items.4.question"));
const faqItems4Answer = computed(() => t("dockWorker.faq.items.4.answer"));
const faqItems5Question = computed(() => t("dockWorker.faq.items.5.question"));
const faqItems5Answer = computed(() => t("dockWorker.faq.items.5.answer"));

// Form validation
const requiredField = computed(() => t("dockWorker.forms.required"));

// Methods
const scrollToApplication = () => {
  const element = document.getElementById("application");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const onApplicationSubmit = async () => {
  loading.value = true;

  // Simulate form submission
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // Show success message
  console.log("Application submitted:", applicationForm.value);

  // Reset form
  applicationForm.value = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    experience: "",
    equipment: "",
    message: "",
    resume: null,
    agreement: false,
  };

  loading.value = false;

  // Show success notification
  console.log(t("dockWorker.messages.formSubmitted"));
};

// Initialize AOS on mount
onMounted(() => {
  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }

  // Set page title dynamically
  document.title = t("dockWorker.hero.title") + " - Emi's Nest";
});
</script>

<style scoped>
/* Hero Section */
.hero-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(
    135deg,
    var(--dermiqt-dark-brown) 0%,
    var(--dermiqt-brown) 100%
  );
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(60, 42, 33, 0.7);
  z-index: 2;
}

.floating-elements {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
}

.floating-icon {
  position: absolute;
  color: var(--dermiqt-yellow);
  opacity: 0.3;
  animation: float 6s ease-in-out infinite;
  animation-delay: var(--delay);
}

.floating-icon:nth-child(1) {
  top: 20%;
  left: 10%;
}

.floating-icon:nth-child(2) {
  top: 60%;
  right: 15%;
}

.floating-icon:nth-child(3) {
  bottom: 30%;
  left: 20%;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(180deg);
  }
}

.hero-content {
  position: relative;
  z-index: 3;
  width: 100%;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--dermiqt-yellow);
  color: var(--dermiqt-dark-brown);
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.9rem;
  margin-bottom: 2rem;
}

.hero-title {
  font-size: 4rem;
  font-weight: 700;
  color: var(--dermiqt-white);
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.hero-description {
  font-size: 1.25rem;
  color: var(--dermiqt-white);
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  opacity: 0.9;
}

.hero-cta {
  margin-top: 2rem;
}

.cta-primary {
  background: var(--dermiqt-yellow) !important;
  color: var(--dermiqt-dark-brown) !important;
  font-weight: 600;
  padding: 1rem 2rem;
  border-radius: 50px;
  transition: all 0.3s ease;
}

.cta-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(212, 175, 55, 0.3);
}

/* Container */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Section Styles */
.section-header {
  margin-bottom: 4rem;
}

.section-title {
  font-size: 3rem;
  font-weight: 700;
  color: var(--dermiqt-dark-brown);
  margin-bottom: 1rem;
  line-height: 1.2;
}

.section-description {
  font-size: 1.125rem;
  color: var(--dermiqt-brown);
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
}

/* Overview Section */
.overview-section {
  padding: 6rem 0;
  background: var(--dermiqt-white);
}

.highlights-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.highlight-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background: var(--dermiqt-white);
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(60, 42, 33, 0.1);
  border: 1px solid rgba(212, 175, 55, 0.1);
  transition: all 0.3s ease;
}

.highlight-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(60, 42, 33, 0.15);
}

.highlight-icon {
  color: var(--dermiqt-yellow);
  flex-shrink: 0;
}

.highlight-text {
  color: var(--dermiqt-dark-brown);
  font-weight: 500;
  line-height: 1.5;
  margin: 0;
}

/* Requirements Section */
.requirements-section {
  padding: 6rem 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
}

.requirements-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.requirement-card {
  background: var(--dermiqt-white);
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(60, 42, 33, 0.1);
  border: 1px solid rgba(212, 175, 55, 0.1);
  text-align: center;
  transition: all 0.3s ease;
}

.requirement-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(60, 42, 33, 0.15);
}

.requirement-icon {
  color: var(--dermiqt-yellow);
  margin-bottom: 1.5rem;
}

.requirement-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--dermiqt-dark-brown);
  margin-bottom: 1rem;
}

.requirement-description {
  color: var(--dermiqt-brown);
  line-height: 1.6;
  margin: 0;
}

/* Benefits Section */
.benefits-section {
  padding: 6rem 0;
  background: var(--dermiqt-white);
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.benefit-category {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background: var(--dermiqt-white);
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(60, 42, 33, 0.1);
  border: 1px solid rgba(212, 175, 55, 0.1);
  transition: all 0.3s ease;
}

.benefit-category:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 25px rgba(60, 42, 33, 0.15);
}

.benefit-icon {
  color: var(--dermiqt-yellow);
  flex-shrink: 0;
}

.benefit-text {
  color: var(--dermiqt-dark-brown);
  font-weight: 500;
  line-height: 1.5;
  margin: 0;
}

/* Responsibilities Section */
.responsibilities-section {
  padding: 6rem 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
}

.responsibilities-list {
  max-width: 800px;
  margin: 0 auto;
}

.responsibility-item {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  padding: 1.5rem;
  background: var(--dermiqt-white);
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(60, 42, 33, 0.1);
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;
}

.responsibility-item:hover {
  transform: translateX(10px);
  box-shadow: 0 6px 25px rgba(60, 42, 33, 0.15);
}

.responsibility-number {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  background: var(--dermiqt-yellow);
  color: var(--dermiqt-dark-brown);
  border-radius: 50%;
  font-weight: 700;
  font-size: 1.25rem;
  flex-shrink: 0;
}

.responsibility-text {
  color: var(--dermiqt-dark-brown);
  line-height: 1.6;
  margin: 0;
  font-size: 1.1rem;
}

/* Application Section */
.application-section {
  padding: 6rem 0;
  background: var(--dermiqt-white);
}

.application-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
}

.form-column {
  order: 1;
}

.process-column {
  order: 2;
}

.application-card {
  background: var(--dermiqt-white);
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(60, 42, 33, 0.1);
  border: 1px solid rgba(212, 175, 55, 0.1);
}

.form-title {
  font-size: 1.75rem;
  font-weight: 600;
  color: var(--dermiqt-dark-brown);
  margin-bottom: 2rem;
  text-align: center;
}

.application-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.form-field {
  display: flex;
  flex-direction: column;
}

.form-input {
  width: 100%;
}

.form-checkbox {
  margin-top: 1rem;
}

.submit-btn {
  background: var(--dermiqt-yellow) !important;
  color: var(--dermiqt-dark-brown) !important;
  font-weight: 600;
  padding: 1rem 2rem;
  border-radius: 50px;
  margin-top: 1rem;
  transition: all 0.3s ease;
}

.submit-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(212, 175, 55, 0.3);
}

/* Process Card */
.process-card {
  background: var(--dermiqt-white);
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(60, 42, 33, 0.1);
  border: 1px solid rgba(212, 175, 55, 0.1);
}

.process-steps {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.process-step {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
}

.step-number {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  background: var(--dermiqt-yellow);
  color: var(--dermiqt-dark-brown);
  border-radius: 50%;
  font-weight: 700;
  font-size: 1.25rem;
  flex-shrink: 0;
}

.step-content {
  flex: 1;
}

.step-icon {
  color: var(--dermiqt-yellow);
  margin-bottom: 0.5rem;
}

.step-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--dermiqt-dark-brown);
  margin-bottom: 0.5rem;
}

.step-description {
  color: var(--dermiqt-brown);
  line-height: 1.6;
  margin: 0;
}

/* FAQ Section */
.faq-section {
  padding: 6rem 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
}

.faq-list {
  max-width: 800px;
  margin: 0 auto;
}

.faq-item {
  background: var(--dermiqt-white);
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(60, 42, 33, 0.1);
  margin-bottom: 1rem;
  border: 1px solid rgba(212, 175, 55, 0.1);
  overflow: hidden;
}

.faq-content {
  padding: 1.5rem;
  color: var(--dermiqt-brown);
  line-height: 1.6;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .hero-description {
    font-size: 1.1rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .application-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .form-column {
    order: 2;
  }

  .process-column {
    order: 1;
  }

  .form-row {
    grid-template-columns: 1fr;
  }

  .requirements-grid {
    grid-template-columns: 1fr;
  }

  .highlights-grid {
    grid-template-columns: 1fr;
  }

  .benefits-grid {
    grid-template-columns: 1fr;
  }

  .container {
    padding: 0 1rem;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2rem;
  }

  .section-title {
    font-size: 1.75rem;
  }

  .requirement-card,
  .application-card,
  .process-card {
    padding: 1.5rem;
  }

  .responsibility-item {
    flex-direction: column;
    text-align: center;
  }

  .responsibility-number {
    align-self: center;
  }
}
</style>
