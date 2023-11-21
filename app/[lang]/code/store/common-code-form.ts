import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { TDetailCommonCode } from '../types'
import { v4 } from 'uuid'
import dayjs from 'dayjs'
import { TDetailMode } from '@/types'

interface ICommonCodeFormState {
  form: TDetailCommonCode
  mode: TDetailMode
}

export const getInitialCode = (): ICommonCodeFormState => ({
  form: {
    code: v4(),
    codeGroup: '',
    codeName: '',
    codeValue: '',
    codeDescription: '',
    useYn: 'Y',
    codeIndex: 0,
    chgPsblYn: '',
    createDate: dayjs().format('YYYY-MM-DD HH:mm:ss'),
    createUserId: '',
    createUserName: '',
    updateDate: dayjs().format('YYYY-MM-DD HH:mm:ss'),
    updateUserId: '',
    updateUserName: '',
  },
  mode: 'read',
})

type TSetFieldPayload = Partial<TDetailCommonCode>
const commonCodeFormSlice = createSlice({
  name: 'common-code-form',
  initialState: getInitialCode(),
  reducers: {
    setField: (state, action: PayloadAction<TSetFieldPayload>) => {
      Object.assign(state.form, action.payload)
    },
    clearPostState: (state) => {
      state = getInitialCode()
    },
    setMode: (state, action: PayloadAction<TDetailMode>) => {
      state.mode = action.payload
    },
  },
})
export const { setField, clearPostState, setMode } = commonCodeFormSlice.actions
export default commonCodeFormSlice.reducer
