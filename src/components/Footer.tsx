
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-white py-12 border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-xl font-display font-bold text-portfolio-dark">
              Gopichand<span className="text-portfolio-blue">.dev</span>
            </a>
            <p className="mt-2 text-portfolio-slate max-w-md">
              Full Stack Java Developer specializing in building exceptional digital experiences that are fast, accessible, and visually appealing.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a 
                href="https://github.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-portfolio-slate hover:text-portfolio-blue transition-colors rounded-full hover:bg-blue-50"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com/in/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-portfolio-slate hover:text-portfolio-blue transition-colors rounded-full hover:bg-blue-50"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:gopichand@example.com" 
                className="p-2 text-portfolio-slate hover:text-portfolio-blue transition-colors rounded-full hover:bg-blue-50"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
            
            <button 
              onClick={scrollToTop}
              className="group p-2 bg-gray-100 rounded-full hover:bg-portfolio-blue transition-colors duration-300"
              aria-label="Back to top"
            >
              <ArrowUp className="h-5 w-5 text-portfolio-slate group-hover:text-white transition-colors duration-300" />
            </button>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-100 text-center">
          <p className="text-sm text-portfolio-slate">
            © {new Date().getFullYear()} Gopichand Mogaparthi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
