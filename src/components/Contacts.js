import React, { useState, useRef } from 'react';
import CustomHook from './CustomHook';

function Contacts() {
  const [listContacts] = useState([
    {
      title: 'Telegram',
      value: '@Designsby_siya'
    }, {
      title: 'Email',
      value: 'siyadesignby@gmail.com'
    }, {
      title: 'Instagram',
      value: '@designsby_siya'
    }, {
      title: 'Created By',
      value: 'CATI (Cosmic Aura Tech Industry)'
    }
  ])
  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);

  const styles = {
    socialIcons: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '30px'
    },
    icon: {
      color: '#fff',
      fontSize: '2em',
      margin: '0 15px',
      transition: 'all 0.3s ease-in-out',
      borderRadius: '50%',
      padding: '10px',
      marginTop: '95px',
      background: '#141414'
    },
    instagram: {
      textShadow: '0 0 5px #ff00ff, 0 0 20px #ff00ff',
      boxShadow: '0 0 10px #ff00ff, 0 0 30px #ff00ff'
    },
    linkedin: {
      textShadow: '0 0 5px #0077b5, 0 0 20px #0077b5',
      boxShadow: '0 0 10px #0077b5, 0 0 30px #0077b5'
    },
    email: {
      textShadow: '0 0 5px #ff4500, 0 0 20px #ff4500',
      boxShadow: '0 0 10px #ff4500, 0 0 30px #ff4500'
    },
    telegram: {
      textShadow: '0 0 5px #0088cc, 0 0 20px #0088cc',
      boxShadow: '0 0 10px #0088cc, 0 0 30px #0088cc'
    }
  };

  return (
    <section className='contacts' ref={scrollTab}>
      <div className="title" ref={(el) => el && divs.current.push(el)}>
        This is my Contacts
      </div>
      <div className="des" ref={(el) => el && divs.current.push(el)}>
        These Are the Way To Connect Through Me For Further Enquiry and For Collaboration with <br /> &hearts; Designs By Siya &hearts;
      </div>
      <div className="list" ref={(el) => el && divs.current.push(el)}>
        {
          listContacts.map((value, key) => (
            <div className='item' key={key}>
              <h3>{value.title}</h3>
              <div>{value.value}</div>
            </div>
          ))
        }
      </div>
      <div className="social-icons" style={styles.socialIcons}>
        <a href="https://www.instagram.com/designsby_siya" target="_blank" rel="noopener noreferrer" style={{ ...styles.icon, ...styles.instagram }}>
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://www.linkedin.com/in/priya-kumari-18516a328?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" style={{ ...styles.icon, ...styles.linkedin }}>
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="mailto:siyadesignby@gmail.com" target="_blank" rel="noopener noreferrer" style={{ ...styles.icon, ...styles.email }}>
          <i className="fas fa-envelope"></i>
        </a>
        <a href="https://t.me/Designsby_siya" target="_blank" rel="noopener noreferrer" style={{ ...styles.icon, ...styles.telegram }}>
          <i className="fab fa-telegram"></i>
        </a>
      </div>
    </section>
  )
}

export default Contacts;
