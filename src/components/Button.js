import classNames from 'classnames'

export default function Button({
  children,
  primary,
  secondary,
  yellow,
  rounded,
  textSecondary,
  textPrimary,
  textYellow,
  className,
}) {
  const finalClasses = classNames(
    'h-12 flex items-center justify-center w-full font-semibold text-sm transition-all duration-300',
    className,
    {
      'bg-brand-yellow': yellow,
      rounded: rounded,
      'bg-brand-color': primary,
      'bg-secondary-brand-color': secondary,
      'text-secondary-brand-color': textSecondary,
      'text-brand-color': textPrimary,
      'text-brand-yellow': textYellow,

      'hover:bg-secondary-brand-color hover:text-brand-yellow':
        yellow && textSecondary,
      'hover:bg-brand-color hover:text-brand-yellow': yellow && textPrimary,
      'hover:bg-secondary-brand-color hover:text-brand-color':
        primary && textSecondary,
      'hover:bg-brand-yellow hover:text-brand-color': primary && textYellow,
      'hover:text-brand-yellow hover:bg-secondary-brand-color':
        secondary && textYellow,
      'hover:bg-brand-color hover:text-secondary-brand-color':
        secondary && textPrimary,
    }
  )

  return <button className={finalClasses}>{children}</button>
}

Button.propTypes = {
  checkBackgroundVariationValue: ({ primary, secondary, yellow }) => {
    const count = Number(!!primary) + Number(!!secondary) + Number(!!yellow)

    if (count > 1) {
      return new Error('only one type can be true as the background color')
    }
  },
  checkTextVariationValue: ({ textPrimary, textSecondary, textYellow }) => {
    const count =
      Number(!!textPrimary) + Number(!!textSecondary) + Number(!!textYellow)

    if (count > 1) {
      return new Error('only one type can be true as the text color')
    }
  },
}
