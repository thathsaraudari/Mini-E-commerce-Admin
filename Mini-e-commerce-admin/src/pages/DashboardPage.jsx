import AddProduct from '../components/AddProduct'
import ProductList from '../components/ProductList'

function DashboardPage({ products, onDelete, onAddProduct}) {
  return (
    <div>
      <AddProduct onAddProduct={onAddProduct}/>
      <h1>PRODUCTS LIST</h1>
      <ProductList products={products} onDelete={onDelete}/>
    </div>
  )
}

export default DashboardPage
