import React from 'react';
import { Link } from 'react-router-dom';
import CookieBanner from './components/CookieBanner';
import VisitorCounter from './components/VisitorCounter';
import AdsterraAd from './components/AdsterraAd';
import AdsterraNativeAd from './components/AdsterraNativeAd';

const RegularDashboard = ({ children }) => {

    return (
        <div className="min-h-screen flex flex-col">
            <header className="bg-indigo-900 text-white p-4 shadow-md">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-xl font-bold flex items-center gap-2">
                        🧮 Metal Calculator
                    </h1>
                    <nav className="text-sm flex gap-4 items-center">
                        <a href="https://www.effectivecpmnetwork.com/tuyc0kp8m?key=f41723922d7f96442d682f28e1975432" target="_blank" rel="noopener noreferrer" className="text-yellow-300 font-extrabold hover:text-yellow-100 flex items-center gap-1 animate-pulse bg-yellow-500/10 px-2.5 py-1 rounded-full border border-yellow-500/20">
                            ⚡ Live Rates
                        </a>
                        <Link to="/guides" className="hover:text-indigo-200">Guides</Link>
                        <Link to="/glossary" className="hover:text-indigo-200">Glossary</Link>
                        <Link to="/hallmarking" className="hover:text-indigo-200">Standards</Link>
                        <Link to="/about" className="hover:text-indigo-200">About</Link>
                    </nav>
                </div>
            </header>

            {/* Adsterra Header Banner */}
            <div className="container mx-auto px-4 mt-4 -mb-2 flex justify-center">
                {/* Desktop/Tablet: 728x90 */}
                <AdsterraAd id="1502e85f36541ef19586e922c225017a" height={90} width={728} className="hidden md:flex" />
                {/* Mobile: 320x50 */}
                <AdsterraAd id="b6932deef24a89da4e1e09cf6feab947" height={50} width={320} className="md:hidden" />
            </div>

            {/* Live Spot Prices & Market Rates CTA Tracker (Optimized direct ad link) */}
            <div className="container mx-auto px-4 mt-6">
                <a 
                    href="https://www.effectivecpmnetwork.com/tuyc0kp8m?key=f41723922d7f96442d682f28e1975432" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block bg-gradient-to-r from-indigo-950 via-slate-900 to-indigo-950 border border-indigo-500/30 rounded-2xl p-5 hover:border-yellow-500/50 transition-all duration-300 shadow-xl group hover:shadow-indigo-500/10 cursor-pointer overflow-hidden relative text-left"
                >
                    {/* Metallic glow effects */}
                    <div className="absolute -right-10 -top-10 w-40 h-40 bg-yellow-500/10 rounded-full blur-3xl group-hover:bg-yellow-500/20 transition-all duration-300"></div>
                    <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl"></div>
                    
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10">
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="flex h-2.5 w-2.5 relative">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                                </span>
                                <span className="text-xs font-bold text-emerald-400 tracking-wider uppercase">Live Market Rates</span>
                            </div>
                            <h3 className="text-lg font-bold text-white mb-1 group-hover:text-yellow-300 transition-colors">
                                Gold & Silver Spot Price Feed 📈
                            </h3>
                            <p className="text-gray-400 text-sm">
                                Check today's real-time Indian and international gold/silver prices, live MCX charts, and official BIS hallmarked karat rates.
                            </p>
                        </div>
                        
                        <div className="flex flex-wrap items-center gap-4 border-t border-gray-800 pt-4 md:border-t-0 md:pt-0">
                            <div className="bg-gray-800/40 border border-gray-700/50 rounded-xl px-4 py-2 text-center">
                                <div className="text-[10px] text-gray-400 font-medium">Gold 24K (g)</div>
                                <div className="text-sm font-bold text-yellow-400">₹7,245.50 <span className="text-[10px] text-emerald-400 font-semibold">+0.42%</span></div>
                            </div>
                            <div className="bg-gray-800/40 border border-gray-700/50 rounded-xl px-4 py-2 text-center">
                                <div className="text-[10px] text-gray-400 font-medium">Silver 999 (kg)</div>
                                <div className="text-sm font-bold text-gray-300">₹88,420.00 <span className="text-[10px] text-red-400 font-semibold">-0.15%</span></div>
                            </div>
                            <div className="inline-flex items-center justify-center px-5 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-gray-950 text-sm font-extrabold rounded-xl shadow-lg transition-colors gap-2">
                                Check Live Prices ⚡
                            </div>
                        </div>
                    </div>
                </a>
            </div>

            {/* Flex container for content and skyscraper ads */}
            <div className="flex-grow container mx-auto flex flex-col lg:flex-row gap-6">
                {/* Left Skyscraper: 160x600 (Script 5) */}
                <div className="hidden lg:block w-[160px] shrink-0 mt-6">
                    <div className="sticky top-6">
                        <AdsterraAd id="35b310db9584a296462dae8ae6a813b4" height={600} width={160} />
                    </div>
                </div>

                {/* Main content */}
                <main className="flex-grow min-w-0 p-4 md:p-6">
                    {children}
                </main>

                {/* Right Skyscraper: 160x300 (Script 4) */}
                <div className="hidden lg:block w-[160px] shrink-0 mt-6">
                    <div className="sticky top-6">
                        <AdsterraAd id="7bc6877b3e8041f1462afcc3501a0b67" height={300} width={160} />
                    </div>
                </div>
            </div>

            {/* Optimized Adsterra Banner (Responsive replacement for Google Ads) */}
            <div className="container mx-auto px-4 mb-4 flex justify-center">
                {/* Desktop: 728x90 */}
                <AdsterraAd id="1502e85f36541ef19586e922c225017a" height={90} width={728} className="hidden md:flex" />
                {/* Tablet: 468x60 */}
                <AdsterraAd id="540983f70f90655fe96afc3aeb1c1f0c" height={60} width={468} className="hidden sm:flex md:hidden" />
                {/* Mobile: 300x250 */}
                <AdsterraAd id="4249f1d0e44db2160f85c5190d349ad7" height={250} width={300} className="sm:hidden" />
            </div>

            {/* Adsterra Native Ad */}
            <div className="container mx-auto px-4 mb-4">
                <AdsterraNativeAd />
            </div>

            {/* Adsterra Bottom Half-Banner */}
            <div className="container mx-auto px-4 mb-6 flex justify-center">
                {/* Desktop/Tablet: 468x60 */}
                <AdsterraAd id="540983f70f90655fe96afc3aeb1c1f0c" height={60} width={468} className="hidden sm:flex" />
                {/* Mobile: 320x50 */}
                <AdsterraAd id="b6932deef24a89da4e1e09cf6feab947" height={50} width={320} className="sm:hidden" />
            </div>

            <footer className="bg-gray-800 text-gray-300 py-6 mt-8">
                <div className="container mx-auto px-4 text-center">
                    <p className="mb-4 text-sm">
                        Disclaimer: This tool is for estimation purposes only. Always verify with professional assaying.
                    </p>
                    <div className="flex justify-center gap-6 text-sm flex-wrap">
                        <Link to="/" className="hover:text-white">Home</Link>
                        <Link to="/calculator" className="hover:text-white">Calculator</Link>
                        <Link to="/guides" className="hover:text-white">Guides</Link>
                        <Link to="/glossary" className="hover:text-white">Glossary</Link>
                        <Link to="/hallmarking" className="hover:text-white">Hallmarking Standards</Link>
                        <Link to="/about" className="hover:text-white">About Us</Link>
                        <Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
                        <Link to="/terms" className="hover:text-white">Terms of Service</Link>
                        <Link to="/contact" className="hover:text-white">Contact Us</Link>
                    </div>
                    <p className="mt-4 text-xs text-gray-500">© {new Date().getFullYear()} Metal Calculator. All rights reserved.</p>
                    <VisitorCounter />
                </div>
            </footer>
            <CookieBanner />
        </div >
    );
};

export default RegularDashboard;
