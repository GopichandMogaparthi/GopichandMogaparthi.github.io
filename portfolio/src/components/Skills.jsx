import { useFetch } from "../hooks/useFetch";
import { api } from "../services/api";

// Fallback static data (shown if API is down)
const FALLBACK_CATEGORIES = [
  {
    name: "Languages",
    skills: ["Java", "SQL", "JavaScript", "C"],
  },
  {
    name: "Backend",
    skills: ["Spring Boot", "Java EE", "REST APIs", "gRPC", "Microservices", "Service-Oriented Architecture", "Multithreading", "WebSockets", "Asynchronous Job Processing", "Enterprise Resource Planning", "Web Browsers"],
  },
  {
    name: "Databases & Data",
    skills: ["MongoDB", "DynamoDB", "MySQL", "Redis", "NoSQL/Document Stores", "Query Optimization", "Indexing"],
  },
  {
    name: "Cloud & DevOps",
    skills: ["AWS", "GCP", "S3", "Lambda", "EventBridge", "IAM", "KMS", "CloudFormation", "Docker", "Kubernetes", "Jenkins", "GitHub Actions", "CI/CD", "IaC", "Logging & Monitoring", "Cloud Security"],
  },
  {
    name: "Engineering Practices",
    skills: ["System Design", "Design Patterns", "OOP", "Performance Optimization", "High Availability", "Security", "Agile/Scrum", "Code Reviews", "Identity Management", "Security Screening Compliance"],
  },
  {
    name: "AI & Generative AI",
    skills: ["LLM APIs", "RAG", "Prompt Engineering", "Embeddings", "Vector Databases", "AI Agents", "Tool Calling", "LLM Evaluation", "LLM Observability", "AI Infrastructure", "Agentic AI"],
  },
  {
    name: "AI-Assisted Development",
    skills: ["GitHub Copilot", "Claude Code", "Codex", "Cursor", "AI Code Generation", "AI-generated Testing", "AI Code Review", "AI-assisted Debugging", "Agentic Development Workflows"],
  },
  {
    name: "Frontend Development",
    skills: ["React", "Tailwind CSS"],
  },
];

const PROFICIENCY = [
  { label: "Java / Spring Boot", pct: 95 },
  { label: "AWS / GCP / Cloud", pct: 85 },
  { label: "Distributed Systems", pct: 88 },
  { label: "AI-Assisted Development", pct: 85 },
  { label: "SQL / NoSQL", pct: 82 },
];

function SkillTag({ label }) {
  return (
    <span className="px-3 py-1.5 text-sm border border-gray-200 rounded-full text-gray-700 hover:border-gray-800 hover:text-gray-900 transition-colors cursor-default">
      {label}
    </span>
  );
}

function ProgressBar({ label, pct }) {
  return (
    <div>
      <div className="flex justify-between text-sm mb-1">
        <span className="font-medium text-gray-700">{label}</span>
        <span className="text-gray-400">{pct}%</span>
      </div>
      <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-gray-900 rounded-full transition-all duration-1000"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const { data, loading, error } = useFetch(api.getSkillCategories);

  // Use API data if available, otherwise fall back to static
  const categories = data && data.length > 0 ? data : FALLBACK_CATEGORIES;

  return (
    <section id="skills" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-3">Skills & Expertise</p>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Technical proficiencies that drive results
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            A comprehensive toolkit of technologies and methodologies I leverage to build robust software solutions.
          </p>
        </div>

        {loading && (
          <div className="flex justify-center py-8">
            <div className="w-8 h-8 border-2 border-gray-900 border-t-transparent rounded-full animate-spin" />
          </div>
        )}

        {error && (
          <p className="text-center text-sm text-amber-600 mb-6">
            ⚠ Using static data — API not reachable ({error})
          </p>
        )}

        {/* Skill category cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {categories.map((cat) => (
            <div key={cat.name} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">{cat.name}</h3>
              <div className="flex flex-wrap gap-2">
                {(cat.skills || []).map((s) => (
                  <SkillTag key={s} label={s} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Key proficiencies */}
        <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
          <h3 className="text-xl font-bold text-gray-900 mb-8 text-center">Key Proficiencies</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {PROFICIENCY.map((p) => (
              <ProgressBar key={p.label} {...p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
