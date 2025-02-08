
import './App.css';
import Destination from './components/Destination/Destination';
import Destinationpicture from './components/Destinationpicture/Destinationpicture';
import Featured from './components/Featured/Featured';
import { Footer, Hero, Information, Article } from './components/import';
import Sectionbg from './components/Sectionbg/Sectionbg';

function App() {
  return (
  <div className="relative bg-white text:black overflow-x-hidden">
   
    <div className=" w-full flex flex-col gap-10">
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
