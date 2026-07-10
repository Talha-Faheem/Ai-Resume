import { FaGripfire } from "react-icons/fa6";
function featurePage() {
  return (
    <div className="bg-blue-900 mt-10  text-center text-white">
      <span className="text-sm font-bold mx-auto items-center flex gap-2 rounded-2xl p justify-center  bg-blue-800 w-22 text-purple-950 border-purple-950 border">
        <FaGripfire /> <p>Feature</p>{" "}
      </span>

      <h2 className="mt-6 text-4xl font-bold leading-tight">
        Everything you
        <br />
        need to land your
        <br />
        dream job
      </h2>
      <p className="text-gray-300 mt-3"> Powerful AI tools that work together to create the perfect resume for every application every time</p>
    </div>


  );
}

export default featurePage;
