type StringToArray<S extends string> =
  S extends `${infer H}${infer T}`
    ? T extends ""
      ? [H]
      : [H, ...StringToArray<T>]
    : []

export type LengthOfString<S extends string> = StringToArray<S>["length"]
