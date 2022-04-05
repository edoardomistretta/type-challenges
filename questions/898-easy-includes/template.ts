type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false

export type Includes<T extends readonly any[], U> =
  T extends [infer HEAD, ...infer TAIL]
    ? Equal<HEAD, U> extends true
      ? true
      : Includes<TAIL, U>
    : false
