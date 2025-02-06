import { Navlinks } from "../../constants/navlink"
const Navbar = () => {
    return(
        <div className="relative w-full h-10 bg-blue-100 text-black">
            <div className="conatiner">
                <div className="text-2xl">
                    <span>travelx</span>
                </div>
                <nav className="block">
                    <ul className="flex items-center gap-3">

                    {Navlinks.map(({ id, name, link }) => (
                <li key={id} className="py-6">
                  <a
                    href={link}
                    className="inline-block text-lg font-semibold hover:gray-500"
                  >
                    {name}
                  </a>
                </li>
              ))}
                    </ul>
                </nav>
            </div>
        </div>
    );
}
export default Navbar;
