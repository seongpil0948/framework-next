import { IMessage, IMessageProgress, IMsessageType } from "@/app/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ICommonState {
  loading: boolean;
  msg: IMessage | null;
}

export const copyWithCommonState = (p?: Partial<ICommonState>): ICommonState =>
  Object.assign({ loading: false, msg: null }, p);

const commonSlice = createSlice({
  name: "post",
  initialState: copyWithCommonState(),
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setMsg: (state, action: PayloadAction<IMessage | null>) => {
      state.msg = action.payload;
    },
    // setCommonError: (state, action: PayloadAction<IMessage | null>) => {
    //   state.error = action.payload
    // },
  },
});

export const isIMsessageType = (str: string): str is IMsessageType =>
  str === "error" || str === "info" || str === "success";
export const isIMessage = (obj: any): obj is IMessage => {
  return obj && obj.content && isIMsessageType(obj.type);
};
export const isIMessageProgress = (obj: any): obj is IMessageProgress => {
  return obj && obj.content && obj.progress;
};
export const { setLoading, setMsg } = commonSlice.actions;
export default commonSlice.reducer;
