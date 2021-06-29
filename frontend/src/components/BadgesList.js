import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import './styles/BadgesList.css';
import Gravatar from './Gravatar';


const BadgesListItem = (props) => {
    return (
      <div className="BadgesListItem">
        <Gravatar
          className="BadgesListItem__avatar"
        />

        <div>
          <br/>
          {props.badge.name} 
        </div>
      </div>
    );
 
}


function BadgesList(props) {
  const badges = props.badges.Players;



  const options = [
    { value: 'Player', label: 'Player' },
    { value: 'Team', label: 'Team' }
  ]
  
  const optionsdist = [
    { value: 'upward', label: 'upward' },
    { value: 'falling', label: 'falling' }
  ]


  if (badges.length === 0) {
    return (
      <div>
        <div className="form-group">
          <label>Filter</label>
          <input
            type="text"
            className="form-control"
            value={"query"}
            onChange={e => {
       
            }}
          />
        </div>

        <h3>No badges were found</h3>
      </div>
    );
  }

  return (
    <div className="BadgesList">
      <div className="form-group">
        <label>Filter</label>
        <br/>
        <div className="row">
            <select className="col-6">
              {options.map((option) => (
                <option value={option.value}>{option.label}</option>
              ))}
            </select >
            <select className="col-6">
              {optionsdist.map((option) => (
                <option value={option.value}>{option.label}</option>
              ))}
            </select>
            <br/>
            <br/>
        </div>
        <br/>
        <input
          type="text"
          className="form-control"
          value={"query"}
          onChange={e => {
            
          }}
        />
      </div>

      <ul className="list-unstyled">
        {badges.map(badge => {
          return (
            <li key={badge._id}>
              <Link
                className="text-reset text-decoration-none"
                to={`/${badge._id}`}
              >
                <BadgesListItem badge={badge} />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default BadgesList;
