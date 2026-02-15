import React from 'react';
import RegularDashboard from '../RegularDashboard';

const Contact = () => {
    return (
        <RegularDashboard>
            <div className="max-w-4xl mx-auto bg-white p-4 md:p-8 rounded-lg shadow">
                <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

                <p className="mb-6">
                    We value your feedback and inquiries. If you have any suggestions, questions about our calculator, or need support, please don't hesitate to reach out.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-100">
                        <h2 className="text-lg font-semibold mb-2 text-indigo-900">General Support</h2>
                        <p className="mb-4 text-gray-700">For help with the calculator or to report issues:</p>
                        <a href="mailto:support@dhbjcnd123.in" className="text-indigo-600 font-medium hover:underline text-lg">
                            support@dhbjcnd123.in
                        </a>
                        <p className="text-sm text-gray-500 mt-2">
                            We aim to respond within 24-48 hours.
                        </p>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                        <h2 className="text-lg font-semibold mb-2 text-gray-900">Business & Advertising</h2>
                        <p className="mb-4 text-gray-700">For partnership or advertising opportunities:</p>
                        <a href="mailto:ads@dhbjcnd123.in" className="text-indigo-600 font-medium hover:underline">
                            ads@dhbjcnd123.in
                        </a>
                    </div>
                </div>

                <div className="mt-8 pt-6 border-t">
                    <h2 className="text-xl font-semibold mb-3">Mailing Address</h2>
                    <p className="text-gray-600">
                        DHBJ CND Operations<br />
                        (Digital Only - No Physical Office Visiting Hours)
                    </p>
                </div>
            </div>
        </RegularDashboard>
    );
};

export default Contact;
