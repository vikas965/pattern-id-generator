const generatePatternId = require('../index');

describe('Pattern ID Generator', () => {
  test('generates single ID with simple pattern', () => {
    const id = generatePatternId('AA99');
    expect(id).toMatch(/^[A-Z]{2}\d{2}$/);
  });

  test('generates multiple IDs', () => {
    const ids = generatePatternId('XX-aa', 5);
    expect(ids).toHaveLength(5);
    ids.forEach(id => {
      expect(id).toMatch(/^[A-Za-z0-9]{2}-[a-z]{2}$/);
    });
  });

  test('handles custom patterns', () => {
    const id = generatePatternId('PROD-####');
    expect(id).toMatch(/^PROD-\d{4}$/); // Should now pass
  });

  test('throws error for invalid pattern', () => {
    expect(() => generatePatternId(123)).toThrow('Pattern must be a non-empty string');
  });

  test('throws error for invalid count', () => {
    expect(() => generatePatternId('AA99', 'five')).toThrow('Count must be a positive number');
  });

  test('handles # as digit placeholder', () => {
    const id = generatePatternId('INV-####');
    expect(id).toMatch(/^INV-\d{4}$/);
  });
  
  test('handles mixed # and 9 placeholders', () => {
    const id = generatePatternId('CUST-##99');
    expect(id).toMatch(/^CUST-\d{2}\d{2}$/);
  });
});