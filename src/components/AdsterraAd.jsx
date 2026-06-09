import React, { useState, useEffect } from 'react';

const AdsterraAd = ({ id, height, width, className = '' }) => {
    const [refreshKey, setRefreshKey] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setRefreshKey((prev) => prev + 1);
        }, 20000); // Refresh every 20 seconds

        return () => clearInterval(interval);
    }, []);

    const srcDoc = `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <style>
                body {
                    margin: 0;
                    padding: 0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    overflow: hidden;
                    background-color: transparent;
                }
            </style>
        </head>
        <body>
            <script type="text/javascript">
                atOptions = {
                    'key' : '${id}',
                    'format' : 'iframe',
                    'height' : ${height},
                    'width' : ${width},
                    'params' : {}
                };
            </script>
            <script type="text/javascript" src="https://www.highperformanceformat.com/${id}/invoke.js"></script>
        </body>
        </html>
    `;

    return (
        <div className={`flex flex-col items-center justify-center my-4 overflow-hidden ${className}`}>
            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1 select-none">Sponsored</div>
            <iframe
                key={refreshKey}
                title={`ad-${id}-${refreshKey}`}
                srcDoc={srcDoc}
                width={width}
                height={height}
                style={{ border: 'none', overflow: 'hidden' }}
                scrolling="no"
                frameBorder="0"
            />
        </div>
    );
};

export default AdsterraAd;
