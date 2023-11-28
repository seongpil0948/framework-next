'use client'

import useSWR, { mutate } from 'swr'
import { LoadingComponent } from '@/app/_components/server-only/suspense'
import { Button } from '@nextui-org/button'
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalProps,
  useDisclosure,
} from '@nextui-org/modal'
import { TDetailMode } from '@/types'
import { TDetailCommonCodeResp } from '../../../types'
import { CodeForm } from './form'
import ConfirmModal from '@/app/_components/server-only/modal/confirm'
import { useCodeDispatch, useCodeSelector } from '../../../store/store'
import { setField, setMode } from '../../../store/common-code-form'
import { useEffect } from 'react'
import { mergeProps } from 'react-aria'
import { toast } from 'react-toastify'
import { paramToQuery } from '@/app/_utils'
import { useCommonCode } from '../../../hooks/code'
import useFetcher from '@/app/_utils/hooks/fetch'
import { useDictionary } from '@/app/_utils/hooks/locale'

export default function CommonCodeDetail(props: {
  commonCode?: string
  groupCode?: string
  modalProps?: Omit<ModalProps, 'children'>
}) {
  console.log('rerender CommonCodeDetail')
  const { commonCode, groupCode, modalProps } = props
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const dispatch = useCodeDispatch()
  const { fetcherJson } = useFetcher()
  const dict = useDictionary()

  const mode = useCodeSelector((state) => state.commonForm.mode)
  const { data, isLoading } = useSWR<TDetailCommonCodeResp>(
    `${process.env.NEXT_PUBLIC_BACKEND_BASE_PATH}/codes/${groupCode}/${commonCode}`,
    fetcherJson,
    {
      keepPreviousData: true,
      errorRetryCount: 3,
      suspense: true,
    },
  )
  useEffect(() => {
    if (
      data?.body &&
      commonCode === data.body.code &&
      groupCode === data.body.codeGroup
    ) {
      dispatch(setField(data.body))
    }
  }, [commonCode, data?.body, dispatch, groupCode])
  if (isLoading || !data || !data.body) return <LoadingComponent />
  const isEditable = mode === 'create' || mode === 'edit'
  if (!dict) {
    return null
  }
  return (
    <Modal
      isDismissable={false}
      isKeyboardDismissDisabled={false}
      {...mergeProps(modalProps, {
        onOpenChange: (isOpen: boolean) => {
          if (!isOpen) dispatch(setMode('read'))
        },
      })}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">{`${groupCode} -> ${getTitle(
              mode,
            )}`}</ModalHeader>
            <ModalBody>
              <CodeForm />
            </ModalBody>
            <ModalFooter>
              <Button color="warning" variant="light" onPress={onClose}>
                {dict['button']['cancel']}
              </Button>
              {mode === 'read' && (
                <Button color="danger" variant="light" onPress={onClose}>
                  {dict['button']['delete']}
                </Button>
              )}
              {mode === 'read' && (
                <Button
                  color="secondary"
                  onPress={() => {
                    dispatch(setMode('edit'))
                  }}
                >
                  {dict['button']['modify']}
                </Button>
              )}
              {isEditable && (
                <Button color="primary" onPress={onOpen}>
                  {dict['button']['submit']}
                </Button>
              )}
            </ModalFooter>
            <CodeConfirmModal isOpen={isOpen} onOpenChange={onOpenChange} />
          </>
        )}
      </ModalContent>
    </Modal>
  )
}
function CodeConfirmModal(props: {
  isOpen?: boolean
  onOpenChange?: () => void
}) {
  const { isOpen, onOpenChange } = props
  const mode = useCodeSelector((state) => state.commonForm.mode)
  const c = useCodeSelector((state) => state.commonForm.form)
  const codeGroup = useCodeSelector(
    (state) => state.codeSlice.selectedCodeGroup,
  )
  const commonCode = useCodeSelector((state) => state.codeSlice.selectedCode)
  const { put } = useCommonCode()

  return (
    <ConfirmModal
      title={getTitle(mode)}
      body={getConfirmBody(mode)}
      modalProps={{
        isOpen,
        onOpenChange,
      }}
      onConfirm={async () => {
        console.log('confirm', c)
        try {
          if (mode === 'create') {
            throw new Error('not implemented')
            // await repoCommonCode.post(c)
          } else if (mode === 'edit') {
            await put(c.codeGroup, c.code, c)
          }
          await mutate(
            paramToQuery(`${process.env.NEXT_PUBLIC_BACKEND_BASE_PATH}/codes`, {
              codeGroup,
            }),
          )
          await mutate(
            `${process.env.NEXT_PUBLIC_BACKEND_BASE_PATH}/codes/${codeGroup}/${commonCode}`,
          )
          toast.success('성공적으로 처리되었습니다.')
        } catch (e) {
          console.error(e)
          toast.error('처리중 오류가 발생했습니다.')
        }
      }}
      onCancel={async () => {
        console.log('cancel', c)
      }}
    />
  )
}

function getConfirmBody(m: TDetailMode) {
  switch (m) {
    case 'create':
      return '코드를 등록 하시겠습니까?'
    case 'edit':
      return '코드를 수정 하시겠습니까?'
    case 'delete':
      return '코드를 삭제 하시겠습니까?'
    default:
      return ''
  }
}
function getTitle(m: TDetailMode) {
  switch (m) {
    case 'create':
      return '공통코드 생성'
    case 'read':
      return '공통코드 상세'
    case 'edit':
      return '공통코드 수정'
    case 'delete':
      return '공통코드 삭제'
  }
}
// function getTitle(m: TDetailMode) {
//   const dict = useDictionary()
//   switch (m) {
//     case 'create':
//       return `${dict && dict['code']['popup']['title']['create']}`
//     case 'read':
//       return `${dict && dict['code']['popup']['title']['detail']}`
//     case 'edit':
//       return `${dict && dict['code']['popup']['title']['modify']}`
//     case 'delete':
//       return `${dict && dict['code']['popup']['title']['delete']}`
//   }
// }

/*

const deleteCode = async (data: string[]) => {
  try {
    await request.delete(`/codes/${codeGroupId.value}`, { data })
    ElNotification({
      message: t('code.delete'),
      type: 'success',
    })
    reloadTable.value = true
    emit('submit', { mode: EMode.DELETE, reloadTable: reloadTable.value })
  }
  catch (error: any) {
    ElNotification({
      message: t('code.error.delete'),
      type: 'error',
    })
  }
}
const handleDelete = handleSubmit(async (values) => {
  try {
    ElMessageBox.confirm(
      t('code.code-delete'),
      {
        ...getDefaultMessageOptions(t('code.popup-title.code-delete')),
        callback: (action: Action) => {
          if (action === 'confirm')
            deleteCode([values.code])
        },
      },
    )
  }
  catch (e) {
    logger.error(e)
  }
})

const changeMode = () => {
  titleName.value = t('code.title-code-modify')
  mode.value = EMode.MODIFY
}

const createCode = async (form: CdCreateReqDto) => {
  try {
    await request.post<IGroupCodeResponseWrap<CdCreateReqDto>>('/codes', form)
    ElNotification({
      message: t('code.create'),
      type: 'success',
    })
    reloadTable.value = true
    emit('submit', { mode: EMode.CREATE, reloadTable: reloadTable.value })
  }
  catch (error: any) {
    if (error.response.data.code === '40000030') {
      ElNotification({
        message: t('code.error.same-code'),
        type: 'error',
      })
    }
    else {
      ElNotification({
        message: t('code.error.create'),
        type: 'error',
      })
    }
  }
}

const modifyCode = async (form: CdUpdateReqDto) => {
  try {
    await request.put<IGroupCodeResponseWrap<CdUpdateReqDto>>(`/codes/${codeGroupId.value}/${codeId.value}`, form)
    ElNotification({
      message: t('code.modify'),
      type: 'success',
    })
    reloadTable.value = true
    mode.value = EMode.READ
    titleName.value = t('code.title-code-detail')
    setCode()
  }
  catch (error: any) {
    ElNotification({
      message: t('code.error.modify'),
      type: 'error',
    })
  }
}
const handleConfirmSubmit = handleSubmit(async (values) => {
  if (mode.value === EMode.CREATE) {
    try {
      ElMessageBox.confirm(
        t('code.code-create'),
        {
          ...getDefaultMessageOptions(t('code.popup-title.code-create')),
          callback: (action: Action) => {
            if (action === 'confirm')
              createCode(values)
          },
        },
      )
    }
    catch (e) {
      logger.error(e)
    }
  }
  else {
    try {
      ElMessageBox.confirm(
        t('code.code-modify'),
        {
          ...getDefaultMessageOptions(t('code.popup-title.code-modify')),
          callback: (action: Action) => {
            if (action === 'confirm')
              modifyCode(values)
          },
        },
      )
    }
    catch (e) {
      logger.error(e)
    }
  }
})

const handleCancel = () => {
  if (mode.value === EMode.CREATE) {
    try {
      ElMessageBox.confirm(
        t('code.code-create-cancel'),
        {
          ...getDefaultMessageOptions(t('code.popup-title.cancel-create')),
          callback: (action: Action) => {
            if (action === 'confirm')
              emit('cancel')
          },
        },
      )
    }
    catch (e) {
      logger.error(e)
    }
  }
  else if (mode.value === EMode.MODIFY) {
    try {
      ElMessageBox.confirm(
        t('code.code-modify-cancel'),
        {
          ...getDefaultMessageOptions(t('code.popup-title.cancel-modify')),
          callback: (action: Action) => {
            if (action === 'confirm') {
              resetForm()
              setCode()
              titleName.value = t('code.title-code-detail')
              mode.value = EMode.READ
            }
          },
        },
      )
    }
    catch (e) {
      logger.error(e)
    }
  }
  else if (reloadTable) {
    emit('submit', { mode: EMode.MODIFY, reloadTable: reloadTable.value })
  }
  else
    emit('cancel')
}
 */
