import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';



import { makeServer } from './api';

import './index.css';

const environment = process.env.NODE_ENV;
makeServer({ environment });

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


