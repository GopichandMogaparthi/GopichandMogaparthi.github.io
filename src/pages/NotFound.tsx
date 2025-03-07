
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center px-4 glass-card p-12 max-w-md animate-fade-in">
        <h1 className="text-6xl font-bold mb-4 text-portfolio-dark">404</h1>
        <p className="text-xl text-portfolio-slate mb-8">Oops! The page you're looking for isn't available.</p>
        <a href="/" className="inline-flex items-center px-6 py-3 bg-portfolio-blue text-white rounded-lg hover:bg-blue-600 transition-all">
          <ArrowLeft className="mr-2 h-5 w-5" />
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
