import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';

function Header() {
  return (
    <MDBNavbar light bgColor='light'>
    <MDBContainer fluid >
      <MDBNavbarBrand href='#'>
        <img
          src='https://marketplace.canva.com/EAFaFUz4aKo/2/0/1600w/canva-yellow-abstract-cooking-fire-free-logo-JmYWTjUsE-Q.jpg'
          height='40'
          alt=''
          loading='lazy'
          width='100%'
        />
        RecipeFusion

      </MDBNavbarBrand>
    </MDBContainer>
  </MDBNavbar>
  )
}

export default Header