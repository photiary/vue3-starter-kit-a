const countMocks = (mock) => {
  mock.onGet('/api/count').reply(200, { count: 10 });
};

export default countMocks;
