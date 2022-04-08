export type Last<I> =
  I extends [infer H1, ...infer T1]
    ? T1 extends []
      ? H1
      : Last<T1>
    : never
