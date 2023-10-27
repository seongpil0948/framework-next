"use client";

import { Button } from "@nextui-org/button";
import { forwardRef, RefObject, useRef } from "react";
import {
  DismissButton,
  FocusScope,
  mergeProps,
  OverlayContainer,
  OverlayProvider,
  useDialog,
  useModal,
  useOverlay,
  useOverlayPosition,
  useOverlayTrigger,
  Overlay,
} from "react-aria";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useOverlayTriggerState } from "react-stately";

const Popover = forwardRef<
  HTMLDivElement,
  {
    title: string;
    children: React.ReactNode;
    isOpen: boolean;
    onClose: () => void;
    style?: React.CSSProperties;
  }
>(({ title, children, isOpen, onClose, style, ...otherProps }, ref) => {
  // Handle interacting outside the dialog and pressing
  // the Escape key to close the modal.
  let { overlayProps } = useOverlay(
    {
      onClose,
      isOpen,
      isDismissable: true,
    },
    ref as RefObject<HTMLDivElement>
  );

  // Hide content outside the modal from screen readers.
  let { modalProps } = useModal();

  // Get props for the dialog and its title
  let { dialogProps, titleProps } = useDialog(
    {},
    ref as RefObject<HTMLDivElement>
  );

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      // whileInView={{ opacity: 1, transitionDuration:  }}
      whileInView={{ opacity: 1 }}
      // whileHover={{ scale: 2 }}
      // whileTap={{ scale: 1.1 }}
      // animate={{ x: -100 }}
    >
      <FocusScope restoreFocus>
        <div
          {...mergeProps(overlayProps, dialogProps, otherProps, modalProps)}
          ref={ref}
          style={{
            background: "white",
            color: "black",
            padding: 30,
            ...style,
          }}
        >
          <h3 {...titleProps} style={{ marginTop: 0 }}>
            {title}
          </h3>
          {children}
          <DismissButton onDismiss={onClose} />
        </div>
      </FocusScope>
    </motion.div>
  );
});
Popover.displayName = "Popover";
export default Popover;
export function Example() {
  let state = useOverlayTriggerState({
    defaultOpen: true,
  });

  let triggerRef = useRef<HTMLButtonElement>(null);
  let overlayRef = useRef<HTMLDivElement>(null);

  // Get props for the trigger and overlay. This also handles
  // hiding the overlay when a parent element of the trigger scrolls
  // (which invalidates the popover positioning).
  let { triggerProps, overlayProps } = useOverlayTrigger(
    { type: "dialog" },
    state,
    triggerRef as RefObject<HTMLButtonElement>
  );

  // Get popover positioning props relative to the trigger
  let { overlayProps: positionProps } = useOverlayPosition({
    targetRef: triggerRef as RefObject<HTMLButtonElement>,
    overlayRef: overlayRef as RefObject<HTMLDivElement>,
    placement: "right",
    offset: 5,
    isOpen: state.isOpen,
  });
  const overlay = (
    <Overlay portalContainer={document.body}>
      <Popover
        {...overlayProps}
        {...positionProps}
        ref={overlayRef}
        title="Popover title"
        isOpen={state.isOpen}
        onClose={state.close}
      >
        This is the content of the popover.
      </Popover>
    </Overlay>
  );

  const component = (
    <>
      <Button
        {...triggerProps}
        ref={triggerRef}
        style={{
          position: "fixed",
          top: "50%",
          left: "0",
          zIndex: 100,
        }}
      >
        Open Popover
      </Button>
      {<AnimatePresence>{state.isOpen ? overlay : null} </AnimatePresence>}
    </>
  );
  return createPortal(component, document.body);
}
/*
 - https://github.com/nextui-org/nextui/blob/main/packages/components/modal/src/use-modal.ts 
 
 */
