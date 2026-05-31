/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  BookOpen, 
  Gamepad2, 
  Sparkles, 
  GraduationCap, 
  Flame, 
  Compass, 
  Bookmark, 
  Layers
} from 'lucide-react';
import TheorySection from './TheorySection';
import GamesSection from './GamesSection';

export default function App() {
  const [activeTab, setActiveTab] = useState<'theory' | 'games'>('theory');

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      
      {/* Visual Top Status Accent Bar */}
      <div className="h-1.5 w-full bg-gradient-to-r from-orange-500 to-yellow-400" />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 py-8 md:py-12 space-y-8 md:space-y-10">
        
        {/* Masthead Header - Bento Style */}
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-200/80">
          <div className="flex items-center gap-4">
            <div className="bg-orange-500 text-white p-2.5 rounded-xl font-bold text-2xl shadow-sm leading-none flex items-center justify-center shrink-0">
              🇪🇸
            </div>
            <div className="space-y-1">
              <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-none flex flex-wrap items-baseline gap-2">
                <span>Իսպաներեն A1</span>
                <span className="text-orange-500 text-sm md:text-base font-normal tracking-wide">// Spanish Mastery</span>
              </h1>
              <p className="text-[10px] md:text-xs text-slate-500 font-bold uppercase tracking-widest">
                Դասընթաց և Խաղեր (ARMENIAN EDITION)
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="bg-white px-4 py-2.5 rounded-2xl shadow-xs border border-slate-200 text-xs font-bold">
              <span className="text-slate-400">Մակարդակ՝</span> A1 Basic
            </div>
            <div className="bg-slate-900 text-white px-4 py-2.5 rounded-2xl shadow-sm text-xs font-extrabold">
              Յուրացված՝ 100%
            </div>
          </div>
        </header>

        {/* Dashboard Quick Stats Card Panel - Bento Style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs flex items-center gap-4 relative overflow-hidden group hover:shadow-sm transition duration-300">
            <div className="p-3.5 bg-orange-50 text-orange-600 rounded-2xl border border-orange-100 shrink-0">
              <GraduationCap className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <h4 className="text-lg font-extrabold text-slate-900 tracking-tight">15 Դասագիրք</h4>
              <p className="text-xs text-slate-400 font-semibold">Ամբողջական քերականական հիմունքները</p>
            </div>
            <div className="absolute top-0 right-0 p-4 opacity-[0.03] text-5xl font-black text-slate-900 font-mono">01</div>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs flex items-center gap-4 relative overflow-hidden group hover:shadow-sm transition duration-300">
            <div className="p-3.5 bg-indigo-50 text-indigo-600 rounded-2xl border border-indigo-100 shrink-0">
              <Gamepad2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-lg font-extrabold text-slate-900 tracking-tight">6 Ինտերակտիվ Խաղ</h4>
              <p className="text-xs text-slate-400 font-semibold">Վիկտորինաներ, դասավորում, համընկնում</p>
            </div>
            <div className="absolute top-0 right-0 p-4 opacity-[0.03] text-5xl font-black text-slate-900 font-mono">02</div>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs flex items-center gap-4 relative overflow-hidden group hover:shadow-sm transition duration-300">
            <div className="p-3.5 bg-emerald-50 text-emerald-600 rounded-2xl border border-emerald-100 shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-lg font-extrabold text-slate-900 tracking-tight">100% Գործնական</h4>
              <p className="text-xs text-slate-400 font-semibold">Անմիջապես համեմատական թարգմանությամբ</p>
            </div>
            <div className="absolute top-0 right-0 p-4 opacity-[0.03] text-5xl font-black text-slate-900 font-mono">03</div>
          </div>
        </div>

        {/* Navigation Switcher Tabs - Bento Style */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-slate-100/80 border border-slate-200 p-2 rounded-2xl">
          <div className="flex gap-1 w-full sm:w-auto">
            <button
              id="tab-btn-theory"
              onClick={() => setActiveTab('theory')}
              className={`flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-extrabold transition-all duration-300 w-full sm:w-auto cursor-pointer ${
                activeTab === 'theory' 
                  ? 'bg-orange-500 text-white shadow-md' 
                  : 'text-slate-500 hover:bg-white/40 hover:text-slate-800'
              }`}
            >
              <BookOpen className="w-4 h-4 shrink-0" />
              <span>Դասագիրք (Տեսություն)</span>
            </button>
            <button
              id="tab-btn-games"
              onClick={() => setActiveTab('games')}
              className={`flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-extrabold transition-all duration-300 w-full sm:w-auto cursor-pointer ${
                activeTab === 'games' 
                  ? 'bg-orange-500 text-white shadow-md' 
                  : 'text-slate-500 hover:bg-white/40 hover:text-slate-800'
              }`}
            >
              <Gamepad2 className="w-4 h-4 shrink-0" />
              <span>Խաղարան (Ինտերակտիվ խաղեր)</span>
            </button>
          </div>
          
          <div className="hidden md:flex items-center gap-2 px-3 text-xs font-bold text-slate-500">
            <Compass className="w-3.5 h-3.5 text-slate-400 animate-spin-slow" />
            <span>A1 Մակարդակի Քարտեզ</span>
          </div>
        </div>

        {/* Tab Content Canvas */}
        <main className="min-h-[400px]">
          {activeTab === 'theory' ? (
            <TheorySection />
          ) : (
            <GamesSection />
          )}
        </main>
      </div>

      {/* Aesthetic footer */}
      <footer className="mt-auto border-t border-slate-200 bg-white py-8 px-6 text-center text-slate-400 text-xs font-bold leading-normal">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2026 Իսպաներեն A1 Դասեր & Խաղեր — Սովորե՛ք հաճույքով։</p>
          <div className="flex gap-4">
            <span className="flex items-center gap-1">
              <Bookmark className="w-3 h-3 text-orange-500" />
              A1 Grammar Syllabus
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Layers className="w-3 h-3 text-indigo-500" />
              6 Training Games
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
