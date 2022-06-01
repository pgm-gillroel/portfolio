import { useState } from 'react';
import { Navbar, NavbarToggler, NavbarBrand, Collapse, Nav, NavItem, NavLink } from 'reactstrap';






const NavBar = () => {

  const [navOpen, setNavOpen] = useState(false);


  const OpenNav = () => {

    if (!navOpen) {
      setNavOpen(true);
    }else  {
      setNavOpen(false)
    }
  }


  return (
    <nav>
  <Navbar
    color="light"
    expand="md"
    light
  >
    <NavbarBrand href="/">
      reactstrap
    </NavbarBrand>
    <NavbarToggler onClick={OpenNav} />
    <Collapse navbar style={{display: navOpen ? 'block' : 'none'}}>
      <Nav
        className="me-auto"
        navbar
      >
        <NavItem>
          <NavLink href="#about">
            About
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#projects">
            Projects
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#skills">
            Skills
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#contact">
            Contact
          </NavLink>
        </NavItem>
        
      </Nav>
    </Collapse>
  </Navbar>
  </nav>
  )
}


export default NavBar;