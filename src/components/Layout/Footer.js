
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary py-12 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <a href="https://github.com/GopichandMogaparthi" className="font-display text-xl font-bold tracking-tight">
              Gopichand<span className="text-primary">Dev</span>
            </a>
            <p className="mt-4 text-muted-foreground max-w-sm">
              Java Full Stack Developer focused on building enterprise-grade applications with
              modern technologies and best practices.
            </p>
            <div className="flex items-center space-x-4 mt-6">
              <a
                href="https://github.com/GopichandMogaparthi"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub Profile"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/gopichand-mogaparthi-528117173/"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:gopichandmogaparthi@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-sm tracking-wider uppercase mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm tracking-wider uppercase mb-4">
              Contact
            </h3>
            <p className="text-muted-foreground mb-2">
              United States
            </p>
            <p className="text-muted-foreground mb-2">
              gopichandmogaparthi@gmail.com
            </p>
            <p className="text-muted-foreground">
              +1 (510) 364-2791
            </p>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Gopichand Mogaparthi Software Development Engineer. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-2 md:mt-0">
            Designed & Built with precision.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;