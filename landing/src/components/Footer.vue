<template>
  <footer class="footer-modern">
    <div class="container">
      <!-- Main Footer Content -->
      <div class="footer-main">
        <!-- Company Info Section -->
        <div class="footer-company">
          <div class="company-brand">
            <div class="brand-logo">
              <img
                src="../assets/emisnest-logo.png"
                alt="Emi's Nest"
                class="logo-image"
              />
            </div>
            <div class="brand-info">
              <h3 class="company-name">{{ $t("footer.company.name") }}</h3>
              <p class="company-tagline">{{ $t("footer.company.tagline") }}</p>
            </div>
          </div>

          <p class="company-description">
            {{ $t("footer.company.description") }}
          </p>

          <!-- Contact Info -->
          <div class="contact-info">
            <div class="contact-item">
              <q-icon name="phone" size="1rem" />
              <span>{{ $t("footer.contact.phone") }}</span>
            </div>
            <div class="contact-item">
              <q-icon name="email" size="1rem" />
              <span>{{ $t("footer.contact.email") }}</span>
            </div>
            <div class="contact-item">
              <q-icon name="location_on" size="1rem" />
              <span>{{ $t("footer.contact.address") }}</span>
            </div>
          </div>

          <!-- Social Media -->
          <div class="social-links">
            <h4 class="social-title">{{ $t("footer.social.title") }}</h4>
            <div class="social-icons">
              <a href="#" class="social-icon">
                <q-icon :name="socialPlatform1Icon" size="1.25rem" />
              </a>
              <a href="#" class="social-icon">
                <q-icon :name="socialPlatform2Icon" size="1.25rem" />
              </a>
              <a href="#" class="social-icon">
                <q-icon :name="socialPlatform3Icon" size="1.25rem" />
              </a>
              <a href="#" class="social-icon">
                <q-icon :name="socialPlatform4Icon" size="1.25rem" />
              </a>
            </div>
          </div>
        </div>

        <!-- Quick Links Section -->
        <div class="footer-links">
          <div class="links-column">
            <h4 class="column-title">
              {{ $t("footer.links.services.title") }}
            </h4>
            <a href="#" class="footer-link">{{ servicesLink1 }}</a>
            <a href="#" class="footer-link">{{ servicesLink2 }}</a>
            <a href="#" class="footer-link">{{ servicesLink3 }}</a>
            <a href="#" class="footer-link">{{ servicesLink4 }}</a>
          </div>

          <div class="links-column">
            <h4 class="column-title">{{ $t("footer.links.company.title") }}</h4>
            <a href="/about" class="footer-link">{{ companyLink1 }}</a>
            <a href="/careers/driver" class="footer-link">{{ companyLink2 }}</a>
            <a href="/news" class="footer-link">{{ companyLink3 }}</a>
          </div>

          <div class="links-column">
            <h4 class="column-title">{{ $t("footer.links.support.title") }}</h4>
            <a href="/customer-service" class="footer-link">{{
              supportLink3
            }}</a>
            <a href="/contact" class="footer-link">{{ supportLink4 }}</a>
          </div>

          <div class="links-column">
            <h4 class="column-title">{{ $t("footer.links.legal.title") }}</h4>
            <a href="/legal/privacy-policy" class="footer-link">{{
              legalLink1
            }}</a>
            <a href="/legal/terms-of-service" class="footer-link">{{
              legalLink2
            }}</a>
            <a href="/legal/data-security" class="footer-link">{{
              legalLink3
            }}</a>
            <a href="/legal/cookie-policy" class="footer-link">{{
              legalLink4
            }}</a>
          </div>
        </div>

        <!-- Newsletter Section -->
        <div class="footer-newsletter">
          <h4 class="newsletter-title">{{ $t("footer.newsletter.title") }}</h4>
          <p class="newsletter-description">
            {{ $t("footer.newsletter.description") }}
          </p>

          <div class="newsletter-form">
            <q-input
              v-model="email"
              :placeholder="$t('footer.newsletter.placeholder')"
              outlined
              dense
              class="newsletter-input"
            >
              <template v-slot:append>
                <q-btn
                  round
                  dense
                  flat
                  icon="send"
                  color="var(--dermiqt-yellow)"
                  @click="subscribeNewsletter"
                />
              </template>
            </q-input>
          </div>

          <div class="newsletter-benefits">
            <div class="benefit-item">
              <q-icon
                name="check_circle"
                size="1rem"
                color="var(--dermiqt-yellow)"
              />
              <span>{{ newsletterBenefit1 }}</span>
            </div>
            <div class="benefit-item">
              <q-icon
                name="check_circle"
                size="1rem"
                color="var(--dermiqt-yellow)"
              />
              <span>{{ newsletterBenefit2 }}</span>
            </div>
            <div class="benefit-item">
              <q-icon
                name="check_circle"
                size="1rem"
                color="var(--dermiqt-yellow)"
              />
              <span>{{ newsletterBenefit3 }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div class="footer-bottom">
        <div class="footer-bottom-content">
          <div class="copyright-section">
            <p class="copyright-text">{{ $t("footer.bottom.copyright") }}</p>
            <p class="legal-text">{{ $t("footer.bottom.legal") }}</p>
          </div>

          <div class="footer-actions">
            <q-btn
              flat
              :label="$t('footer.bottom.backToTop')"
              icon="keyboard_arrow_up"
              color="var(--dermiqt-yellow)"
              @click="scrollToTop"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Floating Action Buttons -->
    <div class="floating-actions">
      <!-- Chat bubble removed - now handled by dedicated Chat component -->

      <!-- <div class="quote-bubble" @click="requestQuote">
        <q-icon name="calculate" size="1.5rem" />
        <span class="quote-label">{{ $t("footer.floating.quote") }}</span>
      </div> -->
    </div>
  </footer>
</template>

<script>
import { ref, computed } from "vue";
import { useQuasar } from "quasar";
import { useI18n } from "vue-i18n";

export default {
  name: "AppFooter",
  setup() {
    const $q = useQuasar();
    const { t } = useI18n();
    const email = ref("");

    // Individual computed properties for social platforms
    const socialPlatform1Icon = computed(() =>
      t("footer.social.platforms.0.icon")
    );
    const socialPlatform2Icon = computed(() =>
      t("footer.social.platforms.1.icon")
    );
    const socialPlatform3Icon = computed(() =>
      t("footer.social.platforms.2.icon")
    );
    const socialPlatform4Icon = computed(() =>
      t("footer.social.platforms.3.icon")
    );

    // Individual computed properties for services links
    const servicesLink1 = computed(() => t("footer.links.services.items.0"));
    const servicesLink2 = computed(() => t("footer.links.services.items.1"));
    const servicesLink3 = computed(() => t("footer.links.services.items.2"));
    const servicesLink4 = computed(() => t("footer.links.services.items.3"));

    // Individual computed properties for company links
    const companyLink1 = computed(() => t("footer.links.company.items.0"));
    const companyLink2 = computed(() => t("footer.links.company.items.1"));
    const companyLink3 = computed(() => t("footer.links.company.items.2"));
    const companyLink4 = computed(() => t("footer.links.company.items.3"));

    // Individual computed properties for support links
    const supportLink1 = computed(() => t("footer.links.support.items.0"));
    const supportLink2 = computed(() => t("footer.links.support.items.1"));
    const supportLink3 = computed(() => t("footer.links.support.items.2"));
    const supportLink4 = computed(() => t("footer.links.support.items.3"));

    // Individual computed properties for legal links
    const legalLink1 = computed(() => t("footer.links.legal.items.0"));
    const legalLink2 = computed(() => t("footer.links.legal.items.1"));
    const legalLink3 = computed(() => t("footer.links.legal.items.2"));
    const legalLink4 = computed(() => t("footer.links.legal.items.3"));

    // Individual computed properties for newsletter benefits
    const newsletterBenefit1 = computed(() =>
      t("footer.newsletter.benefits.0")
    );
    const newsletterBenefit2 = computed(() =>
      t("footer.newsletter.benefits.1")
    );
    const newsletterBenefit3 = computed(() =>
      t("footer.newsletter.benefits.2")
    );

    const subscribeNewsletter = () => {
      if (email.value.trim()) {
        $q.notify({
          type: "positive",
          message: "Newsletter subscription successful!",
          position: "top",
        });
        email.value = "";
      } else {
        $q.notify({
          type: "warning",
          message: "Please enter a valid email address",
          position: "top",
        });
      }
    };

    // Chat functionality moved to dedicated Chat component

    const requestQuote = () => {
      $q.notify({
        type: "info",
        message: "Quote request form will open",
        position: "top",
      });
    };

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    return {
      email,
      socialPlatform1Icon,
      socialPlatform2Icon,
      socialPlatform3Icon,
      socialPlatform4Icon,
      servicesLink1,
      servicesLink2,
      servicesLink3,
      servicesLink4,
      companyLink1,
      companyLink2,
      companyLink3,
      companyLink4,
      supportLink1,
      supportLink2,
      supportLink3,
      supportLink4,
      legalLink1,
      legalLink2,
      legalLink3,
      legalLink4,
      newsletterBenefit1,
      newsletterBenefit2,
      newsletterBenefit3,
      subscribeNewsletter,
      requestQuote,
      scrollToTop,
    };
  },
};
</script>

<style scoped>
/* Modern Footer Styles */
.footer-modern {
  background: linear-gradient(
    135deg,
    var(--dermiqt-dark-text) 0%,
    #1a1a1a 100%
  );
  color: var(--dermiqt-white);
  padding: 4rem 0 2rem 0;
  position: relative;
  overflow: hidden;
}

.footer-modern::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="footer" width="60" height="60" patternUnits="userSpaceOnUse"><path d="M 30 0 L 30 60 M 0 30 L 60 30" fill="none" stroke="rgba(193,120,23,0.1)" stroke-width="1"/><circle cx="30" cy="30" r="2" fill="rgba(193,120,23,0.15)"/></pattern></defs><rect width="100" height="100" fill="url(%23footer)"/></svg>');
  opacity: 0.3;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
}

/* Main Footer Content */
.footer-main {
  display: grid;
  grid-template-columns: 2fr 2fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;
}

/* Company Info Section */
.footer-company {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.company-brand {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.brand-logo {
  background: rgba(193, 120, 23, 0.1);
  padding: 1rem;
  border-radius: 12px;
  border: 1px solid rgba(193, 120, 23, 0.2);
}

.company-name {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--dermiqt-yellow);
  margin: 0 0 0.5rem 0;
}

.company-tagline {
  font-size: 1rem;
  color: var(--dermiqt-white);
  opacity: 0.8;
  margin: 0;
}

.company-description {
  font-size: 1rem;
  color: var(--dermiqt-white);
  opacity: 0.7;
  line-height: 1.6;
  margin: 0;
}

/* Contact Info */
.contact-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.875rem;
  color: var(--dermiqt-white);
  opacity: 0.8;
}

.contact-item .q-icon {
  color: var(--dermiqt-yellow);
}

/* Social Links */
.social-links {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.social-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--dermiqt-white);
  margin: 0;
}

.social-icons {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(193, 120, 23, 0.1);
  border: 1px solid rgba(193, 120, 23, 0.2);
  border-radius: 8px;
  color: var(--dermiqt-yellow);
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-icon:hover {
  background: var(--dermiqt-yellow);
  color: var(--dermiqt-dark-text);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(193, 120, 23, 0.3);
}

/* Footer Links */
.footer-links {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.links-column {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.column-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--dermiqt-yellow);
  margin: 0 0 1rem 0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.footer-link {
  color: var(--dermiqt-white);
  text-decoration: none;
  font-size: 0.875rem;
  opacity: 0.8;
  transition: all 0.3s ease;
  padding: 0.25rem 0;
}

.footer-link:hover {
  color: var(--dermiqt-yellow);
  opacity: 1;
  transform: translateX(4px);
}

/* Newsletter Section */
.footer-newsletter {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.newsletter-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--dermiqt-yellow);
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.newsletter-description {
  font-size: 0.875rem;
  color: var(--dermiqt-white);
  opacity: 0.8;
  line-height: 1.5;
  margin: 0;
}

.newsletter-form {
  position: relative;
}

.newsletter-input {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(193, 120, 23, 0.2);
  border-radius: 8px;
}

.newsletter-input :deep(.q-field__control) {
  background: transparent;
}

.newsletter-input :deep(.q-field__native) {
  color: var(--dermiqt-white);
}

.newsletter-input :deep(.q-field__native::placeholder) {
  color: var(--dermiqt-white);
  opacity: 0.6;
}

.newsletter-benefits {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.benefit-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.75rem;
  color: var(--dermiqt-white);
  opacity: 0.7;
}

/* Footer Bottom */
.footer-bottom {
  border-top: 1px solid rgba(193, 120, 23, 0.2);
  padding-top: 2rem;
}

.footer-bottom-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.copyright-section {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.copyright-text {
  font-size: 0.875rem;
  color: var(--dermiqt-white);
  margin: 0;
}

.legal-text {
  font-size: 0.75rem;
  color: var(--dermiqt-white);
  opacity: 0.6;
  margin: 0;
}

.footer-actions {
  display: flex;
  gap: 1rem;
}

/* Floating Action Buttons */
.floating-actions {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  z-index: 1000;
}

.chat-bubble,
.quote-bubble {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: var(--dermiqt-yellow);
  color: var(--dermiqt-dark-text);
  padding: 1rem 1.5rem;
  border-radius: 25px;
  cursor: pointer;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  font-weight: 600;
  font-size: 0.875rem;
}

.chat-bubble:hover,
.quote-bubble:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.4);
}

.chat-label,
.quote-label {
  white-space: nowrap;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .footer-main {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  .footer-newsletter {
    grid-column: 1 / -1;
  }
}

@media (max-width: 768px) {
  .footer-modern {
    padding: 3rem 0 2rem 0;
  }

  .container {
    padding: 0 1rem;
  }

  .footer-main {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .footer-links {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  .footer-bottom-content {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }

  .floating-actions {
    bottom: 1rem;
    right: 1rem;
    gap: 0.75rem;
  }

  .chat-bubble,
  .quote-bubble {
    padding: 0.75rem 1rem;
    font-size: 0.75rem;
  }

  .chat-label,
  .quote-label {
    display: none;
  }
}

@media (max-width: 480px) {
  .footer-links {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .company-brand {
    flex-direction: column;
    text-align: center;
    gap: 0.5rem;
  }

  .social-icons {
    justify-content: center;
  }
}
</style>
