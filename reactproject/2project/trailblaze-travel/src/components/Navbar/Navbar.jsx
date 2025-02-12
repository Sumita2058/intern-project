import { useState } from "react";
import { Navlinks } from "../../constants/Navlinks"
import { HiMenu } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";

const Navbar = () =>{
    const [showMenu, setshowMenu] = useState(false);
  const toggleMenu = () => {
    setshowMenu(!showMenu);
  };
    return(
        <div className="grid grid-cols-6 gap-4 bg-blue-300 items-center justify-between">
        
            <div className="uppercase col-span-2">
            <h1 className="">trailblaze</h1>
            </div>
    
        <nav className="col-span-3  list-none flex flex-row gap-8">
            {Navlinks.map(({id, name, link})=>(
                <li key={id} className="text-lg">
                    <a href={link} className="text-sm">
                        {name}
                    </a>
                    </li>
            ))}
        </nav>
       <div className="flex flex-row">
       <button className="col-span-2">login</button>
       

       <div className="flex flex-row">
          <div className="flex items-center md:hidden">
            {showMenu ? (
              <RxCross2

                onClick={toggleMenu}
                className="cursor-pointer  z-50  transition-all"
                size={30}
              />
            ) : (
              <HiMenu
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            )}
          </div>
          </div>
        </div>

      </div>
    )
}
export default Navbar ;