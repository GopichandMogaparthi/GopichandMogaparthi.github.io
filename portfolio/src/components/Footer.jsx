const SOCIAL_LINKS = [
  { label: "github", href: "https://github.com/GopichandMogaparthi" },
  { label: "linkedin", href: null },
  { label: "email", href: "mailto:gopichandmogaparthi@gmail.com" },
];

export default function Footer() {
  const scrollTo = (id) => document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  const links = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <footer className="bg-gray-50 border-t border-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <p className="font-bold text-gray-900 text-lg mb-3">GopichandDev</p>
            <p className="text-sm text-gray-500 leading-relaxed">
              Backend Software Engineer focused on secure, distributed systems using Java, Spring Boot, AWS, and GCP.
            </p>
            <div className="flex gap-3 mt-4">
              {SOCIAL_LINKS.map((s) =>
                s.href ? (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-gray-800 hover:text-gray-800 transition-colors text-xs font-medium uppercase"
                  >
                    {s.label.charAt(0)}
                  </a>
                ) : (
                  <span
                    key={s.label}
                    aria-label={`${s.label} (coming soon)`}
                    className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-300 text-xs font-medium uppercase cursor-default"
                  >
                    {s.label.charAt(0)}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-4">Quick Links</p>
            <ul className="space-y-2">
              {links.map((l) => (
                <li key={l}>
                  <button onClick={() => scrollTo(l)} className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                    {l}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-4">Contact</p>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>United States</li>
              <li>gopichandmogaparthi@gmail.com</li>
              <li>+1 (510) 364-2791</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-6 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-gray-400">
          <p>© 2026 Gopichand Mogaparthi, Software Engineer. All rights reserved.</p>
          <p>Designed & Built with precision</p>
        </div>
      </div>
    </footer>
  );
}
