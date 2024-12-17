# 환경 구성
`Vite` + `Vue` 

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