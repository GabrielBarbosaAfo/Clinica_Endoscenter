import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App.jsx'
import Home from './components/Home.jsx'
import Sobre from './components/Sobre.jsx'
import Especialidades from './components/Especialidades.jsx'
import ErrorPage from './pages/ErrorPage.jsx'

require('dotenv').config();

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'sobre',
        element: <Sobre />
      },
      {
        path: 'especialidades',
        element: <Especialidades />
      }
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
