type T_FILE_UNIT =
  | 'Byte'
  | 'KB'
  | 'MB'
  | 'GB'
  | 'TB'
  | 'PB'
  | 'EB'
  | 'ZB'
  | 'YB'
const FILE_UNITS: T_FILE_UNIT[] = [
  'Byte',
  'KB',
  'MB',
  'GB',
  'TB',
  'PB',
  'EB',
  'ZB',
  'YB',
]
const BYTE_UNIT = 1024

export const formatBytes = (byteData: number) => {
  const { size, value } = getByteInfo(byteData)
  return `${value} ${size}`
}

export const getByteInfo = (
  byteData: number,
): { size: T_FILE_UNIT; value: number; idx: number } => {
  if (byteData === 0) return { size: 'Byte', value: 0, idx: 0 }
  const idx = Math.floor(Math.log(byteData) / Math.log(BYTE_UNIT))
  const value = Math.floor(byteData / BYTE_UNIT ** idx)
  return { size: FILE_UNITS[idx], value, idx }
}
