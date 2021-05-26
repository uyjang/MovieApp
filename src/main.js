import { createApp } from 'vue'
import App from './App'
import store from './store'  // Same as './store/index.js'
import router from './routes' // Same as './routes/index.js'
import loadImage from './plugins/loadImage'

createApp(App)
  .use(store) //this.$store 이런식으로 this를 붙여서 프로젝트 어디에서나 사용하고 있었음. 이것이 플러그인이다
  .use(router)
  .use(loadImage)
  .mount('#app')
