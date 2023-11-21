import { tv } from '@nextui-org/theme'

const tree = tv({
  slots: {
    wrapper: 'wrapper flex-column justify-start gap-3',
    topMenu: [
      'topMenu',
      'after:block',
      'after:w-full',
      'after:h-px',
      'after:mt-3',
      '[&:not(:last-child)]:after:bg-zinc-100',
      'dark:[&:not(:last-child)]:after:bg-zinc-800',
      'font-semibold',
      '!text-black',
      'dark:!text-white',
      '[&>.wrapper]:mt-3',
    ],
    menu: 'menu flex-column font-normal text-gray-600 dark:text-gray-400',
    menuItem:
      'menuItem flex-center-ver rounded-md p-2 cursor-pointer transition-all hover:bg-zinc-100 dark:hover:bg-zinc-100/5',
  },
})

export { tree }
