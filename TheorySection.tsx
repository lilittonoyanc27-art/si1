import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, 
  Search, 
  Filter, 
  ChevronRight, 
  Info, 
  Layers, 
  Compass, 
  Sparkles,
  Award
} from 'lucide-react';
import { theoryRules } from './theoryData';
import { Rule } from './types';

export default function TheorySection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedRuleId, setExpandedRuleId] = useState<number | null>(1);

  const categories = [
    { id: 'all', name: 'Բոլոր հիմունքները', icon: BookOpen },
    { id: 'sentence-structure', name: 'Նախադասության կազմություն', icon: Compass },
    { id: 'verbs', name: 'Բայախոնարհում', icon: Sparkles },
    { id: 'nouns-adjectives', name: 'Գոյականներ & Ածականներ', icon: Layers },
    { id: 'essential-verbs', name: 'Կարևորագույն բայեր (Ser/Estar/Hay)', icon: Award },
  ];

  const filteredRules = useMemo(() => {
    return theoryRules.filter(rule => {
      const matchesCategory = selectedCategory === 'all' || rule.category === selectedCategory;
      const matchesSearch = 
        rule.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (rule.subtitle && rule.subtitle.toLowerCase().includes(searchQuery.toLowerCase())) ||
        rule.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        rule.examples.some(ex => 
          ex.spanish.toLowerCase().includes(searchQuery.toLowerCase()) || 
          ex.armenian.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const toggleExpandRule = (id: number) => {
    setExpandedRuleId(expandedRuleId === id ? null : id);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10">
      {/* Search and Categories Panel */}
      <div className="lg:col-span-4 space-y-6">
        <div id="search-container" className="bg-white rounded-3xl p-6 shadow-xs border border-slate-200">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Որոնում դասագրքում</h3>
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              id="search-input"
              type="text"
              placeholder="Մուտքագրեք բանալի բառ..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 text-slate-800 placeholder-slate-400 rounded-xl pl-10 pr-4 py-3 text-sm border border-slate-200 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all duration-200"
            />
          </div>
        </div>

        <div id="categories-container" className="bg-white rounded-3xl p-6 shadow-xs border border-slate-200 space-y-3">
          <div className="flex items-center gap-2 mb-2">
            <Filter className="w-4 h-4 text-slate-400" />
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Կատեգորիաներ</h3>
          </div>
          <div className="flex flex-col gap-1.5">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  id={`cat-btn-${cat.id}`}
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl text-left text-xs sm:text-sm font-bold transition duration-200 cursor-pointer ${
                    isActive 
                      ? 'bg-orange-500 text-white shadow-xs' 
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="bg-orange-50/50 rounded-3xl p-6 border border-orange-100">
          <div className="flex gap-3">
            <Info className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-extrabold text-orange-950 text-sm mb-1">Խորհուրդ</h4>
              <p className="text-xs text-orange-850 leading-relaxed font-semibold">
                Ինտերակտիվ խաղերը ստեղծված են հենց այս կանոնների հիման վրա։ Անցե՛ք բոլոր 15 կանոնները, ուսումնասիրեք օրինակները և փորձեք տեսական գիտելիքները կիրառել խաղերում։
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:col-span-8 space-y-4">
        <div className="flex items-center justify-between px-2">
          <h2 className="text-xl font-extrabold text-slate-800 font-sans tracking-tight">
            Դասեր և Կանոններ ({filteredRules.length})
          </h2>
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="text-xs font-extrabold text-orange-500 hover:text-orange-600 transition"
            >
              Մաքրել որոնումը
            </button>
          )}
        </div>

        {filteredRules.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 shadow-xs">
            <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-slate-700 mb-1">Ոչինչ չգտնվեց</h3>
            <p className="text-sm text-slate-500 font-medium">Փոխե՛ք որոնման բառը կամ ընտրե՛ք մեկ այլ կատեգորիա</p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredRules.map((rule) => {
              const isExpanded = expandedRuleId === rule.id;
              return (
                <div 
                  id={`rule-card-${rule.id}`}
                  key={rule.id}
                  className={`bg-white rounded-3xl border transition-all duration-300 overflow-hidden ${
                    isExpanded 
                      ? 'border-orange-400 shadow-sm ring-1 ring-orange-100' 
                      : 'border-slate-200 hover:border-slate-300 shadow-xs'
                  }`}
                >
                  {/* Rule Header Bar */}
                  <button
                    onClick={() => toggleExpandRule(rule.id)}
                    className="w-full text-left px-6 py-5 flex items-start justify-between gap-4 focus:outline-none cursor-pointer"
                  >
                    <div className="space-y-1 pr-4">
                      <div className="flex items-center gap-2.5">
                        <span className="inline-flex items-center justify-center bg-slate-100 text-slate-700 font-mono text-xs font-extrabold w-6 h-6 rounded-lg shrink-0">
                          {rule.id}
                        </span>
                        <h3 className="font-extrabold text-slate-900 md:text-lg tracking-tight font-sans">{rule.title}</h3>
                      </div>
                      {rule.subtitle && (
                        <p className="text-slate-550 text-xs md:text-sm pl-8 font-semibold italic">{rule.subtitle}</p>
                      )}
                    </div>
                    <div className="shrink-0 mt-1">
                      <ChevronRight className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${isExpanded ? 'rotate-90 text-orange-500' : ''}`} />
                    </div>
                  </button>

                  {/* Expanded Content */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-6 pt-1 border-t border-slate-100 bg-slate-50/50 space-y-5">
                          {/* Explanation */}
                          <div className="text-slate-700 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
                            {rule.description}
                          </div>

                          {/* Formula structure if exists */}
                          {rule.formula && (
                            <div className="bg-orange-50/50 border border-orange-100 rounded-2xl p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
                              <div>
                                <span className="text-[10px] font-mono font-bold text-orange-700 uppercase tracking-widest block mb-1">Բանաձևի կառուցվածքը</span>
                                <span className="text-extrabold text-base md:text-lg text-orange-950 font-mono tracking-wide">{rule.formula}</span>
                              </div>
                              <span className="px-2.5 py-1 text-[10px] font-mono bg-orange-150 text-orange-950 font-bold rounded-md uppercase">Կանոն</span>
                            </div>
                          )}

                          {/* Notes bullet points */}
                          {rule.notes && rule.notes.length > 0 && (
                            <div className="bg-slate-100/60 border border-slate-200 rounded-2xl p-4 space-y-2">
                              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Կարևոր Նշումներ՝</span>
                              <ul className="list-disc pl-5 space-y-1.5 text-slate-600 text-xs sm:text-sm font-semibold">
                                {rule.notes.map((note, index) => (
                                  <li key={index} className="leading-relaxed">{note}</li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Interactive Examples Grid */}
                          <div className="space-y-3">
                            <span className="text-xs font-extrabold text-slate-400 uppercase tracking-wider block">Օրինակներ (Ejemplos)</span>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {rule.examples.map((ex, index) => (
                                <div key={index} className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs flex flex-col justify-between space-y-2.5 hover:border-slate-300 transition-all">
                                  <div>
                                    <div className="text-base font-extrabold text-orange-600 font-sans tracking-wide">
                                      {ex.spanish}
                                    </div>
                                    <div className="text-slate-600 text-xs sm:text-sm mt-1 font-semibold font-sans">
                                      {ex.armenian}
                                    </div>
                                  </div>
                                  {ex.breakdown && (
                                    <div className="pt-2 border-t border-slate-150 text-[10px] text-slate-400 leading-normal font-mono font-semibold">
                                      {ex.breakdown}
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
