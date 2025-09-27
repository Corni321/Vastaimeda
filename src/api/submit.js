// YOUR GHL WEBHOOK URL
const GHL_WEBHOOK_URL = 'https://services.leadconnectorhq.com/hooks/48xHGfcxw0K8oxZnHyRU/webhook-trigger/afc57720-8cf5-47a5-9e52-4e121b971331';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    // Attempt to parse the body as JSON (your original React approach)
    let formData = req.body;

    // The server makes the call to GHL, bypassing the browser's CORS/DNS block
    const ghlResponse = await fetch(GHL_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        // GHL Webhooks often prefer form-urlencoded data from server proxies
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      // Convert the JSON body back to URL-encoded form data
      body: new URLSearchParams(formData).toString(),
    });

    if (ghlResponse.ok) {
      return res.status(200).json({ message: 'Success! Data sent to GHL.' });
    } else {
      // Forward the error status from GHL back to the client
      const errorText = await ghlResponse.text();
      return res.status(ghlResponse.status).json({ message: 'GHL rejected the submission.', details: errorText });
    }
  } catch (error) {
    console.error('Proxy Error:', error);
    return res.status(500).json({ message: 'Serverless function failed.', error: error.message });
  }
}
