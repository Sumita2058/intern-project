import PropTypes from "prop-types";
import { Navlinks } from "../../constants/Navlinks";

const ResponsiveMenu = ({ showMenu }) => {
    return (
      <div
        className={`${
          showMenu ? "left-0" : "-left-[100%]"
        } fixed bottom-0 top-0 z-20 flex
           h-screen w-[75%] flex-col justify-between bg-gray-400
            text-white  md:hidden rounded-xl shadow-ms`}
      >
        <nav className="w-full">
            <ul className="flex flex-col md:block gap-4 text-center">
              {Navlinks.map(({ id, name, link }) => (
                <li key={id} className="hover:text-gray-500 duration-200">
                  <a href={link} className="inline-block text-lg font-semibold">
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
  
      </div>
    );
  };
  
   ResponsiveMenu.propTypes = {
     showMenu: PropTypes.bool.isRequired,
   };
  
  
  export default ResponsiveMenu;
  