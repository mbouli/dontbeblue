import profanity from 'leo-profanity';

profanity.loadDictionary();

profanity.add(['ador', 'hybe', 'min hee jin', 'mhj', 'scandal', 'lawsuit', 'traitor', 'snake', 'sellout', 'fraud', 'corrupt', 'backstabber', 'steal', 'copy', 'copycat', 'thief', 'stolen', 'plagiarism', 'sabotage', 'hate', 'disband', 'flop', 'irrelevant']);

export function filterContent(content: string): {
    isClean: boolean;
    filteredContent?: string;
    reason?: string
} {
    const lowerContent = content.toLowerCase();

    // Check for banned words
    for (const word of profanity.list()) {
        if (lowerContent.includes(word.toLowerCase())) {
            return {
                isClean: false,
                reason: `Message contains inappropriate language`
            };
        }
    }

    // Check for banned patterns
    if (profanity.check(content)) {
        return {
            isClean: false,
            reason: `Message contains inappropriate language`
        };
    }

    // Check for excessive repetition (potential spam)
    const words = content.split(/\s+/);
    const wordCounts = words.reduce((acc, word) => {
        acc[word.toLowerCase()] = (acc[word.toLowerCase()] || 0) + 1;
        return acc;
    }, {} as Record<string, number>);

    for (const [word, count] of Object.entries(wordCounts)) {
        if (count > 3 && word.length > 2) {
            return {
                isClean: false,
                reason: "Please avoid repeating the same word multiple times"
            };
        }
    }

    return { isClean: true };
}

export function sanitizeContent(content: string): string {
    // Basic sanitization - remove potential HTML/script tags
    return content
        .replace(/<[^>]*>/g, '') // Remove HTML tags
        .replace(/javascript:/gi, '') // Remove javascript: links
        .replace(/on\w+\s*=/gi, '') // Remove event handlers
        .trim();
}
