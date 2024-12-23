# 환경 구성

`Vite` + `Vue` + `ESLint` + `Prettier` + `Pinia` + `Vue Router` + `Sass` + `Tailwindcss` + `Storybook` + `Vitest` + `Axios`

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

# 🏈 yarn > pnpm 으로 전환

2024-12-21 시점에 Vite 6 환경에서 Storybook 을 `yarn`으로 설치하면 ESM 관련 오류가 발생하여 `pnpm`으로 전환한다.

- https://pnpm.io/installation#using-corepack

🚨 윈도우 환경에서는 보안 Widows Defender 설정에서 프로젝트 폴더를 제외시키고, 관리자 권한으로 커맨드창을 실행한다.

```shell
corepack enable pnpm
corepack use pnpm@latest
```

# 📕 Storybook

- https://storybook.js.org/docs/get-started/frameworks/vue3-vite

설치 후 Storybook 서버가 자동 실행된다. 🚨 설치 시 생성되는 예제 리소스(src/stories)는 프로젝트 시작시 제거

```shell
pnpm dlx storybook@latest init
```

### Pinia

- https://storybook.js.org/recipes/pinia

`.storybook/preview.js`

```javascript
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from '@/App.vue';

const pinia = createPinia();
createApp(App).use(pinia);
```

### CSS (Tailwindcss, Sass)

- https://storybook.js.org/recipes/tailwindcss
- https://storybook.js.org/recipes/sass

`@storybook/addon-styling-webpack` 설치는 불필요

`.storybook/preview.js`

```javascript
import '@/assets/style.scss';
```

### Storybook 실행

```shell
pnpm storybook
```

# 🧂 Vitest

- https://vitest.dev/guide/

```shell
pnpm add -D vitest
```

# 🥓 Axios

- https://axios-http.com/docs/intro

```shell
pnpm add axios
```

### axios-mock-adapter

- https://www.npmjs.com/package/axios-mock-adapter

```shell
pnpm add -D axios-mock-adapter
```

# 🥚 검토 패키지

- statcounter https://gs.statcounter.com/
- bestofjs https://bestofjs.org/
- OSS insight https://ossinsight.io/
- State of JavaScript https://stateofjs.com/en-US

### etc.

- Lodash https://lodash.com
- VueUse https://vueuse.org
- timeago.js https://github.com/hustcc/timeago.js
- dayjs https://day.js.org

### Icon

- Heroicons (Tailwind CSS) https://heroicons.com
- Tabler Icons https://tabler.io/icons
- Pictogrammers (Vuetify) https://pictogrammers.com
- Font Awesome https://fontawesome.com
- Google Fonts https://fonts.google.com/icons
- Remix Icon https://remixicon.com
- Phosphor Icons https://phosphoricons.com
- Lucide https://lucide.dev
- Boxicons https://boxicons.com/

### Chart
https://ossinsight.io/collections/javascript-charting/

- Vue Flow https://vueflow.dev

### Animation

- anime.js https://animejs.com/
- Motion https://motion.dev/
- Lottie https://lottiefiles.com/
- mo.js https://mojs.github.io/
- canvas-confetti https://github.com/catdad/canvas-confetti
- particles.js https://vincentgarreau.com/particles.js
- tsParticles https://particles.js.org

### Script

- rimraf https://github.com/isaacs/rimraf#readme

  `package.json` build 후 생성되는 dist 폴더, 리소스를 삭제하는 스크립트
  ```json
  {
    "scripts": {
      "clean": "rimraf dist .turbo"
    }
  }
  ```

# 🍳 Reference & Knowledge

- CSS Gradient https://cssgradient.io
- Tailwind CSS Color Generator https://uicolors.app/create
- CSS Bounce-in Animation https://codepen.io/nelledejones/pen/gOOPWrK

- HyperUI https://www.hyperui.dev

- CSS-TRICKS https://css-tricks.com
- 웹 프로그래밍 튜토리얼 https://poiemaweb.com
- 1분 코딩 https://studiomeal.com/blog
- patterns https://www.patterns.dev

### 보안

- OWASP https://owasp.org/