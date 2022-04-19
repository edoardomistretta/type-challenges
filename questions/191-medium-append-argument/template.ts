export type AppendArgument<Fn extends (...args: any[]) => any, A> = 
  Fn extends (...args: infer ARGS) => infer RT
    ? (...args: [...ARGS, A]) => RT
    : never
