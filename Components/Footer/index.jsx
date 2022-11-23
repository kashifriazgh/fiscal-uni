import Link from 'next/link';
import React from 'react';
import st from './footer.module.css';

export default function Footer() {
  return (
    <>
      <div className={st.footer}>
        <div className={st.footerHeader}></div>
        <div className="container" style={{ padding: 40 }}>
          <div className="row">
            <div className="col-xs-6 col-md-4" style={{ padding: '20px' }}>
              <div className={st.sectionHeading}>Explore</div>
              <br />
              <div className={st.footerItem}>
                <Link href="/">Fiscal Journal</Link>
              </div>
              <div className={st.footerItem}>
                <Link href="/">Digital Library</Link>
              </div>
              <div className={st.footerItem}>
                <Link href="/">Site Map</Link>
              </div>
              <div className={st.footerItem}>
                <Link href="/">Scholarships</Link>
              </div>
            </div>
            <div className="col-xs-6 col-md-4" style={{ padding: '20px' }}>
              <div className={st.sectionHeading}>Resources</div>
              <br />
              <div className={st.footerItem}>
                <Link href="/">Career Opportunities</Link>
              </div>
              <div className={st.footerItem}>
                <Link href="/">Tender Notices</Link>
              </div>
              <div className={st.footerItem}>
                <Link href="/">Downloads</Link>
              </div>
              <div className={st.footerItem}>
                <Link href="/">Contact Us</Link>
              </div>
            </div>

            <div className="col-xs-6 col-md-4" style={{ padding: '20px' }}>
              <div className={st.sectionHeading}>Channels</div>
              <br />
              <div className={st.footerItem}>
                <Link href="/">Student Portal</Link>
              </div>
              <div className={st.footerItem}>
                <Link href="/">Suggestion Box</Link>
              </div>
              <div className={st.footerItem}>
                <Link href="/">Learning Management System (LMS)</Link>
              </div>
              <div className={st.footerItem}>
                <Link href="/">Prospectus 2023</Link>
              </div>
              <div className={st.footerItem}>
                <Link href="/">Support</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
