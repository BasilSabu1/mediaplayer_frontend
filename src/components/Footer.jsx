import React from 'react'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button'

function Footer() {
  return (
    <div style={{width:'100%',height:'300px'}} className='d-flex align-items-center justify-content-center flex-column'>
      <div className='footer d-flex w-100 ms-5'>
       <div className='w-25 ms-5 ps-5'>
        
        <h3><i class="fa-solid fa-video text-warning fa-beat"></i> Media Player</h3>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione recusandae architecto blanditiis eius reiciendis omnis harum. Minima aliquam eum ducimus ea, labore odit alias magni soluta distinctio, consequuntur eos nemo!
        </p>
        </div>

        
        <div className='ms-5 d-flex flex-column ps-5' >
          <h3>Links</h3>
          <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Landing Page</Link>
          <Link to={'/home'} style={{textDecoration:'none',color:'white'}}>Home Page</Link>
          <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Watch History</Link>
        </div>

        <div className='ms-5 d-flex flex-column ps-5'>
          <h3>Guides</h3>
          <Link to={'/'} style={{textDecoration:'none',color:'white'}}>React</Link>
          <Link to={'/'} style={{textDecoration:'none',color:'white'}}>React Bootstrap</Link>
          <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Bootswatch</Link>
        </div>

        <div className='ms-5 d-flex flex-column ps-5'>
          <h3>Contact Us</h3>
          <div className='d-flex'>
            <input className='form-control' type='text' placeholder='Enter your EmailID'></input>
            <Button className='ms-1 btn w-75' variant="warning">Subscribe</Button>
          </div>

          <div className="links d-flex justify-content-evenly align-items-center mt-3">
          <Link to={'https://www.linkedin.com/in/sandeep-santhosh-301188264/'} style={{ textDecoration: 'none', color: 'white' }}><i class="fa-brands fa-instagram fa-2x"></i></Link>
          <Link to={'https://www.linkedin.com/in/sandeep-santhosh-301188264/'} style={{ textDecoration: 'none', color: 'white' }}><i class="fa-brands fa-twitter fa-2x"></i></Link>
          <Link to={'https://www.linkedin.com/in/sandeep-santhosh-301188264/'} style={{ textDecoration: 'none', color: 'white' }}><i class="fa-brands fa-linkedin fa-2x"></i></Link>
          <Link to={'https://www.linkedin.com/in/sandeep-santhosh-301188264/'} style={{ textDecoration: 'none', color: 'white' }}><i class="fa-brands fa-facebook fa-2x"></i></Link>
          </div>

        </div>
    </div>
    <p className='mt-3'>Copyright 2023 Media player. Build with React</p>
    </div>
  )
}

export default Footer