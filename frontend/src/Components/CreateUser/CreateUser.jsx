import React, { useState } from "react";
import "./CreateUser.css";

import axios from "axios";

import fuelicon from "../../Asserts/pictures/bluelogo.svg";
import galleryicon from "../../Asserts/pictures/galleryicon.svg";
import plusicon from "../../Asserts/pictures/+.svg";
import uploadicon from "../../Asserts/pictures/uploadicon.svg";

export default function CreateUser() {
  const [emailPhone, setEmailPhone] = useState("");
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [age, setAge] = useState("");
  const [skill, setSkill] = useState("");
  const [experience, setExperience] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      name === "" ||
      location === "" ||
      age === "" ||
      emailPhone === "" ||
      skill === "" ||
      experience === "" ||
      image === null
    ) {
      alert("Please fill in all fields");
      return;
    }

    const createUser = {
      emailPhone,
      name,
      age,
      skill,
      experience,
      location,
      image,
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/login",
        createUser
      );

      console.log("Server response:", response.data);
      alert("Success");
    } catch (error) {
      console.error("Error creating user:", error);
      alert("Error creating user");
    }

    // Reset form fields
    setEmailPhone("");
    setName("");
    setAge("");
    setSkill("");
    setExperience("");
    setLocation("");
    setImage(null);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  return (
    <>
      <div className="main">
        <div className="logo">
          <h1 className="logoheading">
            <span>
              {" "}
              <img src={fuelicon} alt="fuelicon" />
            </span>{" "}
            Fleeto Product{" "}
          </h1>
        </div>

        <div className="container ">
          <div className="row">
            <div className="col-md-5 ">
              <div className="galleryimages">
                {/* Display the selected image */}
                {image ? (
                  <img
                    className="selected-image"
                    src={URL.createObjectURL(image)}
                    alt="Selected"
                  />
                ) : (
                  <>
                    <img src={galleryicon} alt="logo" />
                    <img className="plus" src={plusicon} alt="logo" />
                  </>
                )}
              </div>

              <div className="uploadbutton2">
                <label className="uploadbtn2" htmlFor="imageInput">
                  <span>
                    <img
                      className="uploadicon2"
                      src={uploadicon}
                      alt="uploadicon"
                    />
                  </span>
                  Upload Image
                </label>
                <input
                  id="imageInput"
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  style={{ display: "none" }}
                />
              </div>
            </div>

            <div className="col-md-7  p-2">
              <div className="createnewuser">
                <div className="createuser">
                  <h2>Create New User:</h2>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="d-flex flex-wrap mt-5  gap-4 align-items-md-center justify-content-center ">
                    {/* Form inputs */}
                    {/* First Line */}
                    <div className="d-flex flex-column gap-2 inp col-md-4">
                      <label htmlFor="">Name:</label>
                      <input
                        name="name"
                        className="p-2 custom-width custom-border "
                        type="text"
                        placeholder="Joi Beddan"
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>

                    <div className="d-flex flex-column gap-2 inp col-md-4">
                      <label htmlFor="">Location:</label>
                      <input
                        name="location"
                        className="p-2 custom-width custom-border "
                        type="text"
                        placeholder="United Kingdom"
                        onChange={(e) => setLocation(e.target.value)}
                      />
                    </div>

                    {/* Second Line */}
                    <div className="d-flex flex-column gap-2 inp col-md-4">
                      <label htmlFor="">Age:</label>
                      <input
                        name="age"
                        className="p-2 custom-width custom-border "
                        type="text"
                        placeholder="41years"
                        onChange={(e) => setAge(e.target.value)}
                      />
                    </div>

                    {/* Third Line */}
                    <div className="d-flex flex-column gap-2 inp col-md-4">
                      <label htmlFor="">Email & Phone Number:</label>
                      <input
                        name="emailPhone"
                        className="p-2 custom-border "
                        type="text"
                        placeholder="Abc@gmail.com | +92 3048236344"
                        onChange={(e) => setEmailPhone(e.target.value)}
                      />
                    </div>

                    {/* Fourth Line */}
                    <div className="d-flex flex-column gap-2 inp col-md-4">
                      <label htmlFor="">Skill:</label>
                      <input
                        name="skill"
                        className="p-2 custom-width custom-border "
                        type="text"
                        placeholder="Driver"
                        onChange={(e) => setSkill(e.target.value)}
                      />
                    </div>

                    {/* Fifth Line */}
                    <div className="d-flex flex-column gap-2 inp col-md-4">
                      <label htmlFor=""> Experience:</label>
                      <input
                        name="experience"
                        className="p-2 custom-width custom-border "
                        type="text"
                        placeholder="6 Year"
                        onChange={(e) => setExperience(e.target.value)}
                      />
                    </div>

                    <div className="d-flex flex-column gap-2 inp col-md-4">
                      <div className="submitbutton2">
                        <button type="submit" className="submitbtn2">
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
