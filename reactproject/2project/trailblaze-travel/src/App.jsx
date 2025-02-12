
import './App.css'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import ResponsiveMenu from './components/Navbar/ResponsiveMenu'

function App() {

  return (
   <div className="text-white">
    <Navbar/>
    <div className="mt-40 bg-gray-600 ">
      <ResponsiveMenu/>
      <Footer/>
    </div>
   </div>
  )
}

export default App
