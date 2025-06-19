import ProductCard from './ProductCard';

function ProductList({ products, onDelete }) {
  return (
    <div style={{
      display: "flex",
      flexWrap: "wrap",
      gap: "20px",
      padding: "20px"
    }}>
      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default ProductList;
