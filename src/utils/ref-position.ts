export const isRefPosition = (index: number, length: number): boolean => {
  if (length <= 2) return index === 0
  return index === length - 3
}
