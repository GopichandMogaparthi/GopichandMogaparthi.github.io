package com.gopichand.portfolio.service;

import com.gopichand.portfolio.dto.Dtos.SkillCategoryResponse;
import com.gopichand.portfolio.dto.Dtos.SkillResponse;
import com.gopichand.portfolio.model.Skill;
import com.gopichand.portfolio.repository.SkillRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class SkillService {

    private final SkillRepository skillRepository;

    public SkillService(SkillRepository skillRepository) {
        this.skillRepository = skillRepository;
    }

    public List<SkillResponse> getAllSkills() {
        return skillRepository.findAllByOrderByCategoryAscSortOrderAscNameAsc().stream()
                .map(s -> new SkillResponse(s.getId(), s.getName(), s.getCategory(), s.getSortOrder()))
                .collect(Collectors.toList());
    }

    public List<SkillCategoryResponse> getGroupedCategories() {
        Map<String, List<String>> grouped = new LinkedHashMap<>();
        for (Skill skill : skillRepository.findAllByOrderByCategoryAscSortOrderAscNameAsc()) {
            grouped.computeIfAbsent(skill.getCategory(), k -> new ArrayList<>()).add(skill.getName());
        }
        return grouped.entrySet().stream()
                .map(e -> new SkillCategoryResponse(e.getKey(), e.getValue()))
                .collect(Collectors.toList());
    }

    public boolean exists(String name, String category) {
        return skillRepository.existsByNameAndCategory(name, category);
    }

    public void deleteByCategory(String category) {
        skillRepository.deleteByCategory(category);
    }

    public Skill save(Skill skill) {
        return skillRepository.save(skill);
    }
}
