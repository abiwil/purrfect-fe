import { FC } from 'react'

type ButtonProps = {
  text: string
  variant: 'primary' | 'secondary'
  handleOnClick?: () => void
}

const Button: FC<ButtonProps> = ({text, variant, handleOnClick}) => {
  const baseClasses = 'min-w-36 max-w-44 px-6 py-1 rounded uppercase'
  const primaryClasses = 'bg-green-700 text-white hover:bg-green-100 hover:border-green-700 hover:border-2 hover:text-green-700 md:w-1/2'
  const secondaryClasses = 'border-2 border-green-700 text-green-700 hover:bg-green-500 hover:border-green-700 hover:border-2 hover:text-white md:w-1/2'

  const classes = `${baseClasses} ${variant === 'primary' ? primaryClasses : secondaryClasses}`

  return (
    <button className={classes}
    onClick={handleOnClick}
    >{text}</button>
  )
}

export default Button
