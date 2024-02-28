import React from 'react'
import {Row,Col} from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
function LandingPage() {
  const navigateByUrl = useNavigate()
  return (
    <div>
      <Row className='mt-5 mb-5 d-flex justify-content-evenly align-items-center w-100'>
        <Col></Col>
        <Col lg={5}>
          <h3>Welcome to<span className='text warning'> Media Player</span></h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam fugiat quas consequatur fuga excepturi laudantium eaque minus ea, hic mollitia totam sapiente repellat cupiditate accusamus maiores nam quasi. Doloremque, facere.</p>
          <Button onClick={()=>navigateByUrl('/home')} className='' variant="warning">Get Started
          <i class="fa-solid fa-arrow-right"></i>
          </Button>{' '}
        </Col>
        <Col></Col>
        <Col lg={5}>
          <img src='https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif'/>
        </Col>
        </Row>

        <div className='container d-flex justify-content-center align-items-center flex-column'>
        <h3>Features</h3>
            <div className='mt-5 mb-5 d-flex align-items-center justify-content-between w-100'>
            
            <Card className='p-3' style={{ width: '22rem' }}>
            <Card.Img variant="top" src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>

          <Card className='p-3' style={{ width: '22rem' }}>
            <Card.Img variant="top" src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>

          <Card className='p-3' style={{ width: '22rem' }}>
            <Card.Img variant="top" src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
            </div>
        </div>

        <div className='container border border-2 border-secondary rounded w-100 p-5 mt-5 mb-5 d-flex align-items-center justify-content-between'>
          <Row>
            <Col lg={5}>
                <h3>Simple fast and Powerful</h3>
                <h6 className='mb-3'><span>Play Everything</span>: Amet consectetur adipisicing elit. Autem veritatis totam tempore expendital! Quae quam,commodi dolorum iste unde atque alias debitis voluptates nesciunt</h6>
                <h6 className='mb-3'><span>Play Everything</span>: Amet consectetur adipisicing elit. Autem veritatis totam tempore expendital! Quae quam,commodi dolorum iste unde atque alias debitis voluptates nesciunt</h6>
                <h6 className='mb-3'><span>Play Everything</span>: Amet consectetur adipisicing elit. Autem veritatis totam tempore expendital! Quae quam,commodi dolorum iste unde atque alias debitis voluptates nesciunt</h6>
            </Col>
            <Col></Col>
            <Col lg={6}>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/0VRuesp4UYk?si=61uxvXBTlUeoQUKU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </Col>
          </Row>
        </div>
    </div>
  )
}

export default LandingPage