export interface IOption<T> {
  value: T
  label: string
}


export type OptionReturnType<T extends (...args: any) => any> = T extends (...args: any) => Promise<infer R> ? R : any


