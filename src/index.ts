import { decorate } from 'core-decorators';
export { autobind as AutoBind } from 'core-decorators';
import * as memoizee from 'memoizee';
import { duration, unitOfTime } from 'moment';

import { memoizeeRx } from 'memoizee-rx';

type HumanDuration = [number, unitOfTime.DurationConstructor];

export interface MemoizeOptions extends memoizee.Options {
    observable?: boolean;
    ttl?: HumanDuration;
}

export function Memoize(this: any, options: MemoizeOptions) {
    const wrapperFunction = options.observable ?
        memoizeeRx : memoizee;
    if (options.ttl) {
        options = {
            ...options,
            maxAge: duration(...options.ttl).asMilliseconds(),
        };
    }
    return decorate.call(this, wrapperFunction, options);
}
