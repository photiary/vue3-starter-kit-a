import { describe, it, expect, beforeEach } from 'vitest';
import { setActivePinia, createPinia } from 'pinia';
import { useCounterStore } from './counter.js';

describe('useCounterStore', () => {
  let counterStore;

  beforeEach(() => {
    setActivePinia(createPinia());
    counterStore = useCounterStore();
  });

  it('count 초기값은 0이다', () => {
    expect(counterStore.count).toBe(0);
  });

  it('increaseCount() 호출 시 1씩 증가한다', () => {
    counterStore.increaseCount(); // 함수 호출
    expect(counterStore.count).toBe(1); // 증가된 값 검증

    counterStore.increaseCount(); // 다시 호출
    expect(counterStore.count).toBe(2); // 2로 증가
  });
});
