# 환경 구성

`Vite` + `Vue` + `ESLint` + `Prettier` + `Pinia` + `Vue Router` + `Sass` + `Tailwindcss`

# 🍕 프로젝트 생성

- https://vite.dev/guide/#scaffolding-your-first-vite-project

```shell
yarn create vite
```

### 설치 후 확인

```shell
yarn install
yarn dev
```

# 🍔 ESLint

- https://eslint.org/docs/latest/use/getting-started#quick-start

```shell
yarn create @eslint/config
```

### 설치 후 확인

`main.js`에 코드를 추가하고 스크립트를 실행하여 에러 검출 확인한다. (IDE의 자동 검출은 IDE eslint 설정 필요)

```javascript
var eslint = 'abc';
```

```shell
yarn eslint .
```

# 🍟 Prettier

- https://prettier.io/docs/en/install

```shell
yarn add --dev --exact prettier

# .prettierrc 에서 prettier.config.js 로 수정
node --eval "fs.writeFileSync('prettier.config.js','')"

node --eval "fs.writeFileSync('.prettierignore','# Ignore artifacts:\nbuild\ncoverage\n')"
```

`prettier.config.js` 리소스에 규칙 추가

- https://prettier.io/docs/en/configuration

```javascript
/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
  singleQuote: true,
  trailingComma: 'es5',
  endOfLine: 'auto', // LF|CRLF 자동으로 개행문자 사용 https://prettier.io/docs/en/options.html#end-of-line
};

export default config;
```

### eslint-config-prettier ESLint와 충돌나는 규칙을 위해 설치

- https://prettier.io/docs/en/integrating-with-linters
- https://github.com/prettier/eslint-config-prettier

```shell
yarn add --dev eslint-config-prettier
```

### eslint-plugin-prettier Prettier 규칙을 ESLint로 실행하기 위해 설치

- https://github.com/prettier/eslint-plugin-prettier?tab=readme-ov-file#installation

```shell
yarn add --dev eslint-plugin-prettier
```

### 설치 후 확인

스크립트를 실행하여 리소스를 초기 규칙에 맞게 수정되는 것을 확인한다. (IDE의 자동 포맷은 IDE prettier 설정 필요)

- Intellij는 "Settings > Prettier > run for files"에 `.md` 확장자 추가

```shell
yarn prettier . --write
```

# 🍍 Pinia

- https://pinia.vuejs.org/getting-started.html

```shell
yarn add pinia
```

# 🌭Vue Router

- https://router.vuejs.org/installation.html

```shell
yarn add vue-router
```

# 🍿 SASS

- https://classic.yarnpkg.com/en/package/sass-embedded
- https://vite.dev/config/shared-options#css-preprocessoroptions

Vite 문서에 추천으로 sass 대신 sass-embedded 를 사용

```shell
yarn add --dev sass-embedded
```

# 🌊 tailwindcss

- https://tailwindcss.com/docs/guides/vite#vue

🚨 Vite 프로젝트 생성에 만들어진 `src/style.css`의 `body`, `#app` 등 초기 CSS는 모두 제거해야 Tailwindcss의 preflight가 적용된다.

```shell
yarn add --dev tailwindcss postcss autoprefixer

npx tailwindcss init -p
```

### Tailwindcss의 prettier

- https://tailwindcss.com/docs/editor-setup#automatic-class-sorting-with-prettier
- https://github.com/tailwindlabs/prettier-plugin-tailwindcss

```shell
yarn add --dev prettier prettier-plugin-tailwindcss
```

### 설치 후 확인

리소스 추가 후 자동으로 `class="bg-white p-0"` 클래스 순서가 변경되는 것을 확인한다. (필요에 따라 IDE 재시작)

```html
class="p-0 bg-white"
```

🚨 Intellij 에러가 발생하면 `@tailwindcss/language-server` 최신 버전으로 설치하고 'Languages & Frameworks > Style Sheets > Tailwindcss' 에서 Language Server를 변경한다.

> Tailwind CSS: (node:7436) ExperimentalWarning: CommonJS module ... 생략

```shell
npm install -g @tailwindcss/language-server@0.0.27
```

# yarn v4

https://yarnpkg.com/getting-started/install#updating-yarn

```shell
yarn set version stable

yarn install
```

### .gitignore

- https://yarnpkg.com/getting-started/qa#which-files-should-be-gitignored

yarn 버전업에 따른 git 제외 대상 추가

```
.yarn/*
!.yarn/cache
!.yarn/patches
!.yarn/plugins
!.yarn/releases
!.yarn/sdks
!.yarn/versions
```
