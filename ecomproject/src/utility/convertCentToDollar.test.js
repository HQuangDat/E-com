import { convertCentToDollar } from './convertCentToDollar';
import { describe, expect, it } from 'vitest';


describe('convertCentToDollar', () => {
    it('convert 1000 cents to 10 dollars', () => {
        expect(convertCentToDollar(1000)).toBe('$10.00');
    })

    it('display 2 decimal', () => {
        expect(convertCentToDollar(1050)).toBe('$10.50');
    })
})
