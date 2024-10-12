import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Vote, Search, Bell, LogOut } from 'lucide-react';
import { AuthContext } from '../contexts/AuthContext';

const Header: React.FC = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    // Implement search functionality here
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <Link to={user ? "/home" : "/"} className="flex items-center">
            <Vote className="h-8 w-8 mr-2 text-purple-600" />
            <span className="font-bold text-xl text-purple-800">Local Politics</span>
          </Link>
        </div>
        {user && (
          <form onSubmit={handleSearch} className="flex-1 max-w-sm mx-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search issues, candidates..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
          </form>
        )}
        <nav className="flex items-center gap-4">
          {user ? (
            <>
              <Bell className="h-6 w-6 text-purple-600 cursor-pointer hover:text-purple-800" />
              <Link to="/profile" className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                <span className="text-sm font-medium text-purple-800">
                  {user.username ? user.username[0].toUpperCase() : 'U'}
                </span>
              </Link>
              <button onClick={handleLogout} className="text-purple-600 hover:text-purple-800">
                <LogOut className="h-6 w-6" />
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-purple-600 hover:text-purple-800">Log In</Link>
              <Link to="/signup" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
                Sign Up
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;