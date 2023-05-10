import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Services.css'


const Services = () => {
  return (
    <div>
       <h1 className='service1'>The Wise Owl's Cafe</h1>
      <h3 className='service2'>Our Services</h3>
      <Container>
        <Row>
          <Col className='card1'>
          <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="../assets/food delivery.jpg" />
      <Card.Body>
        <Card.Title>Fastest Door Delivery</Card.Title>
        <Card.Text>
          It takes about 10 minutes on average from ordering online
           to having hat and tasty food delivered to your doorstep.
        </Card.Text>
        <Button variant="primary">Book Now</Button>
      </Card.Body>
    </Card>
          </Col>
          <Col className='card2'>
          <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="../assets/online table.jpg" />
      <Card.Body>
        <Card.Title>Online Table Booking</Card.Title>
        <Card.Text>
          Book a table online at coffe & cafe .Quick easy table reaservation here.
        </Card.Text>
        <Button variant="primary">Book Now</Button>
      </Card.Body>
    </Card>
          </Col>
          <Col className='card3'>
          <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="../assets/ambiance.jpg" />
      <Card.Body>
        <Card.Title>Beautiful Ambiance</Card.Title>
        <Card.Text>
          The cafe's soft music and candlelight gave it a romantic ambiance.
        </Card.Text>
        <Button variant="primary">Book Now</Button>
      </Card.Body>
    </Card>
          </Col>
          {/* <Col className='card4'>
          <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="../assets/best food.jpg" />
      <Card.Body>
        <Card.Title>Best Quality Food</Card.Title>
        <Card.Text>
          High quality foods include unrefined,minimally processed foods such as vegtables
          and fruits,whole grains,healthy fats and healthy sources of protein.
        </Card.Text>
        <Button variant="primary">Book Now</Button>
      </Card.Body>
    </Card>
          </Col> */}
          
        </Row>
      </Container>
        
    </div>
  )
}

export default Services