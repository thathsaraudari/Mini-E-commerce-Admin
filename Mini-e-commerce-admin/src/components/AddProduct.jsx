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
          />

        <label><strong>Description:</strong></label>
        <textarea
          type="text"
          name="descrition"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button type="submit">Add Product</button>       
      </form>
    </div>
  )
}

export default AddProduct
