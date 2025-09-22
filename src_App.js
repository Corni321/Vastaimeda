import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Import pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PricingPage from './pages/PricingPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import BookingPage from './pages/BookingPage';
import AdminDashboard from './pages/AdminDashboard';

// Import service pages
import SEOOptimization from './pages/services/SEOOptimization';
import ChatbotsPage from './pages/services/ChatbotsPage';
import ReputationManagementPage from './pages/services/ReputationManagementPage';
import OutboundMarketingPage from './pages/services/OutboundMarketingPage';
import InboundLeadReceptionPage from './pages/services/InboundLeadReceptionPage';
import ClientReactivationPage from './pages/services/ClientReactivationPage';

// Import global styles
import './index.css';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="App min-h-screen bg-white">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/admin" element={<AdminDashboard />} />
            
            {/* Service Routes */}
            <Route path="/services/seo-optimization" element={<SEOOptimization />} />
            <Route path="/services/chatbots" element={<ChatbotsPage />} />
            <Route path="/services/reputation-management" element={<ReputationManagementPage />} />
            <Route path="/services/outbound-marketing" element={<OutboundMarketingPage />} />
            <Route path="/services/inbound-leads" element={<InboundLeadReceptionPage />} />
            <Route path="/services/client-reactivation" element={<ClientReactivationPage />} />
            
            {/* Legal Pages */}
            <Route path="/privacy-policy" element={<div className="min-h-screen flex items-center justify-center"><div className="text-center"><h1 className="text-2xl font-bold mb-4">Privacy Policy</h1><p className="text-gray-600">Privacy policy content coming soon.</p></div></div>} />
            <Route path="/terms-of-service" element={<div className="min-h-screen flex items-center justify-center"><div className="text-center"><h1 className="text-2xl font-bold mb-4">Terms of Service</h1><p className="text-gray-600">Terms of service content coming soon.</p></div></div>} />
            <Route path="/cookie-policy" element={<div className="min-h-screen flex items-center justify-center"><div className="text-center"><h1 className="text-2xl font-bold mb-4">Cookie Policy</h1><p className="text-gray-600">Cookie policy content coming soon.</p></div></div>} />
          </Routes>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;