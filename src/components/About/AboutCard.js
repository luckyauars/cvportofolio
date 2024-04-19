import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hai, Saya <span className="purple">Lucky Aulia Arisdi </span>
            lulusan <span className="purple"> SMKN 5 Malang</span>
            <br />
            Pengalaman saya yaitu magang sebagai IT Developer selama 6 bulan.
            <br />
            Saya juga mencoba untuk membuka Freelance yang saat ini sudah saya trima dan pelajari yaitu sebagai berikut:
            <br />
            <br />
            
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Pembuatan Web Apotek dengan PHP
            </li>
            <li className="about-activity">
              <ImPointRight /> Aplikasi Kasir dengan (Excel)
            </li>
            <li className="about-activity">
              <ImPointRight /> Pembuatan Aplikasi Game 2D dengan SoftWare Unity (Sampai saat ini)
            </li>
          </ul>
          <footer className="blockquote-footer">Project Lucky</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
