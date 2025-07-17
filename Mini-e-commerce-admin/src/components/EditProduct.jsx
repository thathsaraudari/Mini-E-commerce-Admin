import { useState, useEffect } from "react";

function UpdateProduct () {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");

  return (
    <div>
        <form>
            <h2>Update Product</h2>

            <label>Title:</label>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <label>Description:</label>
            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />

            <label>Price:</label>
            <input
                type="number"
                step="0.01"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />

            <button type="submit">Update</button>
        </form>
    </div>
  )
}

export default UpdateProduct;
