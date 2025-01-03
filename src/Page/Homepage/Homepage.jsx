import Cards from "../../Components/Cards/Cards"
import Herobanner from "../../Components/Herobanner/Herobanner"
import { Helmet } from "react-helmet"

const Homeage = () => {
  return (
  <div>
    <Helmet>
          <title>Gadget Heaven - Home</title>
        </Helmet>
    <div className=" pb-32">
    
      <Herobanner/>
      <h1 className="text-5xl font-bold text-center pt-[340px] pb-16">Explore Cutting-Edge Gadgets</h1>
      <div className="mx-[100px] ">
     <Cards/>
      </div>
    </div>

  </div>
  )
}

export default Homeage
