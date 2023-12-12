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

  const createuser = {
    emailPhone,
    name,
    age,
    skill,
    experience,
    location,
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/login", createuser)
      .then((res) => {
        alert("success");
      })
      .catch((err) => {
        alert("error" + err);
      });

    setEmailPhone("");
    setName("");
    setAge("");
    setSkill("");
    setExperience("");
    setLocation("");
  };

  const [formData, setFormData] = useState({
    name: "",
    location: "",
    age: "",
    emailPhone: "",
    skill: "",
    experience: "",
    image: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, image: file });
  };

  // Check if all fields are filled
  const isFormValid = Object.values(formData).every((value) => value !== "");

  if (isFormValid) {
    // TODO: Add logic to submit the form data (e.g., send it to an API)
    console.log("Form submitted:", formData);
  }

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
                {formData.image ? (
                  <img
                    className="selected-image"
                    src={URL.createObjectURL(formData.image)}
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
                    {/* First Line */}
                    <div className="d-flex flex-column gap-2 inp col-md-4">
                      <label htmlFor="">Name:</label>
                      <input
                        name="name"
                        className="p-2 custom-width custom-border "
                        type="text"
                        placeholder="Joi Beddan"
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="d-flex flex-column gap-2 inp col-md-4">
                      <label htmlFor="">Location:</label>
                      <input
                        name="location"
                        className="p-2 custom-width custom-border "
                        type="text"
                        placeholder="United Kingdom"
                        onChange={handleInputChange}
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
                        onChange={handleInputChange}
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
                        onChange={handleInputChange}
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
                        onChange={handleInputChange}
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
                        onChange={handleInputChange}
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
