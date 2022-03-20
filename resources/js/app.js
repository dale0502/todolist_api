require('./bootstrap');

import { createApp } from 'vue'
import HelloWorld from './components/app'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons */
import { faPlusSquare, faTrash } from '@fortawesome/free-solid-svg-icons'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* add icons to the library */
library.add(faPlusSquare, faTrash)

const app = createApp({})

app.component('hello-world', HelloWorld)

/* add font awesome icon component */
app.component("font-awesome-icon", FontAwesomeIcon)

app.mount('#app')

