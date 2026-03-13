import React from 'react';
import RegularDashboard from '../RegularDashboard';

const Guides = () => {
    const articles = [
        {
            title: "Understanding Silver Hallmarks: 925, 800, and Beyond",
            content: `Silver hallmarking is a system used to denote the purity of silver in jewelry and silverware. The most common hallmark is '925', which represents Sterling Silver (92.5% pure silver and 7.5% alloy, usually copper). Other common marks include '800' (often found in European vintage silverware) and '999' (Fine Silver). Understanding these marks is crucial for both buyers and refiners to ensure they are dealing with genuine precious metals.`,
            tag: "Basics"
        },
        {
            title: "How to Calculate Melting Loss in Refining",
            content: `When melting precious metals, a small percentage of the material is inevitably lost due to oxidation, vaporization, or entrapment in the crucible flux. This is known as 'burn loss' or 'melting loss'. For clean scrap, loss is typically between 0.1% and 0.3%. For dirty or industrial scrap, it can be higher. Professional refiners always account for this loss by 'over-shooting' their target purity slightly during the alloying stage.`,
            tag: "Advanced"
        },
        {
            title: "Tips for Professional Jewelry Alloy Mixing",
            content: `Creating a perfect gold or silver alloy requires more than just mixing metals. The order of melting matters: always melt the higher melting point metal first (like gold or silver) before adding lower melting point alloys like copper or zinc (Jast). Using a high-quality graphite crucible and a nitrogen-rich or reducing atmosphere can help minimize oxidation and ensure a homogeneous mix for better hallmarking results.`,
            tag: "Pro Tips"
        },
        {
            title: "The History of Precious Metal Refining",
            content: `Refining precious metals is one of the oldest chemical processes known to man, dating back to ancient civilizations like the Lydians and Egyptians. Early methods involved cupellation—heating ore in a shallow porous cup until impurities were oxidized and absorbed, leaving pure gold or silver behind. Today, electrolytic refining and aqua regia processes allow for purities up to 99.999%, driving modern technology in electronics and medicine.`,
            tag: "History"
        }
    ];

    return (
        <RegularDashboard>
            <div className="max-w-5xl mx-auto px-4 py-8">
                <header className="mb-12 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                        Refining <span className="text-indigo-600">Knowledge Base</span>
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Deepen your understanding of precious metals with our professional guides and educational resources.
                    </p>
                </header>

                <div className="grid md:grid-cols-2 gap-8">
                    {articles.map((article, index) => (
                        <article key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden border border-gray-100">
                            <div className="p-8">
                                <span className="inline-block px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-4">
                                    {article.tag}
                                </span>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 hover:text-indigo-600 cursor-default">
                                    {article.title}
                                </h2>
                                <p className="text-gray-600 leading-relaxed">
                                    {article.content}
                                </p>
                                <div className="mt-8 flex items-center text-sm font-semibold text-indigo-600">
                                    Educational Resource • {article.content.split(' ').length} words
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                <section className="mt-20 bg-indigo-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400 rounded-full blur-3xl opacity-10 -mr-32 -mt-32"></div>
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold mb-4 text-yellow-400">Standard Purity References</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                            <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/20">
                                <div className="text-2xl font-bold">925</div>
                                <div className="text-xs text-indigo-200">Sterling Silver</div>
                            </div>
                            <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/20">
                                <div className="text-2xl font-bold">750</div>
                                <div className="text-xs text-indigo-200">18K Gold</div>
                            </div>
                            <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/20">
                                <div className="text-2xl font-bold">585</div>
                                <div className="text-xs text-indigo-200">14K Gold</div>
                            </div>
                            <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/20">
                                <div className="text-2xl font-bold">800</div>
                                <div className="text-xs text-indigo-200">Coin Silver</div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </RegularDashboard>
    );
};

export default Guides;
