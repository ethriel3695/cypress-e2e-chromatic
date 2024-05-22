import { defineConfig } from 'cypress';
import { installPlugin } from '@chromatic-com/cypress';

export default defineConfig({
  env: {
    disableAutoSnapshot: true,
  },
  viewportWidth: 1280,
  viewportHeight: 720,
  e2e: {
    setupNodeEvents(on, config) {
      installPlugin(on, config);
      on('task', {
        log(message) {
          console.log(message);
          console.log(config);
          return null;
        },
      });
    },
  },
});
