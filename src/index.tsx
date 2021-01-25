import { hydrate, render } from 'react-dom';
import App from 'App';
import { useDispatch } from 'react-redux';
import { getUseDispatchRedux } from 'wiloke-react-core/utils';
import reportWebVitals from './reportWebVitals';

getUseDispatchRedux(useDispatch);

const rootElement = document.getElementById('root') as HTMLElement;

if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
