
import React, { useState } from "react";

const Projects = () => {
  const projects = [
    {
      title: "Image Denoising using Auto-Encoders",
      period: "January 2024 - May 2024",
      description: "A machine learning project focusing on removing noise from images using auto-encoder neural network architecture.",
      technologies: ["Python", "TensorFlow", "Deep Learning", "Computer Vision"],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      status: "In Progress"
    }
  ];

  const [activeProject, setActiveProject] = useState(0);

  return (
    <section id="projects" className="py-20">
      <div className="section-container">
        <div className="animate-on-scroll">
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
            Showcasing my practical experience and application of skills
          </p>
        </div>

        <div className="mt-12">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="card-glass overflow-hidden rounded-xl card-hover animate-on-scroll"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="h-64 md:h-auto overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-display font-semibold">{project.title}</h3>
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-yellow-100 text-yellow-800">
                      {project.status}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{project.period}</p>
                  <p className="text-muted-foreground mb-6">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech, idx) => (
                      <span 
                        key={idx}
                        className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <button className="px-6 py-2 rounded-full bg-primary text-white font-medium transition-all hover:bg-primary/90 shadow-sm hover:shadow">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {projects.length === 0 && (
          <div className="text-center mt-12 p-10 bg-gray-50 rounded-lg animate-on-scroll">
            <h3 className="text-xl font-semibold mb-2">More projects coming soon!</h3>
            <p className="text-muted-foreground">
              Currently focused on academic and professional development.
            </p>
          </div>
        )}
        
        <div className="mt-16 text-center animate-on-scroll">
          <h3 className="text-2xl font-display font-semibold mb-6">Interested in collaborating?</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            If you're looking for someone with data analysis and visualization skills for your project, 
            I'd love to hear about it. Let's create something amazing together.
          </p>
          <a 
            href="#contact" 
            className="px-8 py-3 rounded-full bg-primary text-white font-medium transition-all hover:bg-primary/90 shadow-sm hover:shadow"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
