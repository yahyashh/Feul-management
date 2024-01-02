import React, { useState } from "react";
import "./Uploadimage.css";
import fuelicon from "../../assets/pictures/fuelicon.svg";
import historyicon from "../../assets/pictures/historyicon.svg";
import profileimage from "../../assets/pictures/profilepic.svg";
import uploadicon from "../../assets/pictures/uploadicon.svg";
import axios from "axios";
import { useHistory } from 'react-router-dom'
import UserModal from "../../Components/Userpages/UserModal";

export default function Uploadimage() {
  const YourFormComponent = () => {
    const history = useHistory()
    const [selectedFile, setSelectedFile] = useState(null);
    const userId = new URLSearchParams(window.location.search).get('userId');
    const wehicalId = new URLSearchParams(window.location.search).get('wehicalId');

    // Log the extracted values
    console.log('User ID:', userId);
    console.log('Wehical ID:', wehicalId);

    const [formData, setFormData] = useState({
      userId: userId,
      wehicalId: wehicalId,
      stationName: '',
      pricePerLiter: '',
      totalLiters: '',
      totalPrice: '',
      location: '',
      date: '', // New date input field
      image: null,
    });

    const handleInputChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (event) => {
      // The selected file can be accessed using event.target.files
      const file = event.target.files[0];
      // Update state with the selected file
      setSelectedFile(file);
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      const data = new FormData();
      data.append("userId", formData.userId)
      data.append("wehicalId", formData.wehicalId)
      data.append("stationName", formData.stationName)
      data.append("pricePerLiter", formData.pricePerLiter)
      data.append("totalLiters", formData.totalLiters)
      data.append("totalPrice", formData.totalPrice)
      data.append("location", formData.location)
      data.append("date", formData.date)
      data.append("image", selectedFile)

      try {
        await axios.post(`http://localhost:5000/api/fueling/add-fueling/${userId}`, data);
        console.log('Fueling data submitted successfully', data);
        alert("data successfully submitted")
        history.push("/user")
      } catch (error) {
        console.error('Error submitting fueling data:', error.message);
      }
    };


    return (
      <>
        <div className="mainuploadimage">
          <div className="uploadnavbar">
            <div className="icon">
              <img src={fuelicon} alt="fuelicon" />
              <h2>
                Fleeto Product <br /> Company
              </h2>
            </div>
            <div className="profileimg">
              <div>
                <img src={historyicon} alt="historyicon" onClick={() => history.push("/UserHistory")}/>
              </div>
              <div>
                <UserModal>
                <img src={profileimage} alt="profileimage" />
                </UserModal>
              </div>
            </div>
          </div>

          <div className="twoforms">
            <form onSubmit={handleSubmit} className="form ">
              <div>
                <div className="d-flex flex-wrap mt-5  gap-4 align-items-md-center justify-content-center ">
                  {/* First Line */}
                  <div className="d-flex flex-column gap-3  col-md-4">
                    <label htmlFor="">Station name</label>
                    <input
                      className="p-2 border-0 inplogcol"
                      type="text"
                      name="stationName"
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="d-flex flex-column gap-3  col-md-4">
                    <label htmlFor="">Price /L</label>
                    <input
                      className="p-2 border-0 inplogcol"
                      type="text"
                      name="pricePerLiter"
                      onChange={handleInputChange}
                    />
                  </div>

                  {/* Second Line */}
                  <div className="d-flex flex-column gap-3  col-md-4">
                    <label htmlFor="">Total L</label>
                    <input
                      className="p-2 border-0 inplogcol"
                      type="text"
                      name="totalLiters"
                      onChange={handleInputChange}
                    />
                  </div>

                  {/* Third Line */}
                  <div className="d-flex flex-column gap-3  col-md-4">
                    <label htmlFor="">Total Price</label>
                    <input
                      className="p-2 border-0 inplogcol"
                      type="text"
                      name="totalPrice"
                      onChange={handleInputChange}
                    />
                  </div>

                  {/* Fourth Line */}
                  <div className="d-flex flex-column gap-3  col-md-4">
                    <label htmlFor="">Location</label>
                    <input
                      className="p-2 border-0 inplogcol"
                      type="text"
                      name="location"
                      onChange={handleInputChange}
                    />
                  </div>

                  {/* Fifth Line */}
                  <div className="d-flex flex-column gap-3  col-md-4">
                    <label htmlFor="">Date/time</label>
                    <input
                      className="p-2 border-0 inplogcol"
                      type="date"
                      name="date"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
              <div className="submitbutton">
                <button
                  className="submitbtn"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
            <div className="upload">
              <div className="uploadbutton">
                {selectedFile && (
                  <div className="uploaded-image">
                    <img
                      className="uploadedimage"
                      src={URL.createObjectURL(selectedFile)}
                      alt="Selected"
                    />
                  </div>
                )}

                {/* Hidden file input */}
                <input
                  type="file"
                  name="image"
                  onChange={handleFileChange}
                  style={{ display: "none" }}
                />

                {/* Custom styled button */}
                <button
                  onClick={() =>
                    document.querySelector('input[type="file"]').click()
                  }
                  className="uploadbtn"
                >
                  <span>
                    <img
                      className="uploadicon"
                      src={uploadicon}
                      alt="upload icon"
                    />
                  </span>{" "}
                  Upload Image
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return YourFormComponent();
}
