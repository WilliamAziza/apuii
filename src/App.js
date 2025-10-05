
import React, { useState } from 'react';
import { Container, Navbar, Nav, Badge, Form, Button, Row, Col } from 'react-bootstrap';
import { CartProvider, useCart, ThemeProvider, useTheme } from './context/CartContext';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import './styles.css';

const Header = ({ view, setView, cartCount }) => {
  const { isDarkMode, toggleTheme } = useTheme();
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="shadow-sm">
      <Container>
        <Navbar.Brand onClick={() => setView('home')} style={{ cursor: 'pointer', fontWeight: 'bold', fontSize: '1.5rem' }}>
          🛒 Clothes & Bags Store
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => setView('home')}>Home</Nav.Link>
            <Nav.Link onClick={() => setView('cart')}>
              🛒 Cart <Badge bg="warning" text="dark">{cartCount}</Badge>
            </Nav.Link>
          </Nav>
          <Form className="d-flex flex-grow-1" style={{ maxWidth: '400px' }}>
            <Form.Control
              type="search"
              placeholder="Search products..."
              className="me-2"
              aria-label="Search"
            />
            <Button variant="warning" className="me-2">Search</Button>
          </Form>
          <Button variant="outline-light" onClick={toggleTheme}>
            {isDarkMode ? '☀️ Light' : '🌙 Dark'}
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

function AppContent() {
  const [view, setView] = useState('home');
  const { getCartCount } = useCart();

  const renderView = () => {
    switch (view) {
      case 'home':
        return <ProductList />;
      case 'cart':
        return <Cart setView={setView} />;
      case 'checkout':
        return <Checkout setView={setView} />;
      default:
        return <ProductList />;
    }
  };

  const { isDarkMode } = useTheme();
  return (
    <div className="App" data-theme={isDarkMode ? 'dark' : 'light'}>
      <Header view={view} setView={setView} cartCount={getCartCount()} />
      <Container className="mt-4">
        {renderView()}
      </Container>
      <footer>
        <Container>
          <Row>
            <Col md={3}>
              <h5>Get to Know Us</h5>
              <ul>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">About Clothes & Bags</a></li>
                <li><a href="#">Investor Relations</a></li>
              </ul>
            </Col>
            <Col md={3}>
              <h5>Make Money with Us</h5>
              <ul>
                <li><a href="#">Sell products on our site</a></li>
                <li><a href="#">Become an Affiliate</a></li>
                <li><a href="#">Advertise Your Products</a></li>
              </ul>
            </Col>
            <Col md={3}>
              <h5>Amazon Payment Products</h5>
              <ul>
                <li><a href="#">Shop with Points</a></li>
                <li><a href="#">Reload Your Balance</a></li>
                <li><a href="#">Currency Converter</a></li>
              </ul>
            </Col>
            <Col md={3}>
              <h5>Let Us Help You</h5>
              <ul>
                <li><a href="#">Your Account</a></li>
                <li><a href="#">Your Orders</a></li>
                <li><a href="#">Shipping Rates & Policies</a></li>
                <li><a href="#">Returns & Replacements</a></li>
                <li><a href="#">Help</a></li>
              </ul>
            </Col>
          </Row>
          <div className="copyright">
            <p>&copy; 2023 Clothes & Bags Store. All rights reserved.</p>
            <p>Conditions of Use | Privacy Notice | Interest-Based Ads</p>
          </div>
        </Container>
      </footer>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
