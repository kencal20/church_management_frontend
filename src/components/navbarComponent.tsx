import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { useAuth } from '../auth/authContext';

export default function NavbarComponent() {
  const navigate = useNavigate();
  const { isAuthenticated, LogoutComponent, user } = useAuth();

  async function handleLogout() {
    try {
      await LogoutComponent();
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  }

  const adminMenuItems = (
    <>
      <NavDropdown.Item as={Link} to="/admin/members">Manage Members</NavDropdown.Item>
      <NavDropdown.Item as={Link} to="/admin/services">Manage Services</NavDropdown.Item>
      <NavDropdown.Item as={Link} to="/admin/events">Manage Events</NavDropdown.Item>
    </>
  );

  const memberMenuItems = (
    <>
      {/* Add other member-specific items here */}
    </>
  );



  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">MyChurch</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/sermons">Sermons</Nav.Link>
            <Nav.Link as={Link} to="/events">Events</Nav.Link>
            <Nav.Link as={Link} to="/ministries">Ministries</Nav.Link>
            <Nav.Link as={Link} to="/donations">Donations</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>

          {isAuthenticated ? (
            <NavDropdown
              title={user.user.email}
              id="user-dropdown"
              style={{ color: "white", padding: "10px", borderRadius: "10px", fontWeight: "bold" }}
            >
              <NavDropdown.Item as={Link} to="/dashboard">
                Dashboard
              </NavDropdown.Item>
              {user.userType === 'admin' && adminMenuItems}
              {user.userType === 'member' && memberMenuItems}
              <NavDropdown.Item as={Link} to="/login">
                <p onClick={handleLogout}>Logout</p>
              </NavDropdown.Item>
            </NavDropdown>
          ) : (
            <Link to={'/login'} className='btn btn-primary'>Login</Link>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
