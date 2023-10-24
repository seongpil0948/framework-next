export abstract class PeachError extends Error {
  constructor(message: string) {
    super(message);
    this.name = this.constructor.name;
  }
}

export class VideoError extends PeachError {
  constructor(file: File) {
    super(`video error: ${file.name}`);
  }
}
export class RequiredField extends PeachError {
  constructor(moduleName: string, field: string) {
    super(`module ${moduleName} required field: ${field}`);
  }
}

export class ContextUndefined extends PeachError {
  constructor(contextName: string) {
    super(`context ${contextName} context undefined use must be within proper according Provider`);
  }
}