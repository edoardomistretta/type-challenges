type Whitespace = '\n' | '\t' | ' '

type TrimLeft<S extends string> =
  S extends `${Whitespace}${infer T}`
    ? TrimLeft<T>
    : S

type TrimRight<S extends string> =
  S extends `${infer H}${Whitespace}`
    ? TrimRight<H>
    : S

export type Trim<S extends string> = TrimLeft<TrimRight<S>>
