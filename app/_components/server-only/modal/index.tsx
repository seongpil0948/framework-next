import React, { ReactNode } from 'react'
import {
  Modal,
  ModalProps,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from '@nextui-org/modal'
import CmButton from '.././button'

interface CmModalProps {
  className?: string
  isShow: ModalProps['isOpen']
  useHeader?: boolean
  hideCloseButton?: ModalProps['hideCloseButton']
  closeButton?: ModalProps['closeButton']
  modalTitle?: ReactNode
  modalContents?: ReactNode
  useFooter?: boolean
  alignButton?: 'justify-start' | 'justify-center' | 'justify-end'
  closeButtonText?: string
  confirmButtonText?: string
  customFooterButton?: ReactNode
  size?: ModalProps['size']
  radius?: ModalProps['radius']
  shadow?: ModalProps['shadow']
  isDismissable?: ModalProps['isDismissable']
  isKeyboardDismissDisabled?: ModalProps['isKeyboardDismissDisabled']
  closeModal?: ModalProps['onClose']
}

export default function CmModal({
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
}: CmModalProps) {
  return (
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
  )
}
