import { Memoize } from '../src/index';

class TestClass {
    constructor(private jestFunction: (...args: any[]) => any) {}

    @Memoize({})
    test(...args: any[]) {
        return this.jestFunction(...args);
    };
};

describe('Memoize', () => {
    it('should cache subsequent values', () => {
        const f = jest.fn((x) => x*2);
        const instance = new TestClass(f)

        const out1 = instance.test(2);
        const out2 = instance.test(2);

        expect(out1).toEqual(4);
        expect(out2).toEqual(4);
        expect(f).toHaveBeenCalledTimes(1);
    });
});
