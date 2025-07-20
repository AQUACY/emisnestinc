<template>
  <q-page>
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-background">
        <div class="hero-overlay"></div>
        <div class="floating-elements">
          <div class="floating-icon" style="--delay: 0s">
            <q-icon name="phone" size="2rem" />
          </div>
          <div class="floating-icon" style="--delay: 2s">
            <q-icon name="email" size="1.5rem" />
          </div>
          <div class="floating-icon" style="--delay: 4s">
            <q-icon name="location_on" size="1.8rem" />
          </div>
        </div>
      </div>

      <div class="hero-content">
        <div class="container">
          <div class="text-center">
            <div class="hero-badge">
              <q-icon name="contact_support" size="2rem" />
              <span>{{ $t("contact.hero.title") }}</span>
            </div>
            <h1 class="hero-title">{{ $t("contact.hero.title") }}</h1>
            <p class="hero-description">{{ $t("contact.hero.subtitle") }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Information Section -->
    <section class="contact-info-section">
      <div class="container">
        <div class="info-grid">
          <div class="info-card" data-aos="fade-up" data-aos-delay="100">
            <div class="card-icon">
              <q-icon name="phone" size="2.5rem" />
            </div>
            <h3 class="card-title">{{ $t("contact.info.phone.title") }}</h3>
            <p class="card-subtitle">{{ $t("contact.info.phone.main") }}</p>
            <p class="card-highlight">{{ $t("contact.info.phone.number") }}</p>
            <p class="card-description">
              {{ $t("contact.info.phone.description") }}
            </p>
          </div>

          <div class="info-card" data-aos="fade-up" data-aos-delay="200">
            <div class="card-icon">
              <q-icon name="email" size="2.5rem" />
            </div>
            <h3 class="card-title">{{ $t("contact.info.email.title") }}</h3>
            <p class="card-subtitle">{{ $t("contact.info.email.main") }}</p>
            <p class="card-highlight">{{ $t("contact.info.email.address") }}</p>
            <p class="card-description">
              {{ $t("contact.info.email.description") }}
            </p>
          </div>

          <div class="info-card" data-aos="fade-up" data-aos-delay="300">
            <div class="card-icon">
              <q-icon name="location_on" size="2.5rem" />
            </div>
            <h3 class="card-title">{{ $t("contact.info.office.title") }}</h3>
            <p class="card-subtitle">{{ $t("contact.info.office.main") }}</p>
            <p class="card-highlight">
              {{ $t("contact.info.office.address") }}
            </p>
            <p class="card-description">
              {{ $t("contact.info.office.details") }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Form & Office Info Section -->
    <section class="contact-form-section">
      <div class="container">
        <div class="form-grid">
          <!-- Contact Form -->
          <div class="form-column" data-aos="fade-right">
            <div class="section-header">
              <h2 class="section-title">{{ $t("contact.form.title") }}</h2>
              <p class="section-description">
                {{ $t("contact.form.subtitle") }}
              </p>
            </div>

            <div class="form-card">
              <q-form @submit="onContactSubmit" class="contact-form">
                <div class="form-row">
                  <div class="form-field">
                    <q-input
                      v-model="contactForm.firstName"
                      :label="$t('contact.form.firstName')"
                      outlined
                      class="form-input"
                      :rules="[(val) => !!val || $t('forms.required')]"
                    />
                  </div>
                  <div class="form-field">
                    <q-input
                      v-model="contactForm.lastName"
                      :label="$t('contact.form.lastName')"
                      outlined
                      class="form-input"
                      :rules="[(val) => !!val || $t('forms.required')]"
                    />
                  </div>
                </div>

                <div class="form-field">
                  <q-input
                    v-model="contactForm.email"
                    :label="$t('contact.form.email')"
                    type="email"
                    outlined
                    class="form-input"
                    :rules="[(val) => !!val || $t('forms.required')]"
                  />
                </div>

                <div class="form-field">
                  <q-input
                    v-model="contactForm.phone"
                    :label="$t('contact.form.phone')"
                    outlined
                    class="form-input"
                    :rules="[(val) => !!val || $t('forms.required')]"
                  />
                </div>

                <div class="form-field">
                  <q-select
                    v-model="contactForm.subject"
                    :options="subjectOptions"
                    :label="$t('contact.form.subject')"
                    outlined
                    class="form-input"
                    :rules="[(val) => !!val || $t('forms.required')]"
                  />
                </div>

                <div class="form-field">
                  <q-input
                    v-model="contactForm.message"
                    :label="$t('contact.form.message')"
                    type="textarea"
                    outlined
                    rows="5"
                    class="form-input"
                    :rules="[(val) => !!val || $t('forms.required')]"
                  />
                </div>

                <div class="form-field">
                  <q-checkbox
                    v-model="contactForm.agreement"
                    :label="$t('contact.form.agreement')"
                    class="form-checkbox"
                    :rules="[(val) => val || $t('forms.required')]"
                  />
                </div>

                <q-btn
                  type="submit"
                  :label="$t('contact.form.submit')"
                  class="submit-btn"
                  :loading="loading"
                  size="lg"
                />
              </q-form>
            </div>
          </div>

          <!-- Office Information -->
          <div class="office-column" data-aos="fade-left">
            <div class="section-header">
              <h2 class="section-title">{{ $t("contact.office.title") }}</h2>
              <p class="section-description">
                {{ $t("contact.office.subtitle") }}
              </p>
            </div>

            <div class="office-card">
              <!-- Office Hours -->
              <div class="office-section">
                <h3 class="office-section-title">
                  {{ $t("contact.office.hours.title") }}
                </h3>
                <div class="hours-list">
                  <div class="hours-item">
                    <span class="day">{{
                      $t("contact.office.hours.weekdays")
                    }}</span>
                    <span class="time">{{
                      $t("contact.office.hours.weekdaysTime")
                    }}</span>
                  </div>
                  <div class="hours-item">
                    <span class="day">{{
                      $t("contact.office.hours.saturday")
                    }}</span>
                    <span class="time">{{
                      $t("contact.office.hours.saturdayTime")
                    }}</span>
                  </div>
                  <div class="hours-item">
                    <span class="day">{{
                      $t("contact.office.hours.sunday")
                    }}</span>
                    <span class="time">{{
                      $t("contact.office.hours.sundayTime")
                    }}</span>
                  </div>
                </div>
              </div>

              <!-- Address -->
              <div class="office-section">
                <h3 class="office-section-title">
                  {{ $t("contact.office.address.title") }}
                </h3>
                <div class="address-block">
                  <p class="address-line">
                    {{ $t("contact.office.address.line1") }}
                  </p>
                  <p class="address-line">
                    {{ $t("contact.office.address.line2") }}
                  </p>
                  <p class="address-line">
                    {{ $t("contact.office.address.line3") }}
                  </p>
                  <p class="address-line">
                    {{ $t("contact.office.address.line4") }}
                  </p>
                </div>
              </div>

              <!-- Directions -->
              <div class="office-section">
                <h3 class="office-section-title">
                  {{ $t("contact.office.directions.title") }}
                </h3>
                <p class="directions-text">
                  {{ $t("contact.office.directions.description") }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Map Section -->
    <section class="map-section">
      <div class="container">
        <div class="section-header text-center">
          <h2 class="section-title">{{ $t("contact.map.title") }}</h2>
          <p class="section-description">{{ $t("contact.map.subtitle") }}</p>
        </div>

        <div class="map-card">
          <div class="map-container">
            <div class="map-placeholder">
              <q-icon name="map" size="4rem" />
              <h3 class="map-title">{{ $t("contact.map.placeholder") }}</h3>
              <p class="map-description">{{ $t("contact.map.description") }}</p>
              <q-btn
                :label="$t('contact.map.directions')"
                class="map-btn"
                @click="getDirections"
                size="lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Emergency Contact Section -->
    <section class="emergency-section">
      <div class="container">
        <div class="emergency-content">
          <div class="emergency-header">
            <div class="emergency-icon">
              <q-icon name="emergency" size="3rem" />
            </div>
            <h2 class="emergency-title">{{ $t("contact.emergency.title") }}</h2>
            <p class="emergency-subtitle">
              {{ $t("contact.emergency.subtitle") }}
            </p>
          </div>

          <div class="emergency-card">
            <div class="emergency-info">
              <h3 class="emergency-line-title">
                {{ $t("contact.emergency.line") }}
              </h3>
              <p class="emergency-number">
                {{ $t("contact.emergency.number") }}
              </p>
              <p class="emergency-description">
                {{ $t("contact.emergency.description") }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Social Media Section -->
    <section class="social-section">
      <div class="container">
        <div class="section-header text-center">
          <h2 class="section-title">{{ $t("contact.social.title") }}</h2>
          <p class="section-description">{{ $t("contact.social.subtitle") }}</p>
        </div>

        <div class="social-grid">
          <div class="social-card" data-aos="fade-up" data-aos-delay="100">
            <q-icon name="facebook" size="3rem" class="social-icon" />
            <h3 class="social-title">
              {{ $t("contact.social.platforms.facebook.name") }}
            </h3>
            <p class="social-description">
              {{ $t("contact.social.platforms.facebook.description") }}
            </p>
          </div>

          <div class="social-card" data-aos="fade-up" data-aos-delay="200">
            <q-icon name="twitter" size="3rem" class="social-icon" />
            <h3 class="social-title">
              {{ $t("contact.social.platforms.twitter.name") }}
            </h3>
            <p class="social-description">
              {{ $t("contact.social.platforms.twitter.description") }}
            </p>
          </div>

          <div class="social-card" data-aos="fade-up" data-aos-delay="300">
            <q-icon name="instagram" size="3rem" class="social-icon" />
            <h3 class="social-title">
              {{ $t("contact.social.platforms.instagram.name") }}
            </h3>
            <p class="social-description">
              {{ $t("contact.social.platforms.instagram.description") }}
            </p>
          </div>

          <div class="social-card" data-aos="fade-up" data-aos-delay="400">
            <q-icon name="linkedin" size="3rem" class="social-icon" />
            <h3 class="social-title">
              {{ $t("contact.social.platforms.linkedin.name") }}
            </h3>
            <p class="social-description">
              {{ $t("contact.social.platforms.linkedin.description") }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <AppFooter />
  </q-page>
</template>

<script>
import { ref } from "vue";
import { useQuasar } from "quasar";
import { useI18n } from "vue-i18n";
import AppFooter from "components/Footer.vue";

export default {
  name: "ContactPage",
  components: {
    AppFooter,
  },
  setup() {
    const $q = useQuasar();
    const { t } = useI18n();
    const loading = ref(false);

    const contactForm = ref({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      agreement: false,
    });

    const subjectOptions = [
      t("contact.form.subjects.general"),
      t("contact.form.subjects.quote"),
      t("contact.form.subjects.service"),
      t("contact.form.subjects.complaint"),
      t("contact.form.subjects.partnership"),
      t("contact.form.subjects.other"),
    ];

    const onContactSubmit = () => {
      loading.value = true;

      // Simulate form submission
      setTimeout(() => {
        loading.value = false;
        $q.notify({
          type: "positive",
          message: t("messages.formSubmitted"),
          position: "top",
        });

        // Reset form
        contactForm.value = {
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
          agreement: false,
        };
      }, 2000);
    };

    const getDirections = () => {
      // In a real application, this would open Google Maps or similar
      $q.notify({
        type: "info",
        message: t("contact.map.directions") + "...",
        position: "top",
      });
    };

    return {
      loading,
      contactForm,
      subjectOptions,
      onContactSubmit,
      getDirections,
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
  justify-content: center;
  background: linear-gradient(
    135deg,
    var(--dermiqt-dark-brown) 0%,
    var(--dermiqt-dark-gray) 100%
  );
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    var(--dermiqt-dark-brown) 0%,
    var(--dermiqt-dark-gray) 100%
  );
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(60, 42, 33, 0.8);
}

.floating-elements {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
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
    transform: translateY(-20px) rotate(5deg);
  }
}

.hero-content {
  position: relative;
  z-index: 2;
  width: 100%;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(212, 175, 55, 0.2);
  color: var(--dermiqt-yellow);
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  color: var(--dermiqt-white);
  margin-bottom: 1.5rem;
  font-family: "Inter", "Roboto", sans-serif;
  letter-spacing: -0.02em;
}

.hero-description {
  font-size: 1.25rem;
  color: var(--dermiqt-light-beige);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

/* Container */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Contact Info Section */
.contact-info-section {
  padding: 5rem 0;
  background: var(--dermiqt-light-beige);
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.info-card {
  background: var(--dermiqt-white);
  padding: 2.5rem;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 4px 20px rgba(60, 42, 33, 0.1);
  border: 1px solid rgba(212, 175, 55, 0.1);
  transition: all 0.3s ease;
}

.info-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 30px rgba(60, 42, 33, 0.15);
}

.card-icon {
  color: var(--dermiqt-yellow);
  margin-bottom: 1.5rem;
}

.card-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--dermiqt-dark-brown);
  margin-bottom: 0.5rem;
}

.card-subtitle {
  font-size: 1rem;
  color: var(--dermiqt-medium-gray);
  margin-bottom: 0.5rem;
}

.card-highlight {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--dermiqt-yellow);
  margin-bottom: 1rem;
}

.card-description {
  font-size: 0.875rem;
  color: var(--dermiqt-medium-gray);
  line-height: 1.5;
}

/* Contact Form Section */
.contact-form-section {
  padding: 5rem 0;
  background: var(--dermiqt-white);
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
}

.section-header {
  margin-bottom: 2rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--dermiqt-dark-brown);
  margin-bottom: 1rem;
  font-family: "Inter", "Roboto", sans-serif;
  letter-spacing: -0.02em;
}

.section-description {
  font-size: 1.125rem;
  color: var(--dermiqt-medium-gray);
  line-height: 1.6;
}

.form-card,
.office-card {
  background: var(--dermiqt-light-beige);
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(60, 42, 33, 0.1);
  border: 1px solid rgba(212, 175, 55, 0.1);
}

.contact-form {
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
  width: 100%;
}

.form-input {
  width: 100%;
}

.form-input :deep(.q-field__control) {
  background: var(--dermiqt-white);
  border-radius: 8px;
}

.form-input :deep(.q-field__native) {
  color: var(--dermiqt-dark-brown);
}

.form-checkbox {
  color: var(--dermiqt-dark-brown);
}

.submit-btn {
  background: linear-gradient(
    135deg,
    var(--dermiqt-yellow),
    var(--dermiqt-orange)
  ) !important;
  color: var(--dermiqt-dark-brown) !important;
  border: none !important;
  font-weight: 600 !important;
  text-transform: uppercase !important;
  letter-spacing: 0.5px !important;
  border-radius: 12px !important;
  padding: 12px 32px !important;
  transition: all 0.3s ease !important;
  box-shadow: 0 4px 12px rgba(212, 175, 55, 0.3) !important;
}

.submit-btn:hover {
  transform: translateY(-2px) !important;
  box-shadow: 0 8px 20px rgba(212, 175, 55, 0.4) !important;
}

/* Office Information */
.office-section {
  margin-bottom: 2rem;
}

.office-section:last-child {
  margin-bottom: 0;
}

.office-section-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--dermiqt-dark-brown);
  margin-bottom: 1rem;
}

.hours-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.hours-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0;
  border-bottom: 1px solid rgba(212, 175, 55, 0.2);
}

.hours-item:last-child {
  border-bottom: none;
}

.day {
  font-weight: 500;
  color: var(--dermiqt-dark-brown);
}

.time {
  font-weight: 600;
  color: var(--dermiqt-yellow);
}

.address-block {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.address-line {
  color: var(--dermiqt-dark-brown);
  line-height: 1.5;
}

.directions-text {
  color: var(--dermiqt-medium-gray);
  line-height: 1.6;
}

/* Map Section */
.map-section {
  padding: 5rem 0;
  background: var(--dermiqt-light-beige);
}

.map-card {
  background: var(--dermiqt-white);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(60, 42, 33, 0.1);
}

.map-container {
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    135deg,
    var(--dermiqt-light-beige),
    var(--dermiqt-white)
  );
}

.map-placeholder {
  text-align: center;
  color: var(--dermiqt-medium-gray);
}

.map-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 1rem 0 0.5rem;
  color: var(--dermiqt-dark-brown);
}

.map-description {
  margin-bottom: 2rem;
  line-height: 1.5;
}

.map-btn {
  background: linear-gradient(
    135deg,
    var(--dermiqt-yellow),
    var(--dermiqt-orange)
  ) !important;
  color: var(--dermiqt-dark-brown) !important;
  border: none !important;
  font-weight: 600 !important;
  text-transform: uppercase !important;
  letter-spacing: 0.5px !important;
  border-radius: 12px !important;
  padding: 12px 32px !important;
  transition: all 0.3s ease !important;
  box-shadow: 0 4px 12px rgba(212, 175, 55, 0.3) !important;
}

.map-btn:hover {
  transform: translateY(-2px) !important;
  box-shadow: 0 8px 20px rgba(212, 175, 55, 0.4) !important;
}

/* Emergency Section */
.emergency-section {
  padding: 5rem 0;
  background: linear-gradient(
    135deg,
    var(--dermiqt-dark-brown),
    var(--dermiqt-dark-gray)
  );
  color: var(--dermiqt-white);
}

.emergency-content {
  text-align: center;
}

.emergency-header {
  margin-bottom: 3rem;
}

.emergency-icon {
  color: var(--dermiqt-yellow);
  margin-bottom: 1.5rem;
}

.emergency-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  font-family: "Inter", "Roboto", sans-serif;
  letter-spacing: -0.02em;
}

.emergency-subtitle {
  font-size: 1.125rem;
  color: var(--dermiqt-light-beige);
  line-height: 1.6;
}

.emergency-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 2.5rem;
  border: 1px solid rgba(212, 175, 55, 0.2);
  max-width: 500px;
  margin: 0 auto;
}

.emergency-line-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--dermiqt-yellow);
}

.emergency-number {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--dermiqt-white);
}

.emergency-description {
  font-size: 1rem;
  color: var(--dermiqt-light-beige);
  line-height: 1.5;
}

/* Social Section */
.social-section {
  padding: 5rem 0;
  background: var(--dermiqt-white);
}

.social-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.social-card {
  background: var(--dermiqt-light-beige);
  padding: 2.5rem;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 4px 20px rgba(60, 42, 33, 0.1);
  border: 1px solid rgba(212, 175, 55, 0.1);
  transition: all 0.3s ease;
}

.social-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 30px rgba(60, 42, 33, 0.15);
}

.social-icon {
  color: var(--dermiqt-yellow);
  margin-bottom: 1.5rem;
}

.social-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--dermiqt-dark-brown);
  margin-bottom: 0.5rem;
}

.social-description {
  font-size: 0.875rem;
  color: var(--dermiqt-medium-gray);
  line-height: 1.5;
}

/* Responsive Design */
@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-description {
    font-size: 1rem;
  }

  .form-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .form-row {
    grid-template-columns: 1fr;
  }

  .section-title {
    font-size: 2rem;
  }

  .info-grid {
    grid-template-columns: 1fr;
  }

  .social-grid {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }

  .emergency-title {
    font-size: 2rem;
  }

  .emergency-number {
    font-size: 1.5rem;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2rem;
  }

  .section-title {
    font-size: 1.75rem;
  }

  .form-card,
  .office-card,
  .info-card,
  .social-card {
    padding: 1.5rem;
  }

  .emergency-card {
    padding: 1.5rem;
  }
}
</style>
