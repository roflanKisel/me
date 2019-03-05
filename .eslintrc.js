module.exports = {
  extends: "airbnb",
  parser: "babel-eslint",
  rules: {
    'arrow-parens': ['error', 'always'],
    'lines-between-class-members': [0],
    'object-curly-spacing': [2, 'never'],
    'quotes': [2, 'single'],
    'react/prop-types': [2, {ignore: ['children']}],
  }
};
