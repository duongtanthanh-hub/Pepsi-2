
export interface LuckyLetter {
  value: string;
  label: string;
  description: string;
  textOverlay: string;
  getPrompt: () => string;
}
