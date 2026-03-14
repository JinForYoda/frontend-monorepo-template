import js from '@eslint/js';
import nxPlugin from '@nx/eslint-plugin';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: ['**/dist', '**/coverage', '**/node_modules', '**/.nx', '**/storybook-static'],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...tseslint.configs.stylistic,
  ...nxPlugin.configs['flat/base'],
  ...nxPlugin.configs['flat/typescript'],
  ...nxPlugin.configs['flat/javascript'],
  {
    files: ['**/*.{ts,tsx,js,jsx,mjs,cjs,mts,cts}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          allow: [],
          depConstraints: [
            {
              sourceTag: '*',
              onlyDependOnLibsWithTags: ['*'],
            },
          ],
        },
      ],
    },
  },
  {
    files: [
      '**/eslint.config.{js,cjs,mjs,ts,cts,mts}',
      '**/vite.config.{js,cjs,mjs,ts,cts,mts}',
      '**/vitest.config.{js,cjs,mjs,ts,cts,mts}',
      '**/.storybook/**/*.{ts,tsx,js,jsx,mjs,cjs,mts,cts}',
      'apps/web/src/main.tsx',
    ],
    rules: {
      '@nx/enforce-module-boundaries': 'off',
    },
  }
);
