import { Button } from '@nextui-org/button'
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalProps,
} from '@nextui-org/modal'

export default function ConfirmModal(props: {
  modalProps: Omit<ModalProps, 'children'>
  title?: React.ReactNode
  body: React.ReactNode
  onConfirm: () => Promise<void>
  onCancel: () => Promise<void>
}) {
  const { onConfirm, onCancel, body, title } = props

  return (
    <>
      <Modal {...props.modalProps}>
        <ModalContent>
          {(onClose) => (
            <>
              {title && (
                <ModalHeader className="flex flex-col gap-1">
                  {title}
                </ModalHeader>
              )}
              <ModalBody>{body}</ModalBody>
              <ModalFooter>
                <Button
                  color="danger"
                  variant="light"
                  onPress={async () => {
                    await onCancel()
                    onClose()
                  }}
                >
                  취소
                </Button>
                <Button
                  color="primary"
                  onPress={async () => {
                    await onConfirm()
                    onClose()
                  }}
                >
                  확인
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}
