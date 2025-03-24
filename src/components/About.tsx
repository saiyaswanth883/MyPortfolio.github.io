
import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="section-container">
        <div className="animate-on-scroll">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            A data-driven professional combining academic knowledge with practical expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <div className="animate-on-scroll">
            <h3 className="text-2xl font-display font-semibold mb-6">Professional Overview</h3>
            <p className="text-muted-foreground mb-6">
              I am currently working as a CHEGG Expert, where I focus on data analysis and visualization.
              With a background in computer science and a specialization in data science, I support students
              in their academic pursuits while continuously developing my own skills and knowledge in the field.
            </p>
            <p className="text-muted-foreground">
              My passion lies in transforming complex data into meaningful insights that can drive
              decision-making and innovation. I am particularly interested in educational technology
              and how data science can improve learning outcomes and experiences.
            </p>
          </div>

          <div className="animate-on-scroll delay-100">
            <h3 className="text-2xl font-display font-semibold mb-6">Education</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <img 
                  src="https://media.licdn.com/dms/image/v2/C4D0BAQGezwf_KIbx5g/company-logo_400_400/company-logo_400_400/0/1630557907052/rvr__jc_college_of_engineering_logo?e=1748476800&v=beta&t=mvAPRHR4-lNLkb3xvXJIkA9ST1e6sR-bier-Wxk4kdk" 
                  alt="R.V.R. & J.C. College of Engineering"
                  className="w-12 h-12 rounded-md object-contain"
                />
                <div>
                  <h4 className="font-medium">Bachelor of Technology in CS & Engineering (Data Science)</h4>
                  <p className="text-sm text-muted-foreground">R.V.R. & J.C. College of Engineering • 2021-2025</p>
                </div>
              </div>

              <div className="flex gap-4">
                <img 
                  src="https://media.licdn.com/dms/image/v2/C560BAQHZsgN71E9YAQ/company-logo_400_400/company-logo_400_400/0/1630647146150/narayana_junior_college_nallakunta_logo?e=1748476800&v=beta&t=H9XFLBqqmSdRaAed5NJ_HjIfcY6Ke_fUTAX7w-mzgag" 
                  alt="Narayana Junior College"
                  className="w-12 h-12 rounded-md object-contain"
                />
                <div>
                  <h4 className="font-medium">Intermediate</h4>
                  <p className="text-sm text-muted-foreground">Narayana Junior College, Nallakunta • 2019-2021</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-md bg-gray-100 flex items-center justify-center text-gray-400">
                  <span className="text-xl font-bold">S</span>
                </div>
                <div>
                  <h4 className="font-medium">SSC</h4>
                  <p className="text-sm text-muted-foreground">Servite English High School • 2014-2019</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
