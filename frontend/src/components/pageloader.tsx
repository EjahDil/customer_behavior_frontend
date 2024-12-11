// components/PageLoader.tsx
import React from 'react';

const PageLoader: React.FC = () => {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-white"
    >
      {/* Tailwind CircularProgress */}
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-cbt-primary"></div>
    </div>
  );
};

export default PageLoader;