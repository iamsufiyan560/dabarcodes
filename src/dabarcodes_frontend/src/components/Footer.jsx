import { FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
function Footer() {
  return (
    <footer className="bg-[#DBF4FD] w-full py-10 px-10">
      <div className="w-full m-4 lg:grid  grid-cols-12 gap-20">
        {/*  */}
        <div className="col-span-6  ">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Pricing Promotion
            </h3>

            <p className="text-gray-600 mb-4">
              At daBarcodes, we are committed to providing you with the best
              deals and promotions available. We guarantee to honor the lowest
              price posted on the sales floor for in-store purchases, ensuring
              you always get the best value. Please note, internet advertised
              prices may differ from in-store prices and are therefore excluded
              from this promise.
            </p>
          </div>
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Our Socials
            </h3>
            <div className="flex  space-x-4">
              <a href="#" className="text-blue-600 hover:text-blue-800">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-800">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-800">
                <IoLogoInstagram size={24} />
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-800">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/*  */}
        <div className="col-span-6 pt-8 lg:pt-0  flex gap-6 xl:gap-20">
          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="lg:text-2xl    font-bold text-gray-800 mb-4">
              Quick Links
            </h3>
            <ul className="list-none space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  How it works
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Contact us
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="col-span-1 ">
            <h3 className="lg:text-2xl  font-bold text-gray-800 mb-4 ">
              Support
            </h3>
            <ul className="list-none space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Customer Support
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="col-span-1">
            <h3 className="lg:text-2xl  font-bold text-gray-800 mb-4">Legal</h3>
            <ul className="list-none space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="my-6 border-gray-300" />

      <div className="text-center">
        <h3 className="text-2xl font-extrabold text-gray-800 mb-4 font-mono">
          Subscribe to Newsletter
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          Stay updated with the latest promotions and deals by subscribing to
          our newsletter. Be the first to know about new offers and exclusive
          discounts!
        </p>
        <span className="text-[#0D90C1] font-bold py-2 px-4 text-lg rounded">
          Subscribe Now
        </span>
      </div>
    </footer>
  );
}

export default Footer;
