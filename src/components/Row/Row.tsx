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

const Row: FC<Props> = ({ gap, className, children }) => {
  return (
    <div className={clsx(flexRecipe({ gap }), styles.row, className)}>
      {children}
    </div>
  )
}

export default Row
