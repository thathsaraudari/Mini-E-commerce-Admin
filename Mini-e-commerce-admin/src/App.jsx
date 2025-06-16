import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <>
      <div>
        <nav>
          <Navbar/>
          <br />
          <Sidebar/>

          <Footer/>
        </nav>
      </div>

    </>
  )
}

export default App
