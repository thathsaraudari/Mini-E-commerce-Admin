import AddProduct from '../components/AddProduct'
import ProductList from '../components/ProductList'

<<<<<<< HEAD

function DashboardPage({ products, onDelete, onAddProduct}) {
  return (
    <div>
      <div className='dashboard-forms'>
        <AddProduct onAddProduct={onAddProduct}/>
      </div>      
      <h1 style={{
        marginTop: 400
      }}>PRODUCTS LIST</h1>
=======
function DashboardPage({ products, onDelete, onAddProduct}) {
  return (
    <div>
      <AddProduct onAddProduct={onAddProduct}/>
      <h1>PRODUCTS LIST</h1>
>>>>>>> 9d93cefdf92893214b9232f3c3da3bc1ec939090
      <ProductList products={products} onDelete={onDelete}/>
    </div>
  )
}

export default DashboardPage;
