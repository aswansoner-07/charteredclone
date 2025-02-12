import { FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-5 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Info Section */}
        <div>
          <h2 className="text-white font-semibold mb-3">Info</h2>
          <ul className="space-y-2">
            <li>Formats</li>
            <li>Compression</li>
            <li>Pricing</li>
            <li>FAQ</li>
            <li>Status</li>
            <li>Policy</li>
          </ul>
        </div>
        
        {/* Getting Started Section */}
        <div>
          <h2 className="text-white font-semibold mb-3">Getting Started</h2>
          <ul className="space-y-2">
            <li>Introduction</li>
            <li>Themes</li>
            <li>Documentation</li>
            <li>Usages</li>
            <li>Elements</li>
            <li>Global</li>
          </ul>
        </div>

        {/* Resources Section */}
        <div>
          <h2 className="text-white font-semibold mb-3">Resources</h2>
          <ul className="space-y-2">
            <li>API</li>
            <li>Form Validation</li>
            <li>Accessibility</li>
            <li>Marketplace</li>
            <li>Visibility</li>
            <li>Community</li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h2 className="text-white font-semibold mb-3">Newsletter</h2>
          <p className="text-sm mb-3">
            Subscribe to our newsletter for a weekly dose of news, updates, helpful tips, and exclusive offers.
          </p>
          <div className="flex items-center space-x-2">
            <input type="email" placeholder="Your email" className="p-2 rounded-md bg-gray-800 text-white outline-none flex-1" />
            <button className="bg-white text-gray-900 px-4 py-2 rounded-md font-semibold">SUBSCRIBE</button>
          </div>
          <div className="flex space-x-4 mt-4">
            <FaFacebookF className="cursor-pointer hover:text-white" />
            <FaGithub className="cursor-pointer hover:text-white" />
            <FaLinkedinIn className="cursor-pointer hover:text-white" />
            <FaTwitter className="cursor-pointer hover:text-white" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
