import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <a href="/" className="flex items-center">
              <img 
                src="/vast-ai-media-logo.png" 
                alt="VAST AI Media" 
                className="h-12 w-auto"
              />
            </a>
            <nav className="hidden md:flex space-x-8">
              <a href="/" className="text-gray-700 hover:text-orange-600 transition-colors">
                Home
              </a>
              <a href="/seo-tool.html" className="text-gray-700 hover:text-orange-600 transition-colors">
                SEO Tool
              </a>
              <a href="#contact" className="text-gray-700 hover:text-orange-600 transition-colors">
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
                <p>Phone: +1 (555) 123-4567</p>
                <p>Address: 123 AI Street, Tech City, TC 12345</p>
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
}