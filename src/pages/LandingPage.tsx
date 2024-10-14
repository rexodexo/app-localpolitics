import React, { useEffect } from 'react';

const LandingPage: React.FC = () => {
  useEffect(() => {
    window.location.href = 'https://localpolitics.netlify.app/';
  }, []);

  return null;
};

export default LandingPage;