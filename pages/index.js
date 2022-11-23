import React from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import 'tippy.js/themes/light.css';
import styles from './styles.module.css';
import SimpleNavbar from '../Components/Navbars/SimpleNavbar';
import DropDownNavbar from '../Components/Navbars/DropDownNavbar';
import W3SchoolNavbar from '../Components/Navbars/W3SchoolNavbar';
import TopSlider from '../Components/Slider/TopSlider';
import NewsBelt from '../Components/Marque/NewsBelt';
import EventsAndNews from '../Components/EventsAndNews';
import Programs from '../Components/Programs';
import Footer from '../Components/Footer';

export default function Home() {
  return (
    <>
      {/* <DropDownNavbar /> */}
      <W3SchoolNavbar />
      <SimpleNavbar />
      <TopSlider />
      <NewsBelt />
      <EventsAndNews />
      <br />
      <br />
      <br />
      <Programs />
      <br />
      <Footer />
    </>
  );
}
