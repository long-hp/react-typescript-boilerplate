const isDev = process.env.NODE_ENV === 'development';

export const debug = {
  dev(...args: any[]) {
    if (isDev) {
      console.log(...args);
    }
  },
  prod(...args: any[]) {
    if (!isDev) {
      console.log(...args);
    }
  },
  all(...args: any[]) {
    console.log(...args);
  },
};
