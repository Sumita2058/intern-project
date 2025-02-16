import PropTypes from "prop-types";
import { Navlinks } from "../../constants/Navlinks";
import { RxCross2 } from "react-icons/rx";

  const ResponsiveMenu = ({ showMenu, toggleMenu }) => {
    return (
      <div
        className={`${
          showMenu ? "top-0" : "-top-[100%]"
        } fixed left-0 w-full z-20 flex 
             flex-col justify-between bg-bgc/30 backdrop-blur-sm 
            text-white  md:hidden rounded-xl  transition-all duration-500 ease-in-out  `}
      >
        <nav className="w-full top-10  border-b-1 h-[250px] ">
            <ul className="flex flex-col bg-bgc md:block gap-4 space-y-4 py-8 text-center">
              {Navlinks.map(({ id, name, link }) => (
                <li key={id} className="hover:text-gray-900 duration-200">
                  <a href={link} className="inline-block text-sm font-600">
                    {name}
                  </a>
                </li>

              ))
              }
 
            </ul>
            <div className="flex justify-end -mt-60  px-10">
            <RxCross2
                onClick={toggleMenu}
                className="cursor-pointer  z-50 inset-0 transition-all "
                size={30}
              />
            </div>
           
          </nav>
  
      </div>
    );
  };
  
   ResponsiveMenu.propTypes = {
     showMenu: PropTypes.bool.isRequired,
   };
  
  
  export default ResponsiveMenu;
  