import AxiosMockAdapter from 'axios-mock-adapter';
import { api as axios } from '@/plugins/api';
import counterMocks from '@/mocks/api/counter.js';

const mock = new AxiosMockAdapter(axios, { delayResponse: 200 });

if (import.meta.env.VITE_ENABLE_AXIOS_MOCK === 'true') {
  counterMocks(mock);
}
