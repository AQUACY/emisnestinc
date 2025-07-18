<template>
  <q-page>
    <!-- Hero Section -->
    <section class="hero-section section-padding">
      <div class="container">
        <div class="row items-center">
          <div class="col-12 col-md-6" data-aos="fade-right">
            <h1 class="text-h2 text-weight-bold text-shadow q-mb-md">
              Moving Beyond Boundaries
            </h1>
            <p class="text-h6 q-mb-lg">
              Your trusted partner for seamless residential and commercial moving solutions. 
              We handle your belongings with care, ensuring a stress-free moving experience.
            </p>
            <div class="q-gutter-md">
              <q-btn
                color="accent"
                size="lg"
                label="Get Free Quote"
                class="btn-primary"
                @click="$emit('show-quote')"
              />
              <q-btn
                outline
                size="lg"
                label="Learn More"
                class="btn-secondary text-white"
                to="/services"
              />
            </div>
          </div>
          <div class="col-12 col-md-6" data-aos="fade-left">
            <div class="text-center">
              <q-img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Professional Moving Service"
                class="rounded-image"
                style="max-width: 500px;"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Overview Section -->
    <section class="section-padding bg-white">
      <div class="container">
        <div class="text-center q-mb-xl">
          <h2 class="section-title">Our Services</h2>
          <p class="section-subtitle">
            Comprehensive moving and logistics solutions tailored to your needs
          </p>
        </div>

        <div class="row q-gutter-lg">
          <div class="col-12 col-md-4" data-aos="fade-up" data-aos-delay="100">
            <q-card class="service-card text-center q-pa-lg">
              <div class="card-icon">
                <q-icon name="home" size="2rem" />
              </div>
              <h3 class="text-h6 text-primary-brown q-mb-md">Residential Moving</h3>
              <p class="text-body2">
                Complete home moving services with professional packing, loading, 
                transportation, and unpacking assistance.
              </p>
            </q-card>
          </div>

          <div class="col-12 col-md-4" data-aos="fade-up" data-aos-delay="200">
            <q-card class="service-card text-center q-pa-lg">
              <div class="card-icon">
                <q-icon name="business" size="2rem" />
              </div>
              <h3 class="text-h6 text-primary-brown q-mb-md">Commercial Moving</h3>
              <p class="text-body2">
                Efficient office and business relocation services with minimal 
                downtime and maximum care for your equipment.
              </p>
            </q-card>
          </div>

          <div class="col-12 col-md-4" data-aos="fade-up" data-aos-delay="300">
            <q-card class="service-card text-center q-pa-lg">
              <div class="card-icon">
                <q-icon name="inventory_2" size="2rem" />
              </div>
              <h3 class="text-h6 text-primary-brown q-mb-md">Storage Solutions</h3>
              <p class="text-body2">
                Secure, climate-controlled storage facilities for short-term 
                and long-term storage needs.
              </p>
            </q-card>
          </div>
        </div>

        <div class="text-center q-mt-xl">
          <q-btn
            color="primary"
            size="lg"
            label="View All Services"
            class="btn-primary"
            to="/services"
          />
        </div>
      </div>
    </section>

    <!-- Why Choose Us Section -->
    <section class="section-padding bg-secondary-cream">
      <div class="container">
        <div class="row items-center">
          <div class="col-12 col-md-6" data-aos="fade-right">
            <h2 class="section-title text-left">Why Choose Emi's Nest Inc.?</h2>
            <div class="q-gutter-y-lg">
              <div class="row items-center q-gutter-md">
                <div class="feature-icon">
                  <q-icon name="verified" />
                </div>
                <div>
                  <h4 class="text-h6 text-primary-brown">Licensed & Insured</h4>
                  <p class="text-body2">Full licensing and comprehensive insurance coverage for your peace of mind.</p>
                </div>
              </div>
              
              <div class="row items-center q-gutter-md">
                <div class="feature-icon">
                  <q-icon name="schedule" />
                </div>
                <div>
                  <h4 class="text-h6 text-primary-brown">On-Time Service</h4>
                  <p class="text-body2">Punctual and reliable service with real-time tracking and updates.</p>
                </div>
              </div>
              
              <div class="row items-center q-gutter-md">
                <div class="feature-icon">
                  <q-icon name="support_agent" />
                </div>
                <div>
                  <h4 class="text-h6 text-primary-brown">24/7 Support</h4>
                  <p class="text-body2">Round-the-clock customer support for any questions or concerns.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="col-12 col-md-6" data-aos="fade-left">
            <q-img
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Professional Moving Team"
              class="rounded-image"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="section-padding bg-white">
      <div class="container">
        <div class="text-center q-mb-xl">
          <h2 class="section-title">What Our Clients Say</h2>
          <p class="section-subtitle">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        <div class="row q-gutter-lg">
          <div class="col-12 col-md-4" data-aos="fade-up" data-aos-delay="100">
            <q-card class="testimonial-card">
              <p class="text-body1 q-mb-md">
                "Emi's Nest Inc. made our cross-country move seamless and stress-free. 
                Their team was professional, careful, and efficient. Highly recommended!"
              </p>
              <div class="row items-center">
                <q-avatar size="50px">
                  <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" />
                </q-avatar>
                <div class="q-ml-md">
                  <div class="text-weight-bold">Sarah Johnson</div>
                  <div class="text-caption">Residential Client</div>
                </div>
              </div>
            </q-card>
          </div>

          <div class="col-12 col-md-4" data-aos="fade-up" data-aos-delay="200">
            <q-card class="testimonial-card">
              <p class="text-body1 q-mb-md">
                "Outstanding service for our office relocation. They handled everything 
                from packing to setup with minimal disruption to our business operations."
              </p>
              <div class="row items-center">
                <q-avatar size="50px">
                  <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" />
                </q-avatar>
                <div class="q-ml-md">
                  <div class="text-weight-bold">Michael Chen</div>
                  <div class="text-caption">Commercial Client</div>
                </div>
              </div>
            </q-card>
          </div>

          <div class="col-12 col-md-4" data-aos="fade-up" data-aos-delay="300">
            <q-card class="testimonial-card">
              <p class="text-body1 q-mb-md">
                "The storage solution was perfect for our temporary needs. 
                Clean, secure, and affordable. Will definitely use again!"
              </p>
              <div class="row items-center">
                <q-avatar size="50px">
                  <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" />
                </q-avatar>
                <div class="q-ml-md">
                  <div class="text-weight-bold">Emily Rodriguez</div>
                  <div class="text-caption">Storage Client</div>
                </div>
              </div>
            </q-card>
          </div>
        </div>

        <div class="text-center q-mt-xl">
          <q-btn
            outline
            color="primary"
            size="lg"
            label="Read More Testimonials"
            class="btn-secondary"
            to="/testimonials"
          />
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-padding bg-primary-brown text-white">
      <div class="container">
        <div class="text-center">
          <h2 class="text-h3 text-weight-bold q-mb-md">Ready to Move?</h2>
          <p class="text-h6 q-mb-xl">
            Get your free quote today and experience the difference of professional moving services
          </p>
          <div class="q-gutter-md">
            <q-btn
              color="accent"
              size="xl"
              label="Get Free Quote"
              class="btn-primary"
              @click="$emit('show-quote')"
            />
            <q-btn
              outline
              size="xl"
              label="Call Us Now"
              class="btn-secondary text-white"
              href="tel:+15551234567"
            />
          </div>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script>
export default {
  name: 'HomePage',
  emits: ['show-quote']
}
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.hero-section {
  min-height: 80vh;
  display: flex;
  align-items: center;
}

@media (max-width: 768px) {
  .hero-section {
    min-height: 60vh;
    text-align: center;
  }
  
  .section-title.text-left {
    text-align: center;
  }
}
</style> 