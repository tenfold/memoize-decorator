import { decorate } from 'core-decorators';
export { autobind as AutoBind } from 'core-decorators';
import * as memoizee from 'memoizee';

import { memoizeeRx } from 'memoizee-rx';
export interface MemoizeOptions extends memoizee.Options {
    observable?: boolean;
    ttl?: number;
}

export function Memoize(this: any, options: MemoizeOptions) {
    const wrapperFunction = options.observable ?
        memoizeeRx : memoizee;
    if (options.ttl) {
        options = {
            ...options,
            maxAge: options.ttl,
        };
    }
    return decorate.call(this, wrapperFunction, options);
}
