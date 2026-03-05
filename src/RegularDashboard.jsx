import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import CookieBanner from './components/CookieBanner';
import VisitorCounter from './components/VisitorCounter';

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
                    <nav className="text-sm">
                        <Link to="/about" className="hover:text-indigo-200">About</Link>
                    </nav>
                </div>
            </header>

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

            <main className="flex-grow container mx-auto p-4 md:p-6">
                {children}
            </main>

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

            <footer className="bg-gray-800 text-gray-300 py-6 mt-8">
                <div className="container mx-auto px-4 text-center">
                    <p className="mb-4 text-sm">
                        Disclaimer: This tool is for estimation purposes only. Always verify with professional assaying.
                    </p>
                    <div className="flex justify-center gap-6 text-sm flex-wrap">
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
