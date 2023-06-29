module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    '@antfu/eslint-config-react',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': 'off',
    'yml/no-empty-mapping-value': 'off',
    'react/no-unknown-property': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'on' : 'off',
  },
}
