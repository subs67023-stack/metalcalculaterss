import React from 'react';
import RegularDashboard from '../RegularDashboard';

const About = () => {
    return (
        <RegularDashboard>
            <div className="max-w-4xl mx-auto space-y-12 pb-20">
                {/* Hero Section */}
                <section className="bg-gradient-to-br from-indigo-900 to-slate-900 text-white p-8 md:p-16 rounded-3xl shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400 rounded-full blur-[120px] opacity-10 -mr-48 -mt-48"></div>
                    <div className="relative z-10">
                        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Expertise in Every Batch</h1>
                        <p className="text-lg md:text-xl text-indigo-100 max-w-2xl leading-relaxed">
                            Metal Calculator was founded to bridge the gap between traditional craftsmanship and modern digital precision. We provide the tools hallmarking specialists and refiners need to scale their operations with confidence.
                        </p>
                    </div>
                </section>

                {/* Structured Content */}
                <div className="grid md:grid-cols-3 gap-8 px-4">
                    <div className="md:col-span-2 space-y-8">
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-indigo-100 pb-2">Our Mathematical Philosophy</h2>
                            <p className="text-gray-700 leading-relaxed">
                                In the precious metal industry, a discrepancy of even 0.1% in purity can result in significant financial loss or the rejection of an entire batch by hallmarking centers. That's why our algorithms follow international ISO standards for mass calculation. We account for batch variance, moisture in scrap (conceptual), and the specific gravity challenges inherent in alloying pure silver with copper and zinc.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-indigo-100 pb-2">Why We Choose Client-Side Computing</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Most online calculators send your data to a remote server. We believe your trade secrets should stay yours. By building our tools to run entirely within your browser (Client-Side), we ensure:
                            </p>
                            <ul className="grid sm:grid-cols-2 gap-4">
                                <li className="bg-indigo-50 p-4 rounded-xl border border-indigo-100">
                                    <strong className="block text-indigo-900">Privacy</strong>
                                    <span className="text-sm text-indigo-700">No batch data ever leaves your device or touches our database.</span>
                                </li>
                                <li className="bg-indigo-50 p-4 rounded-xl border border-indigo-100">
                                    <strong className="block text-indigo-900">Speed</strong>
                                    <span className="text-sm text-indigo-700">Calculations happen instantly, even with weak or no internet connection.</span>
                                </li>
                            </ul>
                        </section>

                        <section className="bg-gray-900 text-white p-8 rounded-2xl shadow-lg">
                            <h2 className="text-2xl font-bold mb-4 text-yellow-400">The 925 Standard</h2>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Our most popular feature, the Multi-Batch Silver Adjuster, is specifically calibrated for 'Sterling Silver' production. Whether you are starting with pure 999 silver or recycling 800-grade scrap, our tools guide you through the exact addition of copper to meet the legal 92.5% threshold used worldwide.
                            </p>
                        </section>
                    </div>

                    <aside className="space-y-6">
                        <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
                            <h3 className="font-bold text-gray-900 mb-4">Key Statistics</h3>
                            <div className="space-y-4">
                                <div>
                                    <div className="text-3xl font-extrabold text-indigo-600">99.9%</div>
                                    <div className="text-xs text-gray-500 uppercase font-bold tracking-widest">Calculation Accuracy</div>
                                </div>
                                <hr />
                                <div>
                                    <div className="text-3xl font-extrabold text-indigo-600">ZERO</div>
                                    <div className="text-xs text-gray-500 uppercase font-bold tracking-widest">Data Retention</div>
                                </div>
                                <hr />
                                <div>
                                    <div className="text-3xl font-extrabold text-indigo-600">4+</div>
                                    <div className="text-xs text-gray-500 uppercase font-bold tracking-widest">Refining Modules</div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-yellow-50 p-6 rounded-2xl shadow-sm border border-yellow-200">
                            <h3 className="font-bold text-yellow-800 mb-2 italic text-sm">Pro Tip:</h3>
                            <p className="text-yellow-700 text-xs leading-relaxed">
                                Always perform a 'Trial Melt' when working with unrecognized scrap before using large-scale batch calculations to verify the initial purity.
                            </p>
                        </div>
                    </aside>
                </div>
            </div>
        </RegularDashboard>
    );
};

export default About;
