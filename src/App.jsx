import Homepage from './Page/Homepage/Homepage'
import './App.css'
import Dashboard from './Page/Dashboard/Dashboard'
import PrroductPage from './Page/ProductPage/PrroductPage'
import { createBrowserRouter, createRoutesFromElements,Navigate,Route, RouterProvider } from 'react-router-dom'
import RootLayout from './Layout/RootLayout'
import OfferPage from './Page/OfferPage/OfferPage'
import StatisticsPage from './Page/Statistics/StatisticsPage'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element= {<RootLayout />} >
      <Route path="" element={<Navigate to="/home"/>} />
      <Route path="home" element={<Homepage/>} />
      <Route path="details" >
      <Route path="" element={<Navigate to='/home'/>} />
      <Route path=":id" element={<PrroductPage/>} />
      </Route>
      <Route path="home" element={<Homepage/>} />
      <Route path="dashboard" element={<Dashboard/>} />
      <Route path="offers" element={<OfferPage/>} />
      <Route path="statistics" element={<StatisticsPage/>} />
      </Route>
    )
  )

  return (
    <RouterProvider router ={router}></RouterProvider>
  )
}

export default App
