<template>
  <q-page>
    <!-- Hero Section -->
    <section class="hero-section section-padding">
      <div class="container">
        <div class="text-center">
          <h1 class="text-h2 text-weight-bold text-shadow q-mb-md">
            FAQ & Resources
          </h1>
          <p class="text-h6 q-mb-xl">
            Find answers to common questions and helpful resources for your move
          </p>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="section-padding bg-white">
      <div class="container">
        <div class="text-center q-mb-xl">
          <h2 class="section-title">Frequently Asked Questions</h2>
          <p class="section-subtitle">
            Quick answers to the most common questions about our services
          </p>
        </div>

        <div class="row q-gutter-lg">
          <div class="col-12 col-md-6">
            <q-list class="bg-secondary-cream rounded-borders">
              <q-expansion-item
                group="faq"
                icon="help"
                label="How far in advance should I book my move?"
                header-class="text-primary-brown"
              >
                <q-card>
                  <q-card-section>
                    We recommend booking at least 2-4 weeks in advance for residential moves and 4-6 weeks 
                    for commercial moves. During peak season (May-September), earlier booking is advised.
                  </q-card-section>
                </q-card>
              </q-expansion-item>

              <q-expansion-item
                group="faq"
                icon="help"
                label="What is included in your moving services?"
                header-class="text-primary-brown"
              >
                <q-card>
                  <q-card-section>
                    Our full-service moving includes packing, loading, transportation, unloading, 
                    and unpacking. We also provide furniture disassembly/assembly, specialty item 
                    handling, and basic furniture placement.
                  </q-card-section>
                </q-card>
              </q-expansion-item>

              <q-expansion-item
                group="faq"
                icon="help"
                label="Do you provide packing materials?"
                header-class="text-primary-brown"
              >
                <q-card>
                  <q-card-section>
                    Yes, we provide all necessary packing materials including boxes, tape, bubble wrap, 
                    and specialty containers for fragile items. These are included in our full-service 
                    packing option.
                  </q-card-section>
                </q-card>
              </q-expansion-item>

              <q-expansion-item
                group="faq"
                icon="help"
                label="How do you handle fragile and valuable items?"
                header-class="text-primary-brown"
              >
                <q-card>
                  <q-card-section>
                    We use specialized packing materials and techniques for fragile items. Valuable 
                    items are inventoried separately and can be insured for their full value. Our 
                    team is trained in handling antiques, artwork, and other delicate items.
                  </q-card-section>
                </q-card>
              </q-expansion-item>

              <q-expansion-item
                group="faq"
                icon="help"
                label="What if I need to change my move date?"
                header-class="text-primary-brown"
              >
                <q-card>
                  <q-card-section>
                    We understand that circumstances can change. Contact us at least 48 hours before 
                    your scheduled move to reschedule. We'll work with you to find an alternative 
                    date that works for both parties.
                  </q-card-section>
                </q-card>
              </q-expansion-item>
            </q-list>
          </div>

          <div class="col-12 col-md-6">
            <q-list class="bg-secondary-cream rounded-borders">
              <q-expansion-item
                group="faq"
                icon="help"
                label="How is the cost calculated?"
                header-class="text-primary-brown"
              >
                <q-card>
                  <q-card-section>
                    Our pricing is based on several factors including distance, volume/weight of items, 
                    services required (packing, storage, etc.), and timing. We provide detailed, 
                    transparent quotes with no hidden fees.
                  </q-card-section>
                </q-card>
              </q-expansion-item>

              <q-expansion-item
                group="faq"
                icon="help"
                label="Are you licensed and insured?"
                header-class="text-primary-brown"
              >
                <q-card>
                  <q-card-section>
                    Yes, we are fully licensed and insured. We carry comprehensive liability insurance 
                    and workers' compensation coverage. Additional valuation coverage is available 
                    for your belongings.
                  </q-card-section>
                </q-card>
              </q-expansion-item>

              <q-expansion-item
                group="faq"
                icon="help"
                label="Do you offer storage services?"
                header-class="text-primary-brown"
              >
                <q-card>
                  <q-card-section>
                    Yes, we offer secure, climate-controlled storage facilities for both short-term 
                    and long-term storage needs. Our facilities are monitored 24/7 and offer flexible 
                    access options.
                  </q-card-section>
                </q-card>
              </q-expansion-item>

              <q-expansion-item
                group="faq"
                icon="help"
                label="What areas do you serve?"
                header-class="text-primary-brown"
              >
                <q-card>
                  <q-card-section>
                    We provide moving services throughout the continental United States, including 
                    local, long-distance, and international moves. Contact us for specific coverage 
                    in your area.
                  </q-card-section>
                </q-card>
              </q-expansion-item>

              <q-expansion-item
                group="faq"
                icon="help"
                label="How can I track my move?"
                header-class="text-primary-brown"
              >
                <q-card>
                  <q-card-section>
                    We provide real-time tracking for all moves. You'll receive regular updates via 
                    phone, email, or text message. For long-distance moves, you can also track your 
                    shipment online through our customer portal.
                  </q-card-section>
                </q-card>
              </q-expansion-item>
            </q-list>
          </div>
        </div>
      </div>
    </section>

    <!-- Resources Section -->
    <section class="section-padding bg-secondary-cream">
      <div class="container">
        <div class="text-center q-mb-xl">
          <h2 class="section-title">Helpful Resources</h2>
          <p class="section-subtitle">
            Downloadable guides and checklists to help you prepare for your move
          </p>
        </div>

        <div class="row q-gutter-lg">
          <div class="col-12 col-md-4" data-aos="fade-up" data-aos-delay="100">
            <q-card class="service-card text-center q-pa-lg">
              <div class="card-icon">
                <q-icon name="description" size="2rem" />
              </div>
              <h3 class="text-h6 text-primary-brown q-mb-md">Moving Checklist</h3>
              <p class="text-body2 q-mb-lg">
                A comprehensive 8-week checklist to help you prepare for your move, from initial 
                planning to settling into your new home.
              </p>
              <q-btn
                color="accent"
                label="Download PDF"
                class="btn-primary"
                @click="downloadResource('checklist')"
              />
            </q-card>
          </div>

          <div class="col-12 col-md-4" data-aos="fade-up" data-aos-delay="200">
            <q-card class="service-card text-center q-pa-lg">
              <div class="card-icon">
                <q-icon name="inventory" size="2rem" />
              </div>
              <h3 class="text-h6 text-primary-brown q-mb-md">Packing Guide</h3>
              <p class="text-body2 q-mb-lg">
                Expert tips and techniques for packing different types of items, including fragile 
                items, electronics, and furniture.
              </p>
              <q-btn
                color="accent"
                label="Download PDF"
                class="btn-primary"
                @click="downloadResource('packing')"
              />
            </q-card>
          </div>

          <div class="col-12 col-md-4" data-aos="fade-up" data-aos-delay="300">
            <q-card class="service-card text-center q-pa-lg">
              <div class="card-icon">
                <q-icon name="business" size="2rem" />
              </div>
              <h3 class="text-h6 text-primary-brown q-mb-md">Commercial Move Guide</h3>
              <p class="text-body2 q-mb-lg">
                Specialized guide for business relocations, including IT equipment handling, 
                minimal downtime strategies, and employee communication.
              </p>
              <q-btn
                color="accent"
                label="Download PDF"
                class="btn-primary"
                @click="downloadResource('commercial')"
              />
            </q-card>
          </div>
        </div>
      </div>
    </section>

    <!-- Tips Section -->
    <section class="section-padding bg-white">
      <div class="container">
        <div class="text-center q-mb-xl">
          <h2 class="section-title">Moving Tips & Advice</h2>
          <p class="section-subtitle">
            Expert advice to make your move smoother and more efficient
          </p>
        </div>

        <div class="row q-gutter-lg">
          <div class="col-12 col-md-6" data-aos="fade-up" data-aos-delay="100">
            <q-card class="service-card q-pa-lg">
              <h3 class="text-h5 text-primary-brown q-mb-md">Before Your Move</h3>
              <div class="q-gutter-y-sm">
                <div class="row items-start q-gutter-sm">
                  <q-icon name="check_circle" color="positive" size="sm" class="q-mt-xs" />
                  <span class="text-body2">Declutter and donate items you no longer need</span>
                </div>
                <div class="row items-start q-gutter-sm">
                  <q-icon name="check_circle" color="positive" size="sm" class="q-mt-xs" />
                  <span class="text-body2">Create an inventory of all your belongings</span>
                </div>
                <div class="row items-start q-gutter-sm">
                  <q-icon name="check_circle" color="positive" size="sm" class="q-mt-xs" />
                  <span class="text-body2">Pack a "first night" box with essentials</span>
                </div>
                <div class="row items-start q-gutter-sm">
                  <q-icon name="check_circle" color="positive" size="sm" class="q-mt-xs" />
                  <span class="text-body2">Update your address with important services</span>
                </div>
                <div class="row items-start q-gutter-sm">
                  <q-icon name="check_circle" color="positive" size="sm" class="q-mt-xs" />
                  <span class="text-body2">Take photos of valuable items for insurance</span>
                </div>
              </div>
            </q-card>
          </div>

          <div class="col-12 col-md-6" data-aos="fade-up" data-aos-delay="200">
            <q-card class="service-card q-pa-lg">
              <h3 class="text-h5 text-primary-brown q-mb-md">After Your Move</h3>
              <div class="q-gutter-y-sm">
                <div class="row items-start q-gutter-sm">
                  <q-icon name="check_circle" color="positive" size="sm" class="q-mt-xs" />
                  <span class="text-body2">Unpack essential items first</span>
                </div>
                <div class="row items-start q-gutter-sm">
                  <q-icon name="check_circle" color="positive" size="sm" class="q-mt-xs" />
                  <span class="text-body2">Set up utilities and internet services</span>
                </div>
                <div class="row items-start q-gutter-sm">
                  <q-icon name="check_circle" color="positive" size="sm" class="q-mt-xs" />
                  <span class="text-body2">Register your vehicle and update driver's license</span>
                </div>
                <div class="row items-start q-gutter-sm">
                  <q-icon name="check_circle" color="positive" size="sm" class="q-mt-xs" />
                  <span class="text-body2">Explore your new neighborhood</span>
                </div>
                <div class="row items-start q-gutter-sm">
                  <q-icon name="check_circle" color="positive" size="sm" class="q-mt-xs" />
                  <span class="text-body2">Schedule maintenance for appliances</span>
                </div>
              </div>
            </q-card>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="section-padding bg-primary-brown text-white">
      <div class="container">
        <div class="text-center">
          <h2 class="text-h3 text-weight-bold q-mb-md">Still Have Questions?</h2>
          <p class="text-h6 q-mb-xl">
            Our team is here to help with any questions about your move
          </p>
          <div class="q-gutter-md">
            <q-btn
              color="accent"
              size="xl"
              label="Contact Us"
              class="btn-primary"
              to="/contact"
            />
            <q-btn
              outline
              size="xl"
              label="Get Free Quote"
              class="btn-secondary text-white"
              @click="$emit('show-quote')"
            />
          </div>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script>
import { useQuasar } from 'quasar'

export default {
  name: 'FAQPage',
  emits: ['show-quote'],
  setup () {
    const $q = useQuasar()

    const downloadResource = (type) => {
      // Simulate file download
      $q.notify({
        type: 'positive',
        message: `Downloading ${type} guide...`,
        position: 'top'
      })
      
      // In a real application, this would trigger an actual file download
      setTimeout(() => {
        $q.notify({
          type: 'positive',
          message: `${type} guide downloaded successfully!`,
          position: 'top'
        })
      }, 2000)
    }

    return {
      downloadResource
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