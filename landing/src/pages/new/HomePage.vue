<template>
  <q-page>
    <!-- hero section -->
    <section class="hero-section">
      <!-- Navigation Arrow Left -->
      <button class="nav-arrow nav-arrow-left" @click="previousSlide">
        <i class="fas fa-chevron-left"></i>
      </button>

      <!-- Navigation Arrow Right -->
      <button class="nav-arrow nav-arrow-right" @click="nextSlide">
        <i class="fas fa-chevron-right"></i>
      </button>

      <!-- Slider Container -->
      <div class="slider-container">
        <div
          class="slide-wrapper"
          :style="{ transform: `translateX(-${currentSlide * 100}vw)` }"
        >
          <!-- Slide 1: 2024 National Movers Study -->
          <div class="slide">
            <div class="slide-content">
              <!-- Left Section - Text Content -->
              <div class="text-content">
                <h1 class="headline">
                  2024 National Movers
                  <span class="highlight">Study</span>
                </h1>

                <p class="study-description">
                  Wondering where Americans moved in 2024 - and why? Uncover the
                  trends behind U.S. migration in United Van Lines' 48th Annual
                  National Movers Study.
                </p>

                <div class="cta-section">
                  <button class="cta-button">2024 NATIONAL MOVERS STUDY</button>
                </div>
              </div>

              <!-- Right Section - US Map -->
              <div class="image-content">
                <div class="us-map-container">
                  <div class="us-map">
                    <!-- Map states with different colors -->
                    <div
                      class="state light-blue"
                      style="top: 10%; left: 5%; width: 8%; height: 6%"
                    >
                      WA
                    </div>
                    <div
                      class="state light-blue"
                      style="top: 12%; left: 8%; width: 6%; height: 8%"
                    >
                      ID
                    </div>
                    <div
                      class="state light-blue"
                      style="top: 10%; left: 15%; width: 12%; height: 6%"
                    >
                      MT
                    </div>
                    <div
                      class="state yellow"
                      style="top: 20%; left: 5%; width: 10%; height: 8%"
                    >
                      CA
                    </div>
                    <div
                      class="state yellow"
                      style="top: 18%; left: 18%; width: 8%; height: 6%"
                    >
                      NV
                    </div>
                    <div
                      class="state yellow"
                      style="top: 8%; left: 25%; width: 6%; height: 8%"
                    >
                      ND
                    </div>
                    <div
                      class="state yellow"
                      style="top: 10%; left: 32%; width: 6%; height: 8%"
                    >
                      SD
                    </div>
                    <div
                      class="state yellow"
                      style="top: 15%; left: 38%; width: 8%; height: 6%"
                    >
                      NE
                    </div>
                    <div
                      class="state yellow"
                      style="top: 20%; left: 45%; width: 6%; height: 8%"
                    >
                      KS
                    </div>
                    <div
                      class="state yellow"
                      style="top: 25%; left: 50%; width: 8%; height: 6%"
                    >
                      IL
                    </div>
                    <div
                      class="state yellow"
                      style="top: 15%; left: 60%; width: 6%; height: 8%"
                    >
                      NY
                    </div>
                    <div
                      class="state light-blue"
                      style="top: 25%; left: 15%; width: 10%; height: 8%"
                    >
                      AZ
                    </div>
                    <div
                      class="state light-blue"
                      style="top: 30%; left: 25%; width: 8%; height: 6%"
                    >
                      NM
                    </div>
                    <div
                      class="state light-blue"
                      style="top: 35%; left: 35%; width: 6%; height: 8%"
                    >
                      OK
                    </div>
                    <div
                      class="state light-blue"
                      style="top: 40%; left: 42%; width: 8%; height: 6%"
                    >
                      AR
                    </div>
                    <div
                      class="state light-blue"
                      style="top: 45%; left: 50%; width: 6%; height: 8%"
                    >
                      MS
                    </div>
                    <div
                      class="state light-blue"
                      style="top: 50%; left: 55%; width: 8%; height: 6%"
                    >
                      AL
                    </div>
                    <div
                      class="state light-blue"
                      style="top: 55%; left: 62%; width: 6%; height: 8%"
                    >
                      FL
                    </div>
                    <div
                      class="state light-blue"
                      style="top: 45%; left: 65%; width: 8%; height: 6%"
                    >
                      SC
                    </div>
                    <div
                      class="state light-blue"
                      style="top: 40%; left: 72%; width: 6%; height: 8%"
                    >
                      NC
                    </div>
                    <div
                      class="state light-blue"
                      style="top: 35%; left: 78%; width: 8%; height: 6%"
                    >
                      WV
                    </div>
                    <div
                      class="state light-blue"
                      style="top: 30%; left: 85%; width: 6%; height: 8%"
                    >
                      PA
                    </div>
                    <div
                      class="state light-blue"
                      style="top: 25%; left: 90%; width: 8%; height: 6%"
                    >
                      NJ
                    </div>
                    <div
                      class="state dark-blue"
                      style="top: 35%; left: 82%; width: 6%; height: 8%"
                    >
                      MD
                    </div>
                    <div
                      class="state dark-blue"
                      style="top: 30%; left: 88%; width: 8%; height: 6%"
                    >
                      DE
                    </div>
                    <div
                      class="state dark-blue"
                      style="top: 40%; left: 78%; width: 6%; height: 8%"
                    >
                      VA
                    </div>
                    <div
                      class="state dark-blue"
                      style="top: 45%; left: 72%; width: 8%; height: 6%"
                    >
                      GA
                    </div>

                    <!-- Map marker on Maryland -->
                    <div class="map-marker" style="top: 38%; left: 85%">
                      <i class="fas fa-map-marker-alt"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Slide 2: Virtual Moving Experience -->
          <div class="slide">
            <div class="slide-content">
              <div class="text-content">
                <h1 class="headline">
                  A Simple, Virtual
                  <span class="highlight">Moving Experience</span>
                </h1>

                <p class="study-description">
                  United Van Lines is pleased to offer our easy, fast and
                  convenient Virtual Survey. No need to answer the door to get a
                  quote – just use video chat on your mobile device.
                </p>

                <div class="cta-section">
                  <button class="cta-button">VIRTUAL MOVING ESTIMATE</button>
                </div>
              </div>

              <div class="image-content">
                <div class="virtual-experience-container">
                  <div class="phone-container">
                    <div class="smartphone">
                      <div class="phone-screen">
                        <!-- Video call interface -->
                        <div class="video-call-main">
                          <!-- Living room scene -->
                          <div class="living-room-scene">
                            <div class="sofa"></div>
                            <div class="coffee-table"></div>
                            <div class="lamp"></div>
                            <div class="window"></div>
                            <div class="plant"></div>
                          </div>
                        </div>

                        <!-- Picture-in-Picture view -->
                        <div class="pip-view">
                          <div class="agent-avatar">
                            <i class="fas fa-user"></i>
                          </div>
                          <div class="headset">
                            <i class="fas fa-headset"></i>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- Hands holding the phone -->
                    <div class="hands">
                      <div class="hand left-hand"></div>
                      <div class="hand right-hand"></div>
                      <div class="ring"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Slide 3: House Key Digital Moving Magazine -->
          <div class="slide">
            <div class="slide-content">
              <div class="text-content">
                <h1 class="headline">
                  House Key Digital
                  <span class="highlight">Moving Magazine</span>
                </h1>

                <p class="study-description">
                  Discover expert tips on packing, settling in and exploring
                  your new neighborhood in United Van Lines' digital magazine.
                </p>

                <div class="cta-section">
                  <button class="cta-button">VIEW THE MAGAZINE</button>
                </div>
              </div>

              <div class="image-content">
                <div class="magazine-container">
                  <!-- Background gradient -->
                  <div class="magazine-bg"></div>

                  <!-- Tablet Device -->
                  <div class="tablet-device">
                    <div class="tablet-screen">
                      <!-- Magazine Cover -->
                      <div class="magazine-cover">
                        <div class="cover-title">
                          <h2>House Key</h2>
                          <p>A digital magazine about people on the move</p>
                        </div>

                        <div class="cover-image">
                          <div class="cover-person">
                            <div class="person-hair"></div>
                            <div class="person-face"></div>
                            <div class="person-shirt"></div>
                            <div class="person-phone"></div>
                          </div>
                          <div class="cover-couch"></div>
                        </div>

                        <div class="cover-articles">
                          <div class="article-item">
                            Your Move, Your Adventure
                          </div>
                          <div class="article-item">A First for Everything</div>
                          <div class="article-item">Protect What Matters</div>
                          <div class="article-item">Surviving Summer Heat</div>
                          <div class="article-item">The Where and Why</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Smartphone Device -->
                  <div class="phone-device">
                    <div class="phone-screen">
                      <!-- Magazine Article Page -->
                      <div class="article-page">
                        <h3 class="article-title">Moving Toward Family</h3>
                        <p class="article-text">
                          Moving trends and statistics show that many people are
                          relocating closer to family, with job transfers and
                          lifestyle changes also playing significant roles in
                          relocation decisions.
                        </p>
                        <div class="statistic">
                          <div class="stat-number">66%</div>
                          <div class="stat-label">
                            PERCENT OF INBOUND MOVES WITHIN THE 2024 MOVERS
                            STUDY
                          </div>
                        </div>
                        <div class="thumbnail-gallery">
                          <div class="thumbnail"></div>
                          <div class="thumbnail"></div>
                          <div class="thumbnail"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Carousel Dots -->
      <div class="carousel-dots">
        <span
          v-for="(dot, index) in 3"
          :key="index"
          :class="['dot', { active: currentSlide === index }]"
          @click="goToSlide(index)"
        ></span>
      </div>
    </section>

    <!-- United Moving Companies Section -->
    <section class="united-section">
      <div class="united-container">
        <!-- Left Section - Image -->
        <div class="united-image">
          <div class="moving-scene">
            <!-- Main characters -->
            <div class="character woman">
              <div class="person-avatar woman-avatar">
                <i class="fas fa-user"></i>
              </div>
              <div class="tablet">
                <i class="fas fa-tablet-alt"></i>
              </div>
            </div>

            <div class="character man">
              <div class="person-avatar man-avatar">
                <i class="fas fa-user"></i>
              </div>
              <div class="united-uniform">
                <i class="fas fa-tshirt"></i>
              </div>
            </div>

            <!-- Moving boxes -->
            <div class="moving-boxes">
              <div class="box box-1">
                <div class="united-logo">United</div>
              </div>
              <div class="box box-2">
                <div class="united-logo">United</div>
              </div>
              <div class="box box-3">
                <div class="united-logo">United</div>
              </div>
            </div>

            <!-- Background elements -->
            <div class="staircase">
              <div class="stairs"></div>
              <div class="man-on-stairs">
                <div class="person-avatar stairs-avatar">
                  <i class="fas fa-user"></i>
                </div>
                <div class="box stairs-box">
                  <div class="united-logo">United</div>
                </div>
                <div class="moving-blanket"></div>
              </div>
            </div>

            <div class="carpet-runner"></div>
          </div>
        </div>

        <!-- Right Section - Content -->
        <div class="united-content">
          <h1 class="united-headline">Choose United Moving Companies</h1>

          <p class="united-description">
            Experience white-glove moving services that deliver a seamless and
            unforgettable moving experience. With over 1 million customers
            moved, exceptional ratings, and hundreds of locations, we are one of
            the
            <span class="highlight-text"
              >best moving companies in the country</span
            >, offering full-service moving solutions.
          </p>

          <div class="statistics-section">
            <div class="stat-item">
              <div class="stat-number">4.5/5</div>
              <div class="stat-label">STAR RATING</div>
              <div class="stat-description">
                See why United moving companies consistently receive high
                customer satisfaction ratings.
              </div>
            </div>

            <div class="stat-divider"></div>

            <div class="stat-item">
              <div class="stat-number">1M+</div>
              <div class="stat-label">CUSTOMERS MOVED</div>
              <div class="stat-description">
                We are humbled to be the moving company of choice for 1.2
                million customers in the past 10 years.
              </div>
            </div>

            <div class="stat-divider"></div>

            <div class="stat-item">
              <div class="stat-number">500+</div>
              <div class="stat-label">MOVING COMPANIES NATIONWIDE</div>
              <div class="stat-description">
                With services from movers at more than 500 locations, we can
                move you anywhere in the U.S.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="services-section">
      <div class="services-container">
        <!-- Header Section -->
        <div class="services-header">
          <h1 class="services-title">United Movers Will Take You Anywhere</h1>
          <p class="services-description">
            United offers comprehensive moving services tailored to your
            specific needs. Whether you're moving across town or across the
            globe, our experienced team provides professional care, customized
            solutions, and reliable service. From packing and loading to
            transportation and delivery, we handle every aspect of your move
            with precision and attention to detail.
          </p>
        </div>

        <!-- Four-Column Services Grid -->
        <div class="services-grid">
          <!-- Long Distance Moves -->
          <div class="service-card">
            <div class="service-icon">
              <i class="fas fa-route"></i>
            </div>
            <h3 class="service-title">Long Distance Moves</h3>
            <p class="service-description">
              Get a quote, pick your services and we'll take care of the rest.
              United is federally licensed to provide everything you need for
              the perfect long-distance, interstate move.
            </p>
            <a href="#" class="service-link">
              LONG DISTANCE MOVERS <i class="fas fa-arrow-right"></i>
            </a>
          </div>

          <!-- International Moves -->
          <div class="service-card">
            <div class="service-icon">
              <i class="fas fa-globe-americas"></i>
            </div>
            <h3 class="service-title">International Moves</h3>
            <p class="service-description">
              United International can manage your move to nearly anywhere in
              the world and guide you throughout the international move process.
              As the nation's leading moving company, United has the experience
              to make your international move seamless.
            </p>
            <a href="#" class="service-link">
              INTERNATIONAL MOVERS <i class="fas fa-arrow-right"></i>
            </a>
          </div>

          <!-- Corporate Moves -->
          <div class="service-card">
            <div class="service-icon">
              <i class="fas fa-building"></i>
            </div>
            <h3 class="service-title">Corporate Moves</h3>
            <p class="service-description">
              Let United create a seamless corporate move experience, whether
              you are being transferred or looking for corporate relocation
              services.
            </p>
            <a href="#" class="service-link">
              CORPORATE SERVICES <i class="fas fa-arrow-right"></i>
            </a>
          </div>

          <!-- Local Moves -->
          <div class="service-card">
            <div class="service-icon">
              <i class="fas fa-map-marker-alt"></i>
            </div>
            <h3 class="service-title">Local Moves</h3>
            <p class="service-description">
              Our nationwide network of interstate agents can also independently
              provide local moving services through their own businesses and
              brands in metro areas across the United States.
            </p>
            <a href="#" class="service-link">
              LOCAL <i class="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Call-to-Action Banner Section -->
    <section class="cta-banner-section" style="padding-bottom: 70px">
      <!-- Truck Image Overlay -->
      <div class="truck-overlay">
        <img
          src="../../assets/truck-on-black-background.png"
          alt="United Moving Truck"
          class="truck-image"
        />
      </div>

      <div class="cta-banner-container">
        <!-- Left Side - Text and CTA -->
        <div class="cta-content">
          <h2 class="cta-headline">Ready To Get Moving?</h2>
          <button class="cta-button">GET A QUOTE</button>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="services-section">
      <div class="services-container">
        <!-- Header Section -->
        <div class="services-header">
          <h1 class="services-title">
            Expert Advice From a National Moving Company
          </h1>
          <p class="services-description">
            As a leading national moving company, United knows a thing or two
            about helping people move. Having completed over 1.2 million moves
            worldwide in the past 10 years, United’s movers make sure that every
            phase of your move is as easy as possible. To help individuals plan
            their next move, we have compiled this collection of moving tips,
            including straightforward moving checklists, how-to articles and
            convenient videos. Use these helpful resources from a moving company
            you can trust to make sure your next move is smooth and stress-free.
          </p>
        </div>

        <!-- Four-Column Services Grid -->
        <div class="services-grid">
          <!-- Long Distance Moves -->
          <div class="service-card">
            <div class="service-icon">
              <i class="fas fa-route"></i>
            </div>
            <h3 class="service-title">Pre-Move Planning</h3>
            <p class="service-description">
              Get a quote, pick your services and we'll take care of the rest.
              United is federally licensed to provide everything you need for
              the perfect long-distance, interstate move.
            </p>
            <a href="#" class="service-link">
              LONG DISTANCE MOVERS <i class="fas fa-arrow-right"></i>
            </a>
          </div>

          <!-- International Moves -->
          <div class="service-card">
            <div class="service-icon">
              <i class="fas fa-globe-americas"></i>
            </div>
            <h3 class="service-title">City and State Guides</h3>
            <p class="service-description">
              United International can manage your move to nearly anywhere in
              the world and guide you throughout the international move process.
              As the nation's leading moving company, United has the experience
              to make your international move seamless.
            </p>
            <a href="#" class="service-link">
              INTERNATIONAL MOVERS <i class="fas fa-arrow-right"></i>
            </a>
          </div>

          <!-- Corporate Moves -->
          <div class="service-card">
            <div class="service-icon">
              <i class="fas fa-building"></i>
            </div>
            <h3 class="service-title">Packing and Preparing</h3>
            <p class="service-description">
              Let United create a seamless corporate move experience, whether
              you are being transferred or looking for corporate relocation
              services.
            </p>
            <a href="#" class="service-link">
              CORPORATE SERVICES <i class="fas fa-arrow-right"></i>
            </a>
          </div>

          <!-- Local Moves -->
          <div class="service-card">
            <div class="service-icon">
              <i class="fas fa-map-marker-alt"></i>
            </div>
            <h3 class="service-title">Post-Move</h3>
            <p class="service-description">
              Our nationwide network of interstate agents can also independently
              provide local moving services through their own businesses and
              brands in metro areas across the United States.
            </p>
            <a href="#" class="service-link">
              LOCAL <i class="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="testimonials-section">
      <div class="testimonials-container">
        <!-- Header Section -->
        <div class="testimonials-header">
          <h2 class="testimonials-title">What Our Customers Say</h2>
          <p class="testimonials-description">
            United movers have been helping customers for more than 90 years. We
            strive to honor a tradition of excellence, so that customers, like
            you, can move and settle into their new home with ease. See what
            some of our customers have to say about our movers below.
          </p>
        </div>

        <!-- Three-Column Testimonials Grid -->
        <div class="testimonials-grid">
          <!-- Testimonial 1 -->
          <div class="testimonial-card">
            <div class="testimonial-quote">
              "Highly impressed with the follow up, quality of communication and
              each individual that I worked with. They did a great job from
              packing to moving the items from CA - TX."
            </div>
            <div class="testimonial-author">Page B.</div>
            <div class="testimonial-move">
              Moved from Napa, CA to Pilot Point, TX
            </div>
            <div class="testimonial-rating">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
          </div>

          <!-- Divider -->
          <div class="testimonial-divider"></div>

          <!-- Testimonial 2 -->
          <div class="testimonial-card">
            <div class="testimonial-quote">
              "From the estimate, to pre-move coordination, loading, driver
              communication, and unloading, every aspect of the move was
              excellent in every way possible. I had a great team from the start
              to the finish."
            </div>
            <div class="testimonial-author">Jeff L.</div>
            <div class="testimonial-move">
              Moved from Indianapolis, IN to Vero Beach, FL
            </div>
            <div class="testimonial-rating">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
          </div>

          <!-- Divider -->
          <div class="testimonial-divider"></div>

          <!-- Testimonial 3 -->
          <div class="testimonial-card">
            <div class="testimonial-quote">
              "The process and communication was complete and professional from
              the bid through the move. The portal was easy to use and the
              response back on messages was timely. The mover showed up as
              promised and the loading/unloading process was efficient and
              professional."
            </div>
            <div class="testimonial-author">Mike B.</div>
            <div class="testimonial-move">
              Moved from Chewelah, WA to Evergreen, MT
            </div>
            <div class="testimonial-rating">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Moving Resources Section -->
    <section class="resources-section">
      <div class="resources-container">
        <!-- Header Section -->
        <div class="resources-header">
          <h2 class="resources-title">Moving Resources</h2>
          <p class="resources-description">
            Your upcoming move shouldn't be overwhelming. With help from a
            trusted moving company with over 90 years of experience, you'll
            stress less about your move, and be able to focus your attention on
            more important things; like what paint color you should use in your
            new living room. Our movers can help you manage the details with
            helpful moving tips, tools and videos. Find out how our team of
            movers can help!
          </p>
        </div>

        <!-- Three-Column Resources Grid -->
        <div class="resources-grid">
          <!-- Card 1: Home Maintenance -->
          <div class="resource-card">
            <div class="resource-image">
              <img
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Man hanging art on wall"
                class="card-image"
              />
            </div>
            <div class="resource-content">
              <div class="resource-tags">
                <span class="tag">HOME MAINTENANCE</span>
                <span class="tag">SETTLING IN</span>
              </div>
              <h3 class="resource-title">
                Your Walls Are a Blank Slate — Now What?
              </h3>
              <div class="resource-separator"></div>
              <p class="resource-excerpt">
                Blank walls can be intimidating, but they also offer an
                opportunity for creativity. Learn how to transform your new
                space and make it feel like home with these helpful tips and
                ideas.
              </p>
              <a href="#" class="resource-link">
                Continue Reading <i class="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>

          <!-- Card 2: Washington Guide -->
          <div class="resource-card">
            <div class="resource-image">
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Aerial view of Washington city"
                class="card-image"
              />
            </div>
            <div class="resource-content">
              <div class="resource-tags">
                <span class="tag">CITY AND STATE GUIDES</span>
                <span class="tag">STATE GUIDES</span>
              </div>
              <h3 class="resource-title">
                Your Ultimate Guide to Moving to Washington
              </h3>
              <div class="resource-separator"></div>
              <p class="resource-excerpt">
                Is Washington for you? Whether it's job opportunities or family
                drawing you to the Pacific Northwest, this guide provides all
                the insights you need before moving to the "Evergreen State."
              </p>
              <a href="#" class="resource-link">
                Continue Reading <i class="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>

          <!-- Card 3: Montana Guide -->
          <div class="resource-card">
            <div class="resource-image">
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Aerial view of Montana valley"
                class="card-image"
              />
            </div>
            <div class="resource-content">
              <div class="resource-tags">
                <span class="tag">CITY AND STATE GUIDES</span>
                <span class="tag">STATE GUIDES</span>
              </div>
              <h3 class="resource-title">
                Your Ultimate Guide to Moving to Montana
              </h3>
              <div class="resource-separator"></div>
              <p class="resource-excerpt">
                Where the Great Plains meet the jagged Rockies, Montana is
                filled with iconic national parks like Yellowstone and Glacier.
                Discover what makes this state a perfect place to call home.
              </p>
              <a href="#" class="resource-link">
                Continue Reading <i class="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Corporate Relocation Banner Section -->
    <section class="corporate-banner-section">
      <div class="corporate-banner-container">
        <!-- Left Side - Question -->
        <div class="corporate-question">
          <h2 class="corporate-headline">
            Are You a Corporate Relocation Manager?
          </h2>
        </div>

        <!-- Right Side - CTA Button -->
        <div class="corporate-button-container">
          <button class="corporate-button">REQUEST A QUOTE</button>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <AppFooter />
  </q-page>
</template>

<script>
import AppFooter from "../../components/Footer.vue";

export default {
  name: "HomePage",
  components: {
    AppFooter,
  },
  data() {
    return {
      currentSlide: 0,
    };
  },
  methods: {
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % 3;
    },
    previousSlide() {
      this.currentSlide = this.currentSlide === 0 ? 2 : this.currentSlide - 1;
    },
    goToSlide(index) {
      this.currentSlide = index;
    },
  },
};
</script>

<style scoped>
.hero-section {
  position: relative;
  min-height: 100vh;
  background: #ffffff;
  overflow: hidden;
}

/* Slider Container */
.slider-container {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.slide-wrapper {
  display: flex;
  width: 300vw;
  height: 100vh;
  transition: transform 0.5s ease-in-out;
  position: relative;
}

.slide {
  position: relative;
  width: 100vw;
  height: 100vh;
  background: #ffffff;
  flex-shrink: 0;
  min-width: 100vw;
}

/* Slide Content */
.slide-content {
  position: relative;
  z-index: 2;
  display: flex;
  width: 100%;
  height: 100vh;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  align-items: center;
  justify-content: center;
}

/* Left Section - Text Content */
.text-content {
  flex: 0 0 50%;
  padding-right: 3rem;
  color: #000000;
}

.headline {
  font-size: 3.5rem;
  font-weight: bold;
  color: #1e3a8a;
  line-height: 1.1;
  margin-bottom: 2rem;
}

.highlight {
  color: #1e3a8a;
  margin-left: 2rem;
}

.study-description {
  font-size: 1.2rem;
  color: #666666;
  line-height: 1.6;
  margin-bottom: 2.5rem;
  max-width: 500px;
}

.features-list {
  margin-bottom: 2rem;
}

.feature-item {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 1.1rem;
  color: #333333;
}

.feature-item i.fa-check {
  color: #32cd32;
  margin-right: 12px;
  font-size: 1rem;
}

.info-icon {
  color: #666666;
  margin-left: 8px;
  font-size: 0.9rem;
}

.service-offering {
  font-size: 1.2rem;
  font-weight: bold;
  color: #333333;
  margin-bottom: 2rem;
}

.cta-section {
  display: flex;
  align-items: center;
  gap: 20px;
}

.cta-button {
  background: transparent;
  border: 2px solid #60a5fa;
  color: #60a5fa;
  padding: 15px 30px;
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 8px;
}

.cta-button:hover {
  background: #60a5fa;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(96, 165, 250, 0.3);
}

.countdown-timer {
  background: #e6e6fa;
  padding: 12px 20px;
  border-radius: 8px;
  font-weight: bold;
  color: #333333;
  display: flex;
  gap: 4px;
}

.time-unit {
  background: #ffffff;
  padding: 4px 8px;
  border-radius: 4px;
  min-width: 30px;
  text-align: center;
}

/* Right Section - US Map */
.image-content {
  flex: 0 0 50%;
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.us-map-container {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.us-map {
  position: relative;
  width: 80%;
  height: 80%;
  background: #f8f9fa;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.state {
  position: absolute;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  font-weight: bold;
  color: white;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.state.light-blue {
  background: #60a5fa;
}

.state.yellow {
  background: #fbbf24;
}

.state.dark-blue {
  background: #1e3a8a;
}

.state.gray {
  background: #9ca3af;
}

.state.dark-gray {
  background: #6b7280;
}

.map-marker {
  position: absolute;
  color: #1e3a8a;
  font-size: 1.5rem;
  z-index: 10;
  filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.3));
}

.map-marker i {
  background: white;
  border-radius: 50%;
  padding: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

/* Virtual Moving Experience Styles */
.virtual-experience-container {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.phone-container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.smartphone {
  width: 280px;
  height: 560px;
  background: #ffffff;
  border-radius: 30px;
  border: 8px solid #333333;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
}

.phone-screen {
  width: 100%;
  height: 100%;
  background: #000000;
  position: relative;
  overflow: hidden;
}

.video-call-main {
  width: 100%;
  height: 100%;
  position: relative;
  background: #f8f9fa;
}

.living-room-scene {
  width: 100%;
  height: 100%;
  position: relative;
  background: linear-gradient(135deg, #e9ecef 0%, #f8f9fa 100%);
}

.sofa {
  position: absolute;
  bottom: 20%;
  left: 10%;
  width: 60%;
  height: 15%;
  background: #6c757d;
  border-radius: 8px 8px 0 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.coffee-table {
  position: absolute;
  bottom: 35%;
  left: 25%;
  width: 30%;
  height: 8%;
  background: #495057;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.lamp {
  position: absolute;
  top: 15%;
  right: 15%;
  width: 8%;
  height: 20%;
  background: #dee2e6;
  border-radius: 50% 50% 0 0;
}

.lamp::after {
  content: "";
  position: absolute;
  top: -10%;
  left: 50%;
  transform: translateX(-50%);
  width: 120%;
  height: 15%;
  background: #ffffff;
  border-radius: 50%;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.8);
}

.window {
  position: absolute;
  top: 10%;
  left: 10%;
  width: 25%;
  height: 30%;
  background: #87ceeb;
  border: 2px solid #ffffff;
  border-radius: 4px;
}

.window::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 15px,
    #ffffff 15px,
    #ffffff 17px
  );
}

.plant {
  position: absolute;
  bottom: 15%;
  right: 10%;
  width: 12%;
  height: 25%;
  background: #28a745;
  border-radius: 50% 50% 0 0;
}

.plant::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60%;
  height: 20%;
  background: #8b4513;
  border-radius: 4px;
}

.pip-view {
  position: absolute;
  bottom: 10%;
  left: 10%;
  width: 25%;
  height: 20%;
  background: #ffffff;
  border-radius: 8px;
  border: 2px solid #60a5fa;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.agent-avatar {
  width: 60%;
  height: 60%;
  background: #60a5fa;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  position: relative;
}

.headset {
  position: absolute;
  top: -5px;
  right: -5px;
  color: #333333;
  font-size: 0.8rem;
}

.hands {
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.hand {
  position: absolute;
  background: #f4a460;
  border-radius: 50%;
}

.left-hand {
  width: 80px;
  height: 120px;
  bottom: -20px;
  left: -30px;
  transform: rotate(-15deg);
}

.right-hand {
  width: 70px;
  height: 110px;
  bottom: -15px;
  right: -25px;
  transform: rotate(15deg);
}

.ring {
  position: absolute;
  width: 12px;
  height: 12px;
  background: #ffd700;
  border-radius: 50%;
  bottom: 20px;
  left: -15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

/* House Key Magazine Styles */
.magazine-container {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.magazine-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #e0f2fe 0%, #dcfce7 100%);
  border-radius: 12px;
}

.tablet-device {
  position: absolute;
  left: 20%;
  top: 50%;
  transform: translateY(-50%) rotate(-5deg);
  width: 300px;
  height: 400px;
  background: #d1d5db;
  border-radius: 20px;
  border: 8px solid #9ca3af;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  z-index: 3;
}

.tablet-screen {
  width: 100%;
  height: 100%;
  background: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
}

.magazine-cover {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
}

.cover-title h2 {
  font-size: 2.5rem;
  font-weight: bold;
  margin: 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.cover-title p {
  font-size: 0.9rem;
  margin: 5px 0 0 0;
  opacity: 0.9;
}

.cover-image {
  position: relative;
  height: 40%;
  margin: 20px 0;
}

.cover-person {
  position: absolute;
  top: 20%;
  left: 20%;
  width: 60%;
  height: 60%;
}

.person-hair {
  position: absolute;
  top: 0;
  left: 20%;
  width: 60%;
  height: 30%;
  background: #a0522d;
  border-radius: 50% 50% 0 0;
}

.person-face {
  position: absolute;
  top: 25%;
  left: 25%;
  width: 50%;
  height: 40%;
  background: #f4a460;
  border-radius: 50%;
}

.person-shirt {
  position: absolute;
  top: 60%;
  left: 15%;
  width: 70%;
  height: 40%;
  background: #fbbf24;
  border-radius: 20px 20px 0 0;
}

.person-phone {
  position: absolute;
  top: 70%;
  left: 60%;
  width: 15%;
  height: 25%;
  background: #28a745;
  border-radius: 4px;
}

.cover-couch {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 30%;
  background: #0ea5e9;
  border-radius: 20px 20px 0 0;
}

.cover-articles {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.article-item {
  font-size: 0.8rem;
  font-weight: bold;
  padding: 4px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.phone-device {
  position: absolute;
  right: 15%;
  top: 50%;
  transform: translateY(-50%) rotate(10deg);
  width: 180px;
  height: 320px;
  background: #d1d5db;
  border-radius: 15px;
  border: 6px solid #9ca3af;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  z-index: 2;
}

.phone-screen {
  width: 100%;
  height: 100%;
  background: #ffffff;
  border-radius: 9px;
  overflow: hidden;
  padding: 15px;
}

.article-page {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.article-title {
  font-size: 1.2rem;
  font-weight: bold;
  color: #1e3a8a;
  margin: 0 0 10px 0;
  line-height: 1.3;
}

.article-text {
  font-size: 0.8rem;
  color: #666666;
  line-height: 1.4;
  margin: 0 0 20px 0;
}

.statistic {
  text-align: center;
  margin: 20px 0;
}

.stat-number {
  font-size: 2rem;
  font-weight: bold;
  color: #1e3a8a;
  margin-bottom: 5px;
}

.stat-label {
  font-size: 0.7rem;
  color: #666666;
  font-weight: bold;
  line-height: 1.2;
}

.thumbnail-gallery {
  display: flex;
  gap: 8px;
  justify-content: center;
  margin-top: auto;
}

.thumbnail {
  width: 40px;
  height: 30px;
  background: linear-gradient(135deg, #60a5fa, #3b82f6);
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Navigation Arrows */
.nav-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.1);
  border: none;
  color: #333333;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;
}

.nav-arrow:hover {
  background: rgba(0, 0, 0, 0.2);
  transform: translateY(-50%) scale(1.1);
}

.nav-arrow-left {
  left: 20px;
}

.nav-arrow-right {
  right: 20px;
}

/* Carousel Dots */
.carousel-dots {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 10;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: all 0.3s ease;
}

.dot.active {
  background: #8a2be2;
  transform: scale(1.2);
}

.dot:hover {
  background: rgba(138, 43, 226, 0.6);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .slide-content {
    flex-direction: column;
    padding: 2rem 1rem;
    text-align: center;
  }

  .text-content {
    flex: none;
    width: 100%;
    padding-right: 0;
    margin-bottom: 2rem;
  }

  .image-content {
    flex: none;
    width: 100%;
    height: 50%;
  }

  .headline {
    font-size: 2.5rem;
  }

  .highlight {
    margin-left: 0;
  }

  .study-description {
    max-width: 100%;
  }

  .nav-arrow {
    display: none;
  }

  .cta-section {
    flex-direction: column;
    gap: 15px;
  }

  .us-map {
    width: 90%;
    height: 90%;
  }

  .smartphone {
    width: 240px;
    height: 480px;
  }

  .tablet-device {
    width: 250px;
    height: 330px;
    left: 15%;
  }

  .phone-device {
    width: 150px;
    height: 270px;
    right: 10%;
  }
}

@media (max-width: 768px) {
  .headline {
    font-size: 2rem;
  }

  .study-description {
    font-size: 1.1rem;
  }

  .us-map {
    width: 95%;
    height: 95%;
  }

  .state {
    font-size: 0.6rem;
  }

  .map-marker {
    font-size: 1.2rem;
  }

  .carousel-dots {
    bottom: 20px;
  }

  .tablet-device {
    width: 200px;
    height: 270px;
    left: 10%;
  }

  .phone-device {
    width: 120px;
    height: 220px;
    right: 5%;
  }

  .cover-title h2 {
    font-size: 1.8rem;
  }

  .article-title {
    font-size: 1rem;
  }

  .stat-number {
    font-size: 1.5rem;
  }
}

/* United Moving Companies Section */
.united-section {
  padding: 80px 0;
  background: #ffffff;
}

.united-container {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 60px;
  padding: 0 2rem;
}

/* Left Section - Image */
.united-image {
  flex: 0 0 50%;
  position: relative;
  height: 500px;
}

.moving-scene {
  position: relative;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 12px;
  overflow: hidden;
}

/* Characters */
.character {
  position: absolute;
  z-index: 3;
}

.character.woman {
  top: 30%;
  right: 20%;
}

.character.man {
  top: 40%;
  right: 35%;
}

.person-avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.woman-avatar {
  background: linear-gradient(135deg, #ff6b6b, #ee5a24);
}

.man-avatar {
  background: linear-gradient(135deg, #0066cc, #0052a3);
}

.stairs-avatar {
  background: linear-gradient(135deg, #0066cc, #0052a3);
  width: 40px;
  height: 40px;
  font-size: 1rem;
}

.tablet {
  position: absolute;
  top: -10px;
  right: -15px;
  width: 30px;
  height: 40px;
  background: #333333;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 0.8rem;
}

.united-uniform {
  position: absolute;
  top: -5px;
  right: -10px;
  width: 25px;
  height: 30px;
  background: #0066cc;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 0.7rem;
}

/* Moving Boxes */
.moving-boxes {
  position: absolute;
  bottom: 25%;
  right: 15%;
  z-index: 2;
}

.box {
  background: #8b4513;
  border: 2px solid #654321;
  padding: 8px 12px;
  margin-bottom: 8px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transform: rotate(-2deg);
}

.box-1 {
  transform: rotate(-3deg);
}

.box-2 {
  transform: rotate(1deg);
}

.box-3 {
  transform: rotate(-1deg);
}

.united-logo {
  font-size: 0.7rem;
  font-weight: bold;
  color: #ffffff;
  text-align: center;
}

/* Staircase */
.staircase {
  position: absolute;
  left: 10%;
  bottom: 20%;
  z-index: 1;
}

.stairs {
  width: 80px;
  height: 60px;
  background: linear-gradient(45deg, #8b4513, #a0522d);
  clip-path: polygon(0 100%, 100% 100%, 80% 0, 0 0);
}

.man-on-stairs {
  position: absolute;
  top: -30px;
  left: 10px;
}

.stairs-box {
  position: absolute;
  top: -15px;
  left: 25px;
  width: 20px;
  height: 15px;
  background: #8b4513;
  border: 1px solid #654321;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.stairs-box .united-logo {
  font-size: 0.5rem;
}

.moving-blanket {
  position: absolute;
  top: -5px;
  left: 20px;
  width: 25px;
  height: 8px;
  background: #0066cc;
  border-radius: 2px;
}

/* Carpet Runner */
.carpet-runner {
  position: absolute;
  bottom: 15%;
  left: 5%;
  width: 70%;
  height: 8px;
  background: linear-gradient(90deg, #dc3545, #c82333);
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Right Section - Content */
.united-content {
  flex: 0 0 50%;
  padding-left: 2rem;
}

.united-headline {
  font-size: 2.5rem;
  font-weight: bold;
  color: #0066cc;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.united-description {
  font-size: 1.1rem;
  color: #333333;
  line-height: 1.6;
  margin-bottom: 2.5rem;
}

.highlight-text {
  color: #0066cc;
  font-weight: bold;
}

/* Statistics Section */
.statistics-section {
  display: flex;
  align-items: stretch;
  gap: 0;
}

.stat-item {
  flex: 1;
  text-align: center;
  padding: 0 1rem;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: bold;
  color: #0066cc;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 0.9rem;
  font-weight: bold;
  color: #0066cc;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 1rem;
}

.stat-description {
  font-size: 0.9rem;
  color: #666666;
  line-height: 1.4;
}

.stat-divider {
  width: 1px;
  background: #e0e0e0;
  margin: 0 1rem;
}

/* Responsive Design for United Section */
@media (max-width: 1024px) {
  .united-container {
    flex-direction: column;
    gap: 40px;
  }

  .united-image {
    flex: none;
    width: 100%;
    height: 400px;
  }

  .united-content {
    flex: none;
    width: 100%;
    padding-left: 0;
    text-align: center;
  }

  .united-headline {
    font-size: 2rem;
  }

  .statistics-section {
    flex-direction: column;
    gap: 2rem;
  }

  .stat-divider {
    width: 100%;
    height: 1px;
    margin: 1rem 0;
  }
}

@media (max-width: 768px) {
  .united-section {
    padding: 60px 0;
  }

  .united-container {
    padding: 0 1rem;
  }

  .united-headline {
    font-size: 1.8rem;
  }

  .united-description {
    font-size: 1rem;
  }

  .stat-number {
    font-size: 2rem;
  }
}

/* Services Section */
.services-section {
  padding: 80px 0;
  background: #ffffff;
  position: relative;
}

.services-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Header Section */
.services-header {
  text-align: center;
  margin-bottom: 60px;
}

.services-title {
  font-size: 2.8rem;
  font-weight: bold;
  color: #0066cc;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.services-description {
  font-size: 1.1rem;
  color: #333333;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
}

/* Services Grid */
.services-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  margin-top: 40px;
}

/* Service Cards */
.service-card {
  background: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  padding: 30px 25px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.service-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  border-color: #0066cc;
}

.service-icon {
  width: 80px;
  height: 80px;
  background: #f8f9fa;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  transition: all 0.3s ease;
}

.service-card:hover .service-icon {
  background: #0066cc;
  color: white;
}

.service-icon i {
  font-size: 2rem;
  color: #0066cc;
  transition: all 0.3s ease;
}

.service-card:hover .service-icon i {
  color: white;
}

.service-title {
  font-size: 1.3rem;
  font-weight: bold;
  color: #333333;
  margin-bottom: 15px;
  line-height: 1.3;
}

.service-description {
  font-size: 0.95rem;
  color: #666666;
  line-height: 1.5;
  margin-bottom: 25px;
  flex-grow: 1;
}

.service-link {
  color: #0066cc;
  text-decoration: none;
  font-weight: bold;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
  margin-top: auto;
}

.service-link:hover {
  color: #0052a3;
  transform: translateX(4px);
}

.service-link i {
  font-size: 0.8rem;
  transition: transform 0.3s ease;
}

.service-link:hover i {
  transform: translateX(4px);
}

/* Chat Icon */
.chat-icon {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 60px;
  height: 60px;
  background: #0066cc;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 102, 204, 0.3);
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 1000;
}

.chat-icon:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 16px rgba(0, 102, 204, 0.4);
}

/* Responsive Design for Services Section */
@media (max-width: 1200px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
  }
}

@media (max-width: 768px) {
  .services-section {
    padding: 60px 0;
  }

  .services-container {
    padding: 0 1rem;
  }

  .services-title {
    font-size: 2.2rem;
  }

  .services-description {
    font-size: 1rem;
  }

  .services-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .service-card {
    padding: 25px 20px;
  }
}

/* Call-to-Action Banner Section */
.cta-banner-section {
  background: #1e3a8a;
  padding: 80px 0 1px 0;
  position: relative;
  overflow: visible;
  width: 100%;
}

/* Truck Image Overlay */
.truck-overlay {
  position: absolute;
  left: 200px;
  bottom: -60px;
  z-index: 2;
  width: 600px;
  height: 400px;
}

.truck-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: left center;
  filter: brightness(1.05) contrast(1.05);
}

.cta-banner-container {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  padding: 0 2rem;
  z-index: 3;
}

/* Right Side - Text and CTA */
.cta-content {
  text-align: left;
  max-width: 100%;
  display: flex;
  align-items: center;
  gap: 40px;
}

.cta-headline {
  font-size: 2rem;
  font-weight: bold;
  color: #ffffff;
  margin: 0;
  line-height: 1.1;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  flex: 1;
}

.cta-button {
  background: #60a5fa;
  border: none;
  color: #ffffff;
  padding: 18px 40px;
  font-size: 1.1rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 6px 16px rgba(96, 165, 250, 0.4);
}

.cta-button:hover {
  background: #3b82f6;
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(96, 165, 250, 0.5);
}

.cta-button:active {
  transform: translateY(-1px);
}

/* Responsive Design for CTA Banner */
@media (max-width: 1024px) {
  .cta-banner-section {
    padding: 60px 0 100px 0;
  }

  .truck-overlay {
    width: 450px;
    height: 300px;
    bottom: -40px;
  }

  .cta-content {
    text-align: center;
    max-width: 100%;
    flex-direction: column;
    gap: 20px;
  }

  .cta-headline {
    font-size: 2.5rem;
  }
}

@media (max-width: 768px) {
  .cta-banner-section {
    padding: 50px 0 80px 0;
  }

  .truck-overlay {
    width: 350px;
    height: 250px;
    bottom: -30px;
  }

  .cta-banner-container {
    padding: 0 1.5rem;
  }

  .cta-content {
    flex-direction: column;
    gap: 15px;
    padding-bottom: 20px;
  }

  .cta-headline {
    font-size: 2.2rem;
  }

  .cta-button {
    padding: 16px 35px;
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .cta-banner-section {
    padding: 40px 0 60px 0;
  }

  .truck-overlay {
    width: 280px;
    height: 200px;
    bottom: -20px;
  }

  .cta-banner-container {
    padding: 0 1rem;
  }

  .cta-content {
    flex-direction: column;
    gap: 12px;
  }

  .cta-headline {
    font-size: 1.8rem;
  }

  .cta-button {
    padding: 14px 30px;
    font-size: 0.9rem;
  }
}

/* Testimonials Section */
.testimonials-section {
  background: #1e3a8a;
  padding: 80px 0;
  color: #ffffff;
}

.testimonials-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Header Section */
.testimonials-header {
  text-align: center;
  margin-bottom: 60px;
}

.testimonials-title {
  font-size: 2.8rem;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.testimonials-description {
  font-size: 1.1rem;
  color: #ffffff;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
  opacity: 0.9;
}

/* Testimonials Grid */
.testimonials-grid {
  display: flex;
  align-items: stretch;
  gap: 0;
}

/* Testimonial Cards */
.testimonial-card {
  flex: 1;
  padding: 0 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.testimonial-quote {
  font-size: 1rem;
  line-height: 1.6;
  color: #ffffff;
  margin-bottom: 1.5rem;
  font-style: italic;
  position: relative;
}

.testimonial-quote::before {
  content: '"';
  font-size: 3rem;
  color: #60a5fa;
  position: absolute;
  top: -20px;
  left: -10px;
  font-family: serif;
}

.testimonial-author {
  font-size: 1.1rem;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 0.5rem;
}

.testimonial-move {
  font-size: 0.9rem;
  color: #ffffff;
  opacity: 0.8;
  margin-bottom: 1rem;
}

.testimonial-rating {
  display: flex;
  justify-content: center;
  gap: 4px;
  margin-top: auto;
}

.testimonial-rating i {
  color: #ffd700;
  font-size: 1.2rem;
}

/* Divider */
.testimonial-divider {
  width: 1px;
  background: rgba(255, 255, 255, 0.2);
  margin: 0 1rem;
}

/* Responsive Design for Testimonials */
@media (max-width: 1024px) {
  .testimonials-grid {
    flex-direction: column;
    gap: 40px;
  }

  .testimonial-divider {
    width: 100%;
    height: 1px;
    margin: 0;
  }

  .testimonial-card {
    padding: 0 1rem;
  }

  .testimonials-title {
    font-size: 2.4rem;
  }
}

@media (max-width: 768px) {
  .testimonials-section {
    padding: 60px 0;
  }

  .testimonials-container {
    padding: 0 1rem;
  }

  .testimonials-title {
    font-size: 2rem;
  }

  .testimonials-description {
    font-size: 1rem;
  }

  .testimonial-quote {
    font-size: 0.95rem;
  }
}

@media (max-width: 480px) {
  .testimonials-section {
    padding: 40px 0;
  }

  .testimonials-header {
    margin-bottom: 40px;
  }

  .testimonials-title {
    font-size: 1.8rem;
  }

  .testimonials-description {
    font-size: 0.95rem;
  }

  .testimonial-card {
    padding: 0;
  }
}

/* Moving Resources Section */
.resources-section {
  padding: 80px 0;
  background: #ffffff;
}

.resources-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Header Section */
.resources-header {
  text-align: center;
  margin-bottom: 60px;
}

.resources-title {
  font-size: 2.8rem;
  font-weight: bold;
  color: #0066cc;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.resources-description {
  font-size: 1.1rem;
  color: #333333;
  line-height: 1.6;
  max-width: 900px;
  margin: 0 auto;
}

/* Resources Grid */
.resources-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

/* Resource Cards */
.resource-card {
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.resource-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

/* Resource Image */
.resource-image {
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.resource-card:hover .card-image {
  transform: scale(1.05);
}

/* Resource Content */
.resource-content {
  padding: 25px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

/* Resource Tags */
.resource-tags {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 15px;
}

.tag {
  font-size: 0.75rem;
  font-weight: bold;
  color: #0066cc;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Resource Title */
.resource-title {
  font-size: 1.3rem;
  font-weight: bold;
  color: #333333;
  margin-bottom: 15px;
  line-height: 1.3;
}

/* Resource Separator */
.resource-separator {
  width: 40px;
  height: 2px;
  background: #0066cc;
  margin-bottom: 15px;
}

/* Resource Excerpt */
.resource-excerpt {
  font-size: 0.95rem;
  color: #666666;
  line-height: 1.5;
  margin-bottom: 20px;
  flex: 1;
}

/* Resource Link */
.resource-link {
  color: #0066cc;
  text-decoration: none;
  font-weight: bold;
  font-size: 0.9rem;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
  margin-top: auto;
}

.resource-link:hover {
  color: #0052a3;
  transform: translateX(4px);
}

.resource-link i {
  font-size: 0.8rem;
  transition: transform 0.3s ease;
}

.resource-link:hover i {
  transform: translateX(4px);
}

/* Responsive Design for Resources */
@media (max-width: 1024px) {
  .resources-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
  }

  .resources-title {
    font-size: 2.4rem;
  }
}

@media (max-width: 768px) {
  .resources-section {
    padding: 60px 0;
  }

  .resources-container {
    padding: 0 1rem;
  }

  .resources-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .resources-title {
    font-size: 2rem;
  }

  .resources-description {
    font-size: 1rem;
  }

  .resource-content {
    padding: 20px;
  }

  .resource-title {
    font-size: 1.2rem;
  }
}

@media (max-width: 480px) {
  .resources-section {
    padding: 40px 0;
  }

  .resources-header {
    margin-bottom: 40px;
  }

  .resources-title {
    font-size: 1.8rem;
  }

  .resources-description {
    font-size: 0.95rem;
  }

  .resource-content {
    padding: 15px;
  }
}

/* Corporate Relocation Banner Section */
.corporate-banner-section {
  background: #1e3a8a;
  padding: 60px 0;
  position: relative;
  overflow: hidden;
  width: 100%;
}

.corporate-banner-container {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding: 0 2rem;
}

/* Left Side - Question */
.corporate-question {
  flex: 1;
  text-align: center;
}

.corporate-headline {
  font-size: 2.4rem;
  font-weight: bold;
  color: #ffffff;
  margin: 0;
  line-height: 1.2;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
}

/* Right Side - CTA Button */
.corporate-button-container {
  flex-shrink: 0;
  text-align: center;
}

.corporate-button {
  background: transparent;
  border: 2px solid #ffffff;
  color: #ffffff;
  padding: 16px 32px;
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.corporate-button:hover {
  background: #ffffff;
  color: #1e3a8a;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(255, 255, 255, 0.2);
}

.corporate-button:active {
  transform: translateY(0);
}

/* Responsive Design for Corporate Banner */
@media (max-width: 1024px) {
  .corporate-banner-container {
    flex-direction: column;
    gap: 30px;
    text-align: center;
  }

  .corporate-question {
    flex: none;
  }

  .corporate-button-container {
    flex: none;
  }

  .corporate-headline {
    font-size: 2.2rem;
  }
}

@media (max-width: 768px) {
  .corporate-banner-section {
    padding: 50px 0;
  }

  .corporate-banner-container {
    padding: 0 1.5rem;
  }

  .corporate-headline {
    font-size: 2rem;
  }

  .corporate-button {
    padding: 14px 28px;
    font-size: 0.95rem;
  }
}

@media (max-width: 480px) {
  .corporate-banner-section {
    padding: 40px 0;
  }

  .corporate-banner-container {
    padding: 0 1rem;
    gap: 25px;
  }

  .corporate-headline {
    font-size: 1.6rem;
  }

  .corporate-button {
    padding: 12px 24px;
    font-size: 0.9rem;
  }
}
</style>
