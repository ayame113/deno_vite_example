/** 配列`array`からランダムに`count`個取得する */
export function takeRandom<T>(array: readonly T[], count: number) {
  return shuffled(array).slice(0, count);
}

export function shuffled<T>(array: readonly T[]) {
  return array
    .toSorted(() => Math.random() - 0.5)
    .toSorted(() => Math.random() - 0.5)
    .toSorted(() => Math.random() - 0.5)
    .toSorted(() => Math.random() - 0.5);
}
