import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const SEO = ({ 
    title = 'Metal Calculator - Gold & Silver Purity Calculator', 
    description = 'Free online metal calculator for jewelers and refiners. Calculate silver and gold melting ratios, purity adjustments, and fine weights accurately.',
    keywords = 'metal calculator, silver calculator, gold melting, purity calculator, hallmarking, jewelry software, सोने कॅल्क्युलेटर, चांदी कॅल्क्युलेटर, Tunch calculator, BIS hallmark',
    canonical,
    type = 'WebPage',
    datePublished,
    dateModified,
}) => {
    const location = useLocation();
    const siteUrl = 'https://www.dhbjcnd123.in';
    const currentUrl = `${siteUrl}${location.pathname}`;
    const finalCanonical = canonical || currentUrl;

    // Build page-specific structured data
    const structuredData = {
        "@context": "https://schema.org",
        "@type": type,
        "name": title,
        "description": description,
        "url": finalCanonical,
        "isPartOf": {
            "@type": "WebSite",
            "name": "Metal Calculator",
            "url": siteUrl
        }
    };

    if (datePublished) {
        structuredData.datePublished = datePublished;
    }
    if (dateModified) {
        structuredData.dateModified = dateModified;
    }

    // BreadcrumbList for better navigation signals
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const breadcrumbs = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": siteUrl
            },
            ...pathSegments.map((segment, index) => ({
                "@type": "ListItem",
                "position": index + 2,
                "name": segment.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
                "item": `${siteUrl}/${pathSegments.slice(0, index + 1).join('/')}`
            }))
        ]
    };

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
            <meta property="og:site_name" content="Metal Calculator" />
            <meta property="og:locale" content="en_IN" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={finalCanonical} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={`${siteUrl}/logo.svg`} />

            {/* Robots */}
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />

            {/* Page-specific structured data */}
            <script type="application/ld+json">
                {JSON.stringify(structuredData)}
            </script>

            {/* Breadcrumbs structured data */}
            {pathSegments.length > 0 && (
                <script type="application/ld+json">
                    {JSON.stringify(breadcrumbs)}
                </script>
            )}
        </Helmet>
    );
};

export default SEO;
