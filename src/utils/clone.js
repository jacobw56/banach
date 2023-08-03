// Simple way to deeply clone an array or object
export const clone = (x) => JSON.parse(JSON.stringify(x));
