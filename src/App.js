
import React, { useState } from 'react';
import { Container, Navbar, Nav, Badge, Form, Button } from 'react-bootstrap';
import { CartProvider, useCart, ThemeProvider, useTheme } from './context/CartContext';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import './styles.css';

const Header = ({ view, setView, cartCount }) => {
  const { isDarkMode, toggleTheme } = useTheme();
  return (
    <Navbar bg="primary" variant="dark" expand="lg" className="shadow-sm">
      <Container>
        <Navbar.Brand onClick={() => setView('home')} style={{ cursor: 'pointer', fontWeight: 'bold' }}>
          🛍️ Clothes & Bags Store
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => setView('home')}>Home</Nav.Link>
            <Nav.Link onClick={() => setView('cart')}>
              🛒 Cart <Badge bg="light" text="dark">{cartCount}</Badge>
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search products..."
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-light" className="me-2">Search</Button>
            <Button variant="outline-light" onClick={toggleTheme}>
              {isDarkMode ? '☀️ Light' : '🌙 Dark'}
            </Button>
          </Form>
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
      <footer className="bg-dark text-light text-center py-4 mt-5">
        <Container>
          <p>&copy; 2023 Clothes & Bags Store. All rights reserved.</p>
          <p>Fast delivery | Secure payments | 24/7 support</p>
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
