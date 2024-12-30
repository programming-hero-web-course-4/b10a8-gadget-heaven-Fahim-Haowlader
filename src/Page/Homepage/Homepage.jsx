import Cards from "../../Components/Cards/Cards"
import Herobanner from "../../Components/Herobanner/Herobanner"

const Homeage = () => {
  return (
  <div>
    <div className=" pb-32">

      <Herobanner/>
      <h1 className="text-5xl font-bold text-center pt-[380px] pb-16">Explore Cutting-Edge Gadgets</h1>
      <div className="mx-[100px] ">
     <Cards/>
      </div>
    </div>

  </div>
  )
}

export default Homeage
