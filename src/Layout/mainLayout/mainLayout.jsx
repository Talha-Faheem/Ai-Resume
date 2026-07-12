import { useState } from "react"
import MainHeader from "../../component/compLayout/mainHeader"
import MenuList from "../../component/Ui/meun"
import FeaturePage from "./component/featurePage"
import MainPage from "./component/mainPage"
import Process from "./component/process"
import Template from "./component/Template"
import Testimonials from "./component/Testimonials"
function mainLayout() {

  const [showMenu,setShowMenu]=useState(false)

  return (
    <div className="bg-blue-900 h-full">
        <MainHeader setMenu={setShowMenu} showMenu={showMenu}/>
        {showMenu?<MenuList />:<></>}
        <MainPage/>
        <FeaturePage/>
        <Process/>
        <Template/>
        <Testimonials/>
    </div>
  )
}

export default mainLayout