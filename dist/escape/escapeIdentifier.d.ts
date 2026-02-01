/**
 * Reset the internal state - useful for testing
 */
export declare function resetIdentifierState(): void;
/**
 * Used for identifiers:
 * - If the name is already a valid JS identifier, return it unmodified.
 * - Otherwise:
 *   - Remove invalid characters.
 *   - Convert to PascalCase.
 *   - If the result starts with a digit, prefix with `_`.
 *   - If duplicate, add a number suffix.
 * - Returns a default identifier if the identifier cannot be salvaged.
 */
export declare function escapeIdentifier(name: string): string;
