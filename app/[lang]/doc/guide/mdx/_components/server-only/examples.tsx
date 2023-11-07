import { CardBasic } from '@/app/_components/server-only/cards'
import { title } from '@/app/_components/server-only/primitives'

export function ExampleComponent() {
  return (
    <CardBasic
      title={<h2 className={title({ color: 'green' })}>card title</h2>}
      body={<p> Body </p>}
      footer="footer"
    />
  )
}
