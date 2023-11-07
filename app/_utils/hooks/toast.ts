import { useRef } from 'react'
import { Id, ToastContent, toast } from 'react-toastify'

export function useToastProgress() {
  const toastId = useRef<Id | null>(null)
  const showProgressToast = (content: ToastContent, progress: number) => {
    if (toastId.current === null) {
      toastId.current = toast(content, { progress })
    } else {
      toast.update(toastId.current, { progress, render: content })
    }
  }
  const hideProgressToast = () => {
    if (toastId.current !== null) {
      toast.dismiss(toastId.current)
      toastId.current = null
    }
  }
  return {
    showProgressToast,
    hideProgressToast,
  }
}

// export function useDictionary() {
//   const [dictionary, setDictionary] = useState<TDictVal | undefined>();
//   const { clientLocale } = useCommonCtx();

//   useEffect(() => {
//     import(`@/locales/${clientLocale}.json`).then((module) => {
//       setDictionary(module.default);
//     });
//   });

//   return dictionary;
// }
