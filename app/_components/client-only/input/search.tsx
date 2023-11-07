'use client'
import { toast } from 'react-toastify'
import InputTag from './input-tag'
import { Input } from '@nextui-org/input'
import { Kbd } from '@nextui-org/kbd'
import { SearchIcon } from '../../server-only/icons'

export function SearchInput() {
  return (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: 'bg-default-100',
        input: 'text-sm',
      }}
      endContent={
        <Kbd className="hidden lg:inline-block" keys={['command']}>
          K
        </Kbd>
      }
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  )
}

export function SearchPostBar() {
  const handleSearch = (tags: string[]) => {
    toast('🦄 Wow so easy! ' + tags.join(', '), {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    })
  }
  return <InputTag onSearch={handleSearch} labelPlacement="outside" />
}
