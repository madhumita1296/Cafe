import React from 'react'
// import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <Row>
        <Col className='footer'>
        <h3>ENFOLD DETROIT</h3>
            <p>4870 Cass Ave</p>
            <p>Detroit,MI,United States</p>
            <p>(555) 389 976</p>
            <Link to="#" className='te'>
              detroit@enflod-reasturent.com
            </Link>
        </Col>
        <Col  className='footer1'>
        <h3>ENFOLDLA</h3>
            <p>1880 Cass Ave</p>
            <p>Los Angeles,CA, United States</p>
            <p>(555) 774 443</p>
            <Link to="#" className='te'>
              LA@enfold-reasturent.com

            </Link>
        </Col>
        <Col className='footer2'>
        <h3>ENFOLD SEATTLE</h3>
            <p>4376 Univercity Way</p>
            <p>Scattele,Wa,United States</p>
            <p>(555) 678 987</p>
            <Link to="#" className='te'>
              scattele@enfold-reasturent.com
              </Link>
          </Col>
         <Col className='footer3'>
         <h3>ENFOLD SETTLEPOS</h3>
            <p>4376 Univercity Way</p>
            <p>Scattele,Wa,United States</p>
            <p>(675) 098 987</p>
            <Link to="#" className='te'>
              settlepos@enfold-reasturent.com
              </Link>

        </Col>
      </Row>
    </>
     
        )
  }

export default Footer