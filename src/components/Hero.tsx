"use client"

import { TypeAnimation } from "react-type-animation"
import { Twitter, Facebook, Instagram, Linkedin } from "lucide-react"

const Hero = () => {
  const socialIcons = [
    { icon: Twitter, href: "https://twitter.com/yourusername" },
    { icon: Facebook, href: "https://facebook.com/yourusername" },
    { icon: Instagram, href: "https://instagram.com/yourusername" },
    { icon: Linkedin, href: "https://linkedin.com/in/yourusername" },
  ]

  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url("/hero/image1.jpeg")' }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center xl:mr-[825px]  justify-center min-h-screen">
        <div className="text-center text-white mt-[190px] xl:mt-0 px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Ghanta Swetha</h1>
          <p className="text-2xl md:text-3xl mb-8">
            I'm{" "}
            <span className="text-blue-400 underline underline-offset-8 decoration-2">
              <TypeAnimation
                sequence={[ "Developer", 1000, "Freelancer", 1000, ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </p>

          {/* Social Icons */}
          <div className="flex justify-center space-x-4">
            {socialIcons.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-blue-600 flex items-center justify-center transition-colors duration-300"
                aria-label={social.icon.name}
              >
                <social.icon className="w-5 h-5 text-white" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
