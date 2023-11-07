/**
 * Challenge: 
 * Implement a type that evaluates to a numeric type literal, equivalent to the length of a specified tuple type T
 */

// Implement this type
type LengthOfTuple<T> = T extends readonly any[] ? T["length"] : never
// Accepts any array, even if it is readonly
// if T is an array, return the length of the array

// Tests
const Fruits = ["cherry", "banana"] as const
type challenge2Cases = [
  Expect<Equal<LengthOfTuple<[1, 2, 3]>, 3>>,
  Expect<NotEqual<LengthOfTuple<[1, 2, 3]>, 2>>,
  Expect<Equal<LengthOfTuple<typeof Fruits>, 2>>,
  Expect<Equal<LengthOfTuple<[]>, 0>>
]