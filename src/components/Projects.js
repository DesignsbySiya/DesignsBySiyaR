import React, { useState, useRef } from 'react';
import './Projects.css';
import CustomHook from './CustomHook';

function Projects() {
  const [listProjects] = useState([
    {
      name: 'LinkedIn Carousels',
      des: 'In this vibrant and engaging carousel, Siya showcases five simple yet powerful hacks to spark creativity and generate innovative ideas. The design features a character in a suit giving a thumbs-up, adding a friendly and approachable touch. With a bold and modern gradient background transitioning from dark to light red, the visual appeal is strong. The key points, including “5 DONTs,” are highlighted within circular icons, making the information easy to digest.',
      Tools: 'Adobe Photoshop',
      images: '/project1.JPG',
      instagramLink: 'https://www.instagram.com/p/DCzO_Dyzgw4/?utm_source=ig_web_copy_link'
    },
    {
      name: 'Bai Bubbles - Peru Pineapples',
      des: 'In this striking advertisement, the Bai Bubbles can takes center stage, proudly showcasing its refreshing Peru Pineapple flavor. The cans sleek design highlights key features such as being a "Sparkling Antioxidant Infusion" and having just "5 calories." Surrounding the can are vibrant images of pineapple slices, whole pineapples, and splashes of bright yellow liquid, evoking the tropical and invigorating essence of the drink. The addition of green leaves enhances the fresh and natural appeal, making the design both lively and appetizing.',
      Tools: 'Canva Premium',
      images: '/project2.PNG',
      instagramLink: 'https://www.instagram.com/p/DDEjnn2zK6K/?igsh=MXBwNGhrZDB0ZzBwZQ=='
    },
    {
      name: 'The Game Of Life',
      des: 'In this Magnificient Project I have Shown the game of Life through the pieces of Chess Board In Creative Style and these styles are created with help of AI Image Generation And Canva Premium ',
      images: '/project3.JPG',
      instagramLink: 'https://www.instagram.com/p/DC1-CS6T7AG/?igsh=MWI5bTA0NXUzandubQ=='
    }
  ]);

  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);

  return (
    <section className='projects' ref={scrollTab}>
      <div className="title" ref={(el) => el && divs.current.push(el)}>
        This is my Projects
      </div>
      <div className="des" ref={(el) => el && divs.current.push(el)}>
        Explore my creations, a journey so grand, Crafted with passion, by a skilled hand.
      </div>
      <div className="list">
        {listProjects.map((value, key) => (
          <div className='item' key={key} ref={(el) => el && divs.current.push(el)}>
            <div className="images" onClick={() => window.open(value.instagramLink, '_blank')}>
              <img src={value.images} alt={value.name} />
            </div>
            <div className="content">
              <h3>{value.name}</h3>
              <div className="des">{value.des}</div>
            </div>
          </div>
        ))}
      </div>
      <a className='see-more-btn' href='https://designsbysiya.github.io/DesignsBySiya/' target='_blank' rel='noopener noreferrer'>
        See More
      </a>
    </section>
  );
}

export default Projects;
