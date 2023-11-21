import { configureStore, type ThunkAction, type Action } from '@reduxjs/toolkit'
import commonForm from './common-code-form'
import codeSlice from './common'

import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
export const codeStore = configureStore({
  reducer: {
    commonForm,
    codeSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type CodeState = ReturnType<typeof codeStore.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type CodeDispatch = typeof codeStore.dispatch
// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useCodeDispatch: () => CodeDispatch = useDispatch
export const useCodeSelector: TypedUseSelectorHook<CodeState> = useSelector
export type ReduxThunkAction<ReturnType = void> = ThunkAction<
  ReturnType,
  CodeState,
  unknown,
  Action
>
