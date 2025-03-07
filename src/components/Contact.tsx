
import { useState, useEffect, useRef, FormEvent } from 'react';
import { Send, MapPin, Phone, Mail } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success('Message sent successfully!', {
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-5 w-5 text-portfolio-blue" />,
      title: "Location",
      details: "Hyderabad, India"
    },
    {
      icon: <Phone className="h-5 w-5 text-portfolio-blue" />,
      title: "Phone",
      details: "+91 98765 43210"
    },
    {
      icon: <Mail className="h-5 w-5 text-portfolio-blue" />,
      title: "Email",
      details: "gopichand@example.com"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50" ref={sectionRef}>
      <div className="section">
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <span className="chip bg-indigo-100 text-portfolio-indigo">Get In Touch</span>
          <h2 className="section-title mt-4">Contact Me</h2>
          <p className="section-subtitle mx-auto">
            Have a project in mind or want to discuss potential opportunities? I'd love to hear from you. Feel free to reach out using the form below or through my contact details.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className={`md:col-span-1 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[-20px]'}`}>
            <div className="glass-card p-8">
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="p-2 bg-blue-50 rounded-full mr-4">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-medium">{item.title}</h4>
                      <p className="text-portfolio-slate">{item.details}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <h4 className="font-medium mb-4">Connect with me</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                    aria-label="GitHub"
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C6.477 2 2 6.477 2 12C2 16.418 4.865 20.166 8.84 21.49C9.34 21.581 9.5 21.268 9.5 21C9.5 20.755 9.5 20.128 9.5 19.272C6.94 19.82 6.35 17.94 6.35 17.94C5.89 16.925 5.23 16.614 5.23 16.614C4.34 16.016 5.3 16.028 5.3 16.028C6.28 16.095 6.82 17.039 6.82 17.039C7.7 18.48 9.15 17.984 9.53 17.723C9.614 17.09 9.86 16.652 10.12 16.418C8.04 16.184 5.84 15.358 5.84 11.523C5.84 10.473 6.24 9.61 6.84 8.935C6.74 8.68 6.4 7.686 7 6.273C7 6.273 7.81 6.005 9.53 7.159C10.32 6.939 11.16 6.83 12 6.825C12.84 6.83 13.68 6.939 14.47 7.159C16.2 6.005 17 6.273 17 6.273C17.6 7.686 17.26 8.68 17.16 8.935C17.76 9.61 18.16 10.473 18.16 11.523C18.16 15.37 15.96 16.18 13.87 16.409C14.2 16.699 14.5 17.272 14.5 18.148C14.5 19.416 14.5 20.677 14.5 21C14.5 21.271 14.66 21.587 15.17 21.488C19.138 20.166 22 16.42 22 12C22 6.477 17.523 2 12 2Z" fill="currentColor" />
                    </svg>
                  </a>
                  <a 
                    href="https://linkedin.com/in/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.5 8C7.32843 8 8 7.32843 8 6.5C8 5.67157 7.32843 5 6.5 5C5.67157 5 5 5.67157 5 6.5C5 7.32843 5.67157 8 6.5 8Z" fill="currentColor" />
                      <path d="M5 10C5 9.44772 5.44772 9 6 9H7C7.55228 9 8 9.44772 8 10V18C8 18.5523 7.55228 19 7 19H6C5.44772 19 5 18.5523 5 18V10Z" fill="currentColor" />
                      <path d="M11 19H12C12.5523 19 13 18.5523 13 18V13.5C13 12 16 11 16 13.5V18C16 18.5523 16.4477 19 17 19H18C18.5523 19 19 18.5523 19 18V13.5C19 9 13 9 11 13.5V10C11 9.44772 10.5523 9 10 9H9C8.44772 9 8 9.44772 8 10V18C8 18.5523 8.44772 19 9 19H10C10.5523 19 11 18.5523 11 18V13.5" fill="currentColor" />
                    </svg>
                  </a>
                  <a 
                    href="https://twitter.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                    aria-label="Twitter"
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 5.89999C21.26 6.21999 20.46 6.41999 19.64 6.50999C20.49 6.00999 21.14 5.23999 21.44 4.29999C20.65 4.76999 19.77 5.11999 18.84 5.28999C18.09 4.52999 17.02 4.02999 15.85 4.02999C13.58 4.02999 11.75 5.85999 11.75 8.13999C11.75 8.45999 11.78 8.75999 11.84 9.04999C8.44 8.89999 5.42 7.26999 3.39 4.80999C3.04 5.41999 2.84 6.00999 2.84 6.79999C2.84 8.20999 3.56 9.45999 4.66 10.2C3.99 10.2 3.35 10 2.78 9.72999V9.75999C2.78 11.75 4.18 13.39 6.06 13.77C5.47 13.93 4.85 13.95 4.25 13.83C4.77 15.44 6.25 16.62 8.02 16.66C6.62 17.74 4.87 18.33 3.01 18.33C2.67 18.33 2.33 18.32 2 18.29C3.78 19.42 5.92 20.15 8.22 20.15C15.84 20.15 19.82 13.99 19.91 8.52999C19.91 8.35999 19.91 8.19999 19.9 8.01999C20.69 7.45999 21.34 6.73999 22 5.89999Z" fill="currentColor" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className={`md:col-span-2 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[20px]'}`}>
            <div className="glass-card p-8">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-portfolio-slate mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-portfolio-blue focus:border-transparent"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-portfolio-slate mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-portfolio-blue focus:border-transparent"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-portfolio-slate mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-portfolio-blue focus:border-transparent"
                    placeholder="Project Inquiry"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-portfolio-slate mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-portfolio-blue focus:border-transparent"
                    placeholder="Your message here..."
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-3 bg-portfolio-blue text-white rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </span>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
