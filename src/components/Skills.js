import React, { useRef, useState } from 'react' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faThinkPeaks} from '@fortawesome/free-brands-svg-icons';
import CustomHook from './CustomHook';
import { faDragon, faLaptop, faPanorama, faPencilAlt, faVideo } from '@fortawesome/free-solid-svg-icons';

function Skills() {
  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);
const [listSkills] = useState([
  {
    name: 'Script Writing',
    des: 'As a seasoned scriptwriter, I bring a unique blend of creativity, narrative expertise, and audience engagement to every project. With a passion for storytelling and a keen understanding of digital media, I craft scripts that captivate viewers and convey messages with clarity and impact.',
    icon: faPencilAlt
  },
  {
    name: 'Canva Creations',
    des: 'As a passionate graphic designer proficient in Canva, I specialize in creating stunning visual content that includes resumes, brochures, flyers, and business cards. My designs are tailored to communicate effectively and leave a lasting impression. With an eye for detail and a flair for creativity, I transform ideas into visually appealing and professional designs that resonate with audiences and meet client objectives efficiently.',
    icon: faLaptop
  },
  {
    name: 'Adobe Photoshop',
    des: 'As a versatile graphic designer specializing in Adobe Photoshop, I excel in creating eye-catching YouTube thumbnail designs, LinkedIn carousels, posters, banners, and reels covers. My designs are tailored to enhance visual appeal and engagement across various digital platforms. With a meticulous approach and a flair for creativity, I transform concepts into captivating visuals that effectively communicate messages and capture audience attention.',
    icon: faPanorama
  },
  {
    name: 'AI Image Generation',
    des: 'As an expert in AI-driven image generation, I excel in creating stunning visuals through precise and detailed prompts. My ability to craft accurate and creative prompts ensures that the generated images perfectly align with the envisioned concepts. By leveraging the power of AI, I transform ideas into captivating visuals that enhance projects across various mediums, from digital marketing to artistic endeavors. ',
    icon: faDragon
  },
  {
    name: 'Content Creator',
    des: 'As a dedicated content creator, I actively share my unique designs across my social media platforms. From YouTube thumbnail designs to LinkedIn carousels, posters, banners, and reels covers, I utilize my skills in Adobe Photoshop and AI-driven image generation to produce captivating visuals. By consistently uploading my creative work, I engage with a diverse audience, showcase my versatility, and build a dynamic online presence. My social media accounts serve as a vibrant portfolio where creativity meets engagement, reflecting my passion for design and content creation. 🎨✨',
    icon: faThinkPeaks
  },
  {
    name: 'Motion Video Editing',
    des: 'As a skilled motion video editor, I bring stories to life through dynamic visuals and seamless transitions. With expertise in video editing software like Adobe Premiere Pro, After Effects, and Final Cut Pro, I create engaging and high-quality video content that captivates audiences. My work spans across various types of projects, including promotional videos, social media clips, YouTube videos, and more. By combining technical proficiency with a creative vision, I ensure that every video is not only visually appealing but also effectively communicates the intended message.',
    icon: faVideo
  }

]);
  return (
    <section className='skills' ref={scrollTab}>
       <div className="title" ref={(el) => el && divs.current.push(el)}>
        This is my Skills
       </div>
       <div className="des" ref={(el) => el && divs.current.push(el)}>
        {/* 20 */}
        Below, you can delve into the tapestry of my skills and explore the artistry that I weave into every creation. ✨
       </div>
       <div className="list">
        {
          listSkills.map((value, key) => (
            <div className={'item '} key={key} ref={(el) => el && divs.current.push(el)}>
              <FontAwesomeIcon icon={value.icon} />
              <h3>{ value.name }</h3>
              <div className="des">{value.des}</div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Skills
