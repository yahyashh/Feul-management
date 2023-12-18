import React, { useState } from "react";
import "./Uploadimage.css";

import fuelicon from "../../assets/pictures/fuelicon.svg";
import historyicon from "../../assets/pictures/historyicon.svg";
import profileimage from "../../assets/pictures/profilepic.svg";
import uploadicon from "../../assets/pictures/uploadicon.svg";

import axios from "axios";

export default function Uploadimage() {
  const YourFormComponent = () => {
    const [stationName, setStationName] = useState("");
    const [pricePerLitre, setPricePerLitre] = useState("");
    const [totalLitre, setTotalLitre] = useState("");
    const [totalPrice, setTotalPrice] = useState("");
    const [location, setLocation] = useState("");
    const [dateTime, setDateTime] = useState("");

    const submitData = async () => {
      if (
        stationName === "" ||
        pricePerLitre === "" ||
        totalLitre === "" ||
        totalPrice === "" ||
        location === "" ||
        dateTime === ""
      ) {
        alert("Please fill in all fields");
      }

      try {
        const response = await axios.post(
          "http://localhost:5000/formfulldata",
          {
            stationName,
            pricePerLitre,
            totalLitre,
            totalPrice,
            location,
            dateTime,
          }
        );

        console.log("Server response:", response.data);
      } catch (error) {
        console.error("Error submitting data:", error);
      }
    };

    // upload image

    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
      // The selected file can be accessed using event.target.files
      const file = event.target.files[0];

      // Update state with the selected file
      setSelectedFile(file);
    };

    const handleUpload = async () => {
      if (selectedFile) {
        console.log("Uploading file:", selectedFile);

        // Create a FormData object
        const formData = new FormData();

        // Append form data to the FormData object
        formData.append("stationName", stationName);
        formData.append("pricePerLitre", pricePerLitre);
        formData.append("totalLitre", totalLitre);
        formData.append("totalPrice", totalPrice);
        formData.append("location", location);
        formData.append("dateTime", dateTime);

        // Append the file to the FormData object
        formData.append("image", selectedFile);

        try {
          // Use axios to send the FormData to the server
          const response = await axios.post(
            "http://localhost:5000/formfulldata",
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );

          console.log("Server response:", response.data);
        } catch (error) {
          console.error("Error submitting data:", error);
        }
      } else {
        console.log("No file selected.");
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
                <img src={historyicon} alt="historyicon" />
              </div>
              <div>
                <img src={profileimage} alt="profileimage" />
              </div>
            </div>
          </div>

          <div className="twoforms">
            <div className="form ">
              <form>
                <div className="d-flex flex-wrap mt-5  gap-4 align-items-md-center justify-content-center ">
                  {/* First Line */}
                  <div className="d-flex flex-column gap-3 inp col-md-4">
                    <label htmlFor="">Station name</label>
                    <input
                      className="p-2 border-0 inplogcol"
                      type="text"
                      onChange={(e) => setStationName(e.target.value)}
                    />
                  </div>

                  <div className="d-flex flex-column gap-3 inp col-md-4">
                    <label htmlFor="">Price /L</label>
                    <input
                      className="p-2 border-0 inplogcol"
                      type="text"
                      onChange={(e) => setPricePerLitre(e.target.value)}
                    />
                  </div>

                  {/* Second Line */}
                  <div className="d-flex flex-column gap-3 inp col-md-4">
                    <label htmlFor="">Total L</label>
                    <input
                      className="p-2 border-0 inplogcol"
                      type="text"
                      onChange={(e) => setTotalLitre(e.target.value)}
                    />
                  </div>

                  {/* Third Line */}
                  <div className="d-flex flex-column gap-3 inp col-md-4">
                    <label htmlFor="">Total Price</label>
                    <input
                      className="p-2 border-0 inplogcol"
                      type="text"
                      onChange={(e) => setTotalPrice(e.target.value)}
                    />
                  </div>

                  {/* Fourth Line */}
                  <div className="d-flex flex-column gap-3 inp col-md-4">
                    <label htmlFor="">Location</label>
                    <input
                      className="p-2 border-0 inplogcol"
                      type="text"
                      onChange={(e) => setLocation(e.target.value)}
                    />
                  </div>

                  {/* Fifth Line */}
                  <div className="d-flex flex-column gap-3 inp col-md-4">
                    <label htmlFor="">Date/time</label>
                    <input
                      className="p-2 border-0 inplogcol"
                      type="text"
                      onChange={(e) => setDateTime(e.target.value)}
                    />
                  </div>
                </div>
              </form>
              <div className="submitbutton">
                <button
                  className="submitbtn"
                  onClick={() => {
                    submitData();
                    handleUpload();
                  }}
                >
                  Submit
                </button>
              </div>
            </div>
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
