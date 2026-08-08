package com.gopichand.portfolio.repository;

import com.gopichand.portfolio.model.Skill;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SkillRepository extends JpaRepository<Skill, Long> {
    List<Skill> findAllByOrderByCategoryAscSortOrderAscNameAsc();
    boolean existsByNameAndCategory(String name, String category);
    void deleteByCategory(String category);
}
