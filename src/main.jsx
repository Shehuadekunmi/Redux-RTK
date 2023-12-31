import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { ApiSlice } from "./features/api/ApiSlice";


ReactDOM.createRoot(document.getElementById('root'))
  .render(
    <React.StrictMode>
      <ApiProvider api={ApiSlice}>
        <App />
      </ApiProvider>
    </React.StrictMode>
  );
