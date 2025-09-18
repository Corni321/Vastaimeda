// SEO Analysis Edge Function for VastAI Media
// Provides comprehensive website SEO analysis

interface SEOAnalysisResult {
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

Deno.serve(async (req) => {
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE, PATCH',
    'Access-Control-Max-Age': '86400',
    'Access-Control-Allow-Credentials': 'false'
  };

  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    // Extract URL parameter
    const url = new URL(req.url);
    const targetUrl = url.searchParams.get('url');

    if (!targetUrl) {
      return new Response(JSON.stringify({ 
        error: { code: 'MISSING_URL', message: 'URL parameter is required' } 
      }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    // Validate URL format
    let parsedUrl: URL;
    try {
      parsedUrl = new URL(targetUrl);
    } catch {
      return new Response(JSON.stringify({ 
        error: { code: 'INVALID_URL', message: 'Invalid URL format' } 
      }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    // Fetch the target website
    let response: Response;
    try {
      response = await fetch(targetUrl, {
        headers: {
          'User-Agent': 'VastAI-Media-SEO-Bot/1.0'
        },
        redirect: 'follow'
      });
    } catch (error) {
      return new Response(JSON.stringify({ 
        error: { 
          code: 'FETCH_ERROR', 
          message: `Failed to fetch website: ${error.message}` 
        } 
      }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    if (!response.ok) {
      return new Response(JSON.stringify({ 
        error: { 
          code: 'HTTP_ERROR', 
          message: `Website returned status: ${response.status}` 
        } 
      }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    const html = await response.text();
    
    // Analyze SEO metrics
    const analysis = analyzeSEO(html, parsedUrl);
    
    return new Response(JSON.stringify(analysis), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
    
  } catch (error) {
    return new Response(JSON.stringify({
      error: {
        code: 'ANALYSIS_ERROR',
        message: `SEO analysis failed: ${error.message}`
      }
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  }
});

function analyzeSEO(html: string, baseUrl: URL): SEOAnalysisResult {
  // Extract title
  const titleMatch = html.match(/<title[^>]*>([^<]*)<\/title>/i);
  const title = titleMatch ? titleMatch[1].trim() : 'No title found';
  
  // Extract meta description
  const metaDescMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["']/i);
  const metaDescription = metaDescMatch ? metaDescMatch[1].trim() : 'No meta description found';
  
  // Extract H1 tags
  const h1Match = html.match(/<h1[^>]*>([^<]*)<\/h1>/i);
  const h1 = h1Match ? h1Match[1].trim() : 'No H1 tag found';
  
  // Count links
  const allLinks = html.match(/<a[^>]*href=["']([^"']*)["']/gi) || [];
  const linkCount = {
    total: allLinks.length,
    internal: 0,
    external: 0
  };
  
  allLinks.forEach(link => {
    const hrefMatch = link.match(/href=["']([^"']*)["']/i);
    if (hrefMatch) {
      const href = hrefMatch[1];
      if (href.startsWith('http') && !href.includes(baseUrl.hostname)) {
        linkCount.external++;
      } else if (href.startsWith('/') || href.includes(baseUrl.hostname)) {
        linkCount.internal++;
      }
    }
  });
  
  // Analyze keyword density
  const textContent = html
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
    .replace(/<[^>]*>/g, ' ')
    .toLowerCase();
  
  const words = textContent
    .split(/\s+/)
    .filter(word => word.length > 3 && !/^\d+$/.test(word))
    .filter(word => !['this', 'that', 'with', 'have', 'will', 'from', 'they', 'know', 'want', 'been', 'good', 'much', 'some', 'time', 'very', 'when', 'come', 'here', 'just', 'like', 'long', 'make', 'many', 'over', 'such', 'take', 'than', 'them', 'well', 'your'].includes(word));
  
  const wordCount: Record<string, number> = {};
  words.forEach(word => {
    wordCount[word] = (wordCount[word] || 0) + 1;
  });
  
  const totalWords = words.length;
  const keywordDensity: Record<string, number> = {};
  
  // Get top 10 keywords
  const sortedWords = Object.entries(wordCount)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 10);
  
  sortedWords.forEach(([word, count]) => {
    keywordDensity[word] = Math.round((count / totalWords) * 100 * 100) / 100;
  });
  
  // Calculate performance score (based on various factors)
  let pageSpeed = 75; // Base score
  
  // Penalize for missing elements
  if (title === 'No title found') pageSpeed -= 10;
  if (metaDescription === 'No meta description found') pageSpeed -= 10;
  if (h1 === 'No H1 tag found') pageSpeed -= 10;
  if (linkCount.total === 0) pageSpeed -= 5;
  
  // Bonus for good practices
  if (title.length > 30 && title.length < 60) pageSpeed += 5;
  if (metaDescription.length > 120 && metaDescription.length < 160) pageSpeed += 5;
  if (linkCount.internal > linkCount.external) pageSpeed += 5;
  
  // Ensure score is between 0 and 100
  pageSpeed = Math.max(0, Math.min(100, pageSpeed));
  
  // Check mobile friendliness (basic viewport check)
  const mobileFriendly = html.includes('viewport') && html.includes('width=device-width');
  
  return {
    title,
    metaDescription,
    h1,
    linkCount,
    keywordDensity,
    pageSpeed,
    mobileFriendly
  };
}