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
            <q-icon name="info" class="badge-icon" />
            <span>{{ $t("about.hero.badge") }}</span>
          </div>
          <h1 class="hero-title" data-aos="fade-up" data-aos-delay="100">
            {{ $t("about.hero.title") }}
          </h1>
          <p class="hero-description" data-aos="fade-up" data-aos-delay="200">
            {{ $t("about.hero.description") }}
            <!-- </p>
          <div class="hero-stats" data-aos="fade-up" data-aos-delay="300">
            <div class="stat-item">
              <div class="stat-number">15+</div>
              <div class="stat-label">{{ $t("about.hero.stats.years") }}</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">10,000+</div>
              <div class="stat-label">{{ $t("about.hero.stats.moves") }}</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">98%</div>
              <div class="stat-label">
                {{ $t("about.hero.stats.satisfaction") }}
              </div>
            </div>
          </div> -->
          </p>
        </div>
      </div>
    </section>

    <!-- Story Section -->
    <!-- <section class="story-section section-padding">
      <div class="container">
        <div class="row items-center">
          <div class="col-12 col-md-6" data-aos="fade-right">
            <div class="story-content">
              <div class="section-badge">
                <q-icon name="history" class="badge-icon" />
                <span>{{ $t("about.story.badge") }}</span>
              </div>
              <h2 class="section-title">{{ $t("about.story.title") }}</h2>
              <p class="section-description">
                {{ $t("about.story.description") }}
              </p>
              <div class="story-timeline">
                <div class="timeline-item">
                  <div class="timeline-year">2009</div>
                  <div class="timeline-content">
                    <h4>{{ $t("about.story.timeline.founded.title") }}</h4>
                    <p>{{ $t("about.story.timeline.founded.description") }}</p>
                  </div>
                </div>
                <div class="timeline-item">
                  <div class="timeline-year">2015</div>
                  <div class="timeline-content">
                    <h4>{{ $t("about.story.timeline.expansion.title") }}</h4>
                    <p>
                      {{ $t("about.story.timeline.expansion.description") }}
                    </p>
                  </div>
                </div>
                <div class="timeline-item">
                  <div class="timeline-year">2024</div>
                  <div class="timeline-content">
                    <h4>{{ $t("about.story.timeline.leadership.title") }}</h4>
                    <p>
                      {{ $t("about.story.timeline.leadership.description") }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6" data-aos="fade-left">
            <div class="story-image-container">
              <q-img
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Emi's Nest Team"
                class="story-image"
              />
              <div class="image-overlay">
                <div class="overlay-content">
                  <q-icon name="favorite" class="overlay-icon" />
                  <h4>{{ $t("about.story.overlay.title") }}</h4>
                  <p>{{ $t("about.story.overlay.description") }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> -->

    <!-- Values Section -->
    <section class="values-section section-padding">
      <div class="container">
        <div class="text-center q-mb-xl">
          <div class="section-badge" data-aos="fade-up">
            <q-icon name="psychology" class="badge-icon" />
            <span>{{ $t("about.values.badge") }}</span>
          </div>
          <h2 class="section-title" data-aos="fade-up" data-aos-delay="100">
            {{ $t("about.values.title") }}
          </h2>
          <p
            class="section-description"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {{ $t("about.values.description") }}
          </p>
        </div>

        <div class="row">
          <div
            class="col-12 col-md-4 q-pa-md"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div class="value-card">
              <div class="value-icon">
                <q-icon name="favorite" />
              </div>
              <h3 class="value-title">{{ $t("about.values.trust.title") }}</h3>
              <p class="value-description">
                {{ $t("about.values.trust.description") }}
              </p>
            </div>
          </div>

          <div
            class="col-12 col-md-4 q-pa-md"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div class="value-card">
              <div class="value-icon">
                <q-icon name="verified" />
              </div>
              <h3 class="value-title">
                {{ $t("about.values.efficiency.title") }}
              </h3>
              <p class="value-description">
                {{ $t("about.values.efficiency.description") }}
              </p>
            </div>
          </div>

          <div
            class="col-12 col-md-4 q-pa-md"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div class="value-card">
              <div class="value-icon">
                <q-icon name="groups" />
              </div>
              <h3 class="value-title">
                {{ $t("about.values.innovation.title") }}
              </h3>
              <p class="value-description">
                {{ $t("about.values.innovation.description") }}
              </p>
            </div>
          </div>
          <div
            class="col-12 col-md-4 q-pa-md"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div class="value-card">
              <div class="value-icon">
                <q-icon name="groups" />
              </div>
              <h3 class="value-title">
                {{ $t("about.values.empathy.title") }}
              </h3>
              <p class="value-description">
                {{ $t("about.values.empathy.description") }}
              </p>
            </div>
          </div>
          <div
            class="col-12 col-md-4 q-pa-md"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div class="value-card">
              <div class="value-icon">
                <q-icon name="groups" />
              </div>
              <h3 class="value-title">
                {{ $t("about.values.excellence.title") }}
              </h3>
              <p class="value-description">
                {{ $t("about.values.excellence.description") }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="team-section section-padding">
      <div class="container">
        <div class="text-center q-mb-xl">
          <div class="section-badge" data-aos="fade-up">
            <q-icon name="people" class="badge-icon" />
            <span>{{ $t("about.team.badge") }}</span>
          </div>
          <h2 class="section-title" data-aos="fade-up" data-aos-delay="100">
            {{ $t("about.team.title") }}
          </h2>
          <p
            class="section-description"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {{ $t("about.team.description") }}
          </p>
        </div>

        <div class="row">
          <div
            class="col-12 col-md-4 q-pa-md"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div class="team-card">
              <div class="team-avatar">
                <q-avatar size="120px">
                  <img
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
                  />
                </q-avatar>
                <div class="avatar-overlay">
                  <q-icon name="linkedin" />
                </div>
              </div>
              <div class="team-info">
                <h3 class="team-name">{{ $t("about.team.ceo.name") }}</h3>
                <p class="team-position">{{ $t("about.team.ceo.position") }}</p>
                <p class="team-description">
                  {{ $t("about.team.ceo.description") }}
                </p>
                <div class="team-stats">
                  <div class="team-stat">
                    <div class="stat-number">20+</div>
                    <div class="stat-label">
                      {{ $t("about.team.ceo.experience") }}
                    </div>
                  </div>
                  <div class="team-stat">
                    <div class="stat-number">1000+</div>
                    <div class="stat-label">
                      {{ $t("about.team.ceo.projects") }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            class="col-12 col-md-4 q-pa-md"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div class="team-card">
              <div class="team-avatar">
                <q-avatar size="120px">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
                  />
                </q-avatar>
                <div class="avatar-overlay">
                  <q-icon name="linkedin" />
                </div>
              </div>
              <div class="team-info">
                <h3 class="team-name">
                  {{ $t("about.team.operations.name") }}
                </h3>
                <p class="team-position">
                  {{ $t("about.team.operations.position") }}
                </p>
                <p class="team-description">
                  {{ $t("about.team.operations.description") }}
                </p>
                <div class="team-stats">
                  <div class="team-stat">
                    <div class="stat-number">15+</div>
                    <div class="stat-label">
                      {{ $t("about.team.operations.experience") }}
                    </div>
                  </div>
                  <div class="team-stat">
                    <div class="stat-number">500+</div>
                    <div class="stat-label">
                      {{ $t("about.team.operations.projects") }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            class="col-12 col-md-4 q-pa-md"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div class="team-card">
              <div class="team-avatar">
                <q-avatar size="120px">
                  <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
                  />
                </q-avatar>
                <div class="avatar-overlay">
                  <q-icon name="linkedin" />
                </div>
              </div>
              <div class="team-info">
                <h3 class="team-name">{{ $t("about.team.customer.name") }}</h3>
                <p class="team-position">
                  {{ $t("about.team.customer.position") }}
                </p>
                <p class="team-description">
                  {{ $t("about.team.customer.description") }}
                </p>
                <div class="team-stats">
                  <div class="team-stat">
                    <div class="stat-number">10+</div>
                    <div class="stat-label">
                      {{ $t("about.team.customer.experience") }}
                    </div>
                  </div>
                  <div class="team-stat">
                    <div class="stat-number">2000+</div>
                    <div class="stat-label">
                      {{ $t("about.team.customer.clients") }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Certifications Section -->
    <section class="certifications-section section-padding">
      <div class="container">
        <div class="text-center q-mb-xl">
          <div class="section-badge" data-aos="fade-up">
            <q-icon name="award" class="badge-icon" />
            <span>{{ $t("about.certifications.badge") }}</span>
          </div>
          <h2 class="section-title" data-aos="fade-up" data-aos-delay="100">
            {{ $t("about.certifications.title") }}
          </h2>
          <p
            class="section-description"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {{ $t("about.certifications.description") }}
          </p>
        </div>

        <div class="row">
          <div
            class="col-12 col-md-4 q-pa-md"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div class="certification-card">
              <div class="certification-icon">
                <q-icon name="verified" />
              </div>
              <h3 class="certification-title">
                {{ $t("about.certifications.bbb.title") }}
              </h3>
              <p class="certification-description">
                {{ $t("about.certifications.bbb.description") }}
              </p>
              <div class="certification-rating">
                <div class="rating-stars">
                  <q-icon name="star" v-for="n in 5" :key="n" />
                </div>
                <span class="rating-text">A+ Rating</span>
              </div>
            </div>
          </div>

          <div
            class="col-12 col-md-4 q-pa-md"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div class="certification-card">
              <div class="certification-icon">
                <q-icon name="security" />
              </div>
              <h3 class="certification-title">
                {{ $t("about.certifications.licensed.title") }}
              </h3>
              <p class="certification-description">
                {{ $t("about.certifications.licensed.description") }}
              </p>
              <div class="certification-badges">
                <div class="badge">Licensed</div>
                <div class="badge">Insured</div>
                <div class="badge">Bonded</div>
              </div>
            </div>
          </div>

          <div
            class="col-12 col-md-4 q-pa-md"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div class="certification-card">
              <div class="certification-icon">
                <q-icon name="star" />
              </div>
              <h3 class="certification-title">
                {{ $t("about.certifications.recognition.title") }}
              </h3>
              <p class="certification-description">
                {{ $t("about.certifications.recognition.description") }}
              </p>
              <div class="awards-list">
                <div class="award-item">
                  <q-icon name="emoji_events" />
                  <span>{{
                    $t("about.certifications.recognition.award1")
                  }}</span>
                </div>
                <div class="award-item">
                  <q-icon name="military_tech" />
                  <span>{{
                    $t("about.certifications.recognition.award2")
                  }}</span>
                </div>
              </div>
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
            <span>{{ $t("about.cta.badge") }}</span>
          </div>
          <h2 class="cta-title" data-aos="fade-up" data-aos-delay="100">
            {{ $t("about.cta.title") }}
          </h2>
          <p class="cta-description" data-aos="fade-up" data-aos-delay="200">
            {{ $t("about.cta.description") }}
          </p>
          <div class="cta-buttons" data-aos="fade-up" data-aos-delay="300">
            <q-btn
              class="cta-btn-primary"
              :label="$t('about.cta.primaryButton')"
              @click="scrollToSection('contact')"
            />
            <q-btn
              class="cta-btn-secondary"
              :label="$t('about.cta.secondaryButton')"
              outline
              @click="scrollToSection('services')"
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
import AppFooter from "src/components/Footer.vue";

export default {
  name: "AboutPage",
  components: {
    AppFooter,
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
  background: url("https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80")
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

/* Story Section */
.story-section {
  background: var(--dermiqt-white);
}

.story-content {
  padding-right: 2rem;
}

.story-timeline {
  margin-top: 2rem;
}

.timeline-item {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2rem;
  position: relative;
}

.timeline-item:not(:last-child)::after {
  content: "";
  position: absolute;
  left: 2.5rem;
  top: 4rem;
  bottom: -2rem;
  width: 2px;
  background: var(--dermiqt-yellow);
  opacity: 0.3;
}

.timeline-year {
  background: var(--dermiqt-yellow);
  color: var(--dermiqt-dark-text);
  font-weight: 700;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-size: 0.875rem;
  min-width: 5rem;
  text-align: center;
  height: fit-content;
}

.timeline-content h4 {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--dermiqt-dark-text);
  margin-bottom: 0.5rem;
}

.timeline-content p {
  color: var(--dermiqt-dark-text);
  opacity: 0.8;
  line-height: 1.6;
}

.story-image-container {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.story-image {
  width: 100%;
  height: 500px;
  object-fit: cover;
}

.image-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  padding: 2rem;
  color: var(--dermiqt-white);
}

.overlay-content {
  text-align: center;
}

.overlay-icon {
  font-size: 2rem;
  color: var(--dermiqt-yellow);
  margin-bottom: 1rem;
}

.overlay-content h4 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.overlay-content p {
  opacity: 0.9;
  line-height: 1.6;
}

/* Values Section */
.values-section {
  background: var(--dermiqt-light-bg);
}

.value-card {
  background: var(--dermiqt-white);
  padding: 2.5rem;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  height: 100%;
}

.value-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.12);
}

.value-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, var(--dermiqt-yellow) 0%, #e6a800 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  font-size: 2rem;
  color: var(--dermiqt-dark-text);
}

.value-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--dermiqt-dark-text);
  margin-bottom: 1rem;
}

.value-description {
  color: var(--dermiqt-dark-text);
  opacity: 0.8;
  line-height: 1.6;
}

/* Team Section */
.team-section {
  background: var(--dermiqt-white);
}

.team-card {
  background: var(--dermiqt-white);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  height: 100%;
}

.team-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.12);
}

.team-avatar {
  position: relative;
  padding: 2rem;
  text-align: center;
  background: linear-gradient(135deg, var(--dermiqt-yellow) 0%, #e6a800 100%);
}

.avatar-overlay {
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--dermiqt-white);
  cursor: pointer;
  transition: all 0.3s ease;
}

.avatar-overlay:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: scale(1.1);
}

.team-info {
  padding: 2rem;
}

.team-name {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--dermiqt-dark-text);
  margin-bottom: 0.5rem;
  text-align: center;
}

.team-position {
  color: var(--dermiqt-yellow);
  font-weight: 600;
  margin-bottom: 1rem;
  text-align: center;
}

.team-description {
  color: var(--dermiqt-dark-text);
  opacity: 0.8;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  text-align: center;
}

.team-stats {
  display: flex;
  justify-content: center;
  gap: 2rem;
}

.team-stat {
  text-align: center;
}

.team-stat .stat-number {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--dermiqt-yellow);
  margin-bottom: 0.25rem;
}

.team-stat .stat-label {
  font-size: 0.75rem;
  color: var(--dermiqt-dark-text);
  opacity: 0.7;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Certifications Section */
.certifications-section {
  background: var(--dermiqt-light-bg);
}

.certification-card {
  background: var(--dermiqt-white);
  padding: 2.5rem;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  height: 100%;
}

.certification-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.12);
}

.certification-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, var(--dermiqt-yellow) 0%, #e6a800 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  font-size: 2rem;
  color: var(--dermiqt-dark-text);
}

.certification-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--dermiqt-dark-text);
  margin-bottom: 1rem;
}

.certification-description {
  color: var(--dermiqt-dark-text);
  opacity: 0.8;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.certification-rating {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.rating-stars {
  display: flex;
  gap: 0.25rem;
}

.rating-stars .q-icon {
  color: var(--dermiqt-yellow);
  font-size: 1.25rem;
}

.rating-text {
  font-weight: 600;
  color: var(--dermiqt-dark-text);
}

.certification-badges {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.badge {
  background: var(--dermiqt-yellow);
  color: var(--dermiqt-dark-text);
  padding: 0.25rem 0.75rem;
  border-radius: 50px;
  font-size: 0.75rem;
  font-weight: 600;
}

.awards-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.award-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--dermiqt-dark-text);
  font-weight: 500;
}

.award-item .q-icon {
  color: var(--dermiqt-yellow);
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

  .story-content {
    padding-right: 0;
    margin-bottom: 2rem;
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

  .timeline-item {
    flex-direction: column;
    gap: 1rem;
  }

  .timeline-item:not(:last-child)::after {
    display: none;
  }

  .team-stats {
    flex-direction: column;
    gap: 1rem;
  }
}
</style>
