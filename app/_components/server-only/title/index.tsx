import { title } from './theme'

interface TitleProps {
  children?: any
  size?: 'sm' | 'md' | 'lg'
}

export default function CmTitle(props: TitleProps) {
  const { children, size = 'sm' } = props

  return <h2 className={title({ size: size })}>{children}</h2>
}
