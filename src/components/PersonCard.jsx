const PersonCard = ({ image, name, about }) => (
  <div className='text-center'>
    <div className='bg-lightgreen w-full aspect-square mx-auto rounded-4xl mb-7'>
      <img
        src={image}
        alt={name}
        className='w-full h-full object-cover rounded-4xl'
      />
    </div>
    <h3 className='mx-auto font-bitter font-bold text-lightgreen text-4xl mb-2'>
      {name}
    </h3>
    <p className='text-athena font-medium text-2xl'>{about}</p>
  </div>
);

export default PersonCard;
