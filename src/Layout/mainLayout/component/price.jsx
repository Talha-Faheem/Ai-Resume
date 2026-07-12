import { CiCreditCard1 } from "react-icons/ci";
import { FaArrowRightLong } from "react-icons/fa6";
function price() {
  return (
    <div className="text-center mt-20 py-3 flex flex-col">
      <div><span className="inline-block px-4 py-2 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-400">
        <div className="flex gap-3 items-center">
          <CiCreditCard1 /> <p>price</p>{" "}
        </div>
      </span></div>
      <div className="mt-10 rounded-3xl border-white border px-1 py-1 text-white mx-auto flex gap-3 items-center">
            <span className="px-2 py-1">Monthly</span>
            <span className="bg-blue-700 px-2 py-1 rounded-3xl">Yearly <span className="inline-block px-2 py-1 text-xs rounded-full border border-green-500/30 bg-green-500/10 text-green-400">save 25
            %</span></span>
      </div>
      <div className="flex gap-3 justify-center mt-15">
        <div className="p-8 rounded-2xl bg-white/20 text-white w-95">
          <div className="flex flex-col items-start">
            <h3 className="text-2xl font-semibold">Free</h3>
            <div className="flex gap-3 items-end ">
              <h2 className="text-6xl font-bold ">$0</h2>
              <span className="text-gray-400">forever</span>
            </div>
            <p className="text-xs text-gray-300 mt-2">
              No credit card required. No hidden fees.
            </p>
          </div>

          <div className="px-3">
            <ul className="text-white flex flex-col gap-4 items-start mt-4 list-disc">
              <li>1 Resume</li>
              <li>5 AI credits / month</li>
              <li>5 Basic Templates</li>
              <li>3 PDF Exports / month</li>
              <li>ATS Score Check</li>
              <li>
                <s>Cover Letter Generator</s>
              </li>
              <li>
                <s>Version History</s>
              </li>
              <li>
                <s>Priority Support</s>
              </li>
            </ul>
          </div>
          <div className="rounded-full px-2 py-2 border-2 border-white mt-10 ">
            <button className="flex gap-3 items-center mx-auto  ">
              <p>Get Started Free</p>
              <FaArrowRightLong />
            </button>
          </div>
        </div>
        <div className="p-8 rounded-2xl bg-white/20 text-white w-95 relative">
          <div className="flex flex-col items-start">
            <h3 className="text-2xl font-semibold">Pro</h3>
            <div className="flex gap-3 items-end ">
              <h2 className="text-6xl font-bold ">$12</h2>
              <span className="text-gray-400">/month</span>
            </div>
            <p className="text-xs text-gray-300 mt-2">
              Or $9/mo billed annually
            </p>
          </div>

          <div className="px-3">
            <ul className="text-white flex flex-col gap-4 items-start mt-4 list-disc">
              <li>1 Resume</li>
              <li>5 AI credits / month</li>
              <li>5 Basic Templates</li>
              <li>3 PDF Exports / month</li>
              <li>ATS Score Check</li>
              <li>
                <s>Cover Letter Generator</s>
              </li>
              <li>
                <s>Version History</s>
              </li>
              <li>
                <s>Priority Support</s>
              </li>
            </ul>
          </div>
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-full px-3.5 py-2 border-purple-600  mt-10 ">
            <button className="flex gap-3 items-center mx-auto  ">
              <p>Start 7-Days Free trial</p>
              <FaArrowRightLong />
            </button>
          </div>
            <p className="text-xs text-gray-300 mt-2">No credit card required · Cancel anytime</p>
            <div className="w-30 font-bold py-1 flex items-center justify-center absolute top-[-12px] right-37 text-sm rounded-full bg-purple-500 shadow-3xl shadow-white ">
                <p>most popular</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default price;
