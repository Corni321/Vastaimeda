import { useState, useRef, useEffect } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { ArrowLeft, ExternalLink, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface SEOData {
  title: string;
  metaDescription: string;
  h1: string;
  linkCount: {
    total: number;
    internal: number;
    external: number;
  };
  keywordDensity: Record<string, number>;
  pageSpeed: number;
  mobileFriendly: boolean;
}

export function SEOTool() {
  const [url, setUrl] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [reportData, setReportData] = useState<SEOData | null>(null);
  const [showReport, setShowReport] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const chartRef = useRef<ChartJS>(null);

  const analyzeWebsite = async () => {
    if (!url.trim()) {
      setErrorMessage('Please enter a URL to analyze its SEO performance.');
      setShowError(true);
      return;
    }

    setIsAnalyzing(true);
    setShowReport(false);
    setShowError(false);

    try {
      // Call the real VastAI Media SEO API
      const response = await fetch(`https://vastaimedia-seo-api.netlify.app/.netlify/functions/analyze?url=${encodeURIComponent(url)}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      const data = await response.json();
      setReportData(data);
      setShowReport(true);
    } catch (error) {
      setErrorMessage('Failed to analyze URL. Please check the URL and try again.');
      setShowError(true);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const getProgressBarColor = (score: number) => {
    if (score >= 80) return 'bg-green-500';
    if (score >= 60) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const chartData = reportData ? {
    labels: Object.keys(reportData.keywordDensity),
    datasets: [
      {
        label: 'Keyword Frequency (%)',
        data: Object.values(reportData.keywordDensity),
        backgroundColor: 'rgba(59, 130, 246, 0.6)',
        borderColor: 'rgba(59, 130, 246, 1)',
        borderWidth: 1,
      },
    ],
  } : null;

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Keyword Density Analysis',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Frequency (%)'
        }
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link 
          to="/" 
          className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-6"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Home
        </Link>

        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Vast AI Media SEO Consultant
          </h1>
          <p className="text-lg text-gray-600">
            Get a detailed analysis of your website's SEO health.
          </p>
        </header>

        {/* Input and Analysis Section */}
        <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Enter website URL (e.g., https://vastaimedia.com)"
              className="flex-grow p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              disabled={isAnalyzing}
            />
            <button
              onClick={analyzeWebsite}
              disabled={isAnalyzing}
              className="w-full md:w-auto px-6 py-4 bg-orange-600 text-white font-bold rounded-lg shadow-lg hover:bg-orange-700 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isAnalyzing ? (
                <div className="flex items-center justify-center">
                  <span className="mr-2">Analyzing</span>
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              ) : (
                'Analyze'
              )}
            </button>
          </div>
        </div>

        {/* SEO Report Section */}
        {showReport && reportData && (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">SEO Analysis Report</h2>
            
            {/* Core SEO Report */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-6 text-gray-700">Core SEO Metrics</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Page Title:</h4>
                  <p className="text-gray-600 bg-gray-50 p-3 rounded">{reportData.title}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Meta Description:</h4>
                  <p className="text-gray-600 bg-gray-50 p-3 rounded">{reportData.metaDescription}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Main Heading (H1):</h4>
                  <p className="text-gray-600 bg-gray-50 p-3 rounded">{reportData.h1}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">{reportData.linkCount.total}</div>
                    <div className="text-sm text-gray-600">Total Links</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">{reportData.linkCount.internal}</div>
                    <div className="text-sm text-gray-600">Internal Links</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">{reportData.linkCount.external}</div>
                    <div className="text-sm text-gray-600">External Links</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Keyword Density Analysis */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-6 text-gray-700">Keyword Density Analysis</h3>
              <div className="h-80 mb-6">
                {chartData && (
                  <Bar ref={chartRef} data={chartData} options={chartOptions} />
                )}
              </div>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {Object.entries(reportData.keywordDensity).map(([keyword, density]) => (
                  <div key={keyword} className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="font-semibold text-gray-700">{keyword}</div>
                    <div className="text-blue-600">{density}%</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Performance and Mobile Check */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-6 text-gray-700">Performance & Mobile Friendliness</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-gray-700">Page Speed Score</span>
                    <span className="text-gray-600">{reportData.pageSpeed}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-6">
                    <div 
                      className={`h-6 rounded-full ${getProgressBarColor(reportData.pageSpeed)} flex items-center justify-center text-white text-sm font-bold`}
                      style={{ width: `${Math.min(reportData.pageSpeed, 100)}%` }}
                    >
                      {reportData.pageSpeed}%
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <span className="font-semibold text-gray-700">Mobile Friendly</span>
                  <span className={`font-semibold ${
                    reportData.mobileFriendly ? 'text-green-500' : 'text-red-500'
                  }`}>
                    {reportData.mobileFriendly ? 'Mobile Friendly' : 'Not Mobile Friendly'}
                  </span>
                </div>
              </div>
            </div>

            {/* Lead Generation & Appointment Setting */}
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <h3 className="text-xl font-semibold mb-4 text-gray-700">Ready to Improve Your Website?</h3>
              <p className="text-gray-600 mb-6">
                Click below to get in touch or book a consultation with our experts.
              </p>
              <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
                <button className="inline-flex items-center px-6 py-4 bg-green-500 text-white font-bold rounded-lg shadow-lg hover:bg-green-600 transition duration-300">
                  <ExternalLink className="h-5 w-5 mr-2" />
                  Get Expert Help
                </button>
                <a 
                  href="https://calendly.com/your-scheduling-link" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-4 bg-purple-500 text-white font-bold rounded-lg shadow-lg hover:bg-purple-600 transition duration-300"
                >
                  <Calendar className="h-5 w-5 mr-2" />
                  Book Consultation
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Error Modal */}
        {showError && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-8 max-w-md mx-4 shadow-xl">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-red-600 mb-4">Error</h3>
                <p className="text-gray-700 mb-6">{errorMessage}</p>
                <button 
                  onClick={() => setShowError(false)}
                  className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* No URL Message */}
        {!showReport && !isAnalyzing && !showError && (
          <div className="text-center text-gray-600 mt-8">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400 mb-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2 2a1 1 0 001.414-1.414L11 9.586V6z" clipRule="evenodd" />
            </svg>
            <p>Please enter a URL to analyze its SEO performance.</p>
          </div>
        )}
      </div>
    </div>
  );
}