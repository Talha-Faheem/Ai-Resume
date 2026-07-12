import { ArrowRight, Crown } from "lucide-react";

function Template() {
  const categories = [
    "All",
    "Corporate",
    "Engineering",
    "Design",
    "Marketing",
    "Research",
  ];

  const templates = [
    {
      id: 1,
      title: "Executive Pro",
      category: "Corporate",
      uses: "12.4K uses",
      rating: 4.9,
      color: "from-blue-600 to-blue-500",
      pro: false,
    },
    {
      id: 2,
      title: "Tech Minimal",
      category: "Engineering",
      uses: "21K uses",
      rating: 4.9,
      color: "from-cyan-700 to-cyan-500",
      pro: false,
    },
    {
      id: 3,
      title: "Creative Edge",
      category: "Design",
      uses: "8.2K uses",
      rating: 4.8,
      color: "from-violet-700 to-purple-500",
      pro: true,
    },
    {
      id: 4,
      title: "Modern Clean",
      category: "General",
      uses: "15K uses",
      rating: 4.7,
      color: "from-green-700 to-emerald-500",
      pro: false,
    },
    {
      id: 5,
      title: "Bold Impact",
      category: "Marketing",
      uses: "6.1K uses",
      rating: 4.8,
      color: "from-orange-700 to-orange-500",
      pro: true,
    },
    {
      id: 6,
      title: "Academia",
      category: "Research",
      uses: "3.8K uses",
      rating: 4.6,
      color: "from-slate-600 to-slate-500",
      pro: false,
    },
  ];

  return (
    <section className="py-24 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center">

          <span className="inline-block px-4 py-2 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-400">
            Templates
          </span>

          <h2 className="text-5xl font-bold text-white mt-6">
            Premium templates for every career path
          </h2>

          <p className="text-gray-400 mt-5 text-lg">
            Click any template to preview a full sample resume with realistic content.
          </p>

        </div>

     

        <div className="flex justify-center flex-wrap gap-4 mt-10">

          {categories.map((item, index) => (
            <button
              key={item}
              className={`px-6 py-2 rounded-full border transition-all duration-300 ${
                index === 0
                  ? "bg-violet-600 border-violet-600 text-white"
                  : "border-white/10 text-gray-400 hover:border-violet-500 hover:text-white"
              }`}
            >
              {item}
            </button>
          ))}

        </div>


        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mt-16">

          {templates.map((item) => (

            <div
              key={item.id}
              className="group rounded-3xl overflow-hidden border border-white/10 bg-[#1B2138] hover:-translate-y-2 transition-all duration-300 cursor-pointer"
            >

              <div
                className={`h-52 bg-gradient-to-br ${item.color} relative p-5`}
              >

                {item.pro && (
                  <div className="absolute top-4 right-4 flex items-center gap-1 rounded-full bg-yellow-500/20 px-3 py-1 text-yellow-400 text-sm">
                    <Crown size={14} />
                    Pro
                  </div>
                )}

              </div>

              <div className="p-5">

                <h3 className="text-white font-semibold text-lg md:text-xl">
                  {item.title}
                </h3>

                <p className="text-gray-400 text-sm md:text-md mt-1">
                  {item.category}
                </p>

                <div className="flex justify-between mt-4 text-xs md:text-sm">

                  <span className="text-gray-500">
                    {item.uses}
                  </span>

                  <span className="text-yellow-400">
                    ⭐ {item.rating}
                  </span>

                </div>

              </div>

            </div>

          ))}

        </div>

       

        <div className="flex justify-center mt-16">

          <button className="px-8 py-4 rounded-full border border-white/10 text-white flex items-center gap-3 hover:bg-violet-600 transition-all duration-300">

            View All 25+ Templates

            <ArrowRight size={20} />

          </button>

        </div>

      </div>

    </section>
  );
}

export default Template;