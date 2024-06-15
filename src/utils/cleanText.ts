import * as cleaner from "clean-text-utils";

export default function cleanText(text: string): string {
  let cleaned = "";

  cleaned = cleaner.strip.emoji(text);

  cleaned = cleaner.strip.punctuation(cleaned);

  cleaned = cleaner.strip.extraSpace(cleaned);

  cleaned = cleaner.strip.nonASCII(cleaned);

  cleaned = cleaner.replace.exoticChars(cleaned);

  return cleaned;
}
