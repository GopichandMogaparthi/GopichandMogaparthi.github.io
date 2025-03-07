
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, href: 'https://github.com/', label: 'GitHub' },
    { icon: <Linkedin className="h-5 w-5" />, href: 'https://linkedin.com/in/', label: 'LinkedIn' },
    { icon: <Mail className="h-5 w-5" />, href: 'mailto:gopichand@example.com', label: 'Email' }
  ];

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4',
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="container flex items-center justify-between">
        <a 
          href="#home" 
          className="text-xl font-display font-bold text-portfolio-dark"
        >
          Gopichand<span className="text-portfolio-blue">.dev</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="px-4 py-2 text-sm font-medium text-portfolio-slate hover:text-portfolio-blue transition-colors rounded-md"
            >
              {item.name}
            </a>
          ))}
          <div className="ml-4 flex items-center space-x-3">
            {socialLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="p-2 text-portfolio-slate hover:text-portfolio-blue transition-colors rounded-full hover:bg-blue-50"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-md text-portfolio-slate hover:text-portfolio-blue"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-white transition-transform duration-300 ease-in-out transform md:hidden',
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
        style={{ top: '60px' }}
      >
        <nav className="h-full flex flex-col p-8">
          <div className="space-y-2">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={toggleMenu}
                className="block px-4 py-3 text-base font-medium text-portfolio-dark hover:bg-blue-50 rounded-md transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="mt-auto pt-8 flex justify-center space-x-6">
            {socialLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="p-3 text-portfolio-slate hover:text-portfolio-blue transition-colors rounded-full hover:bg-blue-50"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
