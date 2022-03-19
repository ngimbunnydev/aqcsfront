import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { settings } from "./assets/config.js"

import $ from 'jquery'
window.$ = window.JQuery = $
import "popper.js";
import "bootstrap";

import "bootstrap/dist/css/bootstrap.css";

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

import VueGoogleMaps from '@fawmi/vue-google-maps'

import VueChartkick from 'vue-chartkick'
import 'chartkick/chart.js'

import appjs from "./assets/app";
window.appjs = appjs
const app = createApp(App);
app.config.globalProperties.config = settings;
//createApp(App).use(store).use(router).mount('#app')
app
    .use(store)
    .use(router)
    .use(VueGoogleMaps, {
        load: {
            key: 'AIzaSyChpJ846T9mPfT10rIcYFjTiGxvtGwjCsQ',
            //
            //AIzaSyDvyOF88aHMTHk4unuINCvxhqlfI1Fxje8
        },
    })
    .use(VueChartkick)
    .use($)
    .component('fas', FontAwesomeIcon)
    .mount('#app');