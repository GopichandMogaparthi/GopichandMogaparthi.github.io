export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center bg-white pt-16">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center md:text-left">
            <p className="text-sm font-medium text-gray-500 tracking-widest uppercase mb-4">
              Backend Software Engineer
            </p>
            <h1 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight mb-6">
              Building secure, distributed backend systems at scale
            </h1>
            <p className="text-lg text-gray-500 mb-10 max-w-md mx-auto md:mx-0">
              I design high-availability REST APIs and event-driven workflows on AWS using Java and Spring Boot, with a focus on security and reliability.
            </p>
            <div className="flex gap-6 justify-center md:justify-start">
              <button
                onClick={() => scrollTo("projects")}
                className="px-6 py-3 border border-gray-900 text-sm font-medium text-gray-900 hover:bg-gray-900 hover:text-white transition-colors rounded"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="px-6 py-3 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
              >
                Contact Me
              </button>
            </div>
          </div>

          {/* Right - photo card */}
          <div className="relative flex justify-center">
            {/* Experience badge */}
            <div className="absolute -top-4 right-4 md:right-0 bg-white shadow-md rounded-lg px-4 py-2 z-10">
              <p className="text-xs text-gray-400 font-medium">Experience</p>
              <p className="text-xl font-black text-gray-900">3+ Years</p>
            </div>

            {/* Photo */}
            <div className="w-full max-w-sm h-80 md:h-[420px] bg-gray-100 rounded-2xl overflow-hidden relative">
              <img
                src="/images/profile.jpeg"
                alt="Gopichand Mogaparthi"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Available for hire badge */}
            <div className="absolute -bottom-4 left-4 bg-white shadow-md rounded-lg px-4 py-2 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-medium text-gray-700">Available for hire</span>
            </div>
          </div>
        </div>

        {/* Scroll down */}
        <div className="flex flex-col items-center mt-16 gap-2 text-gray-400">
          <span className="text-xs tracking-widest uppercase">Scroll Down</span>
          <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}
