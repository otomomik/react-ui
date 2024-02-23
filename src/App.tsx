import type { ComponentProps, FC } from 'react'
import { Title } from './components/lib'

export const App: FC = () => {
  const orders: ComponentProps<typeof Title>['order'][] = [1, 2, 3, 4, 5, 6]

  return (
    <div>
      {orders.map((o) => (
        <Title key={o} order={o}>
          H{o}
        </Title>
      ))}
    </div>
  )
}
