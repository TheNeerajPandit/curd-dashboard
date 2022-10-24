import React from "react";
import "./contact.css"

const Contact = () => {
  return (
    <div className="container">
      <div className="py-4">
        <h1>Contact Us</h1>
        <p class="introduction">
        Let's get this converstaion started. Tell us a bit about yourself, and
        we'll get in touch as soon as we can.
      </p>
      <div className="form">
        <form action="">
          <table>
            <tr>
              <td>
                <label for="firstname">First Name</label> <input type="text" />
              </td>
              <td>
                <label for="lastname">Last Name</label>
                <input type="text" />
              </td>
            </tr>
            <tr>
              <td>
                <label for="">Work Email</label>
                <input type="text" />
              </td>
            </tr>
            <tr>
              <td>
                <label for="">Message</label>
                <input className="message" type="text" name="" id="" />
              </td>
            </tr>
            <tr>
                <td>
                    <button className="submit" type="submit">Submit</button>
                </td>
            </tr>
          </table>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Contact;
