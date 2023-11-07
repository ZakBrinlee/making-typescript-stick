/**
 * Challenge: 
 * Implement a type that concatenates two tuple types A, and B
 */

// Implement this type
type Concat<A extends any[], B extends any[]> = [...A, ...B]
// Ensure A & B are of type array
// Destructure each array into a new array

// Tests
type challenge4Cases = [
  Expect<Equal<Concat<[], []>, []>>,
  Expect<Equal<Concat<[], ["hello"]>, ["hello"]>>,
  Expect<
    Equal<Concat<[18, 19], [20, 21]>, [18, 19, 20, 21]>
  >,
  Expect<
    Equal<
      Concat<[42, "a", "b"], [Promise<boolean>]>,
      [42, "a", "b", Promise<boolean>]
    >
  >
]