import { describe, expect, it } from 'vitest';
import { slugify } from './slugify';

describe('slugify', () => {
  it('lowercases and hyphenates', () => {
    expect(slugify('Sales Analytics Power BI Template!')).toBe('sales-analytics-power-bi-template');
  });

  it('strips apostrophes and collapses separators', () => {
    expect(slugify("  It's  a   Test—Case  ")).toBe('its-a-test-case');
  });

  it('trims leading/trailing dashes and caps length', () => {
    expect(slugify('---hello---')).toBe('hello');
    expect(slugify('a'.repeat(500)).length).toBeLessThanOrEqual(200);
  });
});
