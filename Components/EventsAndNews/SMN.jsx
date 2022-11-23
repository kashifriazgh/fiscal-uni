import React from 'react';
import Head from 'next/head';
import st from './eventsAndNews.module.css';

export default function SMN() {
  return (
    <>
      <Head>
        <script
          async
          defer
          crossorigin="anonymous"
          src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v15.0"
          nonce="0ZP6xSI3"
        ></script>
      </Head>
      <div id="fb-root"></div>
      <h2 className={st.sectionHeading}>Social Media Updates</h2>
      <br />
      <div
        class="fb-page"
        data-href="https://www.facebook.com/Fiscal-Uni-398935716930103/"
        data-tabs="timeline,home"
        data-width="340"
        data-height="600"
        data-small-header="false"
        data-adapt-container-width="true"
        data-hide-cover="true"
        data-show-facepile="true"
      >
        <blockquote
          cite="https://www.facebook.com/Fiscal-Uni-398935716930103/"
          class="fb-xfbml-parse-ignore"
        >
          <a href="https://www.facebook.com/Fiscal-Uni-398935716930103/">
            Fiscal Uni
          </a>
        </blockquote>
      </div>
    </>
  );
}
