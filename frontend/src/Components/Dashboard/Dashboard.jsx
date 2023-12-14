import React from "react";
import "./Dashboard.css";

import deleteicon from "../../Asserts/pictures/delete.svg";
import eye from "../../Asserts/pictures/eye.svg";

export default function Dashboard() {
  return (
    <>
      <div className="main">
        <div className="navbar">
          <div className="navbarheading">
            <h1>Total Record Yet</h1>
            <h1>(22)</h1>
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
                  <img className="eye" src={deleteicon} alt="delete icon" />
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
                  <img className="eye" src={deleteicon} alt="delete icon" />
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
                  <img className="eye" src={deleteicon} alt="delete icon" />
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
                  <img className="eye" src={deleteicon} alt="delete icon" />
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
                  <img className="eye" src={deleteicon} alt="delete icon" />
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
                  <img className="eye" src={deleteicon} alt="delete icon" />
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
                  <img className="eye" src={deleteicon} alt="delete icon" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
