// @ts-check
import eslint from '@eslint/js'
import { defineConfig } from 'eslint/config'
import tseslint from 'typescript-eslint'
import nodePlugin from 'eslint-plugin-n'

export default defineConfig(
  { ignores: ['build/*', 'eslint.config.mjs'] },
  eslint.configs.recommended,
  tseslint.configs.recommendedTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  nodePlugin.configs['flat/recommended-module'],
  {
    rules: {
      'no-undef': 'error', // not sure why this one is not part of the recommended rules
    },
  },
)
