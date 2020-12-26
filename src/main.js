import { createApp } from 'vue'

import Pokemon from '../pokemon/App.vue'
import Microblog from '../microblog/App.vue'
import RouterApp from '../router/App.vue'
import VuexApp from '../vuex/App.vue';
import { store } from '../vuex/Store.js';

// router
import { router } from '../router/router.js'

const app = createApp(RouterApp);

// Implemented plugin - vue-router
app.use(router);
// use vuex
app.use(store);

app.mount('#app');
