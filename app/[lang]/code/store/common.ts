import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface ICodeState {
  selectedCode?: string
  selectedCodeGroup?: string
}

export const getInitialCode = (): ICodeState => ({})

const codeSlice = createSlice({
  name: 'common-code-form',
  initialState: getInitialCode(),
  reducers: {
    clearState: (state) => {
      state = getInitialCode()
    },
    selectCommonCode: (state, action: PayloadAction<string | undefined>) => {
      state.selectedCode = action.payload
    },
    selectGroupCode: (state, action: PayloadAction<string | undefined>) => {
      state.selectedCodeGroup = action.payload
    },
  },
})
export const { selectCommonCode, selectGroupCode, clearState } =
  codeSlice.actions
export default codeSlice.reducer
