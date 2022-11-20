import React, { use, useState } from 'react';
import st2 from './styles/w3schoolsNavbar.module.css';
import { AiFillCaretDown } from 'react-icons/ai';
import { FaAngleDown } from 'react-icons/fa';
import { FaAngleUp } from 'react-icons/fa';
import Image from 'next/image';
import logo from '../../images/logo.png';
import data from './data.js';

export default function W3SchoolNavbar() {
  const [active, setActive] = useState('');
  const topMenu = [
    { title: 'Tutorials', id: 1 },
    { title: 'References', id: 2 },
    { title: 'Exercises', id: 3 },
  ];

  const changeActiveIndex = (e) => {
    if (active == e.target.dataset.id) {
      setActive('');
    } else {
      setActive(e.target.dataset.id);
    }
  };
  const clearActiveIndex = () => {
    setActive('');
  };
  return (
    <>
      <div className="row">
        <div
          className="col-xs-12 col-md-12"
          style={{ height: '80px', display: 'flex' }}
        >
          <div className={st2.logo}>
            <Image src={logo} layout="responsive" style={{ width: '100%' }} />
          </div>

          {topMenu.map((item, index) => (
            <>
              <div
                key={index}
                className={`${st2.menu} ${active == item.id ? st2.active : ''}`}
                data-id={item.id}
                onClick={changeActiveIndex}
              >
                {item.title}
                <div
                  style={{
                    display: 'inline-block',
                    verticalAlign: 'middle',
                    marginLeft: '5px',
                  }}
                >
                  {active == item.id ? <FaAngleUp /> : <FaAngleDown />}
                </div>
              </div>
            </>
          ))}
        </div>
      </div>

      <TopMenuTemp
        id="1"
        title="Tutorials"
        active={active}
        clearActiveIndex={clearActiveIndex}
      >
        <div className="row" style={{ padding: '10px 50px' }}>
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <h2 className={st2.sectionHeading}>HTML & CSS </h2>

            {data.tutHtmlCss.map((item, index) => (
              <>
                <div key={index} className={st2.collapseMenuItem}>
                  Learn {item}
                </div>
              </>
            ))}
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <h2 className={st2.sectionHeading}>Javascript </h2>

            {data.tutJs.map((item, index) => (
              <>
                <div key={index} className={st2.collapseMenuItem}>
                  Learn {item}
                </div>
              </>
            ))}
            <br />
            <h2 className={st2.sectionHeading}>Programming</h2>

            {data.tutProg.map((item, index) => (
              <>
                <div key={index} className={st2.collapseMenuItem}>
                  Learn {item}
                </div>
              </>
            ))}
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <h2 className={st2.sectionHeading}>Server Side </h2>

            {data.tutServerSide.map((item, index) => (
              <>
                <div key={index} className={st2.collapseMenuItem}>
                  Learn {item}
                </div>
              </>
            ))}
            <br />
            <h2 className={st2.sectionHeading}>Web Building</h2>

            {data.tutWebBuilding.map((item, index) => (
              <>
                <div key={index} className={st2.collapseMenuItem}>
                  Learn {item}
                </div>
              </>
            ))}
          </div>

          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 ">
            <h2 className={st2.sectionHeading}>Data Analytics </h2>

            {data.tutAnalytics.map((item, index) => (
              <>
                <div key={index} className={st2.collapseMenuItem}>
                  Learn {item}
                </div>
              </>
            ))}
            <br />
            <h2 className={st2.sectionHeading}>XML Tutorials</h2>

            {data.tutXML.map((item, index) => (
              <>
                <div key={index} className={st2.collapseMenuItem}>
                  Learn {item}
                </div>
              </>
            ))}
          </div>
        </div>{' '}
        {/* Row */}
      </TopMenuTemp>

      <TopMenuTemp
        id="2"
        title="References"
        active={active}
        clearActiveIndex={clearActiveIndex}
      >
        <div className="row" style={{ padding: '10px 50px' }}>
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <h2 className={st2.sectionHeading}>HTML </h2>

            {data.refHtml.map((item, index) => (
              <>
                <div key={index} className={st2.collapseMenuItem}>
                  HTML {item} Reference
                </div>
              </>
            ))}
            <br />
            <h2 className={st2.sectionHeading}>CSS</h2>
            {data.refCss.map((item, index) => (
              <>
                <div key={index} className={st2.collapseMenuItem}>
                  {item} Reference
                </div>
              </>
            ))}
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <h2 className={st2.sectionHeading}>Javascript </h2>
            {data.refJs.map((item, index) => (
              <>
                <div key={index} className={st2.collapseMenuItem}>
                  {item} Reference
                </div>
              </>
            ))}

            <br />
            <h2 className={st2.sectionHeading}>Programming</h2>
            {data.refProg.map((item, index) => (
              <>
                <div key={index} className={st2.collapseMenuItem}>
                  {item} Reference
                </div>
              </>
            ))}
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <h2 className={st2.sectionHeading}>Server Side </h2>

            {data.refServerSide.map((item, index) => (
              <>
                <div key={index} className={st2.collapseMenuItem}>
                  {item} Reference
                </div>
              </>
            ))}
            <br />
            <h2 className={st2.sectionHeading}>XML</h2>

            {data.refXML.map((item, index) => (
              <>
                <div key={index} className={st2.collapseMenuItem}>
                  {item} Reference
                </div>
              </>
            ))}
          </div>

          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 ">
            <h2 className={st2.sectionHeading}>Characters </h2>

            {data.refCharset.map((item, index) => (
              <>
                <div key={index} className={st2.collapseMenuItem}>
                  HTML {item}
                </div>
              </>
            ))}
          </div>
        </div>{' '}
        {/* Row */}
      </TopMenuTemp>

      <TopMenuTemp
        id="3"
        title="References"
        active={active}
        clearActiveIndex={clearActiveIndex}
      >
        <div className="row" style={{ padding: '10px 50px' }}>
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 center-xs">
            <h2 className={st2.sectionHeadingExtended}>Exercises </h2>
            {data.exEx.map((item, index) => (
              <>
                <div key={index} className={st2.collapseMenuItem}>
                  {item} Exercise
                </div>
              </>
            ))}
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 center-xs">
            <h2 className={st2.sectionHeadingExtended}>Quizzes </h2>
            {data.exQuiz.map((item, index) => (
              <>
                <div key={index} className={st2.collapseMenuItem}>
                  {item} Quiz
                </div>
              </>
            ))}
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 center-xs">
            <h2 className={st2.sectionHeadingExtended}>Courses </h2>
            {data.exCourse.map((item, index) => (
              <>
                <div key={index} className={st2.collapseMenuItem}>
                  {item} Course
                </div>
              </>
            ))}
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 center-xs">
            <h2 className={st2.sectionHeadingExtended}>Certificates </h2>
            {data.exCert.map((item, index) => (
              <>
                <div key={index} className={st2.collapseMenuItem}>
                  {item} Certificate
                </div>
              </>
            ))}
          </div>
        </div>{' '}
        {/* Row */}
      </TopMenuTemp>
    </>
  );
}

export const TopMenuTemp = (props) => {
  return (
    <>
      <div
        className={`${st2.collapsedMenu} ${
          props.active == props.id ? st2.collapsedMenuActive : ''
        }`}
      >
        <div className={st2.collapsedMenuTitle}>
          <div className={st2.collapsedMenuTitleText}>{props.title}</div>
          <div className={st2.collapseClose} onClick={props.clearActiveIndex}>
            &#10006;
          </div>
        </div>
        {props.children}
      </div>
    </>
  );
};
