
import { useState } from "react";
import { ArrowRight, Github, ExternalLink } from "lucide-react";
import { cn } from "/Users/gopichandmogaparthi/Desktop/gopichand-portfolio/gopichandmogaparthi-portfolio/src/lib/utils";
import SkillBadge from "./SkillBadge";

const ProjectCard = ({
  title,
  description,
  image,
  skills,
  githubUrl,
  liveUrl,
  className,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div 
      className={cn(
        "group glass-card rounded-xl overflow-hidden hover-lift",
        className
      )}
    >
      <div className="image-container relative h-64 w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className={cn(
            "h-full w-full object-cover transition-all duration-700 ease-in-out group-hover:scale-105",
            imageLoaded ? "image-loaded" : "image-blur"
          )}
          onLoad={() => setImageLoaded(true)}
        />
      </div>
      <div className="p-6">
        <h3 className="font-display text-xl font-semibold tracking-tight mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {skills.map((skill) => (
            <SkillBadge key={skill} name={skill} size="sm" />
          ))}
        </div>
        
        <div className="flex items-center justify-between mt-4">
          <a
            href="www.google.com"
            className="inline-flex items-center gap-1 text-sm text-primary link-underline"
          >
            View details <ArrowRight size={16} />
          </a>
          
          <div className="flex gap-3">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub Repository"
              >
                <Github size={18} />
              </a>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Live Demo"
              >
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;