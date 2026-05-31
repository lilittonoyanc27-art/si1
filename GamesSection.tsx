import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  ArrowRight, 
  Trophy, 
  Sparkles, 
  RefreshCw, 
  Layers, 
  Languages, 
  FileInput, 
  HelpCircle, 
  LayoutGrid, 
  Activity,
  Award,
  Heart,
  Undo
} from 'lucide-react';
import { GameId } from './types';
import { 
  gamesList, 
  sentenceBuilderQuestions, 
  fillInBlankQuestions, 
  quizQuestions, 
  vocabPool, 
  serEstarHayQuestions, 
  translationQuestions 
} from './gamesData';

export default function GamesSection() {
  const [activeGameId, setActiveGameId] = useState<GameId | null>(null);
  
  // Scoring & Progress
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [errors, setErrors] = useState<number>(0);
  const [lives, setLives] = useState<number>(3);
  const [isGameOver, setIsGameOver] = useState<boolean>(false);
  const [isGameCleared, setIsGameCleared] = useState<boolean>(false);

  // General Questions state
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
  const [hasCheckedAnswer, setHasCheckedAnswer] = useState<boolean>(false);
  const [isLastAnswerCorrect, setIsLastAnswerCorrect] = useState<boolean | null>(null);

  // Game 1: Sentence Builder Specific State
  const [selectedBuilderWords, setSelectedBuilderWords] = useState<string[]>([]);
  const [shuffledBuilderWords, setShuffledBuilderWords] = useState<string[]>([]);

  // Game 4: Vocabulary Matching Specific State
  interface MatchCard {
    id: string; // original item id + "-esp" or "-arm"
    itemId: string; // real original ID
    text: string;
    lang: 'esp' | 'arm';
    isFlipped: boolean;
    isMatched: boolean;
  }
  const [matchCards, setMatchCards] = useState<MatchCard[]>([]);
  const [selectedCardId, setSelectedCardId] = useState<string | null>(null);
  const [matchingStreak, setMatchingStreak] = useState<number>(0);

  // Load game info
  const activeGame = gamesList.find(g => g.id === activeGameId);

  // Helper icons
  const getIcon = (name: string) => {
    switch(name) {
      case "LayoutGrid": return <LayoutGrid className="w-5 h-5 text-indigo-500" />;
      case "FileInput": return <FileInput className="w-5 h-5 text-teal-500" />;
      case "HelpCircle": return <HelpCircle className="w-5 h-5 text-amber-500" />;
      case "Layers": return <Layers className="w-5 h-5 text-emerald-500" />;
      case "Activity": return <Activity className="w-5 h-5 text-rose-500" />;
      case "Languages": return <Languages className="w-5 h-5 text-violet-500" />;
      default: return <Award className="w-5 h-5 text-stone-500" />;
    }
  };

  const getThemeColors = (id: GameId) => {
    switch(id) {
      case 1: return { bg: "bg-indigo-50", text: "text-indigo-800", border: "border-indigo-200", btn: "bg-indigo-600 hover:bg-indigo-700", accent: "text-indigo-600", light: "bg-indigo-100/50" };
      case 2: return { bg: "bg-teal-50", text: "text-teal-800", border: "border-teal-200", btn: "bg-teal-600 hover:bg-teal-700", accent: "text-teal-600", light: "bg-teal-100/50" };
      case 3: return { bg: "bg-amber-50", text: "text-amber-800", border: "border-amber-200", btn: "bg-amber-600 hover:bg-amber-700", accent: "text-amber-600", light: "bg-amber-100/50" };
      case 4: return { bg: "bg-emerald-50", text: "text-emerald-800", border: "border-emerald-200", btn: "bg-emerald-600 hover:bg-emerald-700", accent: "text-emerald-600", light: "bg-emerald-100/50" };
      case 5: return { bg: "bg-rose-50", text: "text-rose-800", border: "border-rose-200", btn: "bg-rose-600 hover:bg-rose-700", accent: "text-rose-600", light: "bg-rose-100/50" };
      case 6: return { bg: "bg-violet-50", text: "text-violet-800", border: "border-violet-200", btn: "bg-violet-600 hover:bg-violet-700", accent: "text-violet-600", light: "bg-violet-100/50" };
    }
  };

  // Switch Game & Reset General State
  const startGame = (id: GameId) => {
    setActiveGameId(id);
    setCurrentStep(0);
    setScore(0);
    setErrors(0);
    setLives(3);
    setIsGameOver(false);
    setIsGameCleared(false);
    resetQuestionState();

    if (id === 1) {
      initSentenceBuilder(0);
    } else if (id === 4) {
      initVocabularyMatch();
    }
  };

  const resetQuestionState = () => {
    setSelectedOption(null);
    setSelectedOptionIndex(null);
    setHasCheckedAnswer(false);
    setIsLastAnswerCorrect(null);
  };

  // Initialize Game 1 (Sentence Builder)
  const initSentenceBuilder = (step: number) => {
    if (step < sentenceBuilderQuestions.length) {
      const q = sentenceBuilderQuestions[step];
      setSelectedBuilderWords([]);
      // Shuffle words array cleanly
      setShuffledBuilderWords([...q.shuffledWords]);
    }
  };

  // Initialize Game 4 (Vocabulary Match cards)
  const initVocabularyMatch = () => {
    // Select 6 random vocabulary items from vocabPool
    const shuffledPool = [...vocabPool].sort(() => 0.5 - Math.random());
    const selected = shuffledPool.slice(0, 6);
    
    // Create dual matching cards (6 Spanish, 6 Armenian)
    const cards: MatchCard[] = [];
    selected.forEach(item => {
      cards.push({
        id: `${item.id}-esp`,
        itemId: item.id,
        text: item.spanish,
        lang: 'esp',
        isFlipped: false,
        isMatched: false
      });
      cards.push({
        id: `${item.id}-arm`,
        itemId: item.id,
        text: item.armenian,
        lang: 'arm',
        isFlipped: false,
        isMatched: false
      });
    });

    // Shuffle all 12 cards
    setMatchCards(cards.sort(() => 0.5 - Math.random()));
    setSelectedCardId(null);
    setMatchingStreak(0);
  };

  // Handlers for click inputs
  const handleOptionSelect = (option: string, index?: number) => {
    if (hasCheckedAnswer) return;
    setSelectedOption(option);
    if (index !== undefined) {
      setSelectedOptionIndex(index);
    }
  };

  // Evaluating standard Multi-choice questions
  const evaluateAnswer = () => {
    if (!selectedOption || hasCheckedAnswer) return;

    let correct = false;

    if (activeGameId === 2) {
      const q = fillInBlankQuestions[currentStep];
      correct = selectedOption === q.correctAnswer;
    } else if (activeGameId === 3) {
      const q = quizQuestions[currentStep];
      correct = selectedOptionIndex === q.correctIndex;
    } else if (activeGameId === 5) {
      const q = serEstarHayQuestions[currentStep];
      correct = selectedOption === q.correctAnswer;
    } else if (activeGameId === 6) {
      const q = translationQuestions[currentStep];
      correct = selectedOption === q.correctAnswer;
    }

    setHasCheckedAnswer(true);
    setIsLastAnswerCorrect(correct);

    if (correct) {
      setScore(prev => prev + 1);
    } else {
      setErrors(prev => prev + 1);
      setLives(prev => {
        const next = prev - 1;
        if (next <= 0) {
          setIsGameOver(true);
        }
        return next;
        return next;
      });
    }
  };

  // Advance standard step
  const handleNextStep = () => {
    const totalSteps = getTotalSteps();
    if (currentStep + 1 >= totalSteps) {
      setIsGameCleared(true);
    } else {
      const nextStep = currentStep + 1;
      setCurrentStep(nextStep);
      resetQuestionState();

      if (activeGameId === 1) {
        initSentenceBuilder(nextStep);
      }
    }
  };

  const getTotalSteps = () => {
    switch (activeGameId) {
      case 1: return sentenceBuilderQuestions.length;
      case 2: return fillInBlankQuestions.length;
      case 3: return quizQuestions.length;
      case 4: return 1; // Handled within vocab cleared
      case 5: return serEstarHayQuestions.length;
      case 6: return translationQuestions.length;
      default: return 5;
    }
  };

  // Game 1 Word Click Actions
  const handleWordSelect = (word: string) => {
    if (hasCheckedAnswer) return;
    // Add word to chosen
    setSelectedBuilderWords(prev => [...prev, word]);
    // Remove one instance of the word from shuffled list helper
    setShuffledBuilderWords(prev => {
      const index = prev.indexOf(word);
      if (index !== -1) {
        const copy = [...prev];
        copy.splice(index, 1);
        return copy;
      }
      return prev;
    });
  };

  const removeBuilderWord = (word: string) => {
    if (hasCheckedAnswer) return;
    // Remove word from chosen
    setSelectedBuilderWords(prev => {
      const index = prev.indexOf(word);
      if (index !== -1) {
        const copy = [...prev];
        copy.splice(index, 1);
        return copy;
      }
      return prev;
    });
    // Add back to shuffled
    setShuffledBuilderWords(prev => [...prev, word]);
  };

  const checkSentenceBuilderAnswer = () => {
    if (selectedBuilderWords.length === 0 || hasCheckedAnswer) return;

    const q = sentenceBuilderQuestions[currentStep];
    const userSentence = selectedBuilderWords.join(" ");
    const correctSentence = q.correctSpanishWords.join(" ");
    
    // Check match ignoring slight details but keeping absolute correctness
    const correct = userSentence === correctSentence;

    setHasCheckedAnswer(true);
    setIsLastAnswerCorrect(correct);

    if (correct) {
      setScore(prev => prev + 1);
    } else {
      setErrors(prev => prev + 1);
      setLives(prev => {
        const next = prev - 1;
        if (next <= 0) {
          setIsGameOver(true);
        }
        return next;
      });
    }
  };

  const resetSentenceBuilderCurrent = () => {
    if (hasCheckedAnswer) return;
    const q = sentenceBuilderQuestions[currentStep];
    setSelectedBuilderWords([]);
    setShuffledBuilderWords([...q.shuffledWords]);
  };

  // Game 4 Matching Card Logic
  const handleCardClick = (cardId: string) => {
    const card = matchCards.find(c => c.id === cardId);
    if (!card || card.isMatched || card.isFlipped) return;

    // Flip the clicked card immediately
    setMatchCards(prev => prev.map(c => c.id === cardId ? { ...c, isFlipped: true } : c));

    if (!selectedCardId) {
      // First card chosen
      setSelectedCardId(cardId);
    } else {
      // Second card chosen
      const firstCard = matchCards.find(c => c.id === selectedCardId);
      if (!firstCard) return;

      setSelectedCardId(null);

      // Check if they are matched
      if (firstCard.itemId === card.itemId && firstCard.lang !== card.lang) {
        // MATCH!
        setTimeout(() => {
          setMatchCards(prev => prev.map(c => 
            c.itemId === card.itemId ? { ...c, isMatched: true, isFlipped: true } : c
          ));
          setScore(prev => prev + 1);
          setMatchingStreak(prev => prev + 1);

          // Check if all cards matched
          const remains = matchCards.filter(c => !c.isMatched && c.id !== cardId && c.id !== firstCard.id);
          if (remains.length === 0) {
            setIsGameCleared(true);
          }
        }, 300);
      } else {
        // MISMATCH
        setErrors(prev => prev + 1);
        setMatchingStreak(0);
        setTimeout(() => {
          // Unflip both cards
          setMatchCards(prev => prev.map(c => 
            c.id === cardId || c.id === firstCard.id ? { ...c, isFlipped: false } : c
          ));
          
          setLives(prev => {
            const next = prev - 1;
            if (next <= 0) {
              setIsGameOver(true);
            }
            return next;
          });
        }, 1000);
      }
    }
  };

  // Render components and options
  const colTheme = activeGameId ? getThemeColors(activeGameId) : { bg: "", text: "", border: "", btn: "", accent: "", light: "" };

  return (
    <div className="space-y-8">
      {/* Game Selector Dashboard */}
      {!activeGameId && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gamesList.map((game) => {
            const colors = getThemeColors(game.id);
            return (
              <motion.div
                id={`game-selector-${game.id}`}
                key={game.id}
                whileHover={{ y: -4 }}
                className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs transition hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className={`p-3 rounded-2xl w-11 h-11 flex items-center justify-center mb-5 ${colors.bg} ${colors.text} border ${colors.border}`}>
                    {getIcon(game.iconName)}
                  </div>
                  <h3 className="font-extrabold text-slate-900 text-lg tracking-tight font-sans mb-1">{game.title}</h3>
                  <p className="text-slate-500 text-xs md:text-sm leading-relaxed mb-6 font-semibold">{game.description}</p>
                </div>
                <button
                  id={`play-game-${game.id}`}
                  onClick={() => startGame(game.id)}
                  className={`w-full text-center py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-white transition ${colors.btn} cursor-pointer shadow-xs`}
                >
                  Սկսել Խաղը
                </button>
              </motion.div>
            );
          })}
        </div>
      )}

      {/* Active Game Interface */}
      {activeGameId && activeGame && (
        <div id="active-game-container" className="bg-white rounded-3xl border border-slate-200 shadow-xs overflow-hidden max-w-3xl mx-auto">
          {/* Game Header Area */}
          <div className="bg-slate-50 border-b border-slate-150 px-6 py-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setActiveGameId(null)}
                className="p-2 -ml-2 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded-xl transition duration-200 cursor-pointer"
                title="Վերադառնալ"
              >
                <Undo className="w-4 h-4" />
              </button>
              <div>
                <span className="text-[10px] font-bold text-orange-600 uppercase tracking-wider block">Ինտերակտիվ խաղ {activeGame.id}</span>
                <h3 className="font-extrabold text-slate-950 font-sans tracking-tight">{activeGame.title}</h3>
              </div>
            </div>

            {/* Lives and Stat Bar */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5 bg-rose-50/70 border border-rose-100 rounded-lg px-2.5 py-1 text-xs font-semibold text-rose-700">
                <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
                <span>Կյանքեր` {lives}</span>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-slate-400 font-bold block uppercase">Միավոր</span>
                <span className="text-sm font-black text-slate-800">{score}</span>
              </div>
            </div>
          </div>

          {/* Game Body Dashboard */}
          <div className="p-6 md:p-8">
            
            {/* Progress indicator */}
            {!isGameOver && !isGameCleared && activeGameId !== 4 && (
              <div className="mb-6">
                <div className="flex justify-between items-center text-xs text-slate-400 mb-1.5 font-bold">
                  <span>Հարց {currentStep + 1} / {getTotalSteps()}</span>
                  <span>{Math.round(((currentStep) / getTotalSteps()) * 100)}% ավարտված</span>
                </div>
                <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                  <div 
                    className="bg-orange-500 h-full transition-all duration-300"
                    style={{ width: `${((currentStep) / getTotalSteps()) * 100}%` }}
                  />
                </div>
              </div>
            )}

            {/* Game Screen Decision Tree */}
            <AnimatePresence mode="wait">
              {isGameOver && (
                <motion.div 
                  id="game-over-screen"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-10 space-y-6"
                >
                  <div className="mx-auto w-16 h-16 bg-rose-100 text-rose-600 rounded-2xl flex items-center justify-center">
                    <XCircle className="w-10 h-10" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-black text-stone-900">Խաղն ավարտվեց</h3>
                    <p className="text-stone-500 text-sm max-w-md mx-auto leading-relaxed">
                      Դուք սպառեցիք ձեր բոլոր կյանքերը։ Մի՛ վհատվեք, կրկին կարդացեք տեսությունը և փորձեք նորից ստուգել ձեր գիտելիքները։
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
                    <button
                      onClick={() => startGame(activeGameId)}
                      className="flex items-center justify-center gap-2 px-6 py-3.5 bg-stone-900 text-white rounded-xl text-sm font-semibold hover:bg-stone-800 transition"
                    >
                      <RotateCcw className="w-4 h-4" />
                      Փորձել նորից
                    </button>
                    <button
                      onClick={() => setActiveGameId(null)}
                      className="bg-stone-100 hover:bg-stone-200 text-stone-700 px-6 py-3.5 rounded-xl text-sm font-semibold transition"
                    >
                      Դեպի խաղերի ցանկ
                    </button>
                  </div>
                </motion.div>
              )}

              {isGameCleared && (
                <motion.div 
                  id="game-cleared-screen"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-10 space-y-6"
                >
                  <div className="mx-auto w-20 h-20 bg-amber-100 text-amber-600 rounded-3xl flex items-center justify-center relative">
                    <Trophy className="w-12 h-12" />
                    <Sparkles className="w-6 h-6 absolute -top-1 -right-1 text-amber-500 animate-pulse" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-black text-stone-900">Շնորհավորո՜ւմ ենք</h3>
                    <p className="text-stone-600 text-sm max-w-md mx-auto leading-relaxed font-medium">
                      Դուք փայլուն կերպով ավարտեցիք «{activeGame.title}» խաղը։
                    </p>
                  </div>

                  {/* Summary Scoreboard */}
                  <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/60 max-w-sm mx-auto grid grid-cols-2 gap-4">
                    <div className="text-center border-r border-stone-200">
                      <span className="text-[10px] font-bold text-stone-400 block uppercase">Ճիշտ պատասխան</span>
                      <span className="text-2xl font-black text-emerald-600">{score}</span>
                    </div>
                    <div className="text-center">
                      <span className="text-[10px] font-bold text-stone-400 block uppercase">Սխալներ`</span>
                      <span className="text-2xl font-black text-indigo-600">{errors}</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
                    <button
                      onClick={() => startGame(activeGameId)}
                      className="flex items-center justify-center gap-2 px-6 py-3.5 bg-amber-500 text-white rounded-xl text-sm font-semibold hover:bg-amber-600 transition"
                    >
                      <RefreshCw className="w-4 h-4" />
                      Խաղալ նորից
                    </button>
                    <button
                      onClick={() => setActiveGameId(null)}
                      className="bg-stone-900 text-white hover:bg-stone-800 px-6 py-3.5 rounded-xl text-sm font-semibold transition"
                    >
                      Անցնել այլ խաղի
                    </button>
                  </div>
                </motion.div>
              )}

              {!isGameOver && !isGameCleared && (
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6 pt-1"
                >
                  <p className="text-xs text-stone-400 font-bold tracking-wide uppercase">
                    Հրահանգ՝ <span className="text-stone-600 font-medium normal-case">{activeGame.instructions}</span>
                  </p>

                  {/* Game 1: Click words in sentence structure order */}
                  {activeGameId === 1 && (
                    <div className="space-y-6">
                      <div className="bg-stone-50 border border-stone-200/60 rounded-2xl p-5 flex flex-col items-center justify-center text-center space-y-1">
                        <span className="text-[9px] font-extrabold text-stone-400 uppercase tracking-widest leading-none">ՀԱՅԵՐԵՆ ՆԱԽԱԴԱՍՈՒԹՅՈՒՆ</span>
                        <h4 className="text-lg font-bold text-stone-800">{sentenceBuilderQuestions[currentStep].armenianSentence}</h4>
                      </div>

                      {/* Display Box for chosen words */}
                      <div className="min-h-16 border-2 border-dashed border-stone-200 rounded-2xl p-4 flex flex-wrap gap-2 items-center justify-center bg-white">
                        {selectedBuilderWords.length === 0 ? (
                          <span className="text-stone-400 text-xs font-semibold">Սեղմե՛ք ստորև բերված բառերին` նախադասությունը կազմելու համար</span>
                        ) : (
                          selectedBuilderWords.map((word, wIdx) => (
                            <button
                              key={wIdx}
                              onClick={() => removeBuilderWord(word)}
                              className="px-4 py-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-800 font-mono text-sm font-bold border border-indigo-200 rounded-xl transition flex items-center gap-1.5 cursor-pointer"
                            >
                              <span>{word}</span>
                              <span className="text-[9px] text-indigo-400 font-black">×</span>
                            </button>
                          ))
                        )}
                      </div>

                      {/* Options Pool */}
                      <div className="flex flex-wrap gap-2.5 justify-center pt-2">
                        {shuffledBuilderWords.map((word, wIdx) => (
                          <button
                            key={wIdx}
                            disabled={hasCheckedAnswer}
                            onClick={() => handleWordSelect(word)}
                            className="px-4 py-2 bg-stone-100 hover:bg-stone-200 text-stone-700 disabled:opacity-40 font-mono text-sm font-bold border border-stone-200 rounded-xl transition cursor-pointer"
                          >
                            {word}
                          </button>
                        ))}
                      </div>

                      <div className="flex gap-3 justify-center pt-4">
                        <button
                          disabled={selectedBuilderWords.length === 0 || hasCheckedAnswer}
                          onClick={checkSentenceBuilderAnswer}
                          className="px-6 py-3 bg-indigo-600 text-white rounded-xl text-sm font-semibold hover:bg-indigo-700 disabled:opacity-50 transition cursor-pointer"
                        >
                          Ստուգել
                        </button>
                        <button
                          disabled={selectedBuilderWords.length === 0 || hasCheckedAnswer}
                          onClick={resetSentenceBuilderCurrent}
                          className="px-4 py-3 bg-stone-100 hover:bg-stone-200 text-stone-600 rounded-xl text-sm font-semibold transition cursor-pointer"
                          title="Մաքրել բոլորը"
                        >
                          Ջնջել
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Game 2: Fill in the Blanks */}
                  {activeGameId === 2 && (
                    <div className="space-y-6">
                      <div className="bg-stone-50 border border-stone-200/60 rounded-2xl p-5 flex flex-col items-center justify-center text-center space-y-1">
                        <span className="text-[9px] font-extrabold text-stone-400 uppercase tracking-widest leading-none">ԹԱՐԳՄԱՆՈՒԹՅՈՒՆ</span>
                        <h4 className="text-lg font-bold text-stone-800">{fillInBlankQuestions[currentStep].armenianTranslation}</h4>
                      </div>

                      {/* Spanish Sentence display */}
                      <div className="text-center py-6">
                        <span className="font-mono text-xl md:text-2xl font-extrabold tracking-wide text-stone-800">
                          {fillInBlankQuestions[currentStep].sentenceBefore} <span className="inline-block border-b-2 border-teal-500 text-teal-600 min-w-28 text-center">{selectedOption || "___"}</span> {fillInBlankQuestions[currentStep].sentenceAfter}
                        </span>
                      </div>

                      {/* Options list */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {fillInBlankQuestions[currentStep].options.map((option, oIdx) => {
                          const isSelected = selectedOption === option;
                          return (
                            <button
                              key={oIdx}
                              disabled={hasCheckedAnswer}
                              onClick={() => handleOptionSelect(option)}
                              className={`py-3 px-4 font-mono font-bold text-sm rounded-xl border transition text-center cursor-pointer ${
                                isSelected 
                                  ? 'bg-teal-50 text-teal-800 border-teal-400 ring-2 ring-teal-100' 
                                  : 'bg-white text-stone-700 hover:bg-stone-50 border-stone-200'
                              }`}
                            >
                               {option}
                            </button>
                          );
                        })}
                      </div>

                      <div className="flex justify-center pt-4">
                        <button
                          disabled={!selectedOption || hasCheckedAnswer}
                          onClick={evaluateAnswer}
                          className="px-8 py-3 bg-teal-600 text-white rounded-xl text-sm font-semibold hover:bg-teal-700 disabled:opacity-50 transition cursor-pointer"
                        >
                          Ստուգել պատասխանը
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Game 3: Multiple choice rule test */}
                  {activeGameId === 3 && (
                    <div className="space-y-6">
                      <div className="bg-amber-50/50 border border-amber-200/80 rounded-2xl p-5 space-y-2">
                        <span className="text-[10px] font-bold text-amber-700 uppercase tracking-widest">A1 Քերականական Հարց</span>
                        <h4 className="text-lg font-bold text-stone-900 leading-snug">{quizQuestions[currentStep].question}</h4>
                      </div>

                      {/* Multi Options List */}
                      <div className="flex flex-col gap-3">
                        {quizQuestions[currentStep].options.map((option, oIdx) => {
                          const isSelected = selectedOptionIndex === oIdx;
                          return (
                            <button
                              key={oIdx}
                              disabled={hasCheckedAnswer}
                              onClick={() => handleOptionSelect(option, oIdx)}
                              className={`p-4 text-left rounded-xl border transition text-sm font-medium cursor-pointer ${
                                isSelected 
                                  ? 'bg-amber-50 text-amber-900 border-amber-400 ring-2 ring-amber-100 font-semibold' 
                                  : 'bg-white text-stone-700 hover:bg-stone-50 hover:text-stone-900 border-stone-200'
                              }`}
                            >
                              <div className="flex items-center gap-3">
                                <span className={`inline-flex items-center justify-center font-mono font-bold text-xs w-6 h-6 rounded-lg ${isSelected ? 'bg-amber-200 text-amber-950' : 'bg-stone-100 text-stone-500'}`}>
                                  {String.fromCharCode(65 + oIdx)}
                                </span>
                                <span>{option}</span>
                              </div>
                            </button>
                          );
                        })}
                      </div>

                      <div className="flex justify-center pt-2">
                        <button
                          disabled={selectedOptionIndex === null || hasCheckedAnswer}
                          onClick={evaluateAnswer}
                          className="px-8 py-3 bg-amber-600 text-white rounded-xl text-sm font-semibold hover:bg-amber-700 disabled:opacity-50 transition cursor-pointer"
                        >
                          Ստուգել պատասխանը
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Game 4: Vocabulary Matching Flip Engine */}
                  {activeGameId === 4 && (
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <p className="text-xs text-stone-500 font-bold">Գտե՛ք 6 զույգերը, հերթով միացնելով իսպաներենը հայերենի հետ։</p>
                        {matchingStreak > 1 && (
                          <span className="text-xs bg-emerald-100 text-emerald-800 font-bold px-2.5 py-0.5 rounded-full animate-bounce">
                            Կոմբո` {matchingStreak} 🔥
                          </span>
                        )}
                      </div>

                      <div className="grid grid-cols-3 gap-3 md:gap-4">
                        {matchCards.map((card) => {
                          const isSelected = selectedCardId === card.id;
                          return (
                            <button
                              key={card.id}
                              disabled={card.isMatched}
                              onClick={() => handleCardClick(card.id)}
                              className={`h-24 md:h-28 rounded-2xl border-2 p-3 flex items-center justify-center text-center transition-all duration-300 relative overflow-hidden text-sm font-bold cursor-pointer ${
                                card.isMatched
                                  ? 'bg-emerald-50 border-emerald-300/80 text-emerald-700 opacity-60'
                                  : isSelected
                                    ? 'bg-amber-50 border-amber-400 text-amber-950/90 ring-4 ring-amber-100'
                                    : card.isFlipped
                                      ? 'bg-stone-50 border-stone-400 text-stone-800'
                                      : 'bg-white border-stone-200 hover:border-stone-300 text-stone-800 hover:bg-stone-50/50 shadow-xs'
                              }`}
                            >
                              <div className="space-y-1">
                                <span className={`text-[9px] font-extrabold uppercase tracking-widest block leading-none ${
                                  card.isMatched ? 'text-emerald-500' : isSelected ? 'text-amber-500' : 'text-stone-400'
                                }`}>
                                  {card.lang === 'esp' ? 'ISPAÑOL' : 'ARMENIAN'}
                                </span>
                                <span className={`line-clamp-2 leading-tight ${card.lang === 'esp' ? 'font-mono' : 'font-sans'}`}>
                                  {card.text}
                                </span>
                              </div>
                            </button>
                          );
                        })}
                      </div>

                      <div className="flex justify-center pt-2">
                        <button
                          onClick={initVocabularyMatch}
                          className="flex items-center gap-2 px-4 py-2.5 border border-stone-200 hover:bg-stone-100 rounded-xl text-xs font-bold text-stone-600 transition"
                        >
                          <RefreshCw className="w-3.5 h-3.5" />
                          Խառնել նոր բառեր
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Game 5: SER / ESTAR / HAY choice */}
                  {activeGameId === 5 && (
                    <div className="space-y-6">
                      <div className="bg-stone-50 border border-stone-200/60 rounded-2xl p-5 flex flex-col items-center justify-center text-center space-y-1">
                        <span className="text-[9px] font-extrabold text-stone-400 uppercase tracking-widest leading-none">ՆԱԽԱԴԱՍՈՒԹՅԱՆ ԻՄԱՍՏԸ (ՀԱՅԵՐԵՆ)</span>
                        <h4 className="text-lg font-bold text-stone-800">{serEstarHayQuestions[currentStep].armenianTranslation}</h4>
                      </div>

                      {/* Question Frame */}
                      <div className="text-center py-6">
                        <h4 className="font-sans text-xl md:text-2xl font-extrabold text-stone-800 tracking-wide">
                          {serEstarHayQuestions[currentStep].sentence.split("___")[0]}
                          <span className="inline-block border-b-2 border-rose-500 text-rose-600 font-mono min-w-28 text-center uppercase mx-1">
                            {selectedOption || "___"}
                          </span>
                          {serEstarHayQuestions[currentStep].sentence.split("___")[1]}
                        </h4>
                      </div>

                      {/* Large choice layouts */}
                      <div className="grid grid-cols-3 gap-3 md:gap-4">
                        {['es', 'está', 'hay'].map((verbOption) => {
                          const isSelected = selectedOption === verbOption;
                          return (
                            <button
                              key={verbOption}
                              disabled={hasCheckedAnswer}
                              onClick={() => handleOptionSelect(verbOption)}
                              className={`p-4 md:p-6 rounded-2xl border text-center transition-all cursor-pointer ${
                                isSelected
                                  ? 'bg-rose-50 border-rose-400 text-rose-950 ring-4 ring-rose-100 font-bold'
                                  : 'bg-white border-stone-200 text-stone-700 hover:bg-stone-50 font-semibold'
                              }`}
                            >
                              <span className="font-mono text-lg md:text-xl block">{verbOption}</span>
                              <span className="text-[10px] text-stone-400 tracking-wide block mt-1">
                                {verbOption === 'es' ? 'SER (ինքնություն)' : verbOption === 'está' ? 'ESTAR (տեղ/վիճակ)' : 'HAY (կա/գոյություն)'}
                              </span>
                            </button>
                          );
                        })}
                      </div>

                      <div className="flex justify-center pt-4">
                        <button
                          disabled={!selectedOption || hasCheckedAnswer}
                          onClick={evaluateAnswer}
                          className="px-8 py-3 bg-rose-600 text-white rounded-xl text-sm font-semibold hover:bg-rose-700 disabled:opacity-50 transition cursor-pointer"
                        >
                          Ստուգել պատասխանը
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Game 6: Translation Multi Choice Cards */}
                  {activeGameId === 6 && (
                    <div className="space-y-6">
                      <div className="bg-stone-50 border border-stone-200/60 rounded-2xl p-5 flex flex-col items-center justify-center text-center space-y-1">
                        <span className="text-[9px] font-extrabold text-stone-400 uppercase tracking-widest leading-none">ԹԱՐԳՄԱՆԵ՛Ք ՀԱՅԵՐԵՆԸ</span>
                        <h4 className="text-lg font-black text-violet-900 font-sans leading-tight">
                          «{translationQuestions[currentStep].armenian}»
                        </h4>
                      </div>

                      {/* Options cards */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {translationQuestions[currentStep].options.map((option, oIdx) => {
                          const isSelected = selectedOption === option;
                          return (
                            <button
                              key={oIdx}
                              disabled={hasCheckedAnswer}
                              onClick={() => handleOptionSelect(option)}
                              className={`p-4 rounded-xl border text-left font-serif text-sm transition-all cursor-pointer ${
                                isSelected
                                  ? 'bg-violet-50 border-violet-400 text-violet-950 ring-4 ring-violet-100 font-semibold'
                                  : 'bg-white border-stone-200 text-stone-700 hover:bg-stone-50'
                              }`}
                            >
                              <div className="flex items-center gap-3">
                                <span className={`inline-flex items-center justify-center font-mono text-[10px] w-5 h-5 rounded-md ${isSelected ? 'bg-violet-200 text-violet-950' : 'bg-stone-100 text-stone-400'}`}>
                                  {oIdx + 1}
                                </span>
                                <span className="font-mono text-xs md:text-sm">{option}</span>
                              </div>
                            </button>
                          );
                        })}
                      </div>

                      <div className="flex justify-center pt-2">
                        <button
                          disabled={!selectedOption || hasCheckedAnswer}
                          onClick={evaluateAnswer}
                          className="px-8 py-3 bg-violet-600 text-white rounded-xl text-sm font-semibold hover:bg-violet-700 disabled:opacity-50 transition cursor-pointer"
                        >
                          Ստուգել թարգմանությունը
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Feedback Overlay Banner on Evaluation */}
                  {hasCheckedAnswer && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`rounded-2xl p-5 border flex flex-col md:flex-row items-start md:items-center justify-between gap-4 ${
                        isLastAnswerCorrect 
                          ? 'bg-emerald-50 border-emerald-200 text-emerald-900 shadow-sm' 
                          : 'bg-rose-50 border-rose-200 text-rose-900 shadow-sm'
                      }`}
                    >
                      <div className="flex items-start gap-3.5">
                        <div className="shrink-0 mt-0.5">
                          {isLastAnswerCorrect ? (
                            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                          ) : (
                            <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                          )}
                        </div>
                        <div>
                          <h4 className="font-bold text-sm leading-tight">
                            {isLastAnswerCorrect ? 'Ճիշտ պատասխան 🎉' : 'Ոչ այնքան ճիշտ 😢'}
                          </h4>
                          {/* Display Game 3 & Game 5 specific explanations or dynamic translations */}
                          <p className="text-xs mt-1 leading-normal text-stone-600 max-w-lg font-medium">
                            {activeGameId === 3 
                              ? quizQuestions[currentStep].explanation 
                              : activeGameId === 5 
                                ? serEstarHayQuestions[currentStep].explanation 
                                : activeGameId === 1 
                                  ? sentenceBuilderQuestions[currentStep].correctSpanishWords.join(" ") 
                                  : activeGameId === 2 
                                    ? fillInBlankQuestions[currentStep].armenianTranslation 
                                    : activeGameId === 6 
                                      ? translationQuestions[currentStep].correctAnswer 
                                      : 'Շարունակե՛ք լավագույն կերպով'
                            }
                          </p>
                        </div>
                      </div>

                      <button
                        onClick={handleNextStep}
                        className={`text-white px-5 py-2.5 rounded-xl font-bold text-xs shrink-0 flex items-center gap-1.5 shadow-sm transition tracking-wide leading-none cursor-pointer ${
                          isLastAnswerCorrect ? 'bg-emerald-600 hover:bg-emerald-700' : 'bg-rose-600 hover:bg-rose-700'
                        }`}
                      >
                        <span>Հաջորդը</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </motion.div>
                  )}

                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      )}
    </div>
  );
}
