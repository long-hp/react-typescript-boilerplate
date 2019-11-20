import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App';
import * as serviceWorker from 'serviceWorker';

const isDev = process.env.NODE_ENV === 'development';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
if (isDev) {
  serviceWorker.unregister();
  if ((module as any).hot) {
    (module as any).hot.accept();
  }
} else {
  serviceWorker.unregister();
}
