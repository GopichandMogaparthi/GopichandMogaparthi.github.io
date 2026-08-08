package com.gopichand.portfolio.service;

import com.gopichand.portfolio.dto.Dtos.ProjectRequest;
import com.gopichand.portfolio.dto.Dtos.ProjectResponse;
import com.gopichand.portfolio.model.Project;
import com.gopichand.portfolio.repository.ProjectRepository;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProjectService {

    private final ProjectRepository projectRepository;

    public ProjectService(ProjectRepository projectRepository) {
        this.projectRepository = projectRepository;
    }

    public List<ProjectResponse> getAllProjects() {
        return projectRepository.findAllByOrderBySortOrderAscTitleAsc().stream()
                .map(this::toResponse)
                .collect(Collectors.toList());
    }

    public ProjectResponse getById(Long id) {
        return toResponse(findEntity(id));
    }

    @Transactional
    public ProjectResponse create(ProjectRequest request) {
        Project project = new Project();
        applyRequest(project, request);
        return toResponse(projectRepository.save(project));
    }

    @Transactional
    public ProjectResponse update(Long id, ProjectRequest request) {
        Project project = findEntity(id);
        applyRequest(project, request);
        return toResponse(projectRepository.save(project));
    }

    @Transactional
    public void delete(Long id) {
        if (!projectRepository.existsById(id)) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Project not found: " + id);
        }
        projectRepository.deleteById(id);
    }

    public boolean exists(String title) {
        return projectRepository.existsByTitle(title);
    }

    public Project save(Project project) {
        return projectRepository.save(project);
    }

    private Project findEntity(Long id) {
        return projectRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Project not found: " + id));
    }

    private void applyRequest(Project project, ProjectRequest request) {
        project.setTitle(request.getTitle());
        project.setDescription(request.getDescription());
        project.setImageUrl(request.getImageUrl());
        project.setGithubUrl(request.getGithubUrl());
        project.setLiveUrl(request.getLiveUrl());
        project.setTags(request.getTags());
        project.setSortOrder(request.getSortOrder());
    }

    private ProjectResponse toResponse(Project project) {
        return new ProjectResponse(
                project.getId(),
                project.getTitle(),
                project.getDescription(),
                project.getImageUrl(),
                project.getGithubUrl(),
                project.getLiveUrl(),
                project.getTags()
        );
    }
}
