import React from 'react';
import st from './programs.module.css';

export default function Programs() {
  return (
    <>
      <h2
        className={st.sectionHeading}
        style={{ marginBottom: 0, paddingBottom: 0 }}
      >
        Fiscal Programs
      </h2>

      <div
        className="container"
        style={{
          borderLeft: '3px solid rgb(220, 117, 27)',
          borderRight: '3px solid rgb(220, 117, 27)',
          borderBottom: '3px solid rgb(220, 117, 27)',
          borderTop: 'none',
          borderBottomLeftRadius: '5px',
          borderBottomRightRadius: '5px',
          marginTop: 0,
        }}
      >
        <div className="row">
          <div className="col-xs-12 col-md-3" style={{ padding: '30px' }}>
            <div className={`${st.programName} ${st.bgOrange}`}>
              Post Graduate
            </div>
          </div>

          <div className="col-xs-12 col-md-3" style={{ padding: '30px' }}>
            <div className={`${st.programName} ${st.bgGreen}`}>
              Post Graduate
            </div>
          </div>

          <div className="col-xs-12 col-md-3" style={{ padding: '30px' }}>
            <div className={`${st.programName} ${st.bgOrange}`}>
              Post Graduate
            </div>
          </div>
          <div className="col-xs-12 col-md-3" style={{ padding: '30px' }}>
            <div className={`${st.programName} ${st.bgGreen}`}>
              Post Graduate
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
