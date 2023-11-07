/**
 * Challenge: 
 * Implement a type IsTuple, which takes an input type T and returns whether T is tuple type.
 */

// Implement this type
type IsTuple<T> = T extends readonly any[] 
  ? [...T, any]['length'] extends T['length']
    ? false
    : true
  : false
// If array of T + any is the same length as T, then it is not a tuple
// If T is not an array of anything, then it is not a tuple

// Tests
type intermediateChallenge3Cases = [
  Expect<Equal<IsTuple<[]>, true>>,
  Expect<Equal<IsTuple<[number]>, true>>,
  Expect<Equal<IsTuple<readonly [1]>, true>>,
  Expect<Equal<IsTuple<{ length: 1 }>, false>>,
  Expect<Equal<IsTuple<number[]>, false>>
]