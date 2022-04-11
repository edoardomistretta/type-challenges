export declare function PromiseAll<T extends unknown[]>(values: readonly [...T]): Promise<
  {
    [key in keyof T]: T[key] extends Promise<infer A> ? A : T[key]
  }
>
