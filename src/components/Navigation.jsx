export default function Nav() {
  //return the navbar
  return (
    <div className='bg-white'>
      <nav className='relative mx-40 flex justify-between items-center py-6 font-normal'>
        <div>
          <span className='text-3xl font-black text-dartmouth'>
            Save a Life
          </span>
        </div>

        <div className='flex gap-12 text-md'>
          <a href='/'>Home</a>
          <a href='/team'>Team</a>
          <a href='/outreach'>Outreach</a>
          <a href='/app'>IAP CPR App</a>
          <a href='/contact'>Contact</a>
        </div>
      </nav>
    </div>
  );
}
