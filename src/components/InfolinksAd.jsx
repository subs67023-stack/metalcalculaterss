import React from 'react';

const InfolinksAd = ({ id = 'infolinks-slot', height, width, className = '' }) => {
    // Infolinks ads are typically loaded via the main script in index.html,
    // but this component provides a dedicated, styled container for manual/custom placement
    // matching the layout and design of the Adsterra containers.
    return (
        <div className={`flex flex-col items-center justify-center my-4 overflow-hidden ${className}`}>
            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1 select-none">Sponsored</div>
            <div
                id={id}
                style={{
                    width: width ? `${width}px` : '100%',
                    height: height ? `${height}px` : 'auto',
                    minHeight: height ? `${height}px` : '90px'
                }}
                className="bg-indigo-50/30 border border-dashed border-indigo-200/50 rounded-xl flex flex-col items-center justify-center text-xs text-indigo-400 font-semibold p-4 text-center max-w-full"
            >
                <span className="opacity-80">Infolinks Ad Placement</span>
                {width && height && (
                    <span className="text-[10px] opacity-65 mt-0.5">{width}x{height}</span>
                )}
            </div>
        </div>
    );
};

export default InfolinksAd;
