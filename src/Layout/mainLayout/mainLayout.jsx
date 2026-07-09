import MainHeader from "../../component/compLayout/mainHeader"
import FeaturePage from "./component/featurePage"
import MainPage from "./component/mainPage"
function mainLayout() {
  return (
    <div className="bg-blue-900 h-full">
        <MainHeader/>
        <MainPage/>
        <FeaturePage/>
    </div>
  )
}

export default mainLayout