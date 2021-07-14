import React from 'react'
import './contact.css';


function contact() {
  return (
    <div className="contact">
        <h1>Contact Me!</h1>
        <h5>You can reach out to me on</h5>
        <ul class = 'icons'>
          <li><i class="fab fa-whatsapp"></i></li>
          <li><i class="fab fa-instagram"></i></li>
          <li><i class="fab fa-linkedin"></i></li>
        </ul>
    </div>
  );
}

export default contact;
