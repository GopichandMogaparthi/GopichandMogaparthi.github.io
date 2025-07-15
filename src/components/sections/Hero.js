
import { ArrowDown } from "lucide-react";

import profileImage from "/Users/gopichandmogaparthi/Desktop/gopichand-portfolio/gopichandmogaparthi-portfolio/src/Chowdary.jpeg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white -z-10" />
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 -z-10 w-[600px] h-[600px] rounded-full bg-blue-100 blur-3xl opacity-70" />
      
      <div className="container px-6 py-12 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="stagger-animation">
            <span className="inline-block font-bold text-primary mb-6 text-sm ">
              Java Full Stack Developer
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Building robust 
              <span className="text-primary"> digital experiences</span> for the enterprise
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-xl mb-8">
              I develop scalable, high-performance applications using Java, Spring, and modern frontend technologies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-md font-medium transition-colors"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground hover:bg-secondary/80 px-6 py-3 rounded-md font-medium transition-colors"
              >
                Contact Me
              </a>
            </div>
          </div>
          
          <div className="hidden lg:flex justify-end">
            <div className="relative w-full max-w-md">
              {/* Hero image - a clean professional portrait or abstract representation */}
              <div className="glass-card animate-fade-in rounded-2xl w-full aspect-square overflow-hidden border-8 border-white">
                {/* Placeholder for developer profile image */}
               {/* <div className="h-full w-full bg-gradient-to-br from-primary/10 to-primary/30 flex items-center justify-center">
                  <span className="text-6xl font-bold text-primary/30">JD</span>
                </div>*/}
                <div className="glass-card animate-fade-in rounded-2xl w-full aspect-square overflow-hidden border-8 border-white">
  <img
    src={profileImage}
    alt="Your Name"
    className="object-cover w-full h-full"
  />
</div>

              </div>
              
              <div className="absolute -bottom-6 -left-6 glass-card animate-scale-in p-4 rounded-lg shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <span className="text-sm font-medium">Available for hire</span>
                </div>
              </div>
              
              <div className="absolute -top-6 -right-6 glass-card animate-scale-in p-4 rounded-lg shadow-lg">
                <div className="text-sm font-medium">
                  <span className="block text-muted-foreground">Experience</span>
                  <span className="text-lg font-bold">3+ Years</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <a
        href="#about"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center text-muted-foreground hover:text-primary transition-colors"
      >
        <span className="text-sm mb-2">Scroll Down</span>
        <ArrowDown className="animate-pulse-slow" size={20} />
      </a>
    </section>
  );
};

export default Hero;