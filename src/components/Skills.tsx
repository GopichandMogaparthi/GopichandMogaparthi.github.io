
import { useState, useEffect, useRef } from 'react';

const Skills = () => {
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

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Java", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "HTML/CSS", level: 90 },
        { name: "SQL", level: 88 },
      ]
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "Spring Boot", level: 92 },
        { name: "React.js", level: 88 },
        { name: "Angular", level: 82 },
        { name: "Hibernate", level: 90 },
        { name: "JUnit", level: 85 },
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git/GitHub", level: 92 },
        { name: "Docker", level: 85 },
        { name: "Jenkins", level: 80 },
        { name: "AWS", level: 78 },
        { name: "RESTful APIs", level: 95 },
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL", level: 90 },
        { name: "PostgreSQL", level: 88 },
        { name: "MongoDB", level: 80 },
        { name: "Oracle", level: 85 },
        { name: "Redis", level: 75 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50" ref={sectionRef}>
      <div className="section">
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <span className="chip bg-teal-100 text-portfolio-teal">My Skills</span>
          <h2 className="section-title mt-4">Technical Expertise</h2>
          <p className="section-subtitle mx-auto">
            As a Full Stack Java Developer, I've cultivated a diverse set of skills spanning frontend, backend, and database technologies. Here's an overview of my technical toolbox:
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className={`glass-card p-8 transition-all duration-700 delay-${categoryIndex * 100} ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-[20px]'}`}
            >
              <h3 className="text-xl font-semibold mb-6 text-portfolio-dark">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-portfolio-slate">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-portfolio-blue to-portfolio-teal rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${skillIndex * 100 + 200}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
