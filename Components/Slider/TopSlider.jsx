// import Swiper core and required modules
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import {
  BsFacebook,
  BsTwitter,
  BsLinkedin,
  BsInstagram,
  BsYoutube,
} from 'react-icons/bs';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import st from './topSlider.module.css';
import img1 from '../../images/3-doctors.png';
import img2 from '../../images/gradient.jpg';
import img3 from '../../images/aboutus-edit.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

export default function TopSlider() {
  return (
    <div className="row">
      <div className="col-xs-12 col-md-9">
        <Slides />
      </div>
      <div className="col-xs-12 col-md-3">
        <SideMenu />
      </div>
    </div>
  );
}

export const Slides = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
      navigation
      autoplay
      pagination={{ clickable: true }}
      className={st.slidesBox}
    >
      <SwiperSlide>
        <Image src={img1} layout="responsive" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={img2} layout="responsive" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={img3} layout="responsive" />
      </SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper>
  );
};

export const SideMenu = () => {
  return (
    <>
      <div className={st.sideMenu}>
        <h2>Social Media</h2>
        <div className={st.sideMenuStack}>
          <div className={st.fb}>
            {' '}
            <span>
              <BsFacebook
                style={{ verticalAlign: 'middle', marginRight: '10px' }}
              />{' '}
            </span>
            Facebook
          </div>
          <div className={st.tw}>
            {' '}
            <span>
              <BsTwitter
                style={{ verticalAlign: 'middle', marginRight: '10px' }}
              />{' '}
            </span>
            Twitter
          </div>
          <div className={st.li}>
            {' '}
            <span>
              <BsLinkedin
                style={{ verticalAlign: 'middle', marginRight: '10px' }}
              />{' '}
            </span>
            LinkedIn
          </div>
          <div className={st.in}>
            {' '}
            <span>
              <BsInstagram
                style={{ verticalAlign: 'middle', marginRight: '10px' }}
              />{' '}
            </span>
            Instagram
          </div>
          <div className={st.yt}>
            {' '}
            <span>
              <BsYoutube
                style={{ verticalAlign: 'middle', marginRight: '10px' }}
              />{' '}
            </span>
            Youtube
          </div>
        </div>
      </div>
    </>
  );
};
