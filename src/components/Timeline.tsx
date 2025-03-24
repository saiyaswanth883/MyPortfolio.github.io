
import React from "react";

const Timeline = () => {
  const experiences = [
    {
      title: "CHEGG Expert",
      period: "2023 - Present",
      description: "Working as a CHEGG Expert focusing on data analysis and visualization. Supporting students in academic pursuits with a focus on technical subjects.",
      skills: ["Data Analysis", "Data Visualization", "Academic Support"]
    }
  ];

  const certifications = [
    {
      title: "Cloud Digital Leader",
      organization: "Google Cloud",
      date: "2023",
      logo: "https://media.licdn.com/dms/image/v2/C4D0BAQHiNSL4Or29cg/company-logo_400_400/company-logo_400_400/0/1631311446380?e=1748476800&v=beta&t=9lsGDIQ8Pq-29pe5xRl3G4trohCpd9LHXc93vjDNX4A"
    },
    {
      title: "Python Programming",
      organization: "Coursera",
      date: "2022",
      logo: "https://media.licdn.com/dms/image/v2/C4D0BAQGexnfBxeEG-g/company-logo_400_400/company-logo_400_400/0/1630530042036/coursera_logo?e=1748476800&v=beta&t=OQ4lojCXtojtb8troNnmg0FmYNOaWG_HGYV3b2Mfrbw"
    },
    {
      title: "Java Basics",
      organization: "Coursera",
      date: "2022",
      logo: "https://media.licdn.com/dms/image/v2/C4D0BAQGexnfBxeEG-g/company-logo_400_400/company-logo_400_400/0/1630530042036/coursera_logo?e=1748476800&v=beta&t=OQ4lojCXtojtb8troNnmg0FmYNOaWG_HGYV3b2Mfrbw"
    },
    {
      title: "Networking Basics",
      organization: "Cisco",
      date: "2022",
      logo: "https://media.licdn.com/dms/image/v2/D560BAQEGtum3RwmvNg/company-logo_400_400/company-logo_400_400/0/1733847180528/cisco_logo?e=1748476800&v=beta&t=_i2jHBlk8aQ41xGE4_VJYuNv1Jed6W-dQ0D3RJGw24k"
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="section-container">
        <div className="animate-on-scroll">
          <h2 className="section-title">Experience & Certifications</h2>
          <p className="section-subtitle">
            My professional journey and continuous learning path
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 mt-12">
          {/* Work Experience */}
          <div className="animate-on-scroll">
            <h3 className="text-2xl font-display font-semibold mb-8 flex items-center">
              <span className="h-px flex-1 bg-gray-200 mr-4"></span>
              Work Experience
            </h3>
            
            <div className="relative border-l-2 border-gray-200 pl-8 space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-10 w-5 h-5 rounded-full bg-primary border-4 border-white"></div>
                  <div className="card-glass p-6">
                    <span className="text-sm font-medium text-primary-foreground px-3 py-1 rounded-full bg-primary inline-block mb-2">
                      {exp.period}
                    </span>
                    <h4 className="text-xl font-semibold mb-2">{exp.title}</h4>
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, idx) => (
                        <span 
                          key={idx}
                          className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-600"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Certifications */}
          <div className="animate-on-scroll delay-100">
            <h3 className="text-2xl font-display font-semibold mb-8 flex items-center">
              <span className="h-px flex-1 bg-gray-200 mr-4"></span>
              Certifications
            </h3>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div 
                  key={index} 
                  className="card-glass p-4 flex items-center gap-4 card-hover"
                >
                  <img 
                    src={cert.logo} 
                    alt={cert.organization}
                    className="w-12 h-12 rounded-md object-contain bg-white p-1"
                  />
                  <div>
                    <h4 className="font-medium">{cert.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {cert.organization} • {cert.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <a 
                href="#skills" 
                className="inline-flex items-center text-primary font-medium hover:underline"
              >
                View all skills
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
