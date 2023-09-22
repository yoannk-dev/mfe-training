import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

const mount = (el: any) => {
  ReactDOM.createRoot(el!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
}

// If we are in development and in isolation,
// call mount immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#homepageRoot')

  if (devRoot) {
    mount(devRoot)
  }
}

export { mount }