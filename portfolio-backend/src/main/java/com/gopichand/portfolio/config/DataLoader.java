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

    private static final String BACKEND = "Backend Development";
    private static final String FRONTEND = "Frontend Development";
    private static final String CLOUD = "Cloud & DevOps";

    private final SkillService skillService;
    private final ProjectService projectService;

    public DataLoader(SkillService skillService, ProjectService projectService) {
        this.skillService = skillService;
        this.projectService = projectService;
    }

    @Override
    public void run(String... args) {
        seedSkill("Java", BACKEND, 1);
        seedSkill("Spring Boot", BACKEND, 2);
        seedSkill("Microservices", BACKEND, 3);
        seedSkill("REST APIs", BACKEND, 4);
        seedSkill("React", FRONTEND, 1);
        seedSkill("Tailwind CSS", FRONTEND, 2);
        seedSkill("AWS", CLOUD, 1);
        seedSkill("Docker", CLOUD, 2);
        seedSkill("Kubernetes", CLOUD, 3);

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
