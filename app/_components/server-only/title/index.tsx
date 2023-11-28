import { title as originalTitle } from './theme'

type HeadingSize = 'sm' | 'md' | 'lg'

interface ExtendedTitleFunc {
  (options: { size: HeadingSize; gradient?: boolean }): string
}

const title = originalTitle as ExtendedTitleFunc

interface TitleProps extends Omit<React.HTMLProps<HTMLHeadingElement>, 'size'> {
  size?: HeadingSize
  gradient?: boolean
}

const CmTitle: React.FC<TitleProps> = ({
  children,
  size = 'sm',
  gradient = false,
  className = '',
  ...restProps
}) => {
  const tvClassName = title({ size, gradient })
  const combinedClassName = `${tvClassName} ${className}`.trim()

  return (
    <h2 className={combinedClassName} {...restProps}>
      {children}
    </h2>
  )
}

export default CmTitle
