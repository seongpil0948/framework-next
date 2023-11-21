// export function setTreeToList<T>(list: T, target, parent, menuIndex) {
//   if (Array.isArray(target)) {
//     let index = 0
//     target.forEach((t) => {
//       setTreeToList(list, t, parent, index++)
//     })
//   }
//   else {
//     const manfObj = { ...target }
//     manfObj.parentMenuId = parent
//     manfObj.menuIndex = menuIndex
//     list.push(manfObj)
//     if (target.children)
//       setTreeToList(list, target.children, target.menuId)
//   }
// }

export function scriptLoader(url: string, key: string) {
  return new Promise<void>((resolve, reject) => {
    // const existing = document.querySelector('script#someUniqueId')
    const existing = document.querySelector(`script#${key}`)
    if (existing) existing.remove()
    const script = document.createElement('script')
    script.onload = () => {
      resolve()
    }
    script.onerror = (e) => {
      reject(e)
    }
    script.id = key
    script.async = true
    script.defer = true
    script.src = url
    document.head.appendChild(script)
  })
}

export function timeout(ms?: number | undefined) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
/**
 * 빈 값 확인
 * @param {*} value
 * @return Boolean 빈 값인 경우 true 리턴
 */
export function isEmpty(value: unknown) {
  // 빈 값 체크
  const result = false
  if (value === undefined) return true

  if (typeof value === 'number') {
    if (value === 0) return true
  } else if (typeof value === 'string') {
    if (value === '' || value.length === 0) return true
  } else if (typeof value === 'object') {
    if (Array.isArray(value)) {
      if (value.length === 0) return true
    } else if (!value) {
      return true
    } else {
      if (Object.keys(value).length === 0) return true
    }
  }
  return result
}

export function encodeBase64(str: string) {
  return btoa(encodeURI(str))
}

export function decodeBase64(base64str: string) {
  return decodeURI(atob(base64str))
}

export function checkTelNo(value: string) {
  const regx = /^0([0-9]{1,2})?([0-9*]{3,4})?([0-9]{4})$/
  if (value.match(regx) === null) return false

  return true
}

export function checkTelNoExcept010(value: string) {
  const regx = /^([0-9*]{3,4})-?([0-9]{4})$/
  if (value.match(regx) === null) return false

  return true
}

/**
 * 휴대폰번호를 유플러스 CTN 규격에 맞게 변경
 * @param {String} value 휴대폰번호 규격
 * @return {String} 유플러스 CTN 규격 010012341234
 */
export function convertTelNoToCtn(value: string) {
  if (isEmpty(value)) return ''

  const telNo = formatTelNo(value).split('-')
  return `${telNo[0]}0${telNo[1]}${telNo[2]}`
}

/**
 * 유플러스 CTN 규격을 휴대폰 번호 규격으로 변경
 * @param {String} value 유플러스 CTN 규격 010012341234
 * @return {String} 휴대폰번호 규격 010-1234-1234
 */
export function convertCtnToTelNo(value: string) {
  if (isEmpty(value)) return ''

  value = value.replace(
    /(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})$/,
    '$1-$2-$3',
  )
  const result = value.split('-')
  result[1] = result[1].substr(1)
  return result.join('-')
}

export function checkEmail(value: string) {
  const regx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  if (value.match(regx) === null) return false

  return true
}

/**
 * 초단위를 시간 표기로 변경 (HH:mm:ss)
 * @param {Number} value 초단위
 */
export function convertTimeFormat(value: number) {
  const str = new Date(value * 1000).toUTCString().match(/(\d\d:\d\d:\d\d)/)
  if (!str || str.length < 1) return ''
  return value > 1 * 60 * 60 ? str[0] : str[0].substr(3)
}

/**
 * 프로젝트 요일 코드를 요일로 변경
 * @param {String} value 프로젝트에서 사용하는 요일 코드
 */
export function convertDayCodeToDay(value: string) {
  switch (value) {
    case 'D01':
      return 0
    case 'D02':
      return 1
    case 'D03':
      return 2
    case 'D04':
      return 3
    case 'D05':
      return 4
    case 'D06':
      return 5
    case 'D07':
      return 6
    default:
      return ''
  }
}

/**
 * 문자를 길이만큼 자른다.
 * @param {String} value 문자
 * @param {Number} length 길이
 */
export function textEllipsis(value: string, length: number) {
  if (value && value.length > length) value = `${value.slice(0, length)}...`

  return value
}

/**
 * 자리수를 0으로 채워준다.
 * @param {*} value 숫자
 * @param {Number} width 길이
 */
export function pad(value: string, width: number) {
  value = `${value}`
  return value.length >= width
    ? value
    : Array.from({ length: width - value.length + 1 }).join('0') + value
}

/**
 * HH:mm 포맷을 한글 시 분으로 변경
 * @param {String} value HH:mm 포맷의 문자열
 * @return {String} 오전 HH시 mm분
 */
export function convertHhmmToKo(value: string) {
  if (isEmpty(value)) return ''

  const arr = value.split(':')
  const ko = Number.parseInt(arr[0]) < 12 ? '오전' : '오후'
  const hh =
    Number.parseInt(arr[0]) < 12
      ? arr[0]
      : pad(String(Number.parseInt(arr[0]) - 12), 2)
  const mm = pad(arr[1], 2)
  return [ko, `${hh}시`, `${mm}분`].join(' ')
}

/**
 * 시간 포맷 변경 HHmm -> HH:mm
 * @param {String} value HHmm형식의 문자열
 */
export function formatTime(value: string) {
  if (!value) return ''
  value = value.replace(/[^0-9]/g, '').replace(/([0-9]{2})([0-9]{2})/g, '$1:$2')
  return value
}

/**
 * 전화번호 포맷 변경
 * @param {String} value 전화번호 문자열
 * @return {String} 1234-1234 포맷으로 변경
 */
export function formatTelNoExcept010(value: string) {
  value = value.replace(/-/g, '')
  if (value.length > 8) value = value.substr(3)

  value = value
    .replace(/[^0-9]/g, '')
    .replace(/([0-9]+)?([0-9]{4})$/, '$1-$2')
    .replace('--', '-')
  return value
}
/**
 * 전화번호 포맷 변경
 * @param {String} value 전화번호 문자열
 * @return {String} 010-1234-1234 포맷으로 변경
 */
export function formatTelNo(value: string) {
  value = value
    .replace(/-/g, '')
    .replace(/[^0-9]/g, '')
    .replace(/(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})$/, '$1-$2-$3')
  return value
}

/**
 * 숫자 포맷
 * @param {*} value 문자열
 * @return {String} 숫자포맷에 맞는 문자열 리턴
 */
export function formatOnlyNumber(value: string) {
  return value ? value.toString().replace(/[^0-9]/g, '') : value
}

/**
 * 대괄호 포맷
 * @param {*} value 문자열
 * @return {String} 대괄호 포맷에 맞는 문자열 리턴
 */
export function bigBracket(value: string) {
  return value ? value.toString().replace(/[[\]]/g, '') : value
}

/**
 * 숫자,(B,F) 포맷
 * @param {*} value 문자열
 * @return {String} 숫자와 'B','F' 포맷에 맞는 문자열 리턴
 */
export function formatOnlyNumEng(value: string) {
  return value ? value.toString().replace(/[^0-9|B|F]/g, '') : value
}

/**
 * 한글 포맷
 * @param {String} value 문자열
 * @return {String} 한글 포맷에 맞는 문자열만 리턴
 */
export function formatKorean(value: string) {
  const pattern = /[a-zA-Z0-9]|[\[\]{}()<>?|`~!@#$%^&*\-_+=,.;:\"'\\]/g
  return value.replace(pattern, '')
}

/**
 * 영문 포맷
 * @param {String} value 문자열
 */
export function formatEnglish(value: string) {
  const pattern = /[a-z0-9]/g
  return value.replace(pattern, '')
}

/**
 * 한글, 영문 포맷
 * @param {String} value 문자열
 */
export function formatKoEn(value: string) {
  const pattern = /[0-9]|[\[\]{}()<>?|`~!@#$%^&*\-_+=,.;:\"'\\]/g
  return value.replace(pattern, '')
}

/**
 * 이메일 포맷
 * @param {String} value 문자열
 * @return {String} 이메일 포맷에 맞는 문자열 리턴
 */
export function formatEmail(value: string) {
  const pattern = /[^a-zA-Z0-9@._-]/g
  return value.replace(pattern, '')
}

/**
 * 숫자, 마침표 외 입력 방지
 * @param {String} value 문자열
 * @return {String} 숫자, 마침표 포함 문자열 리턴
 */
export function keyEventOnlyMacAdd(value: string) {
  return value.replace(/[^-\.0-9]/g, '')
}

/**
 * 색상 코드를 숫자 값으로 변경
 * @param {String} hex 색상 hex 코드 #ffffff
 * @return {Object} {r: 255, g: 255, b: 255}
 */
export function hexToRgb(hex: string) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  if (!result) return undefined

  return {
    r: Number.parseInt(result[1], 16),
    g: Number.parseInt(result[2], 16),
    b: Number.parseInt(result[3], 16),
  }
}

/**
 * 밝은 컬러인지 여부 확인
 * @param {String} color 색상 hex 코드 #ffffff
 * @return {Boolean} 밝은 색상인지 여부
 */
export function isBrightColor(color: string) {
  const rgb = hexToRgb(color)
  if (rgb && rgb.r > 200 && rgb.g > 200 && rgb.b > 200) return true

  return false
}

/**
 * date format string을 비교한다.
 * @param {String, DateObject} date1 Date format String / Date
 * @param {String, DateObject} date2 Date format String / Date
 */
export function diffDate(date1: string | Date, date2: string | Date) {
  date1 = typeof date1 === 'string' ? new Date(date1) : date1
  date2 = typeof date2 === 'string' ? new Date(date2) : date2
  return date1.getTime() - date2.getTime()
}

// /**
//  * FormData 로그 기록
//  * @param {FormData} formData FormData
//  */
// export function logFormData(formData: FormData) {
//   if (formData.entries) {
//     for (const pair of formData.entries())
//       // eslint-disable-next-line no-console
//       console.log(pair[0], pair[1])
//   }
// }

/**
 * 숫자 자리수 표시
 * @param {Number, String} number 숫자
 * @return {String} #,### 포맷
 */
export function prettyNumber(number: number = 0) {
  if (isEmpty(number)) return '0'

  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
export const parseNumber = (a: unknown, defaultNum = 1) => {
  if (typeof a === 'number') return a
  const num = Number(a)
  return Number.isNaN(num) ? defaultNum : num
}
/**
 * 목록의 Row number
 * @param {*} totalCount 총 개수
 * @param {*} page 현재 페이지
 * @param {*} size 출력 개수
 * @param {*} index row index
 */
export function rowNumber(
  totalCount: string | number,
  page: string | number,
  size: string | number,
  index: string | number,
) {
  return (
    parseNumber(totalCount) -
    (parseNumber(page) - 1) * parseNumber(size) -
    parseNumber(index)
  )
}

/**
 * 목록의 페이징
 * @param {*} req param
 * @param {*} data mock data
 */
export function makeMockupPagingData<
  T extends { params: any },
  K extends { body: any },
>(req: T, data: K) {
  const startIndex = (req.params.currentPage - 1) * req.params.limit
  const endIndex = req.params.currentPage * req.params.limit
  const dataArray = data.body.data.slice(startIndex, endIndex)
  const copyData: K & T['params'] = {
    ...data,
    currentPage: req.params.currentPage,
    limit: req.params.limit,
  }
  copyData.body = { ...data.body }
  copyData.body.data = dataArray
  return copyData
}

/**
 * 뒤의 값을 앞의 오브젝트의 Key 기준으로 값을 셋팅
 * @param {Object} target 값이 저장될 Object, 해당 Object의 Key 값에 해당 된것 들만 반영
 * @param {Object} data target에 반영할 대상 Object
 */
export function assignByTargetKeys<T extends { [k: string]: any }>(
  target: T,
  data: { [k in keyof T]: any },
) {
  const keys: (keyof T)[] = Object.keys(target)
  for (const i of keys) {
    if (data[i]) target[i] = data[i]
  }
}

/**
 * 문자열 영문, 숫자, 특수문자 조합 8자리 이상인지 확인
 * @param  {String} str 문자열
 * @return {Boolean} 영문, 숫자, 특수문자 조합 8자리 이상 여부
 */
export function isPw(pw: string) {
  const regEn = /[a-z]/g
  const regNum = /[0-9]/g
  const regCh = /[~!@#$%<>^&*()]/g

  if (regEn.test(pw) && regNum.test(pw) && regCh.test(pw) && pw.length >= 8)
    return true

  return false
}

/**
 * 올바른 url 형식인지 확인
 * @param  {String} str 문자열
 * @return {Boolean} url 형식 여부
 */
export function isUrl(url: string) {
  const firstUrl = url.charAt(0)
  if (firstUrl === '/') return true

  return false
}

/**
 * 비밀번호 형식 확인
 * 영문, 숫자, 특수문자(@$!%*#?&) 포함 8자리 이상
 * @param {String} value 비밀번호
 * @returns {Boolean} 형식 일치 여부
 */
export function checkPassword(value: string) {
  const regx = /^(?=.*[A-Za-z])(?=.*[@$!%*#?&])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/ // 영문, 숫자, 특수문자
  return regx.test(value)
}

/**
 * 비밀번호 형식 확인
 * 영문, 숫자, 특수문자(@$!%*#?&) 2개 이상의 조합 8자리 이상
 * @param {String} value 비밀번호
 * @returns {Boolean} 형식 일치 여부
 */
export function checkPassword2(value: string) {
  const regx1 = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/ // 영문, 숫자
  const regx2 = /^(?=.*[A-Za-z])(?=.*[@$!%*#?&])[A-Za-z@$!%*#?&]{8,}$/ // 영문, 특수문자
  const regx3 = /^(?=.*[@$!%*#?&])(?=.*\d)[\d@$!%*#?&]{8,}$/ // 숫자, 특수문자
  const regx4 = /^(?=.*[A-Za-z])(?=.*[@$!%*#?&])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/ // 영문, 숫자, 특수문자
  return (
    regx1.test(value) ||
    regx2.test(value) ||
    regx3.test(value) ||
    regx4.test(value)
  )
}

/**
 * 파일 다운로드
 */
export function fileDownload(
  extension: string,
  binary: string,
  orgFileNm: string,
) {
  const link = document.createElement('a')
  link.style.display = 'none'
  link.href = `data:image/${extension};base64,${binary}`
  link.setAttribute('download', orgFileNm)
  document.body.appendChild(link)
  link.click()
  link.remove()
}

/**
 * IP 포맷 확인
 * @param {*} value
 * @returns
 */
export function formatIp(value: string) {
  const regx =
    /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
  return regx.test(value)
}

export function enumToArr<T>(e: T): T[keyof T][] {
  const enumItems: T[keyof T][] = []
  for (const item in e) {
    // console.log(item, e[item], ORDER_TYPE.STANDARD == e[item])
    if (Number.isNaN(Number(item))) enumItems.push(e[item])
  }

  return enumItems
}

export function getExtension(filename: string) {
  const parts = filename.split('.')
  return parts[parts.length - 1]
}

export function getMimeType(ext: string) {
  if (ext === 'jpg') return 'image/jpeg'
  if (ext === 'png') return 'image/png'
  if (
    ext === 'mp4' ||
    ext === 'mov' ||
    ext === 'avi' ||
    ext === 'wmv' ||
    ext === 'flv' ||
    ext === 'mkv' ||
    ext === 'webm' ||
    ext === 'm4v'
  )
    return 'video/mp4'
  return 'image/jpeg'
}
