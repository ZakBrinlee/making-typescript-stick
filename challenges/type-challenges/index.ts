/**
 * 
 * Type challenges from the Type Challenges github repo
 * curated challenges from Making TypeScript Stick course
 * https://www.typescript-training.com/course/making-typescript-stick/08-type-challenges/
 * 
 */

// @errors: 2344
type Expect<T extends true> = T
type Equal<X, Y> =
(<T>() => T extends X ? 1 : 2) extends
(<T>() => T extends Y ? 1 : 2) ? true : false

type NotEqual<X, Y> = true extends Equal<X, Y> ? false : true

// ---cut---