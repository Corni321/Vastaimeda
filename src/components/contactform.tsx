import React from 'react';

// The GHL Embed Code will be placed inside this component's return function.
const ContactForm = () => {
    return (
        <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
            {/* Paste the GHL Embed Code here. 
               Note: Since you already pasted it in the file before, you might just need to wrap the existing iframe/script tags.
            */}
            
            <iframe 
                src="https://api.leadconnectorhq.com/widget/form/juDOmgwetCiwuhnXZRuo"
                style={{width: '100%', height: '919px', border: 'none', borderRadius: '3px'}}
                id="inline-juDOmgwetCiwuhnXZRuo"
                data-layout='{"id":"INLINE"}' 
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Web Contact Form" 
                data-height="919"
                data-layout-iframe-id="inline-juDOmgwetCiwuhnXZRuo"
                data-form-id="juDOmgwetCiwuhnXZRuo"
                title="Web Contact Form" 
            ></iframe>
            <script src="https://link.msgsndr.com/js/form_embed.js"></script>

        </div>
    );
};

export default ContactForm;
