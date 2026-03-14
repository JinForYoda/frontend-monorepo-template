import type { Preview } from '@storybook/react-vite';

import '../../../styles/tailwind.css';

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'Canvas',
      values: [
        { name: 'Canvas', value: '#0c0a09' },
        { name: 'Panel', value: '#1c1917' },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'centered',
  },
};

export default preview;
