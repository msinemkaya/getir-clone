import classNames from 'classnames';

export default function Container({ children, className }){

  const finalClasses = classNames('container flex mx-auto items-center px-6' , className)

  return(
    <div className={finalClasses}>
      {children}
    </div>
  );
}