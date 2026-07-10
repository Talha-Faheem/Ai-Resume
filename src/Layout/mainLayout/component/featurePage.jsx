import { FaMagic } from "react-icons/fa";
import { FaGripfire } from "react-icons/fa6";
import { FiDownload, FiLayers } from "react-icons/fi";
import { IoMail } from "react-icons/io5";
import { LuPencil } from "react-icons/lu";
import { RiQrScanAiLine } from "react-icons/ri";
import Featurebox from "./featurebox";
function featurePage() {


  const features = [
  {
    id: 1,
    title: "AI Resume Generator",
    description:
      "GPT-4o powered engine that crafts tailored resumes from your raw experience in seconds.",
    icon: FaMagic,
    bgColor: "from-violet-500 to-purple-600",
  },
  {
    id: 2,
    title: "AI Bullet Improver",
    description:
      "Transform weak descriptions into powerful impact statements with measurable outcomes.",
    icon: LuPencil,
    bgColor: "from-pink-500 to-fuchsia-500",
  },
  {
    id: 3,
    title: "ATS Score Checker",
    description:
      "Real-time compatibility scoring with 100+ criteria and keyword analysis before you apply.",
    icon: RiQrScanAiLine,
    bgColor: "from-sky-500 to-blue-600",
  },
  {
    id: 4,
    title: "PDF Export",
    description:
      "Pixel-perfect PDFs in multiple formats, ready for any ATS or hiring portal instantly.",
    icon: FiDownload,
    bgColor: "from-emerald-500 to-teal-500",
  },
  {
    id: 5,
    title: "Cover Letter Generator",
    description:
      "AI-crafted, company-specific cover letters that match job descriptions in one click.",
    icon: IoMail,
    bgColor: "from-orange-500 to-amber-500",
  },
  {
    id: 6,
    title: "25+ Premium Templates",
    description:
      "Professionally designed, ATS-optimized templates for every industry and career level.",
    icon: FiLayers,
    bgColor: "from-rose-500 to-red-600",
  },
];

  return (
    <div>
      <div className="bg-blue-900 mt-10  text-center  text-white px-3">
      <span className=" text-sm font-bold mx-auto items-center flex gap-2 rounded-2xl p justify-center  bg-blue-800 w-22 text-purple-950 border-purple-950 border">
        <FaGripfire /> <p>Feature</p>{" "}
      </span>

      <h2 className="mt-6 text-4xl font-bold  ">
        Everything you
        
        need to land your
        
        dream job
      </h2>
      <p className="text-gray-300 mt-3 lg:w-130 mx-auto "> Powerful AI tools that work together to create the perfect resume for every application every time</p>
    </div>

    <div className="max-w-7xl mx-auto px-3  grid grid-cols-1 justify-center mt-10 lg:grid-cols-3 md:grid-cols-2  gap-4">
        {features.map((e)=>{
          return(<Featurebox key={e.id} icon={e.icon} head={e.title} para={e.description} color={e.bgColor}/>
        )})

        }
    </div>
    </div>

  );
}

export default featurePage;
