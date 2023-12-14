import React from "react";
import "./AssignVehicle.css";

import tick from "../../Asserts/pictures/tick.svg";
import assignvehicleicon from "../../Asserts/pictures/assignvehicleicon.svg";
import assignvehicleimage from "../../Asserts/pictures/assignvehicleimage.svg";
import fuelicon from "../../Asserts/pictures/bluelogo.svg";

export default function AssignVehicle() {
  return (
    <div className="container-fluid gap-4">
      <div className="logo2">
        <h1 className="logoheading2">
          <span>
            {" "}
            <img src={fuelicon} alt="fuelicon" />
          </span>{" "}
          Fleeto Product{" "}
        </h1>
      </div>

      <div className="row">
        <div className="col-md-6  image">
          <img
            className="leftimage"
            src={assignvehicleimage}
            alt="completedimage"
          />
        </div>

        <div className="col-md-6  usercreated">
          <img className="tick img-fluid" src={tick} alt="tick" />
          <h2>User Created Successfully</h2>
          <button className="assignvehicle">
            <span>
              <img src={assignvehicleicon} alt="" />
            </span>{" "}
            Assign Vehicle
          </button>
        </div>
      </div>
    </div>
  );
}
