import React from 'react';
//import { Link } from 'react-router-dom';

import './styles/BadgeDetails.css';
import Badge from '../components/Badge';

function BadgeDetails(props) {
  const badge = props.badge;

  return (
    <div>
      <div className="BadgeDetails__hero">
        <div className="container">
          <div className="row">
          
            <div className="col-6 BadgeDetails__hero-attendant-name">
              <h1>
                {badge.Name}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <Badge
              Name={badge.Name}
              Club={badge.Club}
              Nation={badge.Nation}
              Position={badge.Position}
            />
          </div>

        </div>
      </div>
    </div>
  );
}

export default BadgeDetails;
