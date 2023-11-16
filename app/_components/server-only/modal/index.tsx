import React, { ReactNode } from 'react'
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from '@nextui-org/modal'
import CmButton from '.././button'

interface ModalProps {
  className?: string
  isShow: boolean
  useHeader?: boolean
  hideCloseButton?: boolean
  closeButton?: ReactNode
  modalTitle?: ReactNode
  modalContents?: ReactNode
  useFooter?: boolean
  alignButton?: 'justify-start' | 'justify-center' | 'justify-end'
  closeButtonText?: string
  confirmButtonText?: string
  customFooterButton?: ReactNode
  size?:
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | '5xl'
    | 'full'
  radius?: 'none' | 'sm' | 'md' | 'lg'
  shadow?: 'sm' | 'md' | 'lg'
  isDismissable?: boolean
  isKeyboardDismissDisabled?: boolean
  closeModal: () => void
}

export const CmModal = ({
  className,
  isShow = false,
  useHeader = true,
  hideCloseButton = useHeader ? false : true,
  closeButton,
  modalTitle,
  modalContents,
  useFooter = true,
  alignButton = 'justify-end',
  closeButtonText = 'close',
  confirmButtonText = 'confirm',
  customFooterButton,
  size = 'md',
  radius = 'lg',
  shadow = 'lg',
  isDismissable = false,
  isKeyboardDismissDisabled = true,
  closeModal,
}: ModalProps) => {
  return (
    <>
      <Modal
        isOpen={isShow}
        hideCloseButton={hideCloseButton}
        closeButton={closeButton}
        className={className}
        size={size}
        radius={radius}
        onClose={closeModal}
        shadow={shadow}
        isDismissable={isDismissable}
        isKeyboardDismissDisabled={isKeyboardDismissDisabled}
      >
        <ModalContent>
          {useHeader == true ? <ModalHeader>{modalTitle}</ModalHeader> : null}
          <ModalBody>{modalContents}</ModalBody>
          {useFooter == true ? (
            <ModalFooter className={alignButton}>
              {customFooterButton}
              <CmButton color="danger" variant="light" onPress={closeModal}>
                {closeButtonText}
              </CmButton>
              <CmButton color="primary" onPress={closeModal}>
                {confirmButtonText}
              </CmButton>
            </ModalFooter>
          ) : null}
        </ModalContent>
      </Modal>
    </>
  )
}
