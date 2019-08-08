import React from 'react';
import { ToastContainer } from 'react-toastify';

import Main from './components/Main';
import './app.css';

function App() {
  return (
    <div className="app">
      <Main />
      <ToastContainer autoClose={5000} />
    </div>
  );
}

export default App;
