import type { ComponentProps, FC } from 'react'
import { Text, Title } from './components/lib'
import { TextRecipeVariants } from './recipes/text.css'

export const App: FC = () => {
  const orders: ComponentProps<typeof Title>['order'][] = [1, 2, 3, 4, 5, 6]
  const textSizes: TextRecipeVariants['size'][] = [
    'xxl',
    'xl',
    'lg',
    'md',
    'sm',
    'xs',
  ]

  return (
    <div>
      <Title order={2}>Title</Title>
      {orders.map((o) => (
        <Title key={o} order={o}>
          H{o}
        </Title>
      ))}
      <Title order={2}>Text</Title>
      {textSizes.map((t) => (
        <Text key={t} size={t}>
          Text(size={t})
        </Text>
      ))}
    </div>
  )
}
