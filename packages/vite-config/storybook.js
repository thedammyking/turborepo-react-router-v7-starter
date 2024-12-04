import svgr from '@svgr/rollup';
import autoprefixer from 'autoprefixer';
// eslint-disable-next-line import-x/no-named-as-default
import checker from 'vite-plugin-checker';

import tailwindcss from 'tailwindcss';

export default ({ lintCommand }) => {
  return {
    define: {
      global: 'window'
    },
    css: {
      postcss: {
        plugins: [tailwindcss, autoprefixer]
      },
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler'
        }
      }
    },
    plugins: [
      checker({
        typescript: true,
        eslint: {
          useFlatConfig: true,
          lintCommand
        },
        overlay: {
          initialIsOpen: false
        }
      }),
      svgr({
        typescript: true,
        prettier: false,
        svgo: false,
        titleProp: true,
        ref: true
      })
    ]
  };
};
