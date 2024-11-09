// components/footer/Footer.jsx
import React from 'react';
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import brandLogo from '../../assets/brand-logo.png'; // Import the logo

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-6">
        {/* Logo Section */}
        <div className="flex justify-center mb-8">
          <img src={brandLogo} alt="Brand Logo" className="h-12" />
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
          <div>
            <h4 className="font-bold text-white mb-2">Company</h4>
            <ul>
              <li><a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors duration-300">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors duration-300">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors duration-300">Press</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors duration-300">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-2">Support</h4>
            <ul>
              <li><a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors duration-300">Contact Support</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors duration-300">FAQ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors duration-300">Help Center</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-2">Products</h4>
            <ul>
              <li><a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors duration-300">Devices</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors duration-300">Visualize</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors duration-300">Analyze</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-2">Follow Us</h4>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors duration-300">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors duration-300">
                <FaFacebookF size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors duration-300">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors duration-300">
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="flex justify-center mb-8">
          <div className="text-center">
            <h4 className="text-white font-bold mb-4">Stay Connected</h4>
            <p className="text-gray-300 mb-4">Subscribe to our newsletter for the latest updates and news.</p>
            <div className="flex justify-center">
              <input
                type="email"
                placeholder="Your Email Address"
                className="p-2 rounded-l-lg text-gray-800 focus:outline-none"
              />
              <button className="bg-yellow-500 text-white p-2 rounded-r-lg hover:bg-yellow-600 focus:outline-none">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center text-sm text-gray-500 mb-4">
          <p>Contact Us: support@gammasense.com | +1 (913) 222-6315</p>
        </div>

        {/* Copyright Section */}
        <div className="text-center text-sm text-gray-500">
          <p>© 2024 Gamma Sense. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
