"use client"

const Portfolio = () => {
  const filter = "web"

  const portfolioItems = [
    {
      id: 2,
      category: "web",
      image: "/projects/padrelators.jpg",
      title: "Supraja Iris Resort",
      description: "Landing Page",
      link: "https://www.padrealtors.com/",
    },
    {
      id: 5,
      category: "web",
      image: "/projects/blinkapp.png",
      title: "Blink App",
      description: "Website2",
      link: "https://example.com/web2",
    },
    {
      id: 9,
      category: "web",
      image: "/projects/Logofav.png",
      title: "Renault Engineers",
      description: "Website3",
      link: "https://example.com/web3",
    },
  ]

  const filteredItems = portfolioItems.filter((item) => item.category === filter)

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">My Projects</h2>
          <p className="text-gray-600 mt-2">Only my recent web works</p>
          <div className="w-10 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div key={item.id} className="group relative overflow-hidden rounded-lg shadow-lg">
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-bold">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
                <div className="mt-4 flex space-x-2">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10  hover:bg-black-600 flex items-center justify-center ts"
                    title="Visit Project"
                  >
                    <img
                      src="/projects/images.png" // Use your uploaded icon image here
                      alt="Link Icon"
                      className="w-5 h-5"
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
