import React from 'react';
import { Link } from 'react-router-dom';
import RegularDashboard from '../RegularDashboard';
import SEOContent from '../components/SEOContent';

const Home = () => {
    return (
        <RegularDashboard>
            {/* Hero Section */}
            <div className="text-center bg-gradient-to-r from-gray-900 via-indigo-900 to-gray-900 text-white py-20 px-4 rounded-xl shadow-2xl relative overflow-hidden mb-12">
                {/* Decorative Metallic Circles */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-500 rounded-full mix-blend-overlay filter blur-3xl opacity-10 animate-pulse"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-gray-400 rounded-full mix-blend-overlay filter blur-3xl opacity-10 animate-pulse"></div>

                <div className="relative z-10">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-200">
                            Gold & Silver
                        </span><br />
                        Refining Calculator
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10">
                        The professional standard for purity adjustment, alloying, and melting calculations.
                        Trusted by jewelers and refiners worldwide.
                    </p>

                    <Link to="/calculator" className="inline-block">
                        <button className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-600 text-white text-lg font-bold rounded-lg shadow-lg hover:shadow-yellow-500/50 transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-3">
                            🚀 Open Calculator
                        </button>
                    </Link>

                    <div className="mt-10 flex flex-wrap justify-center gap-4 opacity-70">
                        <span className="px-4 py-1 rounded-full bg-white/10 border border-white/20 text-sm">✓ 100% Free</span>
                        <span className="px-4 py-1 rounded-full bg-white/10 border border-white/20 text-sm">✓ No Signup</span>
                        <span className="px-4 py-1 rounded-full bg-white/10 border border-white/20 text-sm">✓ Mobile Ready</span>
                    </div>
                </div>
            </div>

            {/* Feature Grid (More Content) */}
            <section className="mb-20">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">Precision Engineering for Precious Metals</h2>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        Our toolset is designed to meet the rigorous standards of modern hallmarking labs, ensuring your ratios are perfect every time you melt.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-indigo-500 hover:shadow-lg transition-shadow">
                        <div className="text-4xl mb-4">🎯</div>
                        <h3 className="text-xl font-bold mb-2">Atomic Accuracy</h3>
                        <p className="text-gray-600">
                            We use industrial-grade algorithms to calculate the exact composition of your alloys, minimizing the risk of expensive refining errors and hallmark rejection.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-yellow-500 hover:shadow-lg transition-shadow">
                        <div className="text-4xl mb-4">⚡</div>
                        <h3 className="text-xl font-bold mb-2">Refining Workflow</h3>
                        <p className="text-gray-600">
                            No secondary software needed. From scrap analysis to final alloy adjustment, our dashboard handles the entire math workflow in real-time.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-green-500 hover:shadow-lg transition-shadow">
                        <div className="text-4xl mb-4">🔒</div>
                        <h3 className="text-xl font-bold mb-2">Privacy First</h3>
                        <p className="text-gray-600">
                            Your proprietary formulas and batch data stay in your browser. We never transmit your sensitive trade calculations to any server.
                        </p>
                    </div>
                </div>
            </section>

            {/* Educational Section (New) */}
            <section className="mb-20 bg-gray-50 -mx-4 md:-mx-6 px-4 md:px-12 py-16 rounded-3xl border border-gray-100">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Expertise Beyond the Numbers</h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Successful refining isn't just about the math—it's about understanding the properties of the metals you work with. Explore our extensive library of guides to master your craft.
                        </p>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-center gap-3 text-gray-700">
                                <span className="text-green-500">✓</span> 
                                Learn about melting loss and recovery strategies.
                            </li>
                            <li className="flex items-center gap-3 text-gray-700">
                                <span className="text-green-500">✓</span> 
                                Master purity adjustment for various hallmarking standards.
                            </li>
                            <li className="flex items-center gap-3 text-gray-700">
                                <span className="text-green-500">✓</span> 
                                Understand the role of trace minerals in alloy durability.
                            </li>
                        </ul>
                        <Link to="/guides">
                            <button className="px-8 py-3 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition-colors shadow-lg">
                                Explore Knowledge Base
                            </button>
                        </Link>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                            <h4 className="font-bold text-indigo-600 text-sm mb-2 uppercase italic">Hallmarking</h4>
                            <p className="text-xs text-gray-500">A guide to worldwide silver purity standards.</p>
                        </div>
                        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                            <h4 className="font-bold text-yellow-600 text-sm mb-2 uppercase italic">Alloying</h4>
                            <p className="text-xs text-gray-500">The science of mixing copper and pure gold.</p>
                        </div>
                        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                            <h4 className="font-bold text-orange-600 text-sm mb-2 uppercase italic">Refining</h4>
                            <p className="text-xs text-gray-500">Calculating your yield after chemical cleaning.</p>
                        </div>
                        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                            <h4 className="font-bold text-green-600 text-sm mb-2 uppercase italic">Loss Math</h4>
                            <p className="text-xs text-gray-500">Accounting for burn-off in the crucible.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Guides and FAQs */}
            <SEOContent />

            {/* Bottom CTA */}
            <div className="mt-20 text-center bg-gray-900 rounded-2xl p-12 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-indigo-600 opacity-10 animate-pulse"></div>
                <div className="relative z-10">
                    <h2 className="text-3xl font-bold mb-4">Start Calculating Today</h2>
                    <p className="mb-10 text-gray-400 max-w-xl mx-auto">The professional toolset for jewelers, refiners, and hallmarking specialists. Precise, free, and private.</p>
                    <Link to="/calculator">
                        <button className="px-10 py-4 bg-white text-indigo-900 font-extrabold rounded-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                            Launch Calculator Dashboard
                        </button>
                    </Link>
                </div>
            </div>
        </RegularDashboard>
    );
};

export default Home;
