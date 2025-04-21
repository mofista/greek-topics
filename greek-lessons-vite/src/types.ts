export interface VocabularyItem {
  word: string;
  translation: string;
  example: string;
}

export interface Topic {
  id: string;
  title: string;
  vocabulary: VocabularyItem[];
  phrases: string[];
  example: string;
} 