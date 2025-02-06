
import './App.css';
import { Footer, Navbar, Hero } from './components/import';

function App() {
  return (
  <div className="bg-white  text:black overflow-x-hidden">
    <div className="fixed  left-0 right-0 bg-white shadow-lg z-1 ">
      { <Navbar/> }
    </div>
    <div className=" w-full">
      <Hero/>
      <Footer/>
    </div> 
  </div>
  )
}

export default App;
