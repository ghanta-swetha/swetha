const Testimonials = () => {
  const testimonials = [
    {
      name: "Renault Engineers",
      image: "/projects/Logofav.png",
      quote:
        "Working with Swetha was a game-changer for our website. She brought our ideas to life with clean code, intuitive UI, and timely delivery. We highly recommend her for any frontend project.",
    },
    {
      name: "Blink App",
      image: "/projects/blinkapp.png",
      quote:
        "Swetha understood our vision from the start and transformed it into an interactive and sleek web experience. Her React expertise and attention to detail really stood out.",
    },
    {
      name: "Supraja Infra Con",
      image: "/projects/padrelators.jpg",
      quote:
        "From concept to deployment, Swetha ensured smooth collaboration and efficient communication. Her work ethic and design sense truly elevated our online presence.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Testimonials</h2>
          <p className="text-gray-600 mt-2">What they say about me</p>
          <div className="w-10 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="flex flex-col items-center">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md mb-4"
                />
                <h3 className="text-xl font-bold">{testimonial.name}</h3>
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 text-center italic">
                  "{testimonial.quote}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
