export function multiplyArray<T>(arr: T[], multiplier: number): T[] {
  const result: T[] = [];
  for (let i = 0; i < multiplier; i++) {
    result.push(...arr);
  }
  return result;
}
