'use client'
import {
  Table,
  TableColumn,
  TableRow,
  TableCell,
  TableHeader,
  TableBody,
} from '@nextui-org/table'

interface KT {
  key: string
  title: React.ReactNode
}
interface Row {
  key: string
  cells: KT[]
}
interface Props {
  columns: KT[]
  rows: Row[]
}

export default function MdxTable(props: Props) {
  const { columns, rows } = props

  return (
    <Table aria-label="Example static collection table" className="my-7">
      <TableHeader>
        {...columns.map((col) => (
          <TableColumn key={col.key}>{col.title}</TableColumn>
        ))}
      </TableHeader>
      <TableBody>
        {...rows.map((row) => (
          <TableRow key={row.key}>
            {...row.cells.map((cell) => (
              <TableCell key={cell.key}>{cell.title}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
