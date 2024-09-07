import React from 'react';
import './Hero.css';

const name = 'Cedrick';
const Hero = () => {
  const scrollToSection = () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(/assets/img/hero-bg.png)`, backgroundColor: '#20202b',backgroundBlendMode: 'overlay', }}>
      <div class="text-container items-center lg:items-start max-w-[1000px] mx-auto px-8 flex flex-col justify-center min-h-[85vh]">
        <span class="text-[4rem] lg:text-[5rem] text-white font-semibold text-center">I'm  <span className="text-secondary text-[4rem] lg:text-[5rem]">{name}</span></span>
        <span class="text-3xl md:text-4xl text-center lg:text-start lg:text-6xl font-medium text-white mb-7">A Multimedia Designer <br /> and Web Developer</span>
        <span className="specialized">
          <ul className='text-primary flex flex-row justify-center flex-wrap font-[600] text-[15px] lg:text-[20px] gap-[20px] mb-8 cursor-default'>
            <li className='bg-[#ffffffc4] rounded-md py-2 px-4'>Frontend</li>
            <li className='bg-[#ffffffc4] rounded-md py-2 px-4'>ReactJS</li>
            <li className='bg-[#ffffffc4] rounded-md py-2 px-4'>Laravel</li>
            <li className='bg-[#ffffffc4] rounded-md py-2 px-4'>UI/UX</li>
            <li className='bg-[#ffffffc4] rounded-md py-2 px-4'>Graphic Design</li>
          </ul>
        </span>
        <button onClick={scrollToSection} className="w-max bg-transparent text-secondary border-[4px] border-secondary mt-5 py-2 px-10 rounded-[15px] font-semibold text-[20px]">About Me</button>
      </div>
    </div>
  );
};

export default Hero;
