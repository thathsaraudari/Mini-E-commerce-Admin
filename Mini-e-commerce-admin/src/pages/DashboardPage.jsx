import AddProduct from '../components/AddProduct'
import ProductList from '../components/ProductList'


function DashboardPage({ products, onDelete, onAddProduct}) {
  return (
    <div>
      <div className='dashboard-forms'>
        <AddProduct onAddProduct={onAddProduct}/>
      </div>      
      <h1 style={{
        marginTop: 400
      }}>PRODUCTS LIST</h1>
      <ProductList products={products} onDelete={onDelete}/>
    </div>
  )
}

export default DashboardPage;
