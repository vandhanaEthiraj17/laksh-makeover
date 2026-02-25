
/**
 * Calculates the balance due based on total amount and advance paid.
 */
export const calculateBalanceDue = (total: number, advance: number): number => {
  return Math.max(0, total - advance);
};

/**
 * Formats a number as Indian Rupee currency.
 */
export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
};

/**
 * Simple email validation
 */
export const isValidEmail = (email: string): boolean => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};
