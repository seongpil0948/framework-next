export abstract class AbacusError extends Error {
  constructor(message: string) {
    super(message)
    this.name = this.constructor.name
  }
}

export class VideoError extends AbacusError {
  constructor(file: File) {
    super(`video error: ${file.name}`)
  }
}
export class RequiredField extends AbacusError {
  constructor(moduleName: string, field: string) {
    super(`module ${moduleName} required field: ${field}`)
  }
}

export class ContextUndefined extends AbacusError {
  constructor(contextName: string) {
    super(
      `context ${contextName} context undefined use must be within proper according Provider`,
    )
  }
}
export class FetchApiError extends AbacusError {
  url: string
  status: number
  statusText: string
  constructor(info: { url: string; status: number; statusText: string }) {
    super(`fetch api error: ${JSON.stringify(info)}`)
    this.url = info.url
    this.status = info.status
    this.statusText = info.statusText
  }
}
