<template>
  <q-page>
    <!-- Hero Section -->
    <section class="hero-section section-padding">
      <div class="container">
        <div class="text-center">
          <h1 class="text-h2 text-weight-bold text-shadow q-mb-md">
            Contact Us
          </h1>
          <p class="text-h6 q-mb-xl">
            Get in touch with our team for any questions or to schedule your move
          </p>
        </div>
      </div>
    </section>

    <!-- Contact Information Section -->
    <section class="section-padding bg-white">
      <div class="container">
        <div class="row q-gutter-lg">
          <div class="col-12 col-md-4" data-aos="fade-up" data-aos-delay="100">
            <q-card class="service-card text-center q-pa-lg">
              <div class="card-icon">
                <q-icon name="phone" size="2rem" />
              </div>
              <h3 class="text-h6 text-primary-brown q-mb-md">Phone</h3>
              <p class="text-body1 q-mb-sm">Main Office</p>
              <p class="text-h6 text-accent-yellow q-mb-sm">(555) 123-4567</p>
              <p class="text-body2">Available 24/7 for emergencies</p>
            </q-card>
          </div>

          <div class="col-12 col-md-4" data-aos="fade-up" data-aos-delay="200">
            <q-card class="service-card text-center q-pa-lg">
              <div class="card-icon">
                <q-icon name="email" size="2rem" />
              </div>
              <h3 class="text-h6 text-primary-brown q-mb-md">Email</h3>
              <p class="text-body1 q-mb-sm">General Inquiries</p>
              <p class="text-h6 text-accent-yellow q-mb-sm">info@emisnestinc.com</p>
              <p class="text-body2">We respond within 2 hours</p>
            </q-card>
          </div>

          <div class="col-12 col-md-4" data-aos="fade-up" data-aos-delay="300">
            <q-card class="service-card text-center q-pa-lg">
              <div class="card-icon">
                <q-icon name="location_on" size="2rem" />
              </div>
              <h3 class="text-h6 text-primary-brown q-mb-md">Office</h3>
              <p class="text-body1 q-mb-sm">Main Office</p>
              <p class="text-h6 text-accent-yellow q-mb-sm">123 Moving Way</p>
              <p class="text-body2">Suite 100, City, State 12345</p>
            </q-card>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Form & Map Section -->
    <section class="section-padding bg-secondary-cream">
      <div class="container">
        <div class="row q-gutter-lg">
          <div class="col-12 col-md-6" data-aos="fade-right">
            <h2 class="section-title text-left">Send Us a Message</h2>
            <p class="text-body1 q-mb-lg">
              Fill out the form below and we'll get back to you within 2 hours. 
              For urgent matters, please call us directly.
            </p>
            
            <q-card class="service-card q-pa-lg">
              <q-form @submit="onContactSubmit" class="q-gutter-md">
                <div class="row q-gutter-md">
                  <div class="col-12 col-sm-6">
                    <q-input
                      v-model="contactForm.firstName"
                      label="First Name"
                      outlined
                      :rules="[val => !!val || 'First name is required']"
                    />
                  </div>
                  <div class="col-12 col-sm-6">
                    <q-input
                      v-model="contactForm.lastName"
                      label="Last Name"
                      outlined
                      :rules="[val => !!val || 'Last name is required']"
                    />
                  </div>
                </div>

                <q-input
                  v-model="contactForm.email"
                  label="Email Address"
                  type="email"
                  outlined
                  :rules="[val => !!val || 'Email is required']"
                />

                <q-input
                  v-model="contactForm.phone"
                  label="Phone Number"
                  outlined
                  :rules="[val => !!val || 'Phone number is required']"
                />

                <q-select
                  v-model="contactForm.subject"
                  :options="subjectOptions"
                  label="Subject"
                  outlined
                  :rules="[val => !!val || 'Subject is required']"
                />

                <q-input
                  v-model="contactForm.message"
                  label="Message"
                  type="textarea"
                  outlined
                  rows="5"
                  :rules="[val => !!val || 'Message is required']"
                />

                <q-checkbox
                  v-model="contactForm.agreement"
                  label="I agree to be contacted regarding my inquiry"
                  :rules="[val => val || 'You must agree to be contacted']"
                />

                <q-btn
                  type="submit"
                  color="accent"
                  label="Send Message"
                  class="btn-primary full-width"
                  :loading="loading"
                />
              </q-form>
            </q-card>
          </div>
          
          <div class="col-12 col-md-6" data-aos="fade-left">
            <h2 class="section-title text-left">Visit Our Office</h2>
            <p class="text-body1 q-mb-lg">
              Stop by our office to meet our team and discuss your moving needs in person.
            </p>
            
            <q-card class="service-card q-pa-lg">
              <div class="q-mb-lg">
                <h3 class="text-h6 text-primary-brown q-mb-md">Office Hours</h3>
                <div class="q-gutter-y-sm">
                  <div class="row justify-between">
                    <span class="text-body2">Monday - Friday</span>
                    <span class="text-body2 font-weight-bold">8:00 AM - 6:00 PM</span>
                  </div>
                  <div class="row justify-between">
                    <span class="text-body2">Saturday</span>
                    <span class="text-body2 font-weight-bold">9:00 AM - 4:00 PM</span>
                  </div>
                  <div class="row justify-between">
                    <span class="text-body2">Sunday</span>
                    <span class="text-body2 font-weight-bold">Closed</span>
                  </div>
                </div>
              </div>
              
              <div class="q-mb-lg">
                <h3 class="text-h6 text-primary-brown q-mb-md">Address</h3>
                <p class="text-body2">
                  123 Moving Way<br>
                  Suite 100<br>
                  City, State 12345<br>
                  United States
                </p>
              </div>
              
              <div>
                <h3 class="text-h6 text-primary-brown q-mb-md">Directions</h3>
                <p class="text-body2">
                  Located in the heart of downtown, our office is easily accessible by public 
                  transportation and has ample parking available for visitors.
                </p>
              </div>
            </q-card>
          </div>
        </div>
      </div>
    </section>

    <!-- Map Section -->
    <section class="section-padding bg-white">
      <div class="container">
        <div class="text-center q-mb-xl">
          <h2 class="section-title">Find Us</h2>
          <p class="section-subtitle">
            Interactive map showing our office location
          </p>
        </div>
        
        <q-card class="service-card">
          <div class="map-container" style="height: 400px; background: #f0f0f0; display: flex; align-items: center; justify-content: center;">
            <div class="text-center">
              <q-icon name="map" size="4rem" color="grey-5" />
              <p class="text-h6 text-grey-6 q-mt-md">Interactive Map</p>
              <p class="text-body2 text-grey-6">Map integration would be added here</p>
              <q-btn
                color="accent"
                label="Get Directions"
                class="btn-primary q-mt-md"
                @click="getDirections"
              />
            </div>
          </div>
        </q-card>
      </div>
    </section>

    <!-- Emergency Contact Section -->
    <section class="section-padding bg-primary-brown text-white">
      <div class="container">
        <div class="text-center">
          <h2 class="text-h3 text-weight-bold q-mb-md">Emergency Contact</h2>
          <p class="text-h6 q-mb-lg">
            For urgent matters outside of business hours
          </p>
          <div class="row justify-center q-gutter-lg">
            <div class="col-12 col-md-4">
              <q-card class="bg-white text-dark q-pa-lg">
                <div class="text-center">
                  <q-icon name="emergency" size="3rem" color="negative" class="q-mb-md" />
                  <h3 class="text-h6 text-primary-brown q-mb-sm">24/7 Emergency Line</h3>
                  <p class="text-h5 text-accent-yellow q-mb-sm">(555) 911-MOVE</p>
                  <p class="text-body2">Available for urgent moving emergencies</p>
                </div>
              </q-card>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Social Media Section -->
    <section class="section-padding bg-secondary-cream">
      <div class="container">
        <div class="text-center q-mb-xl">
          <h2 class="section-title">Follow Us</h2>
          <p class="section-subtitle">
            Stay updated with our latest news and moving tips
          </p>
        </div>
        
        <div class="row justify-center q-gutter-lg">
          <div class="col-12 col-md-2 col-sm-4" data-aos="fade-up" data-aos-delay="100">
            <q-card class="service-card text-center q-pa-lg">
              <q-icon name="facebook" size="3rem" color="blue" class="q-mb-md" />
              <h3 class="text-h6 text-primary-brown">Facebook</h3>
              <p class="text-body2">Follow us for moving tips</p>
            </q-card>
          </div>
          
          <div class="col-12 col-md-2 col-sm-4" data-aos="fade-up" data-aos-delay="200">
            <q-card class="service-card text-center q-pa-lg">
              <q-icon name="twitter" size="3rem" color="blue-4" class="q-mb-md" />
              <h3 class="text-h6 text-primary-brown">Twitter</h3>
              <p class="text-body2">Real-time updates</p>
            </q-card>
          </div>
          
          <div class="col-12 col-md-2 col-sm-4" data-aos="fade-up" data-aos-delay="300">
            <q-card class="service-card text-center q-pa-lg">
              <q-icon name="instagram" size="3rem" color="purple" class="q-mb-md" />
              <h3 class="text-h6 text-primary-brown">Instagram</h3>
              <p class="text-body2">Behind the scenes</p>
            </q-card>
          </div>
          
          <div class="col-12 col-md-2 col-sm-4" data-aos="fade-up" data-aos-delay="400">
            <q-card class="service-card text-center q-pa-lg">
              <q-icon name="linkedin" size="3rem" color="blue-8" class="q-mb-md" />
              <h3 class="text-h6 text-primary-brown">LinkedIn</h3>
              <p class="text-body2">Professional updates</p>
            </q-card>
          </div>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script>
import { ref } from 'vue'
import { useQuasar } from 'quasar'

export default {
  name: 'ContactPage',
  setup () {
    const $q = useQuasar()
    const loading = ref(false)
    
    const contactForm = ref({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      agreement: false
    })

    const subjectOptions = [
      'General Inquiry',
      'Quote Request',
      'Service Question',
      'Complaint',
      'Partnership',
      'Other'
    ]

    const onContactSubmit = () => {
      loading.value = true
      
      // Simulate form submission
      setTimeout(() => {
        loading.value = false
        $q.notify({
          type: 'positive',
          message: 'Thank you! We\'ll get back to you within 2 hours.',
          position: 'top'
        })
        
        // Reset form
        contactForm.value = {
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          agreement: false
        }
      }, 2000)
    }

    const getDirections = () => {
      // In a real application, this would open Google Maps or similar
      $q.notify({
        type: 'info',
        message: 'Opening directions in Google Maps...',
        position: 'top'
      })
    }

    return {
      loading,
      contactForm,
      subjectOptions,
      onContactSubmit,
      getDirections
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.map-container {
  border-radius: 8px;
  overflow: hidden;
}
</style> 