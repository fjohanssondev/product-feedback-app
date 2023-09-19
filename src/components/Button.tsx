import { forwardRef } from 'react'
import { VariantProps, cva } from 'class-variance-authority'
import clsx from 'clsx'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {}

const buttonVariants = cva(
  'btn',
  {
    variants: {
      variant: {
        primary: 'btn__primary',
        secondary: 'btn__secondary',
        tertiary: 'btn__tertiary',
        danger: 'btn__danger',
      },
      size: {
        default: 'btn__default',
        large: 'btn__large',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  }
)

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ variant, size, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={clsx(buttonVariants({ variant, size }))} {...props}
    />
  )
})

Button.displayName = 'Button'

export { Button, buttonVariants }