import { FC, PropsWithChildren } from 'react'
import { Column, Title } from '../lib'

type Props = PropsWithChildren<{
  title: string
}>

export const PageLayout: FC<Props> = ({ title, children }) => {
  return (
    <Column gap="lg">
      <Title order={2}>{title}</Title>
      {children}
    </Column>
  )
}
