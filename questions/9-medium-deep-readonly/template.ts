export type DeepReadonly<T> = {
  readonly [key in keyof T]: T[key] extends (...args: any) => any
    ? T[key]
    : T extends Record<any, any>
      ? DeepReadonly<T[key]>
      : T[key]
}
