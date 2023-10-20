
## 파일 기본 규칙
파일 상단에는 목적에 맞게 `"use client"` | `"use server"` 를 명시하세요
하지만 저희는 대부분의 모듈을 "use client"로 작성합니다
[참고](https://nextjs.org/docs/app/building-your-application/rendering#network-boundary)


## 페이지 파일 작성
페이지 모듈명은 다음과 같이 작성하세요 
`export default [RenderMethod]Page`
### example
```ts
export default function SSRPage {}
export default function SSGPage {}
export default function CSRPage {}
```