import React, { useState } from 'react';
import st from './styles/simpleNavbar.module.css';
import { FaHome } from 'react-icons/fa';
import { ImMenu3 } from 'react-icons/im';
import { ImMenu4 } from 'react-icons/im';

export default function SimpleNavbar() {
  const [showMenu, setShowMenu] = useState(false);
  const menuItems = [
    'HTML',
    'CSS',
    'Javascript',
    'ReactJS',
    'NodeJS',
    'PHP',
    'Bootstrap',
    'AngularJS',
    'Vue',
    'MySQL',
  ];
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <div className={st.navbar}>
        <div className={st.logo}>
          <div
            className={st.item}
            style={{ paddingLeft: '20px', fontSize: 'x-large' }}
          >
            <FaHome />
          </div>
        </div>{' '}
        {/* Logo section end */}
        <div className={`${st.list}`}>
          {menuItems.map((item, index) => (
            <>
              <div key={index} class={st.item}>
                {item}
              </div>
            </>
          ))}
        </div>{' '}
        <div className={st.toggler}>
          <div className={st.item} onClick={toggleMenu}>
            <ImMenu3
              style={{
                fontSize: 'xx-large',
              }}
            />
          </div>
        </div>{' '}
        {/*toggler end */}
      </div>{' '}
      {/* Main menu div end */}
      <div className={st.mobMenu}>
        <div className={`${st.mobMenuList} ${showMenu ? st.show : ''}`}>
          {menuItems.map((item, index) => (
            <>
              <div key={index} class={st.item}>
                {item}
              </div>
            </>
          ))}
        </div>{' '}
      </div>
    </>
  );
}
