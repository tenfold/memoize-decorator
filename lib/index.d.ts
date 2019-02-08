export { autobind as AutoBind } from 'core-decorators';
import * as memoizee from 'memoizee';
import { unitOfTime } from 'moment';
declare type HumanDuration = [number, unitOfTime.DurationConstructor];
export interface MemoizeOptions extends memoizee.Options {
    observable?: boolean;
    ttl?: HumanDuration;
}
export declare function Memoize(this: any, options: MemoizeOptions): MethodDecorator;
