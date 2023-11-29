'use client'
import { Suspense, useState } from 'react'
import { motion, MotionConfig, useMotionValue } from 'framer-motion'
import { Shapes, transition } from './shapes'
import useMeasure from 'react-use-measure'
import { useRouter } from 'next/navigation'
import { introBtn } from './theme'

export default function HiButton(props: { onClick?: () => void }) {
  const [ref, bounds] = useMeasure({ scroll: false })
  const [isHover, setIsHover] = useState(false)
  const [isPress, setIsPress] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const router = useRouter()

  const resetMousePosition = () => {
    mouseX.set(0)
    mouseY.set(0)
  }
  const { wrapper, shapes, blushPink, blushBlue, container } = introBtn()

  return (
    <MotionConfig transition={transition}>
      <motion.button
        ref={ref}
        initial={false}
        animate={isHover ? 'hover' : 'rest'}
        onClick={() => {
          router.push(`/doc/getting-started`)
          props.onClick && props.onClick()
        }}
        whileTap="press"
        variants={{
          rest: { scale: 1 },
          hover: { scale: 1.5 },
          press: { scale: 1.4 },
        }}
        onHoverStart={() => {
          resetMousePosition()
          setIsHover(true)
        }}
        onHoverEnd={() => {
          resetMousePosition()
          setIsHover(false)
        }}
        onTapStart={() => setIsPress(true)}
        onTap={() => setIsPress(false)}
        onTapCancel={() => setIsPress(false)}
        onPointerMove={(e) => {
          mouseX.set(e.clientX - bounds.x - bounds.width / 2)
          mouseY.set(e.clientY - bounds.y - bounds.height / 2)
        }}
        className={wrapper()}
      >
        <motion.div
          className={shapes()}
          variants={{
            rest: { opacity: 0 },
            hover: { opacity: 1 },
          }}
        >
          <div className={blushPink()} />
          <div className={blushBlue()} />
          <div className={container()}>
            <Suspense fallback={null}>
              <Shapes
                isHover={isHover}
                isPress={isPress}
                mouseX={mouseX}
                mouseY={mouseY}
              />
            </Suspense>
          </div>
        </motion.div>
        <motion.div
          variants={{ hover: { scale: 0.85 }, press: { scale: 1.1 } }}
          className="w-fit"
        >
          Get started &#8594;
        </motion.div>
      </motion.button>
    </MotionConfig>
  )
}
