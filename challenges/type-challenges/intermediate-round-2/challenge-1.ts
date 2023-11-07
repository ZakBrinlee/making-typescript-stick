/**
 * Challenge: 
 * Implement a type that emits the return type of a function type F
 */

// Implement this type
type ReturnOf<F> = F extends (...args: any[]) => infer R ? R : never
// Ensure that F is a function with any number of arguments
// infer that the function returns something as R (used as a type parameter)

// Tests

const flipCoin = () =>
  Math.random() > 0.5 ? "heads" : "tails"
const rockPaperScissors = (arg: 1 | 2 | 3) => {
  return arg === 1
    ? ("rock" as const)
    : arg === 2
    ? ("paper" as const)
    : ("scissors" as const)
}

type intermediateChallenge1Cases = [
  // simple 1
  Expect<Equal<boolean, ReturnOf<() => boolean>>>,
  // simple 2
  Expect<Equal<123, ReturnOf<() => 123>>>,
  Expect<
    Equal<ComplexObject, ReturnOf<() => ComplexObject>>
  >,
  Expect<
    Equal<
      Promise<boolean>,
      ReturnOf<() => Promise<boolean>>
    >
  >,
  Expect<Equal<() => "foo", ReturnOf<() => () => "foo">>>,
  Expect<
    Equal<"heads" | "tails", ReturnOf<typeof flipCoin>>
  >,
  Expect<
    Equal<
      "rock" | "paper" | "scissors",
      ReturnOf<typeof rockPaperScissors>
    >
  >
]

type ComplexObject = {
  a: [12, "foo"]
  bar: "hello"
  prev(): number
}