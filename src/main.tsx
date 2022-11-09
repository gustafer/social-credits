import { MantineProvider } from '@mantine/core'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { atom, RecoilRoot } from 'recoil'
import App from './pages/App'
import Root from './routes/root'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import ErrorPage from './pages/ErrorPage'
import Amosus from './pages/Amosus'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <App />
      },
      {
        path: "/Amosus",
        element: <Amosus />
      }
    ]
  },

]);


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(

  <MantineProvider theme={{ colorScheme: 'dark' }} withGlobalStyles withNormalizeCSS>
    <RecoilRoot>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </RecoilRoot>
  </MantineProvider>
)
