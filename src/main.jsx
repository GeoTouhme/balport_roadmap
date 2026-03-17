import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// إضافة ستايل عالمي لإزالة الفراغات البيضاء وتوحيد الخلفية
const style = document.createElement('style');
style.innerHTML = `
  * {
    box-sizing: border-box;
  }
  html, body {
    margin: 0;
    padding: 0;
    background: #0a0a0f;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
  }
  #root {
    width: 100%;
  }
`;
document.head.appendChild(style);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
