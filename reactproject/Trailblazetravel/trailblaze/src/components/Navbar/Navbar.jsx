import { useState } from "react";
import { Navlinks } from "../../constants/Navlinks";
import { HiMenu } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [showMenu, setshowMenu] = useState(false);
  const toggleMenu = () => {
    setshowMenu(!showMenu);
  };
  return (
    <div className=" p-8 text-white m-3 justify-between gap-8">
      <div className="grid grid-cols-9 gap-4">
        <div className="col-span-3">
          <h1 className="text-2xl font-semibold uppercase">traiblaze</h1>
        </div>

        <div className="col-span-3 flex items-center">
          <nav className="hidden md:block bg-bgc rounded-full px-8 py-2 shadow-8xl justify-center items-center">
            <ul className="flex items-center font-semibold text-2xl top-0 gap-16 ">
              {Navlinks.map(({ id, name, link }) => (
                <li key={id} className="text-gray-500 hover:text-white">
                  <a href={link} className="">
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="col-span-3 flex flex-row items-center text-black justify-end ">
          <button className="rounded-full bg-white py-1 px-6 text-[1.2rem] ">
            login
          </button>

          <div className="text-white text-lg lg:hidden">
            {showMenu ? (
              <RxCross2 onClick={toggleMenu} className="w-[30px] h-[30px] text-transparent"  />
            ) : (
              <HiMenu
                onClick={toggleMenu}
                className="cursor-pointer "
                size={30}
              />
            )}
          </div>
        </div>
      </div>
      <ResponsiveMenu showMenu={showMenu} toggleMenu={toggleMenu} />
    </div>
  );
};
export default Navbar;
