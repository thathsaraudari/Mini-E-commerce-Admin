function ProductCard({ product, onDelete }) {
  return (
    <div style={{
      width: "280px",
      border: "1px solid #ccc",
      borderRadius: "10px",
      padding: "15px",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
    }}>
      <img
        src={product.thumbnail}
        alt={product.title}
        style={{ width: "100%", height: "auto", borderRadius: "6px" }}
      />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p><strong>${product.price}</strong></p>
      <p>Rating: ⭐ {product.rating}</p>

      
      <p style={{ color: product.stock > 10 ? "green" : "red" }}>
        {product.stock > 10 ? "✅ In Stock" : "⚠️ Low Stock"}
      </p>

      
      <button onClick={() => onDelete(product.id)} style={{ marginTop: "10px" }}>
        Delete
      </button>
    </div>
  );
}

export default ProductCard;
