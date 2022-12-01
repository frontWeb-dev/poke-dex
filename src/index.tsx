import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  //<React.StrictMode> 개발 환경에서 동일한 api가 동일한 값을 return하는지 확인해줌?
  <App />
  //</React.StrictMode>
);
