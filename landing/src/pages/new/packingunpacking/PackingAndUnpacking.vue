<template>
  <q-page>
    <!-- Hero Banner Section -->
    <section class="hero-banner">
      <div class="banner-background">
        <!-- Suburban Neighborhood Illustration -->
        <div class="neighborhood-illustration">
          <svg viewBox="0 0 1200 400" class="neighborhood-svg">
            <!-- Houses -->
            <g class="houses">
              <!-- House 1 -->
              <rect
                x="50"
                y="200"
                width="80"
                height="100"
                fill="none"
                stroke="#87CEEB"
                stroke-width="2"
              />
              <polygon
                points="50,200 90,160 130,200"
                fill="none"
                stroke="#87CEEB"
                stroke-width="2"
              />
              <rect
                x="65"
                y="210"
                width="15"
                height="20"
                fill="none"
                stroke="#87CEEB"
                stroke-width="1"
              />
              <rect
                x="95"
                y="210"
                width="15"
                height="20"
                fill="none"
                stroke="#87CEEB"
                stroke-width="1"
              />
              <rect
                x="75"
                y="240"
                width="20"
                height="30"
                fill="none"
                stroke="#87CEEB"
                stroke-width="1"
              />

              <!-- House 2 -->
              <rect
                x="160"
                y="180"
                width="70"
                height="120"
                fill="none"
                stroke="#87CEEB"
                stroke-width="2"
              />
              <polygon
                points="160,180 195,140 230,180"
                fill="none"
                stroke="#87CEEB"
                stroke-width="2"
              />
              <rect
                x="175"
                y="190"
                width="12"
                height="15"
                fill="none"
                stroke="#87CEEB"
                stroke-width="1"
              />
              <rect
                x="200"
                y="190"
                width="12"
                height="15"
                fill="none"
                stroke="#87CEEB"
                stroke-width="1"
              />
              <rect
                x="180"
                y="220"
                width="15"
                height="25"
                fill="none"
                stroke="#87CEEB"
                stroke-width="1"
              />

              <!-- House 3 -->
              <rect
                x="260"
                y="220"
                width="60"
                height="80"
                fill="none"
                stroke="#87CEEB"
                stroke-width="2"
              />
              <polygon
                points="260,220 290,190 320,220"
                fill="none"
                stroke="#87CEEB"
                stroke-width="2"
              />
              <rect
                x="270"
                y="230"
                width="10"
                height="12"
                fill="none"
                stroke="#87CEEB"
                stroke-width="1"
              />
              <rect
                x="290"
                y="230"
                width="10"
                height="12"
                fill="none"
                stroke="#87CEEB"
                stroke-width="1"
              />

              <!-- House 4 -->
              <rect
                x="350"
                y="200"
                width="75"
                height="100"
                fill="none"
                stroke="#87CEEB"
                stroke-width="2"
              />
              <polygon
                points="350,200 387.5,160 425,200"
                fill="none"
                stroke="#87CEEB"
                stroke-width="2"
              />
              <rect
                x="365"
                y="210"
                width="13"
                height="18"
                fill="none"
                stroke="#87CEEB"
                stroke-width="1"
              />
              <rect
                x="390"
                y="210"
                width="13"
                height="18"
                fill="none"
                stroke="#87CEEB"
                stroke-width="1"
              />
              <rect
                x="370"
                y="240"
                width="18"
                height="28"
                fill="none"
                stroke="#87CEEB"
                stroke-width="1"
              />
            </g>

            <!-- Trees -->
            <g class="trees">
              <circle
                cx="120"
                cy="280"
                r="15"
                fill="none"
                stroke="#87CEEB"
                stroke-width="2"
              />
              <rect
                x="118"
                y="295"
                width="4"
                height="20"
                fill="none"
                stroke="#87CEEB"
                stroke-width="1"
              />

              <circle
                cx="200"
                cy="290"
                r="12"
                fill="none"
                stroke="#87CEEB"
                stroke-width="2"
              />
              <rect
                x="198"
                y="302"
                width="3"
                height="15"
                fill="none"
                stroke="#87CEEB"
                stroke-width="1"
              />

              <circle
                cx="320"
                cy="285"
                r="18"
                fill="none"
                stroke="#87CEEB"
                stroke-width="2"
              />
              <rect
                x="317"
                y="303"
                width="5"
                height="22"
                fill="none"
                stroke="#87CEEB"
                stroke-width="1"
              />

              <circle
                cx="400"
                cy="280"
                r="14"
                fill="none"
                stroke="#87CEEB"
                stroke-width="2"
              />
              <rect
                x="398"
                y="294"
                width="4"
                height="18"
                fill="none"
                stroke="#87CEEB"
                stroke-width="1"
              />
            </g>

            <!-- Road -->
            <g class="road">
              <rect
                x="0"
                y="320"
                width="1200"
                height="20"
                fill="none"
                stroke="#87CEEB"
                stroke-width="2"
              />
              <line
                x1="0"
                y1="330"
                x2="1200"
                y2="330"
                stroke="#87CEEB"
                stroke-width="1"
                stroke-dasharray="5,5"
              />
            </g>

            <!-- Moving Truck -->
            <g class="moving-truck">
              <rect
                x="500"
                y="280"
                width="80"
                height="40"
                fill="none"
                stroke="#87CEEB"
                stroke-width="2"
              />
              <rect
                x="520"
                y="285"
                width="20"
                height="30"
                fill="none"
                stroke="#87CEEB"
                stroke-width="1"
              />
              <rect
                x="550"
                y="285"
                width="20"
                height="30"
                fill="none"
                stroke="#87CEEB"
                stroke-width="1"
              />
              <circle
                cx="530"
                cy="320"
                r="5"
                fill="none"
                stroke="#87CEEB"
                stroke-width="1"
              />
              <circle
                cx="570"
                cy="320"
                r="5"
                fill="none"
                stroke="#87CEEB"
                stroke-width="1"
              />
            </g>

            <!-- Car -->
            <g class="car">
              <rect
                x="650"
                y="290"
                width="40"
                height="20"
                fill="none"
                stroke="#87CEEB"
                stroke-width="2"
              />
              <rect
                x="655"
                y="295"
                width="8"
                height="10"
                fill="none"
                stroke="#87CEEB"
                stroke-width="1"
              />
              <rect
                x="675"
                y="295"
                width="8"
                height="10"
                fill="none"
                stroke="#87CEEB"
                stroke-width="1"
              />
              <circle
                cx="660"
                cy="310"
                r="3"
                fill="none"
                stroke="#87CEEB"
                stroke-width="1"
              />
              <circle
                cx="680"
                cy="310"
                r="3"
                fill="none"
                stroke="#87CEEB"
                stroke-width="1"
              />
            </g>
          </svg>
        </div>
      </div>

      <!-- Content Overlay -->
      <div class="banner-content">
        <div class="content-wrapper">
          <h1 class="main-heading">Packing Services From United Van Lines</h1>
          <p class="subtitle">
            Request a quote and see how we make moving easy with our
            professional packing services!
          </p>

          <div class="cta-section">
            <button class="cta-button">GET A QUOTE</button>
          </div>
        </div>
      </div>
    </section>

    <!-- Breadcrumbs Section -->
    <section class="breadcrumbs-section">
      <div class="breadcrumbs-container">
        <p class="breadcrumbs-text">
          HOME / MOVING-SERVICES / PACKING AND UNPACKING
        </p>
      </div>
    </section>

    <!-- Main Content Section -->
    <section class="main-content-section">
      <div class="main-content-container">
        <h2 class="section-heading">Professional Packing and Moving Options</h2>

        <div class="intro-paragraph">
          <p>
            Packing is one of the most important parts of the moving process. As
            America's #1 Mover®, United Van Lines offers customizable packing
            and unpacking services to make your move as stress-free as possible.
            Our professional packers are trained to handle everything from
            everyday household items to fragile and valuable possessions.
            Whether you need full-service packing, partial packing, or just help
            with specific items, we have the expertise and experience to ensure
            your belongings are properly protected during transit. Our packing
            services include specialized handling for delicate items, custom
            crating for unique pieces, and comprehensive unpacking services to
            help you settle into your new home quickly and efficiently.
          </p>
        </div>

        <!-- Service Options Grid -->
        <div class="service-options-grid">
          <!-- Left Column -->
          <div class="service-column">
            <!-- Customized Packing Plan -->
            <div class="service-option">
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
                  <line
                    x1="12"
                    y1="4"
                    x2="12"
                    y2="20"
                    stroke="#3b82f6"
                    stroke-width="2"
                  />
                  <polyline
                    points="8,8 12,4 16,8"
                    fill="none"
                    stroke="#3b82f6"
                    stroke-width="2"
                  />
                </svg>
              </div>
              <h3 class="service-title">Customized Packing Plan</h3>
              <p class="service-description">
                Choose from full or partial packing and unpacking services
                tailored to your specific needs. Our professional packers will
                work with you to create a plan that fits your timeline and
                budget.
              </p>
            </div>

            <!-- DIY Packing Plan -->
            <div class="service-option">
              <div class="service-icon">
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
                    height="4"
                    fill="none"
                    stroke="#3b82f6"
                    stroke-width="2"
                  />
                  <rect
                    x="14"
                    y="16"
                    width="4"
                    height="4"
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
                  <rect
                    x="10"
                    y="6"
                    width="4"
                    height="2"
                    fill="none"
                    stroke="#3b82f6"
                    stroke-width="2"
                  />
                </svg>
              </div>
              <h3 class="service-title">DIY Packing Plan</h3>
              <p class="service-description">
                Pack your own items while we handle furniture wrapping and
                loading/unloading. This option gives you control over your
                packing while still providing professional assistance for the
                heavy lifting.
              </p>
            </div>

            <!-- Packing Checklists -->
            <div class="service-option">
              <div class="service-icon">
                <svg viewBox="0 0 24 24" class="icon-svg">
                  <rect
                    x="4"
                    y="4"
                    width="16"
                    height="18"
                    fill="none"
                    stroke="#3b82f6"
                    stroke-width="2"
                  />
                  <line
                    x1="8"
                    y1="8"
                    x2="16"
                    y2="8"
                    stroke="#3b82f6"
                    stroke-width="2"
                  />
                  <line
                    x1="8"
                    y1="12"
                    x2="16"
                    y2="12"
                    stroke="#3b82f6"
                    stroke-width="2"
                  />
                  <line
                    x1="8"
                    y1="16"
                    x2="16"
                    y2="16"
                    stroke="#3b82f6"
                    stroke-width="2"
                  />
                  <polyline
                    points="6,8 8,10 10,8"
                    fill="none"
                    stroke="#3b82f6"
                    stroke-width="2"
                  />
                  <polyline
                    points="6,12 8,14 10,12"
                    fill="none"
                    stroke="#3b82f6"
                    stroke-width="2"
                  />
                  <polyline
                    points="6,16 8,18 10,16"
                    fill="none"
                    stroke="#3b82f6"
                    stroke-width="2"
                  />
                </svg>
              </div>
              <h3 class="service-title">Packing Checklists</h3>
              <p class="service-description">
                Stay organized with our comprehensive packing checklists. From
                organizing supplies to preparing for moving day, our
                <a href="#" class="service-link"
                  >easy-to-follow packing checklists</a
                >
                will help you stay on track.
              </p>
            </div>
          </div>

          <!-- Right Column -->
          <div class="service-column">
            <!-- Full-Service Packing Plan -->
            <div class="service-option">
              <div class="service-icon">
                <svg viewBox="0 0 24 24" class="icon-svg">
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    fill="none"
                    stroke="#3b82f6"
                    stroke-width="2"
                  />
                  <rect
                    x="6"
                    y="8"
                    width="12"
                    height="8"
                    fill="none"
                    stroke="#3b82f6"
                    stroke-width="2"
                  />
                  <line
                    x1="8"
                    y1="12"
                    x2="16"
                    y2="12"
                    stroke="#3b82f6"
                    stroke-width="2"
                  />
                  <line
                    x1="8"
                    y1="16"
                    x2="16"
                    y2="16"
                    stroke="#3b82f6"
                    stroke-width="2"
                  />
                  <rect
                    x="4"
                    y="18"
                    width="16"
                    height="4"
                    fill="none"
                    stroke="#3b82f6"
                    stroke-width="2"
                  />
                </svg>
              </div>
              <h3 class="service-title">Full-Service Packing Plan</h3>
              <p class="service-description">
                Let us handle everything from start to finish. Our
                <a href="#" class="service-link">full packing services</a>
                include professional packing, unpacking, and setup, allowing you
                to focus on other aspects of your move.
              </p>
            </div>

            <!-- Custom Crating -->
            <div class="service-option">
              <div class="service-icon">
                <svg viewBox="0 0 24 24" class="icon-svg">
                  <rect
                    x="2"
                    y="4"
                    width="20"
                    height="16"
                    fill="none"
                    stroke="#3b82f6"
                    stroke-width="2"
                  />
                  <line
                    x1="2"
                    y1="8"
                    x2="22"
                    y2="8"
                    stroke="#3b82f6"
                    stroke-width="2"
                  />
                  <line
                    x1="2"
                    y1="12"
                    x2="22"
                    y2="12"
                    stroke="#3b82f6"
                    stroke-width="2"
                  />
                  <line
                    x1="2"
                    y1="16"
                    x2="22"
                    y2="16"
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
                    stroke-width="1"
                  />
                  <rect
                    x="14"
                    y="6"
                    width="4"
                    height="2"
                    fill="none"
                    stroke="#3b82f6"
                    stroke-width="1"
                  />
                </svg>
              </div>
              <h3 class="service-title">Custom Crating</h3>
              <p class="service-description">
                Protect your most valuable and fragile items with our custom
                crating services. We specialize in creating protective crates
                for mirrors, artwork, antiques, and other specialty items that
                require extra care.
              </p>
            </div>

            <!-- Packing Videos -->
            <div class="service-option">
              <div class="service-icon">
                <svg viewBox="0 0 24 24" class="icon-svg">
                  <rect
                    x="2"
                    y="4"
                    width="20"
                    height="16"
                    fill="none"
                    stroke="#3b82f6"
                    stroke-width="2"
                  />
                  <polygon
                    points="8,8 16,12 8,16"
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
                </svg>
              </div>
              <h3 class="service-title">Packing Videos</h3>
              <p class="service-description">
                Learn how to pack each room effectively with our comprehensive
                video tutorials. Our
                <a href="#" class="service-link">video library</a> provides
                step-by-step guidance for packing everything from kitchen items
                to electronics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Packing Supplies Section -->
    <section class="packing-supplies-section">
      <div class="packing-supplies-container">
        <div class="packing-supplies-layout">
          <!-- Left Column - Kitchen Scene -->
          <div class="kitchen-scene-column">
            <div class="kitchen-packing-scene">
              <!-- Kitchen Background -->
              <div class="kitchen-background">
                <div class="dark-cabinets"></div>
                <div class="stainless-refrigerator"></div>
                <div class="stove-range-hood"></div>
                <div class="subway-tile-backsplash"></div>
                <div class="wooden-island"></div>
                <div class="window-blinds"></div>
              </div>

              <!-- Overhead Light Fixture -->
              <div class="light-fixture">
                <div class="light-cord"></div>
                <div class="light-base"></div>
                <div class="lamp-shade-1"></div>
                <div class="lamp-shade-2"></div>
              </div>

              <!-- Moving Box -->
              <div class="united-moving-box">
                <div class="box-body"></div>
                <div class="united-logo-text">United</div>
              </div>

              <!-- Plates and Bowls -->
              <div class="kitchen-items">
                <div class="plate-stack">
                  <div class="plate-1"></div>
                  <div class="plate-2"></div>
                  <div class="plate-3"></div>
                </div>
                <div class="bowl-stack">
                  <div class="bowl-1"></div>
                  <div class="bowl-2"></div>
                  <div class="bowl-3"></div>
                </div>
              </div>

              <!-- People -->
              <div class="packing-people">
                <!-- Man -->
                <div class="man">
                  <div class="man-body"></div>
                  <div class="man-head"></div>
                  <div class="dark-grey-shirt"></div>
                  <div class="white-mug"></div>
                  <div class="man-arm"></div>
                </div>

                <!-- Woman -->
                <div class="woman">
                  <div class="woman-body"></div>
                  <div class="woman-head"></div>
                  <div class="green-shirt"></div>
                  <div class="blue-jeans"></div>
                  <div class="wrapping-paper"></div>
                  <div class="woman-arm"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Column - Content -->
          <div class="packing-content-column">
            <h2 class="packing-supplies-heading">
              What Packing Supplies Do I Need?
            </h2>

            <p class="packing-supplies-intro">
              When planning a move, one of the most important details that could
              get overlooked is making sure you have adequate moving supplies.
              Packing with durable moving boxes, padding, wrap and tape helps
              you to prepare your valuables for your move. Use our moving supply
              checklist below to start packing today:
            </p>

            <div class="supplies-checklist">
              <div class="checklist-column">
                <div class="checklist-item">
                  <div class="checkbox"></div>
                  <span class="item-text">Moving Boxes</span>
                </div>
                <div class="checklist-item">
                  <div class="checkbox"></div>
                  <span class="item-text">Glass Pack Kit</span>
                </div>
                <div class="checklist-item">
                  <div class="checkbox"></div>
                  <span class="item-text">Wrapping Paper</span>
                </div>
                <div class="checklist-item">
                  <div class="checkbox"></div>
                  <span class="item-text">Stretch Plastic Wrap</span>
                </div>
                <div class="checklist-item">
                  <div class="checkbox"></div>
                  <span class="item-text">Permanent Markers</span>
                </div>
                <div class="checklist-item">
                  <div class="checkbox"></div>
                  <span class="item-text">Box Cutter</span>
                </div>
              </div>

              <div class="checklist-column">
                <div class="checklist-item">
                  <div class="checkbox"></div>
                  <span class="item-text">Dish Pack Kit</span>
                </div>
                <div class="checklist-item">
                  <div class="checkbox"></div>
                  <span class="item-text">Unprinted News</span>
                </div>
                <div class="checklist-item">
                  <div class="checkbox"></div>
                  <span class="item-text">Bubble Wrap</span>
                </div>
                <div class="checklist-item">
                  <div class="checkbox"></div>
                  <span class="item-text">Furniture Pads</span>
                </div>
                <div class="checklist-item">
                  <div class="checkbox"></div>
                  <span class="item-text">Box Tape Dispenser</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Moving Resources Section -->
    <section class="moving-resources-section">
      <div class="moving-resources-container">
        <h2 class="moving-resources-heading">Moving Resources</h2>

        <p class="moving-resources-intro">
          Need help packing for a move? Learn packing techniques developed by
          professionals and get helpful advice on streamlining the packing
          process with our
          <a href="#" class="resources-link">packing tips and guides</a>.
        </p>

        <div class="resources-cards-grid">
          <!-- Card 1: Home Maintenance -->
          <div class="resource-card">
            <div class="card-image">
              <div class="home-maintenance-scene">
                <!-- Wall Background -->
                <div class="wall-background"></div>
                <!-- Window -->
                <div class="window-frame">
                  <div class="window-pane"></div>
                  <div class="window-sill"></div>
                </div>
                <!-- Dark Furniture -->
                <div class="dark-furniture"></div>
                <!-- Man with Picture -->
                <div class="man-with-picture">
                  <div class="man-body-blue"></div>
                  <div class="man-head"></div>
                  <div class="light-blue-shirt"></div>
                  <div class="man-arms"></div>
                  <div class="framed-picture">
                    <div class="picture-frame"></div>
                    <div class="picture-content"></div>
                  </div>
                </div>
              </div>
            </div>

            <div class="card-content">
              <div class="card-categories">
                <span class="category-tag">HOME MAINTENANCE</span>
                <span class="subcategory-tag">SETTLING IN</span>
              </div>

              <h3 class="card-title">
                Your Walls Are a Blank Slate - Now What?
              </h3>

              <div class="card-divider"></div>

              <p class="card-description">
                Blank walls in a room can be intimidating; however, they're also
                an opportunity to get your creative juices flowing and really
                make your new house feel like home.
              </p>

              <a href="#" class="continue-reading-link">Continue Reading ></a>
            </div>
          </div>

          <!-- Card 2: Washington Guide -->
          <div class="resource-card">
            <div class="card-image">
              <div class="washington-scene">
                <!-- Sky -->
                <div class="sky-background"></div>
                <!-- Clouds -->
                <div class="clouds">
                  <div class="cloud-1"></div>
                  <div class="cloud-2"></div>
                  <div class="cloud-3"></div>
                </div>
                <!-- Water Body -->
                <div class="water-body"></div>
                <!-- Hills and Mountains -->
                <div class="hills-mountains">
                  <div class="mountain-1"></div>
                  <div class="mountain-2"></div>
                  <div class="mountain-3"></div>
                </div>
                <!-- Trees -->
                <div class="trees">
                  <div class="tree-group-1"></div>
                  <div class="tree-group-2"></div>
                  <div class="tree-group-3"></div>
                </div>
                <!-- City Buildings -->
                <div class="city-buildings">
                  <div class="building-row-1">
                    <div class="building-1"></div>
                    <div class="building-2"></div>
                    <div class="building-3"></div>
                  </div>
                  <div class="building-row-2">
                    <div class="building-4"></div>
                    <div class="building-5"></div>
                    <div class="building-6"></div>
                  </div>
                  <div class="building-row-3">
                    <div class="building-7"></div>
                    <div class="building-8"></div>
                    <div class="building-9"></div>
                  </div>
                </div>
              </div>
            </div>

            <div class="card-content">
              <div class="card-categories">
                <span class="category-tag">CITY AND STATE GUIDES</span>
                <span class="subcategory-tag">STATE GUIDES</span>
              </div>

              <h3 class="card-title">
                Your Ultimate Guide to Moving to Washington
              </h3>

              <div class="card-divider"></div>

              <p class="card-description">
                Wondering if Washington is for you? Whether you're moving for a
                job opportunity or for family, this guide has all insights you
                need before moving to the Evergreen State.
              </p>

              <a href="#" class="continue-reading-link">Continue Reading ></a>
            </div>
          </div>

          <!-- Card 3: Montana Guide -->
          <div class="resource-card">
            <div class="card-image">
              <div class="montana-scene">
                <!-- Sky -->
                <div class="sky-background-montana"></div>
                <!-- Plains -->
                <div class="plains-background"></div>
                <!-- River -->
                <div class="river-winding"></div>
                <!-- Mountains -->
                <div class="distant-mountains">
                  <div class="mountain-peak-1"></div>
                  <div class="mountain-peak-2"></div>
                  <div class="mountain-peak-3"></div>
                  <div class="mountain-peak-4"></div>
                </div>
                <!-- City Buildings -->
                <div class="montana-city">
                  <div class="city-cluster-1">
                    <div class="building-m1"></div>
                    <div class="building-m2"></div>
                    <div class="building-m3"></div>
                  </div>
                  <div class="city-cluster-2">
                    <div class="building-m4"></div>
                    <div class="building-m5"></div>
                  </div>
                  <div class="city-cluster-3">
                    <div class="building-m6"></div>
                    <div class="building-m7"></div>
                    <div class="building-m8"></div>
                  </div>
                </div>
                <!-- Landscape Elements -->
                <div class="landscape-elements">
                  <div class="grass-patches"></div>
                  <div class="scattered-trees"></div>
                </div>
              </div>
            </div>

            <div class="card-content">
              <div class="card-categories">
                <span class="category-tag">CITY AND STATE GUIDES</span>
                <span class="subcategory-tag">STATE GUIDES</span>
              </div>

              <h3 class="card-title">
                Your Ultimate Guide to Moving to Montana
              </h3>

              <div class="card-divider"></div>

              <p class="card-description">
                Set where the Great Plains give way to the jagged Rockies and
                home to two of the country's most iconic national parks -
                Yellowstone and Glacier - Montana is filled with natural wonders
                and outdoor adventures.
              </p>

              <a href="#" class="continue-reading-link">Continue Reading ></a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Moving and Packing Services Section -->
    <section class="moving-packing-services-section">
      <div class="moving-packing-services-container">
        <h2 class="moving-packing-services-heading">
          Moving and Packing Services from United Van Lines
        </h2>

        <p class="moving-packing-services-intro">
          United Van Lines offers comprehensive moving, packing, and storage
          services to make your relocation as smooth as possible. Our
          <a href="#" class="services-link">full-service moving packages</a>
          include customizable packing and unpacking services, along with add-on
          services like electronics packing and
          <a href="#" class="services-link"
            >several moving protection options</a
          >
          to ensure your belongings are safe throughout the entire moving
          process.
        </p>

        <div class="services-columns-grid">
          <!-- Left Column: Full Service Movers -->
          <div class="service-column">
            <div class="service-icon">
              <svg viewBox="0 0 24 24" class="icon-svg">
                <!-- Moving Truck -->
                <rect
                  x="2"
                  y="8"
                  width="16"
                  height="10"
                  fill="none"
                  stroke="#3b82f6"
                  stroke-width="2"
                />
                <rect
                  x="4"
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
                  y="6"
                  width="8"
                  height="4"
                  fill="none"
                  stroke="#3b82f6"
                  stroke-width="2"
                />
                <circle
                  cx="6"
                  cy="18"
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
                <line
                  x1="8"
                  y1="8"
                  x2="8"
                  y2="12"
                  stroke="#3b82f6"
                  stroke-width="1"
                />
                <line
                  x1="16"
                  y1="8"
                  x2="16"
                  y2="12"
                  stroke="#3b82f6"
                  stroke-width="1"
                />
              </svg>
            </div>

            <h3 class="service-column-title">FULL SERVICE MOVERS</h3>

            <p class="service-column-description">
              United can handle all aspects of your move, from packing and
              unpacking to transport and delivery. We offer flexible service
              add-ons and specialized services to meet your specific moving
              needs, ensuring a stress-free relocation experience.
            </p>

            <a href="#" class="service-cta-link">GET A QUOTE ></a>
          </div>

          <!-- Right Column: Long-Distance Movers -->
          <div class="service-column">
            <div class="service-icon">
              <svg viewBox="0 0 24 24" class="icon-svg">
                <!-- Map Pins with Route -->
                <circle
                  cx="6"
                  cy="8"
                  r="2"
                  fill="none"
                  stroke="#3b82f6"
                  stroke-width="2"
                />
                <circle
                  cx="18"
                  cy="16"
                  r="2"
                  fill="none"
                  stroke="#3b82f6"
                  stroke-width="2"
                />
                <line
                  x1="6"
                  y1="8"
                  x2="18"
                  y2="16"
                  stroke="#3b82f6"
                  stroke-width="2"
                  stroke-dasharray="3,3"
                />
                <line
                  x1="6"
                  y1="6"
                  x2="6"
                  y2="12"
                  stroke="#3b82f6"
                  stroke-width="1"
                />
                <line
                  x1="18"
                  y1="14"
                  x2="18"
                  y2="20"
                  stroke="#3b82f6"
                  stroke-width="1"
                />
              </svg>
            </div>

            <h3 class="service-column-title">LONG-DISTANCE MOVERS NEAR YOU</h3>

            <p class="service-column-description">
              With our nationwide agency network, United provides full-service,
              residential moving services for long-distance customers. Our
              experienced team ensures your belongings are handled with care
              throughout your cross-country or interstate move.
            </p>

            <a href="#" class="service-cta-link">GET A QUOTE ></a>
          </div>
        </div>
      </div>
    </section>

    <!-- Quote Banner Section -->
    <section class="quote-banner-section">
      <div class="quote-banner-container">
        <div class="quote-banner-content">
          <h2 class="quote-banner-heading">Get a Packing & Unpacking Quote</h2>
          <button class="quote-banner-cta">GET A QUOTE</button>
        </div>
      </div>
    </section>

    <AppFooter />
  </q-page>
</template>

<script>
import AppFooter from "../../../components/Footer.vue";

export default {
  name: "PackingAndUnpacking",
  components: {
    AppFooter,
  },
  data() {
    return {
      // Component data can be added here
    };
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

.neighborhood-illustration {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.3;
}

.neighborhood-svg {
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
  max-width: 600px;
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

/* Breadcrumbs Section */
.breadcrumbs-section {
  background: #ffffff;
  border-bottom: 1px solid #e2e8f0;
}

.breadcrumbs-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
}

.breadcrumbs-text {
  color: #64748b;
  font-size: 0.9rem;
  margin: 0;
}

/* Main Content Section */
.main-content-section {
  padding: 4rem 0;
  background: #ffffff;
}

.main-content-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section-heading {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1e3a8a;
  text-align: center;
  margin-bottom: 2rem;
  line-height: 1.2;
}

.intro-paragraph {
  max-width: 800px;
  margin: 0 auto 3rem auto;
  text-align: center;
}

.intro-paragraph p {
  font-size: 1.1rem;
  color: #374151;
  line-height: 1.7;
  margin: 0;
}

/* Service Options Grid */
.service-options-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  max-width: 1000px;
  margin: 0 auto;
}

.service-column {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.service-option {
  background: #ffffff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.service-option:hover {
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
  font-size: 0.95rem;
  color: #6b7280;
  line-height: 1.6;
  margin: 0;
}

.service-link {
  color: #3b82f6;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

.service-link:hover {
  color: #1e40af;
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

  .section-heading {
    font-size: 2rem;
  }

  .intro-paragraph p {
    font-size: 1rem;
  }

  .service-options-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .service-option {
    padding: 1.5rem;
  }
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

  .section-heading {
    font-size: 1.75rem;
  }

  .service-option {
    padding: 1.25rem;
  }
}

/* Packing Supplies Section Styles */
.packing-supplies-section {
  padding: 4rem 0;
  background: #f8fafc;
}

.packing-supplies-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.packing-supplies-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

/* Kitchen Scene Column */
.kitchen-scene-column {
  position: relative;
  height: 500px;
}

.kitchen-packing-scene {
  position: relative;
  width: 100%;
  height: 100%;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

/* Kitchen Background */
.kitchen-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.dark-cabinets {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 40%;
  background: #2d3748;
  border-bottom: 2px solid #4a5568;
}

.stainless-refrigerator {
  position: absolute;
  top: 10%;
  left: 10%;
  width: 25%;
  height: 30%;
  background: linear-gradient(45deg, #e2e8f0 0%, #cbd5e0 50%, #a0aec0 100%);
  border-radius: 4px;
  border: 2px solid #718096;
}

.stove-range-hood {
  position: absolute;
  top: 5%;
  right: 15%;
  width: 30%;
  height: 25%;
  background: #2d3748;
  border-radius: 4px;
}

.subway-tile-backsplash {
  position: absolute;
  top: 40%;
  left: 0;
  width: 100%;
  height: 20%;
  background: repeating-linear-gradient(
    90deg,
    #ffffff 0px,
    #ffffff 40px,
    #e2e8f0 40px,
    #e2e8f0 42px
  );
  border-bottom: 2px solid #cbd5e0;
}

.wooden-island {
  position: absolute;
  bottom: 20%;
  left: 15%;
  width: 70%;
  height: 15%;
  background: linear-gradient(45deg, #8b4513 0%, #a0522d 50%, #cd853f 100%);
  border-radius: 8px;
  border: 2px solid #654321;
}

.window-blinds {
  position: absolute;
  top: 15%;
  right: 5%;
  width: 20%;
  height: 25%;
  background: repeating-linear-gradient(
    0deg,
    #ffffff 0px,
    #ffffff 8px,
    #e2e8f0 8px,
    #e2e8f0 10px
  );
  border: 1px solid #cbd5e0;
}

/* Light Fixture */
.light-fixture {
  position: absolute;
  top: 5%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
}

.light-cord {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  height: 20px;
  background: #2d3748;
}

.light-base {
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 8px;
  background: #2d3748;
  border-radius: 4px;
}

.lamp-shade-1 {
  position: absolute;
  top: 28px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-bottom: 25px solid #ffffff;
  border-radius: 2px;
}

.lamp-shade-2 {
  position: absolute;
  top: 28px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 12px solid transparent;
  border-right: 12px solid transparent;
  border-bottom: 20px solid #ffffff;
  border-radius: 2px;
}

/* Moving Box */
.united-moving-box {
  position: absolute;
  bottom: 35%;
  left: 20%;
  z-index: 5;
}

.box-body {
  width: 60px;
  height: 40px;
  background: #f7fafc;
  border: 2px solid #e2e8f0;
  border-radius: 4px;
}

.united-logo-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 8px;
  font-weight: 600;
  color: #3b82f6;
  text-align: center;
}

/* Kitchen Items */
.kitchen-items {
  position: absolute;
  bottom: 35%;
  right: 25%;
  z-index: 5;
}

.plate-stack {
  position: relative;
  margin-bottom: 10px;
}

.plate-1,
.plate-2,
.plate-3 {
  position: absolute;
  width: 25px;
  height: 25px;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 50%;
}

.plate-1 {
  top: 0;
}
.plate-2 {
  top: 2px;
}
.plate-3 {
  top: 4px;
}

.bowl-stack {
  position: relative;
  margin-left: 15px;
}

.bowl-1,
.bowl-2,
.bowl-3 {
  position: absolute;
  width: 20px;
  height: 12px;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
}

.bowl-1 {
  top: 0;
}
.bowl-2 {
  top: 2px;
}
.bowl-3 {
  top: 4px;
}

/* People */
.packing-people {
  position: absolute;
  bottom: 25%;
  left: 0;
  width: 100%;
  height: 40%;
  z-index: 5;
}

/* Man */
.man {
  position: absolute;
  bottom: 0;
  left: 25%;
}

.man-body {
  width: 20px;
  height: 40px;
  background: #4a5568;
  border-radius: 10px 10px 0 0;
}

.man-head {
  position: absolute;
  top: -15px;
  left: 50%;
  transform: translateX(-50%);
  width: 16px;
  height: 16px;
  background: #fbd38d;
  border-radius: 50%;
}

.dark-grey-shirt {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 25px;
  background: #4a5568;
  border-radius: 10px 10px 0 0;
}

.white-mug {
  position: absolute;
  top: -5px;
  right: -8px;
  width: 8px;
  height: 10px;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 0 0 4px 4px;
}

.man-arm {
  position: absolute;
  top: 5px;
  right: -5px;
  width: 12px;
  height: 3px;
  background: #fbd38d;
  border-radius: 2px;
  transform: rotate(-15deg);
}

/* Woman */
.woman {
  position: absolute;
  bottom: 0;
  right: 30%;
}

.woman-body {
  width: 18px;
  height: 45px;
  background: #4a5568;
  border-radius: 9px 9px 0 0;
}

.woman-head {
  position: absolute;
  top: -15px;
  left: 50%;
  transform: translateX(-50%);
  width: 14px;
  height: 14px;
  background: #fbd38d;
  border-radius: 50%;
}

.green-shirt {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 20px;
  background: #48bb78;
  border-radius: 9px 9px 0 0;
}

.blue-jeans {
  position: absolute;
  top: 20px;
  left: 0;
  width: 100%;
  height: 25px;
  background: #3182ce;
  border-radius: 0 0 9px 9px;
}

.wrapping-paper {
  position: absolute;
  top: -10px;
  left: -15px;
  width: 20px;
  height: 15px;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 2px;
}

.woman-arm {
  position: absolute;
  top: 8px;
  left: -8px;
  width: 15px;
  height: 3px;
  background: #fbd38d;
  border-radius: 2px;
  transform: rotate(15deg);
}

/* Content Column */
.packing-content-column {
  padding: 2rem;
}

.packing-supplies-heading {
  font-size: 2rem;
  font-weight: 700;
  color: #1e3a8a;
  margin-bottom: 1.5rem;
  line-height: 1.3;
}

.packing-supplies-intro {
  font-size: 1.1rem;
  color: #374151;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.supplies-checklist {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.checklist-column {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.checklist-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.checklist-item:hover {
  transform: translateX(4px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.checkbox {
  width: 18px;
  height: 18px;
  border: 2px solid #3b82f6;
  border-radius: 3px;
  background: #ffffff;
  flex-shrink: 0;
  position: relative;
}

.checkbox::after {
  content: "";
  position: absolute;
  top: 2px;
  left: 5px;
  width: 6px;
  height: 10px;
  border: solid #3b82f6;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.checklist-item:hover .checkbox::after {
  opacity: 1;
}

.item-text {
  font-size: 0.95rem;
  color: #374151;
  font-weight: 500;
}

/* Responsive Design for Packing Supplies Section */
@media (max-width: 768px) {
  .packing-supplies-layout {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .kitchen-scene-column {
    height: 300px;
  }

  .packing-supplies-heading {
    font-size: 1.75rem;
  }

  .packing-supplies-intro {
    font-size: 1rem;
  }

  .supplies-checklist {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .checklist-item {
    padding: 0.75rem;
  }
}

@media (max-width: 480px) {
  .kitchen-scene-column {
    height: 250px;
  }

  .packing-supplies-heading {
    font-size: 1.5rem;
  }

  .packing-content-column {
    padding: 1rem;
  }
}

/* Moving Resources Section Styles */
.moving-resources-section {
  padding: 4rem 0;
  background: #ffffff;
}

.moving-resources-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.moving-resources-heading {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1e3a8a;
  text-align: center;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.moving-resources-intro {
  font-size: 1.1rem;
  color: #374151;
  line-height: 1.6;
  text-align: center;
  margin-bottom: 3rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.resources-link {
  color: #3b82f6;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

.resources-link:hover {
  color: #1e40af;
}

.resources-cards-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
}

.resource-card {
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: all 0.3s ease;
}

.resource-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}

.card-image {
  height: 200px;
  position: relative;
  overflow: hidden;
}

/* Card 1: Home Maintenance Scene */
.home-maintenance-scene {
  position: relative;
  width: 100%;
  height: 100%;
  background: #f8fafc;
}

.wall-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #f1f5f9;
}

.window-frame {
  position: absolute;
  top: 15%;
  right: 10%;
  width: 25%;
  height: 20%;
}

.window-pane {
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, #87ceeb 0%, #b0e0e6 50%, #87ceeb 100%);
  border: 2px solid #cbd5e0;
  border-radius: 4px;
}

.window-sill {
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 100%;
  height: 8px;
  background: #a0aec0;
  border-radius: 0 0 4px 4px;
}

.dark-furniture {
  position: absolute;
  bottom: 10%;
  left: 5%;
  width: 20%;
  height: 15%;
  background: #2d3748;
  border-radius: 4px;
}

.man-with-picture {
  position: absolute;
  bottom: 20%;
  left: 30%;
}

.man-body-blue {
  width: 16px;
  height: 35px;
  background: #4a5568;
  border-radius: 8px 8px 0 0;
}

.man-head {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  width: 14px;
  height: 14px;
  background: #fbd38d;
  border-radius: 50%;
}

.light-blue-shirt {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 20px;
  background: #63b3ed;
  border-radius: 8px 8px 0 0;
}

.man-arms {
  position: absolute;
  top: 8px;
  left: -8px;
  width: 32px;
  height: 4px;
  background: #fbd38d;
  border-radius: 2px;
}

.framed-picture {
  position: absolute;
  top: -15px;
  left: 20px;
}

.picture-frame {
  width: 25px;
  height: 30px;
  background: #8b4513;
  border: 2px solid #654321;
  border-radius: 2px;
}

.picture-content {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 21px;
  height: 26px;
  background: linear-gradient(45deg, #f0f8ff 0%, #e6f3ff 100%);
  border-radius: 1px;
}

/* Card 2: Washington Scene */
.washington-scene {
  position: relative;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, #87ceeb 0%, #b0e0e6 50%, #98fb98 100%);
  overflow: hidden;
}

.sky-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 40%;
  background: linear-gradient(180deg, #87ceeb 0%, #b0e0e6 100%);
}

.clouds {
  position: absolute;
  top: 10%;
  left: 0;
  width: 100%;
  height: 20%;
}

.cloud-1,
.cloud-2,
.cloud-3 {
  position: absolute;
  background: #ffffff;
  border-radius: 50px;
  opacity: 0.8;
}

.cloud-1 {
  top: 0;
  left: 10%;
  width: 40px;
  height: 20px;
}

.cloud-2 {
  top: 5px;
  right: 20%;
  width: 35px;
  height: 18px;
}

.cloud-3 {
  top: 10px;
  left: 60%;
  width: 30px;
  height: 15px;
}

.water-body {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 25%;
  background: linear-gradient(180deg, #4682b4 0%, #5f9ea0 100%);
  border-radius: 50% 50% 0 0 / 100% 100% 0 0;
}

.hills-mountains {
  position: absolute;
  bottom: 25%;
  left: 0;
  width: 100%;
  height: 35%;
}

.mountain-1,
.mountain-2,
.mountain-3 {
  position: absolute;
  bottom: 0;
  background: #2f4f4f;
  border-radius: 50% 50% 0 0;
}

.mountain-1 {
  left: 10%;
  width: 30%;
  height: 60%;
}

.mountain-2 {
  left: 40%;
  width: 25%;
  height: 50%;
}

.mountain-3 {
  right: 15%;
  width: 20%;
  height: 40%;
}

.trees {
  position: absolute;
  bottom: 25%;
  left: 0;
  width: 100%;
  height: 35%;
}

.tree-group-1,
.tree-group-2,
.tree-group-3 {
  position: absolute;
  bottom: 0;
}

.tree-group-1 {
  left: 5%;
  width: 20%;
  height: 30%;
}

.tree-group-2 {
  left: 35%;
  width: 25%;
  height: 35%;
}

.tree-group-3 {
  right: 10%;
  width: 15%;
  height: 25%;
}

.tree-group-1::before,
.tree-group-2::before,
.tree-group-3::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 4px;
  height: 20px;
  background: #8b4513;
}

.tree-group-1::after,
.tree-group-2::after,
.tree-group-3::after {
  content: "";
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 12px solid transparent;
  border-right: 12px solid transparent;
  border-bottom: 25px solid #228b22;
}

.city-buildings {
  position: absolute;
  bottom: 25%;
  left: 0;
  width: 100%;
  height: 35%;
}

.building-row-1,
.building-row-2,
.building-row-3 {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 33.33%;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
}

.building-1,
.building-2,
.building-3,
.building-4,
.building-5,
.building-6,
.building-7,
.building-8,
.building-9 {
  background: #4a5568;
  border-radius: 2px 2px 0 0;
  min-width: 8px;
}

.building-1 {
  height: 60%;
}
.building-2 {
  height: 80%;
}
.building-3 {
  height: 70%;
}
.building-4 {
  height: 90%;
}
.building-5 {
  height: 75%;
}
.building-6 {
  height: 85%;
}
.building-7 {
  height: 65%;
}
.building-8 {
  height: 95%;
}
.building-9 {
  height: 70%;
}

/* Card 3: Montana Scene */
.montana-scene {
  position: relative;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, #87ceeb 0%, #98fb98 50%, #90ee90 100%);
  overflow: hidden;
}

.sky-background-montana {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 35%;
  background: linear-gradient(180deg, #87ceeb 0%, #b0e0e6 100%);
}

.plains-background {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 65%;
  background: linear-gradient(180deg, #98fb98 0%, #90ee90 100%);
}

.river-winding {
  position: absolute;
  bottom: 20%;
  left: 0;
  width: 100%;
  height: 8%;
  background: linear-gradient(90deg, #4682b4 0%, #5f9ea0 50%, #4682b4 100%);
  border-radius: 50% 50% 0 0 / 100% 100% 0 0;
  transform: scaleX(1.5);
}

.distant-mountains {
  position: absolute;
  bottom: 65%;
  left: 0;
  width: 100%;
  height: 35%;
}

.mountain-peak-1,
.mountain-peak-2,
.mountain-peak-3,
.mountain-peak-4 {
  position: absolute;
  bottom: 0;
  background: #2f4f4f;
  border-radius: 50% 50% 0 0;
}

.mountain-peak-1 {
  left: 5%;
  width: 20%;
  height: 50%;
}

.mountain-peak-2 {
  left: 30%;
  width: 18%;
  height: 60%;
}

.mountain-peak-3 {
  right: 25%;
  width: 22%;
  height: 45%;
}

.mountain-peak-4 {
  right: 5%;
  width: 15%;
  height: 40%;
}

.montana-city {
  position: absolute;
  bottom: 25%;
  left: 0;
  width: 100%;
  height: 40%;
}

.city-cluster-1,
.city-cluster-2,
.city-cluster-3 {
  position: absolute;
  bottom: 0;
  display: flex;
  gap: 4px;
}

.city-cluster-1 {
  left: 10%;
}

.city-cluster-2 {
  left: 50%;
  transform: translateX(-50%);
}

.city-cluster-3 {
  right: 15%;
}

.building-m1,
.building-m2,
.building-m3,
.building-m4,
.building-m5,
.building-m6,
.building-m7,
.building-m8 {
  background: #4a5568;
  border-radius: 2px 2px 0 0;
  min-width: 6px;
}

.building-m1 {
  height: 70%;
}
.building-m2 {
  height: 85%;
}
.building-m3 {
  height: 60%;
}
.building-m4 {
  height: 90%;
}
.building-m5 {
  height: 75%;
}
.building-m6 {
  height: 65%;
}
.building-m7 {
  height: 80%;
}
.building-m8 {
  height: 70%;
}

.landscape-elements {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 25%;
}

.grass-patches {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: repeating-linear-gradient(
    90deg,
    transparent 0px,
    transparent 20px,
    #228b22 20px,
    #228b22 22px
  );
  opacity: 0.3;
}

.scattered-trees {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.scattered-trees::before {
  content: "";
  position: absolute;
  bottom: 5px;
  left: 20%;
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 20px solid #228b22;
}

.scattered-trees::after {
  content: "";
  position: absolute;
  bottom: 5px;
  right: 30%;
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-bottom: 15px solid #228b22;
}

/* Card Content Styles */
.card-content {
  padding: 1.5rem;
}

.card-categories {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.category-tag,
.subcategory-tag {
  font-size: 0.7rem;
  font-weight: 600;
  color: #3b82f6;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.card-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 1rem;
  line-height: 1.3;
}

.card-divider {
  width: 100%;
  height: 2px;
  background: #3b82f6;
  margin-bottom: 1rem;
}

.card-description {
  font-size: 0.9rem;
  color: #6b7280;
  line-height: 1.5;
  margin-bottom: 1.5rem;
}

.continue-reading-link {
  color: #3b82f6;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 600;
  transition: color 0.3s ease;
}

.continue-reading-link:hover {
  color: #1e40af;
}

/* Responsive Design for Moving Resources Section */
@media (max-width: 768px) {
  .resources-cards-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .moving-resources-heading {
    font-size: 2rem;
  }

  .moving-resources-intro {
    font-size: 1rem;
  }

  .card-image {
    height: 150px;
  }

  .card-content {
    padding: 1.25rem;
  }
}

@media (max-width: 480px) {
  .moving-resources-heading {
    font-size: 1.75rem;
  }

  .card-title {
    font-size: 1rem;
  }

  .card-description {
    font-size: 0.85rem;
  }
}

/* Moving and Packing Services Section Styles */
.moving-packing-services-section {
  padding: 4rem 0;
  background: #ffffff;
}

.moving-packing-services-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.moving-packing-services-heading {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1e3a8a;
  text-align: center;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.moving-packing-services-intro {
  font-size: 1.1rem;
  color: #374151;
  line-height: 1.6;
  text-align: center;
  margin-bottom: 3rem;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
}

.services-link {
  color: #3b82f6;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

.services-link:hover {
  color: #1e40af;
}

.services-columns-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  max-width: 1000px;
  margin: 0 auto;
}

.service-column {
  background: #ffffff;
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid #e2e8f0;
}

.service-column:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  border-color: #3b82f6;
}

.service-icon {
  width: 64px;
  height: 64px;
  margin: 0 auto 1.5rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f8fafc;
  border-radius: 50%;
  border: 2px solid #e2e8f0;
  transition: all 0.3s ease;
}

.service-column:hover .service-icon {
  background: #eff6ff;
  border-color: #3b82f6;
  transform: scale(1.1);
}

.icon-svg {
  width: 32px;
  height: 32px;
}

.service-column-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 1rem;
  line-height: 1.3;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.service-column-description {
  font-size: 1rem;
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.service-cta-link {
  display: inline-block;
  color: #3b82f6;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  padding: 0.75rem 1.5rem;
  border: 2px solid #3b82f6;
  border-radius: 6px;
  transition: all 0.3s ease;
  background: transparent;
}

.service-cta-link:hover {
  background: #3b82f6;
  color: #ffffff;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
}

/* Responsive Design for Moving and Packing Services Section */
@media (max-width: 768px) {
  .services-columns-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .moving-packing-services-heading {
    font-size: 2rem;
  }

  .moving-packing-services-intro {
    font-size: 1rem;
  }

  .service-column {
    padding: 2rem;
  }

  .service-icon {
    width: 56px;
    height: 56px;
  }

  .icon-svg {
    width: 28px;
    height: 28px;
  }
}

@media (max-width: 480px) {
  .moving-packing-services-heading {
    font-size: 1.75rem;
  }

  .service-column {
    padding: 1.5rem;
  }

  .service-column-title {
    font-size: 1.1rem;
  }

  .service-column-description {
    font-size: 0.9rem;
  }

  .service-cta-link {
    font-size: 0.9rem;
    padding: 0.625rem 1.25rem;
  }
}

/* Quote Banner Section Styles */
.quote-banner-section {
  background: #1e3a8a;
  padding: 3rem 0;
}

.quote-banner-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.quote-banner-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
}

.quote-banner-heading {
  font-size: 2.25rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0;
  line-height: 1.2;
  flex: 1;
}

.quote-banner-cta {
  background: #3b82f6;
  color: #ffffff;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  font-family: inherit;
}

.quote-banner-cta:hover {
  background: #2563eb;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
}

.quote-banner-cta:active {
  transform: translateY(0);
  box-shadow: 0 2px 8px rgba(59, 130, 246, 0.3);
}

/* Responsive Design for Quote Banner Section */
@media (max-width: 768px) {
  .quote-banner-content {
    flex-direction: column;
    text-align: center;
    gap: 1.5rem;
  }

  .quote-banner-heading {
    font-size: 1.875rem;
  }

  .quote-banner-cta {
    padding: 0.875rem 1.75rem;
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .quote-banner-section {
    padding: 2rem 0;
  }

  .quote-banner-heading {
    font-size: 1.5rem;
  }

  .quote-banner-cta {
    padding: 0.75rem 1.5rem;
    font-size: 0.9rem;
  }
}
</style>
