import React, { useState } from 'react';
import { Users, Target, Award, TrendingUp, CheckCircle, Star, X } from 'lucide-react';

// The main App component that handles routing
const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [showSEOModal, setShowSEOModal] = useState(false);

  // A component to display the Home Page content
  const HomePage = () => {
    return (
      <div className="relative py-20 px-4 sm:px-6 lg:px-8 text-center bg-gray-100 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            Welcome to VAST AI Media
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            We help businesses unlock their potential with cutting-edge AI solutions.
          </p>
          <button
            onClick={() => setShowSEOModal(true)}
            className="bg-orange-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-orange-700 transition-colors"
          >
            Get Your Free AI Analysis
          </button>
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

  // The SEO Tool Page component
  const SEOPage = ({ onClose }) => {
    const [url, setUrl] = useState('');
    const [email, setEmail] = useState('');
    const [report, setReport] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);

    const handleReport = () => {
      // Clear previous states
      setReport(null);
      setShowConfirmation(false);
      setIsLoading(true);

      const analysisTime = Math.random() * 30000 + 30000;

      setTimeout(() => {
        const onPageScore = Math.floor(Math.random() * 10) + 5;
        const contentScore = Math.floor(Math.random() * 10) + 5;
        const imageScore = Math.floor(Math.random() * 10) + 5;
        const mobileScore = Math.floor(Math.random() * 10) + 5;
        const speedScore = Math.floor(Math.random() * 10) + 5;
        const uxScore = Math.floor(Math.random() * 10) + 5;
        
        const totalScore = onPageScore + contentScore + imageScore + mobileScore + speedScore + uxScore;

        const mockResults = {
            onPageScore,
            contentScore,
            imageScore,
            mobileScore,
            speedScore,
            uxScore,
            totalScore,
            issues: [
                'Missing meta description on some pages.',
                'Images are missing alt text.',
                'Page loading speed is slow.'
            ],
            suggestions: [
                'Add a unique and compelling meta description to all pages.',
                'Add descriptive alt text to all images for accessibility and SEO.',
                'Optimize image sizes and use a CDN to improve page speed.'
            ]
        };

        setIsLoading(false);
        setReport(mockResults);

        setTimeout(() => {
          setReport(null);
          setShowConfirmation(true);
        }, 1500);

      }, analysisTime);
    };

    return (
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12 md:py-20 font-sans min-h-screen">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4">AI Website Analysis</h2>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light">
                <span className="text-orange-400 font-bold">Get an instant, in-depth analysis</span> of your website's performance and discover opportunities for growth.
            </p>

            {/* What you will receive list */}
            <h3 className="text-lg font-bold uppercase tracking-wider text-orange-400 mt-8 mb-4">What you will receive</h3>
            <div className="flex flex-wrap justify-center gap-4 text-white text-lg font-medium mb-12 max-w-4xl mx-auto">
                <span className="px-6 py-3 bg-gray-700/50 backdrop-blur-sm rounded-full transition-all duration-300 transform hover:scale-105 hover:bg-orange-600/70 cursor-pointer">On-Page SEO</span>
                <span className="px-6 py-3 bg-gray-700/50 backdrop-blur-sm rounded-full transition-all duration-300 transform hover:scale-105 hover:bg-orange-600/70 cursor-pointer">Content Quality</span>
                <span className="px-6 py-3 bg-gray-700/50 backdrop-blur-sm rounded-full transition-all duration-300 transform hover:scale-105 hover:bg-orange-600/70 cursor-pointer">Image Optimization</span>
                <span className="px-6 py-3 bg-gray-700/50 backdrop-blur-sm rounded-full transition-all duration-300 transform hover:scale-105 hover:bg-orange-600/70 cursor-pointer">Mobile-Friendliness</span>
                <span className="px-6 py-3 bg-gray-700/50 backdrop-blur-sm rounded-full transition-all duration-300 transform hover:scale-105 hover:bg-orange-600/70 cursor-pointer">Page Speed</span>
                <span className="px-6 py-3 bg-gray-700/50 backdrop-blur-sm rounded-full transition-all duration-300 transform hover:scale-105 hover:bg-orange-600/70 cursor-pointer">User Experience</span>
            </div>

            <div className="bg-gray-800/60 p-6 md:p-12 rounded-2xl shadow-2xl border border-gray-700">
                <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
                    <input 
                      type="url" 
                      id="urlInput" 
                      placeholder="Enter your website URL" 
                      value={url} 
                      onChange={(e) => setUrl(e.target.value)} 
                      className="w-full md:w-1/2 p-4 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-shadow duration-300"
                    />
                    <input 
                      type="email" 
                      id="emailInput" 
                      placeholder="Enter your email for the report" 
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)} 
                      className="w-full md:w-1/2 p-4 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-shadow duration-300"
                    />
                </div>
                <button 
                  id="reportButton" 
                  onClick={handleReport} 
                  disabled={isLoading}
                  className={`mt-8 w-full md:w-auto text-white font-semibold py-4 px-12 rounded-full shadow-lg transition-all duration-300 transform ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105 hover:opacity-90'}`}
                  style={{ background: 'linear-gradient(135deg, #EA580B, #FB923C)' }}
                >
                    {isLoading ? 'Analyzing...' : 'Get Report'}
                </button>
            </div>

            {isLoading && (
              <div className="mt-12 text-center text-lg font-semibold">
                <p className="text-lg text-center text-gray-400">Analyzing...</p>
              </div>
            )}
            
            {report && (
              <div className="mt-12 text-left bg-gray-800/60 text-white p-8 rounded-2xl shadow-2xl border border-gray-700">
                <h3 className="text-2xl font-bold mb-4 border-b border-gray-700 pb-2">Website Analysis Report</h3>
                <div id="score" className="mb-4 text-center text-lg font-semibold">
                  <p className="text-3xl font-bold text-center mb-6">Total Site Score: <span className="text-green-500">{report.totalScore}/100</span></p>
                </div>
                <div id="individual-scores" className="mb-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
                      <div>On-Page SEO: <span className="font-bold text-orange-400">{report.onPageScore}/10</span></div>
                      <div>Content Quality: <span className="font-bold text-orange-400">{report.contentScore}/10</span></div>
                      <div>Image Optimization: <span className="font-bold text-orange-400">{report.imageScore}/10</span></div>
                      <div>Mobile-Friendliness: <span className="font-bold text-orange-400">{report.mobileScore}/10</span></div>
                      <div>Page Speed: <span className="font-bold text-orange-400">{report.speedScore}/10</span></div>
                      <div>User Experience: <span className="font-bold text-orange-400">{report.uxScore}/10</span></div>
                  </div>
                </div>
                <div id="issues" className="mb-4">
                  <h4 className="text-lg font-bold mb-2">Issues Found:</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                      {report.issues.map((issue, index) => <li key={index}>{issue}</li>)}
                  </ul>
                </div>
                <div id="suggestions" className="mb-4">
                  <h4 className="text-lg font-bold mt-6 mb-2">Suggestions for Improvement:</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                      {report.suggestions.map((suggestion, index) => <li key={index}>{suggestion}</li>)}
                  </ul>
                </div>
              </div>
            )}

            {showConfirmation && (
              <div id="confirmation" className="mt-8 text-center bg-gray-800/60 text-white p-8 rounded-2xl shadow-2xl border border-gray-700">
                  <p className="text-lg font-semibold text-gray-300">your copy has been sent to your Ai consultant for review prior to your receipt</p>
              </div>
            )}
        </div>
      </section>
    );
  };

  // Modal component to display content on top of the page
  const Modal = ({ children, onClose }) => {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70 backdrop-blur-sm">
        <div className="relative w-full h-full max-w-6xl max-h-[90vh] overflow-y-auto bg-gray-900 rounded-xl shadow-2xl">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-white bg-gray-800 rounded-full hover:bg-gray-700 transition-colors z-50"
          >
            <X size={24} />
          </button>
          {children}
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
                  onClick={(e) => { e.preventDefault(); setShowSEOModal(true); }}
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
      case 'about':
        return <AboutPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <Layout>
      {renderPage()}
      {showSEOModal && (
        <Modal onClose={() => setShowSEOModal(false)}>
          <SEOPage />
        </Modal>
      )}
    </Layout>
  );
};

export default App;
