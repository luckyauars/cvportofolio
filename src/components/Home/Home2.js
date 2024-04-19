import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/portofolio3.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Jelajah <span className="purple"> lebih lanjut </span> tentang saya
            </h1>
            <p className="home-about-body">
              Hi, Perkenalkan nama saya Lucky Aulia Arisdi biasa di panggil Lucky, saya menyukai tentang berbagai penjelajahan tentang Software Developer.
              <br />
              <br /> Untuk saat ini saya hanya belajar dari pengalaman saya yaitu
              <br />
              <i>
                <b className="purple"> Website menggunakan PHP, React.Js, dan pembuatan Game Unity dengan C#. </b>
              </i>
              <br />
              <br />
              Saya Sekolah mengambil bidang keahlian Teknik Informatika. &nbsp;
              <br />
              <i>
                <b className="purple">Dan saya diberi kesempatan Magang selama 6 Bulan. </b>
                <br /> Dan dari praktik kerja industri saya
                Mendapatkan banyak sekali pelajaran lebih luas seputar IT, Mulai dari Data Analyst Spreadsheets, dan Wordpress.{" "}
                <b className="purple">
                  Dan juga Game Unity 2D dengan C#
                </b>
              </i>
              <br />
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Sosial Media</h1>
            <p>
              Senang bisa <span className="purple">berteman </span>dengan anda lewat!
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/lucky-aulia-arisdi-ab9a66268/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/echo_lucky15"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
