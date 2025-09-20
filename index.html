import React, { useState } from 'react';
import { Users, Target, Award, TrendingUp, CheckCircle, Star, Search, Home } from 'lucide-react';

// This is a single-file implementation, so we will use Tailwind classes directly.

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const navItems = [
    { name: 'Home', page: 'home', icon: Home },
    { name: 'About', page: 'about', icon: Users },
    { name: 'SEO Tool', page: 'seo-tool', icon: Search }
  ];

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutPage />;
      case 'seo-tool':
        return <SEOToolPage setCurrentPage={setCurrentPage} />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans antialiased">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between h-16">
            <h1 className="text-2xl font-bold text-gray-900">VastaiMedia</h1>
            <div className="flex space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => setCurrentPage(item.page)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md font-medium transition-colors duration-200 
                    ${currentPage === item.page ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </button>
              ))}
            </div>
          </nav>
        </div>
      </header>

      {/* Page Content */}
      <main className="pt-8">
        {renderPage()}
      </main>
    </div>
  );
};

const HomePage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
          Welcome to VastaiMedia
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Your partner in digital growth. Explore our solutions for AI, SEO, and more.
        </p>
        <button
          onClick={() => console.log("Learn more clicked!")}
          className="bg-blue-600 text-white px-8 py-3 rounded-xl shadow-lg hover:bg-blue-700 transition-colors duration-300"
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

const SEOToolPage = ({ setCurrentPage }) => {
  const [url, setUrl] = useState('');
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);

  const analyzeSEO = async () => {
    if (!url) {
      console.log("Please enter a URL.");
      return;
    }

    setLoading(true);
    setResults(null);

    // Simulate a realistic delay between 30 and 60 seconds
    const analysisTime = Math.random() * 30000 + 30000;

    setTimeout(() => {
      const mockResults = {
        title: "VastaiMedia - Your Digital Growth Partner",
        metaDescription: "Providing AI-driven solutions and expert SEO services to boost your business.",
        keywords: "AI, SEO, marketing, business, digital, growth",
        score: Math.floor(Math.random() * 100)
      };
      setResults(mockResults);
      setLoading(false);
    }, analysisTime);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white rounded-xl shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-900 text-center flex-grow">SEO Analyzer Tool</h2>
        <button
          onClick={() => setCurrentPage('home')}
          className="px-4 py-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
        >
          <Home className="h-6 w-6" />
        </button>
      </div>
      <p className="text-gray-600 mb-8 text-center">
        Enter a URL to get an instant analysis of its key SEO elements.
      </p>

      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter website URL (e.g., https://vastaimedia.com)"
          className="flex-grow w-full px-5 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
        />
        <button
          onClick={analyzeSEO}
          disabled={loading}
          className="w-full md:w-auto px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {loading ? 'Analyzing...' : 'Analyze'}
        </button>
      </div>

      {loading && (
        <div className="flex justify-center items-center mt-8">
          <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4 animate-spin"></div>
        </div>
      )}

      {results && (
        <div className="mt-12 bg-gray-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Analysis Results</h3>
          <div className="space-y-4">
            <p className="text-gray-700">
              <span className="font-semibold text-gray-900">SEO Score:</span> {results.score}/100
            </p>
            <p className="text-gray-700">
              <span className="font-semibold text-gray-900">Title:</span> {results.title}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold text-gray-900">Meta Description:</span> {results.metaDescription}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold text-gray-900">Keywords:</span> {results.keywords}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

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
  ];

  const achievements = [
    { metric: "500+", label: "Businesses Transformed" },
    { metric: "$50M+", label: "Client Revenue Generated" },
    { metric: "451%", label: "Average ROI Achieved" },
    { metric: "93%", label: "Client Retention Rate" }
  ];

  const testimonials = [
    {
      quote: "SmartBusiness AI didn't just implement tools - they transformed how we think about customer engagement. Our revenue increased 340% in the first year.",
      author: "Maria Gonzalez",
      company: "Local Fitness Studio",
      role: "Owner"
    },
    {
      quote: "The ROI was immediate. Within 3 months, our AI chatbot was handling 80% of customer inquiries and generating more leads than our entire sales team.",
      author: "James Wilson",
      company: "Tech Repair Services",
      role: "Founder"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Empowering Small Businesses
              <span className="text-blue-600 block">with AI Excellence</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Founded by former small business owners who understand your challenges,
              we're dedicated to making enterprise-level AI accessible and profitable for businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  SmartBusiness AI was born from frustration. As small business owners ourselves,
                  we watched enterprise companies gain massive advantages from AI while businesses were
                  left behind due to cost, complexity, and lack of specialized expertise.
                </p>
                <p>
                  In 2022, our founders—former Google AI researchers and successful small business
                  owners—decided to bridge this gap. We created the first AI consulting firm
                  designed exclusively for small and medium businesses.
                </p>
                <p>
                  Today, we've helped over 500 businesses implement AI solutions that deliver measurable
                  results. Our clients achieve an average ROI of 451% within their first year,
                  proving that effective AI isn't just for Fortune 500 companies.
                </p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Our Mission</h3>
              <p className="text-gray-600 mb-6">
                To democratize AI for small businesses by providing enterprise-level solutions
                at business-friendly prices, with guaranteed ROI and ongoing support.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{achievement.metric}</div>
                    <div className="text-sm text-gray-600">{achievement.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Drives Us
            </h2>
            <p className="text-xl text-gray-600">
              Our core values shape every client interaction and solution we deliver
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 text-blue-600">
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-blue-100">
              Real feedback from real business owners
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Small Businesses Choose Us
            </h2>
            <p className="text-xl text-gray-600">
              We're not just consultants—we're your partners in AI transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Business Expertise</h3>
              <p className="text-gray-600">
                We understand small business challenges because we've been there.
                Our solutions are built for your reality, not enterprise fantasies.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <TrendingUp className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Guaranteed ROI</h3>
              <p className="text-gray-600">
                We're so confident in our results that we guarantee measurable ROI
                within 6 months or refund your investment.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Ongoing Support</h3>
              <p className="text-gray-600">
                Implementation is just the beginning. We provide continuous optimization,
                training, and support to ensure long-term success.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
