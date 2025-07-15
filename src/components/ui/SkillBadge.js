
import { cn } from "/Users/gopichandmogaparthi/Desktop/gopichand-portfolio/gopichandmogaparthi-portfolio/src/lib/utils";

const SkillBadge = ({ name, className, size = "md" }) => {
  const sizeClasses = {
    sm: "text-xs px-2 py-1",
    md: "text-sm px-3 py-1.5",
    lg: "text-base px-4 py-2",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-primary/10 text-primary font-medium shadow-sm border border-primary/20 transition-all hover:-translate-y-1 hover:shadow-md",
        sizeClasses[size],
        className
      )}
    >
      {name}
    </span>
  );
};

export default SkillBadge;