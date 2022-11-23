import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import st from './eventsAndNews.module.css';
import img1 from '../../images/aboutus-edit.png';
import img2 from '../../images/3-doctors.png';
export default function FeaturedEvents() {
  return (
    <>
      <h2 className={st.sectionHeading}>Featured Events</h2>
      <EventWrapper
        img={img1}
        title="The moon on the sky is little being gone."
        desc="This is a short description. To learn more about this post , click
          here and read more about this event."
      />

      <EventWrapper
        img={img2}
        title="Just a phrase of title"
        desc="The description must be 2x or 3x  than the title"
      />
    </>
  );
}

export const EventWrapper = (props) => {
  const { img, title, desc } = props;
  return (
    <>
      <div className={st.eventWrapper}>
        <div className={st.eventImg}>
          <Image src={img} width={300} height={250} />
        </div>
        <div className={st.eventTitle}>
          <Link href="/">{title}</Link>
        </div>
        <div className={st.eventDesc}>{desc}</div>
      </div>
    </>
  );
};
