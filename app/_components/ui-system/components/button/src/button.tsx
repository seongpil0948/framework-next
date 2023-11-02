"use client";
import {Ripple} from "@nextui-org/ripple";
import {forwardRef} from "@nextui-org/system";

import {UseButtonProps, useButton} from "./use-button";

export interface ButtonProps extends UseButtonProps {}

const Button = forwardRef<"button", ButtonProps>((props, ref) => {
  const {
    Component,
    domRef,
    children,
    styles,
    startContent,
    endContent,
    disableRipple,
    getButtonProps,
    getRippleProps,
  } = useButton({...props, ref});

  return (
    <Component ref={domRef} className={styles} {...getButtonProps()}>
      {startContent}
      {children}
      {endContent}
      {!disableRipple && <Ripple {...getRippleProps()} />}
    </Component>
  );
});

Button.displayName = "NextUI.Button";

export default Button;