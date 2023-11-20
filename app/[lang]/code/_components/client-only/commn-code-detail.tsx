'use client'
import { fetcherJson } from '@/app/_utils/fetch'
import { paths } from '@/schema'
import useSWR from 'swr'
import CmInput from '@/app/_components/server-only/input'
import {
  LoadingComponent,
  LoadingSuspense,
} from '@/app/_components/server-only/suspense'
import { Button } from '@nextui-org/button'
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalProps,
} from '@nextui-org/modal'
import { Input } from '@nextui-org/input'
import { TDetailMode } from '@/types'
import { useState } from 'react'
import { Checkbox } from '@nextui-org/checkbox'
import { checkNotNull, length } from '@/app/_utils/validators'

type TDetailCommonCode = {
  // FIXME(sp): 백엔드 스웨거 수정 필요
  body: paths['/codes/{codeGroup}/{code}']['get']['responses']['200']['content']['application/json']
}

export default function CommonCodeDetail(props: {
  commonCode: string
  groupCode: string
  modalProps?: Omit<ModalProps, 'children'>
  initialMode?: TDetailMode
}) {
  const { commonCode, groupCode, modalProps, initialMode } = props
  const [mode, setMode] = useState<TDetailMode>(initialMode ?? 'read')

  const { data, isLoading } = useSWR<TDetailCommonCode>(
    `${process.env.NEXT_PUBLIC_BACKEND_BASE_PATH}/codes/${groupCode}/${commonCode}`,
    fetcherJson,
    {
      keepPreviousData: true,
      errorRetryCount: 3,
      suspense: true,
    },
  )
  if (isLoading || !data || !data.body) return <LoadingComponent />
  const c = data.body
  const isEditable = mode === 'create' || mode === 'edit'
  return (
    <Modal
      isDismissable={false}
      isKeyboardDismissDisabled={false}
      {...modalProps}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">{`${groupCode} -> ${getTitle(
              mode,
            )}`}</ModalHeader>
            <ModalBody>
              <CodeForm c={c} isEditable={isEditable} />
            </ModalBody>
            <ModalFooter>
              <Button color="warning" variant="light" onPress={onClose}>
                취소
              </Button>
              {mode === 'read' && (
                <Button color="danger" variant="light" onPress={onClose}>
                  삭제
                </Button>
              )}
              {mode === 'read' && (
                <Button
                  color="secondary"
                  onPress={() => {
                    setMode('edit')
                  }}
                >
                  수정
                </Button>
              )}
              {mode !== 'read' && (
                <Button color="primary" onPress={onClose}>
                  제출
                </Button>
              )}
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}
function getTitle(m: TDetailMode) {
  switch (m) {
    case 'create':
      return 'Create'
    case 'read':
      return 'Detail'
    case 'edit':
      return 'Update'
    case 'delete':
      return 'Delete'
    default:
      return ''
  }
}

function CodeForm(props: {
  c: TDetailCommonCode['body']
  isEditable: boolean
}) {
  const { c, isEditable } = props
  const [name, setName] = useState(c.codeName)
  const [value, setValue] = useState(c.codeName)
  const [useYn, setUseYn] = useState(c.useYn)
  return (
    <div>
      <Input
        label="Name"
        placeholder="Enter code name"
        variant="bordered"
        value={name}
        onValueChange={setName}
        isReadOnly={!isEditable}
        isClearable={isEditable}
        isInvalid={!length(name, 3)}
        errorMessage={!length(name, 3) ? '3자 이상 입력해주세요.' : undefined}
        isRequired
      />
      <Input
        label="Value"
        placeholder="Enter Code value"
        variant="bordered"
        value={value}
        onValueChange={setValue}
        isReadOnly={!isEditable}
        isClearable={isEditable}
        isInvalid={!length(value, 3)}
        errorMessage={!length(value, 3) ? '3자 이상 입력해주세요.' : undefined}
        isRequired
      />
      <Checkbox
        isSelected={useYn === 'Y'}
        onValueChange={(isSelected) => {
          setUseYn(isSelected ? 'Y' : 'N')
        }}
        isReadOnly={!isEditable}
        isInvalid
      >
        사용여부
      </Checkbox>
      {!isEditable && (
        <>
          <Input label="등록정보" value={c.createDate} isDisabled />
          <Input label="수정정보" value={c.updateDate} isDisabled />
        </>
      )}
    </div>
  )
}

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
