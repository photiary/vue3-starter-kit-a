import { createApp } from 'vue';
import { createPinia } from 'pinia';
import './assets/style.scss';
import App from './App.vue';
import router from './router';

if (import.meta.env.VITE_ENABLE_AXIOS_MOCK === 'true') {
  // 동적 모듈 가져오기로 Mock 관련 리소스는 클라이언트에 다운로드되지 않도록 한다.
  // `build`의 Rollup 에서도 제외된다.
  await import('./mocks');
}

const pinia = createPinia();

createApp(App).use(pinia).use(router).mount('#app');
