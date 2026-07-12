import { GoStarFill } from "react-icons/go";
function Testimonials() {
  return (
    <div className="text-center mx-3 md:mx-20 py-3">
      <span className="inline-block px-4 py-2 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-400">
        <div className="flex items-center  gap-3">
          <p>Testimonials</p>
        </div>
      </span>
      <h2 className="mt-6 text-4xl font-bold  text-white text-center">
        Loved by 50,000+ job seekers
      </h2>

      <div className="mt-20 flex gap-4 items-center flex-col">
        <div className="max-w-220 bg-white/20  rounded-3xl p-5 md:p-10">
          <div className="flex justify-start items-start gap-6">
            <span className="p-3 px-4.5 rounded-[50%] bg-green-400 text-white font-semibold">
              A
            </span>
            <div>
              <div className="flex flex-col text-gray-300">
                <span className="text-left ">
                  <h4 className="text-lg flex-start">Alison</h4>
                  <p className="text-xs">Software Engineer</p>
                </span>
              </div>
              <div className="flex justify-start gap-1 mt-1">
                <GoStarFill className="text-yellow-400" />
                <GoStarFill className="text-yellow-400" />
                <GoStarFill className="text-yellow-400" />
                <GoStarFill className="text-yellow-400" />
                <GoStarFill className="text-yellow-400" />
              </div>
            </div>
          </div>
          <div className="mt-5">
            <p className="text-gray-300">
              "I was skeptical about AI-generated content, but the quality blew
              me away. My ATS score went from 61 to 94 in minutes. Absolutely
              unreal."
            </p>
          </div>
        </div>

        <div className="flex gap-3">
          <div className="bg-white/40 rounded-full w-2 h-2"></div>
          <div className="bg-white/20 rounded-full w-2 h-2"></div>
          <div className="bg-white/20 rounded-full w-2 h-2"></div>
          <div className="bg-white/20 rounded-full w-2 h-2"></div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
