import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-purple-100 flex flex-col justify-center items-center px-4">
      <h1 className="text-4xl md:text-6xl font-bold text-purple-800 mb-6 text-center">Welcome to Local Politics</h1>
      <p className="text-xl md:text-2xl text-purple-600 mb-8 text-center max-w-2xl">
        Engage with your community, stay informed about local issues, and make your voice heard.
      </p>
      <div className="space-x-4">
        <Link
          to="/login"
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-full text-lg transition duration-300"
        >
          Log In
        </Link>
        <Link
          to="/signup"
          className="bg-white hover:bg-purple-200 text-purple-600 font-bold py-2 px-6 rounded-full text-lg transition duration-300 border-2 border-purple-600"
        >
          Sign Up
        </Link>
      </div>
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold text-purple-800 mb-4">Why Join Local Politics?</h2>
        <ul className="text-purple-700 space-y-2">
          <li>✓ Stay informed about local issues</li>
          <li>✓ Connect with your representatives</li>
          <li>✓ Participate in community discussions</li>
          <li>✓ Track upcoming elections and propositions</li>
        </ul>
      </div>
    </div>
  );
};

export default LandingPage;