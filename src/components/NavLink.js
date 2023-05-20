export default function NavLink({ to, children, logo }){
  return(
    <a href={to} className='text-white/80 flex items-center gap-1 transition-all hover:text-white'>
      {children}
    </a>
  );
}