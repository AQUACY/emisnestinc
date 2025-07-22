<template>
  <q-page>
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-background">
        <div class="hero-overlay"></div>
        <div class="hero-content">
          <div class="hero-text">
            <h1 class="hero-title">About Emi's Nest</h1>
            <p class="hero-subtitle">
              Your trusted partner for stress-free moving experiences across
              Canada
            </p>
            <div class="hero-stats">
              <div class="stat-item">
                <div class="stat-number">100%</div>
                <div class="stat-label">Customer Satisfaction</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">24/7</div>
                <div class="stat-label">Support Available</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">1000+</div>
                <div class="stat-label">Successful Moves</div>
              </div>
            </div>
          </div>
          <div class="hero-visual">
            <div class="moving-illustration">
              <div class="truck-icon">
                <i class="fas fa-truck"></i>
              </div>
              <div class="moving-boxes">
                <div class="box box-1"></div>
                <div class="box box-2"></div>
                <div class="box box-3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Company Overview Section -->
    <section class="overview-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Our Story</h2>
          <div class="section-divider"></div>
        </div>
        <div class="overview-content">
          <div class="overview-text">
            <p class="overview-paragraph">
              Emi's Nest Moving Company is a full-service, customer-focused
              moving company proudly serving Canadians. Our mission is to
              provide safe, reliable, and stress-free moving experiences for
              residential and commercial clients across Canada. With a
              commitment to professionalism, punctuality, and personalized
              service, we aim to set a new standard in the moving industry.
            </p>
            <p class="overview-paragraph">
              Founded on the values of trust, care, and efficiency, Emi's Nest
              specializes in local and long-distance moves, packing and
              unpacking services, and office/commercial moving. Our trained and
              courteous team ensures that every item, from delicate valuables to
              bulky furniture, is handled with the utmost care and respect.
            </p>
            <p class="overview-paragraph">
              With operations in two of Canada's busiest cities, we understand
              the unique logistics and needs of urban and suburban moves. Our
              strategic presence allows us to respond swiftly to client demands,
              provide flexible scheduling, and offer competitive rates.
            </p>
          </div>
          <div class="overview-image">
            <div class="image-placeholder">
              <i class="fas fa-building"></i>
              <span>Canadian Operations</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission & Vision Section -->
    <section class="mission-vision-section">
      <div class="container">
        <div class="mission-vision-grid">
          <div class="mission-card">
            <div class="card-icon">
              <i class="fas fa-bullseye"></i>
            </div>
            <h3 class="card-title">Our Mission</h3>
            <p class="card-content">
              "To make moving and logistics stress-free, seamless, and secure
              through innovation, transparency, and dedication to client
              satisfaction."
            </p>
          </div>
          <div class="vision-card">
            <div class="card-icon">
              <i class="fas fa-eye"></i>
            </div>
            <h3 class="card-title">Our Vision</h3>
            <p class="card-content">
              "To become the most trusted moving and logistics company in
              Canada, known for reliability, innovation, and excellent customer
              experience."
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Core Values Section -->
    <section class="values-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Our Core Values</h2>
          <div class="section-divider"></div>
        </div>
        <div class="values-grid">
          <div
            class="value-card"
            v-for="(value, index) in coreValues"
            :key="index"
          >
            <div class="value-icon">
              <i :class="value.icon"></i>
            </div>
            <h3 class="value-title">{{ value.title }}</h3>
            <p class="value-description">{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Target Market Section -->
    <section class="market-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Who We Serve</h2>
          <div class="section-divider"></div>
        </div>
        <div class="market-categories">
          <div class="market-category">
            <h3 class="category-title">
              <i class="fas fa-home"></i>
              Residential Clients
            </h3>
            <ul class="category-list">
              <li>Homeowners & Renters</li>
              <li>Seniors & Downsizers</li>
              <li>Individuals in Sensitive Life Transitions</li>
              <li>Clients Facing Hoarding Situations</li>
            </ul>
          </div>
          <div class="market-category">
            <h3 class="category-title">
              <i class="fas fa-briefcase"></i>
              Commercial & Business Clients
            </h3>
            <ul class="category-list">
              <li>Offices & Small Businesses</li>
              <li>Retailers & E-commerce Businesses</li>
              <li>Property Managers & Real Estate Agents</li>
            </ul>
          </div>
          <div class="market-category">
            <h3 class="category-title">
              <i class="fas fa-cogs"></i>
              Logistics & Specialty Clients
            </h3>
            <ul class="category-list">
              <li>Warehousing & Distribution Support</li>
              <li>Event Planners & Contractors</li>
              <li>Non-profits & Government Agencies</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- What Makes Us Different Section -->
    <section class="different-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">What Makes Emi's Nest Different?</h2>
          <div class="section-divider"></div>
        </div>
        <div class="different-grid">
          <div
            class="different-item"
            v-for="(feature, index) in differentiators"
            :key="index"
          >
            <div class="feature-icon">
              <i class="fas fa-check"></i>
            </div>
            <h3 class="feature-title">{{ feature.title }}</h3>
            <p class="feature-description">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Process Section -->
    <section class="process-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">The Emi's Nest Process</h2>
          <div class="section-divider"></div>
        </div>
        <div class="process-timeline">
          <div
            class="process-step"
            v-for="(step, index) in processSteps"
            :key="index"
          >
            <div class="step-number">{{ index + 1 }}</div>
            <div class="step-content">
              <h3 class="step-title">{{ step.title }}</h3>
              <p class="step-description">{{ step.description }}</p>
            </div>
            <div
              class="step-connector"
              v-if="index < processSteps.length - 1"
            ></div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2 class="cta-title">Ready to Start Your Journey?</h2>
          <p class="cta-subtitle">
            Let us make your move stress-free and seamless. Get your free quote
            today!
          </p>
          <div class="cta-buttons">
            <button class="cta-button primary">Get Free Quote</button>
            <button class="cta-button secondary">Learn More</button>
          </div>
        </div>
      </div>
    </section>

    <AppFooter />
  </q-page>
</template>

<script>
import AppFooter from "../../components/Footer.vue";

export default {
  name: "AboutUs",
  components: {
    AppFooter,
  },
  data() {
    return {
      coreValues: [
        {
          title: "Trust",
          description:
            "Building lasting relationships through transparency and reliability.",
          icon: "fas fa-handshake",
        },
        {
          title: "Customer Focus",
          description:
            "Every decision we make is centered around your satisfaction.",
          icon: "fas fa-users",
        },
        {
          title: "Innovation",
          description:
            "Continuously improving our services with modern solutions.",
          icon: "fas fa-lightbulb",
        },
        {
          title: "Empathy",
          description: "Understanding and caring for your unique moving needs.",
          icon: "fas fa-heart",
        },
        {
          title: "Excellence",
          description: "Delivering outstanding service in every interaction.",
          icon: "fas fa-star",
        },
      ],
      differentiators: [
        {
          title: "Transparent Pricing",
          description:
            "No hidden fees or surprises. Clear, upfront pricing for all services.",
        },
        {
          title: "Professional Team",
          description:
            "Trained, experienced, and courteous movers who treat your belongings with care.",
        },
        {
          title: "Digital Booking & Tracking",
          description:
            "Modern technology for easy booking and real-time move tracking.",
        },
        {
          title: "Customer-Centered Experience",
          description:
            "Personalized service tailored to your specific needs and timeline.",
        },
        {
          title: "Licensed & Insured",
          description:
            "Full licensing and comprehensive insurance for your peace of mind.",
        },
      ],
      processSteps: [
        {
          title: "Request a Quote",
          description:
            "Get a detailed, no-obligation quote tailored to your specific needs.",
        },
        {
          title: "Free Consultation",
          description:
            "Schedule a consultation to discuss your move requirements and timeline.",
        },
        {
          title: "Booking Confirmation",
          description:
            "Secure your moving date with our flexible scheduling options.",
        },
        {
          title: "Moving Day",
          description:
            "Our professional team handles everything with care and efficiency.",
        },
        {
          title: "Delivery & Feedback",
          description:
            "Complete delivery and we value your feedback to improve our services.",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Hero Section */
.hero-section {
  min-height: 80vh;
  background: linear-gradient(135deg, #1e3a8a 0%, #0066cc 100%);
  position: relative;
  overflow: hidden;
}

.hero-background {
  position: relative;
  height: 100%;
  width: 100%;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(30, 58, 138, 0.3);
}

.hero-content {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 100px 2rem;
  min-height: 80vh;
}

.hero-text {
  flex: 1;
  max-width: 600px;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: #f8f9fa;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.hero-stats {
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 2rem;
  font-weight: bold;
  color: #60a5fa;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 0.9rem;
  color: #f8f9fa;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.hero-visual {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.moving-illustration {
  position: relative;
  width: 300px;
  height: 200px;
}

.truck-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 4rem;
  color: #60a5fa;
  animation: truck-move 3s ease-in-out infinite;
}

.moving-boxes {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-around;
}

.box {
  width: 40px;
  height: 40px;
  background: #60a5fa;
  border-radius: 4px;
  animation: box-bounce 2s ease-in-out infinite;
}

.box-1 {
  animation-delay: 0s;
}
.box-2 {
  animation-delay: 0.5s;
}
.box-3 {
  animation-delay: 1s;
}

@keyframes truck-move {
  0%,
  100% {
    transform: translate(-50%, -50%) translateX(0);
  }
  50% {
    transform: translate(-50%, -50%) translateX(20px);
  }
}

@keyframes box-bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

/* Container */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Section Headers */
.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: #0066cc;
  margin-bottom: 1rem;
}

.section-divider {
  width: 80px;
  height: 4px;
  background: #60a5fa;
  margin: 0 auto;
  border-radius: 2px;
}

/* Overview Section */
.overview-section {
  padding: 80px 0;
  background: #f8f9fa;
}

.overview-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 4rem;
  align-items: center;
}

.overview-paragraph {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #333333;
  margin-bottom: 1.5rem;
}

.overview-image {
  display: flex;
  justify-content: center;
}

.image-placeholder {
  width: 200px;
  height: 200px;
  background: #ffffff;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  color: #0066cc;
  font-size: 3rem;
}

.image-placeholder span {
  font-size: 0.9rem;
  margin-top: 1rem;
  color: #333333;
}

/* Mission & Vision Section */
.mission-vision-section {
  padding: 80px 0;
  background: #ffffff;
}

.mission-vision-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
}

.mission-card,
.vision-card {
  background: #f8f9fa;
  padding: 3rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.mission-card:hover,
.vision-card:hover {
  transform: translateY(-8px);
}

.card-icon {
  font-size: 3rem;
  color: #0066cc;
  margin-bottom: 1.5rem;
}

.card-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333333;
  margin-bottom: 1rem;
}

.card-content {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #333333;
  font-style: italic;
}

/* Values Section */
.values-section {
  padding: 80px 0;
  background: #f8f9fa;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.value-card {
  background: #ffffff;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.value-card:hover {
  transform: translateY(-4px);
}

.value-icon {
  font-size: 2.5rem;
  color: #60a5fa;
  margin-bottom: 1rem;
}

.value-title {
  font-size: 1.25rem;
  font-weight: bold;
  color: #333333;
  margin-bottom: 1rem;
}

.value-description {
  font-size: 1rem;
  line-height: 1.6;
  color: #333333;
}

/* Market Section */
.market-section {
  padding: 80px 0;
  background: #ffffff;
}

.market-categories {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.market-category {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}

.category-title {
  font-size: 1.25rem;
  font-weight: bold;
  color: #333333;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.category-title i {
  color: #0066cc;
}

.category-list {
  list-style: none;
  padding: 0;
}

.category-list li {
  padding: 0.5rem 0;
  color: #333333;
  position: relative;
  padding-left: 1.5rem;
}

.category-list li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: #60a5fa;
  font-weight: bold;
}

/* Different Section */
.different-section {
  padding: 80px 0;
  background: #f8f9fa;
}

.different-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.different-item {
  background: #ffffff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.different-item:hover {
  transform: translateY(-4px);
}

.feature-icon {
  width: 50px;
  height: 50px;
  background: #60a5fa;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  color: #333333;
  font-size: 1.2rem;
}

.feature-title {
  font-size: 1.25rem;
  font-weight: bold;
  color: #333333;
  margin-bottom: 1rem;
}

.feature-description {
  font-size: 1rem;
  line-height: 1.6;
  color: #333333;
}

/* Process Section */
.process-section {
  padding: 80px 0;
  background: #ffffff;
}

.process-timeline {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
}

.process-step {
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 3rem;
}

.step-number {
  width: 60px;
  height: 60px;
  background: #60a5fa;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: #333333;
  flex-shrink: 0;
  margin-right: 2rem;
}

.step-content {
  flex: 1;
}

.step-title {
  font-size: 1.25rem;
  font-weight: bold;
  color: #333333;
  margin-bottom: 0.5rem;
}

.step-description {
  font-size: 1rem;
  line-height: 1.6;
  color: #333333;
}

.step-connector {
  position: absolute;
  left: 30px;
  top: 60px;
  width: 2px;
  height: 60px;
  background: #60a5fa;
}

/* CTA Section */
.cta-section {
  padding: 80px 0;
  background: linear-gradient(135deg, #1e3a8a 0%, #0066cc 100%);
  text-align: center;
}

.cta-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 1rem;
}

.cta-subtitle {
  font-size: 1.25rem;
  color: #f8f9fa;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.cta-button {
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.cta-button.primary {
  background: #60a5fa;
  color: #333333;
}

.cta-button.primary:hover {
  background: #3b82f6;
  transform: translateY(-2px);
}

.cta-button.secondary {
  background: transparent;
  color: #ffffff;
  border: 2px solid #ffffff;
}

.cta-button.secondary:hover {
  background: #ffffff;
  color: #333333;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .hero-content {
    flex-direction: column;
    text-align: center;
    gap: 3rem;
  }

  .hero-title {
    font-size: 3rem;
  }

  .overview-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .mission-vision-grid {
    grid-template-columns: 1fr;
  }

  .hero-stats {
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.1rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .hero-stats {
    flex-direction: column;
    gap: 1rem;
  }

  .process-step {
    flex-direction: column;
    text-align: center;
  }

  .step-number {
    margin-right: 0;
    margin-bottom: 1rem;
  }

  .step-connector {
    display: none;
  }

  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }

  .cta-button {
    width: 100%;
    max-width: 300px;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2rem;
  }

  .container {
    padding: 0 1rem;
  }

  .hero-content {
    padding: 60px 1rem;
  }

  .overview-section,
  .mission-vision-section,
  .values-section,
  .market-section,
  .different-section,
  .process-section,
  .cta-section {
    padding: 60px 0;
  }
}
</style>
