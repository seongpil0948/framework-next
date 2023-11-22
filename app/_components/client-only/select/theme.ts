import { tv } from '@nextui-org/theme'

const select = tv({
  base: 'flex-center w-full items-end',
  slots: {
    base: 'flex-1 min-w-[100px] [&+button]:ml-2',
    value:
      '[&>div]:flex [&>div]:gap-2 [&>div>div]:truncate [&>div>div>span]:flex-center-ver [&>div>div>span]:gap-2 [&>div>div>span]:truncate [&>div>div>span>span]:truncate [&>div>div]:flex-center-ver [&>div>div]:gap-2',
    innerWrapper: 'flex gap-2 items-center justify-between',
  },
  variants: {
    size: {
      sm: {
        base: 'w-sm',
      },
      md: {
        base: 'w-md',
      },
      lg: {
        base: 'w-lg',
      },
    },
  },
})

export { select }
