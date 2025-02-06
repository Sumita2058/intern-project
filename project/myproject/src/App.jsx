import "./App.css";
import {Navbar} from "./components/Navbar";

function App() {
  return(
    <div className="bg-white dark:bg-black dark:text-white text:black
    overflow-x-hidden">
        <div className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
          <Navbar />
        </div>
        </div>
  );
}
export default App;
