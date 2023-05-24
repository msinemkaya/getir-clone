import classNames from 'classnames';

export default function NavLink({ to, children, className }){

  const finalClasses = classNames('text-white/80 flex items-center gap-1 transition-all hover:text-white' , className)

  return(
    <a href={to} className={finalClasses}>
      {children}
    </a>
  );
}