<template>
  <q-page>
    <!-- Hero Section -->
    <section class="hero-section section-padding">
      <div class="container">
        <div class="text-center">
          <h1 class="text-h2 text-weight-bold text-shadow q-mb-md">
            Referral Program
          </h1>
          <p class="text-h6 q-mb-xl">
            Earn rewards by referring friends and family to Emi's Nest Inc.
          </p>
        </div>
      </div>
    </section>

    <!-- How It Works Section -->
    <section class="section-padding bg-white">
      <div class="container">
        <div class="text-center q-mb-xl">
          <h2 class="section-title">How It Works</h2>
          <p class="section-subtitle">
            Simple steps to earn rewards for both you and your referrals
          </p>
        </div>

        <div class="row q-gutter-lg">
          <div class="col-12 col-md-3" data-aos="fade-up" data-aos-delay="100">
            <div class="text-center">
              <div class="feature-icon">
                <q-icon name="share" />
              </div>
              <h3 class="text-h6 text-primary-brown q-mb-md">1. Share</h3>
              <p class="text-body2">
                Share your unique referral link with friends, family, or colleagues who need moving services
              </p>
            </div>
          </div>

          <div class="col-12 col-md-3" data-aos="fade-up" data-aos-delay="200">
            <div class="text-center">
              <div class="feature-icon">
                <q-icon name="local_shipping" />
              </div>
              <h3 class="text-h6 text-primary-brown q-mb-md">2. They Move</h3>
              <p class="text-body2">
                Your referral books a move with Emi's Nest Inc. using your referral code
              </p>
            </div>
          </div>

          <div class="col-12 col-md-3" data-aos="fade-up" data-aos-delay="300">
            <div class="text-center">
              <div class="feature-icon">
                <q-icon name="check_circle" />
              </div>
              <h3 class="text-h6 text-primary-brown q-mb-md">3. Complete</h3>
              <p class="text-body2">
                Once their move is completed successfully, both you and your referral earn rewards
              </p>
            </div>
          </div>

          <div class="col-12 col-md-3" data-aos="fade-up" data-aos-delay="400">
            <div class="text-center">
              <div class="feature-icon">
                <q-icon name="card_giftcard" />
              </div>
              <h3 class="text-h6 text-primary-brown q-mb-md">4. Reward</h3>
              <p class="text-body2">
                Receive your reward - cash back, credit, or special discounts on future services
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Rewards Section -->
    <section class="section-padding bg-secondary-cream">
      <div class="container">
        <div class="text-center q-mb-xl">
          <h2 class="section-title">Rewards & Benefits</h2>
          <p class="section-subtitle">
            Generous rewards for both referrers and referrals
          </p>
        </div>

        <div class="row q-gutter-lg">
          <div class="col-12 col-md-6" data-aos="fade-up" data-aos-delay="100">
            <q-card class="service-card q-pa-lg">
              <div class="text-center q-mb-lg">
                <div class="card-icon">
                  <q-icon name="person" size="2rem" />
                </div>
                <h3 class="text-h5 text-primary-brown q-mb-md">For You (Referrer)</h3>
              </div>
              
              <div class="q-gutter-y-md">
                <div class="row items-center q-gutter-sm">
                  <q-icon name="check_circle" color="positive" size="sm" />
                  <span class="text-body1">$50 cash back for each successful referral</span>
                </div>
                <div class="row items-center q-gutter-sm">
                  <q-icon name="check_circle" color="positive" size="sm" />
                  <span class="text-body1">10% discount on your next move</span>
                </div>
                <div class="row items-center q-gutter-sm">
                  <q-icon name="check_circle" color="positive" size="sm" />
                  <span class="text-body1">Priority booking for future services</span>
                </div>
                <div class="row items-center q-gutter-sm">
                  <q-icon name="check_circle" color="positive" size="sm" />
                  <span class="text-body1">Exclusive member benefits</span>
                </div>
              </div>
            </q-card>
          </div>

          <div class="col-12 col-md-6" data-aos="fade-up" data-aos-delay="200">
            <q-card class="service-card q-pa-lg">
              <div class="text-center q-mb-lg">
                <div class="card-icon">
                  <q-icon name="group" size="2rem" />
                </div>
                <h3 class="text-h5 text-primary-brown q-mb-md">For Your Referral</h3>
              </div>
              
              <div class="q-gutter-y-md">
                <div class="row items-center q-gutter-sm">
                  <q-icon name="check_circle" color="positive" size="sm" />
                  <span class="text-body1">$25 off their first move</span>
                </div>
                <div class="row items-center q-gutter-sm">
                  <q-icon name="check_circle" color="positive" size="sm" />
                  <span class="text-body1">Free packing supplies (up to $100 value)</span>
                </div>
                <div class="row items-center q-gutter-sm">
                  <q-icon name="check_circle" color="positive" size="sm" />
                  <span class="text-body1">Priority scheduling</span>
                </div>
                <div class="row items-center q-gutter-sm">
                  <q-icon name="check_circle" color="positive" size="sm" />
                  <span class="text-body1">Dedicated move coordinator</span>
                </div>
              </div>
            </q-card>
          </div>
        </div>
      </div>
    </section>

    <!-- Referral Form Section -->
    <section class="section-padding bg-white">
      <div class="container">
        <div class="row items-center">
          <div class="col-12 col-md-6" data-aos="fade-right">
            <h2 class="section-title text-left">Get Your Referral Link</h2>
            <p class="text-body1 q-mb-lg">
              Join our referral program and start earning rewards today. Simply fill out the form 
              and we'll send you your unique referral link to share with friends and family.
            </p>
            
            <div class="q-gutter-y-md">
              <div class="row items-center q-gutter-sm">
                <q-icon name="star" color="accent" size="sm" />
                <span class="text-body2">No limit on referrals</span>
              </div>
              <div class="row items-center q-gutter-sm">
                <q-icon name="star" color="accent" size="sm" />
                <span class="text-body2">Rewards paid within 30 days</span>
              </div>
              <div class="row items-center q-gutter-sm">
                <q-icon name="star" color="accent" size="sm" />
                <span class="text-body2">Track your referrals online</span>
              </div>
            </div>
          </div>
          
          <div class="col-12 col-md-6" data-aos="fade-left">
            <q-card class="service-card q-pa-lg">
              <h3 class="text-h5 text-primary-brown q-mb-lg">Join Referral Program</h3>
              
              <q-form @submit="onReferralSubmit" class="q-gutter-md">
                <q-input
                  v-model="referralForm.name"
                  label="Full Name"
                  outlined
                  :rules="[val => !!val || 'Name is required']"
                />

                <q-input
                  v-model="referralForm.email"
                  label="Email Address"
                  type="email"
                  outlined
                  :rules="[val => !!val || 'Email is required']"
                />

                <q-input
                  v-model="referralForm.phone"
                  label="Phone Number"
                  outlined
                  :rules="[val => !!val || 'Phone is required']"
                />

                <q-input
                  v-model="referralForm.address"
                  label="Address"
                  outlined
                  :rules="[val => !!val || 'Address is required']"
                />

                <q-checkbox
                  v-model="referralForm.agreement"
                  label="I agree to the referral program terms and conditions"
                  :rules="[val => val || 'You must agree to the terms']"
                />

                <q-btn
                  type="submit"
                  color="accent"
                  label="Get My Referral Link"
                  class="btn-primary full-width"
                  :loading="loading"
                />
              </q-form>
            </q-card>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="section-padding bg-secondary-cream">
      <div class="container">
        <div class="text-center q-mb-xl">
          <h2 class="section-title">Frequently Asked Questions</h2>
          <p class="section-subtitle">
            Common questions about our referral program
          </p>
        </div>

        <div class="row q-gutter-lg">
          <div class="col-12 col-md-6">
            <q-list class="bg-white rounded-borders">
              <q-expansion-item
                group="faq"
                icon="help"
                label="How do I track my referrals?"
                header-class="text-primary-brown"
              >
                <q-card>
                  <q-card-section>
                    Once you join the referral program, you'll receive access to your personal 
                    dashboard where you can track all your referrals, their status, and your earned rewards.
                  </q-card-section>
                </q-card>
              </q-expansion-item>

              <q-expansion-item
                group="faq"
                icon="help"
                label="When do I receive my reward?"
                header-class="text-primary-brown"
              >
                <q-card>
                  <q-card-section>
                    Rewards are processed and paid within 30 days after your referral's move 
                    is completed successfully.
                  </q-card-section>
                </q-card>
              </q-expansion-item>

              <q-expansion-item
                group="faq"
                icon="help"
                label="Is there a limit on referrals?"
                header-class="text-primary-brown"
              >
                <q-card>
                  <q-card-section>
                    No, there's no limit! You can refer as many people as you want and earn 
                    rewards for each successful referral.
                  </q-card-section>
                </q-card>
              </q-expansion-item>
            </q-list>
          </div>

          <div class="col-12 col-md-6">
            <q-list class="bg-white rounded-borders">
              <q-expansion-item
                group="faq"
                icon="help"
                label="What if my referral cancels?"
                header-class="text-primary-brown"
              >
                <q-card>
                  <q-card-section>
                    Rewards are only paid for completed moves. If your referral cancels, 
                    no reward will be issued, but you can still refer others.
                  </q-card-section>
                </q-card>
              </q-expansion-item>

              <q-expansion-item
                group="faq"
                icon="help"
                label="Can I use my reward immediately?"
                header-class="text-primary-brown"
              >
                <q-card>
                  <q-card-section>
                    Cash rewards are paid directly to your account. Discounts can be used 
                    on your next move with Emi's Nest Inc.
                  </q-card-section>
                </q-card>
              </q-expansion-item>

              <q-expansion-item
                group="faq"
                icon="help"
                label="How do I share my referral link?"
                header-class="text-primary-brown"
              >
                <q-card>
                  <q-card-section>
                    You can share your unique referral link via email, social media, 
                    text message, or any other method you prefer.
                  </q-card-section>
                </q-card>
              </q-expansion-item>
            </q-list>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-padding bg-primary-brown text-white">
      <div class="container">
        <div class="text-center">
          <h2 class="text-h3 text-weight-bold q-mb-md">Start Earning Today</h2>
          <p class="text-h6 q-mb-xl">
            Join thousands of satisfied customers who are already earning rewards with our referral program
          </p>
          <div class="q-gutter-md">
            <q-btn
              color="accent"
              size="xl"
              label="Join Referral Program"
              class="btn-primary"
              @click="scrollToForm"
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
import { ref } from 'vue'
import { useQuasar } from 'quasar'

export default {
  name: 'ReferralPage',
  setup () {
    const $q = useQuasar()
    const loading = ref(false)
    
    const referralForm = ref({
      name: '',
      email: '',
      phone: '',
      address: '',
      agreement: false
    })

    const onReferralSubmit = () => {
      loading.value = true
      
      // Simulate API call
      setTimeout(() => {
        loading.value = false
        $q.notify({
          type: 'positive',
          message: 'Thank you! Your referral link will be sent to your email within 24 hours.',
          position: 'top'
        })
        
        // Reset form
        referralForm.value = {
          name: '',
          email: '',
          phone: '',
          address: '',
          agreement: false
        }
      }, 2000)
    }

    const scrollToForm = () => {
      // Scroll to referral form section
      const element = document.querySelector('.service-card')
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }

    return {
      loading,
      referralForm,
      onReferralSubmit,
      scrollToForm
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
</style> 