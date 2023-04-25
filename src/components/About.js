// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";

// const About = () => {
//   return (
//     <div className="about-page">
//       <div className="header">
//         <img
//           src="https://i.ibb.co/Rc1kk7q/hoosierhotels.png"
//           alt="Hoosier Hotels logo"
//           className="logo"
//         />
//       </div>
//       <Container>
//         <Row>
//           <Col>
//             <h1>About Hoosier Hotels</h1>
//             <p>
//               Welcome to Hoosier Hotels, your go-to source for hassle-free hotel
//               bookings in Indianapolis, Bloomington, and Nashville. Our goal is
//               to provide our guests with an easy and enjoyable booking
//               experience, so you can focus on what really matters: enjoying your
//               stay!
//             </p>
//             <p>
//               Our tagline, “Streamline your stay, simplify your bookings with
//               the Hoosier Hotels,” encapsulates our commitment to making your
//               life easier. With a wide variety of hotels to choose from, we are
//               confident you'll find the perfect accommodations for your travel
//               needs.
//             </p>
//             <p>
//               We understand that traveling can be stressful, but we're here to
//               help. Whether you're traveling for business or pleasure, our
//               experienced team is always available to answer your questions and
//               provide recommendations for your trip. At Hoosier Hotels, we're
//               more than just a booking site - we're your travel partners.
//             </p>
//             <p>
//               Thank you for choosing Hoosier Hotels. We look forward to
//               providing you with an exceptional travel experience.
//             </p>
//           </Col>
//         </Row>
//       </Container>
//       <div className="footer">
//         <img
//           src="https://logos-world.net/wp-content/uploads/2021/02/Indiana-Hoosiers-Logo.png"
//           alt="Indiana Hoosiers logo"
//           className="logo"
//         />
//       </div>
//     </div>
//   );
// };

// export default About;

import React from "react";
import { Container, Row, Col, Navbar } from "react-bootstrap";
import "../about.css";

const About = () => {
  return (
    <div className="about-page">
      <Navbar bg-pastel-red>
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="https://i.ibb.co/Rc1kk7q/hoosierhotels.png"
              alt="Hoosier Hotels logo"
              className="d-inline-block align-top"
              height="775"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>

      <Container className="my-5">
        <Row>
          <Col>
            <h1>About Hoosier Hotels</h1>
            <p>
              Welcome to Hoosier Hotels, your go-to source for hassle-free hotel
              bookings in Indianapolis, Bloomington, and Nashville. Our goal is
              to provide our guests with an easy and enjoyable booking
              experience, so you can focus on what really matters: enjoying your
              stay!
            </p>
            <p>
              Our tagline, “Streamline your stay, simplify your bookings with
              the Hoosier Hotels,” encapsulates our commitment to making your
              life easier. With a wide variety of hotels to choose from, we are
              confident you'll find the perfect accommodations for your travel
              needs.
            </p>
            <p>
              We understand that traveling can be stressful, but we're here to
              help. Whether you're traveling for business or pleasure, our
              experienced team is always available to answer your questions and
              provide recommendations for your trip. At Hoosier Hotels, we're
              more than just a booking site - we're your travel partners.
            </p>
            <p>
              Thank you for choosing Hoosier Hotels. We look forward to
              providing you with an exceptional travel experience.
            </p>
          </Col>
        </Row>
      </Container>

      <footer className="footer bg-pastel-red text-white py-3">
        <Container>
          <Row>
            <Col className="text-center">
              <img
                src="https://i.ibb.co/syPSmd3/indiana-hoosiers-logo.jpg"
                alt="Indiana Hoosiers logo"
                className="d-inline-block align-top"
                height="50"
              />
              <p className="my-2">
                © 2023 Hoosier Hotels. All Rights Reserved.
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default About;
