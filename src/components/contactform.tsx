import React, { useState } from 'react';

// A utility function to convert your JSON state into URL-encoded form data
const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    // NOTE: The webhook must be mapped for these keys: name, email, message
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    // YOUR CORRECT GHL WEBHOOK URL
    const ghvFormUrl = 'https://services.leadconnectorhq.com/hooks/48xHGfcxw0K8oxZnHyRU/webhook-trigger/afc57720-8cf5-47a5-9e52-4e121b971331';

    try {
      const response = await fetch(ghvFormUrl, {
        method: 'POST',
        headers: {
          // CHANGED: Send data as Form Data (URL-encoded)
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        // CHANGED: Encode the form data into a URL-encoded string
        body: encode(formData), 
      });

      if (response.ok) {
        setStatus('Success! Your message has been sent.');
        setFormData({ name: '', email: '', message: '' }); // Reset form
      } else {
          // If the status is NOT okay (e.g., 400), log the response for debugging
          console.error('Submission failed with status:', response.status);
          const errorText = await response.text();
          console.error('Error details:', errorText);
        setStatus('Error! Submission rejected by GHL. Check Dev Tools Console.');
      }
    } catch (error) {
      console.error('Network Error:', error);
      setStatus('Error! Failed to connect to the server. Check network connection.');
    }
  };

  return (
    <div className="max-w-xl mx-auto p-8 bg-white shadow-lg rounded-xl">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors"
          >
            {status || 'Submit'}
          </button>
        </div>
      </form>
      {status && (
        <p className={`mt-4 text-center ${status.includes('Error') ? 'text-red-500' : 'text-green-500'}`}>
          {status}
        </p>
      )}
    </div>
  );
};

export default ContactForm;
