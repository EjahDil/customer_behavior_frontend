import React, { useState, useEffect } from 'react';
import { useNavigation, Outlet } from 'react-router-dom';
import PageLoader from './pageloader';

const NavigationWrapper: React.FC = () => {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (navigation.state === "loading") {
      setIsLoading(true);
    } else {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [navigation.state]);

  return (
    <>
      {isLoading && <PageLoader />}
      <Outlet />
    </>
  );
};

export default NavigationWrapper;