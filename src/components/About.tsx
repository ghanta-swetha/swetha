import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const SkillBar = ({ name, level }: { name: string; level: number }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="font-medium">{name}</span>
        <span>{level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: inView ? `${level}%` : 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="bg-blue-600 h-2.5 rounded-full"
        />
      </div>
    </div>
  )
}

const About = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">About</h2>
          <p className="text-gray-600 mt-2">Learn more about me</p>
          <div className="w-10 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <img
              src="/hero/image2.jpeg"
              alt="Profile"
              className="rounded-lg shadow-lg w-full h-[600px] max-w-md mx-auto"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-blue-600 mb-4">
              Frontend Web Developer
            </h3>
            <p className="text-gray-600 mb-6">
              I’m Swetha, a frontend developer focused on creating interactive,
              accessible, and visually appealing web experiences. With a strong
              grasp of React I’m passionate about turning complex problems into
              intuitive digital solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-2">▸</span>
                    <strong className="mr-1">Birthday:</strong> 28th July 2002
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-2">▸</span>
                    <strong className="mr-1">Phone:</strong> +91 7993110112
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-2">▸</span>
                    <strong className="mr-1">City:</strong> Vijayawada
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-2">▸</span>
                    <strong className="mr-1">State:</strong> Andhra Pradesh
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-2">▸</span>
                    <strong className="mr-1">Age:</strong> 23
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-2">▸</span>
                    <strong className="mr-1">Degree:</strong> BTECH
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-2">▸</span>
                    <strong className="mr-1">Email:</strong>{" "}
                    ghantaswetha2808@gmail.com
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-2">▸</span>
                    <strong className="mr-1">Freelance:</strong> Available
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <SkillBar name="HTML" level={80} />
              <SkillBar name="CSS" level={90} />
              <SkillBar name="JavaScript" level={75} />
            </div>
            <div>
              <SkillBar name="Tailwind CSS" level={90} />
              <SkillBar name="React" level={80} />
              <SkillBar name="Bootstrap" level={85} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
