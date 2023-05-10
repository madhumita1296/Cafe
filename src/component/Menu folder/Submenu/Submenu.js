import React from 'react'
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import { Link,useParams } from 'react-router-dom'
import MenuJSON from '../Menu.json'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const SubMenu = () => {
  let { menu_id } = useParams();
  console.log("Recived from url in subMenu", menu_id);
  let sub_id = MenuJSON.Menu.find((data) => data.id.trim() === menu_id)
  console.log("Sub_menu:", sub_id);
  return (
    <>
      <Container>
        <h1>{sub_id.menu_desc}</h1>
        <Row xs={1} md={2} lg={3} xl={4}>
          {
            sub_id.sub_menu.map((X) => (
              <Col key={X.sub_id}>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={X.sub_img} />
                  <Card.Body>
                    <Card.Title>{X.sub_name}</Card.Title>
                    {/* <Card.Text>{X.price}</Card.Text> */}
                    <Link to={`details/${X.sub_id}`}>
                    <Button variant="primary">Details</Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))
          }
        </Row>
      </Container>
    </>
  )
}

export default SubMenu