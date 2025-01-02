import Homepage from './Page/Homepage/Homepage'
import './App.css'
import Dashboard from './Page/Dashboard/Dashboard'
import PrroductPage from './Page/ProductPage/PrroductPage'
import { createBrowserRouter, createRoutesFromElements,Navigate,Route, RouterProvider } from 'react-router-dom'
import RootLayout from './Layout/RootLayout'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element= {<RootLayout />} >
      <Route path="" element={<Navigate to="/home"/>} />
      <Route path="home" element={<Homepage/>} />
      <Route path="details" >
      <Route path="" element={<Navigate to='/details/P001'/>} />
      <Route path=":id" element={<PrroductPage/>} />
      </Route>
      <Route path="home" element={<Homepage/>} />
      </Route>
    )
  )

  return (
    <RouterProvider router ={router}></RouterProvider>
  )
}

export default App
