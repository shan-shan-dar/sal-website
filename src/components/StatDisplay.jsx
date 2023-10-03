const Stat = ({ number, label }) => (
  <div className='text-left'>
    <p className='text-7xl font-bitter font-black text-dartmouth'>{number}</p>
    <p
      className='text-xl font-medium max-w-[15ch]'
      dangerouslySetInnerHTML={{ __html: label }}
    ></p>
  </div>
);

export default Stat;
