import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import ProductList from './components/ProductList';
import productsData from './data/products.json'; 

function App() {
  const [products, setProducts] = useState(productsData);

  const handleDelete = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  return (
    <div>
      <Navbar />
      <Sidebar />
      <main>
        <h1>Product Admin</h1>
        <ProductList products={products} onDelete={handleDelete} />
      </main>
      <Footer />
    </div>
  );
}

export default App;

