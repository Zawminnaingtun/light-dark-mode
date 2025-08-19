import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ThemePage from './features/theme/page/ThemePage'
import router from './router/router'
import { RouterProvider } from 'react-router'
import Layout from './layout'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* <Layout>
      <ThemePage />
    </Layout> */}
  </StrictMode>,
)
