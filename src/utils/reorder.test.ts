import { describe, expect, it } from '@jest/globals'

import { reorder } from './reorder'

describe('reorder', () => {
  it('should reorder the list based on startIndex and endIndex', () => {
    const initialList = [1, 2, 3, 4, 5]
    const reorderedList = reorder(initialList, 1, 3)
    expect(reorderedList).toEqual([1, 3, 4, 2, 5])
  })

  it('should move the element to the start if endIndex is 0', () => {
    const initialList = ['a', 'b', 'c']
    const reorderedList = reorder(initialList, 2, 0)
    expect(reorderedList).toEqual(['c', 'a', 'b'])
  })

  it('should move the element to the end if endIndex is the last index', () => {
    const initialList = ['x', 'y', 'z']
    const reorderedList = reorder(initialList, 0, 2)
    expect(reorderedList).toEqual(['y', 'z', 'x'])
  })

  it('should return the same list if startIndex and endIndex are the same', () => {
    const initialList = [10, 20, 30]
    const reorderedList = reorder(initialList, 1, 1)
    expect(reorderedList).toEqual([10, 20, 30])
  })
})
