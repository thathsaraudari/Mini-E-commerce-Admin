import { useParams } from "react-router-dom";

function ProductDetailsPage({ products }) {

  const { productId } = useParams();
  const product = products.find(p => p.id === Number(productId));

  return (
    <div 
    style={{
      width: "880px",
      border: "1px solid #ccc",
      borderRadius: "10px",
      padding: "15px",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      color: "gray",
      alignContent: "center"}}>
        
      <img src={product.thumbnail} alt={product.thumbnail} />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p><strong>${product.price}</strong></p>
      <p>Rating: ⭐{product.rating}</p>
      <p style={{ color: product.stock > 10 ? "green" : "red" }}>
        {product.stock > 10 ? "✅ In Stock" : "⚠️ Low Stock"}
      </p>
    </div>
  )
}

export default ProductDetailsPage;
