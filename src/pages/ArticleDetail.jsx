import React from 'react';
import { useParams, Link } from 'react-router-dom';
import RegularDashboard from '../RegularDashboard';
import { articles } from '../data/articles';

const ArticleDetail = () => {
    const { id } = useParams();
    const article = articles.find(a => a.id === id);

    if (!article) {
        return (
            <RegularDashboard>
                <div className="text-center py-20">
                    <h2 className="text-2xl font-bold">Article not found</h2>
                    <Link to="/guides" className="text-indigo-600 hover:underline">Return to Guides</Link>
                </div>
            </RegularDashboard>
        );
    }

    return (
        <RegularDashboard>
            <div className="max-w-4xl mx-auto px-4 py-8">
                <Link to="/guides" className="text-indigo-600 hover:text-indigo-800 flex items-center gap-2 mb-8 font-semibold">
                    ← Back to Knowledge Base
                </Link>

                <article className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
                    <div className="bg-gradient-to-r from-indigo-900 to-indigo-800 p-8 md:p-12 text-white">
                        <span className="inline-block px-3 py-1 rounded-full bg-indigo-500/30 text-indigo-100 text-xs font-bold uppercase tracking-wider mb-4 border border-indigo-400/30">
                            {article.tag}
                        </span>
                        <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
                            {article.title}
                        </h1>
                        <div className="text-indigo-200 text-sm flex items-center gap-4">
                            <span>Published: {article.date}</span>
                            <span>•</span>
                            <span>Educational Resource</span>
                        </div>
                    </div>

                    <div className="p-8 md:p-12 prose prose-indigo max-w-none">
                        {article.content.split('\n\n').map((paragraph, i) => {
                            if (paragraph.startsWith('###')) {
                                return <h3 key={i} className="text-2xl font-bold text-gray-900 mt-8 mb-4">{paragraph.replace('### ', '')}</h3>;
                            }
                            if (paragraph.startsWith('1.') || paragraph.startsWith('-')) {
                                return (
                                    <ul key={i} className="list-disc pl-6 space-y-2 my-4 text-gray-700">
                                        {paragraph.split('\n').map((li, j) => (
                                            <li key={j}>{li.replace(/^[0-9]\. |^- /, '')}</li>
                                        ))}
                                    </ul>
                                );
                            }
                            return <p key={i} className="text-gray-700 leading-relaxed mb-6 whitespace-pre-line">{paragraph}</p>;
                        })}
                    </div>
                </article>

                <section className="mt-12 p-8 bg-gray-50 rounded-2xl border border-gray-200 text-center">
                    <h2 className="text-xl font-bold mb-4">Mastering the Math?</h2>
                    <p className="text-gray-600 mb-6">Use our specialized tools to apply these principles to your own batches.</p>
                    <Link to="/calculator">
                        <button className="px-8 py-3 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition-colors">
                            Open Calculator Dashboard
                        </button>
                    </Link>
                </section>
            </div>
        </RegularDashboard>
    );
};

export default ArticleDetail;
