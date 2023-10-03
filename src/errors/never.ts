export class AssertUnreachableException extends Error {
  constructor() {
    super("Didn't expect to get here")
  }
}

export const assertUnreachable = (): never => {
  throw new AssertUnreachableException()
}
