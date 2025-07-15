import { cn } from "/Users/gopichandmogaparthi/Desktop/gopichand-portfolio/gopichandmogaparthi-portfolio/src/lib/utils";

const SectionTitle = ({
  subtitle,
  title,
  description,
  align = "left",
  className,
}) => {
  const alignmentClasses = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  };

  return (
    <div className={cn("mb-12 max-w-3xl", alignmentClasses[align], className)}>
      {subtitle && (
        <span className="inline-block text-xs font-medium uppercase tracking-wider text-primary mb-2">
          {subtitle}
        </span>
      )}
      <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-muted-foreground text-balance leading-relaxed mt-2 max-w-3xl">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;