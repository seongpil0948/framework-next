'use client'

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetBody,
  SheetFooter,
  SheetProps,
} from './sheet'
import Icon from '@mdi/react'
import { Button, ButtonProps } from '@nextui-org/button'
import { useDisclosure } from '@nextui-org/modal'
import { mdiMenuClose, mdiMenuOpen } from '@mdi/js'

export default function CommonDrawer(props: {
  children: React.ReactNode
  title?: string
  sheetProps?: Partial<SheetProps>
}) {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure()
  const { children, sheetProps, title } = props
  const handleClick = () => {
    console.log('clicked', isOpen)
    isOpen ? onClose() : onOpen()
  }
  return (
    <>
      <Button isIconOnly onPress={handleClick} className="z-50">
        <Icon path={isOpen ? mdiMenuClose : mdiMenuOpen} size={1} />
      </Button>
      <Sheet isOpen={isOpen} onOpenChange={onOpenChange} {...sheetProps}>
        <SheetContent>
          {(onClose) => (
            <>
              {title && (
                <SheetHeader>
                  {title}
                </SheetHeader>
              )}
              <SheetBody>{children}</SheetBody>
              <SheetFooter>
                {/* <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button> */}
                {/* <Button color="primary" onPress={onClose}>
                  Action
                </Button> */}
                © 2023 ACF
              </SheetFooter>
            </>
          )}
        </SheetContent>
      </Sheet>
    </>
  )
}
/*
 - https://github.com/nextui-org/nextui/blob/main/packages/components/modal/src/use-modal.ts 
 - {<AnimatePresence>{state.isOpen ? overlay : null} </AnimatePresence>}
 
 */
