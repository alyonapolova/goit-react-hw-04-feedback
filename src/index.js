import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';

const clickFeedback = false;
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App clickFeedback={clickFeedback} />
  </React.StrictMode>
);
