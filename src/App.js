
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
