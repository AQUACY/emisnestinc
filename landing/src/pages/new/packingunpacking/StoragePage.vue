<template>
  <q-page>
    <section class="hero-section">
      <div class="hero-background">
        <!-- Line art cityscape overlay -->
        <div class="cityscape-overlay"></div>
      </div>
      <div class="hero-content">
        <h1 class="hero-title">Your Moving and Storage Company</h1>
        <button class="cta-button">GET A QUOTE</button>
      </div>
    </section>
  </q-page>
</template>

<script>
export default {
  name: "StoragePage",
};
</script>

<style scoped>
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
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #0a1a2a 0%, #1a2a3a 100%);
  z-index: 1;
}

.cityscape-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
        /* Houses - various sizes and styles */ linear-gradient(
      45deg,
      transparent 20%,
      #87ceeb 20%,
      #87ceeb 22%,
      transparent 22%
    ),
    linear-gradient(
      45deg,
      transparent 25%,
      #87ceeb 25%,
      #87ceeb 27%,
      transparent 27%
    ),
    linear-gradient(
      45deg,
      transparent 30%,
      #87ceeb 30%,
      #87ceeb 32%,
      transparent 32%
    ),
    linear-gradient(
      45deg,
      transparent 35%,
      #87ceeb 35%,
      #87ceeb 37%,
      transparent 37%
    ),
    linear-gradient(
      45deg,
      transparent 40%,
      #87ceeb 40%,
      #87ceeb 42%,
      transparent 42%
    ),
    linear-gradient(
      45deg,
      transparent 45%,
      #87ceeb 45%,
      #87ceeb 47%,
      transparent 47%
    ),
    linear-gradient(
      45deg,
      transparent 50%,
      #87ceeb 50%,
      #87ceeb 52%,
      transparent 52%
    ),
    linear-gradient(
      45deg,
      transparent 55%,
      #87ceeb 55%,
      #87ceeb 57%,
      transparent 57%
    ),
    linear-gradient(
      45deg,
      transparent 60%,
      #87ceeb 60%,
      #87ceeb 62%,
      transparent 62%
    ),
    linear-gradient(
      45deg,
      transparent 65%,
      #87ceeb 65%,
      #87ceeb 67%,
      transparent 67%
    ),
    linear-gradient(
      45deg,
      transparent 70%,
      #87ceeb 70%,
      #87ceeb 72%,
      transparent 72%
    ),
    linear-gradient(
      45deg,
      transparent 75%,
      #87ceeb 75%,
      #87ceeb 77%,
      transparent 77%
    ),
    linear-gradient(
      45deg,
      transparent 80%,
      #87ceeb 80%,
      #87ceeb 82%,
      transparent 82%
    ),
    linear-gradient(
      45deg,
      transparent 85%,
      #87ceeb 85%,
      #87ceeb 87%,
      transparent 87%
    ),
    /* Trees */
      radial-gradient(circle at 15% 85%, #87ceeb 0%, #87ceeb 2%, transparent 2%),
    radial-gradient(circle at 25% 85%, #87ceeb 0%, #87ceeb 2%, transparent 2%),
    radial-gradient(circle at 35% 85%, #87ceeb 0%, #87ceeb 2%, transparent 2%),
    radial-gradient(circle at 45% 85%, #87ceeb 0%, #87ceeb 2%, transparent 2%),
    radial-gradient(circle at 55% 85%, #87ceeb 0%, #87ceeb 2%, transparent 2%),
    radial-gradient(circle at 65% 85%, #87ceeb 0%, #87ceeb 2%, transparent 2%),
    radial-gradient(circle at 75% 85%, #87ceeb 0%, #87ceeb 2%, transparent 2%),
    radial-gradient(circle at 85% 85%, #87ceeb 0%, #87ceeb 2%, transparent 2%),
    radial-gradient(circle at 95% 85%, #87ceeb 0%, #87ceeb 2%, transparent 2%),
    /* Roads and intersections */
      linear-gradient(
        90deg,
        transparent 0%,
        #87ceeb 0%,
        #87ceeb 0.5%,
        transparent 0.5%
      ),
    linear-gradient(
      90deg,
      transparent 25%,
      #87ceeb 25%,
      #87ceeb 25.5%,
      transparent 25.5%
    ),
    linear-gradient(
      90deg,
      transparent 50%,
      #87ceeb 50%,
      #87ceeb 50.5%,
      transparent 50.5%
    ),
    linear-gradient(
      90deg,
      transparent 75%,
      #87ceeb 75%,
      #87ceeb 75.5%,
      transparent 75.5%
    ),
    linear-gradient(
      90deg,
      transparent 100%,
      #87ceeb 100%,
      #87ceeb 100.5%,
      transparent 100.5%
    ),
    /* Moving truck - prominent feature */
      linear-gradient(
        45deg,
        transparent 60%,
        #87ceeb 60%,
        #87ceeb 65%,
        transparent 65%
      ),
    linear-gradient(
      45deg,
      transparent 65%,
      #87ceeb 65%,
      #87ceeb 70%,
      transparent 70%
    );
  background-size: 100% 100%;
  opacity: 0.3;
  z-index: 2;
}

.hero-content {
  position: relative;
  z-index: 3;
  text-align: center;
  color: white;
}

.hero-title {
  font-family: "Arial", sans-serif;
  font-size: 4rem;
  font-weight: bold;
  line-height: 1.2;
  margin-bottom: 2rem;
  color: white;
}

.cta-button {
  background: transparent;
  border: 2px solid white;
  color: white;
  font-family: "Arial", sans-serif;
  font-size: 1.2rem;
  font-weight: bold;
  text-transform: uppercase;
  padding: 1.2rem 2.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  letter-spacing: 1px;
  border-radius: 4px;
}

.cta-button:hover {
  background: white;
  color: #0a1a2a;
}

/* Responsive design */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .cta-button {
    font-size: 1rem;
    padding: 1rem 2rem;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2rem;
  }

  .cta-button {
    font-size: 0.9rem;
    padding: 0.8rem 1.5rem;
  }
}
</style>
