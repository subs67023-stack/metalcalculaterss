import React from 'react';
import RegularDashboard from '../RegularDashboard';

const Glossary = () => {
    const terms = [
        {
            term: "Alloy",
            definition: "A metal made by combining two or more metallic elements, especially to give greater strength or resistance to corrosion. In jewelry, pure gold or silver is often alloyed with copper, zinc, or nickel."
        },
        {
            term: "Assay",
            definition: "A test conducted to determine the content and quality of a precious metal. An assay confirms whether a piece of jewelry meets the required purity standards (e.g., 925 for sterling silver)."
        },
        {
            term: "Bullion",
            definition: "Gold or silver in bulk before coining, or valued by weight. It is typically found in the form of bars, ingots, or specialized coins."
        },
        {
            term: "Cupellation",
            definition: "A traditional refining process where ores or alloyed metals are treated under high temperatures in a porous cup (cupel) to separate precious metals like gold and silver from base metals like lead and copper."
        },
        {
            term: "Ductility",
            definition: "The physical property of a metal that allows it to be drawn out into a thin wire without breaking. Gold is the most ductile of all metals."
        },
        {
            term: "Fine Silver",
            definition: "Silver that is 99.9% pure. While it is highly resistant to tarnish, it is generally too soft for functional jewelry, which is why it is often alloyed to 92.5% (Sterling)."
        },
        {
            term: "Flux",
            definition: "A chemical cleaning agent used in soldering and smelting. It prevents oxidation of the metal surface and helps the solder flow or impurities separate during melting."
        },
        {
            term: "Hallmark",
            definition: "An official mark or series of marks struck on items made of precious metals, certifying their purity and sometimes their origin and date of manufacture."
        },
        {
            term: "Karat (K)",
            definition: "A measurement of the purity of gold. 24K is pure gold, while 18K is 75% gold and 25% alloy."
        },
        {
            term: "Malleability",
            definition: "The ability of a metal to be hammered or rolled into thin sheets. Gold is the most malleable metal, capable of being beaten into 'gold leaf' so thin it is semi-transparent."
        },
        {
            term: "Oxidation",
            definition: "A chemical reaction that occurs when a metal is exposed to oxygen, often leading to tarnish or 'firestain' on the surface of silver and copper alloys."
        },
        {
            term: "Specific Gravity",
            definition: "The ratio of the density of a substance to the density of a standard, usually water. It is a non-destructive way to estimate the purity of a precious metal object."
        },
        {
            term: "Sterling Silver",
            definition: "An alloy of silver containing 92.5% by weight of silver and 7.5% by weight of other metals, usually copper. The sterling silver standard has a minimum millesimal fineness of 925."
        },
        {
            term: "Troy Ounce",
            definition: "The standard unit of weight for precious metals. One troy ounce is equivalent to approximately 31.103 grams, which is heavier than a standard avoirdupois ounce (28.35g)."
        },
        {
            term: "Zinc (Jast)",
            definition: "A base metal often used in jewelry alloys to improve fluidity during casting and to act as an oxygen scavenger, reducing the risk of porosity."
        }
    ];

    return (
        <RegularDashboard>
            <div className="max-w-4xl mx-auto px-4 py-12">
                <header className="mb-12 border-b-4 border-indigo-600 pb-6">
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Refining & Jewelry <span className="text-indigo-600">Glossary</span></h1>
                    <p className="text-gray-600">A comprehensive guide to the technical terms used in the precious metal industry.</p>
                </header>

                <div className="space-y-8">
                    {terms.map((item, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-indigo-300 transition-colors">
                            <h3 className="text-xl font-bold text-indigo-900 mb-2">{item.term}</h3>
                            <p className="text-gray-700 leading-relaxed">{item.definition}</p>
                        </div>
                    ))}
                </div>

                <section className="mt-16 p-8 bg-gray-900 rounded-2xl text-white">
                    <h2 className="text-2xl font-bold mb-4">Why terminology matters?</h2>
                    <p className="text-gray-400 leading-relaxed">
                        In the world of professional refining and hallmarking, precision in language is as important as precision in measurement. Understanding these terms helps ensure compliance with international standards and facilitates better communication between jewelers, refiners, and assay offices.
                    </p>
                </section>
            </div>
        </RegularDashboard>
    );
};

export default Glossary;
