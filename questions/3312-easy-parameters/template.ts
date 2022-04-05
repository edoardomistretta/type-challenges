export type MyParameters<T extends (...a: any[]) => any> = T extends (...a: infer A) => any
  ? A
  : never
