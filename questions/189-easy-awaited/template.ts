export type MyAwaited<T extends Promise<unknown>> =
  T extends Promise<infer V>
    ? V extends Promise<unknown>
      ? MyAwaited<V>
      : V
    : never
