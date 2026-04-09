import React from 'react';
import { Link } from 'react-router-dom';
import RegularDashboard from '../RegularDashboard';
import SEO from '../components/SEO';
import { articles } from '../data/articles';

const Guides = () => {
    return (
        <RegularDashboard>
            <SEO 
                title="Jewelry Refining Guides & Learning Center"
                description="Expert guides on silver and gold refining, hallmarking standards, and alloy mixing. Master the craft of precious metal chemistry with our professional resources."
            />
            <div className="max-w-5xl mx-auto px-4 py-12">
                <header className="mb-12 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                        Refining <span className="text-indigo-600">Knowledge Base</span>
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Deepen your understanding of precious metals with our professional guides and educational resources.
                    </p>
                </header>

                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    {articles.map((article, index) => (
                        <Link key={index} to={`/guides/${article.id}`} className="block group">
                            <article className="bg-white h-full rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 group-hover:-translate-y-1">
                                <div className="p-8">
                                    <span className="inline-block px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-4 border border-indigo-200">
                                        {article.tag}
                                    </span>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors">
                                        {article.title}
                                    </h2>
                                    <p className="text-gray-600 leading-relaxed line-clamp-3">
                                        {article.content.split('\n\n')[0]}
                                    </p>
                                    <div className="mt-8 flex items-center justify-between">
                                        <div className="flex items-center text-sm font-semibold text-indigo-600">
                                            Read More <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                                        </div>
                                        <div className="text-xs text-gray-400">
                                            {article.date}
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>

                <section className="bg-gradient-to-br from-indigo-900 via-slate-900 to-indigo-950 rounded-3xl p-8 md:p-16 text-white relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400 rounded-full blur-[120px] opacity-10 -mr-48 -mt-48"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500 rounded-full blur-[100px] opacity-10 -ml-32 -mb-32"></div>

                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold mb-8 text-yellow-400 flex items-center gap-3">
                            <span className="text-4xl text-white">📊</span> Standard Purity Reference Table
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-md border border-white/20 hover:bg-white/20 transition-colors">
                                <div className="text-3xl font-bold mb-1">925</div>
                                <div className="text-xs text-indigo-300 uppercase font-bold tracking-widest">Sterling</div>
                            </div>
                            <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-md border border-white/20 hover:bg-white/20 transition-colors">
                                <div className="text-3xl font-bold mb-1">750</div>
                                <div className="text-xs text-indigo-300 uppercase font-bold tracking-widest">18K Gold</div>
                            </div>
                            <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-md border border-white/20 hover:bg-white/20 transition-colors">
                                <div className="text-3xl font-bold mb-1">585</div>
                                <div className="text-xs text-indigo-300 uppercase font-bold tracking-widest">14K Gold</div>
                            </div>
                            <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-md border border-white/20 hover:bg-white/20 transition-colors">
                                <div className="text-3xl font-bold mb-1">800</div>
                                <div className="text-xs text-indigo-300 uppercase font-bold tracking-widest">Coin Silver</div>
                            </div>
                        </div>

                        <div className="mt-12 flex flex-col md:flex-row gap-6 items-center justify-between border-t border-white/10 pt-8">
                            <p className="text-indigo-200 text-sm max-w-md">
                                Need more detailed legal requirements? Check our international hallmarking guide for country-specific data.
                            </p>
                            <Link to="/hallmarking">
                                <button className="px-8 py-3 bg-yellow-500 text-gray-900 font-extrabold rounded-lg hover:bg-yellow-400 transition-colors shadow-lg">
                                    View Hallmarking Table
                                </button>
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </RegularDashboard>
    );
};

export default Guides;
