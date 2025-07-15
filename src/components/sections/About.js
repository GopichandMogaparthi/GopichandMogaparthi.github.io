import SectionTitle from "../ui/SectionTitle";

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="container mx-auto">
        <SectionTitle
          subtitle="About Me"
          title="Passionate Java Developer with AI Solution Architect"
          description="Dedicated to creating efficient, scalable, and maintainable software solutions for enterprise needs."
          align="center"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16 items-center">
          <div className="relative">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
              {/* Placeholder for about image */}
              <div className="aspect-[4/3] bg-gradient-to-br from-primary/5 to-primary/20 flex items-center justify-center">
                <span className="text-6xl font-bold text-primary/20">About</span>
              </div>
            </div>
            <div className="absolute inset-0 bg-primary/10 rounded-lg transform rotate-3 -z-10" />
          </div>
          
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="font-display text-2xl font-semibold">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed">
                With over 3 years of experience in Java development, I've built and maintained 
                various enterprise applications that serve thousands of users daily. My technical 
                journey began with a Computer Science degree and has evolved through continuous 
                learning and adaptation to emerging technologies.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-display text-2xl font-semibold">My Approach</h3>
              <p className="text-muted-foreground leading-relaxed">
                I believe in writing clean, maintainable code that follows best practices and 
                design patterns. My development philosophy centers around creating resilient 
                systems that can scale and adapt to changing business requirements.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div>
                <h4 className="font-medium text-lg mb-2">Education</h4>
                <p className="text-muted-foreground">M.S. in Computer Science with Artificial Intelligence<br />Webster University</p>
                <p className="text-muted-foreground">B.Tech in Computer Science and Engineering with Artificial Intelligence<br />K L University</p>
              </div>
              
              <div>
                <h4 className="font-medium text-lg mb-2">Location</h4>
                <p className="text-muted-foreground">United States<br />Available for remote work</p>
              </div>
            </div>
            
            <div className="pt-6">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-md font-medium transition-colors"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;