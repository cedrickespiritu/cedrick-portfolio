import React, { useState } from 'react';


const experience = [
  {
    title: "Freelance Graphic Designer",
    company: "",
    startDate: "2019",
    endDate: "2020"
  },
  {
    title: "Intern Graphic Designer",
    company: "Visual Grafix Printing",
    startDate: "Nov 2019",
    endDate: "Feb 2020"
  },
  {
    title: "Graphic Designer",
    company: "Corner Route Lipa",
    startDate: "Aug 2020",
    endDate: "Aug 2023"
  },
  {
    title: "Web Developer",
    company: "Simply Be Found",
    startDate: "Aug 2023",
    endDate: "Aug 2024"
  }
];

const education = [
  {
    level: "JHS",
    school: "Anselmo A. Sandoval Memorial NHS",
    strand: "Technical-Vocational-Livelihood"
  },
  {
    level: "SHS",
    school: "Asian Institute of Computer Studies Lipa Campus",
    strand: "Information and Communication Technology"
  },
  {
    level: "College",
    school: "University of Batangas Lipa Campus",
    degree: "Bachelor of Multimedia Arts"
  }
];

const About = () => {
  const [activeSection, setActiveSection] = useState('skills');

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="h-full lg:h-screen bg-cover bg-center bg-no-repeat bg-primary font-manrope py-[4.5rem]">
      <div className="flex flex-col lg:flex-row justify-center items-center min-h-[100vh] max-w-[1000px] mx-auto px-8 py-10 text-white gap-10">
      <div className="welcome-text w-[100%] lg:w-[50%] flex flex-col text-center lg:text-start">
         <span className="welcome-span font-extrabold text-[30px] md:text-[40px] lg:text-[50px] leading-[60px]">Welcome to the <span className="text-secondary">Creative Side</span> of my <span className="text-secondary">Logical Mind</span></span>
           <span className="font-regular text-[19px]"><br /><p className='indent-[2rem] mt-[-15px]'>I'm a creative professional with 3 years of experience in multimedia design and 1 year in web development. I specialize in creating visually engaging designs using tools like Photoshop and Illustrator, and I have experience in developing user-friendly websites with Laravel, blending creativity with technical skills to deliver high-quality work.</p></span>
            <span className="view-projects-span">
               <button onClick={() => scrollToSection('project')} className="view-projects-btn text-secondary border-[4px] border-secondary w-[80%] lg:w-full mt-5 py-2 rounded-[15px] font-semibold text-[20px]">View Recent Projects</button>
            </span>
      </div>
      <div className="personal-info-list w-[100%] lg:w-[50%] h-max lg:h-[400px] text-[23px] font-semibold">
          <span className='skills-experience-education-span flex flex-wrap gap-[5px] flex-row justify-evenly mx-0 my-5 cursor-pointer'>
            <span className={`skills px-[10px] ${activeSection === 'skills' && 'active-info border-b-[5px] border-white border-solid'}`} onClick={() => handleSectionClick('skills')}>Skills</span>
            <span className={`experience px-[10px] ${activeSection === 'experience' && 'active-info border-b-[5px] border-white border-solid'}`} onClick={() => handleSectionClick('experience')}>Experience</span>
            <span className={`education px-[10px] ${activeSection === 'education' && 'active-info border-b-[5px] border-white border-solid'}`} onClick={() => handleSectionClick('education')}>Education</span>
          </span>
          <span className="personal-info-container">
                {activeSection === 'skills' && (
              <span className="skillset-container">
                <span className="flex flex-col gap-[1rem]">
                  <ul className='flex flex-col gap-[2.5rem]'>
                    <li className='graphic-design-li flex gap-[.5rem] flex-wrap'>
                      <span className="graphic-design-skill">Graphic Design -</span>
                      <span className="icon-container flex h-fit gap-[.5rem]">
                        <img src="src\assets\img\skills-icon\photoshop.png" className="w-[40px] h-fit" alt="" />
                        <img src="src\assets\img\skills-icon\illustrator.png" className="w-[40px] h-fit" alt="" />
                        <img src="src\assets\img\skills-icon\indesign.png" className="w-[40px] h-fit" alt="" />
                      </span>
                    </li>
                    <li className='video-editing-li flex gap-[.5rem] flex-wrap'>
                      <span className="video-editing-skill">Video Editing -</span>
                      <span className="icon-container flex h-fit gap-[.5rem]">
                        <img src="src\assets\img\skills-icon\after-effects.png" className="w-[40px] h-fit" alt="" />
                        <img src="src\assets\img\skills-icon\premiere.png" className="w-[40px] h-fit" alt="" />
                      </span>
                    </li>
                    <li className='3d-rendering flex gap-[.5rem] flex-wrap'>
                      <span className="3d-rendering">3D Rendering -</span>
                      <span className="icon-container flex h-fit gap-[.5rem]">
                        <img src="src\assets\img\skills-icon\cinema4d.png" className="w-[40px] h-fit" alt="" />
                        <img src="src\assets\img\skills-icon\blender.png" className="w-[40px] h-fit" alt="" />
                      </span>
                    </li>
                    <li className='frontend-stack flex gap-[.5rem] flex-wrap'>
                      <span className="frontend-stack">Frontend Stack -</span>
                      <span className="icon-container flex h-fit gap-[.5rem]">
                        <img src="src\assets\img\skills-icon\html.png" className="w-[40px] h-fit" alt="" />
                        <img src="src\assets\img\skills-icon\css.png" className="w-[40px] h-fit" alt="" />
                        <img src="src\assets\img\skills-icon\tailwind.png" className="w-[40px] h-fit" alt="" />
                        <img src="src\assets\img\skills-icon\bootstrap.png" className="w-[40px] h-fit" alt="" />
                        <img src="src\assets\img\skills-icon\javascript.png" className="w-[40px] h-fit" alt="" />
                        <img src="src\assets\img\skills-icon\react.png" className="w-[40px] h-fit" alt="" />
                      </span>
                    </li>
                    <li className='backend-stack flex gap-[.5rem] flex-wrap'>
                      <span className="backend-stack">Backend Stack -</span>
                      <span className="icon-container flex h-fit gap-[.5rem]">
                        <img src="src\assets\img\skills-icon\php.png" className="w-[40px] h-fit" alt="" />
                        <img src="src\assets\img\skills-icon\laravel.png" className="w-[40px] h-fit" alt="" />
                        <img src="src\assets\img\skills-icon\mysql.png" className="w-[40px] h-fit" alt="" />
                      </span>
                    </li>
                  </ul>
                </span>
              </span>
            )}
            {activeSection === 'experience' && (
              <span className="animate-fade-in duration-300">
                <span className='flex flex-col gap-[1rem]'>
                  {experience.map((exp, index) => (
                    <span key={index}>{exp.title} - {exp.company} ({exp.startDate} - {exp.endDate})</span>
                  ))}
                </span>
              </span>
            )}
            {activeSection === 'education' && (
              <span className="animate-fade-in duration-300">
                <span className='flex flex-col gap-[1rem]'>
                  {education.map((edu, index) => (
                    <span key={index}>{edu.level} - {edu.school} ({edu.strand || edu.degree})</span>
                  ))}
                </span>
              </span>
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;