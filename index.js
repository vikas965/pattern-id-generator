/**
 * Pattern-based random ID generator
 * @param {string} pattern - The pattern to generate IDs (e.g., "XX99-AAA")
 * @param {number} count - Number of IDs to generate
 * @returns {string|string[]} Single ID or array of IDs
 */
function generatePatternId(pattern, count = 1) {
    if (!pattern || typeof pattern !== 'string') {
      throw new Error('Pattern must be a non-empty string');
    }
  
    if (isNaN(count) || count < 1) {
      throw new Error('Count must be a positive number');
    }
  
    const patterns = {
      'A': () => String.fromCharCode(65 + Math.floor(Math.random() * 26)), // A-Z
      'a': () => String.fromCharCode(97 + Math.floor(Math.random() * 26)), // a-z
      '9': () => Math.floor(Math.random() * 10).toString(), // 0-9
      '#': () => Math.floor(Math.random() * 10).toString(), // 0-9 (alternative to '9')
      'X': () => {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        return chars.charAt(Math.floor(Math.random() * chars.length));
      }, // Alphanumeric
      '*': () => {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
        return chars.charAt(Math.floor(Math.random() * chars.length));
      } // Any character
    };
  
    const generateSingleId = () => {
      return pattern.split('').map(char => {
        const generator = patterns[char];
        return generator ? generator() : char;
      }).join('');
    };
  
    if (count === 1) {
      return generateSingleId();
    }
  
    const results = [];
    for (let i = 0; i < count; i++) {
      results.push(generateSingleId());
    }
    return results;
  }
  
  module.exports = generatePatternId;