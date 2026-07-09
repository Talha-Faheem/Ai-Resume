import { FaArrowRight } from "react-icons/fa";
import { FaGripfire } from "react-icons/fa6";
import { IoPlayOutline } from "react-icons/io5";
import MainImage from "../../../assets/image.png";
function mainPage() {
  return (
    <div className="bg-blue-900 px-20 h-full flex my-5 justify-between flex-col lg:flex-row ">
      <div className="flex flex-col gap-5 lg:w-[45%] sm:w-full ">
        <div className="text-sm font-semibold flex gap-2 rounded-2xl p justify-center items-center bg-blue-800 w-60 text-purple-950 border-purple-950 border">
        <FaGripfire /> <p>Now powered by GPT-4o Turbo</p>{" "}
      </div>
      <div className="text-white font-bold text-7xl">
        <p>Create an</p> <p>ATS-Friendly </p>
        <p className="text-transparent bg-clip-text bg-linear-to-r from-cyan-600 to-purple-500">
          Resume with AI in{" "}
        </p>
        Minutes
      </div>

      <div className="text-[22px] text-gray-300 w-[90%]">
        Beat ATS filters, impress hiring managers, and land 3× more interviews.
        Our AI tailors every word to your target role.
      </div>

      <div className="text-white lg:w-full  flex gap-4 lg:flex-col xl:flex-row w-full">
        <button className="bg-blue-700 rounded-2xl text-white p-4 text-lg font-semibold flex gap-2 justify-center items-center ">
          <p>Bulid My Resume Free</p> <FaArrowRight />{" "}
        </button>
        <button className="border rounded-2xl text-white p-4 text-lg font-semibold flex gap-2 justify-center items-center ">
          <p>See Live Demo</p> <IoPlayOutline className="text-2xl" />{" "}
        </button>
      </div>
      </div>
      <img className="w-[45%] lg:w-[45%] sm:w-full  h-auto" src={MainImage} alt="" />
    </div>
  );
}

export default mainPage;

// Beat ATS filters, impress hiring managers, and land 3× more interviews. Our AI tailors every word to your target role.
