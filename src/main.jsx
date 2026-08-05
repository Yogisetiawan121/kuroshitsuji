import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Register the caching Service Worker only on the production build.
// In dev it would serve stale local assets and confuse iteration, so we
// unregister any leftover SW and purge old caches instead.
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    if (import.meta.env.PROD) {
      navigator.serviceWorker.register('/sw.js').catch((err) => {
        console.warn('ServiceWorker registration skipped:', err);
      });
    } else {
      navigator.serviceWorker.getRegistrations().then((registrations) =>
        Promise.all(registrations.map((reg) => reg.unregister()))
      ).then(() => {
        if (window.caches) {
          return caches.keys().then((keys) =>
            Promise.all(keys.map((key) => caches.delete(key)))
          );
        }
      }).catch((err) => {
        console.warn('ServiceWorker cleanup skipped:', err);
      });
    }
  });
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
