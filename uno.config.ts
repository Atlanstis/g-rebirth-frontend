import { defineConfig, presetUno } from 'unocss';

export default defineConfig({
  presets: [presetUno()],
  shortcuts: {
    'flex-col': 'flex flex-col',
    'flex-x-center': 'flex justify-center',
    'flex-y-center': 'flex items-center',
    'flex-center': 'flex items-center justify-center',
    'flex-1-hidden': 'flex-1 overflow-hidden',
  },
});
