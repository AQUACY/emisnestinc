<template>
  <div id="app">
    <q-layout view="hHh lpR fFf">
      <!-- Header -->
      <q-header elevated class="bg-primary text-white">
        <q-toolbar>
          <q-toolbar-title>
            <div class="row items-center">
              <q-icon name="home" size="2rem" class="q-mr-sm" />
              <span class="text-h6">Emi's Nest Inc.</span>
            </div>
          </q-toolbar-title>

          <q-tabs
            v-model="tab"
            class="text-white"
            indicator-color="accent"
            active-color="accent"
            align="justify"
            narrow-indicator
          >
            <q-tab name="home" label="Home" to="/" />
            <q-tab name="services" label="Services" to="/services" />
            <q-tab name="about" label="About" to="/about" />
            <q-tab name="testimonials" label="Testimonials" to="/testimonials" />
            <q-tab name="referral" label="Referral Program" to="/referral" />
            <q-tab name="faq" label="FAQ" to="/faq" />
            <q-tab name="contact" label="Contact" to="/contact" />
          </q-tabs>

          <q-btn
            flat
            dense
            round
            icon="menu"
            aria-label="Menu"
            @click="toggleRightDrawer"
          />

          <q-btn
            color="accent"
            label="Get Quote"
            class="q-ml-md"
            @click="showQuoteDialog = true"
          />
        </q-toolbar>
      </q-header>

      <!-- Mobile Navigation Drawer -->
      <q-drawer
        v-model="rightDrawerOpen"
        side="right"
        bordered
        :width="300"
        class="bg-secondary"
      >
        <q-list>
          <q-item-label header>Navigation</q-item-label>
          <q-item clickable v-ripple to="/" exact>
            <q-item-section avatar>
              <q-icon name="home" />
            </q-item-section>
            <q-item-section>Home</q-item-section>
          </q-item>
          <q-item clickable v-ripple to="/services">
            <q-item-section avatar>
              <q-icon name="local_shipping" />
            </q-item-section>
            <q-item-section>Services</q-item-section>
          </q-item>
          <q-item clickable v-ripple to="/about">
            <q-item-section avatar>
              <q-icon name="info" />
            </q-item-section>
            <q-item-section>About</q-item-section>
          </q-item>
          <q-item clickable v-ripple to="/testimonials">
            <q-item-section avatar>
              <q-icon name="star" />
            </q-item-section>
            <q-item-section>Testimonials</q-item-section>
          </q-item>
          <q-item clickable v-ripple to="/referral">
            <q-item-section avatar>
              <q-icon name="share" />
            </q-item-section>
            <q-item-section>Referral Program</q-item-section>
          </q-item>
          <q-item clickable v-ripple to="/faq">
            <q-item-section avatar>
              <q-icon name="help" />
            </q-item-section>
            <q-item-section>FAQ</q-item-section>
          </q-item>
          <q-item clickable v-ripple to="/contact">
            <q-item-section avatar>
              <q-icon name="contact_support" />
            </q-item-section>
            <q-item-section>Contact</q-item-section>
          </q-item>
        </q-list>

        <div class="q-pa-md">
          <q-btn
            color="accent"
            label="Get Quote"
            class="full-width"
            @click="showQuoteDialog = true"
          />
        </div>
      </q-drawer>

      <!-- Page Container -->
      <q-page-container>
        <router-view />
      </q-page-container>

      <!-- Footer -->
      <q-footer elevated class="bg-primary text-white">
        <q-toolbar>
          <q-toolbar-title>
            <div class="row items-center justify-between full-width">
              <div class="col-12 col-md-4">
                <div class="text-h6">Emi's Nest Inc.</div>
                <div class="text-caption">Your Trusted Moving Partner</div>
              </div>
              <div class="col-12 col-md-4 text-center">
                <div class="text-caption">Contact Us</div>
                <div>📞 (555) 123-4567</div>
                <div>📧 info@emisnestinc.com</div>
              </div>
              <div class="col-12 col-md-4 text-right">
                <div class="text-caption">Follow Us</div>
                <div class="q-gutter-sm">
                  <q-btn flat round icon="facebook" />
                  <q-btn flat round icon="twitter" />
                  <q-btn flat round icon="instagram" />
                  <q-btn flat round icon="linkedin" />
                </div>
              </div>
            </div>
          </q-toolbar-title>
        </q-toolbar>
        <q-toolbar inset>
          <q-toolbar-title class="text-center">
            <div class="text-caption">
              © 2024 Emi's Nest Inc. All rights reserved.
            </div>
          </q-toolbar-title>
        </q-toolbar>
      </q-footer>

      <!-- Quote Dialog -->
      <q-dialog v-model="showQuoteDialog" persistent>
        <q-card style="min-width: 350px">
          <q-card-section>
            <div class="text-h6">Get Your Free Quote</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <q-form @submit="onQuoteSubmit" class="q-gutter-md">
              <q-input
                v-model="quoteForm.name"
                label="Full Name"
                outlined
                :rules="[val => !!val || 'Name is required']"
              />

              <q-input
                v-model="quoteForm.email"
                label="Email"
                type="email"
                outlined
                :rules="[val => !!val || 'Email is required']"
              />

              <q-input
                v-model="quoteForm.phone"
                label="Phone"
                outlined
                :rules="[val => !!val || 'Phone is required']"
              />

              <q-select
                v-model="quoteForm.service"
                :options="serviceOptions"
                label="Service Type"
                outlined
                :rules="[val => !!val || 'Service type is required']"
              />

              <q-input
                v-model="quoteForm.from"
                label="Moving From"
                outlined
                :rules="[val => !!val || 'Origin is required']"
              />

              <q-input
                v-model="quoteForm.to"
                label="Moving To"
                outlined
                :rules="[val => !!val || 'Destination is required']"
              />

              <q-input
                v-model="quoteForm.date"
                label="Preferred Date"
                type="date"
                outlined
                :rules="[val => !!val || 'Date is required']"
              />

              <q-input
                v-model="quoteForm.message"
                label="Additional Details"
                type="textarea"
                outlined
                rows="3"
              />
            </q-form>
          </q-card-section>

          <q-card-actions align="right" class="text-primary">
            <q-btn flat label="Cancel" v-close-popup />
            <q-btn color="accent" label="Submit Quote Request" @click="onQuoteSubmit" />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </q-layout>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useQuasar } from 'quasar'

export default {
  name: 'App',
  setup () {
    const $q = useQuasar()
    const tab = ref('home')
    const rightDrawerOpen = ref(false)
    const showQuoteDialog = ref(false)
    
    const quoteForm = ref({
      name: '',
      email: '',
      phone: '',
      service: '',
      from: '',
      to: '',
      date: '',
      message: ''
    })

    const serviceOptions = [
      'Residential Moving',
      'Commercial Moving',
      'Packing Services',
      'Storage Solutions',
      'Logistics Support'
    ]

    const toggleRightDrawer = () => {
      rightDrawerOpen.value = !rightDrawerOpen.value
    }

    const onQuoteSubmit = () => {
      // Here you would typically send the form data to your backend
      console.log('Quote form submitted:', quoteForm.value)
      
      $q.notify({
        type: 'positive',
        message: 'Thank you! We\'ll contact you within 24 hours with your quote.',
        position: 'top'
      })
      
      showQuoteDialog.value = false
      
      // Reset form
      quoteForm.value = {
        name: '',
        email: '',
        phone: '',
        service: '',
        from: '',
        to: '',
        date: '',
        message: ''
      }
    }

    return {
      tab,
      rightDrawerOpen,
      showQuoteDialog,
      quoteForm,
      serviceOptions,
      toggleRightDrawer,
      onQuoteSubmit
    }
  }
}
</script>

<style>
#app {
  font-family: 'Roboto', sans-serif;
}

.q-header {
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.q-footer {
  box-shadow: 0 -2px 4px rgba(0,0,0,0.1);
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #8B4513;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #654321;
}
</style> 