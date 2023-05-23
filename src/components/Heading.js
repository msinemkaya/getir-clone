import classNames from 'classnames';

export default function Heading({ as, className, children }){

   const finalClassName = classNames('text-sm font-semibold mb-3', className)

  switch (as) {
    case 'h1':
      return <h1 className={finalClassName}>{children}</h1>;
    case 'h2':
      return <h2 className={finalClassName}>{children}</h2>;
    case 'h3':
      return <h3 className={finalClassName}>{children}</h3>;
    case 'h4':
      return <h4 className={finalClassName}>{children}</h4>;
    case 'h5':
      return <h5 className={finalClassName}>{children}</h5>;
    case 'h6':
      return <h6 className={finalClassName}>{children}</h6>;
    default:
      throw Error('Unknown:' + as);
  }
}