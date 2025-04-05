const Resume = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Resume</h2>
          <p className="text-gray-600 mt-2">My formal bio details</p>
          <div className="w-10 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            {/* Summary */}
            <h3 className="text-2xl font-bold mb-6">Summary</h3>
            <div className="bg-white p-6 rounded-lg shadow-md mb-6 border-l-4 border-blue-600">
              <h4 className="text-xl font-bold text-blue-600 mb-2">Swetha Ghanta</h4>
              <p className="text-gray-600 mb-4 italic">
                I'm a passionate and detail-oriented Frontend Developer with strong skills in React, Tailwind CSS, and modern UI frameworks.
                I enjoy building user-friendly, responsive, and accessible interfaces that solve real-world problems.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex">
                  <span className="text-blue-600 mr-2">▸</span>
                  Hyderabad, Telangana
                </li>
                <li className="flex">
                  <span className="text-blue-600 mr-2">▸</span>
                  +91 7993110112
                </li>
                <li className="flex">
                  <span className="text-blue-600 mr-2">▸</span>
                  swethaghanta2808@gmail.com
                </li>
              </ul>
            </div>

            {/* Education */}
            <h3 className="text-2xl font-bold mb-6">Education</h3>
            <div className="bg-white p-6 rounded-lg shadow-md mb-6 border-l-4 border-blue-600">
              <h4 className="text-xl font-bold text-blue-600 mb-2">B.Tech - Computer Science Engineering</h4>
              <p className="text-gray-500 mb-2">2019 - 2023</p>
              <p className="text-gray-600 mb-2 italic">Godavari Institute of Engineering and Technology (GIET), Rajahmundry</p>
              <p className="text-gray-600">CGPA: 70%</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md mb-6 border-l-4 border-blue-600">
              <h4 className="text-xl font-bold text-blue-600 mb-2">Intermediate - MPC</h4>
              <p className="text-gray-500 mb-2">2017 - 2019</p>
              <p className="text-gray-600 mb-2 italic">Sri Chaitanya Junior College, Hyderabad</p>
              <p className="text-gray-600">GPA: 8.6</p>
            </div>
          </div>

          {/* Professional Experience */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Professional Experience</h3>
            <div className="bg-white p-6 rounded-lg shadow-md mb-6 border-l-4 border-blue-600">
              <h4 className="text-xl font-bold text-blue-600 mb-2">Frontend Developer Intern</h4>
              <p className="text-gray-500 mb-2">2024 - Present</p>
              <p className="text-gray-600 mb-2 italic">Techpixe, Hyderabad</p>
              <ul className="space-y-2 text-gray-600">
              <li className="flex">
        <span className="text-blue-600 mr-2">▸</span>
        Developed responsive web pages using React, Tailwind CSS, and Material UI.
      </li>
      <li className="flex">
        <span className="text-blue-600 mr-2">▸</span>
        Integrated REST APIs and handled user authentication using JWT.
      </li>
      <li className="flex">
        <span className="text-blue-600 mr-2">▸</span>
        Collaborated with backend teams and deployed projects on AWS.
      </li>
      <li className="flex">
        <span className="text-blue-600 mr-2">▸</span>
        With a keen eye for design and a user-centric approach, I strive to deliver seamless digital experiences that are both elegant and efficient.
      </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume
