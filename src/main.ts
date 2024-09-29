import { createApp } from 'vue';
import App from './App.vue';
import { setupRouter } from './router';
import { setupStore } from './stores';
import { setupPlugin } from './plugins';

function setup() {
  const app = createApp(App);

  setupRouter(app);
  setupStore(app);
  setupPlugin();
  app.mount('#app');
}

setup();
