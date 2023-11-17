import { tv } from 'tailwind-variants'

export const title = tv({
  base: 'inline-block text-2xl font-medium leading-8 mb-5',
  // variants: {
  //   size: {
  //     sm: 'text-3xl lg:text-4xl',
  //     md: 'text-[2.3rem] lg:text-5xl leading-9',
  //     lg: 'text-4xl lg:text-6xl',
  //   },
  // },
  // defaultVariants: {
  //   size: 'md',
  // },
  // compoundVariants: [
  //   {
  //     color: [
  //       'violet',
  //       'yellow',
  //       'blue',
  //       'cyan',
  //       'green',
  //       'pink',
  //       'foreground',
  //     ],
  //     class: 'bg-clip-text text-transparent bg-gradient-to-b',
  //   },
  // ],
})

export const subtitle = tv({
  base: 'w-full md:w-1/2 my-2 text-lg lg:text-xl text-default-600 block max-w-full',
  variants: {
    fullWidth: {
      true: '!w-full',
    },
  },
  defaultVariants: {
    fullWidth: true,
  },
})

// =================================================================== in pre..
export const layout = tv({
  base: 'flex flex-col h-screen relative',
})

export const main = tv({
  base: 'flex-grow min-w-full pt-20 px-14 relative',
  variants: {
    size: {
      sm: 'px-8 pt-6 pb-8', // fin
      md: 'md:py-10',
      lg: 'px-4 py-10',
    },
  },
})

export const docWrapper = tv({
  base: 'w-4xl max-w-6xl mx-auto relative',
})

export const box = tv({
  base: 'relative overflow-y-hidden flex items-center border border-default-200 dark:border-default-100 px-2 py-4 rounded-lg overflow-hidden',
  variants: {
    isSearch: {
      true: "[&>div]:flex-center [&>div]:flex-1 [&>div]:w-full [&>div]:gap-16 px-6 py-5 gap-20",
    },
  },
})

export const tableWrapper = tv({
  base: 'table-wrapper flex mt-5',
})

export const table = tv({
  base: 'table flex-1 h-full',
  variants: {
    isSplit: {
      true: "w-1/2 ml-5",
    },
  },
})

export const pagination = tv({
  base: 'pagination mt-5',
})

export const dropdown = tv({
  base: 'dropdown [&>div]:flex-center-ver [&>div]:flex-1',
})