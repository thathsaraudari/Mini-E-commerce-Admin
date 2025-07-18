import AddProduct from '../components/AddProduct'
import ProductList from '../components/ProductList'

function DashboardPage({ products, onDelete}) {
  return (
    <div>
      <AddProduct/>
      <h1>PRODUCTS LIST</h1>
      <ProductList products={products} onDelete={onDelete}/>
    </div>
  )
}

export default DashboardPage
