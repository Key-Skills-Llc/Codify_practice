import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import VideoProvider from "./context/store/VideoProvider";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <VideoProvider>
      <App />
    </VideoProvider>
  </BrowserRouter>
);


