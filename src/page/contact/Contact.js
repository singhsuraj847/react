import React from "react";
import "./Contact.style.css";
import { FaPhoneAlt, FaRegEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact">
      <div className="content">
        <h2>Contact Us</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and
          typesettingindustry. Lorem Ipsum has been the industry'standard dummy
          text ever since the 1500s, when an unknown printer took a galley of
          type and scrambled it to make a type specimen book.
        </p>
      </div>
      <div className="container">
        <div className="contactInfo">
          <div className="box">
            <div className="icon">
              <FaMapMarkerAlt />
            </div>
            <div className="text">
              <h3>Address</h3>
              <p>
                4671 Sugar Camp Road, <br />
                Kaputhala, <br />
                144601
              </p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <FaPhoneAlt />
            </div>
            <div className="text">
              <h3>Phone</h3>
              <p>507-475-6094</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <FaRegEnvelope />
            </div>
            <div className="text">
              <h3>Email</h3>
              <p>abc@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="contactForm">
          <form>
            <h2>Send Message</h2>
            <div className="inputBox">
              <input type="text" name="" required />
              <span>Full Name</span>
            </div>
            <div className="inputBox">
              <input type="text" name="" required />
              <span>Email</span>
            </div>
            <div className="inputBox">
              <textarea required="required"></textarea>
              <span>Type Your Message...</span>
            </div>
            <div className="inputBox">
              <input type="submit" name="" value="Send" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
