<template>
  <q-page>
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-background">
        <div class="hero-overlay"></div>
      </div>

      <div class="hero-content">
        <div class="container">
          <div class="row items-center justify-center">
            <div class="shipment col-12 col-lg-8 items-center justify-center">
              <div class="tracking-container">
                <div class="tracking-question">Need to track a shipment?</div>
                <div class="tracking-input-group">
                  <q-input
                    v-model="trackingNumber"
                    placeholder="Enter Tracking Number"
                    outlined
                    dense
                    class="tracking-input"
                    bg-color="white"
                  >
                    <template v-slot:append>
                      <q-btn
                        round
                        dense
                        flat
                        icon="search"
                        color="red"
                        class="search-btn"
                        @click="trackShipment"
                      />
                    </template>
                  </q-input>
                </div>
              </div>
            </div>
          </div>
          <div class="row items-center justify-center">
            <div class="col-12 col-lg-8 text-center">
              <!-- Award Badge -->
              <div class="award-badge" data-aos="fade-down">
                <div class="badge-content">
                  <div class="badge-top">
                    <span class="fortune-text">FORTUNE</span>
                  </div>
                  <div class="badge-main">
                    <span class="badge-title">AMERICA'S MOST</span>
                    <span class="badge-title innovative">INNOVATIVE</span>
                    <span class="badge-title">COMPANIES</span>
                  </div>
                  <div class="badge-year-container">
                    <span class="badge-year">2025</span>
                  </div>
                  <div class="badge-bottom">
                    <span class="statista-text">statista</span>
                    <div class="statista-logo">S</div>
                  </div>
                </div>
              </div>

              <!-- Main Headline -->
              <h1 class="hero-title" data-aos="fade-up">Your freight first</h1>

              <!-- Description -->
              <p
                class="hero-description"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                We're a leading LTL freight company with a world-class network,
                technology, and service. Our platform simplifies LTL shipping,
                offering instant freight quote options. Experience our network's
                power and get your LTL quote today!
              </p>

              <!-- CTA Buttons -->
              <div class="hero-cta" data-aos="fade-up" data-aos-delay="400">
                <div class="q-gutter-md">
                  <q-btn
                    color="red"
                    size="xl"
                    label="Request a Quote"
                    class="cta-primary"
                    @click="requestQuote"
                  />
                  <q-btn
                    outline
                    size="xl"
                    label="Contact Us"
                    class="cta-secondary"
                    @click="contactUs"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- take control -->
    <section class="section-padding bg-white">
      <div class="container">
        <div class="row items-center justify-center">
          <div class="col-12 col-md-6">
            <div class="text-center justify-center">
              <h2 class="section-title text-dark">
                Take control of your freight.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- LT Freight -->
    <section class="section-padding bg-black">
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-4 col-md-6 q-pa-lg">
            <div class="text-center">
              <h2 class="section-title text-white text-left">
                LTL freight is mission-critical to your business
              </h2>
            </div>
          </div>
          <div class="col-12 col-lg-8 col-md-6 q-pa-lg">
            <div class="row">
              <div class="col-12 col-lg-3 col-md-6">
                <div class="text-center">
                  <h4 class="section-title text-white text-left">
                    On-time pick-up and delivery
                  </h4>
                </div>
              </div>
              <div class="col-12 col-lg-3 col-md-6">
                <div class="text-center">
                  <h4 class="section-title text-white text-left">
                    Damage-free freight shipping
                  </h4>
                </div>
              </div>
              <div class="col-12 col-lg-3 col-md-6">
                <div class="text-center">
                  <h4 class="section-title text-white text-left">
                    Accurate invoices
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- So we put your freight first -->
        <div class="row">
          <div class="col-12 col-lg-4 col-md-6">
            <div class="text-center q-pa-lg">
              <h2 class="section-title text-white text-left">
                So we put your freight first
              </h2>
            </div>
          </div>
          <div class="col-12 col-lg-8 col-md-6">
            <div class="text-left q-pa-lg">
              <h4 class="text-white">
                We've created an LTL freight network equipped with national
                capacity, leading technology and a world-class team. And we're
                always building and improving.
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- coast to coast -->
    <section class="section-padding bg-white">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="coast-to-coast-content">
              <div class="coast-heading">
                <h2 class="section-title text-dark">Coast-to-coast network</h2>
              </div>
              <div class="coast-main">
                <div class="coast-text">
                  <p class="coast-description">
                    We're one of the largest LTL freight providers in North
                    America, with coverage that spans the US, Canada, Mexico and
                    the Caribbean.
                  </p>
                </div>
                <div class="coast-button">
                  <q-btn
                    color="red"
                    size="lg"
                    label="See where we ship"
                    class="coast-cta-btn"
                    @click="seeWhereWeShip"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- slide -->
    <section class="slider-section">
      <div class="slider-container">
        <!-- Tab Indicators -->
        <div class="slider-tabs">
          <div class="tab-indicator active" @click="goToSlide(0)"></div>
          <div class="tab-indicator" @click="goToSlide(1)"></div>
          <div class="tab-indicator" @click="goToSlide(2)"></div>
        </div>

        <!-- Slide Content -->
        <div class="slider-content">
          <div class="slide" :class="{ active: currentSlide === 0 }">
            <div class="slide-top">
              <div class="stats-container">
                <div class="stat-item">
                  <div class="stat-line"></div>
                  <div class="stat-number">13,000</div>
                  <div class="stat-label">Drivers</div>
                </div>
                <div class="stat-item">
                  <div class="stat-line"></div>
                  <div class="stat-number">44,000+</div>
                  <div class="stat-label">Tractors and trailers</div>
                </div>
                <div class="stat-item">
                  <div class="stat-number">99%</div>
                  <div class="stat-label">US ZIP codes covered</div>
                </div>
              </div>
            </div>
            <div class="slide-bottom">
              <div class="logistics-yard">
                <div class="sky-background">
                  <div class="clouds"></div>
                </div>
                <div class="truck-container">
                  <div class="truck">
                    <div class="truck-cab">
                      <div class="xpo-logo">XPO</div>
                    </div>
                    <div class="truck-trailer">
                      <div class="xpo-logo-large">XPO</div>
                      <div class="freight-first">Your freight first</div>
                      <div class="truck-number">311-0283</div>
                    </div>
                  </div>
                </div>
                <div class="background-elements">
                  <div class="warehouse-building"></div>
                  <div class="light-pole light-pole-1"></div>
                  <div class="light-pole light-pole-2"></div>
                  <div class="light-pole light-pole-3"></div>
                  <div class="additional-truck truck-1"></div>
                  <div class="additional-truck truck-2"></div>
                  <div class="additional-truck truck-3"></div>
                </div>
              </div>
            </div>
          </div>

          <div class="slide" :class="{ active: currentSlide === 1 }">
            <div class="slide-top">
              <div class="stats-container">
                <div class="stat-item">
                  <div class="stat-line"></div>
                  <div class="stat-number">500+</div>
                  <div class="stat-label">Service Centers</div>
                </div>
                <div class="stat-item">
                  <div class="stat-line"></div>
                  <div class="stat-number">15+</div>
                  <div class="stat-label">Years Experience</div>
                </div>
                <div class="stat-item">
                  <div class="stat-number">24/7</div>
                  <div class="stat-label">Customer Support</div>
                </div>
              </div>
            </div>
            <div class="slide-bottom">
              <div class="logistics-yard">
                <div class="sky-background">
                  <div class="clouds"></div>
                </div>
                <div class="truck-container">
                  <div class="truck">
                    <div class="truck-cab">
                      <div class="xpo-logo">XPO</div>
                    </div>
                    <div class="truck-trailer">
                      <div class="xpo-logo-large">XPO</div>
                      <div class="freight-first">Your freight first</div>
                      <div class="truck-number">311-0283</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="slide" :class="{ active: currentSlide === 2 }">
            <div class="slide-top">
              <div class="stats-container">
                <div class="stat-item">
                  <div class="stat-line"></div>
                  <div class="stat-number">99%</div>
                  <div class="stat-label">On-time Delivery</div>
                </div>
                <div class="stat-item">
                  <div class="stat-line"></div>
                  <div class="stat-number">100%</div>
                  <div class="stat-label">Customer Satisfaction</div>
                </div>
                <div class="stat-item">
                  <div class="stat-number">50+</div>
                  <div class="stat-label">States Served</div>
                </div>
              </div>
            </div>
            <div class="slide-bottom">
              <div class="logistics-yard">
                <div class="sky-background">
                  <div class="clouds"></div>
                </div>
                <div class="truck-container">
                  <div class="truck">
                    <div class="truck-cab">
                      <div class="xpo-logo">XPO</div>
                    </div>
                    <div class="truck-trailer">
                      <div class="xpo-logo-large">XPO</div>
                      <div class="freight-first">Your freight first</div>
                      <div class="truck-number">311-0283</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- capacity -->
    <section class="capacity-section">
      <div class="container">
        <div class="capacity-content">
          <!-- Header Area -->
          <div class="capacity-header">
            <div class="capacity-text">
              <h2 class="capacity-title">Capacity for every load</h2>
              <p class="capacity-description">
                We're growing to ensure we always say "yes" to customers, no
                matter how large the volume.
              </p>
            </div>
            <div class="capacity-button">
              <q-btn
                color="red"
                size="lg"
                label="About us"
                class="about-us-btn"
                @click="aboutUs"
              />
            </div>
          </div>

          <!-- Statistical Data Blocks -->
          <div class="capacity-stats">
            <div class="stat-card">
              <div class="stat-number">301</div>
              <div class="stat-label">Service centers</div>
            </div>
            <div class="stat-card">
              <div class="stat-number">2,300+</div>
              <div class="stat-label">Tractors added in 2024</div>
            </div>
            <div class="stat-card">
              <div class="stat-number">4,400+</div>
              <div class="stat-label">Trailers produced in 2024</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- technology -->
    <section class="technology-section">
      <div class="container">
        <div class="technology-content">
          <!-- Header Area -->
          <div class="technology-header">
            <div class="technology-text">
              <h2 class="technology-title">Technology for efficiency</h2>
              <p class="technology-description">
                Make your freight shipping more efficient and your experience
                simpler, with technology that works for you.
              </p>
            </div>
            <div class="technology-button">
              <q-btn
                color="red"
                size="lg"
                label="Web tools"
                class="web-tools-btn"
                @click="webTools"
              />
            </div>
          </div>

          <!-- Content Blocks -->
          <div class="technology-blocks">
            <!-- Left Content Block -->
            <div class="tech-block">
              <div class="block-content">
                <div class="block-stat">
                  <div class="stat-number">13 million</div>
                  <div class="stat-label">
                    shipments moved annually by our linehaul team.
                  </div>
                </div>
                <div class="block-image">
                  <div class="image-placeholder">
                    <q-icon name="computer" size="4rem" color="white" />
                    <div class="image-text">
                      Woman with headset using computer
                    </div>
                  </div>
                </div>
                <div class="block-features">
                  <h3 class="features-title">Easy-to-use shipper tools:</h3>
                  <ul class="features-list">
                    <li>Tracking and shipment management</li>
                    <li>Requesting quotes and pick-ups</li>
                    <li>Entering shipment data</li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- Right Content Block -->
            <div class="tech-block">
              <div class="block-content">
                <div class="block-stat">
                  <div class="stat-number">661 million</div>
                  <div class="stat-label">linehaul miles run per year.</div>
                </div>
                <div class="block-image">
                  <div class="image-placeholder">
                    <q-icon name="tablet" size="4rem" color="white" />
                    <div class="image-text">
                      Hands holding tablet with data interface
                    </div>
                  </div>
                </div>
                <div class="block-features">
                  <h3 class="features-title">
                    Data science and machine learning:
                  </h3>
                  <ul class="features-list">
                    <li>Constant network optimization</li>
                    <li>Freight flows managed in real time</li>
                    <li>Dynamic pricing and routing</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- accountability -->
    <section class="accountability-section">
      <div class="container">
        <div class="accountability-content">
          <!-- Header Area -->
          <div class="accountability-header">
            <div class="accountability-text">
              <h2 class="accountability-title">Accountable to our customers</h2>
              <p class="accountability-description">
                Our local reps know your market and your industry. They work
                with you to deliver services that meet your specific timing and
                handling needs.
              </p>
            </div>
            <div class="accountability-button">
              <q-btn
                color="red"
                size="lg"
                label="Services"
                class="services-btn"
                @click="services"
              />
            </div>
          </div>

          <!-- Main Content Area -->
          <div class="accountability-blocks">
            <!-- Left Content Block -->
            <div class="accountability-block">
              <div class="block-quote">
                <div class="quote-text">
                  "We offer the complete package and are there for customers
                  from the beginning to the end of the freight movement, no
                  matter what."
                </div>
                <div class="quote-attribution">
                  — Jamie Sheffield, Local Director of Sales, XPO
                </div>
              </div>
              <div class="block-image">
                <div class="image-placeholder">
                  <q-icon name="local_shipping" size="4rem" color="white" />
                  <div class="image-text">
                    XPO truck with trailers in scenic setting
                  </div>
                </div>
              </div>
            </div>

            <!-- Right Content Block -->
            <div class="accountability-block">
              <div class="block-quote">
                <div class="quote-text">
                  "XPO's strengths lie in their ability to problem-solve. They
                  proactively reached out to us, pointed something out in our
                  data and told us how they'd be able to help. XPO put in the
                  work ahead of time."
                </div>
                <div class="quote-attribution">
                  — Nicholas Evers, Logistics Manager, OshKosh Corporation
                </div>
              </div>
              <div class="block-image">
                <div class="image-placeholder">
                  <q-icon name="person" size="4rem" color="white" />
                  <div class="image-text">
                    Person with headset looking at logistics map
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- help us deliver -->
    <section class="recruitment-section">
      <div class="container">
        <div class="recruitment-content">
          <!-- Header Area -->
          <div class="recruitment-header">
            <div class="recruitment-text">
              <h2 class="recruitment-title">Help us deliver world-class LTL</h2>
              <p class="recruitment-description">
                Looking for a career with an industry leader? Join our team of
                technology and transportation experts committed to the safety,
                growth and opportunity of every employee.
              </p>
            </div>
            <div class="recruitment-button">
              <q-btn
                color="red"
                size="lg"
                label="Careers"
                class="careers-btn"
                @click="careers"
              />
            </div>
          </div>

          <!-- Job Role Cards -->
          <div class="job-cards">
            <!-- Drivers Card -->
            <div class="job-card">
              <div class="employee-portrait">
                <div class="portrait-placeholder">
                  <q-icon name="person" size="3rem" color="#666" />
                  <div class="portrait-text">
                    Driver with XPO jacket and cap
                  </div>
                </div>
              </div>
              <div class="job-info">
                <h3 class="job-title">Drivers</h3>
                <p class="job-description">
                  We reward experienced drivers with benefits and schedules that
                  get you home each night. New drivers can start satisfying
                  careers through our nationwide, tuition-free driver schools.
                </p>
                <div class="learn-more-link">
                  <span class="link-text">Learn more</span>
                  <q-icon name="chevron_right" size="1rem" color="red" />
                </div>
              </div>
            </div>

            <!-- Dockworkers Card -->
            <div class="job-card">
              <div class="employee-portrait">
                <div class="portrait-placeholder">
                  <q-icon name="person" size="3rem" color="#666" />
                  <div class="portrait-text">
                    Dockworker with XPO beanie and jacket
                  </div>
                </div>
              </div>
              <div class="job-info">
                <h3 class="job-title">Dockworkers</h3>
                <p class="job-description">
                  We value our dockworkers and forklift operators. Join a safe
                  workplace where you have access to opportunities to learn new
                  skills.
                </p>
                <div class="learn-more-link">
                  <span class="link-text">Learn more</span>
                  <q-icon name="chevron_right" size="1rem" color="red" />
                </div>
              </div>
            </div>

            <!-- Mechanics Card -->
            <div class="job-card">
              <div class="employee-portrait">
                <div class="portrait-placeholder">
                  <q-icon name="person" size="3rem" color="#666" />
                  <div class="portrait-text">
                    Mechanic with XPO work shirt and tools
                  </div>
                </div>
              </div>
              <div class="job-info">
                <h3 class="job-title">Mechanics</h3>
                <p class="job-description">
                  We give you opportunities to work on all types of equipment.
                  You'll have a range of options to grow your career with us.
                </p>
                <div class="learn-more-link">
                  <span class="link-text">Learn more</span>
                  <q-icon name="chevron_right" size="1rem" color="red" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-padding">
      <div class="container">
        <div class="text-center">
          <h2 class="text-h3 text-weight-bold q-mb-md">Ready to Ship?</h2>
          <p class="text-h6 q-mb-xl">
            Get your instant quote today and experience the power of our network
          </p>
          <div class="q-gutter-md">
            <q-btn
              color="white"
              text-color="red"
              size="xl"
              label="Get Started"
              class="cta-primary"
              @click="requestQuote"
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
import { useQuasar } from "quasar";
import { ref, onMounted, onUnmounted } from "vue";
import AppFooter from "src/components/Footer.vue";

export default {
  name: "HomePage",
  components: {
    AppFooter,
  },
  setup() {
    const $q = useQuasar();
    const trackingNumber = ref("");
    const currentSlide = ref(0);
    const slideInterval = ref(null);

    const requestQuote = () => {
      $q.notify({
        type: "positive",
        message: "Quote request form will open",
        position: "top",
      });
    };

    const contactUs = () => {
      $q.notify({
        type: "info",
        message: "Contact form will open",
        position: "top",
      });
    };

    const trackShipment = () => {
      if (trackingNumber.value.trim()) {
        $q.notify({
          type: "info",
          message: `Tracking shipment: ${trackingNumber.value}`,
          position: "top",
        });
      } else {
        $q.notify({
          type: "warning",
          message: "Please enter a tracking number",
          position: "top",
        });
      }
    };

    const seeWhereWeShip = () => {
      $q.notify({
        type: "info",
        message: "See where we ship page will open",
        position: "top",
      });
    };

    const aboutUs = () => {
      $q.notify({
        type: "info",
        message: "About us page will open",
        position: "top",
      });
    };

    const webTools = () => {
      $q.notify({
        type: "info",
        message: "Web tools page will open",
        position: "top",
      });
    };

    const services = () => {
      $q.notify({
        type: "info",
        message: "Services page will open",
        position: "top",
      });
    };

    const careers = () => {
      $q.notify({
        type: "info",
        message: "Careers page will open",
        position: "top",
      });
    };

    const goToSlide = (slideIndex) => {
      currentSlide.value = slideIndex;
      resetAutoSlide();
    };

    const nextSlide = () => {
      currentSlide.value = (currentSlide.value + 1) % 3;
    };

    const startAutoSlide = () => {
      slideInterval.value = setInterval(() => {
        nextSlide();
      }, 5000); // Change slide every 5 seconds
    };

    const resetAutoSlide = () => {
      if (slideInterval.value) {
        clearInterval(slideInterval.value);
      }
      startAutoSlide();
    };

    // Start auto-sliding when component mounts
    onMounted(() => {
      startAutoSlide();
    });

    // Clean up interval when component unmounts
    onUnmounted(() => {
      if (slideInterval.value) {
        clearInterval(slideInterval.value);
      }
    });

    return {
      trackingNumber,
      currentSlide,
      requestQuote,
      contactUs,
      trackShipment,
      seeWhereWeShip,
      aboutUs,
      webTools,
      services,
      careers,
      goToSlide,
    };
  },
};
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.hero-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url("https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  filter: grayscale(50%);
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
}

.hero-content {
  position: relative;
  z-index: 2;
  width: 100%;
}

.hero-title {
  font-size: 4rem;
  font-weight: 900;
  color: white;
  margin-bottom: 2rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.hero-description {
  font-size: 1.25rem;
  color: white;
  margin-bottom: 3rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

.hero-cta {
  margin-top: 2rem;
}

.shipment {
  margin-top: -300px;
}

.tracking-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  padding: 2rem;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  backdrop-filter: blur(10px);
}

.tracking-question {
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  margin-bottom: 0.5rem;
}

.tracking-input-group {
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 400px;
}

.tracking-input {
  flex: 1;
  margin-right: 0;
}

.tracking-input :deep(.q-field__control) {
  background: white;
  border-radius: 4px 0 0 4px;
  border: 1px solid #ddd;
}

.tracking-input :deep(.q-field__control-container) {
  padding: 8px 12px;
}

.search-btn {
  background: #dc3545 !important;
  color: white !important;
  border-radius: 0 4px 4px 0 !important;
  height: 40px;
  width: 40px;
  margin-left: -1px;
}

.search-btn:hover {
  background: #c82333 !important;
}

.cta-primary {
  font-weight: 600 !important;
  text-transform: uppercase !important;
  letter-spacing: 0.5px !important;
  border-radius: 4px !important;
  padding: 12px 32px !important;
}

.cta-secondary {
  font-weight: 600 !important;
  text-transform: uppercase !important;
  letter-spacing: 0.5px !important;
  border-radius: 4px !important;
  padding: 12px 32px !important;
  border: 2px solid white !important;
}

.award-badge {
  position: absolute;
  top: 2rem;
  right: 2rem;
  background: black;
  border: 2px solid #ffd700;
  border-radius: 8px;
  padding: 1.5rem;
  max-width: 280px;
  min-height: 320px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.badge-content {
  text-align: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
}

.badge-top {
  margin-bottom: 1rem;
}

.fortune-text {
  background: white;
  color: black;
  padding: 4px 12px;
  font-size: 0.75rem;
  font-weight: bold;
  border-radius: 2px;
  display: inline-block;
  border: 1px solid white;
}

.badge-main {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  margin-bottom: 1rem;
}

.badge-title {
  display: block;
  font-size: 1rem;
  font-weight: bold;
  color: white;
  line-height: 1.1;
  text-transform: uppercase;
}

.badge-title.innovative {
  color: #ffd700;
  font-size: 1.1rem;
}

.badge-year-container {
  margin: 1rem 0;
}

.badge-year {
  display: inline-block;
  font-size: 1.25rem;
  font-weight: bold;
  color: #ffd700;
  padding: 4px 12px;
  border: 1px solid #ffd700;
  border-radius: 2px;
}

.badge-bottom {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 0.75rem;
  color: white;
  margin-top: auto;
}

.statista-text {
  font-style: italic;
  text-transform: lowercase;
}

.statista-logo {
  width: 16px;
  height: 16px;
  background: white;
  color: black;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.6rem;
  font-weight: bold;
}

.section-padding {
  padding: 5rem 0;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.section-subtitle {
  font-size: 1.125rem;
  margin-bottom: 3rem;
}

.service-card {
  height: 100%;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-radius: 8px;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

.card-icon {
  margin-bottom: 1rem;
}

.stat-item {
  padding: 2rem 1rem;
}

.stat-number {
  font-size: 3rem;
  font-weight: 900;
  display: block;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 1.125rem;
  font-weight: 500;
}

.coast-to-coast-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  padding: 2rem 0;
}

.coast-heading {
  margin-bottom: 2rem;
}

.coast-heading h2 {
  font-size: 2.5rem;
  font-weight: bold;
  color: #000;
  margin: 0;
}

.coast-main {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 2rem;
}

.coast-text {
  flex: 1;
  max-width: 600px;
}

.coast-description {
  font-size: 1.2rem;
  color: black;
  line-height: 1.6;
  margin: 0;
}

.coast-button {
  flex-shrink: 0;
}

.coast-cta-btn {
  font-weight: 600 !important;
  text-transform: none !important;
  letter-spacing: 0.5px !important;
  padding: 12px 24px !important;
  background: #dc3545 !important;
  color: white !important;
  border: none !important;
  font-size: 1rem !important;
}

.coast-cta-btn:hover {
  background: #c82333 !important;
}

/* Slider Styles */
.slider-section {
  position: relative;
  height: 100vh;
  overflow: hidden;
}

.slider-container {
  position: relative;
  height: 100%;
}

.slider-tabs {
  position: absolute;
  top: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 1rem;
  z-index: 10;
}

.tab-indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: all 0.3s ease;
}

.tab-indicator.active {
  background: #dc3545;
  transform: scale(1.2);
}

.slider-content {
  position: relative;
  height: 100%;
}

.slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.5s ease;
  display: flex;
  flex-direction: column;
}

.slide.active {
  opacity: 1;
}

.slide-top {
  background: white;
  padding: 3rem 0;
  flex: 0 0 auto;
}

.stats-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.stat-item {
  text-align: center;
  position: relative;
}

.stat-line {
  width: 40px;
  height: 2px;
  background: #dc3545;
  margin: 0 auto 1rem;
}

.stat-number {
  font-size: 3rem;
  font-weight: bold;
  color: #000;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 1.125rem;
  color: #666;
  font-weight: 500;
}

.slide-bottom {
  flex: 1;
  background: linear-gradient(135deg, #87ceeb 0%, #4682b4 100%);
  position: relative;
  overflow: hidden;
}

.logistics-yard {
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.sky-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, #87ceeb 0%, #4682b4 100%);
}

.clouds {
  position: absolute;
  top: 20%;
  left: 10%;
  width: 100px;
  height: 40px;
  background: white;
  border-radius: 20px;
  opacity: 0.8;
}

.clouds::before {
  content: "";
  position: absolute;
  top: -20px;
  left: 20px;
  width: 60px;
  height: 60px;
  background: white;
  border-radius: 50%;
  opacity: 0.8;
}

.clouds::after {
  content: "";
  position: absolute;
  top: -10px;
  right: 10px;
  width: 40px;
  height: 40px;
  background: white;
  border-radius: 50%;
  opacity: 0.8;
}

.truck-container {
  position: relative;
  z-index: 5;
}

.truck {
  display: flex;
  align-items: flex-end;
  transform: perspective(1000px) rotateY(-15deg);
}

.truck-cab {
  width: 120px;
  height: 80px;
  background: white;
  border-radius: 8px 8px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.xpo-logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: #dc3545;
}

.truck-trailer {
  width: 300px;
  height: 120px;
  background: white;
  border-radius: 0 8px 8px 8px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.xpo-logo-large {
  font-size: 3rem;
  font-weight: bold;
  color: #dc3545;
  position: absolute;
  top: 20px;
}

.freight-first {
  font-size: 0.875rem;
  color: #000;
  position: absolute;
  bottom: 20px;
  font-weight: 500;
}

.truck-number {
  font-size: 0.75rem;
  color: #666;
  position: absolute;
  top: 10px;
  right: 15px;
}

.background-elements {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.warehouse-building {
  position: absolute;
  bottom: 20%;
  left: 10%;
  width: 200px;
  height: 100px;
  background: #f0f0f0;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.light-pole {
  position: absolute;
  bottom: 0;
  width: 4px;
  height: 80px;
  background: #666;
}

.light-pole::before {
  content: "";
  position: absolute;
  top: 0;
  left: -8px;
  width: 20px;
  height: 20px;
  background: #ffd700;
  border-radius: 50%;
  box-shadow: 0 0 10px #ffd700;
}

.light-pole-1 {
  left: 20%;
}

.light-pole-2 {
  left: 60%;
}

.light-pole-3 {
  right: 15%;
}

.additional-truck {
  position: absolute;
  width: 150px;
  height: 60px;
  background: white;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.truck-1 {
  bottom: 30%;
  left: 5%;
}

.truck-2 {
  bottom: 25%;
  right: 20%;
}

.truck-3 {
  bottom: 35%;
  right: 5%;
}

/* Capacity Section Styles */
.capacity-section {
  background: white;
  padding: 5rem 0;
}

.capacity-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.capacity-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 4rem;
  gap: 2rem;
}

.capacity-text {
  flex: 1;
  max-width: 600px;
}

.capacity-title {
  font-size: 3rem;
  font-weight: bold;
  color: #000;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.capacity-description {
  font-size: 1.25rem;
  color: #000;
  line-height: 1.6;
  margin: 0;
}

.capacity-button {
  flex-shrink: 0;
  margin-top: 0.5rem;
}

.about-us-btn {
  font-weight: 600 !important;
  text-transform: none !important;
  letter-spacing: 0.5px !important;
  border-radius: 4px !important;
  padding: 12px 24px !important;
  background: #dc3545 !important;
  color: white !important;
  border: none !important;
  font-size: 1rem !important;
}

.about-us-btn:hover {
  background: #c82333 !important;
}

.capacity-stats {
  display: flex;
  justify-content: space-between;
  gap: 2rem;
}

.stat-card {
  flex: 1;
  background: #000;
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  min-height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.stat-card .stat-number {
  font-size: 3rem;
  font-weight: bold;
  color: white;
  margin-bottom: 1rem;
  line-height: 1;
}

.stat-card .stat-label {
  font-size: 1.125rem;
  color: white;
  font-weight: 500;
  line-height: 1.3;
}

/* Technology Section Styles */
.technology-section {
  background: white;
  padding: 5rem 0;
}

.technology-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.technology-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 4rem;
  gap: 2rem;
}

.technology-text {
  flex: 1;
  max-width: 600px;
}

.technology-title {
  font-size: 3rem;
  font-weight: bold;
  color: #000;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.technology-description {
  font-size: 1.25rem;
  color: #000;
  line-height: 1.6;
  margin: 0;
}

.technology-button {
  flex-shrink: 0;
  margin-top: 0.5rem;
}

.web-tools-btn {
  font-weight: 600 !important;
  text-transform: none !important;
  letter-spacing: 0.5px !important;
  border-radius: 4px !important;
  padding: 12px 24px !important;
  background: #dc3545 !important;
  color: white !important;
  border: none !important;
  font-size: 1rem !important;
}

.web-tools-btn:hover {
  background: #c82333 !important;
}

.technology-blocks {
  display: flex;
  gap: 2rem;
}

.tech-block {
  flex: 1;
  background: #1a1a1a;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  min-height: 500px;
}

.block-content {
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.block-stat {
  padding: 2rem;
  text-align: center;
}

.block-stat .stat-number {
  font-size: 2.5rem;
  font-weight: bold;
  color: white;
  margin-bottom: 0.5rem;
  line-height: 1;
}

.block-stat .stat-label {
  font-size: 1rem;
  color: white;
  font-weight: 400;
  line-height: 1.4;
}

.block-image {
  flex: 1;
  position: relative;
  background: linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-placeholder {
  text-align: center;
  padding: 2rem;
}

.image-text {
  color: white;
  font-size: 0.875rem;
  margin-top: 1rem;
  opacity: 0.7;
}

.block-features {
  padding: 2rem;
  background: rgba(0, 0, 0, 0.3);
}

.features-title {
  font-size: 1.125rem;
  font-weight: bold;
  color: white;
  margin-bottom: 1rem;
}

.features-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.features-list li {
  color: white;
  font-size: 1rem;
  margin-bottom: 0.5rem;
  padding-left: 1rem;
  position: relative;
}

.features-list li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #dc3545;
}

/* Accountability Section Styles */
.accountability-section {
  background: white;
  padding: 5rem 0;
}

.accountability-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.accountability-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 4rem;
  gap: 2rem;
}

.accountability-text {
  flex: 1;
  max-width: 600px;
}

.accountability-title {
  font-size: 3rem;
  font-weight: bold;
  color: #000;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.accountability-description {
  font-size: 1.25rem;
  color: #000;
  line-height: 1.6;
  margin: 0;
}

.accountability-button {
  flex-shrink: 0;
  margin-top: 0.5rem;
}

.services-btn {
  font-weight: 600 !important;
  text-transform: none !important;
  letter-spacing: 0.5px !important;
  border-radius: 4px !important;
  padding: 12px 24px !important;
  background: #dc3545 !important;
  color: white !important;
  border: none !important;
  font-size: 1rem !important;
}

.services-btn:hover {
  background: #c82333 !important;
}

.accountability-blocks {
  display: flex;
  gap: 2rem;
}

.accountability-block {
  flex: 1;
  display: flex;
  min-height: 400px;
}

.block-quote {
  flex: 1;
  background: #000;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.quote-text {
  font-size: 1.125rem;
  color: white;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-style: italic;
}

.quote-attribution {
  font-size: 0.875rem;
  color: white;
  font-weight: 500;
}

.block-image {
  flex: 1;
  background: linear-gradient(135deg, #f0f0f0 0%, #e0e0e0 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.block-image .image-placeholder {
  text-align: center;
  padding: 2rem;
}

.block-image .image-text {
  color: #666;
  font-size: 0.875rem;
  margin-top: 1rem;
}

/* Recruitment Section Styles */
.recruitment-section {
  background: white;
  padding: 5rem 0;
}

.recruitment-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.recruitment-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 4rem;
  gap: 2rem;
}

.recruitment-text {
  flex: 1;
  max-width: 600px;
}

.recruitment-title {
  font-size: 3rem;
  font-weight: bold;
  color: #000;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.recruitment-description {
  font-size: 1.25rem;
  color: #000;
  line-height: 1.6;
  margin: 0;
}

.recruitment-button {
  flex-shrink: 0;
  margin-top: 0.5rem;
}

.careers-btn {
  font-weight: 600 !important;
  text-transform: none !important;
  letter-spacing: 0.5px !important;
  border-radius: 4px !important;
  padding: 12px 24px !important;
  background: #dc3545 !important;
  color: white !important;
  border: none !important;
  font-size: 1rem !important;
}

.careers-btn:hover {
  background: #c82333 !important;
}

.job-cards {
  display: flex;
  gap: 2rem;
}

.job-card {
  flex: 1;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.job-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.employee-portrait {
  height: 200px;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.portrait-placeholder {
  text-align: center;
  padding: 1rem;
}

.portrait-text {
  color: #666;
  font-size: 0.75rem;
  margin-top: 0.5rem;
  opacity: 0.7;
}

.job-info {
  padding: 1.5rem;
}

.job-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #000;
  margin-bottom: 1rem;
}

.job-description {
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.learn-more-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: color 0.3s ease;
}

.learn-more-link:hover {
  color: #c82333;
}

.link-text {
  color: #dc3545;
  font-weight: 500;
  font-size: 0.875rem;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .hero-description {
    font-size: 1rem;
  }

  .award-badge {
    position: relative;
    top: auto;
    right: auto;
    margin: 0 auto 2rem auto;
    max-width: 250px;
  }

  .section-title {
    font-size: 2rem;
  }

  .stat-number {
    font-size: 2rem;
  }

  .coast-to-coast-content {
    padding: 1rem 0;
  }

  .coast-heading h2 {
    font-size: 2rem;
  }

  .coast-main {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
  }

  .coast-description {
    font-size: 1rem;
    padding: 0.75rem 1rem;
  }

  .coast-cta-btn {
    padding: 10px 20px !important;
  }

  .slider-section {
    height: 80vh;
  }

  .slide-top {
    padding: 2rem 0;
  }

  .stats-container {
    flex-direction: column;
    gap: 2rem;
  }

  .stat-number {
    font-size: 2rem;
  }

  .stat-label {
    font-size: 1rem;
  }

  .truck {
    transform: perspective(1000px) rotateY(-5deg) scale(0.8);
  }

  .truck-cab {
    width: 80px;
    height: 60px;
  }

  .truck-trailer {
    width: 200px;
    height: 80px;
  }

  .xpo-logo-large {
    font-size: 2rem;
  }

  .technology-section {
    padding: 3rem 0;
  }

  .technology-header {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 3rem;
    gap: 1.5rem;
  }

  .technology-title {
    font-size: 2.5rem;
  }

  .technology-description {
    font-size: 1.125rem;
  }

  .technology-button {
    margin-top: 0;
  }

  .technology-blocks {
    flex-direction: column;
    gap: 1.5rem;
  }

  .tech-block {
    min-height: 400px;
  }

  .block-stat .stat-number {
    font-size: 2rem;
  }

  .block-stat .stat-label {
    font-size: 0.875rem;
  }

  .features-title {
    font-size: 1rem;
  }

  .features-list li {
    font-size: 0.875rem;
  }

  .accountability-section {
    padding: 3rem 0;
  }

  .accountability-header {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 3rem;
    gap: 1.5rem;
  }

  .accountability-title {
    font-size: 2.5rem;
  }

  .accountability-description {
    font-size: 1.125rem;
  }

  .accountability-button {
    margin-top: 0;
  }

  .accountability-blocks {
    flex-direction: column;
    gap: 1.5rem;
  }

  .accountability-block {
    flex-direction: column;
    min-height: auto;
  }

  .block-quote {
    padding: 1.5rem;
  }

  .quote-text {
    font-size: 1rem;
  }

  .quote-attribution {
    font-size: 0.75rem;
  }

  .recruitment-section {
    padding: 3rem 0;
  }

  .recruitment-header {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 3rem;
    gap: 1.5rem;
  }

  .recruitment-title {
    font-size: 2.5rem;
  }

  .recruitment-description {
    font-size: 1.125rem;
  }

  .recruitment-button {
    margin-top: 0;
  }

  .job-cards {
    flex-direction: column;
    gap: 1.5rem;
  }

  .job-card {
    max-width: 100%;
  }

  .employee-portrait {
    height: 150px;
  }

  .job-title {
    font-size: 1.25rem;
  }

  .job-description {
    font-size: 0.875rem;
  }
}
</style>
