import { CiInstagram } from "react-icons/ci";
import { FaFacebook, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="text-blue p-20">
      <div className="">
        <div className="grid grid-cols-6">
          <div className="col-span-1">
           
              <h1 className="font-bold text-lg mb-4">About</h1>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-500 hover:text-blue-800">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 hover:text-blue-800">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 hover:text-blue-800">
                    Careers
                  </a>
                </li>
                <li> 
                  <a href="#" className="text-gray-500 hover:text-blue-800">
                    Jobs
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 hover:text-blue-800">
                    In Press
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 hover:text-blue-800">
                    Gallery
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-1">
            <h1 className="font-bold text-lg mb-4">Support</h1>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-500 hover:text-blue-800">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-blue-800">
                  Online Chat
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-blue-800">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-blue-800">
                  Telegram
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-blue-800">
                  Ticketing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-blue-800">
                  Call Center
                </a>
              </li>
            </ul>

            </div>
            <div className="col-span-1">
            <h1 className="font-bold text-lg mb-4">FAQ</h1>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-500 hover:text-blue-800">
                  Account
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-blue-800">
                  Booking
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-blue-800">
                  Payment
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-blue-800">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-blue-800">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-blue-800">
                  Terms & Condition
                </a>
              </li>
            </ul>

            </div>
            <div className="col-span-3">
            <h1 className="font-bold text-lg mb-4">Newsletter</h1>
            <p className="mb-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas
              delectus expedita reiciendis illo soluta voluptatum.
            </p>
            <div className="flex   bg-blue w-full justify-between rounded-full p-2 border-1 border-solid">
              <input
                className=" px-3 py-2 text-gray-600 bg-transparent focus:outline-none placeholder-gray-400"
                type="text"
                placeholder="enter your email"
              />
              <button className="px-5 py-2 text-blue bg-gray-700 rounded-full text-sm">
                Search
              </button>
            </div>
            <div className="flex flex-row gap-4 mt-4">
              <a href="#" className="hover:text-blue-800">
                <CiInstagram size={24} />
              </a>
              <a href="#" className="hover:text-blue-800">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="hover:text-blue-800">
                <FaYoutube size={24} />
              </a>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
