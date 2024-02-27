// /components/Common/Header.jsx
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-500 p-4 text-white">
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-white text-lg font-bold">Your App Name</Link>

          <div className="space-x-4">
            <Link to="/" className="text-white">Home</Link>
            <Link to="/about" className="text-white">About</Link>
            <Link to="/contact" className="text-white">Contact</Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
