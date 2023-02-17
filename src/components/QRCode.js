import React from "react";
import "../styles/QRcode.css";

export default function QRCode(props) {
  console.log(props);
  return (
    <section className="qr-code">
      <div className="qr-code-style">
        <img src={props.src} alt="" />
        <h3>Improve your front - end skills by building projects</h3>
        <p>
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </section>
  );
}
