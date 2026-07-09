import Logo from "../../assets/react.svg";
import Button from "../Ui/button";
function mainHeader() {
  return (
    <div className="flex bg-blue-900 justify-between px-15 lg:px-20 text-gray-300 h-20  border-gray-500">
      <div className="flex text-white gap-2 items-center md:w-[25%] ">
        <img className="w-10" src={Logo} alt="Logo" />
        <h2 className="text-2xl font-semibold w-50">Ai Resume</h2>
      </div>
      <div className="list-none md:flex gap-3 lg:gap-7 xl:gap-14 items-center  hidden   font-semibold ">
        <li className=" hover:text-white relative w-fit cursor-pointer after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full">
          Features
        </li>
        <li className=" hover:text-white relative w-fit cursor-pointer after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full">
          Pricing
        </li>
        <li className=" hover:text-white relative w-fit cursor-pointer after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full">
          Template
        </li>
        <li className=" hover:text-white relative w-fit cursor-pointer after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full">
          About
        </li>
      </div>
      <div className=" hidden md:flex items-center gap-3  ">
        <button className="hover:text-white">Sign in</button>
        <Button name="Get Started " />
      </div>
    </div>
  );
}

export default mainHeader;
