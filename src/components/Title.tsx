import { ComponentProps, ElementType, FC, PropsWithChildren } from 'react'
import { clsx } from 'clsx'

type Attributes = ComponentProps<'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'>
type Props = PropsWithChildren<
  {
    order?: 1 | 2 | 3 | 4 | 5 | 6
  } & Pick<Attributes, 'className'>
>

export const Title: FC<Props> = ({ order = 1, className, children }) => {
  const Heading: ElementType = `h${order}`
  return (
    <Heading className={className ? clsx(className) : undefined}>
      {children}
    </Heading>
  )
}
