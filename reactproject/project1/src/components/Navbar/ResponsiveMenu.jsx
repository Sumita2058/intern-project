import { Navlinks } from "../../constants/navlink";
import PropTypes from "prop-types";
const ResponsiveMenu = ({ showMenu }) => {
  return (
    <div   className={`${
      showMenu ? "left-0" : "-left-[100%]"
    } fixed bottom-0 z-20 flex
       h-screen w-[100%] flex-col justify-between bg-black 
       px-8 pb-6 pt-16 text-white transition-all duration-200 md:hidden`}>
      <div className="mt-40  lg:hidden">
        <nav className=" justify-center items-center">
          <ul className="flex flex-col gap-2 -translate-1">
            {Navlinks.map(({ id, name, link }) => (
              <li key={id} className=" hover:text-gray-100 duration-100">
                <a href={link} className="inline-block text-md font-semibold">
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};
ResponsiveMenu.propTypes = {
  showMenu: PropTypes.bool.isRequired,
};
export default ResponsiveMenu;
