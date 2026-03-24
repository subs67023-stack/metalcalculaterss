import React from 'react';
import RegularDashboard from '../RegularDashboard';

const Hallmarking = () => {
    const standards = [
        { country: "UK", silver: "925 (Sterling), 958 (Britannia), 999 (Fine)", gold: "375 (9K), 585 (14K), 750 (18K), 916 (22K), 990, 999" },
        { country: "USA", silver: "925 (Sterling)", gold: "417 (10K), 585 (14K), 750 (18K), 917 (22K), 999 (24K)" },
        { country: "India", silver: "800, 835, 900, 925, 999", gold: "585 (14K), 750 (18K), 833 (20K), 916 (22K), 958 (23K), 999 (24K)" },
        { country: "EU (General)", silver: "800, 835, 900, 925, 999", gold: "375, 585, 750, 916, 999" },
        { country: "China", silver: "925, 990, 999", gold: "375, 585, 750, 916, 990, 999" }
    ];

    return (
        <RegularDashboard>
            <div className="max-w-5xl mx-auto px-4 py-12">
                <header className="mb-12 border-b-4 border-yellow-500 pb-6">
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-2">International <span className="text-yellow-600">Hallmarking Standards</span></h1>
                    <p className="text-gray-600">A global reference guide for precious metal purity and legal requirements.</p>
                </header>

                <section className="prose prose-indigo max-w-none mb-12">
                    <h2 className="text-2xl font-bold mb-4">What is Hallmarking?</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Hallmarking is a system of marks stamped on precious metals like gold, silver, platinum, and palladium. It serves as a guarantee of the metal's purity and is essential for consumer protection and fair trade in the global jewelry market. Most countries require hallmarking by an independent assay office before a piece can be legally sold as precious metal.
                    </p>
                </section>

                <div className="overflow-x-auto rounded-xl shadow-lg border border-gray-200 mb-12">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-indigo-900 text-white">
                            <tr>
                                <th className="p-4 font-bold">Region / Country</th>
                                <th className="p-4 font-bold">Silver Standards (Millesimal)</th>
                                <th className="p-4 font-bold">Gold Standards (Millesimal/Karat)</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            {standards.map((s, i) => (
                                <tr key={i} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                                    <td className="p-4 font-bold text-indigo-900">{s.country}</td>
                                    <td className="p-4 text-gray-600">{s.silver}</td>
                                    <td className="p-4 text-gray-600">{s.gold}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white p-8 rounded-2xl shadow-md border-l-8 border-indigo-600">
                        <h3 className="text-xl font-bold mb-4 text-gray-900">Millesimal Fineness Explained</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Millesimal fineness is a system of denoting the purity of precious metal alloys by parts per thousand of pure metal by mass in the alloy. For example, an alloy containing 92.5% silver is denoted as 925. This system has largely replaced the older 'Karat' system for silver, though Karat remains popular for gold (where 24K = 999 fineness).
                        </p>
                    </div>
                    <div className="bg-yellow-50 p-8 rounded-2xl border border-yellow-200">
                        <h3 className="text-xl font-bold mb-4 text-yellow-800 italic">Historical Fact:</h3>
                        <p className="text-yellow-700 text-sm leading-relaxed">
                            The word 'Hallmark' originates from Goldsmiths' Hall in London, where the Worshipful Company of Goldsmiths has appraised and marked gold and silver since the year 1300. It is one of the oldest forms of consumer protection in history.
                        </p>
                    </div>
                </div>
            </div>
        </RegularDashboard>
    );
};

export default Hallmarking;
