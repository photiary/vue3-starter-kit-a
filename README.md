# 환경 구성

`Vite` + `Vue` + `ESLint` + `Prettier`

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
};

export default config;
```

### ESLint와 충돌나는 규칙을 위해 eslint-config-prettier 설치

- https://prettier.io/docs/en/integrating-with-linters
- https://github.com/prettier/eslint-config-prettier

```shell
yarn add --dev eslint-config-prettier
```

### 설치 후 확인

스크립트를 실행하여 리소스를 초기 규칙에 맞게 수정되는 것을 확인한다. (IDE의 자동 포맷은 IDE prettier 설정 필요)

- Intellij는 "Settings > Prettier > run for files"에 `.md` 확장자 추가

```shell
yarn prettier . --write
```
