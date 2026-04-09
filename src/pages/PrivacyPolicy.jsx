import React from 'react';
import RegularDashboard from '../RegularDashboard';
import SEO from '../components/SEO';

const PrivacyPolicy = () => {
    return (
        <RegularDashboard>
            <SEO 
                title="Privacy Policy - Metal Calculator"
                description="Our privacy policy details how we handle your data. We respect your privacy and do not store your professional refining calculations."
            />
            <div className="max-w-4xl mx-auto bg-white p-4 md:p-8 rounded-lg shadow">
                <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
                <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>

                <h2 className="text-xl font-semibold mb-3">1. Information We Collect</h2>
                <p className="mb-4">
                    We do not collect any personal information. This calculator runs entirely in your browser.
                    We use Google AdSense to serve ads, which may use cookies to personalize ads.
                </p>

                <h2 className="text-xl font-semibold mb-3">2. Cookies and Web Beacons</h2>
                <p className="mb-4">
                    Values processed by this tool are for estimation only.
                </p>
                <p className="mb-4">
                    We use Google AdSense to display ads. Google and its partners use cookies to serve ads to users based on their visit to this and other websites on the Internet.
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>
                        Third-party vendors, including Google, use cookies to serve ads based on a user's prior visits to this website or other websites.
                    </li>
                    <li>
                        Google's use of advertising cookies enables it and its partners to serve ads to your users based on their visit to your sites and/or other sites on the Internet.
                    </li>
                    <li>
                        Users may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google Ad Settings</a>. Alternatively, you can opt out of a third-party vendor's use of cookies for personalized advertising by visiting <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.aboutads.info</a>.
                    </li>
                </ul>

                <h2 className="text-xl font-semibold mb-3">3. Data Security</h2>
                <p className="mb-4">
                    Since we do not store any user inputs on our servers (the calculator is stateless), your data remains on your device.
                </p>

                <h2 className="text-xl font-semibold mb-3">4. Changes</h2>
                <p className="mb-4">
                    We may update this privacy policy from time to time.
                </p>
            </div>
        </RegularDashboard>
    );
};

export default PrivacyPolicy;
