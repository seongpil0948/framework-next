import { tv } from 'tailwind-variants'

export const tableWrapper = tv({
  base: 'table-wrapper flex mt-5',
})

export const table = tv({
  base: 'overflow-auto flex flex-col relative justify-between w-full gap-4 p-4',
  variants: {
    isSplit: {
      true: 'w-1/2 ml-5',
    },
  },
})
