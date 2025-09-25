
import React, { useState } from 'react';
import { Container, Navbar, Nav, Badge } from 'react-bootstrap';
import { CartProvider, useCart } from './context/CartContext';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import './styles.css';

const Header = ({ view, setView, cartCount }) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand onClick={() => setView('home')} style={{ cursor: 'pointer' }}>
          Clothes & Bags Store
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={() => setView('home')}>Home</Nav.Link>
          <Nav.Link onClick={() => setView('cart')}>
            Cart <Badge bg="secondary">{cartCount}</Badge>
          </Nav.Link>
        </Nav>
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

  return (
    <div className="App">
      <Header view={view} setView={setView} cartCount={getCartCount()} />
      <Container className="mt-4">
        {renderView()}
      </Container>
    </div>
  );
}

function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}

export default App;
