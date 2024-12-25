import { setup } from '@storybook/vue3';
import { createPinia } from 'pinia';
import '@/styles/style.scss';
import '@/mocks';
import router from '@/router';

const pinia = createPinia();
setup((app) => {
  app.use(pinia).use(router);
});

/** @type { import('@storybook/vue3').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
