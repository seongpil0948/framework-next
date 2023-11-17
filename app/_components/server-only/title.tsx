import { title } from '@/app/_components/server-only/primitives'

interface TitleProps {
  className?: string
  children?: any
}

export default function CmTitle(props: TitleProps) {
  const { className = title(), children } = props

  return <h2 className={className}>{children}</h2>
}
