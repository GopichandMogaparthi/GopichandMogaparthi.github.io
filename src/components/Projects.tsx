
import { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState('all');

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

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with secure payment processing, inventory management, and a responsive user interface.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      tags: ["Java", "Spring Boot", "React", "MySQL"],
      category: "fullstack",
      githubLink: "#",
      liveLink: "#"
    },
    {
      title: "Healthcare Management System",
      description: "An integrated platform for healthcare providers to manage patient records, appointments, and billing information securely.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      tags: ["Java", "Spring", "Angular", "PostgreSQL"],
      category: "backend",
      githubLink: "#",
      liveLink: "#"
    },
    {
      title: "Financial Analytics Dashboard",
      description: "Interactive visualization tool for financial data analysis with real-time updates and customizable reports.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      tags: ["Java", "React", "D3.js", "REST API"],
      category: "frontend",
      githubLink: "#",
      liveLink: "#"
    },
    {
      title: "Task Management Application",
      description: "Collaborative project management tool with real-time updates, task assignment, and progress tracking features.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      tags: ["Java", "Spring Boot", "React", "MongoDB"],
      category: "fullstack",
      githubLink: "#",
      liveLink: "#"
    }
  ];

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'fullstack', label: 'Full Stack' }
  ];

  return (
    <section id="projects" className="py-20 bg-white" ref={sectionRef}>
      <div className="section">
        <div className={`text-center max-w-3xl mx-auto mb-12 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <span className="chip bg-blue-100 text-portfolio-blue">My Work</span>
          <h2 className="section-title mt-4">Featured Projects</h2>
          <p className="section-subtitle mx-auto">
            Here are some of the projects I've worked on that showcase my skills and experience as a Full Stack Java Developer.
          </p>
        </div>

        <div className={`flex flex-wrap justify-center mb-12 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all m-1
                ${activeTab === category.id 
                  ? 'bg-portfolio-blue text-white shadow-md' 
                  : 'bg-gray-100 text-portfolio-slate hover:bg-gray-200'
                }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className={`glass-card overflow-hidden transition-all duration-700 delay-${(index % 4) * 100} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[20px]'}`}
            >
              <div className="relative overflow-hidden aspect-video">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="inline-block px-2 py-1 text-xs font-medium bg-blue-50 text-portfolio-blue rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-portfolio-slate mb-4">{project.description}</p>
                <div className="flex space-x-4">
                  <a 
                    href={project.githubLink} 
                    className="flex items-center text-sm font-medium text-portfolio-slate hover:text-portfolio-blue transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Source Code
                  </a>
                  <a 
                    href={project.liveLink} 
                    className="flex items-center text-sm font-medium text-portfolio-slate hover:text-portfolio-blue transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
