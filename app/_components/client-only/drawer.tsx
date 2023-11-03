"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetBody,
  SheetFooter,
} from "@/app/_components/client-only/drawer-sheet";
import Icon from "@mdi/react";
import { Button, ButtonProps } from "@nextui-org/button";
import { useDisclosure } from "@nextui-org/modal";
import { mdilMenu } from "@mdi/light-js";

export default function CommonDrawer(props: {
  children: React.ReactNode;
  title?: string;
}) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { children, title } = props;
  return (
    <>
      <Button isIconOnly onPress={onOpen}>
        <Icon path={mdilMenu} size={1} />
      </Button>
      <Sheet
        backdrop="opaque"
        placement="right"
        size="sm"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <SheetContent>
          {(onClose) => (
            <>
              {title && (
                <SheetHeader className="flex flex-col gap-1">
                  {title}
                </SheetHeader>
              )}
              <SheetBody>{children}</SheetBody>
              <SheetFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                {/* <Button color="primary" onPress={onClose}>
                  Action
                </Button> */}
              </SheetFooter>
            </>
          )}
        </SheetContent>
      </Sheet>
    </>
  );
}
/*
 - https://github.com/nextui-org/nextui/blob/main/packages/components/modal/src/use-modal.ts 
 - {<AnimatePresence>{state.isOpen ? overlay : null} </AnimatePresence>}
 
 */
