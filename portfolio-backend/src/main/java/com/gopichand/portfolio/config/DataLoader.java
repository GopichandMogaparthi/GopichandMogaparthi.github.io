package com.gopichand.portfolio.config;

import com.gopichand.portfolio.model.Project;
import com.gopichand.portfolio.model.Skill;
import com.gopichand.portfolio.service.ProjectService;
import com.gopichand.portfolio.service.SkillService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class DataLoader implements CommandLineRunner {

    private static final String LANGUAGES = "Languages";
    private static final String BACKEND = "Backend";
    private static final String FRONTEND = "Frontend Development";
    private static final String DATA = "Databases & Data";
    private static final String CLOUD = "Cloud & DevOps";
    private static final String ENGINEERING = "Engineering Practices";
    private static final String AI = "AI & Generative AI";
    private static final String AI_DEV = "AI-Assisted Development";

    private final SkillService skillService;
    private final ProjectService projectService;

    public DataLoader(SkillService skillService, ProjectService projectService) {
        this.skillService = skillService;
        this.projectService = projectService;
    }

    @Override
    public void run(String... args) {
        // One-time cleanup: "Backend Development" was renamed to "Backend" to match
        // the resume's actual section heading. Safe to call on every boot — a no-op
        // once the stale rows are gone.
        skillService.deleteByCategory("Backend Development");

        seedSkill("Java", LANGUAGES, 1);
        seedSkill("SQL", LANGUAGES, 2);
        seedSkill("JavaScript", LANGUAGES, 3);
        seedSkill("C", LANGUAGES, 4);

        seedSkill("Spring Boot", BACKEND, 1);
        seedSkill("Java EE", BACKEND, 2);
        seedSkill("REST APIs", BACKEND, 3);
        seedSkill("gRPC", BACKEND, 4);
        seedSkill("Microservices", BACKEND, 5);
        seedSkill("Service-Oriented Architecture", BACKEND, 6);
        seedSkill("Multithreading", BACKEND, 7);
        seedSkill("WebSockets", BACKEND, 8);
        seedSkill("Asynchronous Job Processing", BACKEND, 9);
        seedSkill("Enterprise Resource Planning", BACKEND, 10);
        seedSkill("Web Browsers", BACKEND, 11);

        seedSkill("MongoDB", DATA, 1);
        seedSkill("DynamoDB", DATA, 2);
        seedSkill("MySQL", DATA, 3);
        seedSkill("Redis", DATA, 4);
        seedSkill("NoSQL/Document Stores", DATA, 5);
        seedSkill("Query Optimization", DATA, 6);
        seedSkill("Indexing", DATA, 7);

        seedSkill("AWS", CLOUD, 1);
        seedSkill("GCP", CLOUD, 2);
        seedSkill("S3", CLOUD, 3);
        seedSkill("Lambda", CLOUD, 4);
        seedSkill("EventBridge", CLOUD, 5);
        seedSkill("IAM", CLOUD, 6);
        seedSkill("KMS", CLOUD, 7);
        seedSkill("CloudFormation", CLOUD, 8);
        seedSkill("Docker", CLOUD, 9);
        seedSkill("Kubernetes", CLOUD, 10);
        seedSkill("Jenkins", CLOUD, 11);
        seedSkill("GitHub Actions", CLOUD, 12);
        seedSkill("CI/CD", CLOUD, 13);
        seedSkill("IaC", CLOUD, 14);
        seedSkill("Logging & Monitoring", CLOUD, 15);
        seedSkill("Cloud Security", CLOUD, 16);

        seedSkill("System Design", ENGINEERING, 1);
        seedSkill("Design Patterns", ENGINEERING, 2);
        seedSkill("OOP", ENGINEERING, 3);
        seedSkill("Performance Optimization", ENGINEERING, 4);
        seedSkill("High Availability", ENGINEERING, 5);
        seedSkill("Security", ENGINEERING, 6);
        seedSkill("Agile/Scrum", ENGINEERING, 7);
        seedSkill("Code Reviews", ENGINEERING, 8);
        seedSkill("Identity Management", ENGINEERING, 9);
        seedSkill("Security Screening Compliance", ENGINEERING, 10);

        seedSkill("LLM APIs", AI, 1);
        seedSkill("RAG", AI, 2);
        seedSkill("Prompt Engineering", AI, 3);
        seedSkill("Embeddings", AI, 4);
        seedSkill("Vector Databases", AI, 5);
        seedSkill("AI Agents", AI, 6);
        seedSkill("Tool Calling", AI, 7);
        seedSkill("LLM Evaluation", AI, 8);
        seedSkill("LLM Observability", AI, 9);
        seedSkill("AI Infrastructure", AI, 10);
        seedSkill("Agentic AI", AI, 11);

        seedSkill("GitHub Copilot", AI_DEV, 1);
        seedSkill("Claude Code", AI_DEV, 2);
        seedSkill("Codex", AI_DEV, 3);
        seedSkill("Cursor", AI_DEV, 4);
        seedSkill("AI Code Generation", AI_DEV, 5);
        seedSkill("AI-generated Testing", AI_DEV, 6);
        seedSkill("AI Code Review", AI_DEV, 7);
        seedSkill("AI-assisted Debugging", AI_DEV, 8);
        seedSkill("Agentic Development Workflows", AI_DEV, 9);

        seedSkill("React", FRONTEND, 1);
        seedSkill("Tailwind CSS", FRONTEND, 2);

        seedProject(
                "Distributed Real-Time Collaborative Whiteboard System",
                "A real-time collaboration platform supporting 50+ concurrent users with sub-100ms "
                        + "synchronization latency using WebSocket-based event streaming. Uses Redis caching "
                        + "and session management to reduce database load by 80%, applying fault-tolerant "
                        + "communication and distributed state management for highly available services.",
                List.of("WebSockets", "Redis", "Distributed Systems"),
                1
        );
        seedProject(
                "AI-Powered Job Application Workflow Automation Agent",
                "An end-to-end LLM-powered automation pipeline that discovers job postings via REST APIs, "
                        + "scores candidate-role fit using Google Gemini, auto-generates tailored application "
                        + "documents, and tracks outcomes in Google Sheets with Gmail notifications. Orchestrated "
                        + "through asynchronous, multi-stage n8n workflows with retry logic and structured JSON "
                        + "prompt outputs.",
                List.of("REST APIs", "Google Gemini", "n8n", "LLM Automation"),
                2
        );
        seedProject(
                "Distributed E-Commerce Platform",
                "Architected a distributed e-commerce platform using Spring Boot microservices for catalog, "
                        + "inventory, orders, payments, and user management, enabling independent deployment and "
                        + "horizontal scaling. Implemented Kafka-based event-driven workflows for asynchronous "
                        + "order and inventory processing, Redis caching that improved API response latency by "
                        + "~40%, and 30+ REST APIs secured with Spring Security and role-based access control. "
                        + "Deployed containerized services on Kubernetes with health checks, rolling deployments, "
                        + "and horizontal pod autoscaling, backed by GitHub Actions CI/CD pipelines and AWS "
                        + "(EC2, RDS, S3, CloudWatch).",
                List.of("Java", "Spring Boot", "Microservices", "Kafka", "Redis", "PostgreSQL", "Docker", "Kubernetes", "AWS"),
                3
        );
    }

    private void seedSkill(String name, String category, int sortOrder) {
        if (!skillService.exists(name, category)) {
            skillService.save(new Skill(name, category, sortOrder));
        }
    }

    private void seedProject(String title, String description, List<String> tags, int sortOrder) {
        if (!projectService.exists(title)) {
            Project project = new Project();
            project.setTitle(title);
            project.setDescription(description);
            project.setTags(tags);
            project.setSortOrder(sortOrder);
            projectService.save(project);
        }
    }
}
