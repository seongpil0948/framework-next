import { title } from './theme'

interface TitleProps {
  className?: string
  children?: any
}

export default function CmTitle(props: TitleProps) {
  const { className = title(), children } = props

  return <h2 className={className}>{children}</h2>
}
