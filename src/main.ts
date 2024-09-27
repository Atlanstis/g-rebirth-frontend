import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { setupStore } from './stores';
import { setupPlugin } from './plugins';

function setup() {
  const app = createApp(App);

  app.use(router);
  setupStore(app);
  setupPlugin();
  app.mount('#app');
}

setup();
