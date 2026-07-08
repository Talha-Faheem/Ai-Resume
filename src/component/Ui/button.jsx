import { FaArrowRight } from "react-icons/fa";
function button({name}) {
  return (
    <button className='bg-blue-700 rounded-4xl text-white px-3 p-2 text-md font-semibold flex gap-2 justify-center items-center'>
        <p>{name}</p>
        <FaArrowRight/>
        
    </button>
  )
}

export default button