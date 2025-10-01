declare module 'badwords-ko' {
    /**
     * Options for the Filter constructor.
     */
    interface FilterOptions {
        /** Instantiate filter with no blacklist */
        emptyList?: boolean;
        /** Instantiate filter with custom list of words */
        list?: string[];
        /** Character used to replace profane words. Defaults to "*" */
        placeHolder?: string;
        /** Regular expression used to sanitize words before comparing them to blacklist. */
        regex?: RegExp | string;
        /** Regular expression used to replace profane words with placeHolder. */
        replaceRegex?: RegExp | string;
        /** Regular expression used to split a string into words. */
        splitRegex?: RegExp | string;
        /** Words to exclude from profanity checking (whitelist) */
        exclude?: string[];
    }

    /**
     * A profanity filter for Korean text, based on the provided list.
     */
    class Filter {
        /**
         * Filter constructor.
         * @param options - Filter instance options
         */
        constructor(options?: FilterOptions);

        /**
         * Determine if a string contains profane language.
         * @param string - String to evaluate for profanity.
         * @returns True if the string is profane, false otherwise.
         */
        isProfane(string: string): boolean;

        /**
         * Replace a word with placeHolder characters.
         * @param string - String to replace.
         * @returns The string with all characters (matching the regex) replaced by the placeholder.
         */
        replaceWord(string: string): string;

        /**
         * Evaluate a string for profanity and return an edited version.
         * @param string - Sentence to filter.
         * @returns The filtered string.
         */
        clean(string: string): string;

        /**
         * Add word(s) to blacklist filter / remove words from whitelist filter
         * @param wordsToAdd - Word(s) to add to blacklist
         */
        addWords(...wordsToAdd: string[]): void;

        /**
         * Add words to whitelist filter
         * @param wordsToRemove - Word(s) to add to whitelist (exclude list).
         */
        removeWords(...wordsToRemove: string[]): void;
    }

    export = Filter;
}