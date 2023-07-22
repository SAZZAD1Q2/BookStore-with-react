/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';

function Completed() {
  return (
    <>
      <div className="mainComplete">
        <CircularProgressbar
          value={65}
          className="ovalStyle"
          styles={{
            trail: {
              stroke: '#e8e8e8',
              strokeLinecap: 'round',
              transformOrigin: 'center',
            },
            path: {
              stroke: '#02a8ff',
              strokeLinecap: 'round',
              transition: 'stroke-dashoffset 0.6s ease 0s',
              transformOrigin: 'center',
            },
          }}
        />
        <div className="completeContainer">
          <h4>73%</h4>
          <p className="complite">Completed</p>
        </div>
      </div>
    </>
  );
}

export default Completed;
