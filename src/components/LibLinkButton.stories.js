import LibLinkButton from './LibLinkButton.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Components/LibLinkButton',
  component: LibLinkButton,
  tags: ['autodocs'],
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = {
  args: {
    name: 'Vite',
    href: 'https://vite.dev',
    version: '6',
    icon: 'vite.svg',
    color: '#646cff',
  },
};
