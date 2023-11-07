import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface ICommonState {
  loading: boolean
}

export const copyWithCommonState = (
  p?: Partial<ICommonState>,
): ICommonState => ({ loading: p?.loading ?? false })

const commonSlice = createSlice({
  name: 'common',
  initialState: copyWithCommonState(),
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    // setCommonError: (state, action: PayloadAction<IMessage | null>) => {
    //   state.error = action.payload
    // },
  },
})

export const { setLoading } = commonSlice.actions
export default commonSlice.reducer
