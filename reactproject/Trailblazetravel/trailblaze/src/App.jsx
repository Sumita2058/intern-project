
import './App.css'
import Blog from './components/Blog/Blog'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Howitwork from './components/Howitwork/Howitwork'
import Locationpicture from './components/Locationpicture/Locationpicture'
import Package from './components/Package/Package'
import Tourism from './components/Tourism/Tourism'
import Location from './components/location/location'

function App() {
  
  return (
   
<div className="max-w-1200 relative bg-gray-100 text:black overflow-x-hidden">

    <div className="mt-0 ">
      
      <Hero/>
      <Tourism/>
      <Location/>
      <Howitwork/>
      <Package/>
      <Locationpicture/>
      <Blog/>
      <Footer/>
      </div>
      </div>
  )
}

export default App
