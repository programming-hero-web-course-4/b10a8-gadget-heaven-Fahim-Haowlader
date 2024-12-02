import Cards from "../../Components/Cards/Cards"
import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
import Herobanner from "../../Components/Herobanner/Herobanner"

const Homeage = () => {
  return (
  <div>
    <div className="p-8 pb-32">
      <Header/>
      <Herobanner/>
      <h1 className="text-5xl font-bold text-center pt-[380px] pb-16">Explore Cutting-Edge Gadgets</h1>
      <div className="mx-[100px] ">
     <Cards/>
      </div>
    </div>
      <Footer/>
  </div>
  )
}

export default Homeage
