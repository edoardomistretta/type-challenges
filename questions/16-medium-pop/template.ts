export type Pop<T extends any[]> =
  T extends [...infer TAIL, infer _]
    ? TAIL
    : []
