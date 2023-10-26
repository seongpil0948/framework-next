// import { PayloadAction, createSlice } from "@reduxjs/toolkit";
// import { PaginateParam } from "@/app/types";
// import { getCopyWith } from "@/utils";
// import { PromiseReturnType } from "@/types";
// import { IPost, IPostDB } from "../types";

// type PP = PaginateParam<IPost>;
// export const pagingCopyWith = getCopyWith<PP>((p?: PP) => ({
//   pageSize: 10,
//   orderBy: "publishedAt",
//   lastData: undefined,
// }));
// const getInitialState = () =>
//   <{ posts: IPost[]; params: PP; noMore: boolean }>{
//     posts: [],
//     params: pagingCopyWith(),
//     noMore: false,
//   };
// const postSlice = createSlice({
//   name: "post-list",
//   initialState: getInitialState(),
//   reducers: {
//     setPosts: (
//       state,
//       action: PayloadAction<Partial<PromiseReturnType<IPostDB<any>["list"]>>>
//     ) => {
//       state.posts = action.payload.data ?? state.posts;
//       state.noMore = action.payload.noMore ?? state.noMore;
//       state.params.lastData = action.payload.lastDoc ?? state.params.lastData;
//     },
//     setParams: (state, action: PayloadAction<PP>) => {
//       state.params = action.payload;
//     },
//     deletePost: (state, action: PayloadAction<string>) => {
//       state.posts = state.posts.filter((post) => post.id !== action.payload);
//     },
//   },
// });

// export const { setPosts, setParams, deletePost } = postSlice.actions;
// export default postSlice.reducer;
// // await POST_DB.list(getFirestore(), state.paginateParams)
