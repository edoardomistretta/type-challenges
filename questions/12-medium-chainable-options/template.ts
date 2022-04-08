export type Chainable<O = {}> = {
  option<K extends string, V>(key: Exclude<K, keyof O>, value: V): Chainable<Record<K, V> & O>
  get(): O
}
