<template>
  <q-page class="flex flex-center">
    <div class="text-center">
      <div class="text-h1 text-primary-brown q-mb-md">404</div>
      <div class="text-h3 text-weight-bold q-mb-md">Page Not Found</div>
      <p class="text-h6 text-grey-6 q-mb-xl">
        The page you're looking for doesn't exist or has been moved.
      </p>
      
      <div class="q-gutter-md">
        <q-btn
          color="accent"
          size="lg"
          label="Go Home"
          class="btn-primary"
          to="/"
        />
        <q-btn
          outline
          color="primary"
          size="lg"
          label="Contact Us"
          class="btn-secondary"
          to="/contact"
        />
      </div>
      
      <div class="q-mt-xl">
        <p class="text-body1 text-grey-6 q-mb-md">Or try these popular pages:</p>
        <div class="q-gutter-sm">
          <q-btn
            flat
            color="primary"
            label="Services"
            to="/services"
          />
          <q-btn
            flat
            color="primary"
            label="About Us"
            to="/about"
          />
          <q-btn
            flat
            color="primary"
            label="Get Quote"
            @click="$emit('show-quote')"
          />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'NotFoundPage',
  emits: ['show-quote']
}
</script>

<style scoped>
.text-h1 {
  font-size: 8rem;
  font-weight: 900;
  line-height: 1;
}

@media (max-width: 768px) {
  .text-h1 {
    font-size: 6rem;
  }
}
</style> 