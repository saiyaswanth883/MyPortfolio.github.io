
import React, { useState } from "react";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("technical");
  
  const skillCategories = [
    {
      id: "technical",
      name: "Technical Skills",
      skills: [
        { name: "Python", level: 90 },
        { name: "Java", level: 75 },
        { name: "C", level: 80 },
        { name: "HTML5", level: 85 },
        { name: "Data Analysis", level: 90 },
        { name: "Data Visualization", level: 85 },
        { name: "Tableau", level: 80 },
      ]
    },
    {
      id: "cloud",
      name: "Cloud & Infrastructure",
      skills: [
        { name: "Google Cloud", level: 75 },
        { name: "Cloud Architecture", level: 65 },
        { name: "Networking", level: 70 },
      ]
    },
    {
      id: "soft",
      name: "Soft Skills",
      skills: [
        { name: "Communication", level: 85 },
        { name: "Problem Solving", level: 90 },
        { name: "Academic Support", level: 80 },
        { name: "Continuous Learning", level: 95 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="section-container">
        <div className="animate-on-scroll">
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">
            Technical capabilities developed through education and practical experience
          </p>
        </div>

        <div className="mt-12 animate-on-scroll">
          {/* Skills Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {skillCategories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTab === category.id
                    ? "bg-primary text-white shadow-md"
                    : "bg-white hover:bg-gray-50 border border-gray-200"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Skills Content */}
          <div className="card-glass p-8 max-w-3xl mx-auto">
            {skillCategories.map(category => (
              <div
                key={category.id}
                className={`space-y-6 ${activeTab === category.id ? "block animate-fade-in" : "hidden"}`}
              >
                {category.skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%`, transitionDelay: `${index * 100}ms` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 animate-on-scroll">
          <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <span className="text-primary text-2xl font-bold">C</span>
            </div>
            <h4 className="font-medium">C Programming</h4>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <span className="text-primary text-2xl font-bold">Py</span>
            </div>
            <h4 className="font-medium">Python</h4>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <span className="text-primary text-2xl font-bold">J</span>
            </div>
            <h4 className="font-medium">Java</h4>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <span className="text-primary text-2xl font-bold">GC</span>
            </div>
            <h4 className="font-medium">Google Cloud</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
