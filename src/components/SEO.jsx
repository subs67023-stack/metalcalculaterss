import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const SEO = ({ 
    title = 'Metal Calculator - Gold & Silver Purity Calculator', 
    description = 'Free online metal calculator for jewelers and refiners. Calculate silver and gold melting ratios, purity adjustments, and fine weights accurately.',
    keywords = 'metal calculator, silver calculator, gold melting, purity calculator, hallmarking, jewelry software, सोने कॅल्क्युलेटर, चांदी कॅल्क्युलेटर, Tunch calculator, BIS hallmark',
    canonical
}) => {
    const location = useLocation();
    const siteUrl = 'https://www.dhbjcnd123.in';
    const currentUrl = `${siteUrl}${location.pathname}`;
    const finalCanonical = canonical || currentUrl;

    return (
        <Helmet>
            {/* Standard metadata tags */}
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <link rel="canonical" href={finalCanonical} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={finalCanonical} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={`${siteUrl}/logo.svg`} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={finalCanonical} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={`${siteUrl}/logo.svg`} />

            {/* Robots */}
            <meta name="robots" content="index, follow" />
        </Helmet>
    );
};

export default SEO;
