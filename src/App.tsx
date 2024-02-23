import type { FC } from 'react'
import { Column } from './components/lib'
import { TitlePage } from './pages/Title'
import { TextPage } from './pages/Text'

export const App: FC = () => {
  return (
    <Column gap="xl">
      <TitlePage />
      <TextPage />
    </Column>
  )
}
