import React, { useState } from "react";
import "./Userhistory.css";
import deleteIcon from "../../assets/pictures/delete.svg";
import eye from "../../../src/assets/pictures/eye.svg";
import { FuelState } from "../../context/FeulProvider";

export default function Userhistory() {
  const {user, setUser} = FuelState()
  
  console.log(user);
  return (
    <>
      <div className="main">
        <div className="navbar">
          <div className="navbarheading">
            <h1>Total Record Yet</h1>
            <h1>(7)</h1>
          </div>
          <div className="navbarbuttons">
            <button className="newbutton">New</button>
            <button className="previousbutton">Previous</button>
            <button className="allbutton">All</button>
          </div>
        </div>
        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Date</th>
                <th>Time</th>
                <th>Total fuel</th>
                <th>Fuel/Litre</th>
                <th>Total</th>
                <th>Driver</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
            {user.fuelHistory?.map((user, index)=>(
              <tr key={index}>
                <td>{index}</td>
                <td>{user.date}</td>
                <td>9AM</td>
                <td>{user.totalLiters}</td>
                <td>{user.pricePerLiter}</td>
                <td>{user.totalPrice}</td>
                <td>Asad</td>
                <td>{user.stationName}</td>
                <td className="twoicons">
                  {" "}
                  <img className="eye" src={eye} alt="eye icon" />
                  <img className="eye" src={deleteIcon} alt="delete icon" />
                </td>
              </tr>
              
              ))}  
              <tr>
                <td>01</td>
                <td>9/4/2023</td>
                <td>9AM</td>
                <td>30L</td>
                <td>276/L</td>
                <td>6520</td>
                <td>Asad</td>
                <td>Ongoing</td>
                <td className="twoicons">
                  {" "}
                  <img className="eye" src={eye} alt="eye icon" />
                  <img className="eye" src={deleteIcon} alt="delete icon" />
                </td>
              </tr>
              <tr>
                <td>01</td>
                <td>9/4/2023</td>
                <td>9AM</td>
                <td>30L</td>
                <td>276/L</td>
                <td>6520</td>
                <td>Asad</td>
                <td>Ongoing</td>
                <td className="twoicons">
                  {" "}
                  <img className="eye" src={eye} alt="eye icon" />
                  <img className="eye" src={deleteIcon} alt="delete icon" />
                </td>
              </tr>
              <tr>
                <td>01</td>
                <td>9/4/2023</td>
                <td>9AM</td>
                <td>30L</td>
                <td>276/L</td>
                <td>6520</td>
                <td>Asad</td>
                <td>Ongoing</td>
                <td className="twoicons">
                  {" "}
                  <img className="eye" src={eye} alt="eye icon" />
                  <img className="eye" src={deleteIcon} alt="delete icon" />
                </td>
              </tr>
              
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
