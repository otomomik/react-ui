import { ComponentProps, FC, PropsWithChildren } from 'react'
import { clsx } from 'clsx'
import * as styles from './styles.css'
import { TextRecipeVariants, textRecipe } from '../../recipes/text.css'

type Attributes = ComponentProps<'p'>
type Props = PropsWithChildren<
  {
    size?: TextRecipeVariants['size']
  } & Pick<Attributes, 'className'>
>

const Text: FC<Props> = ({ size = 'md', className, children }) => {
  return (
    <p
      className={clsx(
        textRecipe({
          size,
        }),
        styles.text,
        className
      )}
    >
      {children}
    </p>
  )
}

export default Text
