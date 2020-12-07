const styles = `
.container {
  position: relative;
}
`;
const actions = `
const getTodo = () => {
  return {
    type: 'GET_TODO',
    payload: {}
  }
}
`;
const reducers = ``;
const sagas = ``;
const thunks = ``;

const config = {
  baseUrl: 'src',
  typescript: true,
  reactNative: false,
  createIndexFile: true,
  templates: {
    styles,
    actions,
    reducers,
    sagas,
    thunks,
  },
};
module.exports = config;
