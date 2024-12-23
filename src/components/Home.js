import React, { useRef } from 'react';
import CustomHook from './CustomHook';

function Home() {
  const scrollTab = useRef();
  CustomHook(scrollTab);

  return (
    <section ref={scrollTab} className='home'>
      <div className="content">
        <div className="name">
          I AM <span>PRIYA</span>
        </div>
        <div className="des">
          Graphic Designer | Content Creator | Script Writer | Freelancer <br />
          "Designs can be Art. Designs can be Aesthetic. Designs are so Simple, that's Why it is so Complicated."
        </div>
        <a href="/democv.pdf" target="_blank" rel="noopener noreferrer" className='animation active'>
          Download My CV
        </a>
      </div>
      <div className="avatar">
        <div className="card">
          <img src="/avatar.PNG" alt="Avatar" />
          <div className="info">
            <div>Graphic Designer</div>
            <div>Indian</div>
            <div>@designsby_siya</div>
            <div>Freelancer</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
