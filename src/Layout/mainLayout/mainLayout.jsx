import MainHeader from "../../component/compLayout/mainHeader"
import MainPage from "./component/mainPage"

function mainLayout() {
  return (
    <div className="bg-blue-900 h-full">
        <MainHeader/>
        <MainPage/>
    </div>
  )
}

export default mainLayout