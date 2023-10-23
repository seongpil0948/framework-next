import { SVGProps } from "react";
import type { ToastOptions } from "react-toastify";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

interface IMessageCommon {
  content: string;
  toastOptions?: ToastOptions;
}

export interface IMessageProgress extends IMessageCommon {
  progress: number;
}
export type IMsessageType = "error" | "info" | "success";
export interface IMessage extends IMessageCommon {
  type: IMsessageType;
  title?: string;
}

export interface IFileUploaded {
  name: string;
  type: string;
  url: string;
}
