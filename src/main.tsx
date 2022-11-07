import { MantineProvider } from '@mantine/core'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { atom, RecoilRoot } from 'recoil'
import App from './App'
import President from './President'



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(

  <MantineProvider theme={{ colorScheme: 'dark' }} withGlobalStyles withNormalizeCSS>
    <RecoilRoot>
      <React.StrictMode>
        <App />
        <President />
      </React.StrictMode>
    </RecoilRoot>
  </MantineProvider>
)
