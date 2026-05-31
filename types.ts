export interface Example {
  spanish: string;
  armenian: string;
  breakdown?: string;
}

export interface Rule {
  id: number;
  title: string;
  subtitle?: string;
  formula?: string;
  description: string;
  examples: Example[];
  notes?: string[];
  category: 'sentence-structure' | 'verbs' | 'nouns-adjectives' | 'essential-verbs';
}

export interface SentenceBuilderQuestion {
  id: string;
  armenianSentence: string;
  correctSpanishWords: string[]; // e.g. ["Yo", "leo", "un", "libro."] or ["Yo", "leo", "un", "libro"]
  shuffledWords: string[];
}

export interface FillInBlankQuestion {
  id: string;
  sentenceBefore: string;
  sentenceAfter: string;
  correctAnswer: string;
  options: string[];
  armenianTranslation: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface VocabItem {
  id: string;
  spanish: string;
  armenian: string;
}

export interface SerEstarHayQuestion {
  id: string;
  sentence: string; // e.g. "Lucía ___ en casa."
  correctAnswer: 'es' | 'está' | 'hay';
  explanation: string;
  armenianTranslation: string;
}

export interface TranslationQuestion {
  id: string;
  armenian: string;
  options: string[];
  correctAnswer: string;
}

export type GameId = 1 | 2 | 3 | 4 | 5 | 6;

export interface GameInfo {
  id: GameId;
  title: string;
  description: string;
  instructions: string;
  iconName: string;
}
