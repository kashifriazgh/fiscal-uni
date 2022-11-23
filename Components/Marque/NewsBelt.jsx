import Link from 'next/link';
import React, { useState } from 'react';
import st from './newsBelt.module.css';

export default function NewsBelt() {
  let [animState, setAnimState] = useState('');
  const breakAnim = () => {
    setAnimState(true);
  };
  const resumeAnim = () => {
    setAnimState(false);
  };
  return (
    <>
      <div style={{ marginTop: '60px' }}>
        <div className={st.marquee}>
          <div
            onMouseOver={breakAnim}
            onMouseLeave={resumeAnim}
            className={`${st.marqueeWrapper} ${
              animState ? st.breakAnimation : ''
            }`}
          >
            <div className={st.marqueeItem}>
              Job opportunity in Imagination Department{' '}
              <sup className={st.newBadge}>New</sup>
              <Link className={st.link} href="/">
                (Click here)
              </Link>
            </div>
            <div className={st.marqueeItem}>
              Tenders are invited for new Chairs for Fiscal class rooms{' '}
              <Link className={st.link} href="/">
                (Click here)
              </Link>
            </div>
            <div className={st.marqueeItem}>
              Admission open in many compouter languages programs 2022-23{' '}
              <Link className={st.link} href="/">
                (Click here)
              </Link>
            </div>
            <div className={st.marqueeItem}>
              Final Result announced year 2022-23 - Fiscal BSCS{' '}
              <Link className={st.link} href="/">
                (Click here)
              </Link>
            </div>
            <div className={st.marqueeItem}>
              Corrigendum - Last date to apply online for Computer Science
              Programs{' '}
              <Link className={st.link} href="/">
                (Click here)
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
