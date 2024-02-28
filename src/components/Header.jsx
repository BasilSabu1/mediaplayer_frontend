import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'
function Header() {
  return (
    <div>
    <Navbar className="bg-body-dark">
    <Container>
      <Navbar.Brand href="#home">
     
      <Link  to={'/'} style={{textDecoration:'none' , color:'white',fontSize:'30px'}} >
      <i class="pt-2 fa-solid fa-video fa-beat-fade text-warning "></i>
      
     
      {' '}
        Video Player
        </Link>
      </Navbar.Brand>
    </Container>
  </Navbar></div>
  )
}

export default Header