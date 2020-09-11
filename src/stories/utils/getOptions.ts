export default function getOptions<T>(source: T) {
  if (Array.isArray(source)) {
    return source.reduce(
      (obj, item) => ({
        ...obj,
        [item]: item,
      }),
      {},
    );
  }
  return Object.keys(source).reduce((obj, key) => {
    return {
      ...obj,
      [key]: key,
    };
  }, {});
}
