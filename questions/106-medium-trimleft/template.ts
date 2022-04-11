type WhiteSpace = "\t" | "\n" | " ";

export type TrimLeft<S extends string> =
  S extends `${infer H}${infer REST}`
    ? H extends WhiteSpace
      ? TrimLeft<REST>
      : S
    : never
