import { title } from '@/app/_components/server-only/primitives'
import GroupCodeView from './_components/GroupCodeView'

export default function SSGPage() {
  return (
    <div>
      <h1 className={title()}>Common Code</h1>
      <GroupCodeView />
    </div>
  )
}
