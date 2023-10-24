import { title } from "@/app/_components/primitives";

export default function SSGPage() {
  return (
    <div>
      <h1 className={title()}>Docs</h1>
      <p>
        해당 페이지는 프레임워크 설명을 위한 페이지입니다. mdx 와 tsx 파일
        형식으로 자유롭게 기술 할 수 있습니다 다음과 같은 구조
        {`- 가이드
					- 개요 및 설치
					- 주요 기능
					- Contribute 방법: 
						1. 이슈 생성과 라벨 가이드
						 - 종류(버그, 기능) 별 이슈 생성 가이드
						 - 라벨 히스토리 가이드
						2. 단위테스트 및 테스트 코드 작성
						3. PR Template 선택 방법
						4. Merge Guide
				- 컨벤션`}
      </p>
    </div>
  );
}
