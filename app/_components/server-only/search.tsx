import { box } from '@/app/_components/server-only/primitives'
import CmButton from './button'
import { SearchIcon } from '@/app/_components/server-only/icons'

interface SearchProps {
  children?: any
}

export default function CmSearch(props: SearchProps) {
  const { children } = props

  return (
    <div className={box({isSearch: true})}>
      <div>
        {children}
      </div>
      <CmButton color="primary">
        <SearchIcon/>검색
      </CmButton>
    </div>
  )
}
