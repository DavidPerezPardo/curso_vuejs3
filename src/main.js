import { createApp } from 'vue'

import Pokemon from '../pokemon/App.vue'
import Microblog from '../microblog/App.vue'
import RouterApp from '../router/App.vue'

// router
import { router } from '../router/router.js'

const app = createApp(RouterApp);

// Implemented plugin - vue-router
app.use(router);

app.mount('#app');
