import Link from 'next/link';
import React from 'react';
import st from './eventsAndNews.module.css';

export default function LatestNews() {
  return (
    <>
      <h2 className={st.sectionHeading}>Latest News</h2>
      <LatestNewsWrapper
        title="Admissions open for Computer Science."
        desc="last data to apply for Bachelor programs is 17 Dec 2022."
      />

      <LatestNewsWrapper
        title="Results 2022 will be announced next week ."
        desc="More detail."
      />
      <div className={st.readMoreBtn}>Read more</div>
    </>
  );
}

export const LatestNewsWrapper = (props) => {
  const { title, desc } = props;
  return (
    <>
      <div className={st.latestNewsWrapper}>
        <div className={st.newsTitle}>{title} </div>
        <div className={st.newsDesc}>
          {desc}
          <Link className={st.newsLink} href="/">
            Click here
          </Link>
        </div>
      </div>
    </>
  );
};
