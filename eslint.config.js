import globals from "globals";
import pluginJs from "@eslint/js";
import pluginVue from "eslint-plugin-vue";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,mjs,cjs,vue}"]},
  // https://eslint.org/docs/latest/use/configure/ignore
  // 빌드 파일 무시
  { ignores: ['**/dist/**'] },
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...pluginVue.configs["flat/essential"],
  {
    // https://eslint.org/docs/latest/use/configure/rules
    rules: {
      "no-var": "error", // https://eslint.org/docs/latest/rules/no-var
    }
  },
];