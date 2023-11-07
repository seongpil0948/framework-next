import { Input, InputProps } from '@nextui-org/input'
import { MailIcon, LockIcon } from '../../server-only/icons'

export function InputEmail(p: {
  email: string
  setEmail: (s: string) => void
  inputParam?: InputProps
}) {
  return (
    <Input
      variant="bordered"
      className="mb-2"
      endContent={
        <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
      }
      label="Email"
      placeholder="Enter your email"
      onValueChange={p.setEmail}
      value={p.email}
      {...p.inputParam}
      autoComplete="email"
    />
  )
}
export function InputPassword(p: {
  password: string
  setPassword: (s: string) => void
}) {
  return (
    <Input
      variant="bordered"
      endContent={
        <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
      }
      label="Password"
      placeholder="Enter your password"
      type="password"
      value={p.password}
      onValueChange={p.setPassword}
      autoComplete="current-password"
    />
  )
}
