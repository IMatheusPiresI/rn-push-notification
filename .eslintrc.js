module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'prettier',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'eslint:recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    'prettier',
    '@typescript-eslint',
    'react',
    'autofix',
    'react-hooks',
    'import',
  ],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-uses-react': 1,
    'object-curly-spacing': ['warn', 'always'],
    'arrow-body-style': ['error', 'as-needed'],
    'react/self-closing-comp': ['error', { component: true, html: true }],
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.jsx', 'js', '.tsx', '.ts'],
      },
    ],
    'import/order': [
      'warn',
      {
        'newlines-between': 'always',
      },
    ],
    'react/prop-types': 'off',
    'import/prefer-default-export': 0,
    'import/no-named-as-default': 0,
  },
};
