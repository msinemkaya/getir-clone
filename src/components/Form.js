import classNames from 'classnames';

export default function Form({ className, children }){

  const finalClasses = classNames('p-6', className)

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return(
    <form onSubmit={handleSubmit} className={finalClasses}>
      {children}
    </form>
  );
}