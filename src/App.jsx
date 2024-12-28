import Homepage from './Page/Homepage/Homepage'
import './App.css'
import Dashboard from './Page/Dashboard/Dashboard'
import PrroductPage from './Page/ProductPage/PrroductPage'
import { createBrowserRouter, createRoutesFromElements,Route, RouterProvider } from 'react-router-dom'
import RootLayout from './Layout/RootLayout'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element= {<RootLayout />} >
      <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    )
  )

  return (
    <RouterProvider router ={router}></RouterProvider>
  )
}

export default App
