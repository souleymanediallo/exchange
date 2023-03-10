import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret)

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);
app.mount('#app')


// https://blog.fontawesome.com/how-to-use-vue-js-with-font-awesome/

