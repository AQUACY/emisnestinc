<template>
  <div class="not-found-page">
    <!-- Background with texture overlay -->
    <div class="not-found-background">
      <div class="texture-overlay"></div>
    </div>

    <!-- Main content -->
    <div class="not-found-container">
      <div class="not-found-content">
        <!-- 404 Number -->
        <div class="error-number">
          <span class="number-4">4</span>
          <div class="zero-container">
            <q-icon name="sentiment_dissatisfied" class="sad-face" />
          </div>
          <span class="number-4">4</span>
        </div>

        <!-- Main heading -->
        <h1 class="error-title">
          {{ $t("notFound.title", "Page Not Found") }}
        </h1>

        <!-- Description -->
        <p class="error-description">
          {{
            $t(
              "notFound.description",
              "The page you're looking for seems to have wandered off. Let's get you back on track!"
            )
          }}
        </p>

        <!-- Action buttons -->
        <div class="action-buttons">
          <q-btn
            size="lg"
            :label="$t('notFound.goHome', 'Go Home')"
            class="btn-primary"
            @click="goHome"
            icon="home"
          />
          <q-btn
            outline
            size="lg"
            :label="$t('notFound.contactUs', 'Contact Us')"
            class="btn-secondary"
            @click="contactUs"
            icon="contact_support"
          />
        </div>

        <!-- Popular pages section -->
        <div class="popular-pages">
          <p class="popular-title">
            {{ $t("notFound.popularPages", "Or try these popular pages:") }}
          </p>
          <div class="page-links">
            <q-btn
              flat
              :label="$t('nav.services', 'Services')"
              class="page-link"
              @click="goToServices"
              icon="local_shipping"
            />
            <q-btn
              flat
              :label="$t('nav.about', 'About Us')"
              class="page-link"
              @click="goToAbout"
              icon="info"
            />
            <q-btn
              flat
              :label="$t('nav.getQuote', 'Get Quote')"
              class="page-link"
              @click="getQuote"
              icon="request_quote"
            />
          </div>
        </div>

        <!-- Decorative elements -->
        <div class="decorative-elements">
          <div class="floating-icon" style="--delay: 0s">
            <q-icon name="local_shipping" size="2rem" />
          </div>
          <div class="floating-icon" style="--delay: 2s">
            <q-icon name="warehouse" size="1.5rem" />
          </div>
          <div class="floating-icon" style="--delay: 4s">
            <q-icon name="location_on" size="1.2rem" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFoundPage",
  emits: ["show-quote"],
  methods: {
    goHome() {
      this.$router.push("/");
    },
    contactUs() {
      this.$router.push("/contact");
    },
    goToServices() {
      this.$router.push("/services");
    },
    goToAbout() {
      this.$router.push("/about");
    },
    getQuote() {
      this.$emit("show-quote");
    },
  },
};
</script>

<style scoped>
.not-found-page {
  min-height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #1e3a8a 0%, #0066cc 100%);
  overflow: hidden;
}

.not-found-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #1e3a8a 0%, #0066cc 100%);
}

.texture-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: radial-gradient(
      circle at 20% 80%,
      rgba(96, 165, 250, 0.1) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 80% 20%,
      rgba(0, 102, 204, 0.1) 0%,
      transparent 50%
    );
  pointer-events: none;
}

.not-found-container {
  position: relative;
  z-index: 2;
  max-width: 800px;
  width: 100%;
  padding: 2rem;
  text-align: center;
}

.not-found-content {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 24px;
  padding: 4rem 2rem;
  box-shadow: 0 20px 40px rgba(30, 58, 138, 0.2);
  border: 1px solid rgba(96, 165, 250, 0.2);
}

/* 404 Number Styling */
.error-number {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  gap: 0.5rem;
}

.number-4 {
  font-size: 8rem;
  font-weight: 900;
  color: #0066cc;
  line-height: 1;
  text-shadow: 2px 2px 4px rgba(30, 58, 138, 0.1);
}

.zero-container {
  position: relative;
  width: 8rem;
  height: 8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #60a5fa, #3b82f6);
  border-radius: 50%;
  box-shadow: 0 8px 16px rgba(96, 165, 250, 0.3);
}

.sad-face {
  color: #ffffff;
  font-size: 4rem;
}

/* Typography */
.error-title {
  font-size: 3rem;
  font-weight: 700;
  color: #0066cc;
  margin-bottom: 1.5rem;
  font-family: "Inter", "Roboto", sans-serif;
  letter-spacing: -0.02em;
}

.error-description {
  font-size: 1.25rem;
  color: #333333;
  margin-bottom: 3rem;
  line-height: 1.6;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

/* Action Buttons */
.action-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.btn-primary {
  background: linear-gradient(135deg, #60a5fa, #3b82f6) !important;
  color: #ffffff !important;
  border: none !important;
  font-weight: 600 !important;
  text-transform: uppercase !important;
  letter-spacing: 0.5px !important;
  border-radius: 12px !important;
  padding: 12px 32px !important;
  transition: all 0.3s ease !important;
  box-shadow: 0 4px 12px rgba(96, 165, 250, 0.3) !important;
}

.btn-primary:hover {
  transform: translateY(-2px) !important;
  box-shadow: 0 8px 20px rgba(96, 165, 250, 0.4) !important;
  background: linear-gradient(135deg, #3b82f6, #2563eb) !important;
}

.btn-secondary {
  background: transparent !important;
  color: #0066cc !important;
  border: 2px solid #0066cc !important;
  font-weight: 600 !important;
  text-transform: uppercase !important;
  letter-spacing: 0.5px !important;
  border-radius: 12px !important;
  padding: 12px 32px !important;
  transition: all 0.3s ease !important;
}

.btn-secondary:hover {
  background: #0066cc !important;
  color: #ffffff !important;
  transform: translateY(-2px) !important;
}

/* Popular Pages Section */
.popular-pages {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(96, 165, 250, 0.2);
}

.popular-title {
  font-size: 1.125rem;
  color: #333333;
  margin-bottom: 1.5rem;
  font-weight: 500;
}

.page-links {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.page-link {
  color: #0066cc !important;
  font-weight: 500 !important;
  border-radius: 8px !important;
  padding: 8px 16px !important;
  transition: all 0.3s ease !important;
  background: rgba(96, 165, 250, 0.1) !important;
}

.page-link:hover {
  background: rgba(96, 165, 250, 0.2) !important;
  transform: translateY(-1px) !important;
}

/* Decorative Elements */
.decorative-elements {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 1;
}

.floating-icon {
  position: absolute;
  color: #60a5fa;
  opacity: 0.3;
  animation: float 6s ease-in-out infinite;
  animation-delay: var(--delay);
}

.floating-icon:nth-child(1) {
  top: 10%;
  left: 10%;
}

.floating-icon:nth-child(2) {
  top: 20%;
  right: 15%;
}

.floating-icon:nth-child(3) {
  bottom: 20%;
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

/* Responsive Design */
@media (max-width: 768px) {
  .not-found-container {
    padding: 1rem;
  }

  .not-found-content {
    padding: 2rem 1rem;
  }

  .number-4 {
    font-size: 5rem;
  }

  .zero-container {
    width: 5rem;
    height: 5rem;
  }

  .sad-face {
    font-size: 2.5rem;
  }

  .error-title {
    font-size: 2rem;
  }

  .error-description {
    font-size: 1rem;
  }

  .action-buttons {
    flex-direction: column;
    align-items: center;
  }

  .btn-primary,
  .btn-secondary {
    width: 100%;
    max-width: 300px;
  }

  .page-links {
    flex-direction: column;
    align-items: center;
  }

  .page-link {
    width: 100%;
    max-width: 200px;
  }
}

@media (max-width: 480px) {
  .number-4 {
    font-size: 4rem;
  }

  .zero-container {
    width: 4rem;
    height: 4rem;
  }

  .sad-face {
    font-size: 2rem;
  }

  .error-title {
    font-size: 1.75rem;
  }
}
</style>
