import { ComponentProps, FC, PropsWithChildren } from 'react'
import { clsx } from 'clsx'
import * as styles from './styles.css'
import { FlexRecipeVariants, flexRecipe } from '../../recipes/flex.css'

type Attributes = ComponentProps<'div'>
type Props = PropsWithChildren<
  {
    gap?: FlexRecipeVariants['gap']
  } & Pick<Attributes, 'className'>
>

const Column: FC<Props> = ({ gap, className, children }) => {
  return (
    <div className={clsx(flexRecipe({ gap }), styles.column, className)}>
      {children}
    </div>
  )
}

export default Column
