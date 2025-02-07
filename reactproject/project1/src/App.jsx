
import './App.css';
import Destination from './components/Destination/Destination';
import Destinationpicture from './components/Destinationpicture/Destinationpicture';
import Featured from './components/Featured/Featured';
import { Footer, Navbar, Hero, Information, Article } from './components/import';
import Sectionbg from './components/Sectionbg/Sectionbg';

function App() {
  return (
  <div className="bg-white text:black overflow-x-hidden">
    <div className="fixed  left-0 right-0 bg-white  z-1 ">
      { <Navbar/> }
    </div>
    <div className=" w-full">
      <Hero/>
      <Information/>
       <Destination/>
       <Destinationpicture/>
       <Featured/>
       <Sectionbg/>
       <Article/>
      <Footer/>
    </div> 
  </div>
  )
}

export default App;
