module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'prettier'],
  plugins: [],
  // add your custom rules here
  rules: {
    'vue/require-prop-types': 0,
    'no-unused-vars': 1,
    'lines-between-class-members': 0,
    eqeqeq: 1,
    'prefer-const': 0,
    'no-unused-expressions': 1,
    'no-console': 0,
    'spaced-comment': 0,
    'require-await': 0,
    'vue/no-unused-components': 1,
    'nuxt/no-timing-in-fetch-data': 1,
    'promise/param-names': 1,
    'no-constant-condition': 0,
    'vue/no-v-html': 0,
    'no-unreachable': 0
  }
}
