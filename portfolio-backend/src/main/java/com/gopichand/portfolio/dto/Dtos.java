package com.gopichand.portfolio.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import java.util.List;

public final class Dtos {

    private Dtos() {}

    public static class ContactRequest {
        @NotBlank(message = "Name is required")
        private String name;

        @NotBlank(message = "Email is required")
        @Email(message = "Email must be valid")
        private String email;

        private String subject;

        @NotBlank(message = "Message is required")
        private String message;

        public String getName() { return name; }
        public void setName(String name) { this.name = name; }
        public String getEmail() { return email; }
        public void setEmail(String email) { this.email = email; }
        public String getSubject() { return subject; }
        public void setSubject(String subject) { this.subject = subject; }
        public String getMessage() { return message; }
        public void setMessage(String message) { this.message = message; }
    }

    public static class ContactResponse {
        private String status;
        private String message;

        public ContactResponse() {}
        public ContactResponse(String status, String message) {
            this.status = status;
            this.message = message;
        }

        public String getStatus() { return status; }
        public void setStatus(String status) { this.status = status; }
        public String getMessage() { return message; }
        public void setMessage(String message) { this.message = message; }
    }

    public static class SkillResponse {
        private Long id;
        private String name;
        private String category;
        private Integer sortOrder;

        public SkillResponse() {}
        public SkillResponse(Long id, String name, String category, Integer sortOrder) {
            this.id = id;
            this.name = name;
            this.category = category;
            this.sortOrder = sortOrder;
        }

        public Long getId() { return id; }
        public void setId(Long id) { this.id = id; }
        public String getName() { return name; }
        public void setName(String name) { this.name = name; }
        public String getCategory() { return category; }
        public void setCategory(String category) { this.category = category; }
        public Integer getSortOrder() { return sortOrder; }
        public void setSortOrder(Integer sortOrder) { this.sortOrder = sortOrder; }
    }

    public static class SkillCategoryResponse {
        private String name;
        private List<String> skills;

        public SkillCategoryResponse() {}
        public SkillCategoryResponse(String name, List<String> skills) {
            this.name = name;
            this.skills = skills;
        }

        public String getName() { return name; }
        public void setName(String name) { this.name = name; }
        public List<String> getSkills() { return skills; }
        public void setSkills(List<String> skills) { this.skills = skills; }
    }

    public static class ProjectResponse {
        private Long id;
        private String title;
        private String description;
        private String imageUrl;
        private String githubUrl;
        private String liveUrl;
        private List<String> tags;

        public ProjectResponse() {}
        public ProjectResponse(Long id, String title, String description, String imageUrl,
                                String githubUrl, String liveUrl, List<String> tags) {
            this.id = id;
            this.title = title;
            this.description = description;
            this.imageUrl = imageUrl;
            this.githubUrl = githubUrl;
            this.liveUrl = liveUrl;
            this.tags = tags;
        }

        public Long getId() { return id; }
        public void setId(Long id) { this.id = id; }
        public String getTitle() { return title; }
        public void setTitle(String title) { this.title = title; }
        public String getDescription() { return description; }
        public void setDescription(String description) { this.description = description; }
        public String getImageUrl() { return imageUrl; }
        public void setImageUrl(String imageUrl) { this.imageUrl = imageUrl; }
        public String getGithubUrl() { return githubUrl; }
        public void setGithubUrl(String githubUrl) { this.githubUrl = githubUrl; }
        public String getLiveUrl() { return liveUrl; }
        public void setLiveUrl(String liveUrl) { this.liveUrl = liveUrl; }
        public List<String> getTags() { return tags; }
        public void setTags(List<String> tags) { this.tags = tags; }
    }

    public static class ProjectRequest {
        @NotBlank(message = "Title is required")
        private String title;
        private String description;
        private String imageUrl;
        private String githubUrl;
        private String liveUrl;
        private List<String> tags;
        private Integer sortOrder;

        public String getTitle() { return title; }
        public void setTitle(String title) { this.title = title; }
        public String getDescription() { return description; }
        public void setDescription(String description) { this.description = description; }
        public String getImageUrl() { return imageUrl; }
        public void setImageUrl(String imageUrl) { this.imageUrl = imageUrl; }
        public String getGithubUrl() { return githubUrl; }
        public void setGithubUrl(String githubUrl) { this.githubUrl = githubUrl; }
        public String getLiveUrl() { return liveUrl; }
        public void setLiveUrl(String liveUrl) { this.liveUrl = liveUrl; }
        public List<String> getTags() { return tags; }
        public void setTags(List<String> tags) { this.tags = tags; }
        public Integer getSortOrder() { return sortOrder; }
        public void setSortOrder(Integer sortOrder) { this.sortOrder = sortOrder; }
    }
}
