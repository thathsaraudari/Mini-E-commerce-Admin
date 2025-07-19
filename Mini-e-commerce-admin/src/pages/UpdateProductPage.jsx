import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function UpdateProduct ( {products, onUpdateProduct}) {

    const { productId } = useParams();
    const navigate = useNavigate();

    const product = products.find(p => p.id.toString() === productId);

    const [title, setTitle] = useState(product?.title || "");
    const [description, setDescription] = useState(product?.description || "");
    const [price, setPrice] = useState(product?.price || "");
    const [rating, setRating] = useState(product?.rating || "");
    const [stock, setStock] = useState(product?.stock || "");
    const [thumbnail, setThumbnail] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        const updatedProduct = {
        ...product,
        title,
        description,
        price: parseFloat(price),
        rating: parseFloat(rating),
        stock: parseInt(stock),
        thumbnail: thumbnail
            ? URL.createObjectURL(thumbnail)
            : product.thumbnail,
        };

        onUpdateProduct(updatedProduct);
        navigate("/");
    };

    if (!product) return <p>Product not found</p>;


    const inputStyle = {
        backgroundColor: "white",
        border: "2px solid #ccc",
        padding: "6px",
        fontSize: "12px",
        color: "black",
        width: "100%",
        boxSizing: "border-box"
    };
    
    return (
        <div>
            <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "0 auto" }}>
            <h2>Update Product</h2>

            <div style={{ marginBottom: "10px" }}>
                <label><strong>Title:</strong></label>
                <input
                type="text"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                style={inputStyle}
                />
            </div>

            <div style={{ marginBottom: "10px" }}>
                <label><strong>Description:</strong></label>
                <textarea
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                style={inputStyle}
                />
            </div>

            <div style={{ marginBottom: "10px" }}>
                <label><strong>Price:</strong></label>
                <input
                type="number"
                step="0.01"
                name="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                style={inputStyle}
                />
            </div>

            <div style={{ marginBottom: "10px" }}>
                <label><strong>Rating:</strong></label>
                <input
                type="number"
                step="0.01"
                name="rating"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                style={inputStyle}
                />
            </div>

            <div style={{ marginBottom: "10px" }}>
                <label><strong>Stock:</strong></label>
                <input
                type="number"
                step="1"
                name="stock"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
                style={inputStyle}
                />
            </div>

            <div style={{ marginBottom: "10px" }}>
                <label><strong>Product Image:</strong></label>
                <input
                type="file"
                accept="image/*"
                onChange={(e) => setThumbnail(e.target.files[0])}
                style={inputStyle}
                />
            </div>

            <button type="submit">Update</button>
            </form>
        </div>
    );

}

export default UpdateProduct;