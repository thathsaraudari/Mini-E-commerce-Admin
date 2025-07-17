import AddProduct from '../components/AddProduct'
import ProductList from '../components/ProductList'

function DashboardPage({ products, handleDelete}) {
  return (
    <div>
      <AddProduct/>
      <h1>PRODUCTS LIST</h1>
      <ProductList products={products} onDelete={handleDelete}/>
    </div>
  )
}

export default DashboardPage
