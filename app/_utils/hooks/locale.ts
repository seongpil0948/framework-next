// import { getDictionary, type TDictVal } from "@/app/[lang]/dictionaries";
// import { useCommonCtx } from "@/app/components/providers";
// import { useEffect, useState } from "react";

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
