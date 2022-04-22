import React from 'react'
import { persistor, store } from 'library'
import ReactDOM from 'react-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import '@fontsource/inter'
import 'primeicons/primeicons.css'
import 'primereact/resources/primereact.min.css'
import 'primereact/resources/themes/md-dark-indigo/theme.css'
import { PersistGate } from 'redux-persist/lib/integration/react'
import App from './App'
import './styles/index.css'

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <HelmetProvider>
        <React.StrictMode>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </React.StrictMode>
      </HelmetProvider>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
)
