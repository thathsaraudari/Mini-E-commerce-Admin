import { useState } from 'react';

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="product-container">
      <form className="product-form">
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

        <button type="submit" className='add-btn'><strong>Add Product</strong></button>       
      </form>
    </div>
  )
}

export default AddProduct
