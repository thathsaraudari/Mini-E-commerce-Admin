import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

import productsData from './data/products.json'; 

import AboutPage from './pages/AboutPage';
import DashboardPage from './pages/DashboardPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import UpdateProductPage from './pages/UpdateProductPage';
import NotFoundPage from './pages/NotFoundPage';



function App() {
  const [products, setProducts] = useState(productsData);

  console.log("productsData:", productsData);

  const handleDelete = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  const handleAddProduct = (newProduct) => {
    setProducts(prev => [...prev, newProduct]);
  };

  const handleUpdateProduct = (updatedProduct) => {
    const updatedProducts = [...products];

    for (let i = 0; i < updatedProducts.length; i++) {
      if (updatedProducts[i].id === updatedProduct.id) {
        updatedProducts[i] = updatedProduct;
        break; // stop once found
      }
    }

    setProducts(updatedProducts);
};

  return (
    <div>      
        <Navbar />
        <Sidebar />


          <Routes>
            <Route path="/about" element={<AboutPage/>}/>         
            <Route path="/" element={<DashboardPage products={products} onDelete={handleDelete} onAddProduct={handleAddProduct}/>}/>
            <Route path="/product/:productId" element={<ProductDetailsPage products={products}/>}/>
            <Route path="/edit/:productId" element={<UpdateProductPage products={products} onUpdateProduct={handleUpdateProduct}/>}/>
            <Route path="/*" element={<NotFoundPage/>}/>
          </Routes>          


        <Footer />    
    </div>
  );
}

export default App;