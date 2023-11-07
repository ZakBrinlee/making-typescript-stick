/**
 * Challenge: 
 * Implement a type that evaluates to T if the type C is true or F if C is false.
 */

// Implement this type
type If<C, T, F> = C extends true ? T : F

// "extends" is similar to === or if something is true

// Tests
type challenge1Cases = [
  Expect<Equal<If<true, "apple", "pear">, "apple">>,
  Expect<Equal<If<false, "orange", 42>, 42>>
]