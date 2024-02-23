import { recipe, RecipeVariants } from '@vanilla-extract/recipes'

export const flexRecipe = recipe({
  base: {
    display: 'flex',
  },
  variants: {
    gap: {
      xs: {
        gap: '0.25rem',
      },
      sm: {
        gap: '0.5rem',
      },
      md: {
        gap: '1rem',
      },
      lg: {
        gap: '1.5rem',
      },
      xl: {
        gap: '2rem',
      },
    },
  },
})
export type FlexRecipeVariants = NonNullable<RecipeVariants<typeof flexRecipe>>
