import React from 'react';
import { useLocation } from 'react-router-dom';

const Home: React.FC = () => {
  const location = useLocation();
  return (
    <>
      <h3>
        Page not found: <code>{location.state || location.pathname}</code>
      </h3>
    </>
  );
};

export default Home;
