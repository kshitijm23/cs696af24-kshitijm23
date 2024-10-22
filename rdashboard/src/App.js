import React, { useState } from 'react';
import { Container, Row, Col, Nav, Navbar, Form, FormControl, Button, Dropdown, Card, Table, ProgressBar } from 'react-bootstrap';
import { BarChart, Bar,  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { FaHome, FaGamepad, FaUsers, FaCog, FaSignOutAlt, FaBell, FaUser, FaSearch } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const topGames = [
    { name: 'Call of Duty', players: 100000000 },
    { name: 'Counter-Strike', players: 80000000 },
    { name: 'Apex Legends', players: 70000000 },
    { name: 'Valorant', players: 60000000 },
    { name: 'Overwatch', players: 50000000 },
  ];

  const platformData = [
    { name: 'PC', value: 45 },
    { name: 'PlayStation', value: 30 },
    { name: 'Xbox', value: 20 },
    { name: 'Mobile', value: 5 },
  ];

  return (
    <div className="dashboard">
      {/* Navigation Sidebar */}
      <Nav className={`flex-column bg-dark sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-sticky">
          <Nav.Link href="#"><FaHome /> Dashboard</Nav.Link>
          <Nav.Link href="#"><FaGamepad /> Games</Nav.Link>
          <Nav.Link href="#"><FaUsers /> Players</Nav.Link>
          <Nav.Link href="#"><FaCog /> Settings</Nav.Link>
          <Nav.Link href="#"><FaSignOutAlt /> Logout</Nav.Link>
        </div>
      </Nav>

      <div className="main-content">
        {/* Header */}
        <Navbar bg="light" expand="lg" className="mb-4">
          <Button variant="outline-secondary" onClick={toggleSidebar} className="mr-2">
            ☰
          </Button>
          <Form inline className="ml-auto d-flex">
            <FormControl type="text" placeholder="Search games" className="mr-sm-2" />
            <Button variant="outline-success"><FaSearch /></Button>
          </Form>
          <Nav className="ml-2">
            <Nav.Link href="#"><FaBell /></Nav.Link>
            <Dropdown>
              <Dropdown.Toggle variant="link" id="dropdown-basic">
                <FaUser /> Admin
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Settings</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar>

        {/* Main Content Area */}
        <Container fluid>
          {/* Summary Statistics */}
          <Row className="mb-4">
            <Col md={3}>
              <Card>
                <Card.Body>
                  <Card.Title>Total Players</Card.Title>
                  <Card.Text className="h2">360M+</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card>
                <Card.Body>
                  <Card.Title>Average Playtime</Card.Title>
                  <Card.Text className="h2">6.2 hours/week</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card>
                <Card.Body>
                  <Card.Title>Global Market Value</Card.Title>
                  <Card.Text className="h2">$21.8B</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card>
                <Card.Body>
                  <Card.Title>YoY Growth</Card.Title>
                  <Card.Text className="h2">8.7%</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Chart Widget */}
          <Row className="mb-4">
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Top FPS Games by Player Count</Card.Title>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={topGames}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="players" fill="#8884d8" />
                    </BarChart>
                  </ResponsiveContainer>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Platform Distribution and Performance Metrics */}
          <Row>
            <Col md={6}>
              <Card>
                <Card.Body>
                  <Card.Title>Platform Distribution</Card.Title>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>Platform</th>
                        <th>Percentage</th>
                      </tr>
                    </thead>
                    <tbody>
                      {platformData.map((platform) => (
                        <tr key={platform.name}>
                          <td>{platform.name}</td>
                          <td>{platform.value}%</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card>
                <Card.Body>
                  <Card.Title>Game Performance Metrics</Card.Title>
                  <div className="mb-3">
                    <div>Server Uptime</div>
                    <ProgressBar now={99.9} label={`99.9%`} />
                  </div>
                  <div className="mb-3">
                    <div>Player Retention Rate</div>
                    <ProgressBar now={85} label={`85%`} />
                  </div>
                  <div>
                    <div>Average FPS</div>
                    <ProgressBar now={120} max={144} label={`120 FPS`} />
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

        {/* Footer */}
        <footer className="bg-light text-center py-3 mt-4">
          <p>&copy; 2023 FPS Game Analytics. All rights reserved. | <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a></p>
        </footer>
      </div>
    </div>
  );
};

export default App;
