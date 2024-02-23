import { ComponentProps, ElementType, FC, PropsWithChildren } from 'react'
import { clsx } from 'clsx'
import * as styles from './styles.css'
import { textRecipe } from '../../recipes/text.css'

type Attributes = ComponentProps<'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'>
type Props = PropsWithChildren<
  {
    order?: 1 | 2 | 3 | 4 | 5 | 6
  } & Pick<Attributes, 'className'>
>

const textStyle: Record<NonNullable<Props['order']>, string> = {
  1: textRecipe({
    size: 'xxl',
  }),
  2: textRecipe({
    size: 'xl',
  }),
  3: textRecipe({
    size: 'lg',
  }),
  4: textRecipe({
    size: 'md',
  }),
  5: textRecipe({
    size: 'sm',
  }),
  6: textRecipe({
    size: 'xs',
  }),
}

const Title: FC<Props> = ({ order = 1, className, children }) => {
  const Heading: ElementType = `h${order}`

  return (
    <Heading className={clsx(textStyle[order], styles.title, className)}>
      {children}
    </Heading>
  )
}

export default Title
