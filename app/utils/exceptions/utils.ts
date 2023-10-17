import { type AppDispatch, setMsg } from "@/app/store";

export function handleError(error: unknown): {
  title?: string;
  message: string;
} {
  if (error instanceof Error) {
    return { message: error.message };
  }
  console.error(error);
  return { message: "An unknown error occurred" };
}

// export async function handleModalError(dispatch: AppDispatch, error: unknown) {
//   const result = handleError(error);
//   // const dict = await getDictionary(lang)
//   console.error("===>", result, error);
//   dispatch(
//     setMsg({
//       title: result.title,
//       content: result.message,
//       type: "error",
//     })
//   );
// }
