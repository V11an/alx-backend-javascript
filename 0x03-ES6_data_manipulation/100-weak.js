const weakMap = new WeakMap();

function queryAPI(endpoint) {
  const count = weakMap.get(endpoint) || 0;
  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }
  weakMap.set(endpoint, count + 1);
  // Simulate some API call
  return new Promise((resolve) => setTimeout(() => resolve('API response'), 1000));
}

export { weakMap, queryAPI };
