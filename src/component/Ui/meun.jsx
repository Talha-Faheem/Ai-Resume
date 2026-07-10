import Button from "./button"

function meun() {
  return (
    <div className="px-5 bg-blue-950 py-3 z-30 fixed top-20 w-full">
        <div className='text-gray-300 list-none flex flex-col gap-2 text-md '>
        <li className="">
          Features
        </li>
        <li className="">
          Templates
        </li>
        <li className="">
          Pricing
        </li>
        <li className="">
          About
        </li>
        </div>

        <div className="flex items-center gap-3  mt-3">
        <button className="text-white border-white border rounded-3xl text-sm my-auto px-3 p-2">Sign in</button>
        <Button name="Get Started " />
      </div>

    </div>
  )
}

export default meun