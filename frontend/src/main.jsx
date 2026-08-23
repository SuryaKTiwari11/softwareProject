/**
 * @file main.jsx
 * @description Application entry point.
 *
 * Bootstraps the React 18 root, wraps the tree with global providers, and
 * tracks GA4 page views (initial load + SPA route changes) in production.
 *
 * Provider order (outer → inner):
 *   BrowserRouter → AuthProvider  → App + ToastContainer
 */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { trackPageView } from './analytics.js'
import { AuthProvider } from './context/AuthContext'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function AnalyticsRouteTracker() {
  const location = useLocation()
  useEffect(() => { trackPageView() }, [location.pathname, location.search])
  return null
}

createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/lostnfound">
    <AnalyticsRouteTracker />
    <AuthProvider>
        <App />
        <ToastContainer 
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
    </AuthProvider>
  </BrowserRouter>,
)
