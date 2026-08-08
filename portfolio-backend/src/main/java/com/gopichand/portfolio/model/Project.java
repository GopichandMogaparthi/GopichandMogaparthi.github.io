package com.gopichand.portfolio.model;
import jakarta.persistence.*;
import java.util.List;

@Entity @Table(name = "projects")
public class Project {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    @Column(columnDefinition = "TEXT") private String description;
    private String imageUrl, githubUrl, liveUrl;
    @Column(name = "sort_order") private Integer sortOrder;
    @ElementCollection @CollectionTable(name = "project_tags", joinColumns = @JoinColumn(name = "project_id"))
    @Column(name = "tag") @OrderColumn(name = "tag_order") private List<String> tags;

    public Long getId() { return id; } public void setId(Long id) { this.id = id; }
    public String getTitle() { return title; } public void setTitle(String t) { this.title = t; }
    public String getDescription() { return description; } public void setDescription(String d) { this.description = d; }
    public String getImageUrl() { return imageUrl; } public void setImageUrl(String u) { this.imageUrl = u; }
    public String getGithubUrl() { return githubUrl; } public void setGithubUrl(String u) { this.githubUrl = u; }
    public String getLiveUrl() { return liveUrl; } public void setLiveUrl(String u) { this.liveUrl = u; }
    public Integer getSortOrder() { return sortOrder; } public void setSortOrder(Integer s) { this.sortOrder = s; }
    public List<String> getTags() { return tags; } public void setTags(List<String> t) { this.tags = t; }
}
