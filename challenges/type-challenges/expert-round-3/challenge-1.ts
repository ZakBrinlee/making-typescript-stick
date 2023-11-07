/**
 * Challenge: 
 * Implement the type version of Array.indexOf, IndexOf<T, U> takes an Array T, any U and returns the index of the first U in Array T.
 */

// Implement this type
// Example walk-through
// [1, 2 ,3]
// First = 1, Rest = [2, 3]
// IndexOf<[2,3], 2, [1]>
// IndexOf<[3], 2, [1,2]>

type IndexOf<
  T extends any[],
  U,
  ACC extends any[] = []
> = T[0] extends U 
  ? ACC["length"]
  : T extends [infer First, ...infer Rest] 
    ? IndexOf<Rest, U, [...ACC, First]>
    : -1

// Tests
type expertChallengeCases1 = [
  Expect<Equal<IndexOf<[1, 2, 3], 2>, 1>>,
  Expect<Equal<IndexOf<[2, 6, 3, 8, 4, 1, 7, 3, 9], 3>, 2>>,
  Expect<Equal<IndexOf<[0, 0, 0], 2>, -1>>
]