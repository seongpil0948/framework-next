<!---
제출 전 필독!

1. 이슈 제목은 "문제점"을 간결하게 요약해야 합니다.
2. 반드시 label::bug 를 달아주세요
3. 중복된 이슈가 없는지 확인해야 합니다.
   1. 관련 키워드로 검색
   2. "type::bug" 레이블로 필터링
--->

### 개요

<!-- 발생한 버그를 간략히 요약해주세요. -->

### Steps to reproduce

<!-- 버그를 재현하는 방법을 순서대로 적어주세요. (중요) -->

### What is the current _bug_ behavior?

<!--
버그가 어떻게 발생하는지 상세히 설명해주세요
이로인해 사용자가 겪는 불편함을 이해할 수 있어야 합니다.
-->

### What is the expected _correct_ behavior?

<!--
버그가 발생하지 않았을 때의 정상적인 동작을 설명해주세요.
이 동작 여부를 통해 버그가 해결되었는지 확인할 수 있습니다.
 -->

### Relevant logs and/or screenshots

<!--
버그가 발생했을 때의 로그와 스크린샷을 첨부해주세요.
버그를 재현하는데 필요한 정보를 제공할 수 있어야 합니다.
(```) 포맷을 통해 코드 블럭으로 작성해주세요.
 -->

<details>
<summary>Log & Screenshots</summary>
<pre>

(For installations with omnibus-gitlab package run and paste the output of:
`sudo gitlab-rake gitlab:env:info`)

(For installations from source run and paste the output of:
`sudo -u git -H bundle exec rake gitlab:env:info RAILS_ENV=production`)

</pre>
</details>

#### Results of environment info

<!--
1. `navigator.userAgent` 와 `navigator.appVersion` 을 실행한 결과를 첨부해주세요.
2. `import.meta.env` 출력 결과를 첨부해주세요.
 -->

### Possible fixes

<!--
할 수 있다면, 문제의 원인과 해결 방법을 설명해주세요.
-->

/label ~"type::bug"
