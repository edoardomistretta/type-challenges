import { Equal, Expect } from '@type-challenges/utils'
import { MyReturnType } from './template'

const fn = (v: boolean) => v ? 1 : 2
const fn1 = (v: boolean, _w: any) => v ? 1 : 2
type ComplexObject = {
  a: [12, 'foo']
  bar: 'hello'
  prev(): number
}

type cases = [
  Expect<Equal<string, MyReturnType<() => string>>>,
  Expect<Equal<123, MyReturnType<() => 123>>>,
  Expect<Equal<ComplexObject, MyReturnType<() => ComplexObject>>>,
  Expect<Equal<Promise<boolean>, MyReturnType<() => Promise<boolean>>>>,
  Expect<Equal<() => 'foo', MyReturnType<() => () => 'foo'>>>,
  Expect<Equal<1 | 2, MyReturnType<typeof fn>>>,
  Expect<Equal<1 | 2, MyReturnType<typeof fn1>>>,
]
