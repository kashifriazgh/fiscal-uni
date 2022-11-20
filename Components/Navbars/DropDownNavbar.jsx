import React, { useState } from 'react';
import st2 from './styles/dropdownNavbar.module.css';
import Image from 'next/image';
import logo from '../../images/logo.png';
import logoOriginal from '../../images/logo-original.png';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { AiFillCaretDown } from 'react-icons/ai';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import 'tippy.js/dist/tippy.css'; // optional

export default function DropDownNavbar() {
  const menuItems = [{ type: 'static', content: 'Home', order: '' }];
  return (
    <>
      <div className="row">
        <div className="col-xs-12 col-sm-3">
          <div className="row between-xs middle-xs">
            <Image src={logo} layout="responsive" />
            <div style={{}}>
              <HiOutlineMenuAlt1 style={{ fontSize: 'xx-large' }} />
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-9">
          <div
            className="row middle-xs end-xs"
            style={{
              gap: '10px',
              minHeight: '100px',
              marginRight: '50px',
            }}
          >
            <Tippy
              content={<AcademicDropDown />}
              allowHTML={true}
              theme="light"
              arrow={false}
              interactive={true}
              placement="bottom"
            >
              <div className={st2.menuitem}>
                Admission
                <span style={{ marginLeft: '7px', marginTop: '10px' }}>
                  <AiFillCaretDown />
                </span>
              </div>
            </Tippy>

            <Tippy
              content={<AcademicDropDown />}
              allowHTML={true}
              theme="light"
              arrow={false}
              interactive={true}
              placement="bottom"
            >
              <div className={st2.menuitem}>
                Academic
                <span style={{ marginLeft: '7px', marginTop: '10px' }}>
                  <AiFillCaretDown />
                </span>
              </div>
            </Tippy>
            <div className={st2.menuitem}>Miscellaneous</div>
            <div className={st2.menuitem}>Downloads</div>
            <div className={st2.menuitem}>News & Press</div>
          </div>
        </div>
      </div>
    </>
  );
}

export const AcademicDropDown = () => {
  return (
    <>
      <ul className={st2.dropdownul}>
        <li>BSC Programs</li>
        <li>MSC Programss</li>
      </ul>
    </>
  );
};

export const AdmissionDropDown = () => {
  return (
    <>
      <ul className={st2.dropdownul}>
        <li>Fall 2022</li>
        <li>Winter 2022</li>
      </ul>
    </>
  );
};
