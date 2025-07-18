<template>
  <q-page>
    <!-- Hero Section -->
    <section class="hero-section section-padding">
      <div class="container">
        <div class="text-center">
          <h1 class="text-h2 text-weight-bold text-shadow q-mb-md">
            Our Services
          </h1>
          <p class="text-h6 q-mb-xl">
            Comprehensive moving and logistics solutions designed to meet all your relocation needs
          </p>
        </div>
      </div>
    </section>

    <!-- Services Grid -->
    <section class="section-padding bg-white">
      <div class="container">
        <div class="row q-gutter-lg">
          <!-- Residential Moving -->
          <div class="col-12 col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="100">
            <q-card class="service-card q-pa-lg h-100">
              <div class="text-center q-mb-lg">
                <div class="card-icon">
                  <q-icon name="home" size="2rem" />
                </div>
                <h3 class="text-h5 text-primary-brown q-mb-md">Residential Moving</h3>
              </div>
              
              <div class="q-mb-lg">
                <p class="text-body1 q-mb-md">
                  Complete home moving services tailored to your specific needs. From studio apartments 
                  to large family homes, we handle every aspect of your residential move.
                </p>
                
                <div class="q-gutter-y-sm">
                  <div class="row items-center q-gutter-sm">
                    <q-icon name="check_circle" color="positive" size="sm" />
                    <span class="text-body2">Professional packing & unpacking</span>
                  </div>
                  <div class="row items-center q-gutter-sm">
                    <q-icon name="check_circle" color="positive" size="sm" />
                    <span class="text-body2">Furniture disassembly & assembly</span>
                  </div>
                  <div class="row items-center q-gutter-sm">
                    <q-icon name="check_circle" color="positive" size="sm" />
                    <span class="text-body2">Specialty item handling</span>
                  </div>
                  <div class="row items-center q-gutter-sm">
                    <q-icon name="check_circle" color="positive" size="sm" />
                    <span class="text-body2">Loading & unloading services</span>
                  </div>
                  <div class="row items-center q-gutter-sm">
                    <q-icon name="check_circle" color="positive" size="sm" />
                    <span class="text-body2">Transportation & delivery</span>
                  </div>
                </div>
              </div>
              
              <div class="text-center">
                <q-btn
                  color="accent"
                  label="Get Quote"
                  class="btn-primary full-width"
                  @click="$emit('show-quote')"
                />
              </div>
            </q-card>
          </div>

          <!-- Commercial Moving -->
          <div class="col-12 col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="200">
            <q-card class="service-card q-pa-lg h-100">
              <div class="text-center q-mb-lg">
                <div class="card-icon">
                  <q-icon name="business" size="2rem" />
                </div>
                <h3 class="text-h5 text-primary-brown q-mb-md">Commercial Moving</h3>
              </div>
              
              <div class="q-mb-lg">
                <p class="text-body1 q-mb-md">
                  Efficient office and business relocation services designed to minimize downtime 
                  and ensure a smooth transition for your business operations.
                </p>
                
                <div class="q-gutter-y-sm">
                  <div class="row items-center q-gutter-sm">
                    <q-icon name="check_circle" color="positive" size="sm" />
                    <span class="text-body2">Office equipment relocation</span>
                  </div>
                  <div class="row items-center q-gutter-sm">
                    <q-icon name="check_circle" color="positive" size="sm" />
                    <span class="text-body2">IT infrastructure moving</span>
                  </div>
                  <div class="row items-center q-gutter-sm">
                    <q-icon name="check_circle" color="positive" size="sm" />
                    <span class="text-body2">After-hours moving options</span>
                  </div>
                  <div class="row items-center q-gutter-sm">
                    <q-icon name="check_circle" color="positive" size="sm" />
                    <span class="text-body2">Project management</span>
                  </div>
                  <div class="row items-center q-gutter-sm">
                    <q-icon name="check_circle" color="positive" size="sm" />
                    <span class="text-body2">Furniture installation</span>
                  </div>
                </div>
              </div>
              
              <div class="text-center">
                <q-btn
                  color="accent"
                  label="Get Quote"
                  class="btn-primary full-width"
                  @click="$emit('show-quote')"
                />
              </div>
            </q-card>
          </div>

          <!-- Packing Services -->
          <div class="col-12 col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="300">
            <q-card class="service-card q-pa-lg h-100">
              <div class="text-center q-mb-lg">
                <div class="card-icon">
                  <q-icon name="inventory" size="2rem" />
                </div>
                <h3 class="text-h5 text-primary-brown q-mb-md">Packing Services</h3>
              </div>
              
              <div class="q-mb-lg">
                <p class="text-body1 q-mb-md">
                  Professional packing services using high-quality materials to ensure your 
                  belongings are protected during transit.
                </p>
                
                <div class="q-gutter-y-sm">
                  <div class="row items-center q-gutter-sm">
                    <q-icon name="check_circle" color="positive" size="sm" />
                    <span class="text-body2">Full-service packing</span>
                  </div>
                  <div class="row items-center q-gutter-sm">
                    <q-icon name="check_circle" color="positive" size="sm" />
                    <span class="text-body2">Partial packing assistance</span>
                  </div>
                  <div class="row items-center q-gutter-sm">
                    <q-icon name="check_circle" color="positive" size="sm" />
                    <span class="text-body2">Specialty item packing</span>
                  </div>
                  <div class="row items-center q-gutter-sm">
                    <q-icon name="check_circle" color="positive" size="sm" />
                    <span class="text-body2">Packing supplies included</span>
                  </div>
                  <div class="row items-center q-gutter-sm">
                    <q-icon name="check_circle" color="positive" size="sm" />
                    <span class="text-body2">Labeled & organized boxes</span>
                  </div>
                </div>
              </div>
              
              <div class="text-center">
                <q-btn
                  color="accent"
                  label="Get Quote"
                  class="btn-primary full-width"
                  @click="$emit('show-quote')"
                />
              </div>
            </q-card>
          </div>

          <!-- Storage Solutions -->
          <div class="col-12 col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="400">
            <q-card class="service-card q-pa-lg h-100">
              <div class="text-center q-mb-lg">
                <div class="card-icon">
                  <q-icon name="warehouse" size="2rem" />
                </div>
                <h3 class="text-h5 text-primary-brown q-mb-md">Storage Solutions</h3>
              </div>
              
              <div class="q-mb-lg">
                <p class="text-body1 q-mb-md">
                  Secure, climate-controlled storage facilities for short-term and long-term 
                  storage needs with flexible access options.
                </p>
                
                <div class="q-gutter-y-sm">
                  <div class="row items-center q-gutter-sm">
                    <q-icon name="check_circle" color="positive" size="sm" />
                    <span class="text-body2">Climate-controlled units</span>
                  </div>
                  <div class="row items-center q-gutter-sm">
                    <q-icon name="check_circle" color="positive" size="sm" />
                    <span class="text-body2">24/7 security monitoring</span>
                  </div>
                  <div class="row items-center q-gutter-sm">
                    <q-icon name="check_circle" color="positive" size="sm" />
                    <span class="text-body2">Flexible access hours</span>
                  </div>
                  <div class="row items-center q-gutter-sm">
                    <q-icon name="check_circle" color="positive" size="sm" />
                    <span class="text-body2">Various unit sizes</span>
                  </div>
                  <div class="row items-center q-gutter-sm">
                    <q-icon name="check_circle" color="positive" size="sm" />
                    <span class="text-body2">Insurance options</span>
                  </div>
                </div>
              </div>
              
              <div class="text-center">
                <q-btn
                  color="accent"
                  label="Get Quote"
                  class="btn-primary full-width"
                  @click="$emit('show-quote')"
                />
              </div>
            </q-card>
          </div>

          <!-- Logistics Support -->
          <div class="col-12 col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="500">
            <q-card class="service-card q-pa-lg h-100">
              <div class="text-center q-mb-lg">
                <div class="card-icon">
                  <q-icon name="local_shipping" size="2rem" />
                </div>
                <h3 class="text-h5 text-primary-brown q-mb-md">Logistics Support</h3>
              </div>
              
              <div class="q-mb-lg">
                <p class="text-body1 q-mb-md">
                  Comprehensive logistics solutions including transportation, warehousing, 
                  and supply chain management for businesses of all sizes.
                </p>
                
                <div class="q-gutter-y-sm">
                  <div class="row items-center q-gutter-sm">
                    <q-icon name="check_circle" color="positive" size="sm" />
                    <span class="text-body2">Freight transportation</span>
                  </div>
                  <div class="row items-center q-gutter-sm">
                    <q-icon name="check_circle" color="positive" size="sm" />
                    <span class="text-body2">Warehouse management</span>
                  </div>
                  <div class="row items-center q-gutter-sm">
                    <q-icon name="check_circle" color="positive" size="sm" />
                    <span class="text-body2">Inventory tracking</span>
                  </div>
                  <div class="row items-center q-gutter-sm">
                    <q-icon name="check_circle" color="positive" size="sm" />
                    <span class="text-body2">Supply chain optimization</span>
                  </div>
                  <div class="row items-center q-gutter-sm">
                    <q-icon name="check_circle" color="positive" size="sm" />
                    <span class="text-body2">Real-time tracking</span>
                  </div>
                </div>
              </div>
              
              <div class="text-center">
                <q-btn
                  color="accent"
                  label="Get Quote"
                  class="btn-primary full-width"
                  @click="$emit('show-quote')"
                />
              </div>
            </q-card>
          </div>

          <!-- International Moving -->
          <div class="col-12 col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="600">
            <q-card class="service-card q-pa-lg h-100">
              <div class="text-center q-mb-lg">
                <div class="card-icon">
                  <q-icon name="flight" size="2rem" />
                </div>
                <h3 class="text-h5 text-primary-brown q-mb-md">International Moving</h3>
              </div>
              
              <div class="q-mb-lg">
                <p class="text-body1 q-mb-md">
                  Global relocation services with expertise in customs clearance, 
                  documentation, and international shipping regulations.
                </p>
                
                <div class="q-gutter-y-sm">
                  <div class="row items-center q-gutter-sm">
                    <q-icon name="check_circle" color="positive" size="sm" />
                    <span class="text-body2">Customs documentation</span>
                  </div>
                  <div class="row items-center q-gutter-sm">
                    <q-icon name="check_circle" color="positive" size="sm" />
                    <span class="text-body2">International shipping</span>
                  </div>
                  <div class="row items-center q-gutter-sm">
                    <q-icon name="check_circle" color="positive" size="sm" />
                    <span class="text-body2">Visa & permit assistance</span>
                  </div>
                  <div class="row items-center q-gutter-sm">
                    <q-icon name="check_circle" color="positive" size="sm" />
                    <span class="text-body2">Destination services</span>
                  </div>
                  <div class="row items-center q-gutter-sm">
                    <q-icon name="check_circle" color="positive" size="sm" />
                    <span class="text-body2">24/7 support worldwide</span>
                  </div>
                </div>
              </div>
              
              <div class="text-center">
                <q-btn
                  color="accent"
                  label="Get Quote"
                  class="btn-primary full-width"
                  @click="$emit('show-quote')"
                />
              </div>
            </q-card>
          </div>
        </div>
      </div>
    </section>

    <!-- Process Section -->
    <section class="section-padding bg-secondary-cream">
      <div class="container">
        <div class="text-center q-mb-xl">
          <h2 class="section-title">Our Moving Process</h2>
          <p class="section-subtitle">
            A streamlined approach to ensure your move is smooth and stress-free
          </p>
        </div>

        <div class="row q-gutter-lg">
          <div class="col-12 col-md-3" data-aos="fade-up" data-aos-delay="100">
            <div class="text-center">
              <div class="feature-icon">
                <q-icon name="phone" />
              </div>
              <h4 class="text-h6 text-primary-brown q-mb-md">1. Consultation</h4>
              <p class="text-body2">
                Initial consultation to understand your needs and provide a detailed quote
              </p>
            </div>
          </div>

          <div class="col-12 col-md-3" data-aos="fade-up" data-aos-delay="200">
            <div class="text-center">
              <div class="feature-icon">
                <q-icon name="event" />
              </div>
              <h4 class="text-h6 text-primary-brown q-mb-md">2. Planning</h4>
              <p class="text-body2">
                Detailed planning and scheduling to ensure everything runs smoothly
              </p>
            </div>
          </div>

          <div class="col-12 col-md-3" data-aos="fade-up" data-aos-delay="300">
            <div class="text-center">
              <div class="feature-icon">
                <q-icon name="local_shipping" />
              </div>
              <h4 class="text-h6 text-primary-brown q-mb-md">3. Moving Day</h4>
              <p class="text-body2">
                Professional team handles packing, loading, and transportation
              </p>
            </div>
          </div>

          <div class="col-12 col-md-3" data-aos="fade-up" data-aos-delay="400">
            <div class="text-center">
              <div class="feature-icon">
                <q-icon name="home" />
              </div>
              <h4 class="text-h6 text-primary-brown q-mb-md">4. Delivery</h4>
              <p class="text-body2">
                Safe delivery and setup at your new location with unpacking assistance
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-padding bg-primary-brown text-white">
      <div class="container">
        <div class="text-center">
          <h2 class="text-h3 text-weight-bold q-mb-md">Ready to Get Started?</h2>
          <p class="text-h6 q-mb-xl">
            Contact us today for a free consultation and personalized quote
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
              label="Contact Us"
              class="btn-secondary text-white"
              to="/contact"
            />
          </div>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script>
export default {
  name: 'ServicesPage',
  emits: ['show-quote']
}
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.h-100 {
  height: 100%;
}

.service-card {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.service-card .q-card__section:last-child {
  margin-top: auto;
}
</style> 