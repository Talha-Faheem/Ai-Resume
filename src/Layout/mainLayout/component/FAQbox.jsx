import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
function FAQbox({question, answer}) {
    const [dropdown, setdropdown] = useState(false);
  return (
    <div
     
      className="border border-gray-400 w-100 md:w-130 lg:w-170 bg-white/10  p-4 px-5 rounded-xl"
    >
      <div className="flex items-center justify-between">
        <p className="text-lg ">{question}</p>

        {dropdown ? (
          <FaChevronUp onClick={() => setdropdown((e) => !e)} />
        ) : (
          <FaChevronDown onClick={() => setdropdown((e) => !e)} />
        )}
      </div>

      <div
        className={`${dropdown ? "flex" : "hidden"} text-gray-400 text-left mt-5 border-t border-gray-300 pt-3`}
      >
        <p>{answer}</p>
      </div>
    </div>
  );
}

export default FAQbox;
