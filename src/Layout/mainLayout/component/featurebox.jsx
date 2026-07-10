function featurebox({icon,head,para,color}) {
    const Icon = icon
  return ( 
    <div className="group bg-white/20 p-4 rounded-2xl flex flex-col gap-3 max-w-full md:max-w-140 hover:bg-white/30 hover:-translate-y-1.5 duration-600 transition-transform min-h-55 justify-center">
        <div className={`bg-gradient-to-r ${color} p-2 w-12 py-3 rounded-full flex items-center justify-center transition-transform duration-700`}>
            <Icon className="text-2xl text-white"/>
        </div>
        <div className="text-xl font-semibold text-white transition-transform duration-1000">
            <h2>{head}</h2>
        </div>
        <div className="text-gray-300 transition-transform duration-700">
            <p>{para}</p>
        </div>
        <div className="text-purple-700 hidden text-sm font-semibold group-hover:flex ">
            Learn more...
        </div>
    </div>

  )
}

export default featurebox;