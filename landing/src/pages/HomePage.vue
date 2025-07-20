<template>
  <q-page>
    <!-- Hero Section -->
    <section class="hero-section">
      <!-- Animated Background -->
      <div class="hero-background">
        <div class="hero-overlay"></div>
        <div class="floating-elements">
          <div class="floating-icon" style="--delay: 0s">
            <q-icon name="local_shipping" size="2rem" />
          </div>
          <div class="floating-icon" style="--delay: 2s">
            <q-icon name="warehouse" size="1.5rem" />
          </div>
          <div class="floating-icon" style="--delay: 4s">
            <q-icon name="flight" size="1.8rem" />
          </div>
          <div class="floating-icon" style="--delay: 1s">
            <q-icon name="location_on" size="1.2rem" />
          </div>
        </div>
      </div>

      <div class="hero-content">
        <div class="container">
          <!-- Tracking Section -->
          <div class="tracking-section">
            <div class="tracking-card">
              <div class="tracking-header">
                <q-icon name="search" size="1.5rem" class="tracking-icon" />
                <h3 class="tracking-title">{{ $t("hero.trackingTitle") }}</h3>
              </div>
              <div class="tracking-input-group">
                <q-input
                  v-model="trackingNumber"
                  :placeholder="$t('hero.trackingPlaceholder')"
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
                      class="search-btn"
                      @click="trackShipment"
                    />
                  </template>
                </q-input>
              </div>
            </div>
          </div>

          <!-- Main Hero Content -->
          <div class="hero-main">
            <!-- Award Badge -->
            <div class="award-badge">
              <div class="badge-content">
                <div class="badge-top">
                  <span class="fortune-text">{{ $t("award.fortune") }}</span>
                </div>
                <div class="badge-main">
                  <span class="badge-title">{{ $t("award.title") }}</span>
                  <span class="badge-year">{{ $t("award.year") }}</span>
                </div>
                <div class="badge-bottom">
                  <div class="badge-stats">
                    <div class="stat-item">
                      <span class="stat-number">99.9%</span>
                      <span class="stat-label">{{
                        $t("award.deliveryRate")
                      }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Main Headline -->
            <h1 class="hero-title">{{ $t("hero.title") }}</h1>

            <!-- Description -->
            <p class="hero-description">{{ $t("hero.description") }}</p>

            <!-- Features Grid -->
            <div class="hero-features-grid">
              <div class="hero-feature-card">
                <div class="feature-check">
                  <q-icon name="check" size="1rem" />
                </div>
                <div class="feature-text">{{ heroFeature1 }}</div>
              </div>
              <div class="hero-feature-card">
                <div class="feature-check">
                  <q-icon name="check" size="1rem" />
                </div>
                <div class="feature-text">{{ heroFeature2 }}</div>
              </div>
              <div class="hero-feature-card">
                <div class="feature-check">
                  <q-icon name="check" size="1rem" />
                </div>
                <div class="feature-text">{{ heroFeature3 }}</div>
              </div>
              <div class="hero-feature-card">
                <div class="feature-check">
                  <q-icon name="check" size="1rem" />
                </div>
                <div class="feature-text">{{ heroFeature4 }}</div>
              </div>
            </div>

            <!-- CTA Buttons -->
            <div class="hero-cta">
              <q-btn
                size="xl"
                :label="$t('hero.ctaButton')"
                class="cta-primary"
                @click="requestQuote"
              />
              <q-btn
                outline
                size="xl"
                :label="$t('common.learnMore')"
                class="cta-secondary"
                @click="contactUs"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Take Control Section -->
    <section class="take-control-section">
      <div class="container">
        <div class="take-control-content">
          <!-- Main Heading -->
          <div class="control-header">
            <div class="control-icon">
              <q-icon name="control_camera" size="4rem" />
            </div>
            <h2 class="control-title">{{ $t("takeControl.title") }}</h2>
            <p class="control-subtitle">{{ $t("takeControl.subtitle") }}</p>
          </div>

          <!-- Features Grid -->
          <div class="control-features">
            <div class="feature-card">
              <div class="feature-icon">
                <q-icon :name="takeControlFeature1Icon" size="2.5rem" />
              </div>
              <h3 class="feature-title">{{ takeControlFeature1Title }}</h3>
              <p class="feature-description">
                {{ takeControlFeature1Description }}
              </p>
            </div>
            <div class="feature-card">
              <div class="feature-icon">
                <q-icon :name="takeControlFeature2Icon" size="2.5rem" />
              </div>
              <h3 class="feature-title">{{ takeControlFeature2Title }}</h3>
              <p class="feature-description">
                {{ takeControlFeature2Description }}
              </p>
            </div>
            <div class="feature-card">
              <div class="feature-icon">
                <q-icon :name="takeControlFeature3Icon" size="2.5rem" />
              </div>
              <h3 class="feature-title">{{ takeControlFeature3Title }}</h3>
              <p class="feature-description">
                {{ takeControlFeature3Description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission Critical Section -->
    <section class="mission-section">
      <div class="container">
        <div class="mission-content">
          <!-- Left Content -->
          <div class="mission-left">
            <div class="mission-badge">
              <q-icon name="priority_high" size="2rem" />
              <span>{{ $t("mission.badge") }}</span>
            </div>
            <h2 class="mission-title">{{ $t("mission.title") }}</h2>
            <p class="mission-description">{{ $t("mission.description") }}</p>
          </div>

          <!-- Right Content -->
          <div class="mission-right">
            <div class="mission-grid">
              <div class="mission-item">
                <div class="item-icon">
                  <q-icon :name="missionItem1Icon" size="2rem" />
                </div>
                <div class="item-content">
                  <h4 class="item-title">{{ missionItem1Title }}</h4>
                  <p class="item-description">{{ missionItem1Description }}</p>
                </div>
              </div>
              <div class="mission-item">
                <div class="item-icon">
                  <q-icon :name="missionItem2Icon" size="2rem" />
                </div>
                <div class="item-content">
                  <h4 class="item-title">{{ missionItem2Title }}</h4>
                  <p class="item-description">{{ missionItem2Description }}</p>
                </div>
              </div>
              <div class="mission-item">
                <div class="item-icon">
                  <q-icon :name="missionItem3Icon" size="2rem" />
                </div>
                <div class="item-content">
                  <h4 class="item-title">{{ missionItem3Title }}</h4>
                  <p class="item-description">{{ missionItem3Description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Freight First Section -->
        <div class="freight-first-section">
          <div class="freight-content">
            <div class="freight-left">
              <h2 class="freight-title">{{ $t("freightFirst.title") }}</h2>
            </div>
            <div class="freight-right">
              <p class="freight-description">
                {{ $t("freightFirst.description") }}
              </p>
              <div class="freight-stats">
                <div class="stat-item">
                  <div class="stat-number">{{ freightStat1Number }}</div>
                  <div class="stat-label">{{ freightStat1Label }}</div>
                </div>
                <div class="stat-item">
                  <div class="stat-number">{{ freightStat2Number }}</div>
                  <div class="stat-label">{{ freightStat2Label }}</div>
                </div>
                <div class="stat-item">
                  <div class="stat-number">{{ freightStat3Number }}</div>
                  <div class="stat-label">{{ freightStat3Label }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Coast to Coast Network Section -->
    <section class="coast-section">
      <div class="container">
        <div class="coast-content">
          <!-- Header Section -->
          <div class="coast-header">
            <div class="coast-icon">
              <q-icon name="public" size="4rem" />
            </div>
            <h2 class="coast-title">{{ $t("coastToCoast.title") }}</h2>
            <p class="coast-subtitle">{{ $t("coastToCoast.subtitle") }}</p>
          </div>

          <!-- Network Map Visualization -->
          <div class="network-visualization">
            <div class="map-container">
              <div class="map-background">
                <div class="map-grid">
                  <div class="grid-point" v-for="i in 50" :key="i"></div>
                </div>
                <div class="connection-lines">
                  <div class="line line-1"></div>
                  <div class="line line-2"></div>
                  <div class="line line-3"></div>
                </div>
                <div class="location-markers">
                  <div class="marker marker-east" data-aos="fade-right">
                    <q-icon name="location_on" size="1.5rem" />
                    <span class="marker-label">{{
                      $t("coastToCoast.east")
                    }}</span>
                  </div>
                  <div class="marker marker-west" data-aos="fade-left">
                    <q-icon name="location_on" size="1.5rem" />
                    <span class="marker-label">{{
                      $t("coastToCoast.west")
                    }}</span>
                  </div>
                  <div class="marker marker-central" data-aos="zoom-in">
                    <q-icon name="location_on" size="1.5rem" />
                    <span class="marker-label">{{
                      $t("coastToCoast.central")
                    }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Coverage Stats -->
          <div class="coverage-stats">
            <div class="stat-card">
              <div class="stat-icon">
                <q-icon :name="coastStat1Icon" size="2rem" />
              </div>
              <div class="stat-number">{{ coastStat1Number }}</div>
              <div class="stat-label">{{ coastStat1Label }}</div>
            </div>
            <div class="stat-card">
              <div class="stat-icon">
                <q-icon :name="coastStat2Icon" size="2rem" />
              </div>
              <div class="stat-number">{{ coastStat2Number }}</div>
              <div class="stat-label">{{ coastStat2Label }}</div>
            </div>
            <div class="stat-card">
              <div class="stat-icon">
                <q-icon :name="coastStat3Icon" size="2rem" />
              </div>
              <div class="stat-number">{{ coastStat3Number }}</div>
              <div class="stat-label">{{ coastStat3Label }}</div>
            </div>
          </div>

          <!-- CTA Section -->
          <div class="coast-cta">
            <q-btn
              size="lg"
              :label="$t('coastToCoast.ctaButton')"
              class="coast-cta-btn"
              @click="seeWhereWeShip"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Modern Stats Slider Section -->
    <section class="stats-slider-section">
      <div class="container">
        <div class="slider-content">
          <!-- Header -->
          <div class="slider-header">
            <h2 class="slider-title">{{ $t("statsSlider.title") }}</h2>
            <p class="slider-subtitle">{{ $t("statsSlider.subtitle") }}</p>
          </div>

          <!-- Tab Indicators -->
          <div class="slider-tabs">
            <div
              class="tab-indicator"
              :class="{ active: currentSlide === 0 }"
              @click="goToSlide(0)"
            >
              <div class="tab-icon">
                <q-icon name="local_shipping" size="1.2rem" />
              </div>
              <span class="tab-label">{{ $t("statsSlider.tabs.fleet") }}</span>
            </div>
            <div
              class="tab-indicator"
              :class="{ active: currentSlide === 1 }"
              @click="goToSlide(1)"
            >
              <div class="tab-icon">
                <q-icon name="business" size="1.2rem" />
              </div>
              <span class="tab-label">{{
                $t("statsSlider.tabs.network")
              }}</span>
            </div>
            <div
              class="tab-indicator"
              :class="{ active: currentSlide === 2 }"
              @click="goToSlide(2)"
            >
              <div class="tab-icon">
                <q-icon name="verified" size="1.2rem" />
              </div>
              <span class="tab-label">{{
                $t("statsSlider.tabs.performance")
              }}</span>
            </div>
          </div>

          <!-- Slide Content -->
          <div class="slides-container">
            <div class="slide" :class="{ active: currentSlide === 0 }">
              <div class="slide-content">
                <div class="stats-grid">
                  <div class="stat-card">
                    <div class="stat-icon">
                      <q-icon :name="fleetStat1Icon" size="2rem" />
                    </div>
                    <div class="stat-number">{{ fleetStat1Number }}</div>
                    <div class="stat-label">{{ fleetStat1Label }}</div>
                  </div>
                  <div class="stat-card">
                    <div class="stat-icon">
                      <q-icon :name="fleetStat2Icon" size="2rem" />
                    </div>
                    <div class="stat-number">{{ fleetStat2Number }}</div>
                    <div class="stat-label">{{ fleetStat2Label }}</div>
                  </div>
                  <div class="stat-card">
                    <div class="stat-icon">
                      <q-icon :name="fleetStat3Icon" size="2rem" />
                    </div>
                    <div class="stat-number">{{ fleetStat3Number }}</div>
                    <div class="stat-label">{{ fleetStat3Label }}</div>
                  </div>
                </div>
                <div class="slide-visual">
                  <div class="fleet-visualization">
                    <div class="truck-fleet">
                      <div class="truck truck-1" data-aos="slide-right">
                        <div class="truck-body">
                          <div class="truck-cab"></div>
                          <div class="truck-trailer"></div>
                        </div>
                        <div class="truck-shadow"></div>
                      </div>
                      <div
                        class="truck truck-2"
                        data-aos="slide-right"
                        data-aos-delay="200"
                      >
                        <div class="truck-body">
                          <div class="truck-cab"></div>
                          <div class="truck-trailer"></div>
                        </div>
                        <div class="truck-shadow"></div>
                      </div>
                      <div
                        class="truck truck-3"
                        data-aos="slide-right"
                        data-aos-delay="400"
                      >
                        <div class="truck-body">
                          <div class="truck-cab"></div>
                          <div class="truck-trailer"></div>
                        </div>
                        <div class="truck-shadow"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="slide" :class="{ active: currentSlide === 1 }">
              <div class="slide-content">
                <div class="stats-grid">
                  <div class="stat-card">
                    <div class="stat-icon">
                      <q-icon :name="networkStat1Icon" size="2rem" />
                    </div>
                    <div class="stat-number">{{ networkStat1Number }}</div>
                    <div class="stat-label">{{ networkStat1Label }}</div>
                  </div>
                  <div class="stat-card">
                    <div class="stat-icon">
                      <q-icon :name="networkStat2Icon" size="2rem" />
                    </div>
                    <div class="stat-number">{{ networkStat2Number }}</div>
                    <div class="stat-label">{{ networkStat2Label }}</div>
                  </div>
                  <div class="stat-card">
                    <div class="stat-icon">
                      <q-icon :name="networkStat3Icon" size="2rem" />
                    </div>
                    <div class="stat-number">{{ networkStat3Number }}</div>
                    <div class="stat-label">{{ networkStat3Label }}</div>
                  </div>
                </div>
                <div class="slide-visual">
                  <div class="network-visualization">
                    <div class="network-map">
                      <div class="map-point" v-for="i in 20" :key="i"></div>
                      <div
                        class="connection-line"
                        v-for="i in 8"
                        :key="i"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="slide" :class="{ active: currentSlide === 2 }">
              <div class="slide-content">
                <div class="stats-grid">
                  <div class="stat-card">
                    <div class="stat-icon">
                      <q-icon :name="performanceStat1Icon" size="2rem" />
                    </div>
                    <div class="stat-number">{{ performanceStat1Number }}</div>
                    <div class="stat-label">{{ performanceStat1Label }}</div>
                  </div>
                  <div class="stat-card">
                    <div class="stat-icon">
                      <q-icon :name="performanceStat2Icon" size="2rem" />
                    </div>
                    <div class="stat-number">{{ performanceStat2Number }}</div>
                    <div class="stat-label">{{ performanceStat2Label }}</div>
                  </div>
                  <div class="stat-card">
                    <div class="stat-icon">
                      <q-icon :name="performanceStat3Icon" size="2rem" />
                    </div>
                    <div class="stat-number">{{ performanceStat3Number }}</div>
                    <div class="stat-label">{{ performanceStat3Label }}</div>
                  </div>
                </div>
                <div class="slide-visual">
                  <div class="performance-visualization">
                    <div class="performance-chart">
                      <div
                        class="chart-bar"
                        v-for="(bar, index) in [95, 98, 99, 97, 100]"
                        :key="index"
                      >
                        <div
                          class="bar-fill"
                          :style="{ height: bar + '%' }"
                        ></div>
                        <div class="bar-label">{{ bar }}%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Modern Capacity Section -->
    <section class="capacity-section">
      <div class="container">
        <div class="capacity-content">
          <!-- Header Area -->
          <div class="capacity-header">
            <div class="capacity-text">
              <div class="capacity-badge">
                <q-icon name="trending_up" size="1.5rem" />
                <span>{{ $t("capacity.badge") }}</span>
              </div>
              <h2 class="capacity-title">{{ $t("capacity.title") }}</h2>
              <p class="capacity-description">
                {{ $t("capacity.description") }}
              </p>
            </div>
            <div class="capacity-button">
              <q-btn
                size="lg"
                :label="$t('capacity.ctaButton')"
                class="capacity-cta-btn"
                @click="aboutUs"
              />
            </div>
          </div>

          <!-- Growth Visualization -->
          <div class="growth-visualization">
            <div class="growth-chart">
              <div class="chart-line">
                <div class="line-segment" v-for="i in 5" :key="i"></div>
              </div>
              <div class="growth-points">
                <div class="growth-point" v-for="i in 6" :key="i">
                  <div class="point-dot"></div>
                  <div class="point-label">
                    {{ $t(`capacity.growthPoints.${i - 1}`) }}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Statistical Data Blocks -->
          <div class="capacity-stats">
            <div class="stat-card" data-aos="fade-up" data-aos-delay="0">
              <div class="stat-icon">
                <q-icon :name="capacityStat1Icon" size="2.5rem" />
              </div>
              <div class="stat-number">{{ capacityStat1Number }}</div>
              <div class="stat-label">{{ capacityStat1Label }}</div>
              <div class="stat-trend">
                <q-icon name="trending_up" size="1rem" />
                <span>{{ capacityStat1Trend }}</span>
              </div>
            </div>
            <div class="stat-card" data-aos="fade-up" data-aos-delay="200">
              <div class="stat-icon">
                <q-icon :name="capacityStat2Icon" size="2.5rem" />
              </div>
              <div class="stat-number">{{ capacityStat2Number }}</div>
              <div class="stat-label">{{ capacityStat2Label }}</div>
              <div class="stat-trend">
                <q-icon name="trending_up" size="1rem" />
                <span>{{ capacityStat2Trend }}</span>
              </div>
            </div>
            <div class="stat-card" data-aos="fade-up" data-aos-delay="400">
              <div class="stat-icon">
                <q-icon :name="capacityStat3Icon" size="2.5rem" />
              </div>
              <div class="stat-number">{{ capacityStat3Number }}</div>
              <div class="stat-label">{{ capacityStat3Label }}</div>
              <div class="stat-trend">
                <q-icon name="trending_up" size="1rem" />
                <span>{{ capacityStat3Trend }}</span>
              </div>
            </div>
          </div>

          <!-- Capacity Features -->
          <div class="capacity-features">
            <div class="feature-item" data-aos="fade-right" data-aos-delay="0">
              <div class="feature-icon">
                <q-icon :name="capacityFeature1Icon" size="2rem" />
              </div>
              <div class="feature-content">
                <h3 class="feature-title">{{ capacityFeature1Title }}</h3>
                <p class="feature-description">
                  {{ capacityFeature1Description }}
                </p>
              </div>
            </div>
            <div
              class="feature-item"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              <div class="feature-icon">
                <q-icon :name="capacityFeature2Icon" size="2rem" />
              </div>
              <div class="feature-content">
                <h3 class="feature-title">{{ capacityFeature2Title }}</h3>
                <p class="feature-description">
                  {{ capacityFeature2Description }}
                </p>
              </div>
            </div>
            <div
              class="feature-item"
              data-aos="fade-right"
              data-aos-delay="600"
            >
              <div class="feature-icon">
                <q-icon :name="capacityFeature3Icon" size="2rem" />
              </div>
              <div class="feature-content">
                <h3 class="feature-title">{{ capacityFeature3Title }}</h3>
                <p class="feature-description">
                  {{ capacityFeature3Description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Modern Technology Section -->
    <section class="technology-section">
      <div class="container">
        <div class="technology-content">
          <!-- Header Area -->
          <div class="technology-header">
            <div class="technology-text">
              <div class="technology-badge">
                <q-icon name="memory" size="1.5rem" />
                <span>{{ $t("technology.badge") }}</span>
              </div>
              <h2 class="technology-title">{{ $t("technology.title") }}</h2>
              <p class="technology-description">
                {{ $t("technology.description") }}
              </p>
            </div>
            <div class="technology-button">
              <q-btn
                size="lg"
                :label="$t('technology.ctaButton')"
                class="technology-cta-btn"
                @click="webTools"
              />
            </div>
          </div>

          <!-- Technology Stats -->
          <div class="tech-stats">
            <div class="tech-stat-card" data-aos="fade-up" data-aos-delay="0">
              <div class="stat-icon">
                <q-icon :name="techStat1Icon" size="2.5rem" />
              </div>
              <div class="stat-number">{{ techStat1Number }}</div>
              <div class="stat-label">{{ techStat1Label }}</div>
              <div class="stat-description">{{ techStat1Description }}</div>
            </div>
            <div class="tech-stat-card" data-aos="fade-up" data-aos-delay="200">
              <div class="stat-icon">
                <q-icon :name="techStat2Icon" size="2.5rem" />
              </div>
              <div class="stat-number">{{ techStat2Number }}</div>
              <div class="stat-label">{{ techStat2Label }}</div>
              <div class="stat-description">{{ techStat2Description }}</div>
            </div>
            <div class="tech-stat-card" data-aos="fade-up" data-aos-delay="400">
              <div class="stat-icon">
                <q-icon :name="techStat3Icon" size="2.5rem" />
              </div>
              <div class="stat-number">{{ techStat3Number }}</div>
              <div class="stat-label">{{ techStat3Label }}</div>
              <div class="stat-description">{{ techStat3Description }}</div>
            </div>
          </div>

          <!-- Technology Features Grid -->
          <div class="tech-features-grid">
            <div
              class="tech-feature-card"
              data-aos="fade-right"
              data-aos-delay="0"
            >
              <div class="feature-header">
                <div class="feature-icon">
                  <q-icon :name="techFeature1Icon" size="2rem" />
                </div>
                <h3 class="feature-title">{{ techFeature1Title }}</h3>
              </div>
              <p class="feature-description">{{ techFeature1Description }}</p>
              <div class="feature-benefits">
                <div class="benefit-item">
                  <q-icon name="check_circle" size="1rem" />
                  <span>{{ techFeature1Benefit1 }}</span>
                </div>
                <div class="benefit-item">
                  <q-icon name="check_circle" size="1rem" />
                  <span>{{ techFeature1Benefit2 }}</span>
                </div>
                <div class="benefit-item">
                  <q-icon name="check_circle" size="1rem" />
                  <span>{{ techFeature1Benefit3 }}</span>
                </div>
              </div>
            </div>
            <div
              class="tech-feature-card"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              <div class="feature-header">
                <div class="feature-icon">
                  <q-icon :name="techFeature2Icon" size="2rem" />
                </div>
                <h3 class="feature-title">{{ techFeature2Title }}</h3>
              </div>
              <p class="feature-description">{{ techFeature2Description }}</p>
              <div class="feature-benefits">
                <div class="benefit-item">
                  <q-icon name="check_circle" size="1rem" />
                  <span>{{ techFeature2Benefit1 }}</span>
                </div>
                <div class="benefit-item">
                  <q-icon name="check_circle" size="1rem" />
                  <span>{{ techFeature2Benefit2 }}</span>
                </div>
                <div class="benefit-item">
                  <q-icon name="check_circle" size="1rem" />
                  <span>{{ techFeature2Benefit3 }}</span>
                </div>
              </div>
            </div>
            <div
              class="tech-feature-card"
              data-aos="fade-right"
              data-aos-delay="600"
            >
              <div class="feature-header">
                <div class="feature-icon">
                  <q-icon :name="techFeature3Icon" size="2rem" />
                </div>
                <h3 class="feature-title">{{ techFeature3Title }}</h3>
              </div>
              <p class="feature-description">{{ techFeature3Description }}</p>
              <div class="feature-benefits">
                <div class="benefit-item">
                  <q-icon name="check_circle" size="1rem" />
                  <span>{{ techFeature3Benefit1 }}</span>
                </div>
                <div class="benefit-item">
                  <q-icon name="check_circle" size="1rem" />
                  <span>{{ techFeature3Benefit2 }}</span>
                </div>
                <div class="benefit-item">
                  <q-icon name="check_circle" size="1rem" />
                  <span>{{ techFeature3Benefit3 }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Technology Visualization -->
          <div class="tech-visualization">
            <div class="visualization-container">
              <div class="tech-dashboard">
                <div class="dashboard-header">
                  <div class="dashboard-title">
                    {{ $t("technology.dashboard.title") }}
                  </div>
                  <div class="dashboard-status">
                    <div class="status-dot"></div>
                    <span>{{ $t("technology.dashboard.status") }}</span>
                  </div>
                </div>
                <div class="dashboard-content">
                  <div class="dashboard-metrics">
                    <div class="metric">
                      <div class="metric-label">
                        {{ dashboardMetric1Label }}
                      </div>
                      <div class="metric-value">
                        {{ dashboardMetric1Value }}
                      </div>
                      <div class="metric-trend" :class="dashboardMetric1Trend">
                        <q-icon
                          :name="
                            dashboardMetric1Trend === 'up'
                              ? 'trending_up'
                              : 'trending_down'
                          "
                          size="1rem"
                        />
                        <span>{{ dashboardMetric1Change }}</span>
                      </div>
                    </div>
                    <div class="metric">
                      <div class="metric-label">
                        {{ dashboardMetric2Label }}
                      </div>
                      <div class="metric-value">
                        {{ dashboardMetric2Value }}
                      </div>
                      <div class="metric-trend" :class="dashboardMetric2Trend">
                        <q-icon
                          :name="
                            dashboardMetric2Trend === 'up'
                              ? 'trending_up'
                              : 'trending_down'
                          "
                          size="1rem"
                        />
                        <span>{{ dashboardMetric2Change }}</span>
                      </div>
                    </div>
                    <div class="metric">
                      <div class="metric-label">
                        {{ dashboardMetric3Label }}
                      </div>
                      <div class="metric-value">
                        {{ dashboardMetric3Value }}
                      </div>
                      <div class="metric-trend" :class="dashboardMetric3Trend">
                        <q-icon
                          :name="
                            dashboardMetric3Trend === 'up'
                              ? 'trending_up'
                              : 'trending_down'
                          "
                          size="1rem"
                        />
                        <span>{{ dashboardMetric3Change }}</span>
                      </div>
                    </div>
                  </div>
                  <div class="dashboard-chart">
                    <div class="chart-bars">
                      <div class="chart-bar" v-for="i in 8" :key="i"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Modern Accountability Section -->
    <section class="accountability-section">
      <div class="container">
        <div class="accountability-content">
          <!-- Header Area -->
          <div class="accountability-header">
            <div class="accountability-text">
              <div class="accountability-badge">
                <q-icon name="verified" size="1.5rem" />
                <span>{{ $t("accountability.badge") }}</span>
              </div>
              <h2 class="accountability-title">
                {{ $t("accountability.title") }}
              </h2>
              <p class="accountability-description">
                {{ $t("accountability.description") }}
              </p>
            </div>
            <div class="accountability-button">
              <q-btn
                size="lg"
                :label="$t('accountability.ctaButton')"
                class="accountability-cta-btn"
                @click="services"
              />
            </div>
          </div>

          <!-- Accountability Features -->
          <div class="accountability-features">
            <div
              class="accountability-feature"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              <div class="feature-icon">
                <q-icon :name="accountabilityFeature1Icon" size="2rem" />
              </div>
              <h3 class="feature-title">{{ accountabilityFeature1Title }}</h3>
              <p class="feature-description">
                {{ accountabilityFeature1Description }}
              </p>
            </div>
            <div
              class="accountability-feature"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div class="feature-icon">
                <q-icon :name="accountabilityFeature2Icon" size="2rem" />
              </div>
              <h3 class="feature-title">{{ accountabilityFeature2Title }}</h3>
              <p class="feature-description">
                {{ accountabilityFeature2Description }}
              </p>
            </div>
            <div
              class="accountability-feature"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div class="feature-icon">
                <q-icon :name="accountabilityFeature3Icon" size="2rem" />
              </div>
              <h3 class="feature-title">{{ accountabilityFeature3Title }}</h3>
              <p class="feature-description">
                {{ accountabilityFeature3Description }}
              </p>
            </div>
          </div>

          <!-- Customer Testimonials -->
          <div class="testimonials-section">
            <div class="testimonials-header">
              <h3 class="testimonials-title">
                {{ $t("accountability.testimonials.title") }}
              </h3>
              <p class="testimonials-subtitle">
                {{ $t("accountability.testimonials.subtitle") }}
              </p>
            </div>

            <div class="testimonials-grid">
              <div
                class="testimonial-card"
                data-aos="fade-right"
                data-aos-delay="0"
              >
                <div class="testimonial-content">
                  <div class="quote-icon">
                    <q-icon name="format_quote" size="2rem" />
                  </div>
                  <p class="testimonial-text">{{ testimonial1Quote }}</p>
                  <div class="testimonial-author">
                    <div class="author-info">
                      <div class="author-name">{{ testimonial1Author }}</div>
                      <div class="author-title">{{ testimonial1Title }}</div>
                      <div class="author-company">
                        {{ testimonial1Company }}
                      </div>
                    </div>
                    <div class="author-avatar">
                      <q-icon :name="testimonial1Avatar" size="2rem" />
                    </div>
                  </div>
                </div>
                <div class="testimonial-rating">
                  <q-icon
                    name="star"
                    size="1rem"
                    v-for="i in 5"
                    :key="i"
                    :class="{ filled: i <= testimonial1Rating }"
                  />
                </div>
              </div>
              <div
                class="testimonial-card"
                data-aos="fade-right"
                data-aos-delay="300"
              >
                <div class="testimonial-content">
                  <div class="quote-icon">
                    <q-icon name="format_quote" size="2rem" />
                  </div>
                  <p class="testimonial-text">{{ testimonial2Quote }}</p>
                  <div class="testimonial-author">
                    <div class="author-info">
                      <div class="author-name">{{ testimonial2Author }}</div>
                      <div class="author-title">{{ testimonial2Title }}</div>
                      <div class="author-company">
                        {{ testimonial2Company }}
                      </div>
                    </div>
                    <div class="author-avatar">
                      <q-icon :name="testimonial2Avatar" size="2rem" />
                    </div>
                  </div>
                </div>
                <div class="testimonial-rating">
                  <q-icon
                    name="star"
                    size="1rem"
                    v-for="i in 5"
                    :key="i"
                    :class="{ filled: i <= testimonial2Rating }"
                  />
                </div>
              </div>
              <div
                class="testimonial-card"
                data-aos="fade-right"
                data-aos-delay="600"
              >
                <div class="testimonial-content">
                  <div class="quote-icon">
                    <q-icon name="format_quote" size="2rem" />
                  </div>
                  <p class="testimonial-text">{{ testimonial3Quote }}</p>
                  <div class="testimonial-author">
                    <div class="author-info">
                      <div class="author-name">{{ testimonial3Author }}</div>
                      <div class="author-title">{{ testimonial3Title }}</div>
                      <div class="author-company">
                        {{ testimonial3Company }}
                      </div>
                    </div>
                    <div class="author-avatar">
                      <q-icon :name="testimonial3Avatar" size="2rem" />
                    </div>
                  </div>
                </div>
                <div class="testimonial-rating">
                  <q-icon
                    name="star"
                    size="1rem"
                    v-for="i in 5"
                    :key="i"
                    :class="{ filled: i <= testimonial3Rating }"
                  />
                </div>
              </div>
            </div>
          </div>

          <!-- Trust Indicators -->
          <div class="trust-indicators">
            <div class="trust-header">
              <h3 class="trust-title">
                {{ $t("accountability.trust.title") }}
              </h3>
            </div>
            <div class="trust-grid">
              <div class="trust-item" data-aos="zoom-in" data-aos-delay="0">
                <div class="trust-icon">
                  <q-icon :name="trustItem1Icon" size="2rem" />
                </div>
                <div class="trust-number">{{ trustItem1Number }}</div>
                <div class="trust-label">{{ trustItem1Label }}</div>
              </div>
              <div class="trust-item" data-aos="zoom-in" data-aos-delay="200">
                <div class="trust-icon">
                  <q-icon :name="trustItem2Icon" size="2rem" />
                </div>
                <div class="trust-number">{{ trustItem2Number }}</div>
                <div class="trust-label">{{ trustItem2Label }}</div>
              </div>
              <div class="trust-item" data-aos="zoom-in" data-aos-delay="400">
                <div class="trust-icon">
                  <q-icon :name="trustItem3Icon" size="2rem" />
                </div>
                <div class="trust-number">{{ trustItem3Number }}</div>
                <div class="trust-label">{{ trustItem3Label }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Modern Recruitment Section -->
    <section class="recruitment-section">
      <div class="container">
        <div class="recruitment-content">
          <!-- Header Area -->
          <div class="recruitment-header">
            <div class="recruitment-text">
              <div class="recruitment-badge">
                <q-icon name="work" size="1.5rem" />
                <span>{{ $t("recruitment.badge") }}</span>
              </div>
              <h2 class="recruitment-title">{{ $t("recruitment.title") }}</h2>
              <p class="recruitment-description">
                {{ $t("recruitment.description") }}
              </p>
            </div>
            <div class="recruitment-button">
              <q-btn
                size="lg"
                :label="$t('recruitment.ctaButton')"
                class="recruitment-cta-btn"
                @click="careers"
              />
            </div>
          </div>

          <!-- Career Benefits -->
          <div class="career-benefits">
            <div class="career-benefit" data-aos="fade-up" data-aos-delay="0">
              <div class="benefit-icon">
                <q-icon :name="careerBenefit1Icon" size="2rem" />
              </div>
              <h3 class="benefit-title">{{ careerBenefit1Title }}</h3>
              <p class="benefit-description">{{ careerBenefit1Description }}</p>
            </div>
            <div class="career-benefit" data-aos="fade-up" data-aos-delay="200">
              <div class="benefit-icon">
                <q-icon :name="careerBenefit2Icon" size="2rem" />
              </div>
              <h3 class="benefit-title">{{ careerBenefit2Title }}</h3>
              <p class="benefit-description">{{ careerBenefit2Description }}</p>
            </div>
            <div class="career-benefit" data-aos="fade-up" data-aos-delay="400">
              <div class="benefit-icon">
                <q-icon :name="careerBenefit3Icon" size="2rem" />
              </div>
              <h3 class="benefit-title">{{ careerBenefit3Title }}</h3>
              <p class="benefit-description">{{ careerBenefit3Description }}</p>
            </div>
          </div>

          <!-- Employee Testimonials -->
          <div class="employee-testimonials">
            <div class="employee-header">
              <h3 class="employee-title">
                {{ $t("recruitment.testimonials.title") }}
              </h3>
              <p class="employee-subtitle">
                {{ $t("recruitment.testimonials.subtitle") }}
              </p>
            </div>

            <div class="employee-grid">
              <div
                class="employee-card"
                data-aos="fade-right"
                data-aos-delay="0"
              >
                <div class="employee-content">
                  <div class="quote-icon">
                    <q-icon name="format_quote" size="2rem" />
                  </div>
                  <p class="employee-quote">{{ employee1Quote }}</p>
                  <div class="employee-info">
                    <div class="employee-details">
                      <div class="employee-name">{{ employee1Name }}</div>
                      <div class="employee-position">
                        {{ employee1Position }}
                      </div>
                      <div class="employee-department">
                        {{ employee1Department }}
                      </div>
                    </div>
                    <div class="employee-avatar">
                      <q-icon :name="employee1Avatar" size="2rem" />
                    </div>
                  </div>
                </div>
                <div class="employee-stats">
                  <div class="stat-item">
                    <div class="stat-number">{{ employee1Years }}</div>
                    <div class="stat-label">
                      {{ $t("recruitment.testimonials.yearsLabel") }}
                    </div>
                  </div>
                  <div class="stat-item">
                    <div class="stat-number">{{ employee1Projects }}</div>
                    <div class="stat-label">
                      {{ $t("recruitment.testimonials.projectsLabel") }}
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="employee-card"
                data-aos="fade-right"
                data-aos-delay="300"
              >
                <div class="employee-content">
                  <div class="quote-icon">
                    <q-icon name="format_quote" size="2rem" />
                  </div>
                  <p class="employee-quote">{{ employee2Quote }}</p>
                  <div class="employee-info">
                    <div class="employee-details">
                      <div class="employee-name">{{ employee2Name }}</div>
                      <div class="employee-position">
                        {{ employee2Position }}
                      </div>
                      <div class="employee-department">
                        {{ employee2Department }}
                      </div>
                    </div>
                    <div class="employee-avatar">
                      <q-icon :name="employee2Avatar" size="2rem" />
                    </div>
                  </div>
                </div>
                <div class="employee-stats">
                  <div class="stat-item">
                    <div class="stat-number">{{ employee2Years }}</div>
                    <div class="stat-label">
                      {{ $t("recruitment.testimonials.yearsLabel") }}
                    </div>
                  </div>
                  <div class="stat-item">
                    <div class="stat-number">{{ employee2Projects }}</div>
                    <div class="stat-label">
                      {{ $t("recruitment.testimonials.projectsLabel") }}
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="employee-card"
                data-aos="fade-right"
                data-aos-delay="600"
              >
                <div class="employee-content">
                  <div class="quote-icon">
                    <q-icon name="format_quote" size="2rem" />
                  </div>
                  <p class="employee-quote">{{ employee3Quote }}</p>
                  <div class="employee-info">
                    <div class="employee-details">
                      <div class="employee-name">{{ employee3Name }}</div>
                      <div class="employee-position">
                        {{ employee3Position }}
                      </div>
                      <div class="employee-department">
                        {{ employee3Department }}
                      </div>
                    </div>
                    <div class="employee-avatar">
                      <q-icon :name="employee3Avatar" size="2rem" />
                    </div>
                  </div>
                </div>
                <div class="employee-stats">
                  <div class="stat-item">
                    <div class="stat-number">{{ employee3Years }}</div>
                    <div class="stat-label">
                      {{ $t("recruitment.testimonials.yearsLabel") }}
                    </div>
                  </div>
                  <div class="stat-item">
                    <div class="stat-number">{{ employee3Projects }}</div>
                    <div class="stat-label">
                      {{ $t("recruitment.testimonials.projectsLabel") }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Job Categories -->
          <div class="job-categories">
            <div class="categories-header">
              <h3 class="categories-title">
                {{ $t("recruitment.categories.title") }}
              </h3>
            </div>
            <div class="categories-grid">
              <div class="category-card" data-aos="zoom-in" data-aos-delay="0">
                <div class="category-icon">
                  <q-icon :name="category1Icon" size="2rem" />
                </div>
                <div class="category-name">{{ category1Name }}</div>
                <div class="category-count">
                  {{ category1Openings }}
                  {{ $t("recruitment.categories.openingsLabel") }}
                </div>
                <div class="category-description">
                  {{ category1Description }}
                </div>
              </div>
              <div
                class="category-card"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <div class="category-icon">
                  <q-icon :name="category2Icon" size="2rem" />
                </div>
                <div class="category-name">{{ category2Name }}</div>
                <div class="category-count">
                  {{ category2Openings }}
                  {{ $t("recruitment.categories.openingsLabel") }}
                </div>
                <div class="category-description">
                  {{ category2Description }}
                </div>
              </div>
              <div
                class="category-card"
                data-aos="zoom-in"
                data-aos-delay="400"
              >
                <div class="category-icon">
                  <q-icon :name="category3Icon" size="2rem" />
                </div>
                <div class="category-name">{{ category3Name }}</div>
                <div class="category-count">
                  {{ category3Openings }}
                  {{ $t("recruitment.categories.openingsLabel") }}
                </div>
                <div class="category-description">
                  {{ category3Description }}
                </div>
              </div>
            </div>
          </div>

          <!-- Company Culture -->
          <div class="culture-section">
            <div class="culture-header">
              <h3 class="culture-title">
                {{ $t("recruitment.culture.title") }}
              </h3>
              <p class="culture-subtitle">
                {{ $t("recruitment.culture.subtitle") }}
              </p>
            </div>
            <div class="culture-grid">
              <div class="culture-item" data-aos="fade-up" data-aos-delay="0">
                <div class="culture-icon">
                  <q-icon :name="cultureItem1Icon" size="2rem" />
                </div>
                <div class="culture-text">{{ cultureItem1Text }}</div>
              </div>
              <div class="culture-item" data-aos="fade-up" data-aos-delay="200">
                <div class="culture-icon">
                  <q-icon :name="cultureItem2Icon" size="2rem" />
                </div>
                <div class="culture-text">{{ cultureItem2Text }}</div>
              </div>
              <div class="culture-item" data-aos="fade-up" data-aos-delay="400">
                <div class="culture-icon">
                  <q-icon :name="cultureItem3Icon" size="2rem" />
                </div>
                <div class="culture-text">{{ cultureItem3Text }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Modern CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <!-- Background Pattern -->
          <div class="cta-pattern"></div>

          <!-- Main CTA Content -->
          <div class="cta-main">
            <div class="cta-badge">
              <q-icon name="rocket_launch" size="1.5rem" />
              <span>{{ $t("cta.badge") }}</span>
            </div>

            <h2 class="cta-title">{{ $t("cta.title") }}</h2>
            <p class="cta-description">{{ $t("cta.description") }}</p>

            <!-- CTA Buttons -->
            <div class="cta-buttons">
              <q-btn
                size="xl"
                :label="$t('cta.primaryButton')"
                class="cta-primary-btn"
                @click="requestQuote"
                data-aos="fade-up"
                data-aos-delay="200"
              />
              <q-btn
                size="xl"
                :label="$t('cta.secondaryButton')"
                class="cta-secondary-btn"
                @click="contactUs"
                data-aos="fade-up"
                data-aos-delay="400"
              />
            </div>
          </div>

          <!-- CTA Features -->
          <div class="cta-features">
            <div class="cta-feature" data-aos="fade-up" data-aos-delay="0">
              <div class="feature-icon">
                <q-icon :name="ctaFeature1Icon" size="1.5rem" />
              </div>
              <div class="feature-text">{{ ctaFeature1Text }}</div>
            </div>
            <div class="cta-feature" data-aos="fade-up" data-aos-delay="200">
              <div class="feature-icon">
                <q-icon :name="ctaFeature2Icon" size="1.5rem" />
              </div>
              <div class="feature-text">{{ ctaFeature2Text }}</div>
            </div>
            <div class="cta-feature" data-aos="fade-up" data-aos-delay="400">
              <div class="feature-icon">
                <q-icon :name="ctaFeature3Icon" size="1.5rem" />
              </div>
              <div class="feature-text">{{ ctaFeature3Text }}</div>
            </div>
          </div>

          <!-- Trust Indicators -->
          <div class="cta-trust">
            <div class="trust-label">{{ $t("cta.trust.label") }}</div>
            <div class="trust-logos">
              <div class="trust-logo" data-aos="zoom-in" data-aos-delay="0">
                <q-icon :name="trustLogo1Icon" size="2rem" />
                <span class="logo-text">{{ trustLogo1Name }}</span>
              </div>
              <div class="trust-logo" data-aos="zoom-in" data-aos-delay="100">
                <q-icon :name="trustLogo2Icon" size="2rem" />
                <span class="logo-text">{{ trustLogo2Name }}</span>
              </div>
              <div class="trust-logo" data-aos="zoom-in" data-aos-delay="200">
                <q-icon :name="trustLogo3Icon" size="2rem" />
                <span class="logo-text">{{ trustLogo3Name }}</span>
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
import { useQuasar } from "quasar";
import { ref, onMounted, onUnmounted, computed } from "vue";
import { useI18n } from "vue-i18n";
import AppFooter from "src/components/Footer.vue";

export default {
  name: "HomePage",
  components: {
    AppFooter,
  },
  setup() {
    const $q = useQuasar();
    const { t } = useI18n();
    const trackingNumber = ref("");
    const currentSlide = ref(0);
    const slideInterval = ref(null);

    // Individual computed properties for hero features
    const heroFeature1 = computed(() => t("hero.features.0"));
    const heroFeature2 = computed(() => t("hero.features.1"));
    const heroFeature3 = computed(() => t("hero.features.2"));
    const heroFeature4 = computed(() => t("hero.features.3"));

    // Individual computed properties for take control features
    const takeControlFeature1Icon = computed(() =>
      t("takeControl.features.0.icon")
    );
    const takeControlFeature1Title = computed(() =>
      t("takeControl.features.0.title")
    );
    const takeControlFeature1Description = computed(() =>
      t("takeControl.features.0.description")
    );

    const takeControlFeature2Icon = computed(() =>
      t("takeControl.features.1.icon")
    );
    const takeControlFeature2Title = computed(() =>
      t("takeControl.features.1.title")
    );
    const takeControlFeature2Description = computed(() =>
      t("takeControl.features.1.description")
    );

    const takeControlFeature3Icon = computed(() =>
      t("takeControl.features.2.icon")
    );
    const takeControlFeature3Title = computed(() =>
      t("takeControl.features.2.title")
    );
    const takeControlFeature3Description = computed(() =>
      t("takeControl.features.2.description")
    );

    // Individual computed properties for mission critical items
    const missionItem1Icon = computed(() => t("mission.items.0.icon"));
    const missionItem1Title = computed(() => t("mission.items.0.title"));
    const missionItem1Description = computed(() =>
      t("mission.items.0.description")
    );

    const missionItem2Icon = computed(() => t("mission.items.1.icon"));
    const missionItem2Title = computed(() => t("mission.items.1.title"));
    const missionItem2Description = computed(() =>
      t("mission.items.1.description")
    );

    const missionItem3Icon = computed(() => t("mission.items.2.icon"));
    const missionItem3Title = computed(() => t("mission.items.2.title"));
    const missionItem3Description = computed(() =>
      t("mission.items.2.description")
    );

    // Individual computed properties for freight first stats
    const freightStat1Number = computed(() => t("freightFirst.stats.0.number"));
    const freightStat1Label = computed(() => t("freightFirst.stats.0.label"));

    const freightStat2Number = computed(() => t("freightFirst.stats.1.number"));
    const freightStat2Label = computed(() => t("freightFirst.stats.1.label"));

    const freightStat3Number = computed(() => t("freightFirst.stats.2.number"));
    const freightStat3Label = computed(() => t("freightFirst.stats.2.label"));

    // Individual computed properties for coast to coast stats
    const coastStat1Icon = computed(() => t("coastToCoast.stats.0.icon"));
    const coastStat1Number = computed(() => t("coastToCoast.stats.0.number"));
    const coastStat1Label = computed(() => t("coastToCoast.stats.0.label"));

    const coastStat2Icon = computed(() => t("coastToCoast.stats.1.icon"));
    const coastStat2Number = computed(() => t("coastToCoast.stats.1.number"));
    const coastStat2Label = computed(() => t("coastToCoast.stats.1.label"));

    const coastStat3Icon = computed(() => t("coastToCoast.stats.2.icon"));
    const coastStat3Number = computed(() => t("coastToCoast.stats.2.number"));
    const coastStat3Label = computed(() => t("coastToCoast.stats.2.label"));

    // Individual computed properties for stats slider - Fleet
    const fleetStat1Icon = computed(() =>
      t("statsSlider.slides.fleet.stats.0.icon")
    );
    const fleetStat1Number = computed(() =>
      t("statsSlider.slides.fleet.stats.0.number")
    );
    const fleetStat1Label = computed(() =>
      t("statsSlider.slides.fleet.stats.0.label")
    );

    const fleetStat2Icon = computed(() =>
      t("statsSlider.slides.fleet.stats.1.icon")
    );
    const fleetStat2Number = computed(() =>
      t("statsSlider.slides.fleet.stats.1.number")
    );
    const fleetStat2Label = computed(() =>
      t("statsSlider.slides.fleet.stats.1.label")
    );

    const fleetStat3Icon = computed(() =>
      t("statsSlider.slides.fleet.stats.2.icon")
    );
    const fleetStat3Number = computed(() =>
      t("statsSlider.slides.fleet.stats.2.number")
    );
    const fleetStat3Label = computed(() =>
      t("statsSlider.slides.fleet.stats.2.label")
    );

    // Individual computed properties for stats slider - Network
    const networkStat1Icon = computed(() =>
      t("statsSlider.slides.network.stats.0.icon")
    );
    const networkStat1Number = computed(() =>
      t("statsSlider.slides.network.stats.0.number")
    );
    const networkStat1Label = computed(() =>
      t("statsSlider.slides.network.stats.0.label")
    );

    const networkStat2Icon = computed(() =>
      t("statsSlider.slides.network.stats.1.icon")
    );
    const networkStat2Number = computed(() =>
      t("statsSlider.slides.network.stats.1.number")
    );
    const networkStat2Label = computed(() =>
      t("statsSlider.slides.network.stats.1.label")
    );

    const networkStat3Icon = computed(() =>
      t("statsSlider.slides.network.stats.2.icon")
    );
    const networkStat3Number = computed(() =>
      t("statsSlider.slides.network.stats.2.number")
    );
    const networkStat3Label = computed(() =>
      t("statsSlider.slides.network.stats.2.label")
    );

    // Individual computed properties for stats slider - Performance
    const performanceStat1Icon = computed(() =>
      t("statsSlider.slides.performance.stats.0.icon")
    );
    const performanceStat1Number = computed(() =>
      t("statsSlider.slides.performance.stats.0.number")
    );
    const performanceStat1Label = computed(() =>
      t("statsSlider.slides.performance.stats.0.label")
    );

    const performanceStat2Icon = computed(() =>
      t("statsSlider.slides.performance.stats.1.icon")
    );
    const performanceStat2Number = computed(() =>
      t("statsSlider.slides.performance.stats.1.number")
    );
    const performanceStat2Label = computed(() =>
      t("statsSlider.slides.performance.stats.1.label")
    );

    const performanceStat3Icon = computed(() =>
      t("statsSlider.slides.performance.stats.2.icon")
    );
    const performanceStat3Number = computed(() =>
      t("statsSlider.slides.performance.stats.2.number")
    );
    const performanceStat3Label = computed(() =>
      t("statsSlider.slides.performance.stats.2.label")
    );

    // Individual computed properties for capacity stats
    const capacityStat1Icon = computed(() => t("capacity.stats.0.icon"));
    const capacityStat1Number = computed(() => t("capacity.stats.0.number"));
    const capacityStat1Label = computed(() => t("capacity.stats.0.label"));
    const capacityStat1Trend = computed(() => t("capacity.stats.0.trend"));

    const capacityStat2Icon = computed(() => t("capacity.stats.1.icon"));
    const capacityStat2Number = computed(() => t("capacity.stats.1.number"));
    const capacityStat2Label = computed(() => t("capacity.stats.1.label"));
    const capacityStat2Trend = computed(() => t("capacity.stats.1.trend"));

    const capacityStat3Icon = computed(() => t("capacity.stats.2.icon"));
    const capacityStat3Number = computed(() => t("capacity.stats.2.number"));
    const capacityStat3Label = computed(() => t("capacity.stats.2.label"));
    const capacityStat3Trend = computed(() => t("capacity.stats.2.trend"));

    // Individual computed properties for capacity features
    const capacityFeature1Icon = computed(() => t("capacity.features.0.icon"));
    const capacityFeature1Title = computed(() =>
      t("capacity.features.0.title")
    );
    const capacityFeature1Description = computed(() =>
      t("capacity.features.0.description")
    );

    const capacityFeature2Icon = computed(() => t("capacity.features.1.icon"));
    const capacityFeature2Title = computed(() =>
      t("capacity.features.1.title")
    );
    const capacityFeature2Description = computed(() =>
      t("capacity.features.1.description")
    );

    const capacityFeature3Icon = computed(() => t("capacity.features.2.icon"));
    const capacityFeature3Title = computed(() =>
      t("capacity.features.2.title")
    );
    const capacityFeature3Description = computed(() =>
      t("capacity.features.2.description")
    );

    // Individual computed properties for technology stats
    const techStat1Icon = computed(() => t("technology.stats.0.icon"));
    const techStat1Number = computed(() => t("technology.stats.0.number"));
    const techStat1Label = computed(() => t("technology.stats.0.label"));
    const techStat1Description = computed(() =>
      t("technology.stats.0.description")
    );

    const techStat2Icon = computed(() => t("technology.stats.1.icon"));
    const techStat2Number = computed(() => t("technology.stats.1.number"));
    const techStat2Label = computed(() => t("technology.stats.1.label"));
    const techStat2Description = computed(() =>
      t("technology.stats.1.description")
    );

    const techStat3Icon = computed(() => t("technology.stats.2.icon"));
    const techStat3Number = computed(() => t("technology.stats.2.number"));
    const techStat3Label = computed(() => t("technology.stats.2.label"));
    const techStat3Description = computed(() =>
      t("technology.stats.2.description")
    );

    // Individual computed properties for technology features
    const techFeature1Icon = computed(() => t("technology.features.0.icon"));
    const techFeature1Title = computed(() => t("technology.features.0.title"));
    const techFeature1Description = computed(() =>
      t("technology.features.0.description")
    );
    const techFeature1Benefit1 = computed(() =>
      t("technology.features.0.benefits.0")
    );
    const techFeature1Benefit2 = computed(() =>
      t("technology.features.0.benefits.1")
    );
    const techFeature1Benefit3 = computed(() =>
      t("technology.features.0.benefits.2")
    );

    const techFeature2Icon = computed(() => t("technology.features.1.icon"));
    const techFeature2Title = computed(() => t("technology.features.1.title"));
    const techFeature2Description = computed(() =>
      t("technology.features.1.description")
    );
    const techFeature2Benefit1 = computed(() =>
      t("technology.features.1.benefits.0")
    );
    const techFeature2Benefit2 = computed(() =>
      t("technology.features.1.benefits.1")
    );
    const techFeature2Benefit3 = computed(() =>
      t("technology.features.1.benefits.2")
    );

    const techFeature3Icon = computed(() => t("technology.features.2.icon"));
    const techFeature3Title = computed(() => t("technology.features.2.title"));
    const techFeature3Description = computed(() =>
      t("technology.features.2.description")
    );
    const techFeature3Benefit1 = computed(() =>
      t("technology.features.2.benefits.0")
    );
    const techFeature3Benefit2 = computed(() =>
      t("technology.features.2.benefits.1")
    );
    const techFeature3Benefit3 = computed(() =>
      t("technology.features.2.benefits.2")
    );

    // Individual computed properties for dashboard metrics
    const dashboardMetric1Label = computed(() =>
      t("technology.dashboard.metrics.0.label")
    );
    const dashboardMetric1Value = computed(() =>
      t("technology.dashboard.metrics.0.value")
    );
    const dashboardMetric1Trend = computed(() =>
      t("technology.dashboard.metrics.0.trend")
    );
    const dashboardMetric1Change = computed(() =>
      t("technology.dashboard.metrics.0.change")
    );

    const dashboardMetric2Label = computed(() =>
      t("technology.dashboard.metrics.1.label")
    );
    const dashboardMetric2Value = computed(() =>
      t("technology.dashboard.metrics.1.value")
    );
    const dashboardMetric2Trend = computed(() =>
      t("technology.dashboard.metrics.1.trend")
    );
    const dashboardMetric2Change = computed(() =>
      t("technology.dashboard.metrics.1.change")
    );

    const dashboardMetric3Label = computed(() =>
      t("technology.dashboard.metrics.2.label")
    );
    const dashboardMetric3Value = computed(() =>
      t("technology.dashboard.metrics.2.value")
    );
    const dashboardMetric3Trend = computed(() =>
      t("technology.dashboard.metrics.2.trend")
    );
    const dashboardMetric3Change = computed(() =>
      t("technology.dashboard.metrics.2.change")
    );

    // Individual computed properties for accountability features
    const accountabilityFeature1Icon = computed(() =>
      t("accountability.features.0.icon")
    );
    const accountabilityFeature1Title = computed(() =>
      t("accountability.features.0.title")
    );
    const accountabilityFeature1Description = computed(() =>
      t("accountability.features.0.description")
    );

    const accountabilityFeature2Icon = computed(() =>
      t("accountability.features.1.icon")
    );
    const accountabilityFeature2Title = computed(() =>
      t("accountability.features.1.title")
    );
    const accountabilityFeature2Description = computed(() =>
      t("accountability.features.1.description")
    );

    const accountabilityFeature3Icon = computed(() =>
      t("accountability.features.2.icon")
    );
    const accountabilityFeature3Title = computed(() =>
      t("accountability.features.2.title")
    );
    const accountabilityFeature3Description = computed(() =>
      t("accountability.features.2.description")
    );

    // Individual computed properties for testimonials
    const testimonial1Quote = computed(() =>
      t("accountability.testimonials.items.0.quote")
    );
    const testimonial1Author = computed(() =>
      t("accountability.testimonials.items.0.author")
    );
    const testimonial1Title = computed(() =>
      t("accountability.testimonials.items.0.title")
    );
    const testimonial1Company = computed(() =>
      t("accountability.testimonials.items.0.company")
    );
    const testimonial1Avatar = computed(() =>
      t("accountability.testimonials.items.0.avatar")
    );
    const testimonial1Rating = computed(() =>
      t("accountability.testimonials.items.0.rating")
    );

    const testimonial2Quote = computed(() =>
      t("accountability.testimonials.items.1.quote")
    );
    const testimonial2Author = computed(() =>
      t("accountability.testimonials.items.1.author")
    );
    const testimonial2Title = computed(() =>
      t("accountability.testimonials.items.1.title")
    );
    const testimonial2Company = computed(() =>
      t("accountability.testimonials.items.1.company")
    );
    const testimonial2Avatar = computed(() =>
      t("accountability.testimonials.items.1.avatar")
    );
    const testimonial2Rating = computed(() =>
      t("accountability.testimonials.items.1.rating")
    );

    const testimonial3Quote = computed(() =>
      t("accountability.testimonials.items.2.quote")
    );
    const testimonial3Author = computed(() =>
      t("accountability.testimonials.items.2.author")
    );
    const testimonial3Title = computed(() =>
      t("accountability.testimonials.items.2.title")
    );
    const testimonial3Company = computed(() =>
      t("accountability.testimonials.items.2.company")
    );
    const testimonial3Avatar = computed(() =>
      t("accountability.testimonials.items.2.avatar")
    );
    const testimonial3Rating = computed(() =>
      t("accountability.testimonials.items.2.rating")
    );

    // Individual computed properties for trust indicators
    const trustItem1Icon = computed(() =>
      t("accountability.trust.items.0.icon")
    );
    const trustItem1Number = computed(() =>
      t("accountability.trust.items.0.number")
    );
    const trustItem1Label = computed(() =>
      t("accountability.trust.items.0.label")
    );

    const trustItem2Icon = computed(() =>
      t("accountability.trust.items.1.icon")
    );
    const trustItem2Number = computed(() =>
      t("accountability.trust.items.1.number")
    );
    const trustItem2Label = computed(() =>
      t("accountability.trust.items.1.label")
    );

    const trustItem3Icon = computed(() =>
      t("accountability.trust.items.2.icon")
    );
    const trustItem3Number = computed(() =>
      t("accountability.trust.items.2.number")
    );
    const trustItem3Label = computed(() =>
      t("accountability.trust.items.2.label")
    );

    // Individual computed properties for recruitment benefits
    const careerBenefit1Icon = computed(() => t("recruitment.benefits.0.icon"));
    const careerBenefit1Title = computed(() =>
      t("recruitment.benefits.0.title")
    );
    const careerBenefit1Description = computed(() =>
      t("recruitment.benefits.0.description")
    );

    const careerBenefit2Icon = computed(() => t("recruitment.benefits.1.icon"));
    const careerBenefit2Title = computed(() =>
      t("recruitment.benefits.1.title")
    );
    const careerBenefit2Description = computed(() =>
      t("recruitment.benefits.1.description")
    );

    const careerBenefit3Icon = computed(() => t("recruitment.benefits.2.icon"));
    const careerBenefit3Title = computed(() =>
      t("recruitment.benefits.2.title")
    );
    const careerBenefit3Description = computed(() =>
      t("recruitment.benefits.2.description")
    );

    // Individual computed properties for employee testimonials
    const employee1Quote = computed(() =>
      t("recruitment.testimonials.items.0.quote")
    );
    const employee1Name = computed(() =>
      t("recruitment.testimonials.items.0.name")
    );
    const employee1Position = computed(() =>
      t("recruitment.testimonials.items.0.position")
    );
    const employee1Department = computed(() =>
      t("recruitment.testimonials.items.0.department")
    );
    const employee1Avatar = computed(() =>
      t("recruitment.testimonials.items.0.avatar")
    );
    const employee1Years = computed(() =>
      t("recruitment.testimonials.items.0.years")
    );
    const employee1Projects = computed(() =>
      t("recruitment.testimonials.items.0.projects")
    );

    const employee2Quote = computed(() =>
      t("recruitment.testimonials.items.1.quote")
    );
    const employee2Name = computed(() =>
      t("recruitment.testimonials.items.1.name")
    );
    const employee2Position = computed(() =>
      t("recruitment.testimonials.items.1.position")
    );
    const employee2Department = computed(() =>
      t("recruitment.testimonials.items.1.department")
    );
    const employee2Avatar = computed(() =>
      t("recruitment.testimonials.items.1.avatar")
    );
    const employee2Years = computed(() =>
      t("recruitment.testimonials.items.1.years")
    );
    const employee2Projects = computed(() =>
      t("recruitment.testimonials.items.1.projects")
    );

    const employee3Quote = computed(() =>
      t("recruitment.testimonials.items.2.quote")
    );
    const employee3Name = computed(() =>
      t("recruitment.testimonials.items.2.name")
    );
    const employee3Position = computed(() =>
      t("recruitment.testimonials.items.2.position")
    );
    const employee3Department = computed(() =>
      t("recruitment.testimonials.items.2.department")
    );
    const employee3Avatar = computed(() =>
      t("recruitment.testimonials.items.2.avatar")
    );
    const employee3Years = computed(() =>
      t("recruitment.testimonials.items.2.years")
    );
    const employee3Projects = computed(() =>
      t("recruitment.testimonials.items.2.projects")
    );

    // Individual computed properties for job categories
    const category1Icon = computed(() =>
      t("recruitment.categories.items.0.icon")
    );
    const category1Name = computed(() =>
      t("recruitment.categories.items.0.name")
    );
    const category1Openings = computed(() =>
      t("recruitment.categories.items.0.openings")
    );
    const category1Description = computed(() =>
      t("recruitment.categories.items.0.description")
    );

    const category2Icon = computed(() =>
      t("recruitment.categories.items.1.icon")
    );
    const category2Name = computed(() =>
      t("recruitment.categories.items.1.name")
    );
    const category2Openings = computed(() =>
      t("recruitment.categories.items.1.openings")
    );
    const category2Description = computed(() =>
      t("recruitment.categories.items.1.description")
    );

    const category3Icon = computed(() =>
      t("recruitment.categories.items.2.icon")
    );
    const category3Name = computed(() =>
      t("recruitment.categories.items.2.name")
    );
    const category3Openings = computed(() =>
      t("recruitment.categories.items.2.openings")
    );
    const category3Description = computed(() =>
      t("recruitment.categories.items.2.description")
    );

    // Individual computed properties for recruitment culture
    const cultureItem1Icon = computed(() =>
      t("recruitment.culture.items.0.icon")
    );
    const cultureItem1Text = computed(() =>
      t("recruitment.culture.items.0.text")
    );

    const cultureItem2Icon = computed(() =>
      t("recruitment.culture.items.1.icon")
    );
    const cultureItem2Text = computed(() =>
      t("recruitment.culture.items.1.text")
    );

    const cultureItem3Icon = computed(() =>
      t("recruitment.culture.items.2.icon")
    );
    const cultureItem3Text = computed(() =>
      t("recruitment.culture.items.2.text")
    );

    // Individual computed properties for CTA features
    const ctaFeature1Icon = computed(() => t("cta.features.0.icon"));
    const ctaFeature1Text = computed(() => t("cta.features.0.text"));

    const ctaFeature2Icon = computed(() => t("cta.features.1.icon"));
    const ctaFeature2Text = computed(() => t("cta.features.1.text"));

    const ctaFeature3Icon = computed(() => t("cta.features.2.icon"));
    const ctaFeature3Text = computed(() => t("cta.features.2.text"));

    // Individual computed properties for CTA trust logos
    const trustLogo1Icon = computed(() => t("cta.trust.logos.0.icon"));
    const trustLogo1Name = computed(() => t("cta.trust.logos.0.name"));

    const trustLogo2Icon = computed(() => t("cta.trust.logos.1.icon"));
    const trustLogo2Name = computed(() => t("cta.trust.logos.1.name"));

    const trustLogo3Icon = computed(() => t("cta.trust.logos.2.icon"));
    const trustLogo3Name = computed(() => t("cta.trust.logos.2.name"));

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
      heroFeature1,
      heroFeature2,
      heroFeature3,
      heroFeature4,
      takeControlFeature1Icon,
      takeControlFeature1Title,
      takeControlFeature1Description,
      takeControlFeature2Icon,
      takeControlFeature2Title,
      takeControlFeature2Description,
      takeControlFeature3Icon,
      takeControlFeature3Title,
      takeControlFeature3Description,
      missionItem1Icon,
      missionItem1Title,
      missionItem1Description,
      missionItem2Icon,
      missionItem2Title,
      missionItem2Description,
      missionItem3Icon,
      missionItem3Title,
      missionItem3Description,
      freightStat1Number,
      freightStat1Label,
      freightStat2Number,
      freightStat2Label,
      freightStat3Number,
      freightStat3Label,
      coastStat1Icon,
      coastStat1Number,
      coastStat1Label,
      coastStat2Icon,
      coastStat2Number,
      coastStat2Label,
      coastStat3Icon,
      coastStat3Number,
      coastStat3Label,
      fleetStat1Icon,
      fleetStat1Number,
      fleetStat1Label,
      fleetStat2Icon,
      fleetStat2Number,
      fleetStat2Label,
      fleetStat3Icon,
      fleetStat3Number,
      fleetStat3Label,
      networkStat1Icon,
      networkStat1Number,
      networkStat1Label,
      networkStat2Icon,
      networkStat2Number,
      networkStat2Label,
      networkStat3Icon,
      networkStat3Number,
      networkStat3Label,
      performanceStat1Icon,
      performanceStat1Number,
      performanceStat1Label,
      performanceStat2Icon,
      performanceStat2Number,
      performanceStat2Label,
      performanceStat3Icon,
      performanceStat3Number,
      performanceStat3Label,
      capacityStat1Icon,
      capacityStat1Number,
      capacityStat1Label,
      capacityStat1Trend,
      capacityStat2Icon,
      capacityStat2Number,
      capacityStat2Label,
      capacityStat2Trend,
      capacityStat3Icon,
      capacityStat3Number,
      capacityStat3Label,
      capacityStat3Trend,
      capacityFeature1Icon,
      capacityFeature1Title,
      capacityFeature1Description,
      capacityFeature2Icon,
      capacityFeature2Title,
      capacityFeature2Description,
      capacityFeature3Icon,
      capacityFeature3Title,
      capacityFeature3Description,
      techStat1Icon,
      techStat1Number,
      techStat1Label,
      techStat1Description,
      techStat2Icon,
      techStat2Number,
      techStat2Label,
      techStat2Description,
      techStat3Icon,
      techStat3Number,
      techStat3Label,
      techStat3Description,
      techFeature1Icon,
      techFeature1Title,
      techFeature1Description,
      techFeature1Benefit1,
      techFeature1Benefit2,
      techFeature1Benefit3,
      techFeature2Icon,
      techFeature2Title,
      techFeature2Description,
      techFeature2Benefit1,
      techFeature2Benefit2,
      techFeature2Benefit3,
      techFeature3Icon,
      techFeature3Title,
      techFeature3Description,
      techFeature3Benefit1,
      techFeature3Benefit2,
      techFeature3Benefit3,
      dashboardMetric1Label,
      dashboardMetric1Value,
      dashboardMetric1Trend,
      dashboardMetric1Change,
      dashboardMetric2Label,
      dashboardMetric2Value,
      dashboardMetric2Trend,
      dashboardMetric2Change,
      dashboardMetric3Label,
      dashboardMetric3Value,
      dashboardMetric3Trend,
      dashboardMetric3Change,
      accountabilityFeature1Icon,
      accountabilityFeature1Title,
      accountabilityFeature1Description,
      accountabilityFeature2Icon,
      accountabilityFeature2Title,
      accountabilityFeature2Description,
      accountabilityFeature3Icon,
      accountabilityFeature3Title,
      accountabilityFeature3Description,
      testimonial1Quote,
      testimonial1Author,
      testimonial1Title,
      testimonial1Company,
      testimonial1Avatar,
      testimonial1Rating,
      testimonial2Quote,
      testimonial2Author,
      testimonial2Title,
      testimonial2Company,
      testimonial2Avatar,
      testimonial2Rating,
      testimonial3Quote,
      testimonial3Author,
      testimonial3Title,
      testimonial3Company,
      testimonial3Avatar,
      testimonial3Rating,
      trustItem1Icon,
      trustItem1Number,
      trustItem1Label,
      trustItem2Icon,
      trustItem2Number,
      trustItem2Label,
      trustItem3Icon,
      trustItem3Number,
      trustItem3Label,
      careerBenefit1Icon,
      careerBenefit1Title,
      careerBenefit1Description,
      careerBenefit2Icon,
      careerBenefit2Title,
      careerBenefit2Description,
      careerBenefit3Icon,
      careerBenefit3Title,
      careerBenefit3Description,
      employee1Quote,
      employee1Name,
      employee1Position,
      employee1Department,
      employee1Avatar,
      employee1Years,
      employee1Projects,
      employee2Quote,
      employee2Name,
      employee2Position,
      employee2Department,
      employee2Avatar,
      employee2Years,
      employee2Projects,
      employee3Quote,
      employee3Name,
      employee3Position,
      employee3Department,
      employee3Avatar,
      employee3Years,
      employee3Projects,
      category1Icon,
      category1Name,
      category1Openings,
      category1Description,
      category2Icon,
      category2Name,
      category2Openings,
      category2Description,
      category3Icon,
      category3Name,
      category3Openings,
      category3Description,
      cultureItem1Icon,
      cultureItem1Text,
      cultureItem2Icon,
      cultureItem2Text,
      cultureItem3Icon,
      cultureItem3Text,
      ctaFeature1Icon,
      ctaFeature1Text,
      ctaFeature2Icon,
      ctaFeature2Text,
      ctaFeature3Icon,
      ctaFeature3Text,
      trustLogo1Icon,
      trustLogo1Name,
      trustLogo2Icon,
      trustLogo2Name,
      trustLogo3Icon,
      trustLogo3Name,
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
  background: var(--dermiqt-dark-brown);
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
    var(--dermiqt-orange) 100%
  );
  background-size: cover;
  background-position: center;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(60, 42, 33, 0.8);
}

/* Floating Elements Animation */
.floating-elements {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
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
  top: 30%;
  right: 25%;
}
.floating-icon:nth-child(4) {
  top: 70%;
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
  padding: 2rem 0;
}

/* Tracking Section */
.tracking-section {
  margin-bottom: 4rem;
}

.tracking-card {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 16px;
  padding: 2rem;
  max-width: 500px;
  margin: 0 auto;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.tracking-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.tracking-icon {
  color: var(--dermiqt-red);
}

.tracking-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--dermiqt-dark-text);
  margin: 0;
}

.tracking-input-group {
  display: flex;
  align-items: center;
  width: 100%;
}

.tracking-input {
  flex: 1;
}

.tracking-input :deep(.q-field__control) {
  background: white;
  border-radius: 12px;
  border: 2px solid var(--dermiqt-light-gray);
  transition: all 0.3s ease;
}

.tracking-input :deep(.q-field__control):focus-within {
  border-color: var(--dermiqt-orange);
  box-shadow: 0 0 0 3px rgba(193, 120, 23, 0.1);
}

.search-btn {
  background: var(--dermiqt-yellow) !important;
  color: var(--dermiqt-dark-text) !important;
  border-radius: 12px !important;
  height: 40px;
  width: 40px;
  margin-left: 0.5rem;
  transition: all 0.3s ease !important;
}

.search-btn:hover {
  background: var(--dermiqt-yellow-hover) !important;
  transform: scale(1.05);
}

/* Main Hero Content */
.hero-main {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.hero-title {
  font-size: 4rem;
  font-weight: 900;
  color: var(--dermiqt-white);
  margin-bottom: 2rem;
  line-height: 1.1;
  background: linear-gradient(
    135deg,
    var(--dermiqt-white) 0%,
    var(--dermiqt-yellow) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-description {
  font-size: 1.25rem;
  color: var(--dermiqt-white);
  margin-bottom: 3rem;
  line-height: 1.6;
  opacity: 0.9;
}

/* Hero Features Grid */
.hero-features-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.hero-feature-card {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 80px;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  position: relative;
}

.hero-feature-card:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.feature-check {
  background: var(--dermiqt-orange);
  color: var(--dermiqt-white);
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;
  position: absolute;
  top: 8px;
  left: 8px;
}

.hero-feature-card .feature-text {
  color: var(--dermiqt-white);
  font-weight: 500;
  font-size: 0.8rem;
  line-height: 1.2;
  margin-top: 1.5rem;
}

.hero-cta {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.cta-primary {
  background: var(--dermiqt-yellow) !important;
  color: var(--dermiqt-dark-text) !important;
  font-weight: 700 !important;
  text-transform: uppercase !important;
  letter-spacing: 1px !important;
  border-radius: 12px !important;
  padding: 16px 32px !important;
  border: none !important;
  box-shadow: 0 8px 24px rgba(212, 175, 55, 0.3) !important;
  transition: all 0.3s ease !important;
  font-size: 1rem !important;
}

.cta-primary:hover {
  background: var(--dermiqt-yellow-hover) !important;
  transform: translateY(-2px) !important;
  box-shadow: 0 12px 32px rgba(212, 175, 55, 0.4) !important;
}

.cta-secondary {
  background: transparent !important;
  color: var(--dermiqt-white) !important;
  font-weight: 600 !important;
  text-transform: uppercase !important;
  letter-spacing: 1px !important;
  border-radius: 12px !important;
  padding: 16px 32px !important;
  border: 2px solid var(--dermiqt-white) !important;
  transition: all 0.3s ease !important;
  font-size: 1rem !important;
}

.cta-secondary:hover {
  background: var(--dermiqt-white) !important;
  color: var(--dermiqt-dark-text) !important;
  transform: translateY(-2px) !important;
  box-shadow: 0 8px 24px rgba(255, 255, 255, 0.2) !important;
}

.award-badge {
  position: absolute;
  top: 2rem;
  right: 2rem;
  background: rgba(255, 255, 255, 0.95);
  border: 2px solid var(--dermiqt-yellow);
  border-radius: 16px;
  padding: 1.5rem;
  max-width: 280px;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  animation: slideInRight 0.8s ease-out;
}

@keyframes slideInRight {
  from {
    transform: translateX(100px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
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
  background: var(--dermiqt-red);
  color: var(--dermiqt-white);
  padding: 6px 16px;
  font-size: 0.75rem;
  font-weight: bold;
  border-radius: 20px;
  display: inline-block;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.badge-main {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.badge-title {
  display: block;
  font-size: 1.1rem;
  font-weight: bold;
  color: var(--dermiqt-dark-text);
  line-height: 1.2;
  text-transform: uppercase;
}

.badge-year {
  display: inline-block;
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--dermiqt-yellow);
  padding: 8px 16px;
  border: 2px solid var(--dermiqt-yellow);
  border-radius: 8px;
  background: rgba(212, 175, 55, 0.1);
}

.badge-bottom {
  margin-top: auto;
}

.badge-stats {
  display: flex;
  justify-content: center;
}

.badge-stats .stat-item {
  text-align: center;
  padding: 0;
}

.badge-stats .stat-number {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--dermiqt-red);
  display: block;
  margin-bottom: 0.25rem;
}

.badge-stats .stat-label {
  font-size: 0.75rem;
  color: var(--dermiqt-dark-text);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Take Control Section */
.take-control-section {
  background: var(--dermiqt-white);
  padding: 6rem 0;
  position: relative;
  overflow: hidden;
}

.take-control-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    var(--dermiqt-orange) 50%,
    transparent 100%
  );
}

.take-control-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.control-header {
  text-align: center;
  margin-bottom: 4rem;
}

.control-icon {
  color: var(--dermiqt-orange);
  margin-bottom: 2rem;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

.control-title {
  font-size: 3.5rem;
  font-weight: 900;
  color: var(--dermiqt-dark-text);
  margin-bottom: 1.5rem;
  line-height: 1.1;
  background: linear-gradient(
    135deg,
    var(--dermiqt-dark-text) 0%,
    var(--dermiqt-orange) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.control-subtitle {
  font-size: 1.25rem;
  color: var(--dermiqt-dark-text);
  opacity: 0.8;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.control-features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
}

.feature-card {
  background: var(--dermiqt-white);
  border-radius: 20px;
  padding: 2.5rem;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(193, 120, 23, 0.1);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.feature-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(
    90deg,
    var(--dermiqt-orange),
    var(--dermiqt-yellow)
  );
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
}

.feature-card:hover::before {
  transform: scaleX(1);
}

.feature-icon {
  color: var(--dermiqt-orange);
  margin-bottom: 1.5rem;
}

.feature-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--dermiqt-dark-text);
  margin-bottom: 1rem;
}

.feature-description {
  font-size: 1rem;
  color: var(--dermiqt-dark-text);
  opacity: 0.8;
  line-height: 1.6;
}

/* Mission Section */
.mission-section {
  background: linear-gradient(
    135deg,
    var(--dermiqt-dark-brown) 0%,
    var(--dermiqt-orange) 100%
  );
  padding: 6rem 0;
  position: relative;
}

.mission-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="50" cy="50" r="1" fill="rgba(255,255,255,0.03)"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
  opacity: 0.5;
}

.mission-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
}

.mission-left {
  margin-bottom: 4rem;
}

.mission-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--dermiqt-yellow);
  color: var(--dermiqt-dark-text);
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  font-weight: 600;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 2rem;
}

.mission-title {
  font-size: 3.5rem;
  font-weight: 900;
  color: var(--dermiqt-white);
  margin-bottom: 2rem;
  line-height: 1.1;
}

.mission-description {
  font-size: 1.25rem;
  color: var(--dermiqt-white);
  opacity: 0.9;
  line-height: 1.6;
  max-width: 600px;
}

.mission-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.mission-item {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}

.mission-item:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-4px);
}

.item-icon {
  color: var(--dermiqt-yellow);
  margin-bottom: 1rem;
}

.item-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--dermiqt-white);
  margin-bottom: 0.75rem;
}

.item-description {
  font-size: 1rem;
  color: var(--dermiqt-white);
  opacity: 0.8;
  line-height: 1.6;
}

/* Freight First Section */
.freight-first-section {
  margin-top: 4rem;
  padding-top: 4rem;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}

.freight-content {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 4rem;
  align-items: center;
}

.freight-title {
  font-size: 3rem;
  font-weight: 900;
  color: var(--dermiqt-white);
  line-height: 1.1;
}

.freight-description {
  font-size: 1.25rem;
  color: var(--dermiqt-white);
  opacity: 0.9;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.freight-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 2rem;
}

.freight-stats .stat-item {
  text-align: center;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.freight-stats .stat-number {
  font-size: 2.5rem;
  font-weight: 900;
  color: var(--dermiqt-yellow);
  margin-bottom: 0.5rem;
}

.freight-stats .stat-label {
  font-size: 0.875rem;
  color: var(--dermiqt-white);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
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

/* Coast to Coast Section */
.coast-section {
  background: var(--dermiqt-white);
  padding: 6rem 0;
  position: relative;
  overflow: hidden;
}

.coast-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(193, 120, 23, 0.05) 0%,
    rgba(212, 175, 55, 0.05) 100%
  );
  pointer-events: none;
}

.coast-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
}

.coast-header {
  text-align: center;
  margin-bottom: 4rem;
}

.coast-icon {
  color: var(--dermiqt-orange);
  margin-bottom: 2rem;
  animation: rotate 20s linear infinite;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.coast-title {
  font-size: 3.5rem;
  font-weight: 900;
  color: var(--dermiqt-dark-text);
  margin-bottom: 1.5rem;
  line-height: 1.1;
  background: linear-gradient(
    135deg,
    var(--dermiqt-dark-text) 0%,
    var(--dermiqt-orange) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.coast-subtitle {
  font-size: 1.25rem;
  color: var(--dermiqt-dark-text);
  opacity: 0.8;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
}

/* Network Visualization */
.network-visualization {
  margin: 4rem 0;
}

.map-container {
  position: relative;
  height: 400px;
  background: linear-gradient(
    135deg,
    var(--dermiqt-dark-brown) 0%,
    var(--dermiqt-orange) 100%
  );
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.map-background {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.map-grid {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(5, 1fr);
  gap: 1px;
}

.grid-point {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  animation: pulse 3s ease-in-out infinite;
  animation-delay: calc(var(--i, 0) * 0.1s);
}

.connection-lines {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.line {
  position: absolute;
  height: 2px;
  background: linear-gradient(
    90deg,
    var(--dermiqt-yellow),
    var(--dermiqt-orange)
  );
  border-radius: 1px;
  animation: drawLine 2s ease-out forwards;
}

.line-1 {
  top: 30%;
  left: 10%;
  width: 80%;
  animation-delay: 0.5s;
}

.line-2 {
  top: 50%;
  left: 5%;
  width: 90%;
  animation-delay: 1s;
}

.line-3 {
  top: 70%;
  left: 15%;
  width: 70%;
  animation-delay: 1.5s;
}

@keyframes drawLine {
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
}

.location-markers {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.marker {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: var(--dermiqt-white);
  animation: bounce 2s ease-in-out infinite;
}

.marker-east {
  top: 25%;
  left: 15%;
  animation-delay: 0.5s;
}

.marker-west {
  top: 25%;
  right: 15%;
  animation-delay: 1s;
}

.marker-central {
  top: 60%;
  left: 50%;
  transform: translateX(-50%);
  animation-delay: 1.5s;
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.marker-label {
  font-size: 0.875rem;
  font-weight: 600;
  text-align: center;
  background: rgba(0, 0, 0, 0.3);
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  backdrop-filter: blur(10px);
}

/* Coverage Stats */
.coverage-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 4rem 0;
}

.coverage-stats .stat-card {
  background: var(--dermiqt-white);
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(193, 120, 23, 0.1);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.coverage-stats .stat-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(
    90deg,
    var(--dermiqt-orange),
    var(--dermiqt-yellow)
  );
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.coverage-stats .stat-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
}

.coverage-stats .stat-card:hover::before {
  transform: scaleX(1);
}

.coverage-stats .stat-icon {
  color: var(--dermiqt-orange);
  margin-bottom: 1rem;
}

.coverage-stats .stat-number {
  font-size: 2.5rem;
  font-weight: 900;
  color: var(--dermiqt-dark-text);
  margin-bottom: 0.5rem;
  line-height: 1;
}

.coverage-stats .stat-label {
  font-size: 1rem;
  color: var(--dermiqt-dark-text);
  opacity: 0.8;
  font-weight: 500;
}

/* Coast CTA */
.coast-cta {
  text-align: center;
  margin-top: 3rem;
}

.coast-cta-btn {
  background: var(--dermiqt-yellow) !important;
  color: var(--dermiqt-dark-text) !important;
  font-weight: 700 !important;
  text-transform: uppercase !important;
  letter-spacing: 1px !important;
  border-radius: 12px !important;
  padding: 16px 32px !important;
  border: none !important;
  box-shadow: 0 8px 24px rgba(212, 175, 55, 0.3) !important;
  transition: all 0.3s ease !important;
  font-size: 1rem !important;
}

.coast-cta-btn:hover {
  background: var(--dermiqt-yellow-hover) !important;
  transform: translateY(-2px) !important;
  box-shadow: 0 12px 32px rgba(212, 175, 55, 0.4) !important;
}

/* Modern Stats Slider Section */
.stats-slider-section {
  background: linear-gradient(
    135deg,
    var(--dermiqt-dark-brown) 0%,
    var(--dermiqt-orange) 100%
  );
  padding: 6rem 0;
  position: relative;
  overflow: hidden;
}

.stats-slider-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="1" fill="rgba(255,255,255,0.1)"/></pattern></defs><rect width="100" height="100" fill="url(%23dots)"/></svg>');
  opacity: 0.3;
}

.slider-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
}

.slider-header {
  text-align: center;
  margin-bottom: 4rem;
}

.slider-title {
  font-size: 3.5rem;
  font-weight: 900;
  color: var(--dermiqt-white);
  margin-bottom: 1.5rem;
  line-height: 1.1;
}

.slider-subtitle {
  font-size: 1.25rem;
  color: var(--dermiqt-white);
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

/* Tab Indicators */
.slider-tabs {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 4rem;
}

.tab-indicator {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  min-width: 120px;
}

.tab-indicator:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

.tab-indicator.active {
  background: var(--dermiqt-yellow);
  color: var(--dermiqt-dark-text);
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(212, 175, 55, 0.3);
}

.tab-icon {
  color: inherit;
}

.tab-label {
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Slides Container */
.slides-container {
  position: relative;
  min-height: 500px;
}

.slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  opacity: 0;
  transition: all 0.5s ease;
  transform: translateX(50px);
}

.slide.active {
  opacity: 1;
  transform: translateX(0);
}

.slide-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

/* Stats Grid */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
}

.stats-grid .stat-card {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}

.stats-grid .stat-card:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-4px);
}

.stats-grid .stat-icon {
  color: var(--dermiqt-yellow);
  margin-bottom: 1rem;
}

.stats-grid .stat-number {
  font-size: 3rem;
  font-weight: 900;
  color: var(--dermiqt-white);
  margin-bottom: 0.5rem;
  line-height: 1;
}

.stats-grid .stat-label {
  font-size: 1rem;
  color: var(--dermiqt-white);
  opacity: 0.9;
  font-weight: 500;
}

/* Slide Visualizations */
.slide-visual {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

/* Fleet Visualization */
.fleet-visualization {
  position: relative;
  width: 100%;
  height: 300px;
}

.truck-fleet {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}

.truck {
  position: relative;
  animation: drive 3s ease-in-out infinite;
}

.truck-1 {
  animation-delay: 0s;
}
.truck-2 {
  animation-delay: 1s;
}
.truck-3 {
  animation-delay: 2s;
}

@keyframes drive {
  0%,
  100% {
    transform: translateX(-20px);
  }
  50% {
    transform: translateX(20px);
  }
}

.truck-body {
  display: flex;
  align-items: flex-end;
}

.truck-cab {
  width: 80px;
  height: 50px;
  background: var(--dermiqt-white);
  border-radius: 8px 8px 0 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.truck-trailer {
  width: 120px;
  height: 60px;
  background: var(--dermiqt-white);
  border-radius: 0 8px 8px 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.truck-shadow {
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 10px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  filter: blur(4px);
}

/* Network Visualization */
.network-visualization {
  position: relative;
  width: 100%;
  height: 300px;
}

.network-map {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.map-point {
  position: absolute;
  width: 8px;
  height: 8px;
  background: var(--dermiqt-yellow);
  border-radius: 50%;
  animation: pulse 2s ease-in-out infinite;
}

.map-point:nth-child(1) {
  top: 20%;
  left: 20%;
  animation-delay: 0s;
}
.map-point:nth-child(2) {
  top: 30%;
  right: 25%;
  animation-delay: 0.2s;
}
.map-point:nth-child(3) {
  bottom: 30%;
  left: 30%;
  animation-delay: 0.4s;
}
.map-point:nth-child(4) {
  bottom: 20%;
  right: 20%;
  animation-delay: 0.6s;
}
.map-point:nth-child(5) {
  top: 50%;
  left: 50%;
  animation-delay: 0.8s;
}

.connection-line {
  position: absolute;
  height: 2px;
  background: linear-gradient(90deg, var(--dermiqt-yellow), transparent);
  border-radius: 1px;
  animation: drawLine 2s ease-out infinite;
}

.connection-line:nth-child(21) {
  top: 25%;
  left: 25%;
  width: 50%;
  animation-delay: 0s;
}
.connection-line:nth-child(22) {
  top: 35%;
  right: 30%;
  width: 40%;
  animation-delay: 0.3s;
}
.connection-line:nth-child(23) {
  bottom: 35%;
  left: 35%;
  width: 45%;
  animation-delay: 0.6s;
}
.connection-line:nth-child(24) {
  bottom: 25%;
  right: 25%;
  width: 35%;
  animation-delay: 0.9s;
}

/* Performance Visualization */
.performance-visualization {
  position: relative;
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.performance-chart {
  display: flex;
  align-items: end;
  gap: 1rem;
  height: 200px;
}

.chart-bar {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.bar-fill {
  width: 40px;
  background: linear-gradient(
    to top,
    var(--dermiqt-yellow),
    var(--dermiqt-orange)
  );
  border-radius: 4px 4px 0 0;
  transition: all 0.5s ease;
  animation: growBar 1s ease-out forwards;
}

.bar-label {
  font-size: 0.875rem;
  color: var(--dermiqt-white);
  font-weight: 600;
}

@keyframes growBar {
  from {
    height: 0;
  }
  to {
    height: var(--height);
  }
}

/* Modern Capacity Section Styles */
.capacity-section {
  background: linear-gradient(
    135deg,
    var(--dermiqt-white) 0%,
    rgba(193, 120, 23, 0.05) 100%
  );
  padding: 6rem 0;
  position: relative;
  overflow: hidden;
}

.capacity-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(193,120,23,0.1)" stroke-width="0.5"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
  opacity: 0.5;
}

.capacity-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
}

.capacity-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 4rem;
  gap: 3rem;
}

.capacity-text {
  flex: 1;
  max-width: 600px;
}

.capacity-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--dermiqt-yellow);
  color: var(--dermiqt-dark-text);
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  font-weight: 600;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 2rem;
  box-shadow: 0 4px 12px rgba(212, 175, 55, 0.3);
}

.capacity-title {
  font-size: 3.5rem;
  font-weight: 900;
  color: var(--dermiqt-dark-text);
  margin-bottom: 1.5rem;
  line-height: 1.1;
  background: linear-gradient(
    135deg,
    var(--dermiqt-dark-text) 0%,
    var(--dermiqt-orange) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.capacity-description {
  font-size: 1.25rem;
  color: var(--dermiqt-dark-text);
  opacity: 0.8;
  line-height: 1.6;
  margin: 0;
}

.capacity-button {
  flex-shrink: 0;
  margin-top: 0.5rem;
}

.capacity-cta-btn {
  background: var(--dermiqt-yellow) !important;
  color: var(--dermiqt-dark-text) !important;
  font-weight: 700 !important;
  text-transform: uppercase !important;
  letter-spacing: 1px !important;
  border-radius: 12px !important;
  padding: 16px 32px !important;
  border: none !important;
  box-shadow: 0 8px 24px rgba(212, 175, 55, 0.3) !important;
  transition: all 0.3s ease !important;
  font-size: 1rem !important;
}

.capacity-cta-btn:hover {
  background: var(--dermiqt-yellow-hover) !important;
  transform: translateY(-2px) !important;
  box-shadow: 0 12px 32px rgba(212, 175, 55, 0.4) !important;
}

/* Growth Visualization */
.growth-visualization {
  margin: 4rem 0;
  padding: 3rem 0;
  background: rgba(193, 120, 23, 0.05);
  border-radius: 20px;
  position: relative;
  overflow: hidden;
}

.growth-chart {
  position: relative;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.chart-line {
  position: absolute;
  top: 50%;
  left: 10%;
  right: 10%;
  height: 4px;
  background: linear-gradient(
    90deg,
    var(--dermiqt-orange),
    var(--dermiqt-yellow)
  );
  border-radius: 2px;
  transform: translateY(-50%);
}

.line-segment {
  position: absolute;
  height: 100%;
  background: var(--dermiqt-yellow);
  border-radius: 2px;
  animation: growSegment 2s ease-out forwards;
}

.line-segment:nth-child(1) {
  left: 0%;
  width: 20%;
  animation-delay: 0s;
}
.line-segment:nth-child(2) {
  left: 20%;
  width: 25%;
  animation-delay: 0.3s;
}
.line-segment:nth-child(3) {
  left: 45%;
  width: 30%;
  animation-delay: 0.6s;
}
.line-segment:nth-child(4) {
  left: 75%;
  width: 20%;
  animation-delay: 0.9s;
}
.line-segment:nth-child(5) {
  left: 95%;
  width: 5%;
  animation-delay: 1.2s;
}

@keyframes growSegment {
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
}

.growth-points {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.growth-point {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  animation: fadeInUp 0.8s ease-out forwards;
  opacity: 0;
  transform: translateY(20px);
}

.growth-point:nth-child(1) {
  left: 10%;
  top: 50%;
  animation-delay: 0.2s;
}
.growth-point:nth-child(2) {
  left: 30%;
  top: 30%;
  animation-delay: 0.4s;
}
.growth-point:nth-child(3) {
  left: 50%;
  top: 20%;
  animation-delay: 0.6s;
}
.growth-point:nth-child(4) {
  left: 70%;
  top: 30%;
  animation-delay: 0.8s;
}
.growth-point:nth-child(5) {
  left: 85%;
  top: 40%;
  animation-delay: 1s;
}
.growth-point:nth-child(6) {
  left: 95%;
  top: 50%;
  animation-delay: 1.2s;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.point-dot {
  width: 12px;
  height: 12px;
  background: var(--dermiqt-orange);
  border-radius: 50%;
  border: 3px solid var(--dermiqt-white);
  box-shadow: 0 0 0 3px var(--dermiqt-orange);
  animation: pulse 2s ease-in-out infinite;
}

.point-label {
  font-size: 0.75rem;
  color: var(--dermiqt-dark-text);
  font-weight: 600;
  text-align: center;
  background: rgba(255, 255, 255, 0.9);
  padding: 0.25rem 0.5rem;
  border-radius: 8px;
  white-space: nowrap;
}

/* Capacity Stats */
.capacity-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 4rem 0;
}

.capacity-stats .stat-card {
  background: var(--dermiqt-white);
  border-radius: 20px;
  padding: 2.5rem;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(193, 120, 23, 0.1);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.capacity-stats .stat-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(
    90deg,
    var(--dermiqt-orange),
    var(--dermiqt-yellow)
  );
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.capacity-stats .stat-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
}

.capacity-stats .stat-card:hover::before {
  transform: scaleX(1);
}

.capacity-stats .stat-icon {
  color: var(--dermiqt-orange);
  margin-bottom: 1rem;
}

.capacity-stats .stat-number {
  font-size: 3rem;
  font-weight: 900;
  color: var(--dermiqt-dark-text);
  margin-bottom: 0.5rem;
  line-height: 1;
}

.capacity-stats .stat-label {
  font-size: 1.125rem;
  color: var(--dermiqt-dark-text);
  font-weight: 500;
  margin-bottom: 1rem;
  line-height: 1.3;
}

.capacity-stats .stat-trend {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: var(--dermiqt-orange);
  font-weight: 600;
  font-size: 0.875rem;
}

/* Capacity Features */
.capacity-features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
}

.capacity-features .feature-item {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  padding: 2rem;
  background: var(--dermiqt-white);
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
  border: 1px solid rgba(193, 120, 23, 0.1);
  transition: all 0.3s ease;
}

.capacity-features .feature-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.1);
}

.capacity-features .feature-icon {
  color: var(--dermiqt-orange);
  background: rgba(193, 120, 23, 0.1);
  padding: 1rem;
  border-radius: 12px;
  flex-shrink: 0;
}

.capacity-features .feature-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--dermiqt-dark-text);
  margin-bottom: 0.75rem;
}

.capacity-features .feature-description {
  font-size: 1rem;
  color: var(--dermiqt-dark-text);
  opacity: 0.8;
  line-height: 1.6;
  margin: 0;
}

/* Modern Technology Section Styles */
.technology-section {
  background: linear-gradient(
    135deg,
    var(--dermiqt-dark-brown) 0%,
    var(--dermiqt-orange) 100%
  );
  padding: 6rem 0;
  position: relative;
  overflow: hidden;
}

.technology-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="circuit" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 0 20 L 40 20 M 20 0 L 20 40" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="1"/><circle cx="20" cy="20" r="2" fill="rgba(255,255,255,0.2)"/></pattern></defs><rect width="100" height="100" fill="url(%23circuit)"/></svg>');
  opacity: 0.3;
}

.technology-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
}

.technology-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 4rem;
  gap: 3rem;
}

.technology-text {
  flex: 1;
  max-width: 600px;
}

.technology-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--dermiqt-yellow);
  color: var(--dermiqt-dark-text);
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  font-weight: 600;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 2rem;
  box-shadow: 0 4px 12px rgba(212, 175, 55, 0.3);
}

.technology-title {
  font-size: 3.5rem;
  font-weight: 900;
  color: var(--dermiqt-white);
  margin-bottom: 1.5rem;
  line-height: 1.1;
  background: linear-gradient(
    135deg,
    var(--dermiqt-white) 0%,
    var(--dermiqt-yellow) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.technology-description {
  font-size: 1.25rem;
  color: var(--dermiqt-white);
  opacity: 0.9;
  line-height: 1.6;
  margin: 0;
}

.technology-button {
  flex-shrink: 0;
  margin-top: 0.5rem;
}

.technology-cta-btn {
  background: var(--dermiqt-yellow) !important;
  color: var(--dermiqt-dark-text) !important;
  font-weight: 700 !important;
  text-transform: uppercase !important;
  letter-spacing: 1px !important;
  border-radius: 12px !important;
  padding: 16px 32px !important;
  border: none !important;
  box-shadow: 0 8px 24px rgba(212, 175, 55, 0.3) !important;
  transition: all 0.3s ease !important;
  font-size: 1rem !important;
}

.technology-cta-btn:hover {
  background: var(--dermiqt-yellow-hover) !important;
  transform: translateY(-2px) !important;
  box-shadow: 0 12px 32px rgba(212, 175, 55, 0.4) !important;
}

/* Technology Stats */
.tech-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 4rem 0;
}

.tech-stat-card {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2.5rem;
  text-align: center;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.tech-stat-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(
    90deg,
    var(--dermiqt-yellow),
    var(--dermiqt-orange)
  );
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.tech-stat-card:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

.tech-stat-card:hover::before {
  transform: scaleX(1);
}

.tech-stat-card .stat-icon {
  color: var(--dermiqt-yellow);
  margin-bottom: 1rem;
}

.tech-stat-card .stat-number {
  font-size: 3rem;
  font-weight: 900;
  color: var(--dermiqt-white);
  margin-bottom: 0.5rem;
  line-height: 1;
}

.tech-stat-card .stat-label {
  font-size: 1.125rem;
  color: var(--dermiqt-white);
  font-weight: 500;
  margin-bottom: 1rem;
  line-height: 1.3;
}

.tech-stat-card .stat-description {
  font-size: 1rem;
  color: var(--dermiqt-white);
  opacity: 0.8;
  line-height: 1.6;
}

/* Technology Features Grid */
.tech-features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin: 4rem 0;
}

.tech-feature-card {
  background: var(--dermiqt-white);
  border-radius: 20px;
  padding: 2.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(193, 120, 23, 0.1);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.tech-feature-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(
    90deg,
    var(--dermiqt-orange),
    var(--dermiqt-yellow)
  );
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.tech-feature-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
}

.tech-feature-card:hover::before {
  transform: scaleX(1);
}

.tech-feature-card .feature-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.tech-feature-card .feature-icon {
  color: var(--dermiqt-orange);
  background: rgba(193, 120, 23, 0.1);
  padding: 1rem;
  border-radius: 12px;
  flex-shrink: 0;
}

.tech-feature-card .feature-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--dermiqt-dark-text);
  margin: 0;
}

.tech-feature-card .feature-description {
  font-size: 1rem;
  color: var(--dermiqt-dark-text);
  opacity: 0.8;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.tech-feature-card .feature-benefits {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.tech-feature-card .benefit-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--dermiqt-dark-text);
  font-size: 0.875rem;
}

.tech-feature-card .benefit-item .q-icon {
  color: var(--dermiqt-orange);
}

/* Technology Visualization */
.tech-visualization {
  margin: 4rem 0;
}

.visualization-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.tech-dashboard {
  background: var(--dermiqt-white);
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(193, 120, 23, 0.1);
  max-width: 600px;
  width: 100%;
}

.dashboard-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(193, 120, 23, 0.1);
}

.dashboard-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--dermiqt-dark-text);
}

.dashboard-status {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--dermiqt-orange);
  font-size: 0.875rem;
  font-weight: 600;
}

.status-dot {
  width: 8px;
  height: 8px;
  background: var(--dermiqt-orange);
  border-radius: 50%;
  animation: pulse 2s ease-in-out infinite;
}

.dashboard-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: center;
}

.dashboard-metrics {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.metric {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.metric-label {
  font-size: 0.75rem;
  color: var(--dermiqt-dark-text);
  opacity: 0.7;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.metric-value {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--dermiqt-dark-text);
}

.metric-trend {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.75rem;
  font-weight: 600;
}

.metric-trend.up {
  color: #10b981;
}

.metric-trend.down {
  color: #ef4444;
}

.dashboard-chart {
  height: 120px;
  display: flex;
  align-items: end;
  gap: 0.5rem;
}

.chart-bars {
  display: flex;
  align-items: end;
  gap: 0.5rem;
  width: 100%;
  height: 100%;
}

.chart-bar {
  flex: 1;
  background: linear-gradient(
    to top,
    var(--dermiqt-orange),
    var(--dermiqt-yellow)
  );
  border-radius: 2px 2px 0 0;
  animation: growBar 1.5s ease-out forwards;
  animation-delay: calc(var(--i, 0) * 0.1s);
}

.chart-bar:nth-child(1) {
  height: 60%;
  animation-delay: 0s;
}
.chart-bar:nth-child(2) {
  height: 80%;
  animation-delay: 0.1s;
}
.chart-bar:nth-child(3) {
  height: 45%;
  animation-delay: 0.2s;
}
.chart-bar:nth-child(4) {
  height: 90%;
  animation-delay: 0.3s;
}
.chart-bar:nth-child(5) {
  height: 70%;
  animation-delay: 0.4s;
}
.chart-bar:nth-child(6) {
  height: 85%;
  animation-delay: 0.5s;
}
.chart-bar:nth-child(7) {
  height: 55%;
  animation-delay: 0.6s;
}
.chart-bar:nth-child(8) {
  height: 95%;
  animation-delay: 0.7s;
}

/* Modern Accountability Section Styles */
.accountability-section {
  background: linear-gradient(
    135deg,
    var(--dermiqt-white) 0%,
    rgba(193, 120, 23, 0.05) 100%
  );
  padding: 6rem 0;
  position: relative;
  overflow: hidden;
}

.accountability-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="trust" width="30" height="30" patternUnits="userSpaceOnUse"><path d="M 15 0 L 15 30 M 0 15 L 30 15" fill="none" stroke="rgba(193,120,23,0.1)" stroke-width="1"/><circle cx="15" cy="15" r="2" fill="rgba(193,120,23,0.2)"/></pattern></defs><rect width="100" height="100" fill="url(%23trust)"/></svg>');
  opacity: 0.5;
}

.accountability-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
}

.accountability-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 4rem;
  gap: 3rem;
}

.accountability-text {
  flex: 1;
  max-width: 600px;
}

.accountability-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--dermiqt-yellow);
  color: var(--dermiqt-dark-text);
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  font-weight: 600;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 2rem;
  box-shadow: 0 4px 12px rgba(212, 175, 55, 0.3);
}

.accountability-title {
  font-size: 3.5rem;
  font-weight: 900;
  color: var(--dermiqt-dark-text);
  margin-bottom: 1.5rem;
  line-height: 1.1;
  background: linear-gradient(
    135deg,
    var(--dermiqt-dark-text) 0%,
    var(--dermiqt-orange) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.accountability-description {
  font-size: 1.25rem;
  color: var(--dermiqt-dark-text);
  opacity: 0.8;
  line-height: 1.6;
  margin: 0;
}

.accountability-button {
  flex-shrink: 0;
  margin-top: 0.5rem;
}

.accountability-cta-btn {
  background: var(--dermiqt-yellow) !important;
  color: var(--dermiqt-dark-text) !important;
  font-weight: 700 !important;
  text-transform: uppercase !important;
  letter-spacing: 1px !important;
  border-radius: 12px !important;
  padding: 16px 32px !important;
  border: none !important;
  box-shadow: 0 8px 24px rgba(212, 175, 55, 0.3) !important;
  transition: all 0.3s ease !important;
  font-size: 1rem !important;
}

.accountability-cta-btn:hover {
  background: var(--dermiqt-yellow-hover) !important;
  transform: translateY(-2px) !important;
  box-shadow: 0 12px 32px rgba(212, 175, 55, 0.4) !important;
}

/* Accountability Features */
.accountability-features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 4rem 0;
}

.accountability-feature {
  background: var(--dermiqt-white);
  border-radius: 20px;
  padding: 2.5rem;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(193, 120, 23, 0.1);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.accountability-feature::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(
    90deg,
    var(--dermiqt-orange),
    var(--dermiqt-yellow)
  );
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.accountability-feature:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
}

.accountability-feature:hover::before {
  transform: scaleX(1);
}

.accountability-feature .feature-icon {
  color: var(--dermiqt-orange);
  margin-bottom: 1.5rem;
}

.accountability-feature .feature-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--dermiqt-dark-text);
  margin-bottom: 1rem;
}

.accountability-feature .feature-description {
  font-size: 1rem;
  color: var(--dermiqt-dark-text);
  opacity: 0.8;
  line-height: 1.6;
}

/* Testimonials Section */
.testimonials-section {
  margin: 4rem 0;
}

.testimonials-header {
  text-align: center;
  margin-bottom: 3rem;
}

.testimonials-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--dermiqt-dark-text);
  margin-bottom: 1rem;
}

.testimonials-subtitle {
  font-size: 1.125rem;
  color: var(--dermiqt-dark-text);
  opacity: 0.8;
  max-width: 600px;
  margin: 0 auto;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
}

.testimonial-card {
  background: var(--dermiqt-white);
  border-radius: 20px;
  padding: 2.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(193, 120, 23, 0.1);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.testimonial-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(
    90deg,
    var(--dermiqt-orange),
    var(--dermiqt-yellow)
  );
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.testimonial-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
}

.testimonial-card:hover::before {
  transform: scaleX(1);
}

.testimonial-content {
  position: relative;
}

.quote-icon {
  color: var(--dermiqt-orange);
  margin-bottom: 1.5rem;
  opacity: 0.3;
}

.testimonial-text {
  font-size: 1.125rem;
  color: var(--dermiqt-dark-text);
  line-height: 1.6;
  margin-bottom: 2rem;
  font-style: italic;
}

.testimonial-author {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.author-info {
  flex: 1;
}

.author-name {
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--dermiqt-dark-text);
  margin-bottom: 0.25rem;
}

.author-title {
  font-size: 0.875rem;
  color: var(--dermiqt-orange);
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.author-company {
  font-size: 0.875rem;
  color: var(--dermiqt-dark-text);
  opacity: 0.7;
}

.author-avatar {
  color: var(--dermiqt-orange);
  background: rgba(193, 120, 23, 0.1);
  padding: 1rem;
  border-radius: 50%;
  flex-shrink: 0;
}

.testimonial-rating {
  display: flex;
  gap: 0.25rem;
  margin-top: 1.5rem;
  justify-content: center;
}

.testimonial-rating .q-icon {
  color: #e5e7eb;
}

.testimonial-rating .q-icon.filled {
  color: var(--dermiqt-yellow);
}

/* Trust Indicators */
.trust-indicators {
  margin: 4rem 0;
}

.trust-header {
  text-align: center;
  margin-bottom: 3rem;
}

.trust-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--dermiqt-dark-text);
  margin-bottom: 1rem;
}

.trust-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
}

.trust-item {
  background: var(--dermiqt-white);
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
  border: 1px solid rgba(193, 120, 23, 0.1);
  transition: all 0.3s ease;
}

.trust-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.1);
}

.trust-icon {
  color: var(--dermiqt-orange);
  margin-bottom: 1rem;
}

.trust-number {
  font-size: 2.5rem;
  font-weight: 900;
  color: var(--dermiqt-dark-text);
  margin-bottom: 0.5rem;
  line-height: 1;
}

.trust-label {
  font-size: 1rem;
  color: var(--dermiqt-dark-text);
  opacity: 0.8;
  font-weight: 500;
}

/* Modern Recruitment Section Styles */
.recruitment-section {
  background: linear-gradient(
    135deg,
    var(--dermiqt-white) 0%,
    rgba(193, 120, 23, 0.05) 100%
  );
  padding: 6rem 0;
  position: relative;
  overflow: hidden;
}

.recruitment-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="careers" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 20 0 L 20 40 M 0 20 L 40 20" fill="none" stroke="rgba(193,120,23,0.1)" stroke-width="1"/><circle cx="20" cy="20" r="3" fill="rgba(193,120,23,0.15)"/></pattern></defs><rect width="100" height="100" fill="url(%23careers)"/></svg>');
  opacity: 0.4;
}

.recruitment-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
}

.recruitment-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 4rem;
  gap: 3rem;
}

.recruitment-text {
  flex: 1;
  max-width: 600px;
}

.recruitment-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--dermiqt-yellow);
  color: var(--dermiqt-dark-text);
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  font-weight: 600;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 2rem;
  box-shadow: 0 4px 12px rgba(212, 175, 55, 0.3);
}

.recruitment-title {
  font-size: 3.5rem;
  font-weight: 900;
  color: var(--dermiqt-dark-text);
  margin-bottom: 1.5rem;
  line-height: 1.1;
  background: linear-gradient(
    135deg,
    var(--dermiqt-dark-text) 0%,
    var(--dermiqt-orange) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.recruitment-description {
  font-size: 1.25rem;
  color: var(--dermiqt-dark-text);
  opacity: 0.8;
  line-height: 1.6;
  margin: 0;
}

.recruitment-button {
  flex-shrink: 0;
  margin-top: 0.5rem;
}

.recruitment-cta-btn {
  background: var(--dermiqt-yellow) !important;
  color: var(--dermiqt-dark-text) !important;
  font-weight: 700 !important;
  text-transform: uppercase !important;
  letter-spacing: 1px !important;
  border-radius: 12px !important;
  padding: 16px 32px !important;
  border: none !important;
  box-shadow: 0 8px 24px rgba(212, 175, 55, 0.3) !important;
  transition: all 0.3s ease !important;
  font-size: 1rem !important;
}

.recruitment-cta-btn:hover {
  background: var(--dermiqt-yellow-hover) !important;
  transform: translateY(-2px) !important;
  box-shadow: 0 12px 32px rgba(212, 175, 55, 0.4) !important;
}

/* Career Benefits */
.career-benefits {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 4rem 0;
}

.career-benefit {
  background: var(--dermiqt-white);
  border-radius: 20px;
  padding: 2.5rem;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(193, 120, 23, 0.1);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.career-benefit::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(
    90deg,
    var(--dermiqt-orange),
    var(--dermiqt-yellow)
  );
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.career-benefit:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
}

.career-benefit:hover::before {
  transform: scaleX(1);
}

.career-benefit .benefit-icon {
  color: var(--dermiqt-orange);
  margin-bottom: 1.5rem;
}

.career-benefit .benefit-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--dermiqt-dark-text);
  margin-bottom: 1rem;
}

.career-benefit .benefit-description {
  font-size: 1rem;
  color: var(--dermiqt-dark-text);
  opacity: 0.8;
  line-height: 1.6;
}

/* Employee Testimonials */
.employee-testimonials {
  margin: 4rem 0;
}

.employee-header {
  text-align: center;
  margin-bottom: 3rem;
}

.employee-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--dermiqt-dark-text);
  margin-bottom: 1rem;
}

.employee-subtitle {
  font-size: 1.125rem;
  color: var(--dermiqt-dark-text);
  opacity: 0.8;
  max-width: 600px;
  margin: 0 auto;
}

.employee-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
}

.employee-card {
  background: var(--dermiqt-white);
  border-radius: 20px;
  padding: 2.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(193, 120, 23, 0.1);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.employee-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(
    90deg,
    var(--dermiqt-orange),
    var(--dermiqt-yellow)
  );
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.employee-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
}

.employee-card:hover::before {
  transform: scaleX(1);
}

.employee-content {
  position: relative;
}

.quote-icon {
  color: var(--dermiqt-orange);
  margin-bottom: 1.5rem;
  opacity: 0.3;
}

.employee-quote {
  font-size: 1.125rem;
  color: var(--dermiqt-dark-text);
  line-height: 1.6;
  margin-bottom: 2rem;
  font-style: italic;
}

.employee-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.employee-details {
  flex: 1;
}

.employee-name {
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--dermiqt-dark-text);
  margin-bottom: 0.25rem;
}

.employee-position {
  font-size: 0.875rem;
  color: var(--dermiqt-orange);
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.employee-department {
  font-size: 0.875rem;
  color: var(--dermiqt-dark-text);
  opacity: 0.7;
}

.employee-avatar {
  color: var(--dermiqt-orange);
  background: rgba(193, 120, 23, 0.1);
  padding: 1rem;
  border-radius: 50%;
  flex-shrink: 0;
}

.employee-stats {
  display: flex;
  gap: 2rem;
  justify-content: center;
  border-top: 1px solid rgba(193, 120, 23, 0.1);
  padding-top: 1.5rem;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 1.5rem;
  font-weight: 900;
  color: var(--dermiqt-orange);
  margin-bottom: 0.25rem;
}

.stat-label {
  font-size: 0.75rem;
  color: var(--dermiqt-dark-text);
  opacity: 0.7;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Job Categories */
.job-categories {
  margin: 4rem 0;
}

.categories-header {
  text-align: center;
  margin-bottom: 3rem;
}

.categories-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--dermiqt-dark-text);
  margin-bottom: 1rem;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.category-card {
  background: var(--dermiqt-white);
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
  border: 1px solid rgba(193, 120, 23, 0.1);
  transition: all 0.3s ease;
}

.category-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.1);
}

.category-icon {
  color: var(--dermiqt-orange);
  margin-bottom: 1rem;
}

.category-name {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--dermiqt-dark-text);
  margin-bottom: 0.5rem;
}

.category-count {
  font-size: 1rem;
  color: var(--dermiqt-orange);
  font-weight: 600;
  margin-bottom: 1rem;
}

.category-description {
  font-size: 0.875rem;
  color: var(--dermiqt-dark-text);
  opacity: 0.8;
  line-height: 1.5;
}

/* Company Culture */
.culture-section {
  margin: 4rem 0;
}

.culture-header {
  text-align: center;
  margin-bottom: 3rem;
}

.culture-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--dermiqt-dark-text);
  margin-bottom: 1rem;
}

.culture-subtitle {
  font-size: 1.125rem;
  color: var(--dermiqt-dark-text);
  opacity: 0.8;
  max-width: 600px;
  margin: 0 auto;
}

.culture-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
}

.culture-item {
  background: var(--dermiqt-white);
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
  border: 1px solid rgba(193, 120, 23, 0.1);
  transition: all 0.3s ease;
}

.culture-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.1);
}

.culture-icon {
  color: var(--dermiqt-orange);
  margin-bottom: 1rem;
}

.culture-text {
  font-size: 1rem;
  color: var(--dermiqt-dark-text);
  font-weight: 500;
}

/* Modern CTA Section Styles */
.cta-section {
  background: linear-gradient(
    135deg,
    var(--dermiqt-orange) 0%,
    var(--dermiqt-yellow) 100%
  );
  padding: 6rem 0;
  position: relative;
  overflow: hidden;
}

.cta-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="cta" width="50" height="50" patternUnits="userSpaceOnUse"><path d="M 25 0 L 25 50 M 0 25 L 50 25" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="1"/><circle cx="25" cy="25" r="4" fill="rgba(255,255,255,0.15)"/></pattern></defs><rect width="100" height="100" fill="url(%23cta)"/></svg>');
  opacity: 0.3;
}

.cta-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
  text-align: center;
}

.cta-pattern {
  position: absolute;
  top: -50px;
  right: -50px;
  width: 200px;
  height: 200px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  animation: float 6s ease-in-out infinite;
}

.cta-main {
  margin-bottom: 4rem;
}

.cta-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.2);
  color: var(--dermiqt-dark-text);
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  font-weight: 600;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 2rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.cta-title {
  font-size: 4rem;
  font-weight: 900;
  color: var(--dermiqt-dark-text);
  margin-bottom: 1.5rem;
  line-height: 1.1;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.cta-description {
  font-size: 1.5rem;
  color: var(--dermiqt-dark-text);
  opacity: 0.9;
  line-height: 1.6;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.cta-buttons {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
}

.cta-primary-btn {
  background: var(--dermiqt-dark-text) !important;
  color: var(--dermiqt-white) !important;
  font-weight: 700 !important;
  text-transform: uppercase !important;
  letter-spacing: 1px !important;
  border-radius: 12px !important;
  padding: 20px 40px !important;
  border: none !important;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2) !important;
  transition: all 0.3s ease !important;
  font-size: 1.125rem !important;
}

.cta-primary-btn:hover {
  background: #1a1a1a !important;
  transform: translateY(-3px) !important;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.3) !important;
}

.cta-secondary-btn {
  background: transparent !important;
  color: var(--dermiqt-dark-text) !important;
  font-weight: 700 !important;
  text-transform: uppercase !important;
  letter-spacing: 1px !important;
  border-radius: 12px !important;
  padding: 20px 40px !important;
  border: 2px solid var(--dermiqt-dark-text) !important;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1) !important;
  transition: all 0.3s ease !important;
  font-size: 1.125rem !important;
}

.cta-secondary-btn:hover {
  background: var(--dermiqt-dark-text) !important;
  color: var(--dermiqt-white) !important;
  transform: translateY(-3px) !important;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.2) !important;
}

/* CTA Features */
.cta-features {
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin-bottom: 4rem;
  flex-wrap: wrap;
}

.cta-feature {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: rgba(255, 255, 255, 0.15);
  padding: 1rem 1.5rem;
  border-radius: 25px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}

.cta-feature:hover {
  background: rgba(255, 255, 255, 0.25);
  transform: translateY(-2px);
}

.cta-feature .feature-icon {
  color: var(--dermiqt-dark-text);
}

.cta-feature .feature-text {
  font-size: 1rem;
  color: var(--dermiqt-dark-text);
  font-weight: 600;
}

/* Trust Indicators */
.cta-trust {
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding-top: 3rem;
}

.trust-label {
  font-size: 1rem;
  color: var(--dermiqt-dark-text);
  opacity: 0.8;
  margin-bottom: 2rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: 600;
}

.trust-logos {
  display: flex;
  justify-content: center;
  gap: 3rem;
  flex-wrap: wrap;
}

.trust-logo {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  min-width: 120px;
}

.trust-logo:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

.trust-logo .q-icon {
  color: var(--dermiqt-dark-text);
}

.logo-text {
  font-size: 0.875rem;
  color: var(--dermiqt-dark-text);
  font-weight: 600;
  text-align: center;
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

  /* Take Control Section Mobile */
  .take-control-section {
    padding: 4rem 0;
  }

  .control-title {
    font-size: 2.5rem;
  }

  .control-subtitle {
    font-size: 1.125rem;
  }

  .control-features {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .feature-card {
    padding: 2rem;
  }

  /* Mission Section Mobile */
  .mission-section {
    padding: 4rem 0;
  }

  .mission-title {
    font-size: 2.5rem;
  }

  .mission-description {
    font-size: 1.125rem;
  }

  .mission-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .mission-item {
    padding: 1.5rem;
  }

  /* Freight First Section Mobile */
  .freight-first-section {
    margin-top: 3rem;
    padding-top: 3rem;
  }

  .freight-content {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }

  .freight-title {
    font-size: 2.5rem;
  }

  .freight-description {
    font-size: 1.125rem;
  }

  .freight-stats {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 1rem;
  }

  .freight-stats .stat-number {
    font-size: 2rem;
  }

  /* Hero Features Grid Mobile */
  .hero-features-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 0.75rem;
    max-width: 400px;
  }

  .hero-feature-card {
    min-height: 70px;
    padding: 0.75rem;
  }

  .hero-feature-card .feature-text {
    font-size: 0.7rem;
  }

  /* Coast Section Mobile */
  .coast-section {
    padding: 4rem 0;
  }

  .coast-title {
    font-size: 2.5rem;
  }

  .coast-subtitle {
    font-size: 1.125rem;
  }

  .map-container {
    height: 300px;
  }

  .coverage-stats {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .coverage-stats .stat-card {
    padding: 1.5rem;
  }

  .coverage-stats .stat-number {
    font-size: 2rem;
  }

  /* Stats Slider Mobile */
  .stats-slider-section {
    padding: 4rem 0;
  }

  .slider-title {
    font-size: 2.5rem;
  }

  .slider-subtitle {
    font-size: 1.125rem;
  }

  .slider-tabs {
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 3rem;
  }

  .tab-indicator {
    min-width: auto;
    padding: 0.75rem 1rem;
  }

  .slide-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .stats-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .stats-grid .stat-card {
    padding: 1.5rem;
  }

  .stats-grid .stat-number {
    font-size: 2.5rem;
  }

  .slide-visual {
    min-height: 300px;
  }

  .truck-fleet {
    gap: 1rem;
  }

  .truck-cab {
    width: 60px;
    height: 40px;
  }

  .truck-trailer {
    width: 90px;
    height: 45px;
  }

  .performance-chart {
    gap: 0.5rem;
  }

  .bar-fill {
    width: 30px;
  }

  /* Capacity Section Mobile */
  .capacity-section {
    padding: 4rem 0;
  }

  .capacity-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
    margin-bottom: 3rem;
  }

  .capacity-title {
    font-size: 2.5rem;
  }

  .capacity-description {
    font-size: 1.125rem;
  }

  .growth-visualization {
    margin: 3rem 0;
    padding: 2rem 0;
  }

  .growth-chart {
    height: 150px;
  }

  .growth-point {
    gap: 0.25rem;
  }

  .point-label {
    font-size: 0.625rem;
    padding: 0.125rem 0.25rem;
  }

  .capacity-stats {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin: 3rem 0;
  }

  .capacity-stats .stat-card {
    padding: 2rem;
  }

  .capacity-stats .stat-number {
    font-size: 2.5rem;
  }

  .capacity-features {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-top: 3rem;
  }

  .capacity-features .feature-item {
    padding: 1.5rem;
    gap: 1rem;
  }

  .capacity-features .feature-icon {
    padding: 0.75rem;
  }

  .capacity-features .feature-title {
    font-size: 1.125rem;
  }

  .capacity-features .feature-description {
    font-size: 0.875rem;
  }

  /* Technology Section Mobile */
  .technology-section {
    padding: 4rem 0;
  }

  .technology-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
    margin-bottom: 3rem;
  }

  .technology-title {
    font-size: 2.5rem;
  }

  .technology-description {
    font-size: 1.125rem;
  }

  .tech-stats {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin: 3rem 0;
  }

  .tech-stat-card {
    padding: 2rem;
  }

  .tech-stat-card .stat-number {
    font-size: 2.5rem;
  }

  .tech-features-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin: 3rem 0;
  }

  .tech-feature-card {
    padding: 2rem;
  }

  .tech-feature-card .feature-title {
    font-size: 1.25rem;
  }

  .tech-feature-card .feature-description {
    font-size: 0.875rem;
  }

  .tech-visualization {
    margin: 3rem 0;
  }

  .tech-dashboard {
    padding: 1.5rem;
  }

  .dashboard-header {
    margin-bottom: 1.5rem;
  }

  .dashboard-title {
    font-size: 1.125rem;
  }

  .dashboard-content {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .dashboard-metrics {
    gap: 0.75rem;
  }

  .metric-value {
    font-size: 1.25rem;
  }

  .dashboard-chart {
    height: 100px;
  }

  /* Accountability Section Mobile */
  .accountability-section {
    padding: 4rem 0;
  }

  .accountability-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
    margin-bottom: 3rem;
  }

  .accountability-title {
    font-size: 2.5rem;
  }

  .accountability-description {
    font-size: 1.125rem;
  }

  .accountability-features {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin: 3rem 0;
  }

  .accountability-feature {
    padding: 2rem;
  }

  .accountability-feature .feature-title {
    font-size: 1.25rem;
  }

  .accountability-feature .feature-description {
    font-size: 0.875rem;
  }

  .testimonials-section {
    margin: 3rem 0;
  }

  .testimonials-title {
    font-size: 2rem;
  }

  .testimonials-subtitle {
    font-size: 1rem;
  }

  .testimonials-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .testimonial-card {
    padding: 2rem;
  }

  .testimonial-text {
    font-size: 1rem;
  }

  .testimonial-author {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }

  .author-avatar {
    align-self: center;
  }

  .trust-indicators {
    margin: 3rem 0;
  }

  .trust-title {
    font-size: 2rem;
  }

  .trust-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  .trust-item {
    padding: 1.5rem;
  }

  .trust-number {
    font-size: 2rem;
  }

  /* Recruitment Section Mobile */
  .recruitment-section {
    padding: 4rem 0;
  }

  .recruitment-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
    margin-bottom: 3rem;
  }

  .recruitment-title {
    font-size: 2.5rem;
  }

  .recruitment-description {
    font-size: 1.125rem;
  }

  .career-benefits {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin: 3rem 0;
  }

  .career-benefit {
    padding: 2rem;
  }

  .career-benefit .benefit-title {
    font-size: 1.25rem;
  }

  .career-benefit .benefit-description {
    font-size: 0.875rem;
  }

  .employee-testimonials {
    margin: 3rem 0;
  }

  .employee-title {
    font-size: 2rem;
  }

  .employee-subtitle {
    font-size: 1rem;
  }

  .employee-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .employee-card {
    padding: 2rem;
  }

  .employee-quote {
    font-size: 1rem;
  }

  .employee-info {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }

  .employee-avatar {
    align-self: center;
  }

  .employee-stats {
    gap: 1rem;
  }

  .stat-number {
    font-size: 1.25rem;
  }

  .job-categories {
    margin: 3rem 0;
  }

  .categories-title {
    font-size: 2rem;
  }

  .categories-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  .category-card {
    padding: 1.5rem;
  }

  .category-name {
    font-size: 1.125rem;
  }

  .culture-section {
    margin: 3rem 0;
  }

  .culture-title {
    font-size: 2rem;
  }

  .culture-subtitle {
    font-size: 1rem;
  }

  .culture-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  .culture-item {
    padding: 1.5rem;
  }

  .culture-text {
    font-size: 0.875rem;
  }

  /* CTA Section Mobile */
  .cta-section {
    padding: 4rem 0;
  }

  .cta-title {
    font-size: 2.5rem;
  }

  .cta-description {
    font-size: 1.25rem;
  }

  .cta-buttons {
    flex-direction: column;
    gap: 1rem;
  }

  .cta-primary-btn,
  .cta-secondary-btn {
    padding: 16px 32px !important;
    font-size: 1rem !important;
  }

  .cta-features {
    gap: 1rem;
    margin-bottom: 3rem;
  }

  .cta-feature {
    padding: 0.75rem 1rem;
  }

  .cta-feature .feature-text {
    font-size: 0.875rem;
  }

  .cta-trust {
    padding-top: 2rem;
  }

  .trust-logos {
    gap: 1rem;
  }

  .trust-logo {
    min-width: 100px;
    padding: 0.75rem;
  }

  .logo-text {
    font-size: 0.75rem;
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
