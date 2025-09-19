import React, { useState } from 'react';
import { Users, Target, Award, TrendingUp, CheckCircle, Star } from 'lucide-react';

// The main App component that handles routing
const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  // A component to display the Home Page content
  const HomePage = () => {
    return (
      <div className="py-20 px-4 sm:px-6 lg:px-8 text-center bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            Welcome to VAST AI Media
          </h1>
          <p className="text-xl text-gray-600">
            We help businesses unlock their potential with cutting-edge AI solutions.
          </p>
        </div>
      </div>
    );
  };

  // The AboutPage component from the Canvas
  const AboutPage = () => {
    const values = [
      {
        icon: <Target className="h-8 w-8" />,
        title: "Business-First Approach",
        description: "Every solution is designed specifically for small and medium businesses, not enterprise systems scaled down."
      },
      {
        icon: <TrendingUp className="h-8 w-8" />,
        title: "Measurable Results",
        description: "We're obsessed with ROI. Every implementation includes clear metrics and guaranteed performance improvements."
      },
      {
        icon: <Users className="h-8 w-8" />,
        title: "Human-Centered AI",
        description: "AI should enhance human capabilities, not replace them. We focus on tools that empower your team."
      },
      {
        icon: <Award className="h-8 w-8" />,
        title: "Transparent Partnership",
        description: "No hidden costs, no vendor lock-in. We succeed when our clients succeed, period."
      }
    ]

    const achievements = [
      { metric: "500+", label: "Businesses Transformed" },
      { metric: "$50M+", label: "Client Revenue Generated" },
      { metric: "451%", label: "Average ROI Achieved" },
      { metric: "93%", label: "Client Retention Rate" }
    ]

    const testimonials = [
      {
        quote: "SmartBusiness AI didn't just implement tools - they transformed how we think about customer engagement. Our revenue increased by 30% in the first quarter alone.",
        author: "Jane Doe",
        title: "CEO, Innovate Solutions",
        avatar: "https://placehold.co/100x100/A0B9C9/000?text=JD",
        rating: 5,
      },
      {
        quote: "The ROI guarantee made the decision a no-brainer. The team was transparent, professional, and delivered every promise they made. Highly recommend.",
        author: "John Smith",
        title: "Founder, Apex Marketing",
        avatar: "https://placehold.co/100x100/F0C79A/000?text=JS",
        rating: 5,
      },
      {
        quote: "Our processes were a mess. VAST AI Media came in, streamlined everything with smart automation, and gave us back countless hours. True experts in their field.",
        author: "Emily Chen",
        title: "Operations Manager, Global Logistics",
        avatar: "https://placehold.co/100x100/8E89A8/000?text=EC",
        rating: 5,
      },
    ];

    return (
      <div>
        {/* Hero Section */}
        <section className="bg-white py-20 px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
              About VAST AI Media
            </h1>
            <p className="text-xl text-gray-600">
              We are a dedicated team of AI experts and business consultants committed to helping small and medium-sized businesses thrive in the age of artificial intelligence. Our mission is to democratize powerful AI solutions, making them accessible, affordable, and actionable for everyone.
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Guiding Principles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-md text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Achievements Section */}
        <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Our Impact
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {achievements.map((item, index) => (
                <div key={index} className="text-center">
                  <p className="text-4xl sm:text-5xl font-extrabold text-orange-600 mb-2">{item.metric}</p>
                  <p className="text-lg text-gray-600">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">What Our Clients Say</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-md flex flex-col items-center text-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-24 h-24 rounded-full mb-4"
                  />
                  <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                  <div className="flex text-yellow-400 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  };

  // A component to display the SEO Tool Page content
  const SEOPage = () => {
    return (
      <div className="py-20 px-4 sm:px-6 lg:px-8 text-center bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            SEO Tool
          </h1>
          <p className="text-xl text-gray-600">
            This is where your SEO tool will go.
          </p>
        </div>
      </div>
    );
  };

  // The Layout component wraps the entire application
  const Layout = ({ children }) => {
    return (
      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="bg-white shadow-sm sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('home'); }} className="flex items-center">
                <img
                  src="/vast-ai-media-logo.png"
                  alt="VAST AI Media"
                  className="h-12 w-auto"
                />
              </a>
              <nav className="hidden md:flex space-x-8">
                <a
                  href="#"
                  onClick={(e) => { e.preventDefault(); setCurrentPage('home'); }}
                  className="text-gray-700 hover:text-orange-600 transition-colors"
                >
                  Home
                </a>
                <a
                  href="#"
                  onClick={(e) => { e.preventDefault(); setCurrentPage('seo'); }}
                  className="text-gray-700 hover:text-orange-600 transition-colors"
                >
                  SEO Tool
                </a>
                <a
                  href="#"
                  onClick={(e) => { e.preventDefault(); setCurrentPage('about'); }}
                  className="text-gray-700 hover:text-orange-600 transition-colors"
                >
                  About
                </a>
                <a
                  href="#contact"
                  className="text-gray-700 hover:text-orange-600 transition-colors"
                >
                  Contact
                </a>
              </nav>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main>
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <img
                  src="/vast-ai-media-logo.png"
                  alt="VAST AI Media"
                  className="h-12 w-auto mb-4 filter brightness-0 invert"
                />
                <p className="text-gray-400">
                  Professional AI consulting services for businesses. Transform your operations with cutting-edge artificial intelligence solutions.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Services</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>AI Strategy Consulting</li>
                  <li>Machine Learning Implementation</li>
                  <li>Business Process Automation</li>
                  <li>SEO Analysis & Optimization</li>
                </ul>
              </div>
              <div id="contact">
                <h3 className="text-lg font-semibold mb-4">Contact</h3>
                <div className="space-y-2 text-gray-400">
                  <p>Email: info@vastaimedia.com</p>
                  <p>Phone: Your Phone Number Here</p>
                  <p>Address: Your Business Address Here</p>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2024 VAST AI Media. All rights reserved.</p>
            </div>
          </div>
        </footer>

        {/* Chatbot Widget */}
        <script src="https://www.buildmyagent.io/widget/689e2bd0beb9977422571a04/widget-professional.js?widgetId=689e2bd0beb9977422571a04"></script>
      </div>
    );
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'seo':
        return <SEOPage />;
      case 'about':
        return <AboutPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <Layout>
      {renderPage()}
    </Layout>
  );
};

export default App;
