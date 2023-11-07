export function enumToArr<T>(e: T): T[keyof T][] {
  const enumItems: T[keyof T][] = []
  for (const item in e) {
    // console.log(item, e[item], ORDER_TYPE.STANDARD == e[item])
    if (isNaN(Number(item))) {
      enumItems.push(e[item])
    }
  }

  return enumItems
}

export const parseNumber = (a: unknown, defaultNum = 1) => {
  if (typeof a === 'number') return a
  const num = Number(a)
  return Number.isNaN(num) ? defaultNum : num
}
