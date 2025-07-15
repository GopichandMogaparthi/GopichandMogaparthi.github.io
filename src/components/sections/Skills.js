
import { Check } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";
import SkillBadge from "../ui/SkillBadge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend Development",
      skills: [
        "Java", "Spring Boot", "Spring MVC", "Spring Security", 
        "Hibernate", "JPA", "RESTful APIs", "Microservices",
        "JUnit", "Mockito", "Maven", "Gradle"
      ]
    },
    {
      title: "Frontend Development",
      skills: [
        "JavaScript", "TypeScript", "React", "Angular",
        "HTML5", "CSS3", "SCSS", "Tailwind CSS",
        "Redux", "Material UI", "Bootstrap"
      ]
    },
    {
      title: "Database & Cloud",
      skills: [
        "MySQL", "PostgreSQL", "MongoDB", "Redis",
        "AWS", "Azure", "Docker", "Kubernetes",
        "CI/CD", "Jenkins", "Git", "GitHub Actions"
      ]
    }
  ];

  const keyProficiencies = [
    "Enterprise Java Application Development",
    "Microservices Architecture",
    "RESTful API Design",
    "Full Stack Development",
    "Database Design & Optimization",
    "Cloud Deployment & DevOps",
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-secondary/50">
      <div className="container mx-auto">
        <SectionTitle
          subtitle="Skills & Expertise"
          title="Technical proficiencies that drive results"
          description="A comprehensive toolkit of technologies and methodologies I leverage to build robust software solutions."
          align="center"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {skillCategories.map((category) => (
            <div 
              key={category.title}
              className="glass-card rounded-xl p-6 hover-lift"
            >
              <h3 className="font-display text-xl font-semibold mb-6">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <SkillBadge key={skill} name={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20">
          <h3 className="font-display text-2xl font-semibold text-center mb-8">Key Proficiencies</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyProficiencies.map((item) => (
              <div 
                key={item}
                className="flex items-start gap-3 p-4"
              >
                <div className="bg-primary/10 rounded-full p-1 mt-0.5">
                  <Check size={16} className="text-primary" />
                </div>
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;