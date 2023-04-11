import axios from "axios";
import React, { useState } from "react";

import "./contact.css"; // Import the CSS file

export default function Forms() {
  const [inputs, setInputs] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const handleOnChange = (event) => {
    event.persist();
    setInputs((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();

    axios({
      method: "POST",
      url: "https://formbold.com/s/ozVdp",
      data: inputs,
    })
      .then((r) => {
        console.log("hello");
      })
      .catch((r) => {
        console.log("error");
      });
  };

  return (
    <form onSubmit={handleOnSubmit} className="form-container">
      <input
        onChange={handleOnChange}
        value={inputs.email}
        id="email"
        type="email"
        name="email"
        placeholder="Email"
        className="form-input"
      />
      <input
        onChange={handleOnChange}
        value={inputs.subject}
        id="subject"
        type="text"
        name="subject"
        placeholder="Subject"
        className="form-input"
      />
      <textarea
        onChange={handleOnChange}
        value={inputs.message}
        id="message"
        name="message"
        placeholder="Type your message"
        className="form-input"
      />
      <button type="submit" className="form-button">
        Send Message
      </button>
    </form>
  );
}
