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
            <q-icon name="article" class="badge-icon" />
            <span>{{ heroBadge }}</span>
          </div>
          <h1 class="hero-title" data-aos="fade-up" data-aos-delay="100">
            {{ heroTitle }}
          </h1>
          <p class="hero-description" data-aos="fade-up" data-aos-delay="200">
            {{ heroDescription }}
          </p>
          <div class="hero-meta" data-aos="fade-up" data-aos-delay="300">
            <div class="meta-item">
              <q-icon name="update" class="meta-icon" />
              <span>{{ lastUpdated }}</span>
            </div>
            <div class="meta-item">
              <q-icon name="article" class="meta-icon" />
              <span>{{ totalArticles }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- News Grid Section -->
    <section class="news-section">
      <div class="container">
        <!-- Filters and Search -->
        <div class="filters-section" data-aos="fade-up">
          <div class="row items-center justify-between">
            <div class="col-12 col-md-6">
              <div class="search-box">
                <q-input
                  v-model="searchQuery"
                  :placeholder="searchPlaceholder"
                  outlined
                  dense
                  class="search-input"
                  @update:model-value="filterNews"
                >
                  <template v-slot:prepend>
                    <q-icon name="search" class="search-icon" />
                  </template>
                </q-input>
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div class="category-filters">
                <q-btn-group flat>
                  <q-btn
                    v-for="category in categories"
                    :key="category.value"
                    :label="category.label"
                    :class="[
                      'filter-btn',
                      selectedCategory === category.value
                        ? 'filter-btn-active'
                        : 'filter-btn-inactive',
                    ]"
                    @click="filterByCategory(category.value)"
                  />
                </q-btn-group>
              </div>
            </div>
          </div>
        </div>

        <!-- News Grid -->
        <div class="news-grid" data-aos="fade-up" data-aos-delay="100">
          <div
            v-for="(article, index) in filteredNews"
            :key="article.id"
            class="news-card"
            data-aos="fade-up"
            :data-aos-delay="(index % 3) * 100"
          >
            <div class="news-image">
              <img :src="article.image" :alt="article.title" />
              <div class="news-category">
                {{ article.category }}
              </div>
            </div>
            <div class="news-content">
              <div class="news-meta">
                <span class="news-date">
                  <q-icon name="schedule" class="meta-icon" />
                  {{ formatDate(article.date) }}
                </span>
                <span class="news-author">
                  <q-icon name="person" class="meta-icon" />
                  {{ article.author }}
                </span>
              </div>
              <h3 class="news-title">
                {{ article.title }}
              </h3>
              <p class="news-excerpt">
                {{ article.excerpt }}
              </p>
              <div class="news-actions">
                <q-btn
                  :label="readMoreText"
                  class="read-more-btn"
                  @click="openNewsDialog(article)"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Load More Button -->
        <div class="load-more-section" data-aos="fade-up" data-aos-delay="200">
          <q-btn
            v-if="hasMoreNews"
            :label="loadMoreText"
            class="load-more-btn"
            size="lg"
            @click="loadMoreNews"
          />
        </div>
      </div>
    </section>

    <!-- News Dialog -->
    <q-dialog
      v-model="newsDialog"
      maximized
      transition-show="slide-up"
      transition-hide="slide-down"
      class="news-dialog"
    >
      <q-card class="news-dialog-card">
        <q-card-section class="dialog-header">
          <div class="dialog-header-content">
            <q-btn
              icon="close"
              flat
              round
              dense
              @click="closeNewsDialog"
              class="close-btn"
            />
            <div class="dialog-navigation">
              <q-btn
                :disable="currentNewsIndex === 0"
                icon="chevron_left"
                flat
                round
                @click="previousNews"
                class="nav-btn"
              />
              <span class="news-counter">
                {{ currentNewsIndex + 1 }} / {{ filteredNews.length }}
              </span>
              <q-btn
                :disable="currentNewsIndex === filteredNews.length - 1"
                icon="chevron_right"
                flat
                round
                @click="nextNews"
                class="nav-btn"
              />
            </div>
          </div>
        </q-card-section>

        <q-card-section class="dialog-content">
          <div v-if="selectedNews" class="news-detail">
            <div class="news-detail-image">
              <img :src="selectedNews.image" :alt="selectedNews.title" />
            </div>
            <div class="news-detail-content">
              <div class="news-detail-meta">
                <span class="news-detail-category">{{
                  selectedNews.category
                }}</span>
                <span class="news-detail-date">
                  <q-icon name="schedule" />
                  {{ formatDate(selectedNews.date) }}
                </span>
                <span class="news-detail-author">
                  <q-icon name="person" />
                  {{ selectedNews.author }}
                </span>
              </div>
              <h1 class="news-detail-title">{{ selectedNews.title }}</h1>
              <div class="news-detail-body" v-html="selectedNews.content"></div>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>

    <!-- Footer Component -->
    <AppFooter />
  </q-page>
</template>

<script>
import { computed, ref } from "vue";
import { useI18n } from "vue-i18n";
import AppFooter from "../../components/Footer.vue";

export default {
  name: "NewsPage",
  components: {
    AppFooter,
  },
  setup() {
    const { t } = useI18n();

    // Hero translations
    const heroBadge = computed(() => t("news.hero.badge"));
    const heroTitle = computed(() => t("news.hero.title"));
    const heroDescription = computed(() => t("news.hero.description"));
    const lastUpdated = computed(() => t("news.hero.lastUpdated"));
    const totalArticles = computed(() => t("news.hero.totalArticles"));

    // Search and filters
    const searchPlaceholder = computed(() =>
      t("news.filters.searchPlaceholder")
    );
    const readMoreText = computed(() => t("news.actions.readMore"));
    const loadMoreText = computed(() => t("news.actions.loadMore"));

    // Reactive data
    const searchQuery = ref("");
    const selectedCategory = ref("all");
    const newsDialog = ref(false);
    const selectedNews = ref(null);
    const currentNewsIndex = ref(0);
    const displayedNewsCount = ref(9);

    // Categories
    const categories = [
      { label: "All", value: "all" },
      { label: "Company News", value: "company" },
      { label: "Industry Updates", value: "industry" },
      { label: "Service Updates", value: "services" },
      { label: "Customer Stories", value: "customers" },
    ];

    // Dummy news data
    const newsData = ref([
      {
        id: 1,
        title: "Emisnest Expands to New Markets Across North America",
        excerpt:
          "We're excited to announce our expansion into new markets, bringing our premium moving and logistics services to more customers across North America.",
        content: `
          <p>We're thrilled to announce a significant milestone in Emisnest's growth journey. Today, we're expanding our operations to serve new markets across North America, bringing our premium moving and logistics services to even more customers.</p>
          
          <h3>New Service Areas</h3>
          <p>Our expansion includes:</p>
          <ul>
            <li>Major metropolitan areas in the Pacific Northwest</li>
            <li>Key business hubs in the Southwest</li>
            <li>Growing markets in the Southeast</li>
            <li>Strategic locations in the Midwest</li>
          </ul>
          
          <h3>Enhanced Service Offerings</h3>
          <p>Along with our expansion, we're introducing enhanced service offerings including:</p>
          <ul>
            <li>Real-time shipment tracking</li>
            <li>Premium packing services</li>
            <li>Climate-controlled storage solutions</li>
            <li>Expedited delivery options</li>
          </ul>
          
          <p>This expansion represents our commitment to providing exceptional moving and logistics services to customers nationwide. We look forward to serving our new communities with the same dedication to quality and customer satisfaction that has made Emisnest a trusted name in the industry.</p>
        `,
        image:
          "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "Company News",
        author: "Sarah Johnson",
        date: "2024-01-15",
      },
      {
        id: 2,
        title: "New Technology Integration Improves Delivery Efficiency",
        excerpt:
          "Our latest technology integration has resulted in a 25% improvement in delivery efficiency and enhanced tracking capabilities for our customers.",
        content: `
          <p>We're proud to announce the successful integration of cutting-edge technology that has significantly improved our delivery efficiency and customer experience.</p>
          
          <h3>Key Improvements</h3>
          <p>The new technology integration has delivered:</p>
          <ul>
            <li>25% improvement in delivery efficiency</li>
            <li>Real-time GPS tracking for all shipments</li>
            <li>Automated route optimization</li>
            <li>Enhanced customer communication systems</li>
          </ul>
          
          <h3>Customer Benefits</h3>
          <p>Our customers now enjoy:</p>
          <ul>
            <li>More accurate delivery time estimates</li>
            <li>Better visibility into shipment status</li>
            <li>Improved communication throughout the process</li>
            <li>Faster response times to inquiries</li>
          </ul>
          
          <p>This technological advancement underscores our commitment to innovation and continuous improvement in serving our customers better.</p>
        `,
        image:
          "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "Industry Updates",
        author: "Michael Chen",
        date: "2024-01-12",
      },
      {
        id: 3,
        title: "Customer Success Story: International Relocation Excellence",
        excerpt:
          "Read about how we helped a family relocate from New York to London, handling every detail of their international move with precision and care.",
        content: `
          <p>We're delighted to share the story of the Rodriguez family, whose international relocation from New York to London exemplifies our commitment to excellence in global moving services.</p>
          
          <h3>The Challenge</h3>
          <p>The Rodriguez family needed to relocate their entire household, including:</p>
          <ul>
            <li>Furniture and personal belongings</li>
            <li>Valuable artwork and antiques</li>
            <li>Family heirlooms requiring special care</li>
            <li>Time-sensitive relocation requirements</li>
          </ul>
          
          <h3>Our Solution</h3>
          <p>Our comprehensive approach included:</p>
          <ul>
            <li>Custom packing and crating services</li>
            <li>Climate-controlled shipping containers</li>
            <li>24/7 tracking and monitoring</li>
            <li>Coordination with customs and immigration</li>
            <li>White-glove delivery and setup services</li>
          </ul>
          
          <h3>The Result</h3>
          <p>The Rodriguez family's belongings arrived safely and on time, with everything perfectly intact. Their new home was set up exactly as they envisioned, making their transition smooth and stress-free.</p>
          
          <p>"Emisnest made our international move feel effortless. Their attention to detail and professional service exceeded our expectations," said Maria Rodriguez.</p>
        `,
        image:
          "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "Customer Stories",
        author: "Emily Rodriguez",
        date: "2024-01-10",
      },
      {
        id: 4,
        title: "Sustainable Practices: Our Commitment to Green Logistics",
        excerpt:
          "Learn about our new sustainability initiatives and how we're reducing our carbon footprint while maintaining the highest service standards.",
        content: `
          <p>At Emisnest, we believe that exceptional service and environmental responsibility go hand in hand. We're proud to announce our comprehensive sustainability initiatives that are setting new standards in green logistics.</p>
          
          <h3>Our Green Initiatives</h3>
          <p>Our sustainability program includes:</p>
          <ul>
            <li>Fleet electrification and hybrid vehicles</li>
            <li>Carbon-neutral shipping options</li>
            <li>Eco-friendly packaging materials</li>
            <li>Energy-efficient warehouses</li>
            <li>Waste reduction programs</li>
          </ul>
          
          <h3>Environmental Impact</h3>
          <p>These initiatives have resulted in:</p>
          <ul>
            <li>40% reduction in carbon emissions</li>
            <li>60% less packaging waste</li>
            <li>100% renewable energy in our facilities</li>
            <li>Partnerships with environmental organizations</li>
          </ul>
          
          <h3>Customer Benefits</h3>
          <p>Our customers can now:</p>
          <ul>
            <li>Choose carbon-neutral shipping options</li>
            <li>Track their environmental impact</li>
            <li>Support sustainable business practices</li>
            <li>Receive eco-friendly packaging</li>
          </ul>
          
          <p>We're committed to leading the industry in sustainable practices while delivering the exceptional service our customers expect.</p>
        `,
        image:
          "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "Company News",
        author: "David Green",
        date: "2024-01-08",
      },
      {
        id: 5,
        title: "Industry Trends: The Future of Smart Logistics",
        excerpt:
          "Explore the latest trends in logistics technology and how artificial intelligence is transforming the moving and shipping industry.",
        content: `
          <p>The logistics industry is undergoing a technological revolution, and we're at the forefront of these innovations. Let's explore how artificial intelligence and smart technologies are reshaping the future of moving and logistics.</p>
          
          <h3>Emerging Technologies</h3>
          <p>Key technologies transforming the industry:</p>
          <ul>
            <li>AI-powered route optimization</li>
            <li>Predictive analytics for demand forecasting</li>
            <li>Autonomous vehicles and drones</li>
            <li>Blockchain for supply chain transparency</li>
            <li>IoT sensors for real-time monitoring</li>
          </ul>
          
          <h3>Industry Impact</h3>
          <p>These technologies are delivering:</p>
          <ul>
            <li>Improved efficiency and cost savings</li>
            <li>Enhanced customer experience</li>
            <li>Better risk management</li>
            <li>Increased transparency</li>
            <li>Faster delivery times</li>
          </ul>
          
          <h3>Our Approach</h3>
          <p>At Emisnest, we're:</p>
          <ul>
            <li>Investing in AI and machine learning</li>
            <li>Pilot testing autonomous delivery systems</li>
            <li>Implementing predictive maintenance</li>
            <li>Developing smart warehouse solutions</li>
          </ul>
          
          <p>We're excited about the future of smart logistics and committed to staying ahead of the curve to serve our customers better.</p>
        `,
        image:
          "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "Industry Updates",
        author: "Alex Thompson",
        date: "2024-01-05",
      },
      {
        id: 6,
        title: "Service Update: Enhanced Packing and Protection Services",
        excerpt:
          "Discover our new premium packing services and enhanced protection options for your valuable belongings during transit.",
        content: `
          <p>We're excited to announce the launch of our enhanced packing and protection services, designed to provide the ultimate care for your valuable belongings during transit.</p>
          
          <h3>New Premium Services</h3>
          <p>Our enhanced offerings include:</p>
          <ul>
            <li>Professional art and antique packing</li>
            <li>Climate-controlled packaging solutions</li>
            <li>Custom crating for fragile items</li>
            <li>Insurance-backed protection plans</li>
            <li>White-glove packing services</li>
          </ul>
          
          <h3>Protection Features</h3>
          <p>Every package includes:</p>
          <ul>
            <li>Shock-absorbing materials</li>
            <li>Moisture-resistant barriers</li>
            <li>Temperature monitoring devices</li>
            <li>24/7 tracking and monitoring</li>
            <li>Comprehensive insurance coverage</li>
          </ul>
          
          <h3>Customer Benefits</h3>
          <p>Our customers now enjoy:</p>
          <ul>
            <li>Peace of mind knowing their items are protected</li>
            <li>Professional handling of valuable possessions</li>
            <li>Comprehensive insurance coverage</li>
            <li>Real-time monitoring of their shipments</li>
          </ul>
          
          <p>These enhanced services reflect our commitment to providing the highest level of care and protection for our customers' belongings.</p>
        `,
        image:
          "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "Service Updates",
        author: "Lisa Wang",
        date: "2024-01-03",
      },
    ]);

    // Computed properties
    const filteredNews = computed(() => {
      let filtered = newsData.value;

      // Filter by category
      if (selectedCategory.value !== "all") {
        filtered = filtered.filter(
          (article) => article.category.toLowerCase() === selectedCategory.value
        );
      }

      // Filter by search query
      if (searchQuery.value) {
        const query = searchQuery.value.toLowerCase();
        filtered = filtered.filter(
          (article) =>
            article.title.toLowerCase().includes(query) ||
            article.excerpt.toLowerCase().includes(query) ||
            article.content.toLowerCase().includes(query)
        );
      }

      return filtered.slice(0, displayedNewsCount.value);
    });

    const hasMoreNews = computed(() => {
      return filteredNews.value.length < newsData.value.length;
    });

    // Methods
    const formatDate = (dateString) => {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    };

    const filterNews = () => {
      // Reset to first page when filtering
      displayedNewsCount.value = 9;
    };

    const filterByCategory = (category) => {
      selectedCategory.value = category;
      filterNews();
    };

    const loadMoreNews = () => {
      displayedNewsCount.value += 6;
    };

    const openNewsDialog = (article) => {
      selectedNews.value = article;
      currentNewsIndex.value = filteredNews.value.findIndex(
        (item) => item.id === article.id
      );
      newsDialog.value = true;
    };

    const closeNewsDialog = () => {
      newsDialog.value = false;
      selectedNews.value = null;
    };

    const nextNews = () => {
      if (currentNewsIndex.value < filteredNews.value.length - 1) {
        currentNewsIndex.value++;
        selectedNews.value = filteredNews.value[currentNewsIndex.value];
      }
    };

    const previousNews = () => {
      if (currentNewsIndex.value > 0) {
        currentNewsIndex.value--;
        selectedNews.value = filteredNews.value[currentNewsIndex.value];
      }
    };

    return {
      heroBadge,
      heroTitle,
      heroDescription,
      lastUpdated,
      totalArticles,
      searchPlaceholder,
      readMoreText,
      loadMoreText,
      searchQuery,
      selectedCategory,
      categories,
      newsDialog,
      selectedNews,
      currentNewsIndex,
      filteredNews,
      hasMoreNews,
      formatDate,
      filterNews,
      filterByCategory,
      loadMoreNews,
      openNewsDialog,
      closeNewsDialog,
      nextNews,
      previousNews,
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
  background: #ffffff;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url("https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80")
    center/cover;
  opacity: 0.1;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.95) 0%,
    rgba(255, 255, 255, 0.9) 100%
  );
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  color: #000000;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: #32cd32;
  border: 1px solid #32cd32;
  border-radius: 50px;
  padding: 0.5rem 1rem;
  margin-bottom: 2rem;
  color: #000000;
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
  color: #000000;
}

.hero-description {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  opacity: 0.8;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
  color: #333333;
}

.hero-meta {
  display: flex;
  justify-content: center;
  gap: 2.5rem;
  flex-wrap: wrap;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #333333;
  opacity: 0.8;
  font-size: 0.875rem;
  font-weight: 500;
}

.meta-icon {
  color: #8a2be2;
  font-size: 1.125rem;
}

/* News Section */
.news-section {
  padding: 5rem 0;
  background: #ffffff;
  position: relative;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
}

/* Filters Section */
.filters-section {
  margin-bottom: 4rem;
  padding: 2.5rem;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border: 1px solid #e0e0e0;
}

.search-input {
  max-width: 400px;
}

.search-input .q-field__control {
  background: #f8f9fa;
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  transition: all 0.3s ease;
}

.search-input .q-field--focused .q-field__control {
  border-color: #8a2be2;
  box-shadow: 0 0 0 3px rgba(138, 43, 226, 0.1);
}

.search-icon {
  color: #8a2be2;
}

.category-filters {
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
}

.filter-btn {
  border-radius: 12px;
  font-size: 0.875rem;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  transition: all 0.3s ease;
}

.filter-btn-active {
  background: #333333 !important;
  color: #ffffff !important;
}

.filter-btn-inactive {
  background: #ffffff !important;
  color: #333333 !important;
  border: 2px solid #e0e0e0 !important;
}

.filter-btn-inactive:hover {
  background: #f8f9fa !important;
  border-color: #8a2be2 !important;
}

/* News Grid */
.news-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  gap: 2.5rem;
  margin-bottom: 4rem;
}

.news-card {
  background: #ffffff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.4s ease;
  border: 1px solid #e0e0e0;
  position: relative;
}

.news-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #32cd32, #8a2be2);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.news-card:hover::before {
  transform: scaleX(1);
}

.news-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.15);
}

.news-image {
  position: relative;
  height: 220px;
  overflow: hidden;
}

.news-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.news-card:hover .news-image img {
  transform: scale(1.08);
}

.news-category {
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: #32cd32;
  color: #000000;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  box-shadow: 0 2px 8px rgba(50, 205, 50, 0.3);
}

.news-content {
  padding: 2rem;
}

.news-meta {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1.25rem;
  font-size: 0.875rem;
  color: #666666;
  font-weight: 500;
}

.news-meta span {
  display: flex;
  align-items: center;
  gap: 0.375rem;
}

.meta-icon {
  color: #8a2be2;
}

.news-title {
  font-size: 1.375rem;
  font-weight: 700;
  color: #000000;
  margin-bottom: 1rem;
  line-height: 1.4;
  letter-spacing: -0.01em;
}

.news-excerpt {
  font-size: 0.95rem;
  color: #333333;
  opacity: 0.8;
  line-height: 1.7;
  margin-bottom: 2rem;
}

.news-actions {
  display: flex;
  justify-content: flex-end;
}

.read-more-btn {
  background: #333333 !important;
  color: #ffffff !important;
  font-weight: 700;
  border-radius: 12px;
  padding: 0.875rem 1.75rem;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border: none !important;
  transition: all 0.3s ease !important;
}

.read-more-btn:hover {
  background: #555555 !important;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

/* Load More Section */
.load-more-section {
  text-align: center;
  margin-top: 3rem;
}

.load-more-btn {
  background: #ffffff !important;
  color: #333333 !important;
  font-weight: 700;
  padding: 1rem 2.5rem;
  border-radius: 12px;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border: 2px solid #333333 !important;
  transition: all 0.3s ease !important;
}

.load-more-btn:hover {
  background: #333333 !important;
  color: #ffffff !important;
}

/* News Dialog */
.news-dialog .q-card {
  background: #ffffff;
  border-radius: 0;
  max-width: 100vw;
  max-height: 100vh;
}

.dialog-header {
  background: #333333;
  color: #ffffff;
  padding: 1.5rem 2rem;
  border-bottom: 3px solid #8a2be2;
}

.dialog-header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.close-btn {
  color: #ffffff;
  font-size: 1.25rem;
}

.dialog-navigation {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.nav-btn {
  color: #ffffff;
  font-size: 1.25rem;
  transition: all 0.3s ease;
}

.nav-btn:hover:not(:disabled) {
  color: #32cd32;
  transform: scale(1.1);
}

.news-counter {
  font-size: 0.875rem;
  color: #ffffff;
  opacity: 0.9;
  font-weight: 600;
}

.dialog-content {
  padding: 0;
  max-height: calc(100vh - 100px);
  overflow-y: auto;
  background: #f8f9fa;
}

.news-detail {
  max-width: 900px;
  margin: 0 auto;
  padding: 3rem 2rem;
  background: #ffffff;
  margin: 2rem auto;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.news-detail-image {
  width: 100%;
  height: 450px;
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 2.5rem;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.news-detail-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.news-detail-content {
  line-height: 1.8;
}

.news-detail-meta {
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
  font-size: 0.875rem;
  color: #666666;
  font-weight: 500;
  flex-wrap: wrap;
}

.news-detail-meta span {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.news-detail-meta .q-icon {
  color: #8a2be2;
}

.news-detail-category {
  background: #32cd32;
  color: #000000;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  box-shadow: 0 2px 8px rgba(50, 205, 50, 0.3);
}

.news-detail-title {
  font-size: 3rem;
  font-weight: 700;
  color: #000000;
  margin-bottom: 2.5rem;
  line-height: 1.2;
  letter-spacing: -0.02em;
}

.news-detail-body {
  font-size: 1.125rem;
  color: #333333;
  line-height: 1.8;
}

.news-detail-body h3 {
  font-size: 1.75rem;
  font-weight: 700;
  margin: 2.5rem 0 1.25rem;
  color: #000000;
  letter-spacing: -0.01em;
}

.news-detail-body p {
  margin-bottom: 1.75rem;
}

.news-detail-body ul {
  margin: 1.75rem 0;
  padding-left: 2rem;
}

.news-detail-body li {
  margin-bottom: 0.75rem;
  line-height: 1.7;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .hero-title {
    font-size: 3rem;
  }

  .news-grid {
    grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
    gap: 2rem;
  }

  .news-detail-title {
    font-size: 2.5rem;
  }

  .news-detail {
    padding: 2.5rem 1.5rem;
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .hero-description {
    font-size: 1.125rem;
  }

  .hero-meta {
    flex-direction: column;
    gap: 1rem;
  }

  .news-section {
    padding: 4rem 0;
  }

  .container {
    padding: 0 1.5rem;
  }

  .filters-section {
    padding: 2rem;
    margin-bottom: 3rem;
  }

  .category-filters {
    justify-content: center;
    margin-top: 1.5rem;
    flex-wrap: wrap;
  }

  .news-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .news-detail {
    padding: 2rem 1rem;
    margin: 1rem;
  }

  .news-detail-title {
    font-size: 2rem;
  }

  .news-detail-meta {
    flex-direction: column;
    gap: 0.75rem;
  }

  .news-detail-image {
    height: 350px;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2rem;
  }

  .hero-description {
    font-size: 1rem;
  }

  .container {
    padding: 0 1rem;
  }

  .filters-section {
    padding: 1.5rem;
  }

  .news-card {
    margin-bottom: 1rem;
  }

  .news-content {
    padding: 1.5rem;
  }

  .news-detail-title {
    font-size: 1.75rem;
  }

  .dialog-header {
    padding: 1rem;
  }

  .news-detail {
    padding: 1.5rem 0.75rem;
    margin: 0.5rem;
  }

  .news-detail-image {
    height: 250px;
  }
}
</style>
