import { tv } from '@nextui-org/theme'

const blushStyle = 'absolute bottom-[-15px] w-[100px] h-[30px] blur-[20px]'
const colorPurple = '#db07d1'
const colorPink = '#f2056f'
const colorBlue = '#61dafb'
const introBtn = tv({
  slots: {
    wrapper: `wrapper font-[Poppins] flex-center gradient relative px-10 py-5 outline-none border-none rounded-[60px] tracking-[-1px] text-white text-center text-2xl font-semibold appearance-none	cursor-pointer`,
    shapes: `shapes absolute inset-x-[-1px] inset-y-[-1px] rounded-[60px] bg-gradient-to-r from-[${colorBlue}] from-0% via-[#d6cbf6] via-30% to-[${colorPink}] to-70%`,
    blushPink: `blushPink ${blushStyle} left-[20px] bg-[${colorPurple}]`,
    blushBlue: `blushBlue ${blushStyle} right-[20px] bg-[${colorBlue}]`,
    container:
      'absolute inset-x-[-100px] inset-y-[-100px] w-[calc(100%+200px)] pointer-events-none',
    canvas: 'absolute w-full h-full',
  },
})
export { introBtn }
