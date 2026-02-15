import React from 'react';
import RegularDashboard from '../RegularDashboard';

const Terms = () => {
    return (
        <RegularDashboard>
            <div className="max-w-4xl mx-auto bg-white p-4 md:p-8 rounded-lg shadow">
                <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>

                <h2 className="text-xl font-semibold mb-3">1. Acceptance of Terms</h2>
                <p className="mb-4">
                    By accessing and using this Metal Calculator, you accept and agree to be bound by the terms and provision of this agreement.
                </p>

                <h2 className="text-xl font-semibold mb-3">2. Use License</h2>
                <p className="mb-4">
                    Permission is granted to temporarily use this website for personal, non-commercial transitory viewing only.
                </p>

                <h2 className="text-xl font-semibold mb-3">3. Disclaimer</h2>
                <p className="mb-4">
                    The materials on this website are provided "as is". We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties.
                    This calculator is a tool for estimation. We are not responsible for financial losses incurred from using these calculations. Always verify with professional assaying methods.
                </p>

                <h2 className="text-xl font-semibold mb-3">4. Limitation of Liability</h2>
                <p className="mb-4">
                    In no event shall DHBJ CND or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on this website.
                </p>

                <h2 className="text-xl font-semibold mb-3">5. Accuracy of Materials</h2>
                <p className="mb-4">
                    The materials appearing on the website could include technical, typographical, or photographic errors. We do not warrant that any of the materials on its website are accurate, complete, or current.
                </p>

                <h2 className="text-xl font-semibold mb-3">6. Modifications</h2>
                <p className="mb-4">
                    We may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
                </p>

                <h2 className="text-xl font-semibold mb-3">7. Contact Us</h2>
                <p className="mb-4">
                    If you have any questions about these Terms, please contact us at support@dhbjcnd123.in.
                </p>
            </div>
        </RegularDashboard>
    );
};

export default Terms;
