'use client'

import { ElementRef, forwardRef } from 'react'
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalProps,
  useDisclosure,
} from '@nextui-org/modal'
import { ModalSlots, SlotsToClasses } from '@nextui-org/theme'
import { HTMLMotionProps } from 'framer-motion'
import { clsx, type ClassValue } from 'clsx'
import { useIsSSR } from '@react-aria/ssr'
import { sheet } from './theme'

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}

export interface SheetProps extends Omit<ModalProps, 'placement'> {
  placement?: 'left' | 'right'
}

export const Sheet = forwardRef<ElementRef<typeof Modal>, SheetProps>(
  ({ placement = 'left', classNames, ...props }, ref) => {
    const isLeft = placement == 'left'
    const { backdrop, base, body, closeButton, footer, header } = sheet()
    const extendedClassNames = {
      backdrop: cn(backdrop(), classNames?.backdrop),
      base: cn(base(), classNames?.base),
      body: cn(body(), classNames?.body),
      closeButton: cn(closeButton(), classNames?.closeButton),
      footer: cn(footer(), classNames?.footer),
      header: cn(header(), classNames?.header),
      wrapper: cn(
        isLeft
          ? '!justify-start'
          : placement == 'right'
            ? 'justify-end'
            : 'auto',
        classNames?.wrapper,
      ),
    } as SlotsToClasses<ModalSlots>

    const motionProps = {
      variants: {
        enter: {
          x: 0,
          opacity: 1,
          transition: {
            duration: 0.3,
            ease: 'easeOut',
          },
        },
        exit: {
          x: isLeft ? -40 : 40,
          opacity: 0,
          transition: {
            duration: 0.2,
            ease: 'easeIn',
          },
        },
      },
    } as HTMLMotionProps<'section'>
    const isSsr = useIsSSR()
    return (
      <Modal
        ref={ref}
        classNames={extendedClassNames}
        motionProps={motionProps}
        portalContainer={
          isSsr
            ? undefined
            : document.body.getElementsByTagName('main').item(0) ??
              document.body
        }
        {...props}
      />
    )
  },
)
Sheet.displayName = 'Sheet'

export const SheetBody = ModalBody

export const SheetContent = ModalContent

export const SheetFooter = ModalFooter

export const SheetHeader = ModalHeader

export { useDisclosure }
