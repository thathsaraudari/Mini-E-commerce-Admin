import { Link } from "react-router-dom";

function ProductCard({ product, onDelete }) {
  return (
    <div style={{
      width: "327px",
      border: "1px solid #ccc",
      borderRadius: "15px",
      padding: "15px",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      color: "gray"
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

      
      <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "10p"}} >
        <button onClick={() => onDelete(product.id)} 
                style={{ 
                  color: "white", 
                  backgroundColor: "grey",
                  padding: "6px 12px",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer" 
                }}
      >
          Delete
        </button>

        <Link to={`/product/${product.id}`}
              style={{
                color: "#007bff",
                textDecoration: "underline",
                fontWeight: "bold"
              }}
        >
          Details    
        </Link>
         <Link
          to={`/edit/${product.id}`}
          style={{
            color: "white",
            backgroundColor: "#164325ff",
            padding: "6px 12px",
            borderRadius: "4px",
            textDecoration: "none",
            fontWeight: "bold"
          }}
        >
          Edit
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
