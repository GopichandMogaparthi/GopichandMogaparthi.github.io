import { useFetch } from "../hooks/useFetch";
import { api } from "../services/api";

const FALLBACK_PROJECTS = [
  {
    id: 1,
    title: "Enterprise Resource Planning System",
    description: "A comprehensive Java-based ERP solution with microservices architecture for a manufacturing company.",
    tags: ["Java", "Spring Boot", "Microservices", "React"],
    imageUrl: null,
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: 2,
    title: "Banking Management Platform",
    description: "Secure banking platform with real-time transaction processing and comprehensive reporting capabilities.",
    tags: ["Java", "Spring Security", "MySQL", "Angular"],
    imageUrl: null,
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: 3,
    title: "Healthcare Data Analytics Dashboard",
    description: "Real-time analytics dashboard for healthcare providers with data visualization and reporting.",
    tags: ["Java", "Spring Boot", "MongoDB", "React"],
    imageUrl: null,
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: 4,
    title: "Distributed Real-Time Collaborative Whiteboard System",
    description: "A real-time collaboration platform supporting 50+ concurrent users with sub-100ms synchronization latency using WebSocket-based event streaming. Uses Redis caching and session management to reduce database load by 80%, applying fault-tolerant communication and distributed state management for highly available services.",
    tags: ["WebSockets", "Redis", "Distributed Systems"],
    imageUrl: null,
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: 5,
    title: "AI-Powered Job Application Workflow Automation Agent",
    description: "An end-to-end LLM-powered automation pipeline that discovers job postings via REST APIs, scores candidate-role fit using Google Gemini, auto-generates tailored application documents, and tracks outcomes in Google Sheets with Gmail notifications. Orchestrated through asynchronous, multi-stage n8n workflows with retry logic and structured JSON prompt outputs.",
    tags: ["REST APIs", "Google Gemini", "n8n", "LLM Automation"],
    imageUrl: null,
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: 6,
    title: "Distributed E-Commerce Platform",
    description: "Architected a distributed e-commerce platform using Spring Boot microservices for catalog, inventory, orders, payments, and user management, enabling independent deployment and horizontal scaling. Implemented Kafka-based event-driven workflows for asynchronous order and inventory processing, Redis caching that improved API response latency by ~40%, and 30+ REST APIs secured with Spring Security and role-based access control. Deployed containerized services on Kubernetes with health checks, rolling deployments, and horizontal pod autoscaling, backed by GitHub Actions CI/CD pipelines and AWS (EC2, RDS, S3, CloudWatch).",
    tags: ["Java", "Spring Boot", "Microservices", "Kafka", "Redis", "PostgreSQL", "Docker", "Kubernetes", "AWS"],
    imageUrl: null,
    githubUrl: "#",
    liveUrl: "#",
  },
];

function ProjectCard({ project }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
      {/* Image */}
      <div className="h-52 bg-gray-100 overflow-hidden relative">
        {project.imageUrl ? (
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-300 text-4xl font-black">
            {project.title.charAt(0)}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-2">{project.title}</h3>
        <p className="text-sm text-gray-500 mb-4 leading-relaxed">{project.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags?.map((t) => (
            <span key={t} className="text-xs px-2.5 py-1 bg-gray-100 text-gray-600 rounded-full">
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center justify-between">
          <a
            href={project.liveUrl || "#"}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
          >
            View details
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <div className="flex gap-3">
            <a href={project.githubUrl || "#"} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-gray-800 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>
            <a href={project.liveUrl || "#"} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-gray-800 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const { data, loading, error } = useFetch(api.getProjects);
  const projects = data && data.length > 0 ? data : FALLBACK_PROJECTS;

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-3">Featured Projects</p>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Solutions I've Engineered</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            A showcase of my professional projects highlighting technical expertise and problem-solving abilities.
          </p>
        </div>

        {loading && (
          <div className="flex justify-center py-8">
            <div className="w-8 h-8 border-2 border-gray-900 border-t-transparent rounded-full animate-spin" />
          </div>
        )}

        {error && (
          <p className="text-center text-sm text-amber-600 mb-6">
            ⚠ Using static data — API not reachable
          </p>
        )}

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
