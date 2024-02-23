import { ComponentProps, ElementType, FC, PropsWithChildren } from 'react'
import { clsx } from 'clsx'
import * as styles from './styles.css'

type Attributes = ComponentProps<'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'>
type Props = PropsWithChildren<
  {
    order?: 1 | 2 | 3 | 4 | 5 | 6
  } & Pick<Attributes, 'className'>
>

const Title: FC<Props> = ({ order = 1, className, children }) => {
  const Heading: ElementType = `h${order}`
  return <Heading className={clsx(styles.title, className)}>{children}</Heading>
}

export default Title
