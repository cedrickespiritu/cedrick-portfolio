import React, { useState } from 'react';
import ProjectModal from './ProjectModal';
import './project.css';

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  const handleOpenModal = (e) => {
    const projectType = e.currentTarget.querySelector('.card-footer').textContent;
    setActiveProject(projectType); 
    setIsModalOpen(true); 
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setActiveProject(null);
  };

  return (
    <div className="h-full lg:h-screen bg-cover bg-center bg-no-repeat bg-primary font-manrope py-[4.5rem]">
      <div className="flex flex-col justify-center items-center min-h-[85vh] max-w-[1000px] mx-auto px-5 md:px-8 text-white gap-10">
        <span className="page-title-span">My Recent Projects</span>
        <ul className="flex flex-wrap gap-[1rem] md:gap-[3rem] align-center justify-center">
          <li className="portfolio-card-li" onClick={handleOpenModal}  style={{ backgroundImage: "url('/src/assets/img/project-img/web-development/ub-360.png')" }}>
            <span className="portfolio-card-span">
              <span className="animation-card">
                <div className="span card-footer text-center">Web Development</div>
              </span>
            </span>
          </li>
          <li className="portfolio-card-li" onClick={handleOpenModal} style={{ backgroundImage: "url('/src/assets/img/project-img/motion-graphics/cbi-intro.png" }}>
            <span className="portfolio-card-span">
              <span className="motion-graphics-card">
                <div className="span card-footer text-center">Motion Graphics</div>
              </span>
            </span>
          </li>
          <li className="portfolio-card-li" onClick={handleOpenModal} style={{ backgroundImage: "url('/src/assets/img/project-img/print-materials/standee.png')" }}>
            <span className="portfolio-card-span">
              <span className="print-materials-card">
                <div className="span card-footer text-center">Print Materials</div>
              </span>
            </span>
          </li>
          <li className="portfolio-card-li" onClick={handleOpenModal} style={{ backgroundImage: "url('/src/assets/img/project-img/animation/nagkabangaan.png')" }}>
            <span className="portfolio-card-span">
              <span className="animation-card">
                <div className="span card-footer text-center">Animation</div>
              </span>
            </span>
          </li>
          <li className="portfolio-card-li" onClick={handleOpenModal} style={{ backgroundImage: "url('/src/assets/img/project-img/vexel/buena.png')" }}>
            <span className="portfolio-card-span">
              <span className="vexel-card">
                <div className="span card-footer text-center">Vector/Vexel</div>
              </span>
            </span>
          </li>
          <li className="portfolio-card-li" onClick={handleOpenModal} style={{ backgroundImage: "url('/src/assets/img/project-img/shirt-design/shirt1.png')" }}>
            <span className="portfolio-card-span">
              <span className="shirt-designs-card">
                <div className="span card-footer text-center">Shirt Designs</div>
              </span>
            </span>
          </li>
          <li className="portfolio-card-li" onClick={handleOpenModal} style={{ backgroundImage: "url('/src/assets/img/project-img/logo/logo1.png')" }}>
            <span className="portfolio-card-span">
              <span className="Logo-card">
                <div className="span card-footer text-center">Logo Design</div>
              </span>
            </span>
          </li>
          <li className="portfolio-card-li" onClick={handleOpenModal} style={{ backgroundImage: "url('/src/assets/img/project-img/poster/poster1.png')" }}>
            <span className="portfolio-card-span">
              <span className="printing-materials-card">
                <div className="span card-footer text-center">SocMed Poster</div>
              </span>
            </span>
          </li>
        </ul>

        {isModalOpen && (
          <ProjectModal handleClose={handleCloseModal} projectType={activeProject} />
        )}
      </div>
    </div>
  );
};

export default Projects;
