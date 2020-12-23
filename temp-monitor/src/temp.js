import React from 'react';
import './temp.css';

const temp = () => {
    return (
      <div className="node">
        <div className="node__body">
          <div className="container">
            <div className="row">
              <div className="node__disp col-md-12">
                <p>Here we deploy 4 sensor nodes in environment</p>
              </div>
              <div className="list col-md-12">
                <div className="node__sensor">
                  <p>Sensor 1</p>
                  <p>Location: Lucknow (U.P.)</p>
                  <div className="calander"><p>We have to set a calander and fix the range for the particular sensor, to get the temperature data</p></div>
                  <button className="plot__button" type="submit">PLOT</button>
                </div>
              </div>
              <div className="list col-md-12">
                <div className="node__sensor">
                  <p>Sensor 2</p>
                  <p>Location: Bihar (Patna)</p>
                  <div className="calander"><p>We have to set a calander and fix the range for the particular sensor, to get the temperature data</p></div>
                  <button className="plot__button" type="submit">PLOT</button>
                </div>
              </div>
              <div className="list col-md-12">
                <div className="node__sensor">
                  <p>Sensor 3</p>
                  <p>Location: Raipur (Chhattisgarh)</p>
                  <div className="calander"><p>We have to set a calander and fix the range for the particular sensor, to get the temperature data</p></div>
                  <button className="plot__button" type="submit">PLOT</button>
                </div>
              </div>
              <div className="list col-md-12">
                <div className="node__sensor">
                  <p>Sensor 4</p>
                  <p>Location: Gangtok (Sikkim)</p>
                  <div className="calander"><p>We have to set a calander and fix the range for the particular sensor, to get the temperature data</p></div>
                  <button className="plot__button" type="submit">PLOT</button>
                </div>
              </div>
              <div className="Graph__plot col-md-12">
                <div className="Graph">
                  <p>Here we want to show the Graph of Temperature Data</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default temp;