import { MantineProvider } from '@mantine/core'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import President from './President'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(

  <MantineProvider theme={{ colorScheme: 'dark' }} withGlobalStyles withNormalizeCSS>
    <React.StrictMode>
      <App />
      <President />
    </React.StrictMode>
  </MantineProvider>
)
