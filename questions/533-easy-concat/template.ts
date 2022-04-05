export type Concat<T extends unknown[], U extends unknown[]> =
  T extends [...infer TT, infer HT]
    ? Concat<TT, [HT, ...U]>
    : U
