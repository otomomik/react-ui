import { ComponentProps, FC } from 'react'
import { Column, Title } from '../lib'
import { PageLayout } from '../layouts/page'

const orders: ComponentProps<typeof Title>['order'][] = [
  undefined,
  1,
  2,
  3,
  4,
  5,
  6,
]

export const TitlePage: FC = () => {
  return (
    <PageLayout title="Title">
      <Column gap="md">
        {orders.map((order) => (
          <Title key={order} order={order}>
            Title(order={`${order}`})
          </Title>
        ))}
      </Column>
    </PageLayout>
  )
}
