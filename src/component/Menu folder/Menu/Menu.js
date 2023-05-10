import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import {Row,Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import MenuJson from '../Menu.json'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Menu.css'


const Menu = () => {
  return (

    <>
    <h1 className='menu1'>The Wise Owl's Cafe</h1>
    <h3 className='menu2'>Menu Section</h3>
      <Container>
        <Row>
          {MenuJson.Menu.map(item => (
            <Col xs={1} lg={3} md={2} xl={4} key={item.id}>
             <Card>
      <Card.Img variant="top" src={item.menu_img} />
      <Card.Body>
        <Card.Title>{item.menu_name}</Card.Title>
        <Card.Text>{item.menu_desc}</Card.Text>
        <Link to={`sub-menu/${item.id}`}>
        <Button variant="primary">View more</Button>
        </Link>
      </Card.Body>
    </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>

  )
}

export default Menu