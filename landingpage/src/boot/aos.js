import { boot } from 'quasar/wrappers'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default boot(({ app }) => {
  // Initialize AOS
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    offset: 100,
    delay: 0
  })

  // Make AOS available globally
  app.config.globalProperties.$aos = AOS
}) 