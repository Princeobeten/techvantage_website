import Link from 'next/link';
import { FaFacebook, FaInstagram } from 'react-icons/fa6';
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between gap-10">

          <div className="flex flex-col gap-4 text-center lg:text-left">
            <h2 className="text-xl font-bold">Contact Us</h2>
            <p className="text-gray-400">
              <b>Email:</b> <a href="mailto:info@techvantage.com" className="text-gray-400 hover:text-white">info@techvantage.com</a>
            </p>
            <p className="text-gray-400">
              <b>Phone:</b> <a href="tel:+1234567890" className="text-gray-400 hover:text-white">+123 456 7890</a>
            </p>
            <p className="text-gray-400">
              <b>Address:</b> UNICROSS ENT Building, Calabar Nigeria
            </p>
          </div>

          <div className="flex flex-col gap-4 text-center lg:text-left">
            <h2 className="text-xl font-bold">Quick Links</h2>
            <Link href="/" className="text-gray-400 hover:text-white">
              Home
            </Link>
            <Link href="#about-us" className="text-gray-400 hover:text-white">
              About Us
            </Link>
            <Link href="#events" className="text-gray-400 hover:text-white">
              Events
            </Link>
            <Link href="#bootcamp" className="text-gray-400 hover:text-white">
              Bootcamp
            </Link>
            <Link href="#community" className="text-gray-400 hover:text-white">
              Community
            </Link>
          </div>

          <div className="flex flex-col gap-4 text-center lg:text-right">
            <h2 className="text-xl font-bold">Follow Us</h2>
            <div className="flex gap-4 justify-center lg:justify-end">
              <a href="https://www.facebook.com/share/57hm4zB85JuSA8bP/?mibextid=qi2Omg" target="_blank" rel="noopener noreferrer">
                <FaFacebook width={32} height={32} className="bg-blue-600"/>
              </a>
              <a href="https://x.com/TechVantageHQ?t=rfeidCWhgyVgSEE5lOg9tQ&s=08" target="_blank" rel="noopener noreferrer">
                <FaXTwitter  width={32} height={32} className="bg-blue-600"/>
              </a>
              <a href="https://www.instagram.com/techvantage_ng/" target="_blank" rel="noopener noreferrer">
                <FaInstagram  width={32} height={32} className="bg-blue-600"/>
              </a>
            </div>
            <Link href="#" className="text-white text-center p-[6px] bg-blue-600 rounded-md">
              Contact
            </Link>
          </div>
        </div>
        <div className="mt-10 text-center text-gray-400">
          &copy; 2024 TechVantage. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
