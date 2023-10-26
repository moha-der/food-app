import React from 'react'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import logo from '../../assets/images/res-logo.png'
import { Link } from 'react-router-dom'

import '../../styles/footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg='4' md='6' sm='6'>
            <div className="footer__logo text-center" >
              <img src={logo} alt="logo" />
              <h5>Food Order</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea unde aspernatur eum officia porro accusamus repudiandae labore facere, similique nulla tempora. Id nisi officiis dolorum atque distinctio suscipit voluptates corrupti.</p>
            </div>
          </Col>
          <Col lg='4' md='6' sm='6' className='text-center'>
            <h5 className="footer__title">Delivery Time</h5>
            <ListGroup className="deliver__time-list">
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Sunday - Thursday</span>
                <p>10:00am - 11:00pm</p>
              </ListGroupItem>

              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Friday - Saturday</span>
                <p>Off day</p>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg='4' md='6' sm='6' className='text-center'>
          <h5 className="footer__title">Contact</h5>
            <ListGroup className="deliver__time-list">
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <p>Location: Almoradi</p>
              </ListGroupItem>
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Phone: +34 652561427</span>
              </ListGroupItem>

              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Email: mderfoufi.developer@gmail.com</span>
              </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col lg="6" md="6">
            <p className="copyright__text">
              Copyright - 2023, website made by Mohammed Derfoufi. All Rights
              Reserved.
            </p>
          </Col>
          <Col lg="6" md="6">
            <div className="social__links d-flex align-items-center gap-4 justify-content-end">
              <p className="m-0">Follow: </p>
              <span>
                {" "}
                <Link to="https://www.facebook.com/moha.quehay">
                  <i className="ri-facebook-line"></i>
                </Link>{" "}
              </span>

              <span>
                <Link to="https://github.com/moha-der">
                  <i className="ri-github-line"></i>
                </Link>
              </span>

              <span>
                {" "}
                <Link to=" https://www.instagram.com/mohaa_99_/">
                  <i className="ri-instagram-line"></i>
                </Link>{" "}
              </span>

              <span>
                {" "}
                <Link to=" https://www.linkedin.com/in/mohammed-derfoufi/">
                  <i className="ri-linkedin-line"></i>
                </Link>{" "}
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer