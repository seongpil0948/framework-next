export interface IApiWrapper<T> {
  httpStatusCode: number
  code: string
  message: string
  body: T
}
export interface IApiWrapperData<T> extends Omit<IApiWrapper<T>, 'body'> {
  body?: {
    data: T
  }
}