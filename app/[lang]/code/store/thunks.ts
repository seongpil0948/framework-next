// /* Instruments */
// import { ReduxThunkAction } from "@/app/store";
// import { getFirestore } from "firebase/firestore";
// import { POST_DB } from "../db";
// import { setPosts } from "./list";

// // The function below is called a thunk and allows us to perform async logic. It
// // can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// // will call the thunk with the `dispatch` function as the first argument. Async
// // code can then be executed and other actions can be dispatched. Thunks are
// // typically used to make async requests.
// // export const incrementAsync = createAppAsyncThunk(
// //   'post/fetchPostList',
// //   async () => {
// //     const response = await fetchIdentityCount(amount)

// //     // The value we return becomes the `fulfilled` action payload
// //     return response.data
// //   }
// // )

// // We can also write thunks by hand, which may contain both sync and async logic.
// // Here's an example of conditionally dispatching actions based on current state.
// export const fetchPostList =
//   (): ReduxThunkAction => async (dispatch, getState) => {
//     const s = getState();
//     console.log("fetchPostList ===> : ", s.postList);
//     if (s.postList.noMore) return;
//     const newPosts = await POST_DB.list(getFirestore(), s.postList.params);
//     dispatch(
//       setPosts({
//         data: [...s.postList.posts, ...newPosts.data],
//         noMore: newPosts.noMore,
//         lastDoc: newPosts.lastDoc,
//       })
//     );
//   };
