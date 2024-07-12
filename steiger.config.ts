import { defineConfig } from 'steiger';
// import fsd from '@feature-sliced/steiger-plugin';
// this is Feature Sliced Design architectural linter

export default defineConfig({
  rules: {
    'no-layer-public-api': 'off',
    'insignificant-slice': 'off',
  },
});
