/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
  singleQuote: true,
  trailingComma: 'es5',
  endOfLine: 'auto', // LF|CRLF 자동으로 개행문자 사용 https://prettier.io/docs/en/options.html#end-of-line
  plugins: ['prettier-plugin-tailwindcss'], // https://github.com/tailwindlabs/prettier-plugin-tailwindcss?tab=readme-ov-file#installation
};

export default config;
