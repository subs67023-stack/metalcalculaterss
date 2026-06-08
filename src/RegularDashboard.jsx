import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import CookieBanner from './components/CookieBanner';
import VisitorCounter from './components/VisitorCounter';
import AdsterraAd from './components/AdsterraAd';
import AdsterraNativeAd from './components/AdsterraNativeAd';

const RegularDashboard = ({ children }) => {
    const location = useLocation();

    useEffect(() => {
        // Initialize AdSense on every page change
        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
            console.error('AdSense initialization failed', e);
        }
    }, [location]);

    return (
        <div className="min-h-screen flex flex-col">
            <header className="bg-indigo-900 text-white p-4 shadow-md">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-xl font-bold flex items-center gap-2">
                        🧮 Metal Calculator
                    </h1>
                    <nav className="text-sm flex gap-4">
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

            {/* Top Horizontal Ad Banner */}
            <div className="container mx-auto px-4 mt-6 -mb-2">
                <div className="bg-gray-100/50 border-2 border-dashed border-gray-200 rounded-xl p-4 min-h-[100px] flex flex-col items-center justify-center">
                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Advertisement</div>
                    <ins className="adsbygoogle"
                        style={{ display: 'block', textAlign: 'center' }}
                        data-ad-layout="in-article"
                        data-ad-format="fluid"
                        data-ad-client="ca-pub-7859878761724621"
                        data-ad-slot="3932591555"></ins>
                </div>
            </div>

            {/* Flex container for content and skyscraper ads */}
            <div className="flex-grow container mx-auto flex flex-col xl:flex-row gap-6">
                {/* Left Skyscraper: 160x600 (Script 5) */}
                <div className="hidden xl:block w-[160px] shrink-0 mt-6">
                    <div className="sticky top-6">
                        <AdsterraAd id="35b310db9584a296462dae8ae6a813b4" height={600} width={160} />
                    </div>
                </div>

                {/* Main content */}
                <main className="flex-grow min-w-0 p-4 md:p-6">
                    {children}
                </main>

                {/* Right Skyscraper: 160x300 (Script 4) */}
                <div className="hidden xl:block w-[160px] shrink-0 mt-6">
                    <div className="sticky top-6">
                        <AdsterraAd id="7bc6877b3e8041f1462afcc3501a0b67" height={300} width={160} />
                    </div>
                </div>
            </div>

            {/* Manual Horizontal Ad Banner */}
            <div className="container mx-auto px-4 mb-4">
                <div className="bg-gray-100/50 border-2 border-dashed border-gray-200 rounded-xl p-4 min-h-[100px] flex flex-col items-center justify-center">
                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Advertisement</div>
                    <ins className="adsbygoogle"
                        style={{ display: 'block', textAlign: 'center' }}
                        data-ad-layout="in-article"
                        data-ad-format="fluid"
                        data-ad-client="ca-pub-7859878761724621"
                        data-ad-slot="3932591555"></ins>
                </div>
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
