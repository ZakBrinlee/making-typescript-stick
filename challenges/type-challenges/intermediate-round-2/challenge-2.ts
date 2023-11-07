/**
 * Challenge: 
 * Implement a type that splits a string literal type S by a delimiter SEP, emitting a tuple type containing the string literal types for all of the “tokens”
 */

// Implement this type
type Split<S extends string, SEP extends string> = 
  string extends S 
  ? string[] 
  : S extends `${infer FIRST}${SEP}${infer REMAINDER}` 
    ? [FIRST, ...Split<REMAINDER, SEP>]
    : SEP extends ""
      ? []
      : [S]
// Does S match the pattern of something => seperatator => remainder text
// If so, place the first something into the array, following by spreading the process again with 

// Tests

type intermediateChallenge2Cases = [
  Expect<
    Equal<
      Split<"Hi! How are you?", "z">,
      ["Hi! How are you?"]
    >
  >,
  Expect<
    Equal<
      Split<"Hi! How are you?", " ">,
      ["Hi!", "How", "are", "you?"]
    >
  >,
  Expect<
    Equal<
      Split<"Hi! How are you?", "">,
      [
        "H",
        "i",
        "!",
        " ",
        "H",
        "o",
        "w",
        " ",
        "a",
        "r",
        "e",
        " ",
        "y",
        "o",
        "u",
        "?"
      ]
    >
  >,
  Expect<Equal<Split<"", "">, []>>,
  Expect<Equal<Split<"", "z">, [""]>>,
  Expect<Equal<Split<string, "whatever">, string[]>>
]