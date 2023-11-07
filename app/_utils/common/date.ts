import dayjs from 'dayjs'

export const newDate = () => dayjs().toDate()
type TIME_FORMATS = 'DAY' | 'MIN'

export const getDateFormat = (f: TIME_FORMATS) => {
  switch (f) {
    case 'DAY':
      return 'yyyy-MM-dd'
    case 'MIN':
      return 'yyyy-MM-dd HH:mm'
  }
}
