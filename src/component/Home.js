import React from 'react'
// import About from './component/About'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import './Home.css'

const Home = () => {
  return (
    <>
      <div className='main-part'>
        <h1 className='menu1'>The Wise Owl's Cafe</h1>
        <Row>
          <Col>
            <Carousel>
              <Carousel.Item className='main-part'>
                <img
                  className="d-block w-100"
                  src="../assets/carousel1.jpg"
                  alt="first slide"
                />
                <Carousel.Caption className='main-body'>
                  <h3 className='main-body'>Caffeine before chaos</h3>
                  <p className='main-body'>Some days makethe coffe,other days the coffe makes you.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item className='main-part'>
                <img
                  className="d-block w-100"
                  src="./assets/carousel2.jpg"
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <h3 className='main-body2'>More coffe,More progress</h3>
                  <p className='main-body2'>If you're waiting for a sign to have another coffe,this is it.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item className='main-part'>
                <img
                  className="d-block w-100"
                  src="../assets/carousel3.jpg"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3 className='main-body1'>Hot day,Cold brew</h3>
                  <p className='main-body1'>Not all wander are lost;some are simply looking for coffe.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
        {/* <About/> */}
      </div>
    </>
  )
}

export default Home