import { useEffect, useState } from "react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
    useEffect(() => {
        setCurrentYear(new Date().getFullYear());
      }, []);
  return (
    <div className="relative container bg-gray-800 p-8 w-full rounded-lg lg:block hidden text-white">
      <div className="grid col-span-1 lg:grid-cols-12  gap-3">
        <div className="flex flex-col gap-2 text-left lg:col-span-6">
          <h1 className="font-bold text-lg">TravelX</h1>
          <p className="text-md ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            praesentium cum velit, fuga illo sapiente similique, commodi magni
            quia vero aspernatur obcaecati neque quidem error ratione, ipsa
            temporibus rem voluptatum.
          </p>
          <span className="font-bold text-lg">Get in Touch</span>
          <p>Example@gmail.com</p>
          <div className="bg-blue-200 h-[1px] w-40"></div>
          <div className="mt-4 flex  p-2">
          <div className="text-white flex flex-row gap-3 items-center">
            <FaLinkedin className="text-md" />
            <FaFacebook className="text-md" />
            <FaTwitter className="text-md" />
          </div>
          </div>
        </div>
        <div className="lg:col-span-2">
            <h1 className="font-bold text-lg">About Us</h1>
            <ul className="flex gap-2 flex-col">
                <li>about us</li>
                <li>our terms <span className="bg-blue-500 rounded-md p-1">we&apos;re Hiring</span></li>
                <li>mission and value</li>
                <li>partnerships</li>
            </ul>
        </div>
        <div className="lg:col-span-2">
            <h1 className="font-bold text-lg">Help</h1>
            <ul className="flex gap-2 flex-col">
                <li>FAQ</li>
                <li>book guide</li>
                <li>cancellation policy</li>
                <li>Site Map</li>
            </ul>
        </div>
        <div className="lg:col-span-2">
            <h1 className="font-bold text-lg">Resources</h1>
            <ul className="flex gap-2 flex-col">
                <li>Newsletter</li>
                <li>blog</li>
                <li>Gallery</li>
                <li>Offer</li>
            </ul>
        </div>
       
        </div>
        <hr className="w-full h-[1px] mx-auto my-4 bg-blue-500 border-0 rounded-sm md:my-10"/>
        <div className="flex flex-row justify-between m-3">
            <div>
            <p>&copy; <span> {currentYear}- TravelX, inc, all rights reserved</span>
            </p>
            </div>
            <div className="flex">
                <ul className="flex flex-row gap-4">
                    <li>terms & conditions</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
      </div>
      </div>

  );
};
export default Footer;
