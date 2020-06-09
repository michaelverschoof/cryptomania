import { helloWorld } from '../src/cryptomania';

describe('Additions', () => {

    test('hello', () => {
        const result = helloWorld();
        console.log(result);
        expect(result).toBe('hello world');
    });
});
