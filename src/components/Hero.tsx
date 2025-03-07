
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-slate-50 z-[-1]"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-[10%] w-64 h-64 bg-portfolio-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-[10%] w-72 h-72 bg-portfolio-teal/5 rounded-full blur-3xl"></div>
      
      <div className="section flex flex-col items-center text-center">
        <div className="opacity-0 animate-fade-in delay-0">
          <span className="chip bg-blue-100 text-portfolio-blue mb-6">Java Full Stack Developer</span>
        </div>
        
        <div className="relative mb-6">
          {/* Background image behind name */}
          <div className="absolute inset-0 -z-10 opacity-10 blur-sm">
            <img 
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6" 
              alt="Code background" 
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold opacity-0 animate-fade-in delay-100 px-4 py-2">
            Gopichand Mogaparthi
          </h1>
        </div>
        
        <p className="text-xl text-portfolio-slate max-w-2xl mb-10 opacity-0 animate-fade-in delay-200">
          I build robust, scalable and elegant solutions using Java and modern web technologies. 
          Transforming complex challenges into seamless user experiences.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in delay-300">
          <a 
            href="#projects" 
            className="px-8 py-3 bg-portfolio-blue text-white rounded-lg shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 hover:translate-y-[-2px] transition-all"
          >
            View My Work
          </a>
          <a 
            href="#contact" 
            className="px-8 py-3 border border-portfolio-slate/20 rounded-lg hover:bg-white/50 hover:border-portfolio-blue/30 transition-all"
          >
            Contact Me
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in delay-500">
        <a
          href="#about"
          className="flex flex-col items-center text-portfolio-slate hover:text-portfolio-blue transition-colors"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <ArrowDown className="h-5 w-5 animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
