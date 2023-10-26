import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import { Link } from 'react-router-dom'

export default function NavigationBar() {
  const [isDrawerOpen, setDrawerOpen] = useState(false)

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen)
  }

  return (
    <div>
      <nav
        className="navbar bg-dark border-bottom border-body fixed-top"
        data-bs-theme="dark"
      >
        <div className="container-fluid justify-content-center">
          {/*Hamburger menu button*/}
          <Button
            variant="outline-transparent"
            className="position-absolute start-0"
            onClick={toggleDrawer}
          >
            <span className="navbar-toggler-icon"></span>
          </Button>

          <Link
            to="/"
            className="navbar-brand mb-0 h1"
            style={{ textDecoration: 'none', color: 'white' }}
          >
            Pokémon
          </Link>
        </div>
      </nav>

      <Offcanvas show={isDrawerOpen} onHide={toggleDrawer} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ListGroup>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <ListGroup.Item action onClick={toggleDrawer}>
                Home
              </ListGroup.Item>
            </Link>
            <Link to="/favorites" style={{ textDecoration: 'none' }}>
              <ListGroup.Item action onClick={toggleDrawer}>
                Favorites
              </ListGroup.Item>
            </Link>
          </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}
