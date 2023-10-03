export class TaskStatusConverterException extends Error {
  constructor() {
    super('Can not convert `TaskStatusDto` to `TaskStatus`')
  }
}
