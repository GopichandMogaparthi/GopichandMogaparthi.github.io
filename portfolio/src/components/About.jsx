export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-3">About Me</p>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Software Engineer II building secure, distributed systems
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Focused on high-availability REST APIs, event-driven workflows, and production-quality backend systems on AWS.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Left – decorative large text */}
          <div className="relative">
            <div className="relative z-10 w-full h-80 md:h-[420px] bg-gray-100 rounded-2xl overflow-hidden flex items-center justify-center shadow-xl">
              <span className="text-[120px] md:text-[160px] font-black text-black leading-none select-none">
                About
              </span>
            </div>
            <div className="absolute inset-0 bg-gray-200 rounded-2xl transform rotate-3 -z-10" />
          </div>

          {/* Right – content */}
          <div className="space-y-10">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">My Journey</h3>
              <p className="text-gray-500 leading-relaxed text-center">
                With 3+ years of experience building distributed backend services in Java and Spring Boot, I design
                high-availability REST APIs and event-driven workflows on AWS. My work spans identity management,
                security, and reliability practices that keep production systems resilient at scale.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">My Approach</h3>
              <p className="text-gray-500 leading-relaxed text-center">
                I believe in writing clean, maintainable code that follows best practices and design patterns, with
                security and reliability built in from the start. My development philosophy centers around creating
                resilient systems that can scale and adapt to changing business requirements.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-gray-800 mb-2">Education</h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  M.S. in Information Technology and Management<br />
                  Webster University · GPA 3.78<br /><br />
                  B.Tech in Computer Science and Engineering with Artificial Intelligence<br />
                  K L University · GPA 8.07
                </p>
              </div>
              <div>
                <h4 className="font-bold text-gray-800 mb-2">Location</h4>
                <p className="text-sm text-gray-500">
                  United States<br />
                  Available for remote work
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
