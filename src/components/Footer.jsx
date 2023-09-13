export default function Foot() {
  //return the navbar
  return (
    <footer className='bg-white text-dartmouth py-10'>
      <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
        {/* First Column */}
        <div>
          <h4 className='text-2xl font-bold mb-4'>Save a Life</h4>
          <p className='text-base font-light'>
            Sahyadri School KFI
            <br />
            Tiwai Hill, Rajgurunagar (Khed)
            <br />
            Maharashtra, India
            <br />
            410513
          </p>
        </div>

        {/* Second Column */}
        <div>
          <h4 className='text-lg font-medium mb-4'>Contact</h4>
          <div className='flex'>
            <p className='text-base font-light'>
              initiative.savealife@gmail.com
            </p>
          </div>

          <p className='text-base font-light'>+91 9096590376</p>
        </div>

        {/* Third Column */}
        <div>
          <h4 className='text-lg font-medium mb-4'>Quick Links</h4>
          <ul className='text-base font-light'>
            <li>
              <a href='#'>Home</a>
            </li>
            <li>
              <a href='#'>About</a>
            </li>
            <li>
              <a href='#'>Outreach</a>
            </li>
            <li>
              <a href='#'>IAP CPR App</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
