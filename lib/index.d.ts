export { autobind as AutoBind } from 'core-decorators';
import * as memoizee from 'memoizee';
export interface MemoizeOptions extends memoizee.Options {
    observable?: boolean;
    ttl?: number;
}
export declare function Memoize(this: any, options: MemoizeOptions): MethodDecorator;
