export class RequestTimeoutException extends Error {
  constructor() {
    super('Request timeout')
  }
}
