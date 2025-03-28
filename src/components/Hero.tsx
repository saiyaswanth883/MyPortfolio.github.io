
import React from "react";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative flex items-center">
      {/* Animated background blobs */}
      <div className="shape-blob shape-blob-1"></div>
      <div className="shape-blob shape-blob-2"></div>
      <div className="shape-blob shape-blob-3"></div>

      <div className="container section-container grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
        <div className="flex flex-col justify-center">
          <div className="animate-fade-in">
            <div className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary mb-6">
              Data Science Enthusiast
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-4 gradient-text">
              Venkata Sai<br />Yaswanth Mariyala
            </h1>
            <p className="text-xl text-muted-foreground font-light max-w-lg mb-8">
              Data analyst and visualization specialist with a passion for transforming complex datasets into meaningful insights.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-6 py-3 rounded-full bg-primary text-white font-medium transition-all hover:bg-primary/90 shadow-sm hover:shadow-md hover:-translate-y-1"
              >
                Get in Touch
              </a>
              <a
                href="#experience"
                className="px-6 py-3 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 font-medium transition-all hover:bg-white/90 shadow-sm hover:shadow-md hover:-translate-y-1"
              >
                View Experience
              </a>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center animate-fade-in">
          <div className="relative gradient-border p-1 rounded-full">
            <div className="relative p-1 rounded-full bg-white/50 backdrop-blur-sm">
              <img
                src="https://media.licdn.com/dms/image//D5603AQF8zsUKQXsfTQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1721322428934?e=1748476800&v=beta&t=HlPNkt7UZrqnqSe7hZOQki1PeRWdsQp29pHSPxToCTo"
                alt="Venkata Sai Yaswanth Mariyala"
                className="w-64 h-64 sm:w-80 sm:h-80 rounded-full object-cover shadow-xl"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 via-transparent to-transparent animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
        <a href="#about" className="flex flex-col items-center text-sm text-muted-foreground hover:text-foreground transition-colors">
          <span className="mb-2">Scroll Down</span>
          <ArrowDown size={16} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
