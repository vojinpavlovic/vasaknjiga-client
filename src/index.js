import React from 'react';
import ReactDOM from 'react-dom/client';
import './Static/styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Redux
import store from 'App/store'
import { Provider } from "react-redux"

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
