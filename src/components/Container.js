import classNames from 'classnames';

export default function Container({ children, className }){

  const finalClasses = classNames('container mx-auto px-6' , className)

  return(
    <div className={finalClasses}>
      {children}
    </div>
  );
}