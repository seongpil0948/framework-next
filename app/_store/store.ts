import { configureStore, type ThunkAction, type Action } from '@reduxjs/toolkit'
import common from './common'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

export const rootStore = configureStore({
  reducer: {
    common,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootStore.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof rootStore.dispatch
// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export type ReduxThunkAction<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action
>
