import { tv } from '@nextui-org/theme'

const title = tv({
  base: 'inline-block',
  variants: {
    size: {
      sm: 'text-2xl font-medium leading-8 mb-5',
      md: 'text-5xl',
      lg: 'text-7xl font-black leading-tight',
    },
    gradient: {
      true: 'bg-clip-text text-transparent gradient',
    },
  },
})

export { title }
