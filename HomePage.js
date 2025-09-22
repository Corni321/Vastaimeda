import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HomePage = () => {
  const services = [
    {
      title: 'SEO Optimization',
      description: 'AI-powered SEO tools that boost organic traffic by 40-60% while reducing costs by up to 70% compared to traditional agencies.',
      path: '/services/seo-optimization',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      highlight: '40-60% Traffic Increase'
    },
    {
      title: 'Chatbots & Customer Service',
      description: 'Cost-effective chatbot solutions under $50/month that handle 80% of customer inquiries and improve response times by 24/7.',
      path: '/services/chatbots',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      highlight: '80% Inquiry Automation'
    },
    {
      title: 'Reputation Management',
      description: 'AI-driven reputation monitoring and management tools that improve online ratings and customer trust with measurable ROI.',
      path: '/services/reputation-management',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ),
      highlight: 'Improved Online Trust'
    },
    {
      title: 'Outbound Marketing',
      description: 'Marketing automation with proven $5.44 ROI for every $1 spent. Smart targeting and personalization for SMB budgets.',
      path: '/services/outbound-marketing',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
      ),
      highlight: '$5.44 ROI per $1 Spent'
    },
    {
      title: 'Inbound Lead Reception',
      description: 'Lead management systems that improve conversion rates by 25-50% with automated nurturing and intelligent routing.',
      path: '/services/inbound-leads',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      highlight: '25-50% Better Conversion'
    },
    {
      title: 'Client Reactivation',
      description: 'Win back lost customers with AI-driven reactivation campaigns achieving 40% improvement rates and 300% lifetime value increases.',
      path: '/services/client-reactivation',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      highlight: '300% Lifetime Value Increase'
    }
  ];

  const stats = [
    { number: '40-60%', label: 'Average Traffic Increase' },
    { number: '$5.44', label: 'ROI per $1 Invested' },
    { number: '25-50%', label: 'Lead Conversion Improvement' },
    { number: '80%', label: 'Task Automation Rate' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-gray-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Transform Your SMB with
              <span className="text-blue-600 block">AI-Powered Growth</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Unlock the competitive advantage of artificial intelligence for your small or medium business. 
              Our proven AI solutions deliver measurable ROI while staying within your budget.
            </p>
            
            {/* ROI Highlight */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 max-w-4xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/booking"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-lg"
              >
                Get Free AI Consultation
              </Link>
              <Link
                to="/case-studies"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors duration-200"
              >
                View Success Stories
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Six Core AI Services for SMB Success
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each service is designed specifically for small and medium businesses, 
              with budget-friendly pricing and proven results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.path}
                className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200"
              >
                <div className="p-8">
                  <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-200">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {service.highlight}
                  </div>
                </div>
                <div className="px-8 pb-6">
                  <div className="flex items-center text-blue-600 text-sm font-medium group-hover:translate-x-1 transition-transform duration-200">
                    Learn More
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why SMBs Choose Our AI Solutions
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Budget-Friendly Solutions</h3>
                    <p className="text-gray-600">All tools under $50/month with flexible pricing designed for SMB budgets</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Proven ROI</h3>
                    <p className="text-gray-600">Every solution backed by measurable results and clear return on investment</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Easy Implementation</h3>
                    <p className="text-gray-600">No technical expertise required - we handle setup and training</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Ongoing Support</h3>
                    <p className="text-gray-600">Dedicated support team to ensure your success with AI implementation</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Ready to Get Started?
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-600">Free Consultation</span>
                  <span className="font-semibold text-green-600">$0</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-600">Custom AI Strategy</span>
                  <span className="font-semibold text-green-600">Included</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-600">ROI Calculator</span>
                  <span className="font-semibold text-green-600">Free Tool</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="text-gray-600">Implementation Support</span>
                  <span className="font-semibold text-green-600">Included</span>
                </div>
              </div>
              <div className="mt-8">
                <Link
                  to="/booking"
                  className="w-full bg-blue-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 text-center block"
                >
                  Schedule Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            Trusted by Growing SMBs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="text-4xl font-bold text-blue-600 mb-2">60%</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Traffic Increase</div>
              <div className="text-gray-600 text-sm">
                "The SEO AI tools helped us double our organic traffic within 3 months while cutting our marketing costs in half."
              </div>
              <div className="text-xs text-gray-500 mt-4">- Local Restaurant Chain</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="text-4xl font-bold text-blue-600 mb-2">$544</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">ROI per $100 Spent</div>
              <div className="text-gray-600 text-sm">
                "Marketing automation transformed our lead generation. We're now closing 3x more deals with the same budget."
              </div>
              <div className="text-xs text-gray-500 mt-4">- B2B Service Company</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="text-4xl font-bold text-blue-600 mb-2">80%</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Customer Inquiries Automated</div>
              <div className="text-gray-600 text-sm">
                "Our chatbot handles most customer questions 24/7, freeing up our team for high-value activities."
              </div>
              <div className="text-xs text-gray-500 mt-4">- E-commerce Store</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Start Your AI Transformation Today
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join hundreds of SMBs already leveraging AI for competitive advantage. 
            Get your free consultation and custom ROI analysis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/booking"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors duration-200 shadow-lg"
            >
              Schedule Free Consultation
            </Link>
            <Link
              to="/pricing"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
            >
              View Pricing Plans
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;