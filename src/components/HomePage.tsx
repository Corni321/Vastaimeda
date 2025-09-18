import { Link } from 'react-router-dom';
import { ChevronRight, Brain, Cog, TrendingUp, Users } from 'lucide-react';

export function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Transform Your Business with
              <span className="text-orange-600"> AI Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Professional AI consulting services that drive innovation, automate processes, 
              and accelerate growth for forward-thinking businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-700 transition-colors">
                Get Started
              </button>
              <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our AI Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive AI services designed to solve your business challenges
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <Brain className="h-12 w-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">AI Strategy</h3>
              <p className="text-gray-600">
                Develop comprehensive AI strategies aligned with your business objectives.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <Cog className="h-12 w-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Process Automation</h3>
              <p className="text-gray-600">
                Streamline operations with intelligent automation solutions.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <TrendingUp className="h-12 w-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Performance Analytics</h3>
              <p className="text-gray-600">
                Gain insights with advanced analytics and machine learning.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <Users className="h-12 w-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Team Training</h3>
              <p className="text-gray-600">
                Empower your team with AI knowledge and best practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Free SEO Analysis CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Free Website SEO Analysis
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Get a comprehensive SEO report for your website instantly. 
            Discover optimization opportunities and improve your search rankings.
          </p>
          <a 
            href="/seo-tool.html" 
            className="inline-flex items-center bg-white text-orange-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            Free Analyze
            <ChevronRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose VAST AI Media?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We're not just consultants – we're your AI transformation partners. 
                With deep expertise in artificial intelligence and machine learning, 
                we help businesses unlock the full potential of AI technology.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <ChevronRight className="h-6 w-6 text-orange-600 mr-2 mt-0.5" />
                  <span className="text-gray-700">Expert AI consultants with proven track records</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-6 w-6 text-orange-600 mr-2 mt-0.5" />
                  <span className="text-gray-700">Customized solutions for your unique business needs</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-6 w-6 text-orange-600 mr-2 mt-0.5" />
                  <span className="text-gray-700">End-to-end support from strategy to implementation</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-6 w-6 text-orange-600 mr-2 mt-0.5" />
                  <span className="text-gray-700">Measurable ROI and business impact</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Ready to Get Started?</h3>
              <div className="space-y-4">
                <button className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors">
                  Schedule Consultation
                </button>
                <button className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                  Download Case Studies
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}