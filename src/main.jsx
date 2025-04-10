import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomeSection from './App.jsx'
import "./index.css"
import Layout from './layout.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {index: true, element: <HomeSection />},
      {path: "about", element: <h1>About</h1>},
      {path: "service", element: <h1>Services</h1>},
      {path: "project", element: <h1>Portfolio</h1>},
      {path: "contact", element: <h1>Contact Us</h1>}
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
