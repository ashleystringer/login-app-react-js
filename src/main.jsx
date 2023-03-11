import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './contexts/UserProvider';
import { ErrorProvider } from './contexts/ErrorProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ErrorProvider>
        <UserProvider>
          <App/>
        </UserProvider>
      </ErrorProvider>
    </BrowserRouter>
  </React.StrictMode>
)
