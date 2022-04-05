import { Equal, Expect } from '@type-challenges/utils'
import { MyAwaited } from './template'

type X = Promise<string>
type Y = Promise<{ field: number }>
type Z = Promise<Promise<string | number>>
type W = Promise<Promise<Promise<Promise<Promise<string | number>>>>>

type cases = [
  Expect<Equal<MyAwaited<X>, string>>,
  Expect<Equal<MyAwaited<Y>, { field: number }>>,
  Expect<Equal<MyAwaited<Z>, string | number>>,
  Expect<Equal<MyAwaited<W>, string | number>>,
]

// @ts-expect-error
type error = MyAwaited<number>
