import { SVGProps } from "react";

export type TIconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface IFileUploaded {
  name: string;
  type: string;
  url: string;
}

export type NonNullable<T> = T extends null | undefined ? never : T;
export type Concrete<Type> = {
  [Key in keyof Type]-?: NonNullable<Type[Key]>;
};
export type PromiseType<T> = T extends Promise<infer U> ? U : never;
export type PromiseReturnType<T extends (...args: any) => Promise<any>> =
  PromiseType<ReturnType<T>>;
