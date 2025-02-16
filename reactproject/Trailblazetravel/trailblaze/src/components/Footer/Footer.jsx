import { useEffect, useState } from "react";
import { CiInstagram } from "react-icons/ci";
import { FaFacebook, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  useEffect(() => {
      setCurrentYear(new Date().getFullYear());
    }, []);

  const footerData = [
    {
      title: "About",
      links: [
        "About Us", "Blog", "Careers", "Jobs", "In Press", "Gallery"
      ]
    },
    {
      title: "Support",
      links: [
        "Contact Us", "Online Chat", "WhatsApp", "Telegram", "Ticketing", "Call Center"
      ]
    },
    {
      title: "FAQ",
      links: [
        "Account", "Booking", "Payment", "Returns", "Privacy Policy", "Terms & Condition"
      ]
    }
  ];

  return (
    <div className="text-blue p-16 bg-gray-800">
      <div className="">
        <div className="grid md:grid-cols-6 grid-cols-1">

          {footerData.map((section, index) => (
            <div key={index} className="md:col-span-1 col-span-3">
              <h1 className="font-bold text-lg mb-4">{section.title}</h1>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="text-gray-500 hover:text-white">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="col-span-3">
            <h1 className="font-bold text-lg mb-4">Newsletter</h1>
            <p className="mb-4 text-gray-500 hover:text-white">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas
              delectus expedita reiciendis illo soluta voluptatum.
            </p>
            <div className="flex bg-blue w-full justify-between rounded-full p-1 border-1 border-solid">
              <input
                className="px-3 py-2 text-gray-600 bg-transparent focus:outline-none placeholder-gray-400"
                type="text"
                placeholder="enter your email"
              />
              <button className="px-5 py-2 text-blue bg-gray-700 rounded-full text-sm">
                Search
              </button>
            </div>
            <div className="flex flex-row gap-4 text-white mt-4 justify-end ">
              <a href="#" className="rounded-full border-solid border-1 p-1 bg-gray-400 hover:bg-black transition ease-in">
                <CiInstagram size={24} />
              </a>
              <a href="#" className="rounded-full border-solid border-1 p-1 bg-gray-400 hover:bg-black transition ease-in">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="rounded-full border-solid border-1 p-1 bg-gray-400 hover:bg-black transition ease-in">
                <FaYoutube size={24} />
              </a>
            </div>
          </div>
        </div>
       
            <div className="mt-20 text-center font-semibold text-sm text-gray-400">
            <p>&copy; <span> {currentYear}- codebrowser, All rights reserved</span>
            </p>
            </div>
            
      </div>
      </div>
    
  );
};

export default Footer;