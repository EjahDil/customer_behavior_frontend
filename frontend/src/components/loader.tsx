import { useEffect } from 'react';
import NProgress from 'nprogress';

function SuspenseLoader() {
  useEffect(() => {
    NProgress.start();

    return () => {
      NProgress.done();
    };
  }, []);

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-white"
    >
      {/* Tailwind CircularProgress */}
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-cbt-primary"></div>
    </div>
  );
}

export default SuspenseLoader;
