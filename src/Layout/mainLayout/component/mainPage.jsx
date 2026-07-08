import { FaArrowRight } from "react-icons/fa";
import { FaGripfire } from "react-icons/fa6";
import { IoPlayOutline } from "react-icons/io5";
import MainImage from "../../../assets/image.png";
function mainPage() {
  return (
    <div className="bg-blue-900 px-20 h-full flex ">
      <div>
        <div className="text-md items-center flex gap-2 rounded-2xl p bg-blue-800 w-62.5 text-purple-900">
        <FaGripfire /> <p>Now powered by GPT-4o Turbo</p>{" "}
      </div>
      <div className="text-white font-bold text-7xl">
        <p>Create an</p> <p>ATS-Friendly </p>
        <p className="text-transparent bg-clip-text bg-linear-to-r from-cyan-600 to-purple-500">
          Resume with AI in{" "}
        </p>
        Minutes
      </div>

      <div className="text-[22px] text-gray-300 w-150">
        Beat ATS filters, impress hiring managers, and land 3× more interviews.
        Our AI tailors every word to your target role.
      </div>

      <div className="text-white flex gap-4">
        <button className="bg-blue-700 rounded-2xl text-white p-4 text-lg font-semibold flex gap-2 justify-center items-center">
          <p>Bulid My Resume Free</p> <FaArrowRight />{" "}
        </button>
        <button className="border rounded-2xl text-white p-4 text-md font-semibold flex gap-2 justify-center items-center">
          <p>Live Demo</p> <IoPlayOutline className="text-2xl" />{" "}
        </button>
      </div>
      </div>
      <img className="w-200 h-auto" src={MainImage} alt="" />
    </div>
  );
}

export default mainPage;

// Beat ATS filters, impress hiring managers, and land 3× more interviews. Our AI tailors every word to your target role.
