import React from 'react';
import RegularDashboard from '../RegularDashboard';

const Glossary = () => {
    const terms = [
        {
            term: "916 Gold",
            definition: "The Indian standard for 22 Karat gold jewelry, representing 91.6% pure gold. It is the most common purity for traditional Indian jewelry and is internationally recognized."
        },
        {
            term: "999 Fine Silver",
            definition: "Silver that is 99.9% pure. In the Indian market, it is often referred to as 'Chandi' or 'Fine'. It is the base material for creating alloys like 925 Sterling or 800-grade silverware."
        },
        {
            term: "Acid Testing",
            definition: "A traditional method of testing gold purity using Nitric Acid on a touchstone (Kasauti). Different concentrations of acid react with different purity levels (e.g., 18K, 22K) to provide an estimate."
        },
        {
            term: "Alloy",
            definition: "A metal made by combining two or more metallic elements. In India, pure gold is often alloyed with copper and silver to create 22K or 18K jewelry for better durability."
        },
        {
            term: "Aqua Regia",
            definition: "A highly corrosive mixture of nitric and hydrochloric acid. It is the only acid that can dissolve gold and is used extensively in professional refining to achieve 99.99% purity."
        },
        {
            term: "Assay Office",
            definition: "A laboratory or institution (like a BIS Recognition Hallmarking Centre) that tests the purity of precious metals and applies a hallmark."
        },
        {
            term: "BIS (Bureau of Indian Standards)",
            definition: "The national standards body of India that regulates gold and silver hallmarking. The BIS logo on jewelry is a guarantee of purity for the consumer."
        },
        {
            term: "Borax (Suhaga)",
            definition: "A flux used in soldering and melting. In Indian workshops, it is known as 'Suhaga' and is essential for preventing oxidation and helping the metal flow cleanly."
        },
        {
            term: "Bullion",
            definition: "Gold or silver in bulk form (bars or ingots). Bullion is valued based on its weight and purity rather than its artistic design."
        },
        {
            term: "Burn Loss",
            definition: "The small amount of metal lost during the melting process due to oxidation or vaporization. Professional calculators help refiners account for this loss in their final math."
        },
        {
            term: "Cadmium (KDM)",
            definition: "A metal previously used as a soldering agent in India (KDM jewelry). It is now banned due to health risks and has been replaced by zinc-based or gold-based solders."
        },
        {
            term: "Carat (Weight)",
            definition: "A unit of weight for gemstones (1 carat = 0.2 grams). Not to be confused with 'Karat', which measures gold purity."
        },
        {
            term: "Chandi",
            definition: "The Hindi/Marathi word for Silver. In the trade, it usually refers to 999 Fine Silver bars or grains."
        },
        {
            term: "Copper (Tamba)",
            definition: "The most common alloying element for gold and silver. It provides hardness and a reddish tint to the metal."
        },
        {
            term: "Crucible (Moos)",
            definition: "A ceramic or graphite container used for melting metals at high temperatures. In Indian workshops, it is often called a 'Moos'."
        },
        {
            term: "Cupellation",
            definition: "A chemical refining process where lead is used to absorb base metal impurities from gold or silver, leaving a pure bead of precious metal behind."
        },
        {
            term: "Dak (Solder)",
            definition: "The Indian trade term for solder—a lower-melting-point alloy used to join two pieces of metal together."
        },
        {
            term: "Ductility",
            definition: "The property that allows gold to be drawn into extremely thin wires. One gram of gold can be drawn into a wire kilometers long."
        },
        {
            term: "Fine Weight",
            definition: "The weight of the pure metal content within an alloyed piece. For example, 10g of 22K (91.6%) gold has a fine weight of 9.16g."
        },
        {
            term: "Fine Gold",
            definition: "24 Karat gold, which is 99.9% or 99.99% pure. It is the raw material used for all jewelry manufacturing."
        },
        {
            term: "Flux",
            definition: "A substance like Borax used to clean the metal surface and prevent oxidation during melting and soldering."
        },
        {
            term: "Gross Weight",
            definition: "The total weight of a jewelry piece, including any stones, enamel, or wax (Lakh) inside."
        },
        {
            term: "Hallmark",
            definition: "An official mark on jewelry certifying its purity. In India, a valid hallmark includes the BIS logo, Purity (e.g., 22K916), and a 6-digit HUID code."
        },
        {
            term: "HUID (Hallmark Unique ID)",
            definition: "A 6-digit alphanumeric code assigned to every piece of hallmarked jewelry in India. It allows consumers to verify the piece through the BIS Care App."
        },
        {
            term: "Impurity",
            definition: "Base metals (like iron, lead, or tin) present in a precious metal batch that must be removed through refining to achieve high purity."
        },
        {
            term: "Ingot (Lagdi)",
            definition: "A block of metal cast into a specific shape for storage or further processing. Often called 'Lagdi' in the Indian market."
        },
        {
            term: "Jast (Zinc)",
            definition: "An alloying element used to create solders (Dak) or to improve the fluidity of casting grain."
        },
        {
            term: "Karigar",
            definition: "An Indian term for a skilled goldsmith or artisan who manufactures jewelry by hand."
        },
        {
            term: "Karat (K)",
            definition: "The unit used to measure the purity of gold. 24K is 100%, 22K is 91.6%, and 18K is 75%."
        },
        {
            term: "Karatmeter",
            definition: "A popular name for XRF (X-Ray Fluorescence) machines used in Indian jewelry shops to instantly test purity without damaging the piece."
        },
        {
            term: "Kasauti (Touchstone)",
            definition: "A black stone used for the traditional acid test. The color of the streak left by the gold on the stone helps determine its purity."
        },
        {
            term: "Malleability",
            definition: "The ability of a metal (like gold) to be hammered into extremely thin sheets or foil."
        },
        {
            term: "Melting Loss",
            definition: "The difference between the starting weight of the scrap and the final weight of the melted ingot. Common losses range from 0.1% to 2% depending on the scrap quality."
        },
        {
            term: "Millesimal Fineness",
            definition: "A system of expressing purity in parts per 1000. For example, 916 means 916 parts gold and 84 parts alloy."
        },
        {
            term: "Net Weight",
            definition: "The weight of the precious metal alone, after subtracting the weight of any stones, beads, or lacquer."
        },
        {
            term: "Nitric Acid",
            definition: "A powerful acid used in the 'Parting' process to dissolve silver and base metals, leaving pure gold behind."
        },
        {
            term: "Oxidation",
            definition: "The reaction between oxygen and base metals in an alloy, causing the metal to turn black or develop a 'skin' during heating."
        },
        {
            term: "Patta",
            definition: "A flat strip or sheet of silver or gold used as raw material for further manufacturing."
        },
        {
            term: "Purity Adjustment",
            definition: "The process of adding pure metal or alloy to a batch to reach a specific target purity (e.g., converting 20K scrap to 22K)."
        },
        {
            term: "Recovery",
            definition: "The amount of pure precious metal successfully extracted from a refining process compared to the theoretical fine weight."
        },
        {
            term: "Scrap Gold",
            definition: "Old or broken jewelry, industrial waste, or dental gold that is destined to be melted and refined."
        },
        {
            term: "Sona",
            definition: "The Hindi/Marathi word for Gold. Usually implies 24K purity in a trading context."
        },
        {
            term: "Standard Gold",
            definition: "In India, this often refers to 995 purity gold bars (99.5% pure), which is the standard for investment and trading."
        },
        {
            term: "Sterling Silver",
            definition: "The international standard for silver jewelry, containing 92.5% silver and 7.5% copper. Marked as '925'."
        },
        {
            term: "Tamba",
            definition: "The Hindi/Marathi word for Copper. It is the primary alloy used to give gold its strength and characteristic color."
        },
        {
            term: "Troy Ounce",
            definition: "The international unit for precious metal weight (1 Troy Oz = 31.103 grams). Note that India primarily uses Grams and Tolas."
        },
        {
            term: "Tunch",
            definition: "A common Indian trade term for purity percentage. If a sample is '92 Tunch', it means it is 92% pure."
        },
        {
            term: "XRF Testing",
            definition: "X-Ray Fluorescence testing. A non-destructive scientific method to determine the exact elemental composition of a metal sample."
        },
        {
            term: "Zinc",
            definition: "A white metal used in small quantities in gold and silver alloys to improve casting results and lower the melting point of solders."
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
