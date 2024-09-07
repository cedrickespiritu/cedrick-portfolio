import React from 'react';
import './project-modal.css';

const projectData = {
  'Web Development': [
    {
      image: '/assets/img/project-img/web-development/ub-360.png',
      description: 'UB 360',
      demoLink: 'https://ublc-360.vercel.app',
      codeLink: 'https://github.com/cedrickespiritu/nadafa-main',
    },
    {
      image: '/assets/img/project-img/web-development/fineline-design.png',
      description: 'Fineline Design',
      demoLink: 'https://finelinedesign.vercel.app',
      codeLink: 'https://github.com/cedrickespiritu/FineLineDesign',
    },
    {
      image: '/assets/img/project-img/web-development/taylorsweep.png',
      description: 'Taylor Sweep',
      demoLink: 'https://nadafa-main.vercel.app/',
      codeLink: 'https://github.com/cedrickespiritu/nadafa-main',
    },
    {
      image: '/assets/img/project-img/web-development/ub-website.png',
      description: 'University Of Batangas Website Redesign',
    },
    {
      image: '/assets/img/project-img/web-development/portfolio-2.png',
      description: 'Portfolio Website Design',
    },
    {
      image: '/assets/img/project-img/web-development/bigben.jpg',
      description: 'Design for Online Food App',
    },
    
    
    
  ],
  'Motion Graphics': [
    {
      image: '/assets/img/project-img/motion-graphics/cbi-intro.png',
      description: 'Center for Business and Innovation Intro',
      demoLink: 'https://drive.google.com/file/d/17MPu2_UjbOj4VZrjs6RryN4FX9ICNXMh/view?usp=sharing',
    },
  ],
  'Print Materials': [
    {
      image: '/assets/img/project-img/print-materials/standee.png',
      description: 'Standee',
    },
    {
      image: '/assets/img/project-img/print-materials/newsletter.png',
      description: 'Newsletter',
    },
    {
      image: '/assets/img/project-img/print-materials/packaging.png',
      description: 'Packaging',
    },
    {
      image: '/assets/img/project-img/print-materials/tickets.png',
      description: 'Tickets',
    },
    {
      image: '/assets/img/project-img/print-materials/menu.png',
      description: 'Menu',
    },
    {
      image: '/assets/img/project-img/print-materials/business-card.png',
      description: 'Business Card',
    },
  ],
  'Animation': [
    {
      image: '/assets/img/project-img/animation/nagkabangaan.png',
      description: 'Meme Animation',
      demoLink: 'https://drive.google.com/file/d/1py5RKdxjhAr0dCgLDgwTeZYAOUMh9eMs/view?usp=sharing',
    },
    {
      image: '/assets/img/project-img/animation/lipsync.png',
      description: 'Lip Syncing',
      demoLink: 'https://drive.google.com/file/d/1FIZELfKLlftJeP_IhvRfcCtgEPbo3esm/view?usp=sharing',
    },
  ],
  'Vector/Vexel': [
    {
      image: '/assets/img/project-img/vexel/buena.png',
    },
    {
      image: '/assets/img/project-img/vexel/apollo.png',
    },
    {
      image: '/assets/img/project-img/vexel/athena.png',
    },
    {
      image: '/assets/img/project-img/vexel/cyberpunk.png',
    },
  ],
  'Shirt Designs': [
    {
      image: '/assets/img/project-img/shirt-design/shirt1.png',
    },
    {
      image: '/assets/img/project-img/shirt-design/shirt2.png',
    },
    {
      image: '/assets/img/project-img/shirt-design/shirt3.png',
    },
  ],
  'Logo Design': [
    {
      image: '/assets/img/project-img/logo/logo1.png',
    },
    {
      image: '/assets/img/project-img/logo/logo2.png',
    },
    {
      image: '/assets/img/project-img/logo/logo3.png',
    },
    {
      image: '/assets/img/project-img/logo/logo4.png',
    },
  ],
  'SocMed Poster': [
    {
      image: '/assets/img/project-img/poster/poster1.png',
    },
    {
      image: '/assets/img/project-img/poster/poster2.png',
    },
    {
      image: '/assets/img/project-img/poster/poster3.jpg',
    },
    {
      image: '/assets/img/project-img/poster/poster4.png',
    },
    {
      image: '/assets/img/project-img/poster/poster5.png',
    },
    {
      image: '/assets/img/project-img/poster/poster6.png',
    },
    {
      image: '/assets/img/project-img/poster/poster7.png',
    },
    {
      image: '/assets/img/project-img/poster/poster8.png',
    },
  ],
};

const ProjectModal = ({ handleClose, projectType }) => {
  const projects = projectData[projectType];

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 text-primary top-[2rem]">
      <div className="bg-white w-[90%] max-w-[1000px] max-h-[80%] overflow-y-auto p-6 rounded-lg shadow-lg relative sm:min-w-[60vw]">
        <div className="position-fixed"><div className="modal-header">
        <h2 className="text-xl font-bold">{projectType}</h2>
          <button
            className="text-white bg-red-500 px-4 py-2 rounded"
            onClick={handleClose}
          >✖
          </button>
        </div></div>

                <div className="projects-loop">
                {projects && projects.map((project, index) => (
                  <div key={index} className="project-container">
                    <div className="project-image-container">
                      <img src={project.image} alt={project.description} />
                    </div>
                    <div className="project-details-container">
                      <span className="project-detail">{project.description}</span>
                    </div>
                    <div className="project-links-container">
                      {project.demoLink && (
                        <span className="demo-link">
                          <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                            View
                          </a>
                        </span>
                      )}
                      {project.codeLink && (
                        <span className="code-link">
                          <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                            Code
                          </a>
                        </span>
                      )}
                    </div>
                  </div>
                ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
