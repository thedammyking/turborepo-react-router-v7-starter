import jsxA11y from 'eslint-plugin-jsx-a11y';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';

import defaultConfig from './index.js';

import tailwind from 'eslint-plugin-tailwindcss';

/** @type {import('eslint').Linter.Config[]} */
export default [
  // Default
  ...defaultConfig,

  // React
  react.configs.flat.recommended,
  react.configs.flat['jsx-runtime'],
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        ...globals.browser
      }
    },
    rules: {
      'react/button-has-type': 'error',
      'react/display-name': 'off',
      'react/forbid-prop-types': 'off',
      'react/jsx-closing-tag-location': 'error',
      'react/jsx-filename-extension': [
        'error',
        { extensions: ['.jsx', '.tsx'], ignoreFilesWithoutCode: true }
      ],
      'react/no-multi-comp': 'error',
      'react/prefer-stateless-function': 'error',
      'react/prop-types': 'off',
      'react/jsx-no-leaked-render': 'error',
      'react/jsx-no-script-url': 'error',
      'react/jsx-pascal-case': [
        'error',
        {
          allowAllCaps: false,
          allowNamespace: true,
          allowLeadingUnderscore: false
        }
      ],
      'react/no-unstable-nested-components': 'error',
      'react/no-array-index-key': 'error',
      'react/jsx-no-useless-fragment': 'error',
      'react/jsx-props-no-spread-multi': 'error',
      'react/style-prop-object': 'error'
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  },

  // React Hooks
  {
    plugins: {
      'react-hooks': reactHooks
    },
    rules: {
      'react-hooks/exhaustive-deps': 'warn'
    }
  },

  // JSX A11y
  jsxA11y.flatConfigs.recommended,

  // Tailwind
  ...tailwind.configs['flat/recommended'],
  {
    rules: {
      'tailwindcss/no-custom-classname': 'off'
    },
    settings: {
      tailwindcss: {
        callees: ['cn', 'classnames', 'clsx', 'ctl'],
        config: './tailwind.config.ts',
        removeDuplicates: true
      }
    }
  }
];
