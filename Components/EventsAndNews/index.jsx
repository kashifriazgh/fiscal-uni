import React from 'react';
import FeaturedEvents from './FeaturedEvents';
import LatestNews from './LatestNews';
import SMN from './SMN';

import st from './eventsAndNews.module.css';

export default function EventsAndNews() {
  return (
    <div className="container" style={{ marginTop: 70 }}>
      <div className="row">
        <div className="col-xs-12 col-sm-6 col-md-4">
          <FeaturedEvents />
        </div>
        <div className="col-xs-12 col-sm-6 col-md-4">
          <SMN />
        </div>
        <div className="col-xs-12 col-sm-6 col-md-4">
          <LatestNews />
        </div>
      </div>
    </div>
  );
}
