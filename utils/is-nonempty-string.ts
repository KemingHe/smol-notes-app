/**
 * Type guard that checks if a value is a non-empty string.
 * @param value - The value to check
 * @returns True if the value is a string with length greater than 0
 */
export const isNonemptyString = (value: unknown): value is string => {
  return typeof value === 'string' && value.length > 0;
};
