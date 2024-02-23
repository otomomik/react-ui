import { ComponentProps, FC } from 'react'
import { Column, Text } from '../lib'
import { PageLayout } from '../layouts/page'

const sizes: ComponentProps<typeof Text>['size'][] = [
  undefined,
  'xs',
  'sm',
  'md',
  'lg',
  'xl',
  'xxl',
]

export const TextPage: FC = () => {
  return (
    <PageLayout title="Text">
      <Column gap="md">
        {sizes.map((size) => (
          <Text key={size} size={size}>
            Text(size={`${size}`})
          </Text>
        ))}
      </Column>
    </PageLayout>
  )
}
