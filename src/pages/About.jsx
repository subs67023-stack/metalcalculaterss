import React from 'react';
import RegularDashboard from '../RegularDashboard';
import SEO from '../components/SEO';

const About = () => {
    return (
        <RegularDashboard>
            <SEO 
                title="About Us - Supporting the Indian Jewelry Community"
                description="Our mission is to bring transparency and mathematical precision to silver and gold refining across India. 100% free tool for jewelers."
            />
            <div className="max-w-4xl mx-auto space-y-12 pb-20">
                {/* Personal Mission Header */}
                <div className="text-center space-y-4">
                    <div className="inline-block px-4 py-1 rounded-full bg-yellow-100 text-yellow-800 text-sm font-bold uppercase tracking-wider mb-2">
                        Independent Developer Project
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                        Built for the Indian <br />
                        <span className="text-indigo-600">Jewelry Community</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        A personal initiative to bring transparency and mathematical precision 
                        to silver and gold refining across India.
                    </p>
                </div>

                {/* The "Why" Section */}
                <div className="grid md:grid-cols-2 gap-12 items-center bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-gray-800">Why I Built This</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Gold and silver refining is a craft that relies on extreme accuracy. In many Indian jewelry hubs, calculations are still done manually, leading to "Tunch" errors and melting losses that can cost small business owners thousands of rupees.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            This tool is my personal contribution to the trade. It's designed to be fast, free, and accessible to every jeweler from Mumbai to Rajkot, and from Chennai to Amritsar.
                        </p>
                        <div className="flex gap-4 pt-4">
                            <div className="bg-indigo-50 p-4 rounded-lg">
                                <span className="block text-2xl font-bold text-indigo-700">100%</span>
                                <span className="text-xs text-indigo-600 font-medium uppercase">Free Service</span>
                            </div>
                            <div className="bg-yellow-50 p-4 rounded-lg">
                                <span className="block text-2xl font-bold text-yellow-700">Zero</span>
                                <span className="text-xs text-yellow-600 font-medium uppercase">Data Storage</span>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 bg-indigo-600 rounded-2xl rotate-3 opacity-10"></div>
                        <div className="relative bg-gray-900 text-white p-8 rounded-2xl shadow-2xl space-y-4">
                            <h3 className="font-bold text-xl text-yellow-400">Project Values</h3>
                            <ul className="space-y-3 text-gray-300">
                                <li className="flex items-start gap-2">
                                    <span className="text-green-400">✓</span>
                                    <span><strong>Accuracy:</strong> No rounding errors.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-400">✓</span>
                                    <span><strong>Privacy:</strong> Your "Mel" data stays on your phone.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-400">✓</span>
                                    <span><strong>Simplicity:</strong> Works regardless of internet speed.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Indian Context Support */}
                <div className="bg-gray-50 rounded-2xl p-8 md:p-12 text-center">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Supporting Local Languages</h2>
                    <p className="text-gray-600 max-w-xl mx-auto mb-8">
                        We believe technology should speak your language. This project is optimized for English, Hindi, and Marathi speaking users to ensure no jeweler is left behind.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <span className="px-6 py-2 bg-white border border-gray-200 rounded-full font-medium shadow-sm">English</span>
                        <span className="px-6 py-2 bg-white border border-gray-200 rounded-full font-medium shadow-sm">हिंदी</span>
                        <span className="px-6 py-2 bg-white border border-gray-200 rounded-full font-medium shadow-sm">मराठी</span>
                    </div>
                </div>

                {/* Contact CTA */}
                <div className="border-t border-gray-200 pt-12 text-center">
                    <p className="text-gray-500 italic mb-4">
                        "Precision in refining is the foundation of trust in jewelry."
                    </p>
                    <a href="/contact" className="text-indigo-600 font-bold hover:underline">
                        Have suggestions or found a bug? Get in touch →
                    </a>
                </div>
            </div>
        </RegularDashboard>
    );
};

export default About;
