import { useState } from "react"
import MainFooter from "../../component/compLayout/mainFooter"
import MainHeader from "../../component/compLayout/mainHeader"
import MenuList from "../../component/Ui/meun"
import FAQ from "./component/FAQ"
import FeaturePage from "./component/featurePage"
import MainPage from "./component/mainPage"
import Price from "./component/price"
import Process from "./component/process"
import Template from "./component/Template"
import Testimonials from "./component/Testimonials"

function mainLayout() {

  const [showMenu,setShowMenu]=useState(false)

  return (
    <div className="bg-gradient-to-br from-[#332066] via-[#261C58] to-[#131A37] h-full">
        <MainHeader setMenu={setShowMenu} showMenu={showMenu}/>
        {showMenu?<MenuList />:<></>}
        <MainPage/>
        <FeaturePage/>
        <Process/>
        <Template/>
        <Testimonials/>
        <Price/>
        <FAQ/>
        <MainFooter/>
    </div>
  )
}

export default mainLayout