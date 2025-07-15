
import SectionTitle from "../ui/SectionTitle";
import ProjectCard from "../ui/ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Enterprise Resource Planning System",
      description: "A comprehensive Java-based ERP solution with microservices architecture for a manufacturing company.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      skills: ["Java", "Spring Boot", "Microservices", "React"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Banking Management Platform",
      description: "Secure banking platform with real-time transaction processing and comprehensive reporting capabilities.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      skills: ["Java", "Spring Security", "MySQL", "Angular"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Healthcare Data Analytics Dashboard",
      description: "Real-time analytics dashboard for healthcare providers with data visualization and reporting.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      skills: ["Java", "Spring Boot", "MongoDB", "React"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "E-commerce Platform",
      description: "Scalable e-commerce solution with product management, order processing, and payment integration.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      skills: ["Java", "Spring Boot", "PostgreSQL", "React"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Supply Chain Management System",
      description: "End-to-end supply chain tracking with real-time updates and inventory management capabilities.",
      image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      skills: ["Java", "Spring Boot", "Redis", "Angular"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Customer Relationship Management Tool",
      description: "Comprehensive CRM system for sales teams with lead tracking and customer management features.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      skills: ["Java", "Spring Boot", "MySQL", "TypeScript"],
      githubUrl: "#",
      liveUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-white">
      <div className="container mx-auto">
        <SectionTitle
          subtitle="Featured Projects"
          title="Solutions I've Engineered"
          description="A showcase of my professional projects highlighting technical expertise and problem-solving abilities."
          align="center"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              image={project.image}
              skills={project.skills}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;