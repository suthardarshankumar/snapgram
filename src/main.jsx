import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import PostProvider from './context/PostContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PostProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PostProvider>
  </React.StrictMode>,
)
