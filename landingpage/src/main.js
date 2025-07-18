import { createApp } from 'vue'
import { Quasar, Notify, Loading, Dialog, LocalStorage, SessionStorage } from 'quasar'

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/src/css/index.sass'

// Assumes your root component is App.vue
// and placed in same folder as main.js
import App from './App.vue'
import router from './router'

const myApp = createApp(App)

myApp.use(Quasar, {
  plugins: {
    Notify,
    Loading,
    Dialog,
    LocalStorage,
    SessionStorage
  },
  config: {
    brand: {
      primary: '#8B4513', // Rich brown
      secondary: '#F5F5DC', // Cream white
      accent: '#FFD700', // Golden yellow
      dark: '#2C1810', // Dark brown
      darkPage: '#121212',
      positive: '#21BA45',
      negative: '#C10015',
      info: '#31CCEC',
      warning: '#F2C037'
    }
  }
})

myApp.use(router)

// Assumes you have a <div id="app"></div> in your index.html
myApp.mount('#app') 