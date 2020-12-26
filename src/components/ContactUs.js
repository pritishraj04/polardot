import React from "react";
import "./ContactUs.css";

function ContactUs() {
  return (
    <div className="contact-us_container">
      <div className="container card message-container ">
        <h1 className="message-title">Send A Message</h1>
        <form
          action="mailto:email@email.com"
          method="post"
          enctype="text/plain"
        >
          <label for="subject" className="subject">
            Subject
          </label>
          <input type="text" name="subject" maxlength="45" />
          <label for="message" className="message">
            Message
          </label>
          <textarea
            name="message"
            cols="30"
            rows="7"
            required
            maxlength="500"
          ></textarea>
          <label for="name" className="name">
            Name
            <p id="break"></p>
          </label>
          <input
            className="first-name"
            type="text"
            name="first-name"
            placeholder="First Name"
            required
            maxlength="20"
          />
          <input
            className="last-name"
            type="text"
            name="last-name"
            placeholder="Last Name"
            required
            maxlength="20"
          />
          <label for="email" className="email">
            Email
            <p id="break"></p>
          </label>
          <input
            type="email"
            name="email"
            placeholder="example@email.com"
            required
          />
          <p className="button-container">
            <input className="button" type="submit" value="Send" />
          </p>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
