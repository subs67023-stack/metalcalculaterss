import React, { useEffect, useRef, useState } from 'react';

const AdsterraNativeAd = () => {
    const containerRef = useRef(null);
    const [refreshKey, setRefreshKey] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setRefreshKey((prev) => prev + 1);
        }, 20000); // Refresh every 20 seconds

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (!containerRef.current) return;

        // Clear container first
        containerRef.current.innerHTML = '';

        // Create the container div with the ID expected by the invoke script
        const adDiv = document.createElement('div');
        adDiv.id = 'container-b9b2a9a6f6688e5f74bea22aafdd1412';
        containerRef.current.appendChild(adDiv);

        // Create the script element
        const script = document.createElement('script');
        script.async = true;
        script.setAttribute('data-cfasync', 'false');
        script.src = `https://pl29575885.effectivecpmnetwork.com/b9b2a9a6f6688e5f74bea22aafdd1412/invoke.js?t=${Date.now()}`;
        
        containerRef.current.appendChild(script);
    }, [refreshKey]);

    return (
        <div className="my-6 p-4 bg-white rounded-xl shadow border border-gray-100 max-w-4xl mx-auto">
            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3 select-none">Sponsored Content</div>
            <div ref={containerRef} className="w-full min-h-[150px]" />
        </div>
    );
};

export default AdsterraNativeAd;
