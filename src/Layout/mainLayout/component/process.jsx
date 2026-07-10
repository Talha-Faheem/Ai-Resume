import { Plus, Rocket, Sparkles, Target } from "lucide-react";
import { LuCpu } from "react-icons/lu";
const steps = [
  {
    id: 1,
    title: "Upload or Start Fresh",
    description:
      "Import an existing resume or start with our guided smart form that adapts to your career level.",
    icon: Plus,
  },
  {
    id: 2,
    title: "AI Enhancement",
    description:
      "Watch AI rewrite your bullets, optimize keywords, and tailor content to your target role.",
    icon: Sparkles,
  },
  {
    id: 3,
    title: "ATS Optimization",
    description:
      "Run an instant ATS scan. Get a detailed score with specific, actionable recommendations.",
    icon: Target,
  },
  {
    id: 4,
    title: "Export & Apply",
    description:
      "Download your polished resume as a flawless PDF and start landing 3× more interviews.",
    icon: Rocket,
  },
];

function process() {
  return (

    <div className="mt-20">
        <span className=" text-sm font-bold mx-auto items-center flex gap-2 rounded-2xl p justify-center  bg-blue-800 w-22 text-purple-950 border-purple-950 border">
                < LuCpu/> <p>Process</p>{" "}
              </span>
              <h2 className="mt-6 text-4xl font-bold  text-white text-center">
                From zero to interview in 4 steps
              </h2>
        <section className="py-10">
       
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          
          <div className="hidden lg:block absolute top-11 left-40 right-40 h-0.5 bg-white/10"></div>

          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.id}
                className="relative flex flex-col items-center text-center"
              >
            
                <div className="relative z-10 w-22 h-22 rounded-3xl bg-gradient-to-br from-violet-600 to-purple-700 flex items-center justify-center shadow-[0_0_35px_rgba(139,92,246,.5)] transition-all duration-300 hover:scale-110">
                  <Icon className="w-8 h-8 text-white" />

               
                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-[#080B22] border border-violet-500 flex items-center justify-center text-xs text-white">
                    {step.id}
                  </span>
                </div>

             
                <p className="mt-5 text-sm text-violet-400">
                  0{step.id}
                </p>

           
                <h3 className="mt-3 text-3xl font-semibold text-white">
                  {step.title}
                </h3>

           
                <p className="mt-4 text-gray-400 leading-8 max-w-xs">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
    </div>
  );
}

export default process;