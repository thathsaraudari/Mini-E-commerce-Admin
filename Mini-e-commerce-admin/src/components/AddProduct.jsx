import { useState } from 'react';

const AddProduct = ({onAddProduct}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [rating, setRating] = useState(0);
  const [stock, setStock] = useState(0);
  const [thumbnail, setThumbnail] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim() === "" || description.trim() === "") return;

    const newProduct = {
      id: Date.now(),
      title,
      description,
      price,
      stock,
      thumbnail: URL.createObjectURL(thumbnail)
    };

    onAddProduct(newProduct);

    setTitle("");
    setDescription("");
    setPrice(0);
    setRating(0);
    setStock(0);
    setThumbnail(null);
  };

  return (
    <div className="product-container">
      <form className="product-form" onSubmit={handleSubmit}>
        <label><strong>Add new product</strong>:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{
            backgroundColor: "white",
            border: "2px solid #ccc",
            padding: "4px",
            fontSize: "10px",
            color: "black"
          }}
          />

        <label><strong>Description:</strong></label>
        <textarea
          type="text"
          name="descrition"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{
            backgroundColor: "white",
            border: "2px solid #ccc",
            padding: "4px",
            fontSize: "10px",
            color: "black"
          }}
        />

        <label><strong>Price:</strong></label>
        <input
          type="number"
          step="0.01"
          name="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          style={{
            backgroundColor: "white",
            border: "2px solid #ccc",
            padding: "4px",
            fontSize: "10px",
            color: "black",
          }}
        />

        <label><strong>Rating:</strong></label>
        <input
          type="number"
          step="0.01"
          name="rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          style={{
            backgroundColor: "white",
            border: "2px solid #ccc",
            padding: "4px",
            fontSize: "10px",
            color: "black",
          }}
        />

        <label><strong>Stock:</strong></label>
        <input
          type="number"
          step="1"
          name="stock"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          style={{
            backgroundColor: "white",
            border: "2px solid #ccc",
            padding: "4px",
            fontSize: "10px",
            color: "black",
          }}
        />

        <label><strong>Product Image:</strong></label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setThumbnail(e.target.files[0])}
          style={{
            backgroundColor: "white",
            border: "2px solid #ccc",
            padding: "4px",
            fontSize: "10px",
            color: "black"
          }}
        />

        <button type="submit" className='add-btn'><strong>Add Product</strong></button>       
      </form>
    </div>
  )
}

export default AddProduct
