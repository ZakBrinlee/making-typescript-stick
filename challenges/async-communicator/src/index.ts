import { expectType } from "tsd";

/**
 * Challenge: 
 * Create a utility type WrapForPenpal<T> that takes an object T with methods
 * (you may assume no non-function properties are ever on this object),
 * and emits a type with similar methods, but any non-promise return types
 * become ”Promise-ified”.
 */
// IMPLEMENT THIS TYPE
export type WrapForPenpal<T> = {
  [K in keyof T]: T[K] extends { (...arg: infer Args): infer RT } 
    ? (...arg: Args) =>Promise<RT>
    : never
}

/**
 * Test Scenario - Do not change anything below this line
 */
const methods = {
  add(a: number, b: number): number {
    return a + b;
  },
  subtract(a: number, b: number): number {
    return a - b;
  },
};
const asyncMethods: WrapForPenpal<typeof methods> = {} as any;

let addPromise = asyncMethods.add(1, 2);
expectType<Promise<number>>(addPromise);
// @ts-expect-error
expectType<typeof addPromise>("this should fail");

let subtractPromise = asyncMethods.subtract(1, 2);
expectType<Promise<number>>(subtractPromise);
// @ts-expect-error
expectType<typeof subtractPromise>("this should fail");
