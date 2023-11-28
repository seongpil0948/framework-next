import { tv } from '@nextui-org/theme'

const sheet = tv({
  slots: {
    backdrop: 'bg-gray-400/20',
    base: '!m-0 h-full max-w-xs rounded-l-none rounded-r-xl shadow-xl',
    body: 'px-4',
    closeButton: 'top-3 right-4 rounded-md transition-all w-8 h-8 [&>svg]:w-4',
    footer: 'justify-start px-4 text-gray-400 text-xs',
    header: 'leading-8 px-4 py-3 pb-3',
  },
})

export { sheet }
