
import { useState, useEffect, useRef } from 'react';
import { Code, Server, Globe, Database } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const highlights = [
    {
      icon: <Code className="h-6 w-6 text-portfolio-blue" />,
      title: "Frontend Development",
      description: "Creating responsive, intuitive user interfaces with React, Angular, and modern JavaScript."
    },
    {
      icon: <Server className="h-6 w-6 text-portfolio-indigo" />,
      title: "Backend Architecture",
      description: "Building robust server-side applications with Java, Spring Boot, and microservices."
    },
    {
      icon: <Database className="h-6 w-6 text-portfolio-teal" />,
      title: "Database Management",
      description: "Designing efficient data structures using SQL and NoSQL databases."
    },
    {
      icon: <Globe className="h-6 w-6 text-portfolio-slate" />,
      title: "Full Stack Integration",
      description: "Connecting all layers of application architecture into seamless, end-to-end solutions."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white" ref={sectionRef}>
      <div className="section">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className={`transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-x-[-20px]'}`}>
              <span className="chip bg-indigo-100 text-portfolio-indigo">About Me</span>
              <h2 className="section-title mt-4">
                Transforming Ideas Into Digital Solutions
              </h2>
              <p className="text-portfolio-slate mb-6">
                I'm a passionate Full Stack Java Developer with expertise in building enterprise-grade applications and web solutions. With a strong foundation in Java and modern web technologies, I specialize in creating scalable, maintainable software that solves real-world problems.
              </p>
              <p className="text-portfolio-slate mb-6">
                My journey in software development began with a deep curiosity about how systems work under the hood. This curiosity evolved into a career focused on crafting clean, efficient code and designing intuitive user experiences.
              </p>
              <p className="text-portfolio-slate">
                When I'm not coding, I enjoy staying up-to-date with the latest tech trends, contributing to open-source projects, and mentoring aspiring developers.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className={`glass-card p-6 transition-all duration-700 delay-${index * 100} ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-[20px]'}`}
              >
                <div className="p-3 rounded-lg bg-blue-50 w-fit mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-portfolio-slate">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
