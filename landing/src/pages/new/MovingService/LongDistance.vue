<template>
  <q-page>
    <!-- Hero Banner Section -->
    <section class="hero-banner">
      <div class="banner-background">
        <!-- Cityscape Illustration -->
        <div class="cityscape-illustration">
          <svg viewBox="0 0 1200 400" class="cityscape-svg">
            <!-- Suburban houses on the left -->
            <g class="suburban-houses">
              <!-- House 1 -->
              <rect
                x="50"
                y="250"
                width="60"
                height="40"
                fill="none"
                stroke="#87CEEB"
                stroke-width="2"
              />
              <polygon
                points="50,250 80,220 110,250"
                fill="none"
                stroke="#87CEEB"
                stroke-width="2"
              />
              <rect
                x="60"
                y="270"
                width="10"
                height="20"
                fill="none"
                stroke="#87CEEB"
                stroke-width="2"
              />
              <rect
                x="80"
                y="270"
                width="10"
                height="20"
                fill="none"
                stroke="#87CEEB"
                stroke-width="2"
              />

              <!-- House 2 -->
              <rect
                x="120"
                y="240"
                width="50"
                height="50"
                fill="none"
                stroke="#87CEEB"
                stroke-width="2"
              />
              <polygon
                points="120,240 145,210 170,240"
                fill="none"
                stroke="#87CEEB"
                stroke-width="2"
              />
              <rect
                x="130"
                y="260"
                width="8"
                height="30"
                fill="none"
                stroke="#87CEEB"
                stroke-width="2"
              />
              <rect
                x="145"
                y="260"
                width="8"
                height="30"
                fill="none"
                stroke="#87CEEB"
                stroke-width="2"
              />

              <!-- Trees -->
              <circle
                cx="40"
                cy="280"
                r="15"
                fill="none"
                stroke="#87CEEB"
                stroke-width="2"
              />
              <circle
                cx="180"
                cy="290"
                r="12"
                fill="none"
                stroke="#87CEEB"
                stroke-width="2"
              />
              <circle
                cx="200"
                cy="285"
                r="10"
                fill="none"
                stroke="#87CEEB"
                stroke-width="2"
              />
            </g>

            <!-- City buildings on the right -->
            <g class="city-buildings">
              <!-- Building 1 -->
              <rect
                x="300"
                y="200"
                width="40"
                height="100"
                fill="none"
                stroke="#87CEEB"
                stroke-width="2"
              />
              <rect
                x="310"
                y="210"
                width="8"
                height="8"
                fill="none"
                stroke="#87CEEB"
                stroke-width="1"
              />
              <rect
                x="322"
                y="210"
                width="8"
                height="8"
                fill="none"
                stroke="#87CEEB"
                stroke-width="1"
              />
              <rect
                x="310"
                y="230"
                width="8"
                height="8"
                fill="none"
                stroke="#87CEEB"
                stroke-width="1"
              />
              <rect
                x="322"
                y="230"
                width="8"
                height="8"
                fill="none"
                stroke="#87CEEB"
                stroke-width="1"
              />

              <!-- Building 2 -->
              <rect
                x="360"
                y="180"
                width="35"
                height="120"
                fill="none"
                stroke="#87CEEB"
                stroke-width="2"
              />
              <rect
                x="370"
                y="190"
                width="6"
                height="6"
                fill="none"
                stroke="#87CEEB"
                stroke-width="1"
              />
              <rect
                x="380"
                y="190"
                width="6"
                height="6"
                fill="none"
                stroke="#87CEEB"
                stroke-width="1"
              />
              <rect
                x="370"
                y="210"
                width="6"
                height="6"
                fill="none"
                stroke="#87CEEB"
                stroke-width="1"
              />
              <rect
                x="380"
                y="210"
                width="6"
                height="6"
                fill="none"
                stroke="#87CEEB"
                stroke-width="1"
              />

              <!-- Building 3 -->
              <rect
                x="410"
                y="160"
                width="30"
                height="140"
                fill="none"
                stroke="#87CEEB"
                stroke-width="2"
              />
              <rect
                x="420"
                y="170"
                width="5"
                height="5"
                fill="none"
                stroke="#87CEEB"
                stroke-width="1"
              />
              <rect
                x="428"
                y="170"
                width="5"
                height="5"
                fill="none"
                stroke="#87CEEB"
                stroke-width="1"
              />
              <rect
                x="420"
                y="185"
                width="5"
                height="5"
                fill="none"
                stroke="#87CEEB"
                stroke-width="1"
              />
              <rect
                x="428"
                y="185"
                width="5"
                height="5"
                fill="none"
                stroke="#87CEEB"
                stroke-width="1"
              />

              <!-- Skyscrapers -->
              <rect
                x="460"
                y="120"
                width="25"
                height="180"
                fill="none"
                stroke="#87CEEB"
                stroke-width="2"
              />
              <rect
                x="500"
                y="100"
                width="20"
                height="200"
                fill="none"
                stroke="#87CEEB"
                stroke-width="2"
              />
              <rect
                x="535"
                y="80"
                width="18"
                height="220"
                fill="none"
                stroke="#87CEEB"
                stroke-width="2"
              />
              <rect
                x="570"
                y="60"
                width="15"
                height="240"
                fill="none"
                stroke="#87CEEB"
                stroke-width="2"
              />
              <rect
                x="600"
                y="40"
                width="12"
                height="260"
                fill="none"
                stroke="#87CEEB"
                stroke-width="2"
              />

              <!-- Windows on skyscrapers -->
              <g class="skyscraper-windows">
                <rect
                  x="465"
                  y="130"
                  width="3"
                  height="3"
                  fill="none"
                  stroke="#87CEEB"
                  stroke-width="1"
                />
                <rect
                  x="472"
                  y="130"
                  width="3"
                  height="3"
                  fill="none"
                  stroke="#87CEEB"
                  stroke-width="1"
                />
                <rect
                  x="465"
                  y="150"
                  width="3"
                  height="3"
                  fill="none"
                  stroke="#87CEEB"
                  stroke-width="1"
                />
                <rect
                  x="472"
                  y="150"
                  width="3"
                  height="3"
                  fill="none"
                  stroke="#87CEEB"
                  stroke-width="1"
                />
                <rect
                  x="505"
                  y="110"
                  width="3"
                  height="3"
                  fill="none"
                  stroke="#87CEEB"
                  stroke-width="1"
                />
                <rect
                  x="512"
                  y="110"
                  width="3"
                  height="3"
                  fill="none"
                  stroke="#87CEEB"
                  stroke-width="1"
                />
                <rect
                  x="505"
                  y="130"
                  width="3"
                  height="3"
                  fill="none"
                  stroke="#87CEEB"
                  stroke-width="1"
                />
                <rect
                  x="512"
                  y="130"
                  width="3"
                  height="3"
                  fill="none"
                  stroke="#87CEEB"
                  stroke-width="1"
                />
                <rect
                  x="540"
                  y="90"
                  width="3"
                  height="3"
                  fill="none"
                  stroke="#87CEEB"
                  stroke-width="1"
                />
                <rect
                  x="547"
                  y="90"
                  width="3"
                  height="3"
                  fill="none"
                  stroke="#87CEEB"
                  stroke-width="1"
                />
                <rect
                  x="540"
                  y="110"
                  width="3"
                  height="3"
                  fill="none"
                  stroke="#87CEEB"
                  stroke-width="1"
                />
                <rect
                  x="547"
                  y="110"
                  width="3"
                  height="3"
                  fill="none"
                  stroke="#87CEEB"
                  stroke-width="1"
                />
                <rect
                  x="575"
                  y="70"
                  width="3"
                  height="3"
                  fill="none"
                  stroke="#87CEEB"
                  stroke-width="1"
                />
                <rect
                  x="582"
                  y="70"
                  width="3"
                  height="3"
                  fill="none"
                  stroke="#87CEEB"
                  stroke-width="1"
                />
                <rect
                  x="575"
                  y="90"
                  width="3"
                  height="3"
                  fill="none"
                  stroke="#87CEEB"
                  stroke-width="1"
                />
                <rect
                  x="582"
                  y="90"
                  width="3"
                  height="3"
                  fill="none"
                  stroke="#87CEEB"
                  stroke-width="1"
                />
                <rect
                  x="605"
                  y="50"
                  width="3"
                  height="3"
                  fill="none"
                  stroke="#87CEEB"
                  stroke-width="1"
                />
                <rect
                  x="612"
                  y="50"
                  width="3"
                  height="3"
                  fill="none"
                  stroke="#87CEEB"
                  stroke-width="1"
                />
                <rect
                  x="605"
                  y="70"
                  width="3"
                  height="3"
                  fill="none"
                  stroke="#87CEEB"
                  stroke-width="1"
                />
                <rect
                  x="612"
                  y="70"
                  width="3"
                  height="3"
                  fill="none"
                  stroke="#87CEEB"
                  stroke-width="1"
                />
              </g>
            </g>
          </svg>
        </div>
      </div>

      <!-- Content Overlay -->
      <div class="banner-content">
        <div class="content-wrapper">
          <h1 class="main-heading">Long Distance Movers Near You</h1>
          <p class="subtitle">
            Find long-distance moving companies in your area. Request a moving
            quote from United.
          </p>

          <div class="cta-section">
            <button class="cta-button">GET A QUOTE</button>

            <div class="rating-section">
              <div class="stars">
                <i class="fas fa-star star-filled"></i>
                <i class="fas fa-star star-filled"></i>
                <i class="fas fa-star star-filled"></i>
                <i class="fas fa-star star-filled"></i>
                <i class="fas fa-star-half-alt star-half"></i>
              </div>
              <p class="rating-text">Our average rating is 4.5 out of 5</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Two Column Section -->
    <section class="two-column-section">
      <div class="container">
        <div class="two-column-layout">
          <!-- Left Column - Image -->
          <div class="image-column">
            <div class="truck-image-container">
              <div class="truck-image">
                <!-- Placeholder for United truck image -->
                <div class="truck-placeholder">
                  <div class="truck-body">
                    <div class="truck-cab"></div>
                    <div class="truck-trailer"></div>
                  </div>
                  <div class="united-logo">
                    <div class="logo-text">United</div>
                    <div class="logo-subtitle">
                      Full-Service to Do-It-Yourself Moving & Storage
                    </div>
                  </div>
                  <div class="contact-info">
                    <div class="phone">877-740-3033</div>
                    <div class="website">UnitedVanLines.com</div>
                  </div>
                </div>
                <div class="landscape-background">
                  <div class="mountains"></div>
                  <div class="trees"></div>
                  <div class="ground"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Column - Content -->
          <div class="content-column">
            <h2 class="section-heading">
              America's #1 Mover® for Cross-Country Moves
            </h2>
            <p class="section-text">
              Moving is personal, especially when it's cross-country. We
              understand the emotions, the memories, and the dreams that come
              with starting fresh in a new place. That's why we've made it our
              mission to simplify long-distance moving. As the industry leader,
              we combine cutting-edge technology, exceptional customer service,
              and unwavering safety standards to deliver a seamless, easy and
              unforgettable long-distance moving experience.
            </p>

            <div class="rating-section">
              <div class="stars">
                <i class="fas fa-star star-filled"></i>
                <i class="fas fa-star star-filled"></i>
                <i class="fas fa-star star-filled"></i>
                <i class="fas fa-star star-filled"></i>
                <i class="fas fa-star-half-alt star-half"></i>
              </div>
              <p class="rating-text">Our average rating is 4.5 out of 5</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Long-Distance Moving Services Section -->
    <section class="services-section">
      <div class="services-container">
        <div class="services-layout">
          <!-- Left Column - Services -->
          <div class="services-column">
            <h2 class="services-heading">Long-Distance Moving Services</h2>

            <div class="services-grid">
              <!-- Service 1: Packing and Unpacking -->
              <div class="service-card">
                <div class="service-icon">
                  <svg viewBox="0 0 24 24" class="icon-svg">
                    <rect
                      x="4"
                      y="4"
                      width="16"
                      height="16"
                      fill="none"
                      stroke="#3b82f6"
                      stroke-width="2"
                    />
                    <path
                      d="M8 8h8v8H8z"
                      fill="none"
                      stroke="#3b82f6"
                      stroke-width="2"
                    />
                    <path
                      d="M12 4v16"
                      fill="none"
                      stroke="#3b82f6"
                      stroke-width="2"
                    />
                    <path
                      d="M4 12h16"
                      fill="none"
                      stroke="#3b82f6"
                      stroke-width="2"
                    />
                  </svg>
                </div>
                <h3 class="service-title">Packing and Unpacking</h3>
                <p class="service-description">
                  Don't have time to pack? Our full and partial packing options
                  can save you time and eliminate stress. Need help getting
                  organized? Try our unpacking service option. Let us customize
                  a packing plan to fit your timeline and financial plan.
                </p>
                <a href="#" class="service-link"
                  >PACKING AND UNPACKING SERVICES ></a
                >
              </div>

              <!-- Service 2: Car Shipping -->
              <div class="service-card">
                <div class="service-icon">
                  <svg viewBox="0 0 24 24" class="icon-svg">
                    <rect
                      x="4"
                      y="8"
                      width="16"
                      height="8"
                      fill="none"
                      stroke="#3b82f6"
                      stroke-width="2"
                    />
                    <circle
                      cx="8"
                      cy="16"
                      r="2"
                      fill="none"
                      stroke="#3b82f6"
                      stroke-width="2"
                    />
                    <circle
                      cx="16"
                      cy="16"
                      r="2"
                      fill="none"
                      stroke="#3b82f6"
                      stroke-width="2"
                    />
                    <rect
                      x="6"
                      y="10"
                      width="4"
                      height="4"
                      fill="none"
                      stroke="#3b82f6"
                      stroke-width="2"
                    />
                    <rect
                      x="14"
                      y="10"
                      width="4"
                      height="4"
                      fill="none"
                      stroke="#3b82f6"
                      stroke-width="2"
                    />
                  </svg>
                </div>
                <h3 class="service-title">Car Shipping</h3>
                <p class="service-description">
                  United provides car moving services for moves between
                  neighboring states and across the country. No matter the
                  distance, United can meet all your moving needs and provide
                  you with a seamless car shipping experience.
                </p>
                <a href="#" class="service-link">CAR SHIPPING SERVICES ></a>
              </div>

              <!-- Service 3: Debris Removal -->
              <div class="service-card">
                <div class="service-icon">
                  <svg viewBox="0 0 24 24" class="icon-svg">
                    <path
                      d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12z"
                      fill="none"
                      stroke="#3b82f6"
                      stroke-width="2"
                    />
                    <path
                      d="M19 7l-1-1H6L5 7"
                      fill="none"
                      stroke="#3b82f6"
                      stroke-width="2"
                    />
                    <path
                      d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
                      fill="none"
                      stroke="#3b82f6"
                      stroke-width="2"
                    />
                    <path
                      d="M10 11v6"
                      fill="none"
                      stroke="#3b82f6"
                      stroke-width="2"
                    />
                    <path
                      d="M14 11v6"
                      fill="none"
                      stroke="#3b82f6"
                      stroke-width="2"
                    />
                  </svg>
                </div>
                <h3 class="service-title">Debris Removal</h3>
                <p class="service-description">
                  If you need assistance cleaning up after your move, United
                  offers moving debris/trash pickup as an add-on service to
                  enhance every phase of your move experience. Learn more about
                  our add-on services.
                </p>
                <a href="#" class="service-link">ADD-ON SERVICES ></a>
              </div>

              <!-- Service 4: Storage Services -->
              <div class="service-card">
                <div class="service-icon">
                  <svg viewBox="0 0 24 24" class="icon-svg">
                    <rect
                      x="4"
                      y="4"
                      width="16"
                      height="16"
                      fill="none"
                      stroke="#3b82f6"
                      stroke-width="2"
                    />
                    <rect
                      x="6"
                      y="6"
                      width="4"
                      height="4"
                      fill="none"
                      stroke="#3b82f6"
                      stroke-width="2"
                    />
                    <rect
                      x="14"
                      y="6"
                      width="4"
                      height="4"
                      fill="none"
                      stroke="#3b82f6"
                      stroke-width="2"
                    />
                    <rect
                      x="6"
                      y="14"
                      width="4"
                      height="4"
                      fill="none"
                      stroke="#3b82f6"
                      stroke-width="2"
                    />
                    <rect
                      x="14"
                      y="14"
                      width="4"
                      height="4"
                      fill="none"
                      stroke="#3b82f6"
                      stroke-width="2"
                    />
                  </svg>
                </div>
                <h3 class="service-title">Storage Services</h3>
                <p class="service-description">
                  As a top-ranked long-distance moving and storage company,
                  United is fully equipped to handle many of your moving-related
                  storage needs with our short-term and long-term storage
                  services. We can provide storage solutions for any interstate
                  move, including residential and commercial moves.
                </p>
                <a href="#" class="service-link"
                  >NATIONWIDE STORAGE SERVICES ></a
                >
              </div>
            </div>
          </div>

          <!-- Right Column - Image -->
          <div class="image-column">
            <div class="service-image-container">
              <div class="service-image">
                <!-- United truck with people -->
                <div class="truck-scene">
                  <div class="united-truck">
                    <div class="truck-body">
                      <div class="truck-cab"></div>
                      <div class="truck-trailer">
                        <div class="united-logo-large">United</div>
                        <div class="bird-logo"></div>
                      </div>
                    </div>
                    <div class="loading-ramp"></div>
                  </div>

                  <!-- People -->
                  <div class="people-group">
                    <div class="employee">
                      <div class="person-body employee-body"></div>
                      <div class="person-head"></div>
                      <div class="tablet"></div>
                    </div>
                    <div class="customer-1">
                      <div class="person-body customer-body"></div>
                      <div class="person-head"></div>
                    </div>
                    <div class="customer-2">
                      <div class="person-body customer-body"></div>
                      <div class="person-head red-hair"></div>
                    </div>
                  </div>

                  <!-- Background -->
                  <div class="scene-background">
                    <div class="greenery"></div>
                    <div class="ground-texture"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Information Grid Section -->
    <section class="info-grid-section">
      <div class="info-container">
        <div class="info-grid">
          <!-- Top-Left Block -->
          <div class="info-card">
            <h3 class="info-title">What Is a Long-Distance Move?</h3>
            <div class="info-separator"></div>
            <div class="info-content">
              <p>
                Long-distance moves are different than local moves because they
                involve moving goods across state lines.
              </p>
              <ul class="info-list">
                <li>
                  <span class="bullet"></span>Local Moves: Moving a short
                  distance within a metro area within the same state
                </li>
                <li>
                  <span class="bullet"></span>Intrastate Moves: Longer distance
                  moves that occur within the same state
                </li>
                <li>
                  <span class="bullet"></span>Long-Distance Moves: Moving across
                  state lines
                </li>
              </ul>
              <p>
                Additionally, a long-distance move can also be referred to as a
                <a href="#" class="info-link">cross-country move</a>, an
                <a href="#" class="info-link">interstate move</a> or a
                state-to-state move.
              </p>
            </div>
          </div>

          <!-- Top-Right Block -->
          <div class="info-card">
            <h3 class="info-title">What Does a Long-Distance Move Cost?</h3>
            <div class="info-separator"></div>
            <div class="info-content">
              <p>
                No two moves are the same. At United Van Lines, we understand
                that cost is a big concern when hiring professional movers.
                Learn more about our
                <a href="#" class="info-link">pricing structure</a> and
                <a href="#" class="info-link">quote process</a> to help you
                understand the ins and outs of moving costs.
              </p>
            </div>
          </div>

          <!-- Bottom-Left Block -->
          <div class="info-card">
            <h3 class="info-title">
              Why Do You Need Storage When Moving Long Distance?
            </h3>
            <div class="info-separator"></div>
            <div class="info-content">
              <p>
                Did you know that many most long-distance moves require storage
                services too? Learn
                <a href="#" class="info-link"
                  >when to combine these services and how bundling can save on
                  moving costs</a
                >.
              </p>
            </div>
          </div>

          <!-- Bottom-Right Block -->
          <div class="info-card">
            <h3 class="info-title">Hire the Right Long-Distance Mover</h3>
            <div class="info-separator"></div>
            <div class="info-content">
              <p>
                All interstate moves require special authority to perform any
                part of a move from one state to another. United is fully
                licensed to provide interstate moving services. If you are
                moving across state lines, we recommend looking into trusted
                moving companies such as United. Discover
                <a href="#" class="info-link">tips to hire reputable movers</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Long Distance Moving Types Section -->
    <section class="moving-types-section">
      <!-- Top Banner -->
      <div class="quote-banner">
        <div class="banner-container">
          <h2 class="banner-heading">Request a Long-Distance Moving Quote</h2>
          <button class="banner-cta">GET A QUOTE</button>
        </div>
      </div>

      <!-- Main Content -->
      <div class="types-content">
        <div class="types-container">
          <h3 class="types-heading">Long Distance Moving Types</h3>

          <div class="types-grid">
            <!-- Card 1: SnapmovesSM -->
            <div class="type-card">
              <div class="type-icon">
                <svg viewBox="0 0 24 24" class="icon-svg">
                  <rect
                    x="4"
                    y="8"
                    width="16"
                    height="8"
                    fill="none"
                    stroke="#1e40af"
                    stroke-width="2"
                  />
                  <circle
                    cx="8"
                    cy="16"
                    r="2"
                    fill="none"
                    stroke="#1e40af"
                    stroke-width="2"
                  />
                  <circle
                    cx="16"
                    cy="16"
                    r="2"
                    fill="none"
                    stroke="#1e40af"
                    stroke-width="2"
                  />
                  <rect
                    x="6"
                    y="10"
                    width="4"
                    height="4"
                    fill="none"
                    stroke="#1e40af"
                    stroke-width="2"
                  />
                  <rect
                    x="14"
                    y="10"
                    width="4"
                    height="4"
                    fill="none"
                    stroke="#1e40af"
                    stroke-width="2"
                  />
                  <rect
                    x="18"
                    y="6"
                    width="4"
                    height="10"
                    fill="none"
                    stroke="#1e40af"
                    stroke-width="2"
                  />
                </svg>
              </div>
              <h4 class="type-title">SnapmovesSM</h4>
              <p class="type-description">
                We've streamlined the processes involved in a traditional move
                experience, and unlike most other long-distance movers, we
                provide this service for moves of any size.
              </p>
              <a href="#" class="type-link">SNAPMOVESSM BY UNITED ></a>
            </div>

            <!-- Card 2: Residential Moves -->
            <div class="type-card">
              <div class="type-icon">
                <svg viewBox="0 0 24 24" class="icon-svg">
                  <path
                    d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
                    fill="none"
                    stroke="#1e40af"
                    stroke-width="2"
                  />
                  <polyline
                    points="9,22 9,12 15,12 15,22"
                    fill="none"
                    stroke="#1e40af"
                    stroke-width="2"
                  />
                  <rect
                    x="10"
                    y="14"
                    width="4"
                    height="4"
                    fill="none"
                    stroke="#1e40af"
                    stroke-width="2"
                  />
                  <rect
                    x="8"
                    y="6"
                    width="2"
                    height="3"
                    fill="none"
                    stroke="#1e40af"
                    stroke-width="2"
                  />
                </svg>
              </div>
              <h4 class="type-title">Residential Moves</h4>
              <p class="type-description">
                United has the largest network of movers in the industry,
                providing full-service, residential moving services to long
                distance moving customers. Find out how United can help tailor a
                moving plan for your upcoming household move.
              </p>
              <a href="#" class="type-link">RESIDENTIAL MOVING SERVICES ></a>
            </div>

            <!-- Card 3: International Moves -->
            <div class="type-card">
              <div class="type-icon">
                <svg viewBox="0 0 24 24" class="icon-svg">
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    fill="none"
                    stroke="#1e40af"
                    stroke-width="2"
                  />
                  <path
                    d="M2 12h20"
                    fill="none"
                    stroke="#1e40af"
                    stroke-width="2"
                  />
                  <path
                    d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
                    fill="none"
                    stroke="#1e40af"
                    stroke-width="2"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="3"
                    fill="none"
                    stroke="#1e40af"
                    stroke-width="2"
                  />
                </svg>
              </div>
              <h4 class="type-title">International Moves</h4>
              <p class="type-description">
                United International offers moving services to more than 150
                countries around the world. Our International United move team
                can provide you with a moving plan customized to your
                specifications and budget.
              </p>
              <a href="#" class="type-link">INTERNATIONAL MOVERS ></a>
            </div>

            <!-- Card 4: Corporate Relocation -->
            <div class="type-card">
              <div class="type-icon">
                <svg viewBox="0 0 24 24" class="icon-svg">
                  <rect
                    x="4"
                    y="4"
                    width="16"
                    height="16"
                    fill="none"
                    stroke="#1e40af"
                    stroke-width="2"
                  />
                  <rect
                    x="6"
                    y="6"
                    width="4"
                    height="4"
                    fill="none"
                    stroke="#1e40af"
                    stroke-width="2"
                  />
                  <rect
                    x="14"
                    y="6"
                    width="4"
                    height="4"
                    fill="none"
                    stroke="#1e40af"
                    stroke-width="2"
                  />
                  <rect
                    x="6"
                    y="14"
                    width="4"
                    height="4"
                    fill="none"
                    stroke="#1e40af"
                    stroke-width="2"
                  />
                  <rect
                    x="14"
                    y="14"
                    width="4"
                    height="4"
                    fill="none"
                    stroke="#1e40af"
                    stroke-width="2"
                  />
                  <rect
                    x="10"
                    y="8"
                    width="4"
                    height="8"
                    fill="none"
                    stroke="#1e40af"
                    stroke-width="2"
                  />
                </svg>
              </div>
              <h4 class="type-title">Corporate Relocation</h4>
              <p class="type-description">
                Whether you're an employee who is looking for a moving company
                or a relocation manager looking to help your organization's
                transferees, United strives to make the corporate moving process
                as seamless as possible.
              </p>
              <a href="#" class="type-link">CORPORATE MOVERS ></a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Customer Testimonials Section -->
    <section class="testimonials-section">
      <div class="testimonials-container">
        <h2 class="testimonials-heading">What Our Customers Say</h2>

        <div class="testimonials-grid">
          <!-- Left Testimonial -->
          <div class="testimonial-card">
            <blockquote class="testimonial-quote">
              "In all of my years of moving, this was by far the best experience
              - from scheduling to packing to loading, delivering and unloading,
              this was the best experience."
            </blockquote>
            <div class="customer-info">
              <h4 class="customer-name">Barry W.</h4>
              <p class="moving-route">
                Moved from Grandville, MI to Hernando, FL
              </p>
              <div class="star-rating">
                <i class="fas fa-star star-filled"></i>
                <i class="fas fa-star star-filled"></i>
                <i class="fas fa-star star-filled"></i>
                <i class="fas fa-star star-filled"></i>
                <i class="fas fa-star star-filled"></i>
              </div>
            </div>
          </div>

          <!-- Middle Separator -->
          <div class="testimonial-separator"></div>

          <!-- Middle Testimonial -->
          <div class="testimonial-card">
            <blockquote class="testimonial-quote">
              "Overall the experience was great. Frequent and detailed
              communication, the driver and moving crews handled everything as
              if it was their own property (extremely careful!)."
            </blockquote>
            <div class="customer-info">
              <h4 class="customer-name">Antonio D.</h4>
              <p class="moving-route">Moved from Cypress, TX to Gilbert, AZ</p>
              <div class="star-rating">
                <i class="fas fa-star star-filled"></i>
                <i class="fas fa-star star-filled"></i>
                <i class="fas fa-star star-filled"></i>
                <i class="fas fa-star star-filled"></i>
                <i class="fas fa-star star-filled"></i>
              </div>
            </div>
          </div>

          <!-- Middle Separator -->
          <div class="testimonial-separator"></div>

          <!-- Right Testimonial -->
          <div class="testimonial-card">
            <blockquote class="testimonial-quote">
              "All the staff were professional and friendly from answering the
              phone to the in home estimate to the very caring men who packed
              and moved our items. A+++"
            </blockquote>
            <div class="customer-info">
              <h4 class="customer-name">Catherine R.</h4>
              <p class="moving-route">Moved from Ocala, FL to Lexington, NC</p>
              <div class="star-rating">
                <i class="fas fa-star star-filled"></i>
                <i class="fas fa-star star-filled"></i>
                <i class="fas fa-star star-filled"></i>
                <i class="fas fa-star star-filled"></i>
                <i class="fas fa-star star-filled"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Plan Your Move Section -->
    <section class="plan-move-section">
      <div class="plan-container">
        <div class="plan-header">
          <h2 class="plan-heading">Plan Your Long-Distance Move</h2>
          <p class="plan-intro">
            Don't be overwhelmed by the details. We've compiled some expert
            moving advice and provided you with handy tips to keep you organized
            on moving day.
          </p>
        </div>

        <div class="plan-grid">
          <!-- Row 1, Column 1 -->
          <div class="plan-card">
            <div class="plan-icon">
              <svg viewBox="0 0 24 24" class="icon-svg">
                <circle
                  cx="6"
                  cy="6"
                  r="2"
                  fill="none"
                  stroke="#3b82f6"
                  stroke-width="2"
                />
                <circle
                  cx="18"
                  cy="18"
                  r="2"
                  fill="none"
                  stroke="#3b82f6"
                  stroke-width="2"
                />
                <path
                  d="M8 6l8 12"
                  fill="none"
                  stroke="#3b82f6"
                  stroke-width="2"
                  stroke-dasharray="4"
                />
              </svg>
            </div>
            <div class="plan-content">
              <h3 class="plan-title">
                Guide to Moving Long Distance with United Van Lines
              </h3>
              <p class="plan-description">
                Discover a stress-free long-distance moving experience with
                United Van Lines. Our
                <a href="#" class="plan-link">step-by-step guide</a> covers
                everything from the initial moving quote to post-move services.
              </p>
            </div>
          </div>

          <!-- Row 1, Column 2 -->
          <div class="plan-card">
            <div class="plan-icon">
              <svg viewBox="0 0 24 24" class="icon-svg">
                <rect
                  x="3"
                  y="3"
                  width="18"
                  height="18"
                  fill="none"
                  stroke="#3b82f6"
                  stroke-width="2"
                />
                <path
                  d="M9 9l6 6"
                  fill="none"
                  stroke="#3b82f6"
                  stroke-width="2"
                />
                <path
                  d="M15 9l-6 6"
                  fill="none"
                  stroke="#3b82f6"
                  stroke-width="2"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="2"
                  fill="none"
                  stroke="#3b82f6"
                  stroke-width="2"
                />
                <path
                  d="M8 8l8 8"
                  fill="none"
                  stroke="#3b82f6"
                  stroke-width="2"
                  stroke-dasharray="2"
                />
              </svg>
            </div>
            <div class="plan-content">
              <h3 class="plan-title">Tips for Moving to Another State</h3>
              <p class="plan-description">
                Discover <a href="#" class="plan-link">9 steps</a> to best plan
                for your big out-of-state move and know what you need to do
                afterward with insights from America's #1 Mover.
              </p>
            </div>
          </div>

          <!-- Row 2, Column 1 -->
          <div class="plan-card">
            <div class="plan-icon">
              <svg viewBox="0 0 24 24" class="icon-svg">
                <rect
                  x="4"
                  y="8"
                  width="16"
                  height="12"
                  fill="none"
                  stroke="#3b82f6"
                  stroke-width="2"
                />
                <rect
                  x="6"
                  y="10"
                  width="4"
                  height="4"
                  fill="none"
                  stroke="#3b82f6"
                  stroke-width="2"
                />
                <rect
                  x="14"
                  y="10"
                  width="4"
                  height="4"
                  fill="none"
                  stroke="#3b82f6"
                  stroke-width="2"
                />
                <rect
                  x="6"
                  y="16"
                  width="4"
                  height="2"
                  fill="none"
                  stroke="#3b82f6"
                  stroke-width="2"
                />
                <rect
                  x="14"
                  y="16"
                  width="4"
                  height="2"
                  fill="none"
                  stroke="#3b82f6"
                  stroke-width="2"
                />
                <rect
                  x="8"
                  y="4"
                  width="8"
                  height="6"
                  fill="none"
                  stroke="#3b82f6"
                  stroke-width="2"
                />
              </svg>
            </div>
            <div class="plan-content">
              <h3 class="plan-title">First Night Box Checklist</h3>
              <p class="plan-description">
                Get expert tips from United that will help make the first night
                in your new home an easy and enjoyable transition. We recommend
                you pack a "<a href="#" class="plan-link">first-night</a>" box
                with items you'll need for basic unpacking, cleaning, eating and
                hygiene.
              </p>
            </div>
          </div>

          <!-- Row 2, Column 2 -->
          <div class="plan-card">
            <div class="plan-icon">
              <svg viewBox="0 0 24 24" class="icon-svg">
                <path
                  d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                  fill="none"
                  stroke="#3b82f6"
                  stroke-width="2"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="3"
                  fill="none"
                  stroke="#3b82f6"
                  stroke-width="2"
                />
              </svg>
            </div>
            <div class="plan-content">
              <h3 class="plan-title">Non Allowable Checklist</h3>
              <p class="plan-description">
                United is dedicated to operating safely, and we want to make
                sure you know what items (e.g., explosives, flammable gases and
                toxic substances) are restricted and
                <a href="#" class="plan-link"
                  >should not be packed into your shipment</a
                >.
              </p>
            </div>
          </div>

          <!-- Row 3, Column 1 -->
          <div class="plan-card">
            <div class="plan-icon">
              <svg viewBox="0 0 24 24" class="icon-svg">
                <rect
                  x="4"
                  y="8"
                  width="16"
                  height="8"
                  fill="none"
                  stroke="#3b82f6"
                  stroke-width="2"
                />
                <rect
                  x="6"
                  y="10"
                  width="4"
                  height="4"
                  fill="none"
                  stroke="#3b82f6"
                  stroke-width="2"
                />
                <rect
                  x="14"
                  y="10"
                  width="4"
                  height="4"
                  fill="none"
                  stroke="#3b82f6"
                  stroke-width="2"
                />
                <rect
                  x="4"
                  y="4"
                  width="16"
                  height="4"
                  fill="none"
                  stroke="#3b82f6"
                  stroke-width="2"
                />
                <rect
                  x="6"
                  y="6"
                  width="4"
                  height="2"
                  fill="none"
                  stroke="#3b82f6"
                  stroke-width="2"
                />
                <rect
                  x="14"
                  y="6"
                  width="4"
                  height="2"
                  fill="none"
                  stroke="#3b82f6"
                  stroke-width="2"
                />
                <path
                  d="M12 0v8"
                  fill="none"
                  stroke="#3b82f6"
                  stroke-width="2"
                />
              </svg>
            </div>
            <div class="plan-content">
              <h3 class="plan-title">Packing 101 Checklist</h3>
              <p class="plan-description">
                United will help you master packing with our
                <a href="#" class="plan-link"
                  >13-step moving and packing checklist</a
                >. These essential packing tips will not only save you time and
                money but will also help ease the burden that comes with packing
                for a move.
              </p>
            </div>
          </div>

          <!-- Row 3, Column 2 -->
          <div class="plan-card">
            <div class="plan-icon">
              <svg viewBox="0 0 24 24" class="icon-svg">
                <rect
                  x="2"
                  y="3"
                  width="20"
                  height="14"
                  fill="none"
                  stroke="#3b82f6"
                  stroke-width="2"
                />
                <rect
                  x="7"
                  y="7"
                  width="10"
                  height="6"
                  fill="none"
                  stroke="#3b82f6"
                  stroke-width="2"
                />
                <circle
                  cx="12"
                  cy="10"
                  r="1"
                  fill="none"
                  stroke="#3b82f6"
                  stroke-width="2"
                />
                <path
                  d="M8 16l2 2 6-6"
                  fill="none"
                  stroke="#3b82f6"
                  stroke-width="2"
                />
              </svg>
            </div>
            <div class="plan-content">
              <h3 class="plan-title">Pack Separately Checklists</h3>
              <p class="plan-description">
                It's better to be safe than sorry when
                <a href="#" class="plan-link"
                  >packing your irreplaceable personal valuables</a
                >. Items that require additional security or special access are
                better kept in your personal vehicle during a move.
              </p>
            </div>
          </div>

          <!-- Row 4, Column 1 -->
          <div class="plan-card">
            <div class="plan-icon">
              <svg viewBox="0 0 24 24" class="icon-svg">
                <rect
                  x="4"
                  y="8"
                  width="16"
                  height="8"
                  fill="none"
                  stroke="#3b82f6"
                  stroke-width="2"
                />
                <rect
                  x="6"
                  y="10"
                  width="4"
                  height="4"
                  fill="none"
                  stroke="#3b82f6"
                  stroke-width="2"
                />
                <rect
                  x="14"
                  y="10"
                  width="4"
                  height="4"
                  fill="none"
                  stroke="#3b82f6"
                  stroke-width="2"
                />
                <rect
                  x="6"
                  y="16"
                  width="4"
                  height="2"
                  fill="none"
                  stroke="#3b82f6"
                  stroke-width="2"
                />
                <rect
                  x="14"
                  y="16"
                  width="4"
                  height="2"
                  fill="none"
                  stroke="#3b82f6"
                  stroke-width="2"
                />
                <path
                  d="M8 20l8-8"
                  fill="none"
                  stroke="#3b82f6"
                  stroke-width="2"
                />
              </svg>
            </div>
            <div class="plan-content">
              <h3 class="plan-title">Move-Out Checklist</h3>
              <p class="plan-description">
                Moving into a new home involves much more than just relocating
                your belongings. This
                <a href="#" class="plan-link">list</a> contains items that are
                often overlooked and should be considered prior to moving day.
              </p>
            </div>
          </div>

          <!-- Row 4, Column 2 -->
          <div class="plan-card">
            <div class="plan-icon">
              <svg viewBox="0 0 24 24" class="icon-svg">
                <rect
                  x="3"
                  y="3"
                  width="18"
                  height="18"
                  fill="none"
                  stroke="#3b82f6"
                  stroke-width="2"
                />
                <path
                  d="M9 9l6 6"
                  fill="none"
                  stroke="#3b82f6"
                  stroke-width="2"
                />
                <path
                  d="M15 9l-6 6"
                  fill="none"
                  stroke="#3b82f6"
                  stroke-width="2"
                />
                <path
                  d="M8 12h8"
                  fill="none"
                  stroke="#3b82f6"
                  stroke-width="2"
                />
                <path
                  d="M12 8v8"
                  fill="none"
                  stroke="#3b82f6"
                  stroke-width="2"
                />
              </svg>
            </div>
            <div class="plan-content">
              <h3 class="plan-title">Destination Checklist</h3>
              <p class="plan-description">
                After surviving prepping, packing, moving out and traveling—
                <a href="#" class="plan-link">move-in day</a> will feel like a
                breeze. Approach the day with a plan so that settling into your
                new home goes smoothly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Moving Resources Section -->
    <section class="resources-section">
      <div class="resources-container">
        <div class="resources-header">
          <h2 class="resources-heading">Moving Resources</h2>
          <p class="resources-subtitle">
            Explore a wealth of expert advice and insider tips from our
            professional movers to ensure a seamless and well-organized moving
            journey.
          </p>
        </div>

        <div class="resources-grid">
          <!-- Card 1: Home Maintenance -->
          <div class="resource-card">
            <div class="resource-image">
              <div class="image-placeholder home-maintenance">
                <div class="wall-scene">
                  <div class="wall"></div>
                  <div class="window"></div>
                  <div class="person">
                    <div class="person-body"></div>
                    <div class="person-head"></div>
                    <div class="wallpaper-roll"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="resource-content">
              <div class="category-tags">
                <span class="tag">HOME MAINTENANCE</span>
                <span class="tag">SETTLING IN</span>
              </div>
              <h3 class="resource-title">
                Your Walls Are a Blank Slate – Now What?
              </h3>
              <div class="resource-separator"></div>
              <p class="resource-description">
                Blank walls in a room can be intimidating; however, they're also
                an opportunity to get your creative juices flowing and really
                make your new house feel like home.
              </p>
              <a href="#" class="resource-link">Continue Reading ></a>
            </div>
          </div>

          <!-- Card 2: Moving to Washington -->
          <div class="resource-card">
            <div class="resource-image">
              <div class="image-placeholder washington-scene">
                <div class="landscape">
                  <div class="mountains"></div>
                  <div class="water"></div>
                  <div class="city">
                    <div class="buildings"></div>
                    <div class="lights"></div>
                  </div>
                  <div class="trees"></div>
                </div>
              </div>
            </div>
            <div class="resource-content">
              <div class="category-tags">
                <span class="tag">CITY AND STATE GUIDES</span>
                <span class="tag">STATE GUIDES</span>
              </div>
              <h3 class="resource-title">
                Your Ultimate Guide to Moving to Washington
              </h3>
              <div class="resource-separator"></div>
              <p class="resource-description">
                Wondering if Washington is for you? Whether you're moving for a
                job opportunity or for family, this guide has all insights you
                need before moving to the Evergreen State.
              </p>
              <a href="#" class="resource-link">Continue Reading ></a>
            </div>
          </div>

          <!-- Card 3: Moving to Montana -->
          <div class="resource-card">
            <div class="resource-image">
              <div class="image-placeholder montana-scene">
                <div class="landscape">
                  <div class="hills"></div>
                  <div class="river"></div>
                  <div class="city-valley">
                    <div class="buildings-small"></div>
                  </div>
                  <div class="mountains-distant"></div>
                </div>
              </div>
            </div>
            <div class="resource-content">
              <div class="category-tags">
                <span class="tag">CITY AND STATE GUIDES</span>
                <span class="tag">STATE GUIDES</span>
              </div>
              <h3 class="resource-title">
                Your Ultimate Guide to Moving to Montana
              </h3>
              <div class="resource-separator"></div>
              <p class="resource-description">
                Set where the Great Plains give way to the jagged Rockies and
                home to two of the country's most iconic national parks –
                Yellowstone and Glacier – Montana is filled with natural wonders
                and outdoor adventures.
              </p>
              <a href="#" class="resource-link">Continue Reading ></a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <AppFooter />
  </q-page>
</template>

<script>
import AppFooter from "../../../components/Footer.vue";

export default {
  name: "LongDistance",
  data() {
    return {
      // Component data can be added here
    };
  },
  components: {
    AppFooter,
  },
  methods: {
    // Component methods can be added here
  },
};
</script>

<style scoped>
/* Hero Banner Styles */
.hero-banner {
  position: relative;
  height: 500px;
  background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #3b82f6 100%);
  overflow: hidden;
  display: flex;
  align-items: center;
}

.banner-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.cityscape-illustration {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.3;
}

.cityscape-svg {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.banner-content {
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
}

.content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  width: 100%;
}

.main-heading {
  font-size: 3.5rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 1rem;
  line-height: 1.2;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.subtitle {
  font-size: 1.25rem;
  color: #ffffff;
  margin-bottom: 2rem;
  line-height: 1.5;
  opacity: 0.9;
  max-width: 500px;
}

.cta-section {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.cta-button {
  background: transparent;
  border: 2px solid #ffffff;
  color: #ffffff;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  width: fit-content;
  font-family: inherit;
}

.cta-button:hover {
  background: #ffffff;
  color: #1e3a8a;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(255, 255, 255, 0.2);
}

.rating-section {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.stars {
  display: flex;
  gap: 0.25rem;
}

.star-filled {
  color: #fbbf24;
  font-size: 1.2rem;
}

.star-half {
  color: #fbbf24;
  font-size: 1.2rem;
}

.rating-text {
  color: #ffffff;
  font-size: 0.9rem;
  margin: 0;
  opacity: 0.9;
}

/* Content Section */
.content-section {
  padding: 4rem 0;
  background: #f8fafc;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.content-section h2 {
  font-size: 2.5rem;
  color: #1e293b;
  margin-bottom: 1rem;
  text-align: center;
}

.content-section p {
  font-size: 1.1rem;
  color: #64748b;
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

/* Two Column Section Styles */
.two-column-section {
  padding: 4rem 0;
  background: #f8fafc;
}

.two-column-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.image-column {
  position: relative;
}

.truck-image-container {
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.truck-image {
  position: relative;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #e2e8f0 0%, #cbd5e1 100%);
}

.truck-placeholder {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  width: 80%;
  height: 60%;
}

.truck-body {
  position: relative;
  width: 100%;
  height: 100%;
}

.truck-cab {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 30%;
  height: 40%;
  background: #ffffff;
  border: 3px solid #1e40af;
  border-radius: 8px 8px 0 0;
}

.truck-trailer {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 65%;
  height: 60%;
  background: #ffffff;
  border: 3px solid #1e40af;
  border-radius: 8px 8px 0 0;
}

.united-logo {
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  z-index: 4;
}

.logo-text {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1e40af;
  margin-bottom: 0.25rem;
}

.logo-subtitle {
  font-size: 0.6rem;
  color: #64748b;
  line-height: 1.2;
}

.contact-info {
  position: absolute;
  bottom: 10%;
  right: 5%;
  background: #fbbf24;
  padding: 0.5rem;
  border-radius: 4px;
  text-align: center;
  z-index: 4;
}

.phone {
  font-size: 0.7rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 0.25rem;
}

.website {
  font-size: 0.6rem;
  color: #1e293b;
}

.landscape-background {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.mountains {
  position: absolute;
  bottom: 30%;
  left: 0;
  width: 100%;
  height: 40%;
  background: linear-gradient(135deg, #94a3b8 0%, #64748b 50%, #475569 100%);
  clip-path: polygon(
    0 100%,
    20% 60%,
    40% 80%,
    60% 40%,
    80% 70%,
    100% 50%,
    100% 100%
  );
}

.trees {
  position: absolute;
  bottom: 20%;
  left: 0;
  width: 100%;
  height: 20%;
}

.trees::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 10%;
  width: 20px;
  height: 30px;
  background: #16a34a;
  border-radius: 50% 50% 0 0;
}

.trees::after {
  content: "";
  position: absolute;
  bottom: 0;
  right: 20%;
  width: 25px;
  height: 35px;
  background: #ca8a04;
  border-radius: 50% 50% 0 0;
}

.ground {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 20%;
  background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%);
}

.content-column {
  padding: 2rem 0;
}

.section-heading {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1e40af;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.section-text {
  font-size: 1.1rem;
  color: #374151;
  line-height: 1.7;
  margin-bottom: 2rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-banner {
    height: 400px;
  }

  .main-heading {
    font-size: 2.5rem;
  }

  .subtitle {
    font-size: 1.1rem;
  }

  .content-wrapper {
    padding: 0 1rem;
  }

  .rating-section {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }

  /* Two Column Section Mobile Styles */
  .two-column-layout {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .truck-image-container {
    height: 300px;
  }

  .section-heading {
    font-size: 2rem;
  }

  .section-text {
    font-size: 1rem;
  }

  /* Services Section Mobile Styles */
  .services-layout {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .services-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .services-heading {
    font-size: 2rem;
  }

  .service-image-container {
    height: 400px;
  }

  .people-group {
    bottom: 15%;
    right: 10%;
    gap: 0.5rem;
  }

  .person-body {
    width: 25px;
    height: 35px;
  }

  .person-head {
    width: 18px;
    height: 18px;
    top: -8px;
  }

  .tablet {
    width: 18px;
    height: 12px;
    top: -3px;
    right: -12px;
  }

  /* Information Grid Mobile Styles */
  .info-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .info-card {
    padding: 1.5rem;
  }

  .info-title {
    font-size: 1.25rem;
  }

  .info-content p {
    font-size: 0.9rem;
  }

  .info-list li {
    font-size: 0.9rem;
  }

  /* Moving Types Mobile Styles */
  .banner-container {
    flex-direction: column;
    gap: 1.5rem;
    text-align: center;
  }

  .banner-heading {
    font-size: 2rem;
  }

  .banner-cta {
    padding: 0.875rem 1.5rem;
    font-size: 1rem;
  }

  .types-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .types-heading {
    font-size: 2rem;
  }

  .type-card {
    padding: 1.5rem;
  }

  .type-title {
    font-size: 1.25rem;
  }

  .type-description {
    font-size: 0.9rem;
  }

  /* Testimonials Mobile Styles */
  .testimonials-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .testimonial-separator {
    display: none;
  }

  .testimonials-heading {
    font-size: 2rem;
  }

  .testimonial-quote {
    font-size: 1rem;
  }

  .customer-name {
    font-size: 1.1rem;
  }

  .moving-route {
    font-size: 0.85rem;
  }

  /* Plan Move Mobile Styles */
  .plan-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .plan-card {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }

  .plan-heading {
    font-size: 2rem;
  }

  .plan-intro {
    font-size: 1rem;
  }

  .plan-title {
    font-size: 1.1rem;
  }

  .plan-description {
    font-size: 0.9rem;
  }

  /* Resources Mobile Styles */
  .resources-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .resources-heading {
    font-size: 2rem;
  }

  .resources-subtitle {
    font-size: 1rem;
  }

  .resource-title {
    font-size: 1.1rem;
  }

  .resource-description {
    font-size: 0.9rem;
  }

  .category-tags {
    gap: 0.25rem;
  }

  .tag {
    font-size: 0.7rem;
    padding: 0.2rem 0.4rem;
  }
}

/* Services Section Styles */
.services-section {
  padding: 4rem 0;
  background: #ffffff;
}

.services-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.services-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
}

.services-heading {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1e3a8a;
  margin-bottom: 2rem;
  line-height: 1.2;
}

.services-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.service-card {
  background: #ffffff;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.service-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.service-icon {
  width: 48px;
  height: 48px;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-svg {
  width: 100%;
  height: 100%;
}

.service-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.75rem;
  line-height: 1.3;
}

.service-description {
  font-size: 0.9rem;
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.service-link {
  color: #3b82f6;
  text-decoration: none;
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: color 0.3s ease;
}

.service-link:hover {
  color: #1e40af;
}

/* Service Image Styles */
.service-image-container {
  position: relative;
  width: 100%;
  height: 600px;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.service-image {
  position: relative;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%);
}

.truck-scene {
  position: relative;
  width: 100%;
  height: 100%;
}

.united-truck {
  position: absolute;
  bottom: 20%;
  left: 10%;
  width: 60%;
  height: 40%;
  z-index: 2;
}

.truck-body {
  position: relative;
  width: 100%;
  height: 100%;
}

.truck-cab {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 25%;
  height: 50%;
  background: #ffffff;
  border: 3px solid #1e40af;
  border-radius: 8px 8px 0 0;
}

.truck-trailer {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 70%;
  height: 60%;
  background: #ffffff;
  border: 3px solid #1e40af;
  border-radius: 8px 8px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.united-logo-large {
  font-size: 1.2rem;
  font-weight: 700;
  color: #1e40af;
  margin-right: 0.5rem;
}

.bird-logo {
  width: 20px;
  height: 20px;
  background: #1e40af;
  border-radius: 50%;
  position: relative;
}

.bird-logo::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 12px;
  height: 8px;
  background: #ffffff;
  clip-path: polygon(0 50%, 50% 0, 100% 50%, 50% 100%);
}

.loading-ramp {
  position: absolute;
  bottom: 0;
  right: -10%;
  width: 20%;
  height: 5%;
  background: #64748b;
  border-radius: 0 0 4px 4px;
}

.people-group {
  position: absolute;
  bottom: 25%;
  right: 15%;
  display: flex;
  gap: 1rem;
  z-index: 3;
}

.employee,
.customer-1,
.customer-2 {
  position: relative;
}

.person-body {
  width: 30px;
  height: 40px;
  border-radius: 50% 50% 0 0;
}

.employee-body {
  background: #1e40af;
}

.customer-body {
  background: #6b7280;
}

.person-head {
  width: 20px;
  height: 20px;
  background: #fbbf24;
  border-radius: 50%;
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
}

.red-hair {
  background: #dc2626;
}

.tablet {
  position: absolute;
  top: -5px;
  right: -15px;
  width: 20px;
  height: 15px;
  background: #374151;
  border-radius: 2px;
  border: 1px solid #6b7280;
}

.scene-background {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.greenery {
  position: absolute;
  bottom: 15%;
  right: 5%;
  width: 30%;
  height: 20%;
}

.greenery::before {
  content: "";
  position: absolute;
  bottom: 0;
  right: 0;
  width: 40px;
  height: 60px;
  background: #16a34a;
  border-radius: 50% 50% 0 0;
}

.greenery::after {
  content: "";
  position: absolute;
  bottom: 0;
  right: 20px;
  width: 30px;
  height: 50px;
  background: #22c55e;
  border-radius: 50% 50% 0 0;
}

.ground-texture {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 20%;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
}

/* Information Grid Section Styles */
.info-grid-section {
  padding: 4rem 0;
  background: #f8fafc;
}

.info-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.info-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.info-card {
  background: #1e3a8a;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease;
}

.info-card:hover {
  transform: translateY(-4px);
}

.info-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 1rem;
  line-height: 1.3;
}

.info-separator {
  width: 60px;
  height: 3px;
  background: #3b82f6;
  margin-bottom: 1.5rem;
  border-radius: 2px;
}

.info-content {
  color: #ffffff;
}

.info-content p {
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1rem;
  color: #ffffff;
}

.info-list {
  list-style: none;
  padding: 0;
  margin: 1rem 0;
}

.info-list li {
  display: flex;
  align-items: flex-start;
  margin-bottom: 0.75rem;
  font-size: 0.95rem;
  line-height: 1.5;
  color: #ffffff;
}

.bullet {
  width: 6px;
  height: 6px;
  background: #3b82f6;
  border-radius: 50%;
  margin-right: 0.75rem;
  margin-top: 0.5rem;
  flex-shrink: 0;
}

.info-link {
  color: #3b82f6;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

.info-link:hover {
  color: #60a5fa;
  text-decoration: underline;
}

/* Moving Types Section Styles */
.moving-types-section {
  background: #ffffff;
}

/* Quote Banner */
.quote-banner {
  background: #1e3a8a;
  padding: 3rem 0;
}

.banner-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.banner-heading {
  font-size: 2.5rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0;
  line-height: 1.2;
}

.banner-cta {
  background: transparent;
  border: 2px solid #ffffff;
  color: #1e3a8a;
  background: #ffffff;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: inherit;
}

.banner-cta:hover {
  background: transparent;
  color: #ffffff;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(255, 255, 255, 0.2);
}

/* Types Content */
.types-content {
  padding: 4rem 0;
  background: #ffffff;
}

.types-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.types-heading {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1e3a8a;
  text-align: center;
  margin-bottom: 3rem;
  line-height: 1.2;
}

.types-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}

.type-card {
  background: #f8fafc;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  text-align: center;
}

.type-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.type-icon {
  width: 64px;
  height: 64px;
  margin: 0 auto 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-svg {
  width: 100%;
  height: 100%;
}

.type-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 1rem;
  line-height: 1.3;
}

.type-description {
  font-size: 0.95rem;
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.type-link {
  color: #1e40af;
  text-decoration: none;
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: color 0.3s ease;
}

.type-link:hover {
  color: #3b82f6;
}

/* Testimonials Section Styles */
.testimonials-section {
  background: #1e3a8a;
  padding: 4rem 0;
}

.testimonials-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.testimonials-heading {
  font-size: 2.5rem;
  font-weight: 700;
  color: #ffffff;
  text-align: center;
  margin-bottom: 3rem;
  line-height: 1.2;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: 1fr auto 1fr auto 1fr;
  gap: 2rem;
  align-items: start;
}

.testimonial-card {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.testimonial-quote {
  font-size: 1.1rem;
  color: #ffffff;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-style: italic;
  flex-grow: 1;
}

.testimonial-quote::before {
  content: '"';
  font-size: 2rem;
  color: #fbbf24;
  line-height: 0;
  margin-right: 0.25rem;
}

.testimonial-quote::after {
  content: '"';
  font-size: 2rem;
  color: #fbbf24;
  line-height: 0;
  margin-left: 0.25rem;
}

.customer-info {
  margin-top: auto;
}

.customer-name {
  font-size: 1.25rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0.5rem;
  line-height: 1.3;
}

.moving-route {
  font-size: 0.9rem;
  color: #fbbf24;
  margin-bottom: 1rem;
  line-height: 1.4;
}

.star-rating {
  display: flex;
  gap: 0.25rem;
}

.star-filled {
  color: #fbbf24;
  font-size: 1.1rem;
}

.testimonial-separator {
  width: 1px;
  height: 100%;
  background: #64748b;
  min-height: 200px;
  align-self: stretch;
}

/* Plan Move Section Styles */
.plan-move-section {
  padding: 4rem 0;
  background: #ffffff;
}

.plan-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.plan-header {
  text-align: center;
  margin-bottom: 3rem;
}

.plan-heading {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1e3a8a;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.plan-intro {
  font-size: 1.1rem;
  color: #6b7280;
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto;
}

.plan-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.plan-card {
  display: flex;
  gap: 1.5rem;
  padding: 1.5rem;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.plan-card:hover {
  background: #f8fafc;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.plan-icon {
  width: 48px;
  height: 48px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.plan-icon .icon-svg {
  width: 100%;
  height: 100%;
}

.plan-content {
  flex: 1;
}

.plan-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.75rem;
  line-height: 1.3;
}

.plan-description {
  font-size: 0.95rem;
  color: #6b7280;
  line-height: 1.6;
}

.plan-link {
  color: #3b82f6;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

.plan-link:hover {
  color: #1e40af;
  text-decoration: underline;
}

/* Resources Section Styles */
.resources-section {
  padding: 4rem 0;
  background: #ffffff;
}

.resources-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.resources-header {
  text-align: center;
  margin-bottom: 3rem;
}

.resources-heading {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1e3a8a;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.resources-subtitle {
  font-size: 1.1rem;
  color: #6b7280;
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto;
}

.resources-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.resource-card {
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: all 0.3s ease;
}

.resource-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.resource-image {
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.image-placeholder {
  width: 100%;
  height: 100%;
  position: relative;
}

/* Home Maintenance Scene */
.home-maintenance {
  background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%);
}

.wall-scene {
  position: relative;
  width: 100%;
  height: 100%;
}

.wall {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #f8fafc;
  border: 2px solid #e2e8f0;
}

.window {
  position: absolute;
  top: 20%;
  right: 15%;
  width: 30%;
  height: 25%;
  background: #87ceeb;
  border: 2px solid #64748b;
  border-radius: 4px;
}

.person {
  position: absolute;
  bottom: 20%;
  left: 20%;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.person-body {
  width: 20px;
  height: 30px;
  background: #1e40af;
  border-radius: 50% 50% 0 0;
}

.person-head {
  width: 15px;
  height: 15px;
  background: #fbbf24;
  border-radius: 50%;
}

.wallpaper-roll {
  width: 25px;
  height: 8px;
  background: #fbbf24;
  border-radius: 4px;
  border: 1px solid #d97706;
}

/* Washington Scene */
.washington-scene {
  background: linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #60a5fa 100%);
}

.landscape {
  position: relative;
  width: 100%;
  height: 100%;
}

.mountains {
  position: absolute;
  bottom: 30%;
  left: 0;
  width: 100%;
  height: 40%;
  background: #475569;
  clip-path: polygon(
    0 100%,
    20% 60%,
    40% 80%,
    60% 40%,
    80% 70%,
    100% 50%,
    100% 100%
  );
}

.water {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 30%;
  background: #0ea5e9;
}

.city {
  position: absolute;
  bottom: 30%;
  left: 20%;
  width: 60%;
  height: 25%;
}

.buildings {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #374151;
  clip-path: polygon(
    0 100%,
    10% 80%,
    20% 90%,
    30% 70%,
    40% 85%,
    50% 60%,
    60% 80%,
    70% 50%,
    80% 75%,
    90% 65%,
    100% 90%,
    100% 100%
  );
}

.lights {
  position: absolute;
  top: 20%;
  left: 10%;
  width: 80%;
  height: 60%;
  background: radial-gradient(circle at 20% 30%, #fbbf24 2px, transparent 2px),
    radial-gradient(circle at 60% 40%, #fbbf24 2px, transparent 2px),
    radial-gradient(circle at 80% 20%, #fbbf24 2px, transparent 2px);
}

.trees {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 30%;
}

.trees::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 10%;
  width: 20px;
  height: 30px;
  background: #16a34a;
  border-radius: 50% 50% 0 0;
}

.trees::after {
  content: "";
  position: absolute;
  bottom: 0;
  right: 20%;
  width: 25px;
  height: 35px;
  background: #15803d;
  border-radius: 50% 50% 0 0;
}

/* Montana Scene */
.montana-scene {
  background: linear-gradient(135deg, #87ceeb 0%, #98fb98 50%, #f0e68c 100%);
}

.hills {
  position: absolute;
  bottom: 20%;
  left: 0;
  width: 100%;
  height: 30%;
  background: #22c55e;
  clip-path: polygon(0 100%, 30% 70%, 50% 85%, 70% 60%, 100% 80%, 100% 100%);
}

.river {
  position: absolute;
  bottom: 0;
  left: 20%;
  width: 60%;
  height: 20%;
  background: #0ea5e9;
  border-radius: 0 0 50% 50%;
}

.city-valley {
  position: absolute;
  bottom: 20%;
  left: 30%;
  width: 40%;
  height: 15%;
}

.buildings-small {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #64748b;
  clip-path: polygon(
    0 100%,
    20% 80%,
    40% 90%,
    60% 70%,
    80% 85%,
    100% 75%,
    100% 100%
  );
}

.mountains-distant {
  position: absolute;
  bottom: 50%;
  left: 0;
  width: 100%;
  height: 30%;
  background: #475569;
  clip-path: polygon(0 100%, 25% 70%, 50% 85%, 75% 60%, 100% 80%, 100% 100%);
}

.resource-content {
  padding: 1.5rem;
}

.category-tags {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}

.tag {
  background: #eff6ff;
  color: #3b82f6;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.resource-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.75rem;
  line-height: 1.3;
}

.resource-separator {
  width: 40px;
  height: 3px;
  background: #3b82f6;
  margin-bottom: 1rem;
  border-radius: 2px;
}

.resource-description {
  font-size: 0.95rem;
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.resource-link {
  color: #3b82f6;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 600;
  transition: color 0.3s ease;
}

.resource-link:hover {
  color: #1e40af;
}

@media (max-width: 480px) {
  .hero-banner {
    height: 350px;
  }

  .main-heading {
    font-size: 2rem;
  }

  .subtitle {
    font-size: 1rem;
  }

  .cta-button {
    padding: 0.875rem 1.5rem;
    font-size: 1rem;
  }
}
</style>
