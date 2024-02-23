import type { ComponentProps, FC } from 'react'
import { Column, Text, Title } from './components/lib'
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
    <Column gap="xl">
      <Title order={2}>Title</Title>
      <Column gap="md">
        {orders.map((o) => (
          <Title key={o} order={o}>
            H{o}
          </Title>
        ))}
      </Column>
      <Title order={2}>Text</Title>
      <Column gap="md">
        {textSizes.map((t) => (
          <Text key={t} size={t}>
            Text(size={t})
          </Text>
        ))}
      </Column>
    </Column>
  )
}
