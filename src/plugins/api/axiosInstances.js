// https://axios-http.com/docs/instance
import axios from 'axios';

const simpleInstance = axios.create({
  headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
});

// https://axios-http.com/docs/interceptors
// 요청 인터셉터 추가하기
simpleInstance.interceptors.request.use(
  function (config) {
    console.log('📡 simpleInstance.interceptors.request config:', config);
    // 요청이 전달되기 전에 작업 수행
    return config;
  },
  function (error) {
    // 요청 오류가 있는 작업 수행
    return Promise.reject(error);
  }
);

// 응답 인터셉터 추가하기
simpleInstance.interceptors.response.use(
  function (response) {
    // 2xx 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
    // 응답 데이터가 있는 작업 수행
    return response;
  },
  function (error) {
    // 2xx 외의 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
    // 응답 오류가 있는 작업 수행
    return Promise.reject(error);
  }
);

export default simpleInstance;
