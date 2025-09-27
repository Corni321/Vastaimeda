// YOUR GHL WEBHOOK URL
const GHL_WEBHOOK_URL = 'https://services.leadconnectorhq.com/hooks/48xHGfcxw0K8oxZnHyRU/webhook-trigger/afc57720-8cf5-47a5-9e52-4e121b971331';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  // CRITICAL FIX: Ensure the raw JSON body is read and parsed.
  // This step ensures the 'formData' object is correctly populated.
  let formData;
  try {
    formData = JSON.parse(req.body);
  } catch (e) {
    // If it's not JSON (unlikely here), use the raw body
    formData = req.body; 
  }

  try {
    // The server makes the call to GHL
    const ghlResponse = await fetch(GHL_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        // GHL Webhooks expect form-urlencoded from the server
        'Content-Type': 'application/x-www-form-urlencoded', 
      },
      // Convert the parsed JSON object back to a URL-encoded string
      body: new URLSearchParams(formData).toString(), 
    });

    if (ghlResponse.ok) {
      return res.status(200).json({ message: 'Success! Data sent to GHL.' });
    } else {
      console.error('GHL Rejection Status:', ghlResponse.status);
      const errorText = await ghlResponse.text();
      console.error('GHL Rejection Details:', errorText);
      return res.status(ghlResponse.status).json({ message: 'GHL rejected the submission.', details: errorText });
    }
  } catch (error) {
    console.error('Serverless Function Error (Check Vercel Logs):', error);
    return res.status(500).json({ message: 'Serverless function failed.', error: error.message });
  }
}
