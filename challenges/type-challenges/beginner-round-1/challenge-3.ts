/**
 * Challenge: 
 * Implement a type that evaluates to true if the type A ends with the type B, otherwise false.
 */

// Implement this type
type EndsWith<A extends string, B extends string> =
  A extends `${any}${B}` ? true : false
// Validate that A ends with B, anything before B is fine

// Tests
type challenge3Cases = [
  Expect<Equal<EndsWith<"ice cream", "cream">, true>>,
  Expect<Equal<EndsWith<"ice cream", "chocolate">, false>>
]