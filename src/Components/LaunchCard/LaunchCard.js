import React, { Fragment } from 'react';
import Loader from '../Loader/Loader';

const LaunchCard = ({ element }) => {
  return (
    <Fragment>
      {element ? (
        <div className="card  ">
          <img className="mb-5" src={element.links.mission_patch} alt="img" />
          <h3>{element.mission_name}</h3>
          <div className="text">Mission Ids:
            <ul>
              {element.mission_id.map((item, idx) => (<li key={idx}>{item}</li>))}
            </ul>
          </div>
          <div className="text"><strong>Launch Year: </strong>{element.launch_year}</div>
          <div className="text"><strong>Successful Launch: </strong>{element.launch_success ? "Success" : "Not Success"}</div>
          <div className="text"><strong>Successful Landing : </strong>{element.rocket.first_stage.cores[0].land_success ? "Success" : "Not Success"}</div>
        </div>
      )
        :
        <Loader />
      }

    </Fragment>
  );
};

export default LaunchCard;