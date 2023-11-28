import { components } from '@/schema'

type CmResType = components['schemas']['ComResponseDto']
export interface IApiWrapper<T> extends Omit<CmResType, 'body'> {
  body?: T
}

export interface IApiWrapperData<T> extends Omit<IApiWrapper<T>, 'body'> {
  body?: {
    data: T
  }
}
