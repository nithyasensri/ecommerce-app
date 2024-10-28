
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Product from './pages/Product';
import Cart from './pages/Cart'
import { ProductProvider } from './context/ProductContext'
import { CartProvider } from './context/CartContext'
import {CartProvidercart} from './context/CartContextcart'
import ProductDetail from './pages/ProductDetail';

import { Container, Row, Col } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Container fluid >
      <ProductProvider>
        <CartProvider>
          <CartProvidercart>
          <Router  basename="/ecommerce-app">
            <Row xs="12" className='main-row' style={{ 'background': '#0289cc'}}>
              <Col xs="12" sm={{ offset: 0, size: 12 }} md={{offset: 0, size: 12}} lg={{ offset: 1, size: 10 }} >
                <Row>
                  <Col xs="3" sm="3" md="3" lg="3"  className='text-white heading'>
                    <h1>Dev Shops</h1>
                  </Col>
                  <Col  className='dummy'></Col>
                  <Col  xs="9" sm="9" md="8" lg="7" className='' >
                    <Navbar />
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Routes>
                <Route path='/' element={<Product />} />
                <Route path='/product/:productId' element={<ProductDetail />} />
                <Route path='/cart' element={<Cart />} />
              </Routes>
            </Row>
          </Router>
          </CartProvidercart>
        </CartProvider>
      </ProductProvider>
    </Container>
  );
}

export default App;

// https://dummyjson.com/products