import React from 'react';
import { Table } from 'react-bootstrap';


import './styles/Badge.css';
import Gravatar from './Gravatar';

class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
        </div>

        <div className="Badge__section-name">
          <Gravatar className="Badge__avatar"/>
          <h1>
            {this.props.Name}
          </h1>
        </div>

        <div className="Badge__section-info">
          <Table responsive striped bordered hover size="lg" >
            <thead>
              <tr>
                <th>Club</th>
                <th>Nation</th>
                <th>position</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{this.props.Club}</td>
                <td>{this.props.Nation}</td>
                <td>{this.props.Position}</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

export default Badge;
