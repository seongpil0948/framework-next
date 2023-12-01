'use client'
import React, { useState } from 'react'
import { Button, ButtonProps } from '@nextui-org/button'
import { useRouter } from 'next/navigation'
import type { ReactNode } from 'react'
import Icon from '@mdi/react'
import { mdiPlus } from '@mdi/js'
// import { Checkbox } from "@nextui-org/checkbox";
import {
  useDisclosure,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from '@nextui-org/modal'
import { InputEmail } from './input/fields'
import { useDictionary } from '@/app/_utils/hooks/locale'

export const RouteButton = (
  props: { href: string; children: ReactNode } & ButtonProps,
) => {
  const router = useRouter()
  return (
    <Button onClick={() => router.push(props.href)} {...props}>
      {props.children}
    </Button>
  )
}

export const PlusButton = (props: {
  children: ReactNode
  btnProps: ButtonProps
}) => {
  return (
    <div className="flex items-center gap-4">
      <Button
        color="danger"
        variant="bordered"
        startContent={<Icon path={mdiPlus} size={1} />}
        {...props.btnProps}
      >
        {props.children}
      </Button>
    </div>
  )
}

export function ForgetPasswordBtn() {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure()
  const [email, setEmail] = useState('')
  // const dispatch = useAppDispatch();
  const dict = useDictionary()
  const handleSubmit = async () => {
    console.log('handleSubmit')
  }

  return (
    <>
      <Button onPress={onOpen} color="primary" size="sm" variant="bordered">
        {dict && dict['login']['searchPassword']}
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="auto">
        <ModalContent>
          <>
            <ModalHeader className="flex flex-col gap-1">Find</ModalHeader>
            <ModalBody>
              <p>Sending password reset email...</p>
              <form>
                <InputEmail email={email} setEmail={setEmail} />
              </form>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onPress={handleSubmit}>
                {dict && dict['button']['submit']}
              </Button>
            </ModalFooter>
          </>
        </ModalContent>
      </Modal>
    </>
  )
}
