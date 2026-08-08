package com.gopichand.portfolio.controller;

import com.gopichand.portfolio.dto.Dtos.SkillCategoryResponse;
import com.gopichand.portfolio.dto.Dtos.SkillResponse;
import com.gopichand.portfolio.service.SkillService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/skills")
public class SkillController {

    private final SkillService skillService;

    public SkillController(SkillService skillService) {
        this.skillService = skillService;
    }

    @GetMapping
    public List<SkillResponse> getAll() {
        return skillService.getAllSkills();
    }

    @GetMapping("/categories")
    public List<SkillCategoryResponse> getCategories() {
        return skillService.getGroupedCategories();
    }
}
